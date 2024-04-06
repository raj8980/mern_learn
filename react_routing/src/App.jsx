import './App.css'
import { BrowserRouter,Routes, Route, useNavigate } from 'react-router-dom'
import {lazy} from 'react';
const Dashboard = lazy(() => import('./components/Dashboard'))
const Landing = lazy(() => import('./components/Landing'))

function App() {
  

  return (
    <div>
      
      <BrowserRouter>
      <Appbar/>
      <Routes>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/" element={<Landing />} />
      </Routes>
    </BrowserRouter>
    </div>
  )
}

function Appbar(){
  const navigate= useNavigate();
  
  return (<div>
    <button onClick={()=>{
           navigate("/");
      }}>
        Landing Page
      </button>
      <button onClick={() =>{
        navigate("/dashboard");
      }}>
        Dashboard Page
      </button>
      <div style={{background:"black", color: "white"}}>
        Hi This is the topbar
      </div>
  </div>);
}
export default App
