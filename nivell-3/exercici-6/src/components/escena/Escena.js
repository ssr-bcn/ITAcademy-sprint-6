/*
 * 
 * La siguiente era mi opción inicial:
 * 
 *   import { PWithBorder } from '../layout/PWithBorder';
 * 
 *   export default function Escena( {escena} ) {
 *     return (
 *       <PWithBorder>{ escena }</PWithBorder>
 *     );
 *   }
 * 
 * Opté por no llamar al componente PWithBorder directamente desde el componente
 * Escena para hacerlo independiente de él.
 */

export default function Escena( {escena} ) {
  return (
    <>{ escena }</>
  );
}
