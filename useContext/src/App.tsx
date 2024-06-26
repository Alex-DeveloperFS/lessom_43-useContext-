import Level1 from "./components/Level1.tsx"
import {createContext, Dispatch, SetStateAction, useState} from "react";
import Second from "./components/Second.tsx";

export const PropContext = createContext({
  value: ''
})

export const SecondContext = createContext ({
  secondValue: '',
  setSecondValue: (() => {
  }) as Dispatch<SetStateAction<string>>
})

const App = () => {

  const propValue = 'Is is prop value'
  const [secondValue, setSecondValue] = useState('Is is second value')

  return (
    <PropContext.Provider value={{value: propValue}}>
      <SecondContext.Provider value={{ secondValue, setSecondValue }}>
        <div>
          <h1>Example of useContext</h1>
          <Level1/>
          <Second />
        </div>
      </SecondContext.Provider>
    </PropContext.Provider>

  )
}

export default App