import Level2 from "./Level2.tsx";
import {PropContext} from "../App.tsx";
import {useContext} from "react";


const level1 = () => {

  const {value} = useContext(PropContext)

  return (
      <div>
        <h2>level 1: {value}</h2>
        <Level2/>
      </div>
  )
}

export default level1