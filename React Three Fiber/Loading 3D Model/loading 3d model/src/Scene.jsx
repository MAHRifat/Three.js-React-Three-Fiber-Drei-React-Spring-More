import { OrbitControls } from "@react-three/drei";
import {Suspense} from 'react'
import Model from "./Model";
import { Bike } from "./Bike";

const Scene = () => {
  return (
    <>
       
        <ambientLight intensity={2}/>
        <directionalLight/>
      <OrbitControls />

        <Suspense fallback={
            <mesh>
            <boxGeometry args={[4, 4]} />
            <meshBasicMaterial wireframe/>
          </mesh>
        }>
            <Model/>
        </Suspense>

        <Bike position={[-.5,.75,0]}/>
     
    </>
  );
};

export default Scene;
