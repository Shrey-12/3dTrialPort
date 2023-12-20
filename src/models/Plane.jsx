import React from 'react'
import planeScene from '../assets/3d/plane.glb';
import { useGLTF } from "@react-three/drei";

const Plane = ({ isRotating, ...props }) => {
    const plane= useGLTF(planeScene);
  return (
    <mesh {...props} >
        <primitive object={plane.scene}/>
    </mesh>
  )
}

export default Plane