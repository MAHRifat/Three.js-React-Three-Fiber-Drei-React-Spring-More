import {useLoader} from "@react-three/fiber";
import {GLTFLoader} from "three/examples/jsm/loaders/GLTFLoader";
import {useGLTF, useAnimations} from "@react-three/drei";
import {useEffect} from 'react';
const Model = ()=> {
    const model = useGLTF("./model/dog.glb");
    const animations = useAnimations(model.animations, model.scene);
    console.log(animations);
    // const model = useLoader(GLTFLoader,"./model/dog.glb");
    console.log(model);

    useEffect(()=>{
        animations.actions.Travel.play();
    },[]);

    return(
        <>
             <ambientLight intensity={2}/>
            <primitive position-y={-.4} object={model.scene}/>  
        </>
    );
};

useGLTF.preload("./model/dog.glb");

export default Model;