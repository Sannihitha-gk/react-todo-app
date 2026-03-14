import logo from './logo.svg';
import './App.css';
import { createRoot } from 'react-dom/client';
import { useState, useRef, useEffect } from 'react';
function App() {
 const [inputValue, setInputValue] = useState("");
 const previousInputValue = useRef("");
 useEffect(() => {
 previousInputValue.current = inputValue;
 }, [inputValue]);
 return (
 <>
 <input
 type="text"
 value={inputValue}
 onChange={(e) => setInputValue(e.target.value)}
 />
 <h2>Current Value: {inputValue}</h2>
 <h2>Previous Value: {previousInputValue.current}</h2>
 </>
 );
}
export default App;