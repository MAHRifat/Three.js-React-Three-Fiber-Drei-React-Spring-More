import './App.css'
import {Canvas} from '@react-three/fiber'
import Scene from './Scene'
import Scene2 from './Scene2'
import { Tube } from '@react-three/drei';
import UseLoader from './UseLoader';

function App() {

  const creatingCanvasHandler = (state)=> {
    console.log(state);
    state.gl.setClearColor("cyan",.5);   // way of change background color
  };

  return (
    <>
      <Canvas>
        {/* <UseLoader/> */}
        <Scene2/>
      </Canvas>
    </>
  )
}

export default App
