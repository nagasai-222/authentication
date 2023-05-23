import './App.css';
import Register from './pages/Register'
import Login from './pages/Login'
import Quote from './pages/Quote'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from "./pages/Home"
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
            <Route  path="/register" element={<Register/>}/>
            <Route path='/login' element={<Login/>} />
            <Route path='/quote' element={<Quote/>} />
            <Route path="/*" element={<Home />} />
        </Routes>
      </BrowserRouter>
      <button style={{float:"right"}}onClick={()=>{localStorage.clear()}}>Clear</button>
     </div>
  );
}


export default App;


