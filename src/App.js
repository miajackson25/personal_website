/* To Updated the App Online:
Deploy using Vercel: https://blog.logrocket.com/8-ways-to-deploy-a-react-app-for-free/

- !!!make sure git repo has been updated with most recent version!!!
- run "vercel --prod"


if git branch problem happens again:
git checkout upstreambranch  
git branch master upstreambranch -f    
git checkout master  
git push origin master -f
*/

import React from 'react';
import './App.css';
import Projects from './projects.js';
import Art from './art.js';
import Me from './images/me.png'
import Typist from 'react-typist';


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
        <div className="div-search-list">
          <div className="home-div">
            <Link className="topic home" to="/">home</Link>
          </div>
          <div>
            <Link className="topic writing" to="/writing">writing</Link>
          </div>
          <div>
            <Link className="topic project" to="/projects">projects</Link>
          </div>
          <div>
            <Link  className="topic contact-link" to="/contact">contact</Link>
          </div>
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

    <div className="intro-page-together">
        <img className="photo" src={Me} alt="me"/>
          <div className="description">
            <div className="mia-intro">
            <Typist cursor={{blink:true}}>Hi! <Typist.Delay ms={600} /> I'm Mia.
            </Typist>
            </div> 
            <p>I'm a Richmond, VA native and <a href="https://news.yale.edu/2021/05/20/using-data-and-technology-create-more-just-world" className="links-to-previous-jobs" target="_blank" rel="noopener noreferrer">graduated</a> from Yale in 2021 with a degree in applied mathematics. I'm passionate about technology and urban planning, particularly how both impact health and educational outcomes.</p>
            <p>Previously, I was a CS teaching assistant for formerly incarcerated individuals at Columbia University's <a className="links-to-previous-jobs" href="https://centerforjustice.columbia.edu/justicethroughcode" target="_blank" rel="noopener noreferrer">Center for Justice</a> and interned as an investment analyst at the <a href="https://investments.yale.edu/" className="links-to-previous-jobs"> Yale Investments Office</a>.
             I've also done data science at the <a href="https://chanzuckerberg.com/" className="links-to-previous-jobs" target="_blank" rel="noopener noreferrer"> Chan Zuckerberg Initiative</a>, product management at <a href="https://www.accesshealthct.com/" className="links-to-previous-jobs" target="_blank" rel="noopener noreferrer"> Access Health CT</a>, and reporting at <a href="https://www.ft.com/" className="links-to-previous-jobs" target="_blank" rel="noopener noreferrer"> The Financial Times</a>.</p>
            <p>In my free time, I enjoy <Link to="/writing" style={{"color": "#5e86e6"}}>writing</Link> about cities, health and education. Right now, I'm pursuing a master's in urban planning and data science at University College London's Bartlett School of Architecture through the US-UK Fulbright Scholarship.</p>

          </div>
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
        <p className="contact"><a href="mailto:mia.jackson@yale.edu">mia.jackson@yale.edu</a></p>
      </div>
    </div>
    <div className="contact-description-div">
        <p className="contact-description">Feel free to reach out over email or <a href="https://www.linkedin.com/in/mia-jackson/" target="_blank" rel="noopener noreferrer">LinkedIn.</a> :)</p>
    </div>
  </div>
  )
}


function Writing() {
  return (
    <div className="App">
      <div className="name-div">
        <p className="name"><Link to="/" style={{"color": "black"}}>mia jackson</Link></p>
        <div className="contact-div">
          <p className="contact">mia.jackson@yale.edu</p>
        </div>
      </div>
      <div className="writing-main-text">
        <p style={{"font-size":"1.5em"}}>writing</p>
        <p>In my free time, I enjoy writing about cities, health and education. At Yale, my long-form essay about independent primary care clinics entitled, <i>What One Small Health Clinic Tells Us About Healing</i>, won the Williams H. Schubart prize for a distinguished piece on nonfiction writing. I also worked as a reporting intern for the Financial Times' industry publication, <a href="https://www.ftspecialist.com/" target="_blank" rel="noopener noreferrer">Health Payer Specialist</a>, where I wrote about innovation and equity in the health insurance industry.</p>
        <p>Selected Work:</p>
        <ul>
          <li><a className="links-to-articles" href="https://undark.org/2021/10/04/opinion-government-food-aid-programs-need-a-digital-facelift/" target="_blank" rel="noopener noreferrer">Opinion: Government Food Aid Programs Need A Digital Facelift</a>, Published in <b style={{"color":"#5e86e6"}}>Undark Magazine</b> and <b style={{"color":"#5e86e6"}}>The Daily Beast</b>, 10/21</li>
          <p></p>
          <li><a className="links-to-articles" href="https://nextcity.org/daily/entry/how-philly-will-become-the-city-of-arborly-love" target="_blank" rel="noopener noreferrer">How Philly Will Become the City of Arborly Love</a>, Published in <b style={{"color":"#5e86e6"}}>Next City</b>, 10/21</li>
          <p></p>
          <li><a className="links-to-articles" href="https://nextcity.org/urbanist-news/entry/playtime-is-making-a-comeback-in-philly" target="_blank" rel="noopener noreferrer">Playtime is Making a Comeback in Philly</a>, Published in <b style={{"color":"#5e86e6"}}>Next City</b>, 9/21</li>
          <p></p>
          <li><a className="links-to-articles" href="https://www.pilotonline.com/opinion/columns/vp-ed-column-jackson-0829-20210828-2wxwacvpzffjfpfuffbdypj3wu-story.html" target="_blank" rel="noopener noreferrer">CDC Moratorium May Worsen Eviction Crisis in Virginia</a>, Published in <b style={{"color":"#5e86e6"}}>The Virginian-Pilot</b>, 8/21</li>
          <p></p>
          <li><a className="links-to-articles" href="https://www.newsweek.com/my-family-has-been-doctors-black-community-generations-what-if-theyre-last-opinion-1617118" target="_blank" rel="noopener noreferrer">My Family Has Been Doctors in the Black Community for Generations. What If They're The Last?</a>, Published in <b style={{"color":"#5e86e6"}}>Newsweek</b> and <b style={{"color":"#5e86e6"}}>The Economic Hardship Reporting Project</b>, 8/21</li>
          <p></p>
          <li><a className="links-to-articles" href="https://drive.google.com/file/d/1UGKltXur1gHUEgUCU7E786U-pHMVn-WJ/view?usp=sharing" target="_blank" rel="noopener noreferrer">Payers May be Waking Up to a New M&A World</a>, Published in <b style={{"color":"#5e86e6"}}>Health Payer Specialist</b>, 8/21</li>
          <p></p>
          <li><a className="links-to-articles" href="https://drive.google.com/file/d/1YLig3imIAGmv-X7bhnEvQ5Cp9nju06bc/view?usp=sharing" target="_blank" rel="noopener noreferrer">Payers Refine Approach to Covering the Most Vulnerable</a>, Published in <b style={{"color":"#5e86e6"}}>Health Payer Specialist</b>, 7/21</li>
          <p></p>
          <li><a className="links-to-articles" href="https://drive.google.com/file/d/1U9KgtWaP8Uce87uf5-0Gp-nP4rmRIo8u/view?usp=sharing" target="_blank" rel="noopener noreferrer">Payers And Venture Capitalist Eye Medicaid and More</a>, Published in <b style={{"color":"#5e86e6"}}>Health Payer Specialist</b>, 6/21</li>

        </ul>
        <b /><b /><b />
      </div>
  </div>
  )
}



