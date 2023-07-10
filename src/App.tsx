import {Routes, Route} from 'react-router-dom';
import { Home } from './Pages/Home';
import { About } from './Pages/About';
function App() {
  return (
   <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/sobre' element={<About/>}/>      
   </Routes>
  );
}

export default App;
