import React, { useState } from "react";
import GlobalData from "./Globaldata";
import Global from "./Global";
import { useContext } from "react";
import "../styles/App.css"
import del from "../publiic/del.jpg"
import edit from "../publiic/edit.png"
import Card from "./card";
import GlobalIndex from "./Globalindex";




const Task = () =>{
  const [strikeThrough, setStrikeThrough] = useState(false)
  const {value, setValue} = useContext(Global)
  const {data, setData} = useContext(GlobalData)
  const {ind, setInd} = useContext(GlobalIndex)
  const dele = (index) => {
    setData([
      ...data.slice(0, index),
      ...data.slice(index + 1, data.length)
    ]);         
  }
  const forEdit = (index) =>{
    const editValue = data[index]
    setValue({...value,title:editValue.title,desc:editValue.desc})
    setInd({...ind,indx:index,state:false})
  }

  const listItems = data.map(
  (element , index) => {
      return (
          <div >
          <div className="listItem"><div className="left" onClick={()=>{setStrikeThrough(!strikeThrough); console.log(strikeThrough)}}>{`${index+1} | ${element.title}`}</div><div className="right"><input type="checkbox" id="done" value={index}/><img className="edit" src = {edit} onClick={() => {forEdit(index)}}/><img className="delete" src = {del} onClick={() => {dele(index)}}/></div></div>{strikeThrough === true ? <Card currData = {data[index]} /> : <div></div>} 
          </div>
      )
  }
)
return (
    <div>
        {listItems}
    </div>
)
}
export default Task
