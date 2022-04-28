import { useState } from 'react';
import { Nav } from './components/layout/Nav';
import { Button } from './components/layout/Button';
import { PWithBorder } from './components/layout/PWithBorder';
import { escenes } from './components/escena/escenes';
import Escena from './components/escena/Escena';

function App() {

  const positions = escenes.length;
  const [actualPosition, setPosition] = useState(0);
  
  const navigation = step => {
    const check = actualPosition + step;

    if ( check <= positions - 1 && check >= 0 ) {
      setPosition(check);
    }
  }

  return (
    <>
      {// NAVIGATION: start ---------------------------------------------------
      }

      <Nav>
        <Button width="50%" onClick={e => navigation(-1)}>Anterior</Button>
        <Button width="50%" onClick={e => navigation(1)}>Següent</Button>
      </Nav>

      {// NAVIGATION: end -----------------------------------------------------
      }


      {// SCENES: start -------------------------------------------------------
      }

      {/*
        * Utilizo el index del array como key.
        * No es la mejor práctica:
        * https://es.reactjs.org/docs/lists-and-keys.html#keys
        * "No recomendamos usar índices para keys si el orden 
        * de los ítems puede cambiar"
        * 
        * En función de lo que se pida en los siguientes ejercicios,
        * se tendrá que modificar el valor asignado a key
        */}
      { escenes.map( (phrase, index) => <PWithBorder key={index} isActive={actualPosition === index}><Escena escena={phrase} /></PWithBorder> ) }

      {// SCENES: end ---------------------------------------------------------
      }

    </>
  );
}

export default App;
