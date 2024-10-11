import './App.css'
import Scene from './Scene'
import { Canvas } from "@react-three/fiber";
import {Perf} from "r3f-perf";
import Scene2 from './Scene2';

function App() {
  

  return (
    <>
      <Canvas>
        <Scene2/>
        <Perf position="top-left"/>
      </Canvas>
    </>
  )
}

export default App
