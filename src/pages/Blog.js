import { useState, useEffect } from "react"
import styled from "styled-components"
//import * as Firestore from '../firebase.js'
import { Link } from 'react-router-dom'
import { storage, getRef } from '../firebase.js';
import { getDownloadURL, listAll } from 'firebase/storage'
import axios from 'axios'

const ContainerBlog = styled.div`
  width: 100%;
  overflow-y: scroll;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: flex-start;

  scrollbar-color: ${props => props.theme.foreground};;
  scrollbar-width: 0.8em;
  &::-webkit-scrollbar {
    width: 0.8em;
  }
  &::-webkit-scrollbar-track {
    box-shadow: inset 0 0 0.3em ${props => props.theme.foreground};
    border-radius: 0.3em;
  }
  &::-webkit-scrollbar-thumb {
    background: ${props => props.theme.foreground};
    border-radius: 0.3em;
  }
`
const BlogPost = styled.div`
  background-color: ${props => props.theme.foreground};
  width: 100%;
  height: fit-content;
  text-align: center;
  margin: 0.5em;
  padding-top: 0.8em;
  padding-bottom: 0.8em;
  border-radius: 0.8em;
  padding-left: 1em;
  padding-right: 1em;
  max-width: 35em;
`
const BlogTitle = styled.h1`
  color: ${props => props.theme.primary_text};;
  margin: 0;
  margin-bottom: 0.3em;
  text-align: left;
  font-size: 2em;
`
const BlogUnderline = styled.h2`
  color: ${props => props.theme.secondary_text};
  margin: 0;
  font-size: 1em;
  padding-bottom: 1vh;
  padding-left: 0.7em;
  text-align: left;
  
  a {
    color: black;
  }
  a:hover {
  }
`

const Time = styled.h2`
  color: ${props => props.theme.secondary_text};
  margin: 0;
  font-size: 0.8em;
  padding-bottom: 1vh;
  padding-left: 0.85em;
  text-align: left;
  
  a {
    color: black;
  }
  a:hover {
  }
`

const BlogImage = styled.img`
  width: 10em;
  height: 10em;
  border-radius: 1em;
  margin-left: 1em;
`
const BlogButton = styled.button`
  float: left;
  width: fit-content;
  height: fit-content;
  cursor: pointer;
  background-color: rgba(40, 40, 40, 255);
  color: ${props => props.theme.primary_text};
  border: 0;
  border-radius 0.6em;
  margin-left: 0.1em;
  margin-right: 0.1em;
  font-size: 1em;
  padding: 0.5em;
  text-decoration: underline;

  :hover {
    transition: color: .3s linear;
    color: ${props => props.theme.primary_button_background};
  }
  transition: all .3s ease-out;
`
const ContainerImgTags = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`
const ContainerButton = styled.div`
  margin-left: 0.5em;
`

const Blog = (props) => {
      
    const theme = props.Theme;

    let BlogPostPreview = []
    
    var storageRef = getRef('blogposts')

    // Contains the blogposts.
    const [blogPostIndex, setBlogPostIndex] = useState([])
    // Contains the expected amount of blogposts.
    const [expectedLength, setExpectedLength] = useState(-1)

    const fetchDataFromCloud = () => {
        // Only proceed if we haven't already fetched the data
        if (expectedLength === -1) {
            // Use the reference to the storage bucket containing 
            // all our blogposts to fetch them into an array.
            listAll(storageRef).then(function(result) {
                // Once we have fetched the list of blogposts,
                // we can set our expected amount of posts.
                setExpectedLength(result.items.length)
                // We then loop through the posts
                result.items.forEach(function(blogRef) {
                    // We get the URL of the blog our reference is
                    // pointing to.
                    getDownloadURL(blogRef).then(function(url) {
                        // Once we have the URL, we get the blog via
                        // a get request using axios.
                        axios.get(url).then((response) => {
                            // We then add the blogpost to the blogpostindex
                            setBlogPostIndex(oldarray => [...oldarray, response.data])
                        })
                    })
                    
                });

            }).catch(function(error) {
                // If we have any errors fetching the list from
                // the storage bucket we print it out here.
                console.log(error)
            })
        }
    }

    useEffect(() => {
        fetchDataFromCloud()
    })

    if (expectedLength !== blogPostIndex.length) // If we have not fetched data yet
    {
        return (<>Loading...</>)
    }
    
    blogPostIndex.forEach((element) => {
        let parsed_object = element.split('\n').shift()
        parsed_object = JSON.parse(parsed_object)
        BlogPostPreview.push({
            title: parsed_object.title,
            date: parsed_object.date, //new Date(element.date.seconds*1000),
            description: parsed_object.description, //element.description,
            preview_image: parsed_object.preview_image, //element.preview_image,
            button: {Label: 'Read post...', Link: '/blogpost?p=' + parsed_object.id},
        });
    });

    console.log (BlogPostPreview)

    console.log(blogPostIndex.length)

    return (
    <>
        {console.log('rendering...')}
        <ContainerBlog theme={theme}>
          {BlogPostPreview.map(data => (
            <BlogPost theme={theme} key={data.title}>
            <ContainerImgTags>
            <div>
            <div>
            <BlogTitle theme={theme}> {data.title} </BlogTitle> 
            <Time theme={theme}> {data.date/*.toDateString()*/} </Time> 
            <BlogUnderline theme={theme}> {data.description} </BlogUnderline> 
            </div>
            <ContainerButton>
            <Link to={data.button.Link}><BlogButton theme={theme}> {data.button.Label} </BlogButton></Link>
            </ContainerButton>
            </div>
            <BlogImage src={data.preview_image} />
            </ContainerImgTags>
          </BlogPost>  
        ))}
      </ ContainerBlog>
    </>
    )
}

export default Blog;
