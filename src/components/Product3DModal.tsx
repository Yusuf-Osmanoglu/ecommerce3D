import React, { Suspense, useEffect } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Environment } from '@react-three/drei';
import { useLoader } from '@react-three/fiber';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';

function Model({ url, scale = 1, position = [0, -0.5, 0] }: { url: string, scale?: number, position?: [number, number, number] }) {
  const gltf = useLoader(GLTFLoader, url);
  return <primitive object={gltf.scene} scale={scale} position={position} />;
}

export default function Product3DModal({ url, onClose }: { url: string, onClose: () => void }) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur" style={{backdropFilter: 'blur(8px)'}}>
      <div className="absolute inset-0 cursor-pointer" onClick={onClose} />
      <div className="relative w-full max-w-5xl h-[80vh] bg-transparent flex items-center justify-center">
        <Canvas camera={{ position: [0, 0, 3.5] }}>
          <ambientLight intensity={0.8} />
          <Suspense fallback={null}>
            <Model url={url} scale={0.5} position={[0, -0.5, 0]} />
            <Environment preset="city" />
          </Suspense>
          <OrbitControls enablePan={false} />
        </Canvas>
      </div>
    </div>
  );
} 