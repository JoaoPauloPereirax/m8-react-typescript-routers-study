import * as C from './style';
import { useParams } from 'react-router-dom';
export const AboutItem = () => {
     const params = useParams(); 
     return (
               <C.Container>
                    <h2>Item {params.slug?.toUpperCase()} ({params.slug?.length} letras.)</h2>
               </C.Container>
     );
}