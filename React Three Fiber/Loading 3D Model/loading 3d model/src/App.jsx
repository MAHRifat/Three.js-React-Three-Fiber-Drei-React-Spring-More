import './App.css'
import Scene from './Scene'
import { Canvas } from "@react-three/fiber";
import {Perf} from "r3f-perf";
import Scene2 from './Scene2';
import Scene3 from './Scene3';

function App() {
  

  return (
    <>
      <Canvas>
        <Scene3/>
        <Perf position="top-left"/>
      </Canvas>
    </>
  )
}

export default App
