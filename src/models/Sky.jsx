import { useRef } from 'react'
import skyScene from '../assets/3d/sky.glb';
import { useGLTF } from "@react-three/drei";

const Sky = () => {
    const sky= useGLTF(skyScene);
    console.log(sky.scene);
  return (
    <mesh>
        <primitive object={sky.scene} />
    </mesh>
  );
}

export default Sky