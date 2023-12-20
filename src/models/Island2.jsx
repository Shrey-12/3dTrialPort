import { a } from "@react-spring/three";
import { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import islandScene from "../assets/3d/island2.glb";

const Island2 = (props) => {
  const islandRef = useRef();
  const { nodes, materials } = useGLTF(islandScene);
  return (
    <a.group ref={islandRef} {...props}>
      <group position={[0.061, -0.006, -0.028]} rotation={[-Math.PI / 2, 0, 0]}>
        <group rotation={[Math.PI / 2, 0, 0]}>
          <group position={[-0.25, -2.324, 0.072]} scale={[1.87, 1.683, 1.87]}>
            <mesh
              geometry={nodes.Object_4.geometry}
              material={materials.Light_brown_base}
            />
            <mesh
              geometry={nodes.Object_5.geometry}
              material={materials.Mid_Brown_base}
            />
            <mesh
              geometry={nodes.Object_6.geometry}
              material={materials.Dark_brown_base}
            />
          </group>
          <group
            position={[-1.352, 0.204, 0.101]}
            rotation={[-0.002, 0.115, 0.065]}
            scale={[0.718, 0.718, 1.267]}
          >
            <mesh
              geometry={nodes.Object_34.geometry}
              material={materials.Walls}
            />
            <mesh
              geometry={nodes.Object_35.geometry}
              material={materials.Lights}
            />
          </group>
          <mesh
            geometry={nodes.Object_8.geometry}
            material={materials.Grass}
            position={[-0.251, -0.482, 0.072]}
            scale={1.985}
          />
          <mesh
            geometry={nodes.Object_10.geometry}
            material={materials.Grass_green}
            position={[-0.392, -0.589, 0.337]}
            rotation={[Math.PI / 2, 0, -1.12]}
            scale={[0.052, 0.186, 0.186]}
          />
          <mesh
            geometry={nodes.Object_12.geometry}
            material={materials.Grass_green}
            position={[-0.38, -0.588, 0.408]}
            rotation={[1.861, -0.112, -0.93]}
            scale={[0.029, 0.139, 0.119]}
          />
          <mesh
            geometry={nodes.Object_14.geometry}
            material={materials.Grass_green}
            position={[-0.345, -0.612, 0.354]}
            rotation={[Math.PI / 2, 0, 1.823]}
            scale={[0.027, 0.253, 0.152]}
          />
          <mesh
            geometry={nodes.Object_16.geometry}
            material={materials.Grass_green}
            position={[-0.347, -0.588, 0.311]}
            rotation={[1.36, -0.007, 1.568]}
            scale={[0.018, 0.116, 0.114]}
          />
          <mesh
            geometry={nodes.Object_18.geometry}
            material={materials.Grass_green}
            position={[-0.355, -0.586, 0.513]}
            rotation={[Math.PI / 2, 0, -2.127]}
            scale={[0.033, 0.072, 0.186]}
          />
          <mesh
            
            
            geometry={nodes.Object_20.geometry}
            material={materials.Grass_green}
            position={[-0.387, -0.586, 0.539]}
            rotation={[1.862, 0.108, -0.229]}
            scale={[0.029, 0.139, 0.119]}
          />
          <mesh
            geometry={nodes.Object_22.geometry}
            material={materials.Grass_green}
            position={[-0.325, -0.61, 0.513]}
            rotation={[Math.PI / 2, 0, 2.781]}
            scale={[0.027, 0.253, 0.152]}
          />
          <mesh
            geometry={nodes.Object_24.geometry}
            material={materials.Grass_green}
            position={[-0.313, -0.585, 0.481]}
            rotation={[1.363, -0.033, 1.689]}
            scale={[0.018, 0.116, 0.114]}
          />
          <mesh
            geometry={nodes.Object_26.geometry}
            material={materials.Grass_green}
            position={[-0.382, -0.581, 0.213]}
            rotation={[1.723, -0.271, -1.625]}
            scale={[0.029, 0.139, 0.119]}
          />
          <mesh
            geometry={nodes.Object_28.geometry}
            material={materials.Grass_green}
            position={[-0.287, -0.605, 0.411]}
            rotation={[Math.PI / 2, 0, 1.823]}
            scale={[0.027, 0.253, 0.152]}
          />
          <mesh
            geometry={nodes.Object_30.geometry}
            material={materials.Grass_green}
            position={[-0.29, -0.578, 0.501]}
            rotation={[1.855, 0.126, -0.165]}
            scale={[0.029, 0.139, 0.119]}
          />
          <mesh
            geometry={nodes.Object_32.geometry}
            material={materials.Grass_green}
            position={[-0.284, -0.602, 0.371]}
            rotation={[Math.PI / 2, 0, -1.709]}
            scale={[0.027, 0.253, 0.152]}
          />
          <mesh
            geometry={nodes.Object_37.geometry}
            material={materials.Thatch}
            position={[-1.352, 0.204, 0.101]}
            rotation={[-0.002, 0.115, 0.065]}
            scale={1.102}
          />
          <mesh
            geometry={nodes.Object_39.geometry}
            material={materials.Beams}
            position={[-1.417, 1.431, 0.238]}
            rotation={[-0.002, 0.115, 0.065]}
            scale={[0.06, 0.09, 0.09]}
          />
          <mesh
            geometry={nodes.Object_41.geometry}
            material={materials.Beams}
            position={[-1.217, 0.514, 1.254]}
            rotation={[-0.001, 0.093, 0.065]}
            scale={[0.056, 0.056, 0.023]}
          />
          <mesh
            
            
            geometry={nodes.Object_43.geometry}
            material={materials.Beams}
            position={[-1.47, 1.075, 1.341]}
            rotation={[0.123, 0.111, 1.095]}
            scale={[0.022, 0.037, 0.015]}
          />
          <mesh
            
            
            geometry={nodes.Object_45.geometry}
            material={materials.Beams}
            position={[-1.242, 0.988, 1.29]}
            rotation={[0.011, 0.072, 0.168]}
            scale={[0.025, 0.043, 0.019]}
          />
          <mesh
            
            
            geometry={nodes.Object_47.geometry}
            material={materials.Beams}
            position={[-1.003, 1.106, 1.287]}
            rotation={[0.069, 0.217, 2.101]}
            scale={[0.022, 0.037, 0.015]}
          />
          <mesh
            
            
            geometry={nodes.Object_49.geometry}
            material={materials.Beams}
            position={[-1.462, 0.667, 1.3]}
            rotation={[0.098, 0.262, 2.508]}
            scale={[0.016, 0.036, 0.014]}
          />
          <mesh
            
            
            geometry={nodes.Object_51.geometry}
            material={materials.Beams}
            position={[-0.748, 0.048, 1.161]}
            rotation={[3.14, -0.115, -0.065]}
            scale={[-0.048, 0.048, 0.048]}
          />
          <mesh
            
            
            geometry={nodes.Object_53.geometry}
            material={materials.Beams}
            position={[-0.748, 0.048, 1.161]}
            rotation={[3.14, -0.115, -0.065]}
            scale={[-0.048, 0.048, 0.048]}
          />
          <mesh
            
            
            geometry={nodes.Object_55.geometry}
            material={materials.Beams}
            position={[-0.748, 0.048, 1.161]}
            rotation={[3.14, -0.115, -0.065]}
            scale={[-0.048, 0.048, 0.048]}
          />
          <mesh
            
            
            geometry={nodes.Object_57.geometry}
            material={materials.Beams}
            position={[-0.748, 0.048, 1.161]}
            rotation={[3.14, -0.115, -0.065]}
            scale={[-0.048, 0.048, 0.048]}
          />
          <mesh
            
            
            geometry={nodes.Object_59.geometry}
            material={materials.Beams}
            position={[-1.009, 1.106, 1.237]}
            rotation={[0.069, 0.217, 2.101]}
            scale={[0.022, 0.037, 0.015]}
          />
          <mesh
            
            
            geometry={nodes.Object_61.geometry}
            material={materials.Beams}
            position={[-1.223, 0.514, 1.202]}
            rotation={[-0.001, 0.093, 0.065]}
            scale={[0.056, 0.056, 0.023]}
          />
          <mesh
            
            
            geometry={nodes.Object_63.geometry}
            material={materials.Beams}
            position={[-1.475, 1.075, 1.294]}
            rotation={[0.123, 0.111, 1.095]}
            scale={[0.022, 0.037, 0.015]}
          />
          <mesh
            
            
            geometry={nodes.Object_65.geometry}
            material={materials.Beams}
            position={[-1.352, 0.204, 0.101]}
            rotation={[-0.002, 0.115, 0.065]}
            scale={[0.718, 0.718, 1.267]}
          />
          <mesh
            
            
            geometry={nodes.Object_67.geometry}
            material={materials.Beams}
            position={[-1.352, 0.204, 0.101]}
            rotation={[-0.002, 0.115, 0.065]}
            scale={[0.718, 0.718, 1.267]}
          />
          <mesh
            
            
            geometry={nodes.Object_69.geometry}
            material={materials.Beams}
            position={[-1.352, 0.204, 0.101]}
            rotation={[-0.002, 0.115, 0.065]}
            scale={[0.718, 0.718, 1.267]}
          />
          <mesh
            
            
            geometry={nodes.Object_71.geometry}
            material={materials.Beams}
            position={[-1.352, 0.204, 0.101]}
            rotation={[-0.002, 0.115, 0.065]}
            scale={[0.718, 0.718, 1.267]}
          />
          <mesh
            
            
            geometry={nodes.Object_73.geometry}
            material={materials.Beams}
            position={[-1.358, -0.228, 1.251]}
            rotation={[-0.002, 0.115, 0.065]}
            scale={[0.756, 0.753, 1.268]}
          />
          <mesh
            
            
            geometry={nodes.Object_75.geometry}
            material={materials.Beams}
            position={[-1.025, 0.072, 1.195]}
            rotation={[0.063, 0.119, 0.057]}
            scale={[0.014, 0.237, 0.014]}
          />
          <mesh
            
            
            geometry={nodes.Object_77.geometry}
            material={materials.Beams}
            position={[-1.025, 0.072, 1.198]}
            rotation={[-0.001, 0.105, -1.506]}
            scale={[0.014, 0.097, 0.014]}
          />
          <mesh
            
            
            geometry={nodes.Object_79.geometry}
            material={materials.Beams}
            position={[-1.18, 0.754, 1.267]}
            rotation={[0.062, 0.108, 0.054]}
            scale={[0.014, 0.111, 0.014]}
          />
          <mesh
            
            
            geometry={nodes.Object_81.geometry}
            material={materials.Beams}
            position={[-1.18, 0.754, 1.269]}
            rotation={[-0.001, 0.105, -1.506]}
            scale={[0.014, 0.111, 0.014]}
          />
          <mesh
            
            
            geometry={nodes.Object_83.geometry}
            material={materials.Beams}
            position={[-1.637, 0.083, -0.998]}
            rotation={[-0.034, 0.113, 0.069]}
            scale={[0.014, 0.276, 0.014]}
          />
          <mesh
            
            
            geometry={nodes.Object_85.geometry}
            material={materials.Beams}
            position={[-1.625, 0.083, -1.002]}
            rotation={[-0.098, 0.098, -1.495]}
            scale={[0.014, 0.182, 0.014]}
          />
          <mesh
            
            
            geometry={nodes.Object_87.geometry}
            material={materials.Beams}
            position={[-1.599, 0.846, -1.116]}
            rotation={[-0.07, 0.099, 0.069]}
            scale={[0.021, 0.16, 0.021]}
          />
          <mesh
            
            
            geometry={nodes.Object_89.geometry}
            material={materials.Beams}
            position={[-1.598, 0.847, -1.113]}
            rotation={[-0.133, 0.095, -1.491]}
            scale={[0.021, 0.161, 0.021]}
          />
          <mesh
            
            
            geometry={nodes.Object_91.geometry}
            material={materials.Door}
            position={[-1.359, -0.222, 1.245]}
            rotation={[-0.002, 0.115, 0.067]}
            scale={[0.573, 0.655, 1.003]}
          />
          <mesh
            
            
            geometry={nodes.Object_93.geometry}
            material={materials.Beams}
            position={[-1.375, 0.012, 1.255]}
            rotation={[0.038, 0.118, 0.043]}
            scale={[1.37, 1.207, 1.09]}
          />
          <mesh
            
            
            geometry={nodes.Object_95.geometry}
            material={materials.Beams}
            position={[-1.349, -0.351, 1.241]}
            rotation={[0.032, 0.118, 0.071]}
            scale={[1.37, 1.208, 1.09]}
          />
          <mesh
            
            
            geometry={nodes.Object_100.geometry}
            material={materials.Black_metal}
            position={[-1.024, 0.928, -0.855]}
            rotation={[-3.134, 0.033, 0.236]}
            scale={[-0.091, 0.091, 0.091]}
          />
          <mesh
            
            
            geometry={nodes.Object_102.geometry}
            material={materials.Black_metal}
            position={[-1.273, 1.521, 1.509]}
            rotation={[-0.002, 0.115, 0.065]}
            scale={[0.003, 0.033, 0.003]}
          />
          <mesh
            
            
            geometry={nodes.Object_104.geometry}
            material={materials.Beams}
            position={[-1.425, -0.19, 1.265]}
            rotation={[3.14, -0.115, -0.065]}
            scale={[-0.014, 0.014, 0.014]}
          />
          <mesh
            
            
            geometry={nodes.Object_106.geometry}
            material={materials.Lilly_green}
            position={[0.095, -0.498, 0.527]}
            rotation={[-Math.PI, -0.863, 0]}
            scale={1.399}
          />
          <mesh
            
            
            geometry={nodes.Object_108.geometry}
            material={materials.Lilly_green}
            position={[0.32, -0.498, 0.596]}
            rotation={[0, -1.352, Math.PI]}
            scale={1.232}
          />
          <mesh
            
            
            geometry={nodes.Object_110.geometry}
            material={materials.Lilly_green}
            position={[0.172, -0.497, 0.711]}
            rotation={[0, -0.244, Math.PI]}
            scale={0.883}
          />
          <mesh
            
            
            geometry={nodes.Object_112.geometry}
            material={materials.Dark_green}
            position={[0.862, -0.388, 0.177]}
            rotation={[-2.922, -0.036, -0.286]}
            scale={[-0.126, 0.126, 0.087]}
          />
          <mesh
            
            
            geometry={nodes.Object_114.geometry}
            material={materials.Dark_green}
            position={[0.862, -0.388, 0.177]}
            rotation={[3.051, -0.818, -0.525]}
            scale={[-0.126, 0.126, 0.087]}
          />
          <mesh
            
            
            geometry={nodes.Object_116.geometry}
            material={materials.Dark_green}
            position={[0.862, -0.388, 0.177]}
            rotation={[1.667, -1.283, -1.699]}
            scale={[-0.126, 0.126, 0.087]}
          />
          <mesh
            
            
            geometry={nodes.Object_118.geometry}
            material={materials.Dark_green}
            position={[0.862, -0.388, 0.177]}
            rotation={[0.427, -0.685, -2.911]}
            scale={[-0.123, 0.123, 0.085]}
          />
          <mesh
            
            
            geometry={nodes.Object_120.geometry}
            material={materials.Dark_green}
            position={[0.862, -0.388, 0.177]}
            rotation={[0.233, 0.03, -2.849]}
            scale={[-0.126, 0.126, 0.087]}
          />
          <mesh
            
            
            geometry={nodes.Object_122.geometry}
            material={materials.Dark_green}
            position={[0.862, -0.388, 0.177]}
            rotation={[0.063, 0.61, -3.042]}
            scale={[-0.105, 0.105, 0.073]}
          />
          <mesh
            
            
            geometry={nodes.Object_124.geometry}
            material={materials.Dark_green}
            position={[0.862, -0.388, 0.177]}
            rotation={[-1.475, 1.283, -1.442]}
            scale={[-0.126, 0.126, 0.087]}
          />
          <mesh
            
            
            geometry={nodes.Object_126.geometry}
            material={materials.Dark_green}
            position={[0.862, -0.388, 0.177]}
            rotation={[-2.682, 0.659, -0.545]}
            scale={[-0.108, 0.108, 0.075]}
          />
          <mesh
            
            
            geometry={nodes.Object_128.geometry}
            material={materials.Dark_green}
            position={[0.589, -0.5, 0.255]}
            rotation={[-3.064, 0.005, -0.108]}
            scale={[-0.085, 0.085, 0.059]}
          />
          <mesh
            
            
            geometry={nodes.Object_130.geometry}
            material={materials.Dark_green}
            position={[0.589, -0.5, 0.255]}
            rotation={[3.101, -0.816, -0.258]}
            scale={[-0.085, 0.085, 0.059]}
          />
          <mesh
            
            
            geometry={nodes.Object_132.geometry}
            material={materials.Dark_green}
            position={[0.589, -0.5, 0.255]}
            rotation={[1.694, -1.463, -1.525]}
            scale={[-0.085, 0.085, 0.059]}
          />
          <mesh
            
            
            geometry={nodes.Object_134.geometry}
            material={materials.Dark_green}
            position={[0.589, -0.5, 0.255]}
            rotation={[0.132, -0.749, -3.138]}
            scale={[-0.083, 0.083, 0.058]}
          />
          <mesh
            
            
            geometry={nodes.Object_136.geometry}
            material={materials.Dark_green}
            position={[0.589, -0.5, 0.255]}
            rotation={[0.104, -0.001, -3.012]}
            scale={[-0.085, 0.085, 0.059]}
          />
          <mesh
            
            
            geometry={nodes.Object_138.geometry}
            material={materials.Dark_green}
            position={[0.589, -0.5, 0.255]}
            rotation={[0.042, 0.585, 3.022]}
            scale={[-0.071, 0.071, 0.049]}
          />
          <mesh
            
            
            geometry={nodes.Object_140.geometry}
            material={materials.Dark_green}
            position={[0.589, -0.5, 0.255]}
            rotation={[-1.448, 1.463, -1.617]}
            scale={[-0.085, 0.085, 0.059]}
          />
          <mesh
            
            
            geometry={nodes.Object_142.geometry}
            material={materials.Dark_green}
            position={[0.589, -0.5, 0.255]}
            rotation={[-2.967, 0.73, -0.326]}
            scale={[-0.073, 0.073, 0.051]}
          />
          <mesh
            
            
            geometry={nodes.Object_144.geometry}
            material={materials.Rock_brown}
            position={[1.462, -0.728, 1.038]}
            rotation={[2.781, 0.617, -1.172]}
            scale={[-0.117, 0.125, 0.141]}
          />
          <mesh
            
            
            geometry={nodes.Object_146.geometry}
            material={materials.Rock_gray}
            position={[-0.404, -0.682, 1.939]}
            rotation={[2.029, -0.544, -0.628]}
            scale={[-0.194, 0.207, 0.233]}
          />
          <mesh
            
            
            geometry={nodes.Object_148.geometry}
            material={materials.Rock_gray}
            position={[1.196, -0.353, 0.3]}
            rotation={[0.238, 0.721, -0.26]}
            scale={[-0.14, 0.226, 0.182]}
          />
          <mesh
            
            
            geometry={nodes.Object_150.geometry}
            material={materials.Rock_gray_2}
            position={[1.238, -0.354, 0.526]}
            rotation={[1.167, 1.227, -1.916]}
            scale={[-0.107, 0.173, 0.139]}
          />
          <mesh
            
            
            geometry={nodes.Object_152.geometry}
            material={materials.Rock_brown}
            position={[1.395, -0.43, 0.387]}
            rotation={[2.799, 0.886, -2.617]}
            scale={[-0.088, 0.088, 0.088]}
          />
          <mesh
            
            
            geometry={nodes.Object_154.geometry}
            material={materials.Rock_gray_2}
            position={[0.225, -1.294, 1.614]}
            rotation={[2.664, 1.035, -1.971]}
            scale={[-0.108, 0.216, 0.27]}
          />
          <mesh
            
            
            geometry={nodes.Object_156.geometry}
            material={materials.Rock_gray}
            position={[-0.106, -1.13, 1.753]}
            rotation={[-2.308, 0.87, 2.812]}
            scale={[-0.064, 0.13, 0.106]}
          />
          <mesh
            
            
            geometry={nodes.Object_158.geometry}
            material={materials.Rock_gray}
            position={[-1.201, -1.956, 0.699]}
            rotation={[0.899, 1.126, 1.939]}
            scale={[-0.108, 0.216, 0.27]}
          />
          <mesh
            
            
            geometry={nodes.Object_160.geometry}
            material={materials.Rock_brown}
            position={[-1.453, -1.878, 0.519]}
            rotation={[0.291, 0.154, 2.987]}
            scale={[-0.044, 0.09, 0.073]}
          />
          <mesh
            
            
            geometry={nodes.Object_162.geometry}
            material={materials.Rock_gray}
            position={[-1.816, -0.574, 1.044]}
            rotation={[-0.061, 0.717, 0.299]}
            scale={[-0.126, 0.145, 0.188]}
          />
          <mesh
            
            
            geometry={nodes.Object_164.geometry}
            material={materials.Rock_gray}
            position={[0.712, -2.588, 0.593]}
            rotation={[1.408, -0.392, -1.366]}
            scale={[-0.215, 0.248, 0.321]}
          />
          <mesh
            
            
            geometry={nodes.Object_166.geometry}
            material={materials.Rock_gray}
            position={[-0.991, -1.517, -1.237]}
            rotation={[1.653, 0.783, 0.7]}
            scale={[-0.158, 0.255, 0.321]}
          />
          <mesh
            
            
            geometry={nodes.Object_168.geometry}
            material={materials.Rock_brown}
            position={[-0.523, -1.69, -1.315]}
            rotation={[-3.022, 0.09, -2.174]}
            scale={[-0.13, 0.13, 0.13]}
          />
          <mesh
            
            
            geometry={nodes.Object_170.geometry}
            material={materials.Rock_gray}
            position={[-0.061, -0.641, -1.847]}
            rotation={[-0.831, 1.423, -1.168]}
            scale={[-0.106, 0.171, 0.216]}
          />
          <mesh
            
            
            geometry={nodes.Object_172.geometry}
            material={materials.Rock_gray}
            position={[-1.702, -0.611, 1.171]}
            rotation={[-1.254, 0.282, 2.399]}
            scale={[-0.064, 0.13, 0.106]}
          />
          <mesh
            
            
            geometry={nodes.Object_174.geometry}
            material={materials.Rock_gray}
            position={[1.237, -1.299, -0.405]}
            rotation={[0.341, 0.479, -2.202]}
            scale={[-0.052, 0.085, 0.068]}
          />
          <mesh
            
            
            geometry={nodes.Object_176.geometry}
            material={materials.Rock_gray_2}
            position={[1.189, -1.276, -0.548]}
            rotation={[-1.403, 0.335, -1.681]}
            scale={[-0.077, 0.085, 0.108]}
          />
          <mesh
            
            
            geometry={nodes.Object_178.geometry}
            material={materials.Rock_gray}
            position={[0.402, -0.403, 1.06]}
            rotation={[3.136, 0.959, -2.986]}
            scale={[-0.122, 0.103, 0.088]}
          />
          <mesh
            
            
            geometry={nodes.Object_180.geometry}
            material={materials.Dark_Brown_tree_trunk}
            position={[0.389, -0.072, -0.57]}
            rotation={[0, -0.151, 0]}
            scale={0.115}
          />
          <mesh
            
            
            geometry={nodes.Object_182.geometry}
            material={materials.Pink}
            position={[0.316, 0.43, -0.575]}
            rotation={[0, -0.151, 0]}
            scale={0.365}
          />
          <mesh
            
            
            geometry={nodes.Object_184.geometry}
            material={materials.Pavement_1}
            position={[-1.405, -0.553, 1.313]}
            rotation={[0.141, 0.016, 0.223]}
          />
          <mesh
            
            
            geometry={nodes.Object_186.geometry}
            material={materials.Pavement_1}
            position={[-1.309, -0.545, 1.416]}
            rotation={[0.405, -0.848, 0.341]}
          />
          <mesh
            
            
            geometry={nodes.Object_188.geometry}
            material={materials.Pavement_2}
            position={[-1.416, -0.572, 1.462]}
            rotation={[-2.775, 0.771, 2.828]}
          />
          <mesh
            
            
            geometry={nodes.Object_190.geometry}
            material={materials.Pavement_2}
            position={[-1.347, -0.574, 1.564]}
            rotation={[-0.124, 0.864, 0.347]}
          />
          <mesh
            
            
            geometry={nodes.Object_192.geometry}
            material={materials.Pavement_1}
            position={[-1.437, -0.598, 1.563]}
            rotation={[0.405, -0.848, 0.341]}
          />
          <mesh
            
            
            geometry={nodes.Object_194.geometry}
            material={materials.Pavement_2}
            position={[-1.276, -0.521, 1.294]}
            rotation={[3.089, -0.712, 2.845]}
          />
          <mesh
            
            
            geometry={nodes.Object_196.geometry}
            material={materials.Smoke}
            position={[-0.89, 1.545, -0.802]}
            scale={0.023}
          />
          <mesh
            
            
            geometry={nodes.Object_198.geometry}
            material={materials.Smoke}
            position={[-0.926, 1.65, -0.802]}
            rotation={[0.375, 0.032, -0.134]}
            scale={[0.072, 0.08, 0.073]}
          />
          <mesh
            
            
            geometry={nodes.Object_200.geometry}
            material={materials.Smoke}
            position={[-0.803, 1.849, -0.802]}
            rotation={[0.375, 0.032, -0.134]}
            scale={[0.115, 0.128, 0.117]}
          />
          <mesh
            
            
            geometry={nodes.Object_202.geometry}
            material={materials.Smoke}
            position={[-0.958, 2.149, -0.802]}
            rotation={[0.375, 0.032, -0.134]}
            scale={[0.164, 0.182, 0.167]}
          />
          <mesh
            
            
            geometry={nodes.Object_204.geometry}
            material={materials.Smoke}
            position={[-0.655, 2.459, -0.802]}
            rotation={[0.375, 0.032, -0.134]}
            scale={[0.248, 0.275, 0.252]}
          />
          <mesh
            
            
            geometry={nodes.Object_209.geometry}
            material={materials.Thatch}
            position={[-1.441, 1.149, 0.103]}
            rotation={[-2.628, 1.439, 2.63]}
            scale={[0.353, 0.352, 0.622]}
          />
          <mesh
            
            
            geometry={nodes.Object_211.geometry}
            material={materials.Beams}
            position={[-1.591, 1.871, 0.12]}
            rotation={[-2.628, 1.439, 2.63]}
            scale={[0.05, 0.074, 0.074]}
          />
          <mesh
            
            
            geometry={nodes.Object_213.geometry}
            material={materials.Beams}
            position={[-0.927, 1.164, 0.314]}
            rotation={[3.14, -0.115, -0.065]}
            scale={[-0.035, 0.035, 0.035]}
          />
          <mesh
            
            
            geometry={nodes.Object_215.geometry}
            material={materials.Beams}
            position={[-0.909, 1.59, 0.128]}
            rotation={[2.501, 0.075, -0.287]}
            scale={[-0.035, 0.035, 0.035]}
          />
          <mesh
            
            
            geometry={nodes.Object_217.geometry}
            material={materials.Beams}
            position={[-1.441, 1.149, 0.103]}
            rotation={[-2.628, 1.439, 2.63]}
            scale={[0.353, 0.352, 0.622]}
          />
          <mesh
            
            
            geometry={nodes.Object_219.geometry}
            material={materials.Beams}
            position={[-0.906, 1.317, 0.041]}
            rotation={[3.141, 1.456, 3.14]}
            scale={[0.007, 0.136, 0.007]}
          />
          <mesh
            
            
            geometry={nodes.Object_221.geometry}
            material={materials.Beams}
            position={[-0.908, 1.334, 0.04]}
            rotation={[2.091, 1.363, 2.608]}
            scale={[0.007, 0.072, 0.007]}
          />
          <mesh
            
            
            geometry={nodes.Object_223.geometry}
            material={materials.Beams}
            position={[-0.882, 1.322, 0.264]}
            rotation={[-0.002, 0.115, -0.216]}
            scale={[0.006, 0.021, 0.081]}
          />
          <mesh
            
            
            geometry={nodes.Object_225.geometry}
            material={materials.Beams}
            position={[-0.902, 1.639, 0.07]}
            rotation={[-0.018, 0.115, 0.005]}
            scale={[0.003, 0.021, 0.07]}
          />
          <mesh
            
            
            geometry={nodes.Object_227.geometry}
            material={materials.Leaves_1}
            position={[0.737, 0.037, -0.925]}
            rotation={[Math.PI, 0, 0.155]}
            scale={[-0.167, 0.167, 0.167]}
          />
          <mesh
            
            
            geometry={nodes.Object_229.geometry}
            material={materials.Leaves_1}
            position={[1.04, 0.037, -0.922]}
            rotation={[Math.PI, 0, 0.155]}
            scale={[-0.167, 0.167, 0.167]}
          />
          <mesh
            
            
            geometry={nodes.Object_231.geometry}
            material={materials.Leaves_2}
            position={[0.948, 0.304, -0.916]}
            rotation={[Math.PI, 0, 0.155]}
            scale={[-0.167, 0.167, 0.167]}
          />
          <mesh
            
            
            geometry={nodes.Object_233.geometry}
            material={materials.Leaves_2}
            position={[0.725, 0.307, -0.797]}
            rotation={[-2.027, -1.398, 1.12]}
            scale={[-0.135, 0.135, 0.135]}
          />
          <mesh
            
            
            geometry={nodes.Object_235.geometry}
            material={materials.Leaves_2}
            position={[0.752, 0.341, -1.036]}
            rotation={[-2.027, -1.398, 1.12]}
            scale={[-0.135, 0.135, 0.135]}
          />
          <mesh
            
            
            geometry={nodes.Object_237.geometry}
            material={materials.Leaves_1}
            position={[0.78, 0.54, -0.93]}
            rotation={[-2.027, -1.398, 1.12]}
            scale={[-0.135, 0.135, 0.135]}
          />
          <mesh
            
            
            geometry={nodes.Object_239.geometry}
            material={materials.Leaves_1}
            position={[1.148, 0.376, -0.851]}
            rotation={[0.116, -0.56, -2.925]}
            scale={[-0.135, 0.135, 0.135]}
          />
          <mesh
            
            
            geometry={nodes.Object_241.geometry}
            material={materials.Leaves_2}
            position={[0.943, 0.377, -0.983]}
            rotation={[0.116, -0.56, -2.925]}
            scale={[-0.135, 0.135, 0.135]}
          />
          <mesh
            
            
            geometry={nodes.Object_243.geometry}
            material={materials.Leaves_3}
            position={[0.997, 0.591, -0.929]}
            rotation={[0.116, -0.56, -2.925]}
            scale={[-0.135, 0.135, 0.135]}
          />
          <mesh
            
            
            geometry={nodes.Object_245.geometry}
            material={materials.Leaves_3}
            position={[0.87, 0.685, -0.851]}
            rotation={[-0.314, -0.484, 2.532]}
            scale={[-0.125, 0.125, 0.125]}
          />
          <mesh
            
            
            geometry={nodes.Object_247.geometry}
            material={materials.Leaves_1}
            position={[0.915, 0.2, -0.751]}
            rotation={[1.942, -0.581, -1.754]}
            scale={[-0.095, 0.095, 0.095]}
          />
          <mesh
            
            
            geometry={nodes.Object_249.geometry}
            material={materials.Leaves_1}
            position={[0.937, 0.21, -1.099]}
            rotation={[2.696, 0.176, 0.39]}
            scale={[-0.094, 0.094, 0.094]}
          />
          <mesh
            
            
            geometry={nodes.Object_251.geometry}
            material={materials.Leaves_3}
            position={[1.053, 0.492, -1.048]}
            rotation={[2.375, 0.16, 0.215]}
            scale={[-0.085, 0.085, 0.085]}
          />
          <mesh
            
            
            geometry={nodes.Object_253.geometry}
            material={materials.Leaves_1}
            position={[0.872, 0.438, -0.833]}
            rotation={[-2.461, -0.381, 1.14]}
            scale={[-0.091, 0.091, 0.091]}
          />
          <mesh
            
            
            geometry={nodes.Object_255.geometry}
            material={materials.Leaves_2}
            position={[1.008, 0.801, -0.88]}
            rotation={[-0.072, -0.036, -3.118]}
            scale={[-0.107, 0.148, 0.092]}
          />
          <mesh
            
            
            geometry={nodes.Object_257.geometry}
            material={materials.Leaves_2}
            position={[0.905, 0.561, -1.005]}
            rotation={[0.592, 0.507, 2.887]}
            scale={[-0.129, 0.129, 0.129]}
          />
          <mesh
            
            
            geometry={nodes.Object_259.geometry}
            material={materials.Leaves_2}
            position={[0.945, 0.033, -1.03]}
            rotation={[-0.21, -0.926, 2.881]}
            scale={[-0.116, 0.116, 0.116]}
          />
          <mesh
            
            
            geometry={nodes.Object_261.geometry}
            material={materials.Dark_Brown_tree_trunk}
            position={[0.894, -0.181, -0.906]}
            rotation={[0, 0, -0.155]}
            scale={0.126}
          />
          <mesh
            
            
            geometry={nodes.Object_263.geometry}
            material={materials.Water}
            position={[0.114, -0.464, 0.407]}
            rotation={[0, -0.356, 0]}
            scale={[0.528, 0.176, 0.528]}
          />
        </group>
      </group>
    </a.group>
  );
}

useGLTF.preload();
export default Island2;
