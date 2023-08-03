import './App.css';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ChakraProvider } from "@chakra-ui/react";

import NavBar from './components/NavBar';
import NavBarWhite from './components/NavBarWhite';
import Home from './components/Home';
import Footer from './components/Footer';
import About from './components/About';
import Job from './components/Job';
import Careers from './components/Careers';
import Services from './components/Services';
import Blog from './components/Blog';
import Work from './components/Work';
import Article from './components/Article';
import Service from './components/Service';
import Works from './components/Works';
import Contact from './components/Contact';
import TermsAndConditions from './components/TermsAndConditions';
import NotFound from './components/NotFound';

import 'bootstrap/dist/css/bootstrap.min.css';
import ModalTesting from './components/ModalTesting';
function App() {
  const isSpecificPath = (paths) => paths.includes(window.location.pathname);
  const transpaerntNavBar= ['/home', '/', '/work'];

  return (
    <div className="App">
      <div className="home-bg" id='background-img'>
        <Router>
          {isSpecificPath(transpaerntNavBar) ? <NavBar /> : <NavBarWhite />}
          <Routes>
            <Route path="/" Component={Home} />
            <Route path="/home" Component={Home} />
            <Route path="/about" Component={About} />
            <Route path="/careers" Component={Careers} />
            <Route path="/job" Component={Job} />
            <Route path="/services" Component={Services} />
            <Route path="/blog" Component={Blog} />
            <Route path="/article" Component={Article} />
            <Route path="/work" Component={Work} />
            <Route path="/service" Component={Service} />
            <Route path="/works" Component={Works} />
            <Route path="/contact" Component={Contact} />
            <Route path='/terms' Component={TermsAndConditions} />
            <Route path="*" Component={NotFound} />
            <Route path='/modal' Component={ModalTesting} />
          </Routes>
        </Router>
        <Footer />
      </div>
    </div>
  );
}

export default App;
