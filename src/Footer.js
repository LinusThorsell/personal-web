import { Component } from "react"
import styled from "styled-components"

const ContainerFoot = styled.div`
    height: 2em;
    width: 100%;
    background-color: ${props => props.theme.darker_background};
    text-align: left;
    padding: 0;
    margin-top:auto;
    display: flex;
    justify-content: center;
    align-items: center;
`
const TextFooter = styled.h1`
    padding: 0.2em;
    margin: 0;
    font-size: 1em;
    text-align: center;
    color: ${props => props.theme.secondary_text};
`

class Footer extends Component {
    render()
    {
        const theme = this.props.Theme;
        return (
            <ContainerFoot theme={theme}>
                <TextFooter theme={theme}>
                    Copyright text and stuff like that. Placeholder Inc.
                </TextFooter>
            </ContainerFoot>
        )
    }
}

export default Footer;