import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header'
import Home from './components/Home/Home'
import Error from './components/Error/Error'
import Signup from './components/SignUp/Signup'
import Login from './components/Login/Login';
import Profile from './components/Profile/Profile';


function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
              <Route path='/' element={<Home></Home>}></Route>
              <Route path='/signup' element={<Signup></Signup>}></Route>
              <Route path='/login' element={<Login></Login>}></Route>
              <Route path='/profile' element={<Profile></Profile>}></Route>
              <Route path='*' element={<Error></Error>}></Route>
      </Routes>
    </div>
  );
}

export default App;
