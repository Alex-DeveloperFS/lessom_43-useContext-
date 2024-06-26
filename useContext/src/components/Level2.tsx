import Level3 from "./Level3.tsx";
import {useContext} from "react";
import {PropContext} from "../App.tsx";

const level2 = () => {
  const {value} = useContext(PropContext)

  return (
      <div>
        <h3>level 2: {value}</h3>
        <Level3 />
      </div>
  )
}
export default level2