import React, { useState } from 'react';
import { Welcome } from './components/sections/Welcome';
import Story from './components/sections/Story';

function App() {
  const [storyStarted, startStory] = useState(false);
  
  let section;
  if (!storyStarted) {
    section =   <Welcome>
                  <h1>Una aventura a l'espai</h1>
                  <p>Descobreix la història d'un heroi</p>
                  <button onClick={ () => startStory(true) }>Comença</button>
                </Welcome>;
  } else {
    section = <Story />
  }

  return (
    <>
      {section}
    </>
  );
}

export default App;
