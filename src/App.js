import { GlobalStyle } from './style/GlobalStyle';
import Header from './components/header/Header';
import Projects from './components/projects/Projects';
import Home from './components/home/Home';
import About from './components/about/About';
import Footer from './components/footer/Footer';

function App () {
  return (
    <>
      <GlobalStyle />
      <Header />
      <Home />
      <Projects />
      <About />
      <Footer />
    </>
  );
}

export default App;
