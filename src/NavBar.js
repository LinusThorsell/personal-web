import { Component } from "react"
import styled from "styled-components"

const ContainerBar = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 3em;
    width: 100%;
    background-color: ${props => props.theme.darker_background};
    text-align: left;
`
const ButtonNavigation = styled.button`
    width: fit-content;
    padding: 0;
    padding-left: 0.2em;
    padding-right: 0.2em;
    height: 2em;
    color: ${props => props.theme.primary_button_color};
    background-color: ${props => props.theme.darker_background};
    margin-top: 0.1em;
    margin-bottom: 0.1em;
    margin-left: 0.2em;
    margin-right: 0.2em;
    cursor: pointer;
    border: 0;
    border-radius: 0.4em;
    font-size: 1.2em;
    user-select: none;
    text-decoration: underline;

    :hover {
        transition: color: .3s linear;
        color: ${props => props.theme.primary_button_background};
    }
    transition: all .3s ease-out;
`
const PageTitle = styled.h1`
    height: fit-content;
    font-size: 1.5em;
    padding: 0;
    margin: 0;
    margin-left: 0.3em;
    color: ${props => props.theme.primary_text};
`

class NavBar extends Component {
    render()
    {
        const theme = this.props.Theme;
        return (
            <ContainerBar theme={theme}>
                <PageTitle theme={theme}>Linus Thorsell</PageTitle>
                <div>
                <ButtonNavigation theme={theme}>Home</ButtonNavigation>
                <ButtonNavigation theme={theme}>Blog</ButtonNavigation>
                <ButtonNavigation theme={theme}>CV</ButtonNavigation>
                </div>
            </ContainerBar>
        )
    }
}

export default NavBar;