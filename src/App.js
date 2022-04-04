import { useCallback, useMemo, useState } from "react";
import './index.css'
import UserCallbackHooks from "./components/UseCallbackHooks";
import MemoHOC from "./components/MemoHOC";

function App() {
  const [name, setName] = useState('')
  const [price, SetPrice] = useState('')

  const handleInputName = (e) => {
    setName(e.target.value)
  }

  const handleInputPrice = useCallback((e) => {
    SetPrice(e.target.value)
  }, [])

  return (
    <div className="App">
      <p>Name: {name}</p>
      <p>Price: {price}</p>
      <MemoHOC name={name} />
      <div></div>
      <input type="text" value={name} placeholder="name" onChange={handleInputName} />
      <UserCallbackHooks price={price} handleInputPrice={handleInputPrice} />
    </div>
  );
}

export default App;
