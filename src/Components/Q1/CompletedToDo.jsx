import React,{useEffect,useState} from 'react';


const CompletedToDo = () => {
  const[apiData,setApiData]=useState([]);
  useEffect(()=>{
    fetch("https://jsonplaceholder.typicode.com/todos")
    .then((res)=>{
      return res.json();
    })
    .then((data) => {
      console.log(data);
      setApiData(data);
    })
  },[]
);
  return (
    
    <div>CompletedToDo</div>
  )
}

export default CompletedToDo