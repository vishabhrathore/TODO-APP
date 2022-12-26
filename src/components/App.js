import React from "react";
import "./../styles/App.css";
import ToDoList from "./TODOList";
import List from "./List";
import { useState } from "react";
import Global from "./Global";
import GlobalData from "./Globaldata";
import GlobalIndex from "./Globalindex";
const App = () =>{
    const [value , setValue] = useState({title:"",desc:""})
	const [data,setData] = useState([])
	const [chBtn,setBtn] = useState(true)
	const [ind, setInd] = useState({indx:null,state:true})

    return(
		<div>
			<GlobalIndex.Provider value={{ind , setInd}}>
			<GlobalData.Provider value={{data , setData}}>
			   <Global.Provider value = {{value, setValue}}>
				<ToDoList />
				<List/>
			    </Global.Provider>
			</GlobalData.Provider>
			</GlobalIndex.Provider>
			
		</div>
	)
	

}


export default App;
