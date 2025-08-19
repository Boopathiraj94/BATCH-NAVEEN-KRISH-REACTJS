
 
import {useDispatch } from 'react-redux'
import './App.css'
import { addCustomer } from './app/customerSlicer'
import { useState } from 'react'
import Customerview from './Customerview'

function App() {

 

  const dispatch = useDispatch() 

  const [name,setName] = useState("")

  function handleAdd() {
    dispatch(addCustomer(name))
    setName("")
  }

 
  return (
    <>
      <h1>Redux - concept</h1>
      <label htmlFor="">Enter Name</label> <br />
      <input type="text" value={name} onChange={(e)=>setName(e.target.value)} />
      <button onClick={handleAdd}>Add</button> 
      <Customerview />
    </>
  )
}

export default App
