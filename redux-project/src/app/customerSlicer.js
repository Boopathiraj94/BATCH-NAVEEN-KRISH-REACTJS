import { createSlice } from '@reduxjs/toolkit'

const initialState =[];

export const customerSlicer =  createSlice({
    name: 'customerTest',
    initialState,
    reducers:{
        addCustomer: (state, action)=>{ 
              state.push(action.payload)  
        },
        deleteCustomer: (state,action) =>{
           return state.filter((ele,index)=> index !== action.payload)
        }
    }
})

export const {addCustomer,deleteCustomer}  =  customerSlicer.actions

export default customerSlicer.reducer