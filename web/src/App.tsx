import React from 'react';

import './styles/global.css';
import './styles/pages/landing.css';

import logoimg from './images/logo.svg';

interface TitleProps {
  text: string;
}

// this is a component
function Title(props: TitleProps) {
  return <h1> {props.text} </h1>
}

function App() {
  // JSX - Javascript XML --> crazy stuff!
  return (
    <div id="page-landing">
      <div className="content-wrapper">
        <img src={logoimg} alt="logo" />

        <main>
          <h1>Leve felicidade para o mundo</h1>
          <p>Visite orfanatos e mude o dia de muitas crianças</p>
        </main>

        <div className="location">
          <strong>Agudos</strong>
          <span>São Paulo</span>
        </div>

        <a href="" className="enter-app">
          ≥
        </a>
      </div>
    </div>
  );
}

export default App;
