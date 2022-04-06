import { Component } from "react"
import styled from "styled-components"

const ContainerFoot = styled.div`
    height: 2.5em;
    width: 100%;
    background-color: ${props => props.theme.darker_background};
    padding: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    bottom: 0;
    position: fixed;
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
                    Designed, deployed and maintained by Linus Thorsell
                </TextFooter>
            </ContainerFoot>
        )
    }
}

export default Footer;