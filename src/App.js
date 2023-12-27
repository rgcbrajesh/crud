import './App.css';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Home from './component/Home';
import Show from './component/Show';
import Update from './component/Update';
import About from './component/About';
import Contact from './component/Contact';


function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/show' element={<Show/>}/>
      <Route path='update/:id' element={<Update/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/contact' element={<Contact/>}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
// "homepage": "https://rgcbrajesh.github.io/student-registration-form",