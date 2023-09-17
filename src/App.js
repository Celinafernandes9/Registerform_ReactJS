
import { Route, Routes } from 'react-router-dom';
import { Navbar } from './Components/Navbar';
import { Login } from './Components/Login';
import { Signup } from './Components/Signup';



function App() {
  return (
  <>
 <Navbar/>

  <Routes>
   <Route path='/' element={<Login/>}></Route>
   <Route path='/signup' element={<Signup/>}></Route>
  </Routes>
  </>
  );
}

export default App;
