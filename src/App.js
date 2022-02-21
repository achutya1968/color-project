
import './App.css';
import {useState} from "react"
import Header from "./Header"
import Input from "./Input"
import Square from "./Square"
function App() {
  const[colorValue,setColorValue] = useState("")
  const [hexValue,setHexValue] = useState("")
  const [darkText,setDarkText] = useState(true)
  return (
    <div className="App">
   <Header />
     <Square 
     colorValue={colorValue}
     hexValue={hexValue}
     darkText={darkText}
     />
     <Input 
       colorValue={colorValue}
       setColorValue={setColorValue}
       setHexValue={setHexValue}
       darkText={darkText}
       setDarkText={setDarkText}
     />
    </div>
  );
}

export default App;
