import './App.css'
import {Canvas} from '@react-three/fiber'
import Scene from './Scene'
import Scene2 from './Scene2'
import { Tube } from '@react-three/drei';

function App() {

  const creatingCanvasHandler = (state)=> {
    console.log(state);
    state.gl.setClearColor("cyan",.5);   // way of change background color
  };

  return (
    <>
      <Canvas 
      gl={{
        antialias: true,
        alpha: true
      }}
      orthographic
      camera={
        {
          fov: 45,
          near: .1,
          far: 80,
          zoom: 100,
          position: [2,2,6]
        }
      }
      onCreated={creatingCanvasHandler}
      >
        {/* <axesHelper args={[3]}/>
        <gridHelper args={[20,20,"red","orange"]}/> */}
        <Scene2/>
      </Canvas>
    </>
  )
}

export default App
