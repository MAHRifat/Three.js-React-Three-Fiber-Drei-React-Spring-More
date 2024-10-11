import { useLoader,useFrame } from "@react-three/fiber";
import { useRef } from "react";
import { TextureLoader } from "three";
const Particles = ()=> {
    const particles = useRef();
    console.log(particles);

    useFrame((state,delta)=>{
        particles.current.rotation.y += delta *.1;
        particles.current.rotation.x += delta * .1;
    });



    const texture = useLoader(TextureLoader,"./img/snow.jpg");

    const verticesAmount = 2000;
    const positionArray = new Float32Array(verticesAmount * 3);

    for(let i=0;i<verticesAmount *3 ; i++){
        positionArray[i]=(Math.random() -.5) * 10;
    }
    return(
        <points ref={particles}>
            <bufferGeometry>
                <bufferAttribute 
                attach={"attributes-position"} 
                count={positionArray.length} 
                itemSize={3} 
                array={positionArray}
                />
            </bufferGeometry>
            <pointsMaterial 
            size={.04} 
            alphaMap={texture} 
            transparent 
            depthTest={false}
            />
        </points>
    )
}

export default Particles;