import { useState } from 'react'
 
import './App.css'

function App() {
  
  const [name,setName] = useState("")
  const [todolist,setTodolist] = useState([])

 function handleAdd(){ 

    setTodolist(preList => [...preList, name])
   
 }
//  console.log(todolist)
  return (
    <>
     <h1>Toto list</h1>
     <input type="text" value={name} onChange={(e)=> setName(e.target.value)} /> <button onClick={handleAdd}>Add</button>

     <ul>
      {
        todolist.map((list,index) => (
          <li key={index}>{list}</li>
        ))
      }
     </ul>
    </>
  )
}

export default App
