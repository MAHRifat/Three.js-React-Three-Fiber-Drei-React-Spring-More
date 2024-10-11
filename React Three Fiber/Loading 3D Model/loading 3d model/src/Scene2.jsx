import { OrbitControls } from "@react-three/drei";
import {useControls, button} from 'leva';

const Scene2 = () => {

    const {position,color,wireframe,scale} = useControls("cube",{
        position: {
            value: {
                x:0,
                y:0,
                z:0
            },
            min: -10,
            max: 10,
            step: .01,
        },
        color:"#ffffff",
        wireframe: false,
        click:button(()=>{
            console.log("clicked");
        }),
        scale:{options:[1,2,3]},
    });

    const sphera = useControls("sphera",{
        xrotation: 0
    });
    
  return (
    <>
       
    <OrbitControls />
    <ambientLight/>
    <directionalLight position={[0,2,4]}/>

    <mesh position={[position.x,position.y,position.z]} scale={scale}>
        <boxGeometry/>
        <meshStandardMaterial color={color} wireframe={wireframe} />
    </mesh>
     
    </>
  );
};

export default Scene2;
