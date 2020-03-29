import React, { useState } from 'react';
//import Header from './Header';
import './global.css';

import Logon from './pages/Logon'; 
import Routes from './routes';

function App() {
  /*
  //let counter = useState(0);
  const [counter, setCounter] = useState(0);

  function increment() {
    //counter +=1;
    setCounter(counter + 1);
    console.log(counter);
  }
 
  return (
    <div>
    <Header title="Semana OmniStack">
      Semana Omnistack
    </Header>

    <Header>Contador: {counter}</Header>
    <button onClick={increment}>Incrementar</button>
    </div>
  );
  */

  return (
    <Routes />
  );
}

export default App;
