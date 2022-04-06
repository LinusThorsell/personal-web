import React, { useEffect, useState } from 'react'
import styled from "styled-components"
import Marked from 'react-markdown'
import * as Firestore from '../firebase.js';
import { useLocation, Link } from 'react-router-dom';
import rehypeHighlight from 'rehype-highlight'
// import hljs from 'highlight.js'
import "highlight.js/styles/github-dark.css";

// import testing from './blog_posts/testing_050422.js'

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
`

const BlogPost = (props) => {

	function useQuery() {
		const { search } = useLocation();
	
		return React.useMemo(() => new URLSearchParams(search), [search]);
	}
	
	let query = useQuery().get('p');

	// console.log("Drawing: " + query);

	const [blogPost, setBlogPost] = useState('');

	useEffect(() => {
		if (!blogPost)
		{
			Firestore.getBlogPost(query).then(bp => {
				setBlogPost(bp.data())
			})
		}
	}, [query, blogPost, setBlogPost]);
	
	var to_draw = 'loading...'
	if (blogPost) {to_draw = blogPost.content}

	if (blogPost == null)
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
			<Marked rehypePlugins={[rehypeHighlight]} children={to_draw.replaceAll('+++', '  \n')} />
		</BlogContainer>
		</>
	)
}

export default BlogPost;