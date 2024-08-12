"use client";

import { a, useSpring } from "@react-spring/web";
import Trail from "@/components/trail";
import { cn } from "@/lib/cn";
import { OrbitControls, Stats } from "@react-three/drei";
import { Canvas, extend, Vector3, useThree, useFrame } from "@react-three/fiber";
import {
  BrightnessContrast,
  EffectComposer,
  HueSaturation,
  SMAA,
} from "@react-three/postprocessing";
import { useTheme } from "next-themes";
import { BlendFunction } from "postprocessing";
import { ComponentRef, Suspense, useEffect, useRef, useState } from "react";
import { GLman } from "../models/GLman";

import CameraControls from "camera-controls";
import * as Three from "three";

CameraControls.install({ THREE: Three });
extend({ CameraControls });

function Rig() {
  const { camera, pointer } = useThree()

  const vec = new Three.Vector3()

  return useFrame(() => {
    camera.position.lerp(vec.set(pointer.x, pointer.y, camera.position.z), 0.05)
    camera.lookAt(0, 0, 0)
  })
}


const CursorPositionControls = () => {
  const [mousePos, setMousePost] = useState({ x: 0, y: 0 });
  const ref = useRef<any>(null);
  const camera = useThree((state) => state.camera);
  const gl = useThree((state) => state.gl);

  useEffect(() => {
    const handleMouseMove = (event) => {
      setMousePost({ x: event.clientX, y: event.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  useFrame((state, delta) => {
    if (!ref.current) return;
    // update camera angles according to mouse position
    //ref.current.azimuthAngle = -state.pointer.x;
    //ref.current.polarAngle = Math.PI / 2 + state.pointer.y;
    //
    //ref.current.azimuthAngle = -mousePos.x;
    //ref.current.polarAngle = Math.PI / 2 + mousePos.y;
    ref.current.update(delta);
  });

  return <cameraControls ref={ref} args={[camera, gl.domElement]} />;
};

type Props = {};

const Header3d = (props: Props) => {
  const { theme } = useTheme();
  const isDark = theme === "dark";
  const canvasRef = useRef<ComponentRef<typeof Canvas>>(null);
  const orbitControlsRef = useRef<ComponentRef<typeof OrbitControls>>(null);

  const [position, setPosition] = useState([0, 0, 6] satisfies Vector3);
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);

  const fov = 35;
  const [open, setOpen] = useState(false);

  const showText = () => {
    setTimeout(() => {
      setOpen(true);
    }, 1000);
  };

  const modelCoverSpring = useSpring({
    from: { opacity: 0, transform: "translateY(-100%)" },
    to: { opacity: 1, transform: "translateY(0%)" },
    config: {
      duration: 1000,
    },
  }, [open]);

  const handleMouseMove = (event) => {
    if (!orbitControlsRef.current) return;

    orbitControlsRef.current.setPolarAngle(Math.PI / 2 + event.clientY);
  };

  useEffect(() => {
    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  /*
  useEffect(() => {
    setOpen(true);
  }, []); */
  return (
    <div
      className="h-full w-full relative overflow-hidden"
    >
      <div
        className={cn(
          "absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2  hidden lg:flex flex-col justify-between p-4 pointer-events-none"
        )}
      >
        <div>
          <Trail
            open={open}
            fontSizePx={208}
            className="font-bold leading-none"
          >
            <span className="uppercase text-[13rem] select-none font-bold font-cal">
              Ahmad
            </span>
            <span className="uppercase text-[13rem] select-none font-bold font-cal">
              Sandid
            </span>
          </Trail>
        </div>
      </div>
      <a.div className="h-full w-full absolute top-0 left-0 z-10" />
      <Canvas
        ref={canvasRef}
        className="h-full w-full absolute top-0 left-0 z-10"
        shadows
        gl={{ toneMappingExposure: 0.7 }}
        dpr={1}
        camera={{ position, fov }}
        //   eventSource={document.getElementById("root") ?? undefined}
        eventPrefix="client"
      >
        <directionalLight
          intensity={0.5}
          position={[0, 0, 1]}
        />
        <Suspense fallback={null}>
          <GLman
            meshProps={{
              onAfterRender: showText,
              scale: 10,
            }}
          //scale={0.08}
          //rotation={[-0.9, 0, 0]}
          />
          <EffectComposer multisampling={0}>
            <SMAA />
            {isDark ? (
              <>
                <BrightnessContrast
                  blendFunction={BlendFunction.NORMAL} // blend mode
                  contrast={0.5}
                  brightness={-0.1}
                />
                <HueSaturation hue={0.2} saturation={-0.2} />
              </>
            ) : (
              <>
                <BrightnessContrast
                  blendFunction={BlendFunction.NORMAL} // blend mode
                  brightness={0.2}
                />
                <HueSaturation hue={0.2} saturation={-0.2} />
              </>
            )}
          </EffectComposer>
        </Suspense>
        {/* <CursorPositionControls /> */}
        <Rig />
        <Stats />
      </Canvas>
    </div>
  );
};

export default Header3d;
