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
            <p className="contact">miaj25@gmail.com</p>
          </div>
      </div>

    <div className="intro-page-together">
        <img className="photo" src={Me} alt="me"/>
          <div className="description">
            <div className="mia-intro">
            <Typist cursor={{blink:true}}>Hi! <Typist.Delay ms={600} /> I'm Mia.
            </Typist>
            </div> 
            <p>I'm a Richmond, VA native living in Brooklyn, NY. Currently, I'm a product manager at Schmidt Futures where I've worked at various organizations in the EdTech, criminal justice and urban planning space including <a href="https://justicetext.com/" className="links-to-previous-jobs" target="_blank" rel="noopener noreferrer"> JusticeText</a>, <a href="https://meritamerica.org/" className="links-to-previous-jobs" target="_blank" rel="noopener noreferrer"> Merit America</a>, and <a href="https://www.gehlpeople.com/" className="links-to-previous-jobs" target="_blank" rel="noopener noreferrer"> Gehl</a>. In my free time, I enjoy thinking and <Link to="/writing" style={{"color": "#5e86e6"}}>writing</Link> about cities, placemaking, and the affordances of community.</p>
            <p>Previously, I was a CS teaching assistant for formerly incarcerated individuals at Columbia University's <a className="links-to-previous-jobs" href="https://centerforjustice.columbia.edu/justicethroughcode" target="_blank" rel="noopener noreferrer">Center for Justice</a> and interned as an investment analyst at the <a href="https://investments.yale.edu/" className="links-to-previous-jobs"> Yale Investments Office</a>.
             I've also done data science at the <a href="https://chanzuckerberg.com/" className="links-to-previous-jobs" target="_blank" rel="noopener noreferrer"> Chan Zuckerberg Initiative</a>, product management at <a href="https://www.accesshealthct.com/" className="links-to-previous-jobs" target="_blank" rel="noopener noreferrer"> Access Health CT</a>, and reporting at <a href="https://www.ft.com/" className="links-to-previous-jobs" target="_blank" rel="noopener noreferrer"> The Financial Times</a>.</p>
            <p>In my free time, I enjoy <Link to="/writing" style={{"color": "#5e86e6"}}>writing</Link> about cities, health, innovation and education. </p>

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
        <p className="contact"><a href="mailto:mia.jackson@yale.edu">miaj25@gmail.com</a></p>
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
          <p className="contact">miaj25@gmail.com</p>
        </div>
      </div>
      <div className="writing-main-text">
        <p style={{"font-size":"1.5em"}}>writing</p>
        <p>I write about anything in the realm of cities, health, education and innovation, but my favorite stories are about local heroes solving local problems. My work has been supported by the Economic Hardship Reporting Project and has appeared in The New York Times, Newsweek, and Slate among others.</p><p>At Yale, my long-form essay about independent primary care clinics entitled, <i>What One Small Health Clinic Tells Us About Healing</i>, won numerous nonfiction writing prizes. I also worked as a reporting intern for the Financial Times' industry publication, <a href="https://www.ftspecialist.com/" target="_blank" rel="noopener noreferrer">Health Payer Specialist</a>, where I wrote about innovation and equity in the health insurance industry.</p>
        <p>Selected Work:</p>
        <ul>
          <li><a className="links-to-articles" href="https://www.nytimes.com/2024/01/05/realestate/dizzy-gillespie-queens-jazz.html" target="_blank" rel="noopener noreferrer">For Dizzy Gillespie, Queens Was the Place to Be and to Bop.</a>, Published in <b style={{"color":"#5e86e6"}}>The New York Times</b>, 1/24</li>
          <p></p>
          <li><a className="links-to-articles" href="https://www.nytimes.com/2023/08/18/realestate/mother-ame-zion-church-harlem-nyc.html" target="_blank" rel="noopener noreferrer">Once a Force in Harlem, the Oldest Black Church in New York Hangs On</a>, Published in <b style={{"color":"#5e86e6"}}>The New York Times</b>, 8/23</li>
          <p></p>
          <li><a className="links-to-articles" href="https://slate.com/business/2022/07/london-river-thames-biologically-dead-revival.html" target="_blank" rel="noopener noreferrer">How to Bring a River Back From the Dead</a>, Published in <b style={{"color":"#5e86e6"}}>Slate</b>, 7/22</li>
          <p></p>
          <li><a className="links-to-articles" href="https://nextcity.org/urbanist-news/what-if-theres-a-better-way-to-collect-neighborhood-data" target="_blank" rel="noopener noreferrer">What if There's a Better Way to Collect Neighborhood Data?</a>, Published in <b style={{"color":"#5e86e6"}}>Next City</b>, 6/22</li>
          <p></p>
          <li><a className="links-to-articles" href="https://nextcity.org/urbanist-news/americas-most-influential-protest-removed-heres-what-should-have-happened" target="_blank" rel="noopener noreferrer">America's Most Influential Protest Art Was Quietly Removed. Here's What Should Have Happened Instead</a>, Published in <b style={{"color":"#5e86e6"}}>Next City</b>, 5/22</li>
          <p></p>
          <li><a className="links-to-articles" href="https://nextcity.org/urbanist-news/can-art-bring-justice-to-black-homeowners" target="_blank" rel="noopener noreferrer">Can Art Bring Justice to Black Homeowners?</a>, Published in <b style={{"color":"#5e86e6"}}>Next City</b>, 3/22</li>
          <p></p>
          <li><a className="links-to-articles" href="https://nextcity.org/urbanist-news/philadelphia-nonprofit-trains-parents-to-be-reading-stewards" target="_blank" rel="noopener noreferrer">Philadelphia Nonprofit Trains Parents to Be Reading Stewards</a>, Published in <b style={{"color":"#5e86e6"}}>Next City</b>, 2/22</li>
          <p></p>
          <li><a className="links-to-articles" href="https://nextcity.org/urbanist-news/entry/la-metro-deploying-earthquake-alert-system-across-its-facilities" target="_blank" rel="noopener noreferrer">LA Metro Deploying Earthquake Alert System Across Its Facilities</a>, Published in <b style={{"color":"#5e86e6"}}>Next City</b>, 11/21</li>
          <p></p>
          <li><a className="links-to-articles" href="https://www.thedailybeast.com/online-markets-and-grocery-delivery-grew-big-during-the-pandemic-they-could-solve-americas-hunger-problem" target="_blank" rel="noopener noreferrer">The Pandemic Taught the U.S. How to Solve Its Hunger Problem</a>, Published in <b style={{"color":"#5e86e6"}}>The Daily Beast</b> and <b style={{"color":"#5e86e6"}}>The Undark Magazine</b>, 10/21</li>
          <p></p>
          <li><a className="links-to-articles" href="https://nextcity.org/daily/entry/how-philly-will-become-the-city-of-arborly-love" target="_blank" rel="noopener noreferrer">How Philly Will Become the City of Arborly Love</a>, Published in <b style={{"color":"#5e86e6"}}>Next City</b>, 10/21</li>
          <p></p>
          <li><a className="links-to-articles" href="https://nextcity.org/urbanist-news/entry/playtime-is-making-a-comeback-in-philly" target="_blank" rel="noopener noreferrer">Playtime is Making a Comeback in Philly</a>, Published in <b style={{"color":"#5e86e6"}}>Next City</b>, 9/21</li>
          <p></p>
          <li><a className="links-to-articles" href="https://www.pilotonline.com/opinion/columns/vp-ed-column-jackson-0829-20210828-2wxwacvpzffjfpfuffbdypj3wu-story.html" target="_blank" rel="noopener noreferrer">CDC Moratorium May Worsen Eviction Crisis in Virginia</a>, Published in <b style={{"color":"#5e86e6"}}>The Virginian-Pilot</b>, 8/21</li>
          <p></p>
          <li><a className="links-to-articles" href="https://www.newsweek.com/my-family-has-been-doctors-black-community-generations-what-if-theyre-last-opinion-1617118" target="_blank" rel="noopener noreferrer">My Family Has Been Doctors in the Black Community for Generations. What If They're The Last?</a>, Published in <b style={{"color":"#5e86e6"}}>Newsweek</b> and <b style={{"color":"#5e86e6"}}>The Economic Hardship Reporting Project</b>, 8/21</li>
          <p></p>
        
          <p></p>
          <p></p>
          <p></p>
          <p></p>
          <p></p>
          <p></p>
        </ul>
        <b /><b /><b />
      </div>
  </div>
  )
}



