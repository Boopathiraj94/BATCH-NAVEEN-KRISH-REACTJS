import { configureStore } from '@reduxjs/toolkit'
import customerSlicer from './customerSlicer'
export const store =  configureStore({
    devTools:false,
    reducer: {
        customers:customerSlicer
    },
 })