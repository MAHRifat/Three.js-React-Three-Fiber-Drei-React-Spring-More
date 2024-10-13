import { OrbitControls } from "@react-three/drei";
import {useState} from 'react';
const Scene3 = () => {
    const [active, setActive] = useState(false);
    const clickHandler = ()=>{
        setActive(!active);
        console.log("clicked");
    }
  return (
    <>
       
      <OrbitControls />

        
        <mesh onDoubleClick={clickHandler} position={[1,0,0]}>
            <boxGeometry />
            <meshBasicMaterial color={"orange"} wireframe={active}/>
        </mesh>
        <mesh onClick={(e)=> {e.stopPropagation();}} position={[-1,0,0]}>
            <boxGeometry />
            <meshBasicMaterial color={"red"} />
        </mesh>
        
     
    </>
  );
};

export default Scene3;
