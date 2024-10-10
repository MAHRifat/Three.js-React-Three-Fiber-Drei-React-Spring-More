import { useFrame,extend, useThree } from "@react-three/fiber";
import { useRef } from "react";
import { DoubleSide } from "three";
import {OrbitControls} from 'three/examples/jsm/controls/OrbitControls';
// import {OrbitControls} from '@react-three/drei';

extend({OrbitControls: OrbitControls});

const Scene = ()=> {
    // animation
    const cubeReg = useRef();
    const plainRef = useRef();
    const {gl, camera} = useThree();
   

    useFrame((state, delta)=> {
        cubeReg.current.rotation.y += delta;
        plainRef.current.rotation.y += delta;
        state.camera.position.x = Math.sin(state.clock.elapsedTime);
    });

    return(
        // <group position-x={1}>
        // <mesh position-x={-2} rotation-x={Math.PI * .2} scale={1.5}>
        // <torusBufferGeometry />
        // <meshNormalMaterial color="hotpink" />
        // </mesh>
        // <mesh position={[6,0,0]} scale={[2,2,2]}>
        // <torusBufferGeometry />
        // <meshNormalMaterial color="hotpink" />
        // </mesh>
        // </group>

        <>
            <orbitControls args={[camera, gl.domElement]}/>
            {/* <OrbitControls/> */}
            <mesh ref={plainRef} position={[-2,0,0]}>
            <planeGeometry args={[2,2]}/>
            <meshBasicMaterial color={"orange"} side={DoubleSide}/>
            </mesh>
            <mesh ref={cubeReg} position={[2,0,0]}>
            <boxGeometry args={[2,2,2]}/>
            <meshBasicMaterial color={"red"}/>
            </mesh>
        </>
    );
};

export default Scene;