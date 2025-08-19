import React, { useReducer, useRef } from 'react'
const initialVal = [];

function reducer(state, action) {

    switch (action.type) {
        case "ADD":
            return [...state, {
                id: Date.now(),
                pname: action.payload.productName,
                price: action.payload.price,
                stock: action.payload.stock,
                desc: action.payload.desc,
            }]
        case "DELETE":
            // console.log(action.payload.id)
            return state.filter(todo => todo.id !== action.payload)

        case "UPDATE":

            return state.map(todo => (
                todo.id === action.payload.id ?
                    {
                        ...todo,
                        pname: action.payload.productName,
                        price: action.payload.price,
                        stock: action.payload.stock,
                        desc: action.payload.desc,
                    } :
                    todo
            ));

        case "default":
            return state;

    }

}
// crud => create, read , update, delete => action
// state => useState
function Add() {
    const [todos, dispatch] = useReducer(reducer, initialVal)
    let pnameRef = useRef()
    let priceRef = useRef()
    let stockRef = useRef()
    let descRef = useRef()
    let idRef = useRef()

    function handleAdd() {
        let pname = pnameRef.current.value
        let price = priceRef.current.value
        let stock = stockRef.current.value
        let desc = descRef.current.value


        dispatch({
            type: "ADD",
            payload: {
                productName: pname,
                price: price,
                stock: stock,
                desc: desc,
            }
        })

        reset()
    }

    // reset 
    function reset(){
        pnameRef.current.value = ""
        priceRef.current.value = ""
        stockRef.current.value =""
        descRef.current.value = ""
    }

    function deleteFun(id) {

        dispatch({ type: "DELETE", payload: id })
    }

    // update Data

    function updateData() {
        let pname = pnameRef.current.value
        let price = priceRef.current.value
        let stock = stockRef.current.value
        let desc = descRef.current.value
        let id = idRef.current.value
        //    console.log({
        //             productName: pname,
        //             price: price,
        //             stock: stock,
        //             desc: desc,
        //             id:id
        //         })
        dispatch({
            type: "UPDATE",
            payload: {
                productName: pname,
                price: price,
                stock: stock,
                desc: desc,
                id: Number(id)
            }
        })
        reset()
    }


    // set Update 
    function setUpdate(list) {
        pnameRef.current.value = list.pname;
        priceRef.current.value = list.price;
        stockRef.current.value = list.stock;
        descRef.current.value = list.desc;
        idRef.current.value = list.id
    }
    return (
        <>
            <h1>TodoList </h1>
            <input type="hidden" ref={idRef} /> <br />
            <label htmlFor="">Enter ProductName</label>
            <input type="text" ref={pnameRef} /> <br />

            <label htmlFor="">Enter Price</label>
            <input type="text" ref={priceRef} /><br />

            <label htmlFor="">Enter Stock</label>
            <input type="text" ref={stockRef} /><br />

            <label htmlFor="">Enter Desc</label>
            <input type="text" ref={descRef} /> <br />

            <button onClick={handleAdd}>Add</button>
            <button onClick={updateData}>Update</button>

            <table style={{ width: '100%', border: '2px solid red' }}>
                <caption>Product List [Length: {todos.length} ]</caption>
                <thead>
                    <tr>
                        <th>Sno</th>
                        <th>ProductName</th>
                        <th>Price</th>
                        <th>Stock</th>
                        <th>Desc</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {

                        todos.map((todo, index) => (
                            <tr key={index}>
                                <td>{index + 1}</td>
                                <td>{todo.pname}</td>
                                <td>{todo.price}</td>
                                <td>{todo.stock}</td>
                                <td>{todo.desc}</td>
                                <td>
                                    <button
                                        onClick={() => {
                                            setUpdate(todo)
                                        }}
                                    >Edit</button>
                                    <button onClick={() => { deleteFun(todo.id) }}>Delete</button>
                                </td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </>
    )
}

export default Add;