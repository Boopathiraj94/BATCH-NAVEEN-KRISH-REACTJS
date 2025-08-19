import { createSlice } from '@reduxjs/toolkit'

const initialState = [{
    value:0
}];

export  const customerSlice = createSlice({
    name:"customer",
    initialState,
    reducers:{
        incrementFun: function(state,action){
            state.value += action.payload
        }
    }
})

export const {incrementFun} =  customerSlice.actions

export default customerSlice.actions