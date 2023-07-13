import * as C from './style';
import { Link } from 'react-router-dom';
export const Home = () => {
     return (
          <C.Container>
               <h1>Página Inicial</h1>
               <C.HeaderButtons>
                    <button><Link to='./sobre'>SOBRE</Link></button>
               </C.HeaderButtons>
          </C.Container>
     );
}