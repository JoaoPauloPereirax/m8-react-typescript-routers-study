import {Routes, Route} from 'react-router-dom';
import { Home } from './Pages/Home';
import { About } from './Pages/About';
import {AboutItem} from './Pages/AboutItem';
import { NotFound } from './Pages/NotFound';

function App() {
  return (
   <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/sobre' element={<About/>}/>
      <Route path='/sobre/:slug' element={<AboutItem/>}/>
      <Route path='*' element={<NotFound/>}/>      
   </Routes>
  );
}

export default App;
