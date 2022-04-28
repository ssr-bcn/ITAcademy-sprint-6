import { escenes } from './components/escena/escenes';
import Escena from './components/escena/Escena';

function App() {
  return (
    <>
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
      { escenes.map( (phrase, index) => <Escena key={index} escena={phrase} /> ) }
    </>
  );
}

export default App;
