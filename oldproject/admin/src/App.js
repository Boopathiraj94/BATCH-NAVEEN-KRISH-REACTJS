
import './App.css';
import { useState } from 'react';
function App() {
  const [text, setText] = useState('');
  const [name, setName] = useState('');
  const [age, setAge] = useState('');

  const handleTextChange = (event) => {
    setText(event.target.value);
  };

  const register = (e)=>{
     
  };
  return (
    <>
      <form >
        <div>
          <label htmlFor="my-text-input">Enter text:</label>
          <input
            id="my-text-input"
            type="text"
            value={text}
            onInput={handleTextChange}
            placeholder="Type something..."
          /> <br />
          <input
            id="my-text-input2"
            type="text"
            value={name}
            onInput={(e) => { setName(e.target.value) }}
            placeholder="name"
          /> <br />
          <input
            id="my-text-input3"
            type="text"
            value={age}
            onInput={(e) => { setAge(e.target.value) }}
            placeholder="age"
          />

          <p>You typed: {text}</p>
        </div>
        <button type='submit' onClick={(e)=>{register(e)}}>Submit</button>
      </form>
    </>
  );
}

export default App;
