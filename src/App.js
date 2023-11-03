import {React, useEffect} from 'react'
import Header from './components/header'
import './App.css'
import Home from './components/home'
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
}
 from "react-router-dom";
import Detail from './components/detail';
import Login from './components/login/login';
import Error404 from './components/error404';
import Footer from './components/login/footer';

function App() {
  return (
      <Router>
    <div className='app-container'>
        <Header/>
        <Routes>
            <Route path='/' element={<Login/>}/>
            <Route path='/detail:id' element={<Detail/>}/>
            <Route path='/home' element={<Home/>}/>
            <Route path='*' element={<Error404/>}/>
        </Routes>
        <Footer/>
    </div>
      </Router>
  )
}

export default App