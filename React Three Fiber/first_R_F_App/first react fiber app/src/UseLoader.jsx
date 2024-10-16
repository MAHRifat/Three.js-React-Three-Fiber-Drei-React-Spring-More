import { useLoader } from "@react-three/fiber";
import { TextureLoader } from "three";
const UseLoader = ()=> {
    const texture = useLoader(TextureLoader,"./img/1.png");
    return(
        <>
            <mesh>
                <planeGeometry args={[4,4]}/>
                <meshBasicMaterial map={texture}/>
            </mesh>
        </>
    )
}

export default UseLoader;