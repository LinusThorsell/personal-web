import { Component } from "react"
import styled from "styled-components"
import { Link } from "react-router-dom"

const ContainerHome = styled.div`
    width: 100%;
    height: 80%;
    display: flex;
    align-items: center;
    justify-content: center;
`
const AlignItemsSideBySideDiv = styled.div`
    display: flex;
    justify-content: right;
`
const ScreamHi = styled.h1`
    margin: 0;
    padding: 0;
    font-size: 3em;
    color: ${props => props.theme.primary_text};
    float: left;
`
const ScreamHigher = styled.h1`
    margin: 0;
    padding: 0;
    font-size: 4em;
    color: ${props => props.theme.primary_text};
`
const PageTitle = styled.h1`
    margin: 0;
    padding: 0;
    font-size: 3em;
    color: ${props => props.theme.primary_text};
    padding-left: 2vw;
`
const PageDescription = styled.h2`
    margin: 0;
    padding: 0;
    padding-left: 2vw;
    color: ${props => props.theme.secondary_text};
`
const NavButton = styled.button`
  width: fit-content;
  height: fit-content;
  cursor: pointer;
  background-color: ${props => props.theme.foreground};
  color: ${props => props.theme.primary_text};
  border: 0;
  border-radius: 1em 0.5em;
  margin-left: 0.1em;
  margin-right: 0.1em;
  font-size: 1.6em;
  padding: 0.5em;
  margin-top: 1em;
  text-decoration: underline;

  :hover {
    transition: color: .3s linear;
    color: ${props => props.theme.primary_button_background};
  }
  transition: all .3s ease-out;
`
const EmojiField = styled.span`
  font-size: 3em;
`

class Home extends Component {
    render()
    {
        const theme = this.props.Theme;
        return (
            <ContainerHome theme={theme}>
                <div>
                <ScreamHi theme={theme}>Welcome!</ScreamHi> <EmojiField>👋</EmojiField>
                <AlignItemsSideBySideDiv>
                <div>
                    <ScreamHigher theme={theme}>To:</ScreamHigher>
                </div>
                <div>
                    <PageTitle theme={theme}>Linus Thorsell's </PageTitle>
                    <PageDescription theme={theme}>Personal website.</PageDescription>
                </div>
                </AlignItemsSideBySideDiv>
                <AlignItemsSideBySideDiv>
                    <a href='https://github.com/LinusThorsell' target="_blank" rel="noreferrer"><NavButton theme={theme}>GitHub</NavButton></a>
                    <Link to='/blog'><NavButton theme={theme}>Blog</NavButton></Link>
                    <Link to='/cv'><NavButton theme={theme}>CV</NavButton></Link>
                </AlignItemsSideBySideDiv>
                </div>

            </ContainerHome>
        )
    }
}

export default Home;