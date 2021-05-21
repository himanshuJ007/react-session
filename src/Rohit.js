import './App.css';
import 'antd/dist/antd.css';
import { Input, Button } from 'antd';
import {useEffect, useState} from "react";

// const val = [];

function Rohit(props) {
   const [tasks,setTasks] = useState([]);
   const [input,setInput] = useState('');
   const handleInputChange = (e)=>{
        setInput(e.target.value);
   }
   const handleOnAdd = ()=>{
       let newArr = tasks;
       newArr.push(input);
       setTasks(Array.from([...newArr]));
       setInput('');
   }

  return (
    <div className="App">
        <div style={{display:'flex',width:'200px'}}>
            <Input value={input} onChange={handleInputChange} />
            <Button onClick={handleOnAdd}>Add</Button>
        </div>
        <ul>
            {tasks.map((task)=>{
                return <li>{task}</li>
            })}
        </ul>


    </div>
  );
}

export default Rohit;
