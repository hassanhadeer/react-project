
import React from "react";
import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from './components/Header.js';
import SideNav from './components/SideNav.js';
import TopNav from './components/TopNav';
import Home from './components/Home';
import About from './components/About';
import Careers from './components/Careers';
import Contact from './components/Contact';
import Design from './components/services/Design';
import Managment from './components/services/Managment';
import Graphic from './components/services/Graphic';
import Domain from './components/services/Domain';
import Portfolio from './components/services/Portfolio';
import Media from './components/services/Media';
import Marketing from './components/services/Marketing';
import Certificate from './components/services/Certificate';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <Router>
        <TopNav />
        <SideNav />
          <Switch>
            <Route path="/Home" exact component={() => <Home />} />
            <Route path="/About" exact component={() => <About />} />
            <Route path="/Careers" exact component={() => <Careers />} />
            <Route path="/Contact" exact component={() => <Contact />} />
            <Route path="/services/Design" exact component={() => <Design />} />
            <Route path="/services/Managment" exact component={() => <Managment />} />
            <Route path="/services/Graphic" exact component={() => <Graphic />} />
            <Route path="/services/Domain" exact component={() => <Domain />} />
            <Route path="/services/Media" exact component={() => <Media />} />
            <Route path="/services/Marketing" exact component={() => <Marketing />} />
            <Route path="/services/Certificate" exact component={() => <Certificate />} />
            <Route path="/services/Portfolio" exact component={() => <Portfolio />} />
          </Switch>
          <Footer />
      </Router>
    </div>
  );
}

export default App;
