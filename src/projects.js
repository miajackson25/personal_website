import React from 'react';
import './projects.css';
import {
  Link
} from "react-router-dom";
//const { innerWidth: width, innerHeight: height } = window;

function Projects() {
    return (
      <div className="Projects">
        <div className="name-div">
          <p className="name"><Link to="/" style={{"color": "black"}}>mia jackson</Link></p>
          <div className="contact-div">
            <p className="contact">miaj25@gmail.com</p>
          </div>
        </div>

        <div className="projects-main">
          <p className="sub-title">currently</p>
          <div className='grid'>
            <div className="item current">Bartlett School of Architecture <br/> University College London<hr/>
            <p style={{"font-size": ".8em"}}>MSc Space Syntax: Architecture and Cities <br/><br/> I will be spending the next school year (2021-2022) studying how spaces can be planned, designed and manufactured to create more vibrant communities.</p>    
            </div>
          </div>
          
          <p className="sub-title">skills (fluent)</p>
          <div className='grid-skills'>
            <div className="item skills">Python</div>
            <div className="item skills">React</div>
            <div className="item skills">React Native</div>
            <div className="item skills">R</div>
            <div className="item skills">SQL</div>
            <div className="item skills">HTML/CSS</div>
            
          </div>

          <p className="sub-title">tech</p>
          <div className='grid-tech'>
            <div class="item tech zoula-item">Zoula<br/><p className="dates">6/20 - 8/20</p><hr style={{"margin-right": "80%"}}/><p className="description-text">
              Co-created a prototype for a maternal health mobile app to connect minority women of color with podcasts and educational resources</p>
              <img className="image zoula-image" src={require('./images/zoula-app.png')} alt="zoula-app"/>
            </div>
            <div className="item tech">Chan Zuckerberg Initiative<br/><p className="dates">6/20 - 8/20</p><hr style={{"margin-right": "80%"}}/>
              <p className="description-text">Interned as a data scientist intern at <a href="https://chanzuckerberg.com/" target="_blank" rel="noopener noreferrer">CZI</a> in the science initiative where I led A/B testing on different product feature launches. I also analyzed and created visualizations of collaboration trends in international science research.</p>
             </div>
            <div className="item tech">
              <img className="image access-image" src={require('./images/access-health-ct-app.png')} alt="access-app"/>
              Access Health CT<br/><p className="dates">6/20 - 8/20</p><hr style={{"margin-right": "80%"}}/>
              <p className="description-text">Co-led the design and content creation of a mobile app for Access Health CT to support marginalized communities as part of the Black Health New Haven Initiative</p>
            </div>
            <div className="item tech">Yale Investments Office<br/><p className="dates">6/19 - 8/19</p><hr style={{"margin-right": "80%"}}/>
              <p className="description-text">At the Yale Investments Office, I designed and launched a web app to automate the investment manager portfolio upload process to the Bloomberg terminal, reducing the upload duration time.
              </p>
            </div>
          </div>

          <p className="sub-title">teaching</p>
          <div className='grid-education'>
            <div className="item current">Columbia University <br/> Center for Justice<hr/><p className="description-text">Taught computer science to the formerly incarcerated through Columbia's <a href="https://centerforjustice.columbia.edu/justicethroughcode" target="_blank" rel="noopener noreferrer">Justice through Code</a> program. I hosted office hours, implement curriculum improvements, and provide technical interview prep advice for students.</p></div>
            <div className="item current">SheCode<hr/><p className="description-text">Spent three years as a teaching assistant for SheCode, a program that introduces middle and high school girls to basic computer science skills.</p></div>
            <div className="item current">Yale Department of Statistics and Data Science<hr/><p className="description-text">Hosted weekly office hours and created extra curriculum to reinforce material for college students in an introductory statistics course taught in python.</p></div>
          </div>

          <p className="sub-title">research</p>
          <div className='grid-education'>
          <div className="item light-grey-background">Townsend Laboratory<br/>Yale School of Public Health<hr/><p className="description-text">Conducted independent research in the <a href="https://github.com/miajackson/townsend_lab_ESCC_Paper" target="_blank" rel="noopener noreferrer">Townsend Laboratory</a> investigating the mutational landscape of benign and cancerous tumors in melanoma and esophageal cancer.</p></div>
            <div className="item light-grey-background">Tobin Center for Economic Policy<hr/><p className="description-text">Analyzed cross-contamination of Covid-19 in nursing homes located in OH and CT and automated the data processing pipeline. I also created visualizations of this cross-contamination which were shared with policy makers.</p></div>
          </div>

          <p className="sub-title">awards</p>

          <div className='grid-awards'>
            <div className="item awards"><b style={{"font-weight":"530"}}>James Andrew Haas</b> <p className="dates">Yale University</p><hr/>Awarded to a senior for "breadth of intellectual achievement, strength of character, and fundamental humanity" as well as potential for public service. <a href="https://news.yale.edu/2021/06/07/students-earn-top-yale-college-prizes-their-accomplishments" target="_blank" rel="noopener noreferrer">news</a></div>
            <div className="item awards"><b style={{"font-weight":"530"}}>Roosevelt L. Thompson</b><p className="dates">Yale University</p><hr/>"For a senior dedicated to public service, who has exemplified warmth, fairness, and compassion, and shows promise for moral leadership in the public sphere."</div>
            <div className="item awards"><b style={{"font-weight":"530"}}>Elga Ruth Wasserman</b><p className="dates">Yale University</p><hr/>For "a senior who has shown extraordinary commitment to the advancement of social justice and gender equality in Yale College."</div>
            <div className="item awards"><b style={{"font-weight":"530"}}>Outstanding Research in STEM Fields Award</b><p className="dates">Yale University</p><hr/>Prize awarded by the Afro American Cultural Center for my thesis in applied mathematics.</div>
            <div className="item awards"><b style={{"font-weight":"530"}}>Williams H. Schubart</b><p className="dates">Yale University</p><hr/>Awarded to a senior for a piece of distinguished nonfiction writing.</div>
            <div className="item awards"><b style={{"font-weight":"530"}}>UK-US Fulbright Scholarship</b><p className="dates">U.S. State Department</p><hr/>Selected for the Fulbright scholarship to study at University College London</div>
            <div className="item awards"><b style={{"font-weight":"530"}}>CBIT Healthcare Hackathon</b><p className="dates">Yale University</p><hr/>Runner-up for <a href="https://medicine.yale.edu/news-article/22471/" target="_blank" rel="noopener noreferrer">prototype</a> of a Black maternal health app, Zoula.</div>
            <div className="item awards"><b style={{"font-weight":"530"}}>Startup Yale</b><p className="dates">Yale University</p><hr/>Ranked in the top 6 of 50+ companies at Yale's annual startup competition.</div>
          </div>
          <p></p><p></p><p></p><p></p><p></p><p></p><p></p>
        </div>

        



    
      </div>
    
    )
}

