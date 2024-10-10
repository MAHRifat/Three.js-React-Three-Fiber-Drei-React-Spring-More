import {OrbitControls} from '@react-three/drei';
import Custom from './Custom';
import { DoubleSide } from 'three';
const Scene2 = ()=> {
    return(
        <>
            <OrbitControls/>
            {/* <mesh position-z={-10}>
            <boxGeometry/>
            <meshBasicMaterial color={"purple"}/>
            </mesh> */}
            <Custom/>
            <mesh>
            <boxGeometry/>
            <meshBasicMaterial color={"purple"} />
            </mesh>
        </>
    );
};

export default Scene2;