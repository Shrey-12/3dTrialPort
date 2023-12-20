import React from 'react'
import birdScene from '../assets/3d/simple_bird.glb';
import { useGLTF } from "@react-three/drei";

const Bird = () => {
    const bird= useGLTF(birdScene);
  return (
    <mesh>
        <primitive object={bird.scene}/>
    </mesh>
  )
}

export default Bird