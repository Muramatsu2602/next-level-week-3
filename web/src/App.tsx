import React from 'react';

import './styles/global.css';

interface TitleProps{
  text: string;
}

// this is a component
function Title(props: TitleProps) {
  return <h1> {props.text} </h1>
}

function App() {
  // JSX - Javascript XML --> crazy stuff!
  return (
    <div className="App">
      <Title text="Titulo 1" />
      <Title text="Titulo 2"/>
      <Title text="Titulo 3"/>
      <Title text="Titulo 4"/>
    </div>
  );
}

export default App;