export default Projects;





/* <div className='grid'>


<div class="item current-role">
  I am an incoming Associate <br/>Product Manager at <a href="https://schmidtfutures.com/" target="_blank" rel="noopener noreferrer">Schmidt Futures.</a><br/><br/><br/><br/>
  I am fluent in Python, R, SQL, React, React Native, HTML/CSS, JavaScript, and Adobe XD.
</div>
<div class="item zoula-item">
  I co-founded <a href="https://joinzoula.com" target="_blank" rel="noopener noreferrer">Zoula</a>, a maternal health mobile app to connect minority women of color with podcasts and educational resources.
  <img className="image zoula-image" src={require('./images/zoula-app.png')} alt="zoula-app"/>
</div>
<div class="item columbia-item">
  Columbia University <br/>Center for Justice <hr/>
  <h4>I teach computer science to the formerly incarcerated in Columbia's <a href="https://centerforjustice.columbia.edu/justicethroughcode" target="_blank" rel="noopener noreferrer">Justice through Code</a>. I host office hours, implement curriculum improvements, and provide technical interview prep advice for students.</h4>
</div>
<div class="item tobin-item">Tobin Center for Economic Policy
  <hr/>
  <h4 className="to-disappear">I analyzed cross-contamination of Covid-19 in nursing homes located in OH and CT and automated the data processing pipeline. I created visualizations of this cross-contamination which were shared with policy makers.</h4>
</div>

<div class="item">
  <h3 className="townsend">In the Yale School of Public Health, I conduct independent research in the <a href="https://medicine.yale.edu/lab/townsend/" target="_blank" rel="noopener noreferrer" className="townsend-link">Townsend Laboratory</a> investigating the mutational landscape of benign and cancerous tumors in melanoma and esophageal cancer.</h3>
</div>
<div class="item access-health-ct-item">
  <img className="image access-image" src={require('./images/access-health-ct-app.png')} alt="access-app"/>
  <h3 className="access-health-text">I co-led the <br/>design and content <br/>creation of a mobile <br/>app for Access <br/>Health CT to support <br/>marginalized communities <br/>as part of the Black <br/>Health New Haven Initiative</h3>
</div>
<div className="item czi-item">
  Chan Zuckerberg Initiative
<h4 style={{"font-size": ".7em"}}>
While interning as a data scientist at <a href="https://chanzuckerberg.com/" target="_blank" rel="noopener noreferrer">CZI</a>, I •	led A/B testing on three different products, the first A/B testing done in 3 years, and designed an experimentation framework in a legacy document to guide future product launches
•	Analyzed 5 million+ papers and identified a 5-year trend in international science research collaboration
•	Created a visualization of collaboration trends and presented data story to executives which influenced future directions of data analysis efforts
</h4>
</div>

<div class="item yio-item"><h3>At the <a href="http://investments.yale.edu/" target="_blank" rel="noopener noreferrer">Yale Investments Office</a>, I designed <br/>and launched a web app <br/>to automate the investment manager portfolio <br/>upload process to the Bloomberg terminal, reducing upload process duration from 2 <br/>hours to <br/>3 seconds</h3>
  
  <img className="image yio-image" src={require('./images/arrow2.png')} alt="access-app"/>
</div>
<div class="item extra-info">
  Other
  <h3>Startup Awards • <a href="https://medicine.yale.edu/news-article/22471/" target="_blank" rel="noopener noreferrer">CBIT Healthcare Hackathon Runner-Up</a> • Startup Yale Semifinalist 	</h3>
  <h3>Fellowships/Awards • Code2040 Data Science Fellow • D.E. Shaw Latitude Fellow • Google BOLD Immersion • Scholastic Art Gold Key Award</h3>
</div>
</div> */


