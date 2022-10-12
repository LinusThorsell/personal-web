import React, { useState } from 'react'
import { getDownloadURL } from 'firebase/storage'
import styled from "styled-components"
import Marked from 'react-markdown'
import { getRef } from '../firebase.js';
import { useLocation, Link } from 'react-router-dom';
import rehypeHighlight from 'rehype-highlight'
import remarkgfm from 'remark-gfm'
// import hljs from 'highlight.js'
import "highlight.js/styles/github-dark.css";
import axios from 'axios'

const BlogContainer = styled.div`
	height: 100%;
	width: 90%;
	color: white;
	overflow: scroll;
	padding-bottom: 4em;
	padding-left: 5%;
	padding-right: 5%;
	overflow-x: hidden;


	a {
		color: gray;
	}

    table {
        border: 1px solid gray;
        border-collapse: collapse;
    }
    th,tr {
        border: 1px solid gray;
        text-align: left;
        padding: 0.5em;
    }
    td {
        border: 1px solid gray;
        padding: 0.5em;
    }
    img {
        max-width: 30em;
        width: 100%;
        height: auto;
    }
`

const BlogPost = (props) => {
    console.log("Loadeli-doo")

    const [error, setError] = useState(null)
    const [markdown, setMarkdown] = useState('Loading...')
    
	function useQuery() {
		const { search } = useLocation();
	
		return React.useMemo(() => new URLSearchParams(search), [search]);
	}
	
	let query = useQuery().get('p');
    
    if (error == null) {
        var storageRef = getRef("blogposts/" + query + ".md")
        downloadMarkdown(storageRef)
    }

    function downloadMarkdown(ref_to_markdown) {
        getDownloadURL(ref_to_markdown).then(function(url) {
            axios.get(url).then((response) => {
                setMarkdown(response.data)
            })
        }).catch(function(error) {
            // Handle any errors
            console.log("error: could not find blogpost: " + query)
            setError(error)
        });
    }

	if (error != null)
	{
		return (<>
		<BlogContainer>
			Oops, can not find that post! Go to <Link to='/blog'>all blogs</Link>? <br></br>
			[Error:] 404 post not found on database. 
		</BlogContainer>
		</>)
	}

	return (
		<>
		<BlogContainer>
			{/* {console.log(blogPost.content)} */}
			<Marked rehypePlugins={[rehypeHighlight]} remarkPlugins={[remarkgfm]} children={markdown.substring(markdown.indexOf('\n') + 1)} />
		</BlogContainer>
		</>
	)
}

export default BlogPost;
