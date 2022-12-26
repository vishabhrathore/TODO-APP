import React, { useState } from "react";
import Global from "./Global";
import { useContext } from "react";
import Tasks from "./Task";
import GlobalData from "./Globaldata";

 


const List= () =>{
    const {value , setValue} = useContext(Global);
    const {data, setData} = useContext(GlobalData)
    console.log(data)
  return(
      <div className="list">
        <h3>TODO List Details</h3>
        <Tasks  />
      </div>
  )
}
export default List