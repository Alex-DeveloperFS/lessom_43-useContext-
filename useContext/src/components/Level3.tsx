import {useContext} from "react";
import {PropContext, SecondContext} from "../App.tsx";

const level3 = () => {
  const {value} = useContext(PropContext)
  const {secondValue, setSecondValue} = useContext(SecondContext)

  const handleClick = () => {
    setSecondValue(secondValue === 'Is is second value' ? 'Is is new second value' : 'Is is second value')
  }

  return (
      <div>
        <h4>level 3: {value}</h4>
        <button onClick={handleClick}>Click me</button>
      </div>
  )
}

export default level3