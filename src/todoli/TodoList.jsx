import React from 'react'
import "./todo.css"
import { useState } from 'react'
const TodoList = () => {
  const[activity,setactivity]=useState("")
  const [listdata,setlistdata]=useState([])
 
 function Addactivity (){
        setlistdata((listdata)=>{
          const updatedlist =[...listdata,activity]
          console.log(updatedlist);
          setactivity("")
          return updatedlist
        })
  }
  function removeactivity(i){
  const updatedlist=listdata.filter((elem,id)=>{
    return i!=id
  })
  setlistdata(updatedlist)
  }

  function removeAll(){
    setlistdata([])
  }

  return (
    <div className='main_div'>
      
      <div className="center_div">
        <h1>todolist</h1>
     
        <input required type="text"  placeholder='Pleas add items' value={activity} 
        onChange={(e)=>setactivity(e.target.value)}/>
        <button onClick={Addactivity}>Add</button>

        {listdata!=[] && listdata.map((data,i)=>{
          return(
            <>
            <p key={i} className='remove'>
            <div>{data}</div>
            <button onClick={()=>removeactivity(i)}>remove</button>
            </p>
            </>
          )
        })}
       {listdata.length>=2 && <button onClick={removeAll}>Remove All</button>}
      </div>
    </div>
  )
}

export default TodoList