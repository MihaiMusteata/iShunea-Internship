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
            <Route path="/iShunea-React/" Component={Home} />
            <Route path="/iShunea-React/home" Component={Home} />
            <Route path="/iShunea-React/about" Component={About} />
            <Route path="/iShunea-React/careers" Component={Careers} />
            <Route path="/iShunea-React/job" Component={Job} />
            <Route path="/iShunea-React/services" Component={Services} />
            <Route path="/iShunea-React/blog" Component={Blog} />
            <Route path="/iShunea-React/article" Component={Article} />
            <Route path="/iShunea-React/work" Component={Work} />
            <Route path="/iShunea-React/service" Component={Service} />
            <Route path="/iShunea-React/works" Component={Works} />
            <Route path="/iShunea-React/contact" Component={Contact} />
            <Route path='/iShunea-React/terms' Component={TermsAndConditions} />
            <Route path="*" Component={NotFound} />
            <Route path='/iShunea-React/modal' Component={ModalTesting} />
          </Routes>
        </Router>
        <Footer />
      </div>
    </div>
  );
}

export default App;
