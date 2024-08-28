"use client";
import { useFrame } from "@react-three/fiber";
import { useMemo } from "react";
import * as THREE from "three";
import CSM from "three-custom-shader-material";
import Frag from "../../shaders/frag";
import Vert from "../../shaders/vert";

export default function GradientFbmMaterial({
  originalMaterial,
  gridWidth,
  gridHeight,
  iridescence,
  color,
  hover,
}: {
  originalMaterial?: THREE.MeshPhysicalMaterial;
  gridWidth: number;
  gridHeight: number;
  iridescence: number;
  color: string;
  hover: boolean;
}) {
  const uniforms = useMemo(
    () => ({
      uTime: { value: 0 },
    }),
    []
  );

  const frag = useMemo(() => `${Frag}`, []);

  const baseMaterialCustom = new THREE.MeshPhysicalMaterial({
    color: color ? (new THREE.Color(color) as any) : null,
    map: originalMaterial ? originalMaterial.map : null,
    roughness: 0.2,
    metalness: 0.49,
    normalMap: originalMaterial ? originalMaterial.normalMap : null,
    normalScale: new THREE.Vector2(0.9, -0.5),
    ior: 1.2,
    thickness: 0.9,
    transmission: 1,
    iridescence: iridescence ? iridescence : undefined,
    side: THREE.DoubleSide,
  });

  useFrame((state, dt) => {
    uniforms.uTime.value += dt;
  });

  return (
    <CSM
      baseMaterial={baseMaterialCustom}
      uniforms={uniforms}
      vertexShader={Vert}
      fragmentShader={frag}
      silent
      envMapIntensity={6}
    />
  );
}
