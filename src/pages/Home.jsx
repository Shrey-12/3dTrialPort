import { useState, Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import Loader from '../components/Loader'
import  Island  from '../models/Island';
import Sky from '../models/Sky';
import Bird from '../models/Bird';
import Island2 from '../models/Island2';
import Plane from '../models/Plane';


{/* <div className="absolute top-28 left-0 right-0 z-10 flex items-center justify-center">
          <p>helo</p>
      </div> */}

const Home = () => {
  const [currentStage, setCurrentStage] = useState(1);
  const [isRotating, setIsRotating] = useState(false);
  const adjustIslandForScreenSize = () => {
    let screenScale, screenPosition;

    if (window.innerWidth < 768) {
      screenScale = [0.9, 0.9, 0.9];
      screenPosition = [0, -6.5, -43.4];
    } else {
      screenScale = [10, 10, 10];
      screenPosition = [0, -2.5, -33.4];
    }

    return [screenScale, screenPosition];
  }

  const adjustBiplaneForScreenSize = () => {
    let screenScale, screenPosition;

    // If screen width is less than 768px, adjust the scale and position
    if (window.innerWidth < 768) {
      screenScale = [1.5, 1.5, 1.5];
      screenPosition = [0, -1.5, 0];
    } else {
      screenScale = [3, 3, 3];
      screenPosition = [0, -2, -1];
    }

    return [screenScale, screenPosition];
  };
  const [islandScale,islandPosition,islandRotation]=adjustIslandForScreenSize();
  const [biplaneScale, biplanePosition] = adjustBiplaneForScreenSize();
  return (
    <section className="w-full h-screen relative">
   <Canvas
        className={`w-full h-screen bg-transparent ${
          isRotating ? "cursor-grabbing" : "cursor-grab"
        }`}
        camera={{ position: [1, 0, 10], near: 0.1, far: 1000 }}
      >
    <Suspense fallback={<Loader/>}>
      <directionalLight position={[1,1,1]} intensity={2}/>
      <ambientLight intensity={0.5}/>
      <hemisphereLight skyColor="#b1e1ff" groundColor="#000000" intensity={1}/>
      <Sky />
      <Island2
            isRotating={isRotating}
            setIsRotating={setIsRotating}
            setCurrentStage={setCurrentStage}
            position={islandPosition}
            rotation={[0.19, -0.3, 0]}
            scale={islandScale}
          />
          <Plane
            isRotating={isRotating}
            position={biplanePosition}
            rotation={[-0.003, 20.1, 0]}
            scale={biplaneScale}
          />
    </Suspense>
    </Canvas>
    </section>
  )
}

export default Home