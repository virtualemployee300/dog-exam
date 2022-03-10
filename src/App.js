import React,{useState,useEffect} from "react";
import "./App.css"
import axios from "axios";

function App() {
  const [allDogs,setAllDogs] = useState([]);
  
  const addDogs=async()=>{
      const res = await axios.get("https://dog.ceo/api/breeds/image/random"); 
      const newDogsData=res.data;
      setAllDogs([...allDogs,{newDogsData}]);
}
  

  return (
    <div className="App">
      <div className="container">Dogs go here...</div>
      <div>
       {allDogs.map((data)=>(
          <img src={data.newDogsData.message} className="img"/>
        ))} 
       <button type="button" className="btn" onClick={(e)=>addDogs()}> 
       <i className="fa fa-plus txt"></i>
       <br/>
       <span className="btnSpan">Add Dog</span>
       </button>
    </div>
    </div>
  )
}

export default App
