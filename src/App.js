 
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes } from 'react-router-dom';
import Home from './Components/Home/Home';
import Login from './Components/LogIn/Login';
import About from './Components/About/About';
import Header from './Components/Header/Header';
import Registe from './Components/Register/Registe';
 

function App() {
  return (
    <div className=" ">
      <div className='w-50 m-auto'>
      <Header></Header>
      </div>
      <Routes>
        <Route path='/'  element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/about' element={<About></About>}></Route>
        <Route path='/register' element={<Registe></Registe>}></Route>

      </Routes>
      
    </div>
  );
}

export default App;
