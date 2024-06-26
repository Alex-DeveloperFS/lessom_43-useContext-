import {SecondContext} from "../App.tsx";
import {useContext, useEffect} from "react";

const Second = () => {

  const {secondValue, setSecondValue} = useContext(SecondContext)

  useEffect(() => {
    setSecondValue('Is is second value')
  }, [setSecondValue])

  return (
    <div>
      <h2 style={{color: 'red'}}>level 3: {secondValue}</h2>
    </div>
  )
}

export default Second