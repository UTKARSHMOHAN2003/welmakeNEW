import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";
import { useRef } from "react";

const Model = () => {
  const { scene } = useGLTF("/src/assets/Welmake.glb");
  const modelRef = useRef();

  useFrame(() => {
    if (modelRef.current) {
      modelRef.current.rotation.y += 0.009; // Slow rotation speed
    }
  });

  return <primitive ref={modelRef} object={scene} scale={1} />;
};

const ModelViewer = () => {
  return (
    <Canvas camera={{ position: [0, 1, 5] }}>
       <ambientLight intensity={2} /> 
      <directionalLight position={[5, 5, 5]} intensity={2.3} /> 
      <pointLight position={[-5, 5, 5]} intensity={2.5} />  
      <Model />
      <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={0.5} />
    </Canvas>
  );
};

export default ModelViewer;