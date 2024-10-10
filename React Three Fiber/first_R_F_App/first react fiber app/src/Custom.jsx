import { DoubleSide } from "three";

function Custom(){
    const postionArray = new Float32Array([
        0,0,0,
        0,1,0,
        1,0,0
    ]);
    return(
        <>
        <mesh>
            <bufferGeometry>
                <bufferAttribute attach="attributes-position" count={3} itemSize={3} array={postionArray}/>
            </bufferGeometry>
            <meshBasicMaterial color={"red"} side={DoubleSide}/>
        </mesh>
        </>
    )
};

export default Custom;