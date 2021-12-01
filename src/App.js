import { GlobalStyle } from './style/GlobalStyle';
import { ThemeProvider } from 'styled-components';
import theme from './style/theme';

import Header from './components/header/Header';
import Projects from './components/projects/Projects';
import Home from './components/home/Home';
import About from './components/about/About';
import Footer from './components/footer/Footer';

function App () {
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Header />
        <Home />
        <Projects />
        <About />
        <Footer />
      </ThemeProvider>
    </>
  );
}

export default App;
