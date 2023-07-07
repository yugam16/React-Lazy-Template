import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import Home from './components/Home';

function App() {

  const [setInput,setSetinput] = useState('');

  return (
    <>
      <br/> 
      <input type='text' placeholder='Admin/customer Login' onChange={(e)=>setSetinput(e.target.value)}/>
      
      <h3>welcome, {setInput}</h3>

      <Home user={setInput}/>

      <br/>
      <button>Submit Login</button>
    </>
  );
}

export default App;
