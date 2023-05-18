
import './App.css';
// import {
//   createBrowserRouter,
//   RouterProvider,
//   Route,
//   Link,
// } from "react-router-dom";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/home';
import About from './components/about'

function App() {
  return (
    <div>
    <Router>
    <Routes>
    <Route path='/' element={ <Home/> } exact={true}></Route>
    <Route path='/about' element={ <About/> } exact={true}></Route>
    </Routes>
    </Router>
    </div>
  );
}

export default App;
