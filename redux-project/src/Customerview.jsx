import React from 'react'
import { useSelector,useDispatch } from 'react-redux'
import {deleteCustomer as deleteCust } from './app/customerSlicer'

const Customerview = () => {
 const customers =   useSelector((state)=>state.customers)
    const dispatch = useDispatch() 

     function deleteCustomer(indexId){
    dispatch(deleteCust(indexId))
  }


  return (
    <>
    <div>Customerview</div>
      <ul>
    {
     customers.map((cust,index)=>(
      <li key={index}>{cust} 
      <button onClick={()=>deleteCustomer(index)} >Delete</button>
      </li>
     ))
    }
      </ul>
    </>
    
  )
}

export default Customerview