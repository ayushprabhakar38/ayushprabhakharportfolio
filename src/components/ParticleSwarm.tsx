import { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

export const ParticleSwarm = () => {
  const meshRef = useRef<THREE.InstancedMesh>(null);
  const count = 35000;
  const speedMult = 1.0;
  
  const dummy = useMemo(() => new THREE.Object3D(), []);
  const target = useMemo(() => new THREE.Vector3(), []);
  const pColor = useMemo(() => new THREE.Color(), []);
  const color = pColor;
  
  const positions = useMemo(() => {
     const pos = [];
     for(let i=0; i<count; i++) pos.push(new THREE.Vector3((Math.random()-0.5)*100, (Math.random()-0.5)*100, (Math.random()-0.5)*100));
     return pos;
  }, [count]);

  const material = useMemo(() => new THREE.MeshBasicMaterial({ color: 0xffffff }), []);
  const geometry = useMemo(() => new THREE.TetrahedronGeometry(0.25), []);

  useFrame((state) => {
    if (!meshRef.current) return;
    const time = state.clock.getElapsedTime() * speedMult;

    for (let i = 0; i < count; i++) {
        // Cube calculation from user code
        const s = Math.ceil(Math.pow(count, 1/3));
        const sep = 2.5; 
        const off = (s * sep) / 2;
        
        let z = Math.floor(i / (s*s));
        let y = Math.floor((i % (s*s)) / s);
        let x = i % s;
        
        // Add waving motion so they aren't "just sitting"
        const waveX = Math.sin(y * 0.5 + time) * 1.5;
        const waveY = Math.cos(x * 0.5 + time) * 1.5;
        const waveZ = Math.sin(z * 0.5 + time) * 1.5;
        
        target.set(
          (x * sep - off) + waveX, 
          (y * sep - off) + waveY, 
          (z * sep - off) + waveZ
        );
        
        // Color based on user code but adding dynamic shift
        color.setHex(0x00aaff);

        positions[i].lerp(target, 0.1);
        dummy.position.copy(positions[i]);
        
        // Keep size uniform
        dummy.scale.set(1, 1, 1);
        
        dummy.updateMatrix();
        meshRef.current.setMatrixAt(i, dummy.matrix);
        meshRef.current.setColorAt(i, pColor);
    }
    meshRef.current.instanceMatrix.needsUpdate = true;
    if (meshRef.current.instanceColor) meshRef.current.instanceColor.needsUpdate = true;
  });

  return (
    <instancedMesh ref={meshRef} args={[geometry, material, count]} />
  );
};
