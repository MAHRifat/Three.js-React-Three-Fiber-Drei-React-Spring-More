import './App.css'
import Scene from './Scene'
import { Canvas } from "@react-three/fiber";
import {Perf} from "r3f-perf";

function App() {
  

  return (
    <>
      <Canvas>
        <Scene/>
        <Perf position="top-left"/>
      </Canvas>
    </>
  )
}

export default App
