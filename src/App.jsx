import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'

function App() {
  
  let [count,updater]=useState(15);
  const inc=()=>{
    // count=10*Math.random();
    //  console.log("val is ",Math.random());
    //  console.log(count);
    if(count<20){ updater(count+1);}
    console.log(count);
  }

  const dcr=()=>{
    if(count>0){
    updater(count-1);}
  }
    return (
      <>  
      <h1>Hi Sneh </h1>
      <h2> Counter is {count}</h2>
      <button onClick={inc} >increased to {count}</button>
      <br /><br />
      <button onClick={dcr}>decrease</button>
      </>
    )
  
}

export default App
