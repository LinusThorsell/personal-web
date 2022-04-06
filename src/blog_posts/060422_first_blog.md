# New blog system!+++

This is the first post that is (hopefully, if everything works out) going to be the first one i publish via my new blogging system designed to use the markdown language for formatting. And this blog will be a quick overview of how i designed it and how it works on a mid-to-high level.+++

# First out like always, what is the tech stack?+++
Since it is running on my personal website it is using the same [stack](https://github.com/LinusThorsell/personal-web), but the main parts that it uses to do the blog fetching, parsing and display are the following:+++

* [react-markdown](https://github.com/remarkjs/react-markdown): Parse raw markdown to html content and generate a react-component from the resulting html code.+++
* [Firebase Firestore](https://firebase.google.com/products/firestore): Stores the raw markdown, which means it will update with new posts the second they get uploaded to their servers. Fetched via react-hooks.+++

Simple as that really!+++

# Code Snippets!+++

## firebase.js+++
### getBlogPost(*string* blogpost)+++

```js+++
// Fetch blogpost from collection 'blogposts' with name blogpost+++
export const getBlogPost = (blogpost) => {+++
    const blogPostRef = doc(db, 'blogposts', blogpost)+++
    return getDoc(blogPostRef);+++
};+++
```+++

### getBlogIndex(*string* coll_id)+++

```js+++
// Fetch all blogposts from collection 'coll_id', add to array.+++
export const getBlogIndex = async (coll_id) => {+++
    const blogSnapshot = await getDocs(collection(db, coll_id));+++
    const blogList= blogSnapshot.docs.map((doc) => doc.data());+++
    return blogList;+++
};+++
```+++

## Blog.js+++
### How to fetch all blogposts in a certain collection+++
```javascript+++
// setup state for the blogposts+++
const [blogPostIndex, setBlogPostIndex] = useState(null)+++

// setup hook to fetch the blogposts using firestore.js getBlogIndex+++
useEffect(() => {+++
    if (!blogPostIndex)+++
    {   +++
        // Request data and wait for promise to fullfill.+++
        Firestore.getBlogIndex('blogposts').then(bp => {+++
            //Promise is fullfilled, update the array.+++
            setBlogPostIndex(bp)+++
        })+++
    }+++
    //Capture the state.+++
}, [blogPostIndex, setBlogPostIndex]);+++

// While we wait for our promise to pass, we have to display loading... or similar to avoid rendering undefined object.+++
if (!blogPostIndex)+++
{+++
    return (<>Loading...</>)+++
}+++
```+++

## BlogPost.js+++
### Get requested document path from URL +++
### Example: URL/blogpost?p=requested_document => requested_document.+++

```javascript+++
// Define hook.+++
function useQuery() {+++
    // get location using react-router-dom useLocation()+++
    const { search } = useLocation();+++

    // return the URL parameters(all of them)+++
    return React.useMemo(() => new URLSearchParams(search), [search]);+++
}+++

// only catch the relevant parameter p.+++
let query = useQuery().get('p'); // will contain requested_document from example.+++
```+++

### Fetch specific blogpost using parameter query = p.+++

```javascript+++
// Setup state+++
const [blogPost, setBlogPost] = useState('');+++

// Setup effect hook.+++
useEffect(() => {+++
    if (!blogPost) // check if we already fetched the blogpost+++
    { // if not then continue+++
        // Call firebase.js getBlogPost function and get promise.+++
        Firestore.getBlogPost(query).then(bp => {+++
            // return blogpost data when promise resolves+++
            setBlogPost(bp.data())+++
        })+++
    }+++
    // capture the input query (=p) and the state.+++
}, [query, blogPost, setBlogPost]);+++
```+++

### Render markdown as html safely, using react-markdown, and error detection.+++
```javascript+++
// define placeholder to draw while we wait for firebase firestore to deliver content.+++
var to_draw = 'loading...'+++
// once we have gotten our post, we override the placeholder with the content field from the entry in firestore.+++
if (blogPost) {to_draw = blogPost.content}+++

// if we did not manage to find the blogpost in the database (incorrect URL, etc.) then display error.+++
if (blogPost == null)+++
{
    // return renderable error message.+++
    return (<>+++
    <BlogContainer>+++
        Oops, can not find that post! Go to <Link to='/blog'>all blogs</Link>? <br></br>+++
        [Error:] 404 post not found on database. +++
    </BlogContainer>+++
    </>)+++
}+++

// if we successfully fetched the blogpost we return the drawable html for the blog. We pass the raw markdown to Marked.+++
return (+++
    <>+++
    <BlogContainer>+++
        <Marked children={to_draw.replaceAll('\+\+\+', '  \n')} />+++
    </BlogContainer>+++
    </>+++
)+++
// NOTE: The replaceall for plusplusplus to space space \n is done since firestore does not store spaces in the format we want for the markdown plugin.+++
// So when the markdown is written we run it through a program that replace all normal line-end's with plusplusplus to fix the issue.+++
```+++

# Conclusion+++
This project has been in the workings for quite a while and I am excited to finally have gotten the time to finish it. Hopefully this blog shows up nicely now, so I don't have to spend another 20 hours debugging code :)+++

# Thanks for reading!+++
### - Linus Thorsell, Full-stack Developer and Certified Tech-nerd.+++