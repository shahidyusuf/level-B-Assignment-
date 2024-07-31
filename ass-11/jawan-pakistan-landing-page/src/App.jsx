import React from 'react'
// import LOGO from './assets/images/logoJp.png';
// import Navbar from './components/navbar';
import NavbarApp from './components/NavbarApp';
import IntroApp from './components/Intro';
import MissionApp from './components/Mission';
import AliMughal from './components/AliMughal';
import ITText from './components/ITText';
import ITPicsOne from './components/ITPicsOne';
import ITPicsTwo from './components/ITPicsTwo';

const App = () => {
  return (
    <div>
      <NavbarApp />
      <IntroApp />
      <MissionApp />
      <AliMughal />
      <ITText />
      <ITPicsOne />
      <ITPicsTwo />
    </div>
      
  )
}

export default App