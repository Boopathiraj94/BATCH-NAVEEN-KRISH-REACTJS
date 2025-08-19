// import logo from './logo.svg';
import './App.css';
import {   useReducer,useRef } from 'react';

function App() {

  // const [count, setCount] = useState(0);
  // const [list, setList] = useState([]);
  let nameRef = useRef('')
  let priceRef = useRef(0)
  let stockRef = useRef(0)

  const counterFun = (state, action) => {
    switch (action.type) {
      case 'INCREMENT':
          
        return ;
      case 'DECREMENT':
        return { count: state.count - 1 };
      case 'RESET':
        return { count: 0 };
      default:
        return state;
    }
  };

  const [state, dispatch] = useReducer(counterFun, [{
    name:"",
    price:0,
    stock:0
  }]);
  console.log(state)
  return (
    <div className="App">
      <header className="App-header">
        <input type='text' ref={nameRef}/> <br />
        <input type='text' ref={priceRef} /><br />
        <input type='text' ref={stockRef} /><br />

        <p></p>
        <button onClick={() => dispatch({ type: 'INCREMENT' })}>add</button>
        <button onClick={() => dispatch({ type: 'DECREMENT' })}>decrement</button>
        <button onClick={() => dispatch({ type: 'RESET' })}>reset</button>
      </header>
    </div>
  );
}

export default App;
