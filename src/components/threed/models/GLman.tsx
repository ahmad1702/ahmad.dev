"use client";
import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useEffect, useRef, useState } from "react";
import * as THREE from "three";
import { GLTF } from "three-stdlib";

type GLTFResult = GLTF & {
  nodes: {
    GLman_level2: THREE.Mesh;
  };
  materials: {
    GLman: THREE.MeshPhysicalMaterial;
  };
};

export function GLman({ meshProps, ...props }: JSX.IntrinsicElements["group"] & { meshProps?: JSX.IntrinsicElements["mesh"] }) {
  const groupRef = useRef<THREE.Group>(null)
  const meshRef = useRef<THREE.Mesh>(null)
  const { nodes, materials } = useGLTF(
    "/assets/models/GLman.gltf"
  ) as GLTFResult;

  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [clientWidth, setClientWidth] = useState(0);
  const [clientHeight, setClientHeight] = useState(0);

  useEffect(() => {
    setClientWidth(window.innerWidth)
    setClientHeight(window.innerHeight)
    const handleMouseMove = (event) => {
      setMousePos({ x: event.clientX, y: event.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  useFrame(({ pointer, viewport }) => {
    if (!meshRef.current) return

    console.log(viewport)

    const percentX = mousePos.x / clientWidth
    const percentY = mousePos.y / clientHeight
    const x = viewport.width * percentX
    const y = -viewport.height * percentY / 2.5

    meshRef.current.position.set(x, y, 0)


  })

  return (
    <group {...props} dispose={null} ref={groupRef}>
      <mesh
        ref={meshRef}
        name="GLman_level2"
        castShadow
        receiveShadow
        geometry={nodes.GLman_level2.geometry}
        material={materials.GLman}
        userData={{ name: "GLman_level2" }}
        scale={5}
        {...meshProps}
      >
        <meshNormalMaterial />
      </mesh>
    </group>
  );
}

useGLTF.preload("/assets/models/GLman.gltf");
