import styled, { createGlobalStyle } from 'styled-components';
import Blog from './Blog';
import NavBar from './NavBar';
import Footer from './Footer';
import Home from './Home';
import Cv from './Cv';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

const GlobalStyle = createGlobalStyle`
  body {
    background-color: ${props => props.Theme.background};
  }
`
const ContainerApp = styled.div`
  background-color: ${props => props.Theme.background};
  width: 100%;
  height: 100vh;
  margin: 0;
  display: flex;
  flex-direction: column;
`
const Theme = {
  background: 'rgba(40, 40, 40, 1)',
  darker_background: 'rgba(20, 20, 20, 1)',
  foreground: 'rgba(20, 20, 20, 1)',
  primary_text: 'rgba(255, 255, 255, 1)',
  secondary_text: 'rgba(150, 150, 150, 1)',
  primary_button_background: 'rgba(130, 130, 130, 1)',
  secondary_button_background: 'black',
  primary_button_color: 'white',
  secondary_button_color: 'black',
}

function App() {

  return (
    <>
    <GlobalStyle Theme={Theme}/>
    <ContainerApp Theme={Theme} className="App">
      <BrowserRouter>
      <NavBar Theme={Theme} />
        <Routes>
          <Route path="/" element={<Home Theme={Theme} />} />
          <Route path="/blog" element={<Blog Theme={Theme} />} />
          <Route path="/cv" element={<Cv Theme={Theme} />} />
        </Routes>
      </BrowserRouter>
      <Footer Theme={Theme} />
    </ContainerApp>
    </>
  );
}

export default App;
