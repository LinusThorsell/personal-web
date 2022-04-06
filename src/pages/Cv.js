import { Component } from "react"
import styled from "styled-components"

const SideBySideContainer = styled.div`
    width: 100%;
    height: fit-content;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
`
const SideDivs = styled.div`
    width: 30em;
    height: fit-content;
`

const CategoryTitle = styled.p`
    margin: 0.3em;
    color: white;
    font-size: 1.5em;
`
const CategorySection = styled.p`
    margin: 0.3em;
    margin-left: 1em;
    color: white;
    font-size: 1.2em;
`
const UnderCategorySection = styled.p`
    margin: 0.3em;
    margin-left: 1.2em;
    color: lightgray;
    font-size: 1em;
`
const UnderCategoryHighlight = styled.p`
    margin: 0.3em;
    margin-left: 1.2em;
    color: white;
    font-size: 1em;
`

const A = styled.a`
    color: lightgray;
`
const Ul = styled.ul`
    margin: 0.5em;
`
const Li = styled.li`
    color: white;
    margin: 0.5em;
`

class Cv extends Component {
    render()
    {
        const theme = this.props.Theme;
        return (
            <>
            <SideBySideContainer theme={theme}>
                <SideDivs>
                    <CategoryTitle>Work Experience</CategoryTitle>
                    <CategorySection>Siemens 2019</CategorySection>
                    <UnderCategorySection>Summer Work Frontend Internal Website Development</UnderCategorySection>
                    <UnderCategoryHighlight>Aquired Skills:</UnderCategoryHighlight>
                    <Ul>
                        <Li>HTML/CSS/JavaScript for production environments.</Li>
                        <Li>Sharepoint Website Management.</Li>
                        <Li>Communication with multiple people inside a large company.</Li>
                    </Ul>

                    <CategoryTitle>Education</CategoryTitle>
                    <CategorySection>Curt Nicolin Gymnasiet 2017-2020</CategorySection>
                    <UnderCategorySection>Computer Science, Engineering & Design</UnderCategorySection>
                    <CategorySection>Linköping University 2020-Present</CategorySection>
                    <UnderCategorySection>Bachelor of Science in Engineering and Bachelor of Science</UnderCategorySection>

                    <CategoryTitle>Soft Skills</CategoryTitle>
                    <Ul>
                        <Li>Effective Communicator.</Li>
                        <Li>I am a Team Member and a Leader.</Li>
                        <Li>Fluent in Swedish & English.</Li>
                        <Li>Enjoy learning new technologies and workflows.</Li>
                    </Ul>

                    <CategoryTitle>Contact</CategoryTitle>
                    <UnderCategorySection>By phone: +46 765 61 21 71</UnderCategorySection>
                    <UnderCategorySection>By email: thorsell.linus@gmail.com</UnderCategorySection>
                </SideDivs>
                <SideDivs>
                    <CategoryTitle>Personal Projects</CategoryTitle>
                    <CategorySection>Personal Website - <A href="https://github.com/linusthorsell/personal-web">Source Code</A></CategorySection>
                    <UnderCategorySection>Website to host my Technological Blog & my CV</UnderCategorySection>
                    <UnderCategoryHighlight>Aquired Skills:</UnderCategoryHighlight>
                    <Ul>
                        <Li>ReactJS, React-Router, Styled-Components, react-markdown, Firebase Hosting, Firebase Storage, Firebase Firestore</Li>
                        <Li>UI/UX Design, Mobile first development, Colorblind friendly design.</Li>
                    </Ul>

                    <CategorySection>Tetris in Assembler - <A href="https://github.com/linusthorsell/8-bit-tetris-asm">Source Code</A></CategorySection>
                    <UnderCategorySection>Duo project to rebuild classical Tetris on custom hardware.</UnderCategorySection>
                    <UnderCategoryHighlight>Aquired Skills:</UnderCategoryHighlight>
                    <Ul>
                        <Li>How to effectively read hardware specificationsheets.</Li>
                        <Li>8Bit Assembler programming.</Li>
                        <Li>Great understanding of how high level programs work once compiled.</Li>
                        <Li>Resource management and planning on critically low resource systems.</Li>
                    </Ul>

                    {/* <CategorySection>Social Media Clone - <A href="https://github.com/linusthorsell/">Source Code</A></CategorySection>
                    <UnderCategorySection>SocialXetone - Like twitter but not really.</UnderCategorySection>
                    <UnderCategoryHighlight>Aquired Skills:</UnderCategoryHighlight>
                    <Ul>
                        <Li>My first 'large' scale ReactJS project.</Li>
                        <Li>Followed industry 'best' practices for ReactJS.</Li>
                        <Li>Backend is integrated with the Firebase Cloud system.</Li>
                    </Ul> */}
                    <br></br>
                    <br></br>
                    <br></br>
                </SideDivs>
            </SideBySideContainer>
            </>
        )
    }
}

export default Cv;