import React, { useEffect, useState } from 'react'
import './App.css'

function App() {
  // let online = useIsOnline();
  const [count,setCount] =useState(0);

  useInterval(() => {
    setCount(co=>co+1);
  } , 1000);

  return <div>
    User is  {count}
  </div>
}

export function useInterval(fn,timeOut){
  useEffect(() => {
    setInterval(fn,timeOut);
  },[]);
  
}

// export function useIsOnline(){
//   const [online, setOnline] =useState(window.navigator.onLine);
  
//   useEffect(()=>{
//     window.addEventListener("online",()=>{
//       setOnline(true);
//     });
//     window.addEventListener("offline",()=>{
//       setOnline(false);
//     })
//   },[]);
//   return online;
// }

export default App
