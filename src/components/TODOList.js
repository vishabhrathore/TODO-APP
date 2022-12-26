import React, { useState } from "react";
import Global from "./Global";
import { useContext } from "react";
import GlobalData from "./Globaldata";
import GlobalIndex from "./Globalindex";

const ToDoList = () =>{
    const {value , setValue} = useContext(Global);
    const {data, setData} = useContext(GlobalData)
    const {ind, setInd} = useContext(GlobalIndex)
    const handleAdd = () =>{
      if(value.title){
     {setData(data =>[...data,{title:value.title, desc: value.desc}])}
        }
        setValue({...value,title:"",desc:""})
    }

    const update = () =>{
        const size = data.length
        if(!value.title){
            return false
        }
        setData([
            ...data.slice(0, ind.indx),
            value,
            ...data.slice(ind.indx + 1, size)
          ]);
        setValue({...value,title:"",desc:""})
        setInd({...ind,state:true})
    }
    return(
        <div className="input" >
        <label>List Title</label>
        <input type="text" value={value?.title} onChange={(e)=>{setValue({...value, title:e.target.value})}}/>
        <label>List Description</label>
        <textarea id="task" value={value?.desc} name="description" rows="4" cols="50" onChange={(e)=>{setValue({...value, desc:e.target.value})}}/>
        {ind.state ? <button onClick={handleAdd} id="btn">Add To TODO List</button> : <button onClick={update} id="btn">Update</button>}
        </div>
    )
}

export default ToDoList