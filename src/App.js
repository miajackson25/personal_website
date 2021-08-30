import React from 'react';
import './App.css';
import Projects from './projects.js';
import Art from './art.js';
import Me from './images/me.png'

import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link
} from "react-router-dom";


export default function App() {
  return (
  
    <Router>
      <div>
        <nav className="search-list">
        <div>
          <Link className="topic home" to="/">home</Link>
        </div>
        <div>
          <Link className="topic project" to="/projects">projects</Link>
        </div>
        <div>
          <Link className="topic art" to="/art">art</Link>
        </div>
        <div>
          <Link  className="topic contact" to="/contact">contact</Link>
        </div>
        </nav>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/projects">
            <Projects />
          </Route>
          <Route path="/art">
            <Art />
          </Route>
          <Route path="/writing">
            <Writing />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
          <Route path="/personal_website">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>

  )
}


function Home() {
  return (
    <div className="App">
    <div className="name-div">
    <p className="name"><Link to="/" style={{"color": "black"}}>mia jackson</Link></p>
      <div className="contact-div">
        <p className="contact">mia.jackson@yale.edu</p>
      </div>
    </div>
      
        <img className="photo" src={Me} alt="me"/>
        <div className="description">
          <p>Hi, I'm Mia!</p>
          <p>I'm a senior at Yale studying applied mathematics and originally from Richmond, VA. During college, I've worked on projects at the intersection of healthcare and technology. I'm also passionate about education and have been a teaching assistant for middle and high schoolers, undergraduates, and the formerly incarcerated.</p>
          <p>Talk to me about anything related to criminal justice, education, healthcare or tech!</p>
          <p>In my free time, you can find me reading (especially about urban studies), writing, painting, and trying new foods.</p>

        </div>

    </div>
  )
}


function Contact() {
  return (
    <div className="App">
    <div className="name-div">
    <p className="name"><Link to="/" style={{"color": "black"}}>mia jackson</Link></p>
      <div className="contact-div">
        <p className="contact"><a href="mailto:mia.jackson@yale.edu" className="name-contact">mia.jackson@yale.edu</a></p>
      </div>
    </div>
    <div className="contact-description-div">
      <img className="arrow-to-email" src={require('./images/arrow2.png')} alt="arrow"/>
        <p className="contact-description">Feel free to reach out over email or <a href="https://www.linkedin.com/in/mia-jackson/" target="_blank" rel="noopener noreferrer">LinkedIn.</a> :)</p>
    </div>
  </div>
  )
}


function Writing() {
  return (
    <div className="App">
      <div className="name-div">
        <p className="name">mia jackson</p>
        <div className="contact-div">
          <p className="contact">mia.jackson@yale.edu</p>
        </div>
      </div>
  </div>
  )
}




/*
        <div>
          <Link className="topic writing" to="/writing">writing</Link>
        </div>

*/