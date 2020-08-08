import React from 'react';
import introImg from '../assets/intro-whatsapp.jpg'

function Welcome(props) {
  return (
    <div class="welcome">
      <img src={introImg} alt=""></img>
      <h2>Keep your phone connected</h2>
    </div>
  );
}

export default Welcome;