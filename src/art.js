import React from 'react';
import './art.css';
import {
  Link
} from "react-router-dom";
import Gallery from "react-photo-gallery";


function Art() {
    return (
      <div className="App">
      <div className="name-div">
      <p className="name"><Link to="/" style={{"color": "black"}}>mia jackson</Link></p>
        <div className="contact-div">
          <p className="contact">mia.jackson@yale.edu</p>
        </div>
      </div>
      <div id="art-description">
        I paint and sell my work for fun! <br/>Here is a collection of some of my stuff below. <br/>Reach out for information about pricing if you are interested.
        <br/><br/>
      </div>
      <div class="gallery">
      <Gallery photos={photos} />

      </div>

    </div>
    )
  }

export default Art;

export const photos = [
  /*
  {
    src: require('./images/one-face.jpg'),
    srcSet: [
    ],
    sizes: ["(min-width: 480px) 50vw,(min-width: 1024px) 33.3vw,100vw"],
    width: 4,
    height: 5
  },
  {
    src: require('./images/color-faces-background.jpg'),
    sizes: ["(min-width: 480px) 50vw,(min-width: 1024px) 33.3vw,100vw"],
    width: 3,
    height: 4
  },
  {
    src: require('./images/family.JPG'),
    sizes: ["(min-width: 480px) 50vw,(min-width: 1024px) 33.3vw,100vw"],
    width: 6,
    height: 8
  },
  {
    src: require('./images/two-faces.jpg'),
    sizes: ["(min-width: 480px) 50vw,(min-width: 1024px) 33.3vw,100vw"],
    width: 3,
    height: 4
  },
  {
    src: require('./images/faces-background.png'),
    sizes: ["(min-width: 480px) 50vw,(min-width: 1024px) 33.3vw,100vw"],
    width: 4,
    height: 3
  },
  {
    src: require('./images/winter-art.jpeg'),
    sizes: ["(min-width: 480px) 50vw,(min-width: 1024px) 33.3vw,100vw"],
    width: 4,
    height: 4
  }
  ,
  {
    src: require('./images/abstract-art.jpeg'),
    srcSet: [
      require('./images/abstract-art.jpeg'),
    ],
    sizes: ["(min-width: 480px) 50vw,(min-width: 1024px) 33.3vw,100vw"],
    width: 3,
    height: 4
  },
  {
    src: require('./images/black-white-face.jpeg'),
    sizes: ["(min-width: 480px) 50vw,(min-width: 1024px) 33.3vw,100vw"],
    width: 3,
    height: 3
  },
  {
    src: require('./images/tyler-the-creator.jpg'),
    sizes: ["(min-width: 480px) 50vw,(min-width: 1024px) 33.3vw,100vw"],
    width: 3,
    height: 4
  },
  {
    src: require('./images/colorful-face.jpeg'),
    sizes: ["(min-width: 480px) 50vw,(min-width: 1024px) 33.3vw,100vw"],
    width: 3,
    height: 3
  },
  */


]

/*
<div id="art-grid">
<img className="artwork artwork" src={require('./images/one-face.png')} alt="me"/>
<img className="artwork artwork3" src={require('./images/faces-background.png')} alt="me"/>
<img className="artwork artwork2" src={require('./images/two-faces.png')} alt="me"/>
<img className="artwork tyler" src={require('./images/tyler-the-creator.png')} alt="me"/>
<img className="artwork" src={require('./images/abstract-art.jpeg')} alt="me"/>
<img className="artwork" src={require('./images/winter-art.jpeg')} alt="me"/>
<img className="artwork" src={require('./images/colorful-face.jpeg')} alt="me"/>
<img className="artwork" src={require('./images/black-white-face.jpeg')} alt="me"/>

</div>
 */