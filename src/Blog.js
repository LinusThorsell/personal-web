import { Component } from "react"
import styled from "styled-components"

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
  padding-top: 0.3em;
  padding-bottom: 0.3em;
  border-radius: 1em;
  max-width: 35em;
`
const BlogTitle = styled.h1`
  color: ${props => props.theme.primary_text};;
  margin: 0;
  padding-left: 0.3em;
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
const BlogImage = styled.img`
  width: 10em;
  height: fit-content;
  border-radius: 1em;
  padding-right: 0.3em;
`
const BlogButton = styled.button`
  float: left;
  width: fit-content;
  height: fit-content;
  cursor: pointer;
  background-color: ${props => props.theme.foreground};
  color: ${props => props.theme.primary_text};
  border: 0;
  border-radius 1em;
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

class Blog extends Component {
  render()
    {
      
      const theme = this.props.Theme;

      let BlogPostPreview = [
      {
        title: "Tetris Game",
        categories: ['Team Project', '8bit', 'Assembler', 'Hardware Integration', 'Open Source', 'Written Paper Available'],
        main_image: "https://i.imgur.com/ZNkLKWP.png",
        buttons: [
                {Label: 'Read More...', Link: 'https://github.com/LinusThorsell/8-bit-tetris-asm'}, 
                {Label: 'Source Code', Link: 'https://github.com/LinusThorsell/8-bit-tetris-asm'},
                {Label: 'Writeup', Link: 'https://github.com/LinusThorsell/8-bit-tetris-asm'},                
              ],
      },
      {
        title: "Personal Website",
        categories: ['Personal Project', 'ReactJS', 'styled-components', 'Firebase Database', 'Firebase Hosting', 'Open Source'],
        main_image: "https://i.imgur.com/ZNkLKWP.png",
        buttons: [
          {Label: 'Read More...', Link: 'https://github.com/LinusThorsell/8-bit-tetris-asm'}, 
          {Label: 'Source Code', Link: 'https://github.com/LinusThorsell/8-bit-tetris-asm'},
        ],
      },
      {
        title: "Personal Website",
        categories: ['Personal Project', 'ReactJS', 'styled-components', 'Firebase Database', 'Firebase Hosting', 'Open Source'],
        main_image: "https://i.imgur.com/ZNkLKWP.png",
        buttons: [
          {Label: 'Read More...', Link: 'https://github.com/LinusThorsell/8-bit-tetris-asm'}, 
          {Label: 'Source Code', Link: 'https://github.com/LinusThorsell/8-bit-tetris-asm'},
        ],
      },
      {
        title: "Personal Website",
        categories: ['Personal Project', 'ReactJS', 'styled-components', 'Firebase Database', 'Firebase Hosting', 'Open Source'],
        main_image: "https://i.imgur.com/ZNkLKWP.png",
        buttons: [
          {Label: 'Read More...', Link: 'https://github.com/LinusThorsell/8-bit-tetris-asm'}, 
          {Label: 'Source Code', Link: 'https://github.com/LinusThorsell/8-bit-tetris-asm'},
        ],
      },
      {
        title: "Personal Website",
        categories: ['Personal Project', 'ReactJS', 'styled-components', 'Firebase Database', 'Firebase Hosting', 'Open Source'],
        main_image: "https://i.imgur.com/ZNkLKWP.png",
        buttons: [
          {Label: 'Read More...', Link: 'https://github.com/LinusThorsell/8-bit-tetris-asm'}, 
          {Label: 'Source Code', Link: 'https://github.com/LinusThorsell/8-bit-tetris-asm'},
        ],
      },
      {
        title: "Personal Website",
        categories: ['Personal Project', 'ReactJS', 'styled-components', 'Firebase Database', 'Firebase Hosting', 'Open Source'],
        main_image: "https://i.imgur.com/ZNkLKWP.png",
        buttons: [
          {Label: 'Read More...', Link: 'https://github.com/LinusThorsell/8-bit-tetris-asm'}, 
          {Label: 'Source Code', Link: 'https://github.com/LinusThorsell/8-bit-tetris-asm'},
        ],
      },
      {
        title: "Personal Website",
        categories: ['Personal Project', 'ReactJS', 'styled-components', 'Firebase Database', 'Firebase Hosting', 'Open Source'],
        main_image: "https://i.imgur.com/ZNkLKWP.png",
        buttons: [
          {Label: 'Read More...', Link: 'https://github.com/LinusThorsell/8-bit-tetris-asm'}, 
          {Label: 'Source Code', Link: 'https://github.com/LinusThorsell/8-bit-tetris-asm'},
        ],
      },
      {
        title: "Personal Website",
        categories: ['Personal Project', 'ReactJS', 'styled-components', 'Firebase Database', 'Firebase Hosting', 'Open Source'],
        main_image: "https://i.imgur.com/ZNkLKWP.png",
        buttons: [
          {Label: 'Read More...', Link: 'https://github.com/LinusThorsell/8-bit-tetris-asm'}, 
          {Label: 'Source Code', Link: 'https://github.com/LinusThorsell/8-bit-tetris-asm'},
        ],
      },
      {
        title: "Personal Website",
        categories: ['Personal Project', 'ReactJS', 'styled-components', 'Firebase Database', 'Firebase Hosting', 'Open Source'],
        main_image: "https://i.imgur.com/ZNkLKWP.png",
        buttons: [
          {Label: 'Read More...', Link: 'https://github.com/LinusThorsell/8-bit-tetris-asm'}, 
          {Label: 'Source Code', Link: 'https://github.com/LinusThorsell/8-bit-tetris-asm'},
        ],
      },
      {
        title: "Personal Website",
        categories: ['Personal Project', 'ReactJS', 'styled-components', 'Firebase Database', 'Firebase Hosting', 'Open Source'],
        main_image: "https://i.imgur.com/ZNkLKWP.png",
        buttons: [
          {Label: 'Read More...', Link: 'https://github.com/LinusThorsell/8-bit-tetris-asm'}, 
          {Label: 'Source Code', Link: 'https://github.com/LinusThorsell/8-bit-tetris-asm'},
        ],
      },

    ]


        return (
            <ContainerBlog theme={theme}>
              {BlogPostPreview.map(data => (
                <BlogPost theme={theme}>
                <ContainerImgTags>
                <div>
                <div>
                <BlogTitle theme={theme}> {data.title} </BlogTitle> 
                <BlogUnderline theme={theme}>{data.categories.map(category => (<>{category}, </>))} </BlogUnderline> 
                </div>
                <ContainerButton>
                {data.buttons.map(button => (<><a target="_blank" rel="noreferrer" href={button.Link}><BlogButton theme={theme}> {button.Label} </BlogButton></a></>))}
                </ContainerButton>
                </div>
                <BlogImage src={data.main_image} />
                </ContainerImgTags>
              </BlogPost>  
              ))}
          </ ContainerBlog>
        )
    }
}

export default Blog;