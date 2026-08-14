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
    
    <div>
      {
        apiData
        .filter((a)=>{
          return a.completed===true;

        })
        .map((a)=>{
        return(
          <div key={a.id}>
            <h3>{a.id}</h3>
            <p>{a.title}</p>


          </div>
        )

      })
      }
      </div>
  )
}

export default CompletedToDo