import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <BackgroundButtons/>
    </div>
  )
}

function BackgroundButtons(){
  return(<div>
     <button onClick={()=>{this.setState({BackgroundColor:"RED"})}}>Red</button>
      <button>Yellow</button>
      <button>Black</button>
      <button>Purple</button>
      <button>Green</button>
      <button>Blue</button>
      <button>Default</button>
  </div>);

}

export default App
