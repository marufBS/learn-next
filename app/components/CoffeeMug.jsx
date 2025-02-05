// app>components>CoffeeMug.jsx

"use client";

import { Canvas, useLoader } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { Suspense, useEffect, useState } from "react";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

const CoffeeMugModel = () => {
  const [gltf, setGltf] = useState(null);

  useEffect(() => {
    const loader = new GLTFLoader();
    loader.load("coffee-mug.glb", (loadedGltf) => {
      setGltf(loadedGltf);
    });
  }, []);

  if (!gltf) return null; // Show nothing until model loads

  return <primitive object={gltf.scene} scale={1.5} />;
};

const CoffeeMug = () => {
  return (
    <Canvas camera={{ position: [0, 2, 5], fov: 50 }}>
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} />
      <Suspense fallback={null}>
        <CoffeeMugModel />
      </Suspense>
      <OrbitControls />
    </Canvas>
  );
};

export default CoffeeMug;
