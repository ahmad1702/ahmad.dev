"use client";
import { Environment } from "@react-three/drei";
import {
  EffectComposer,
  HueSaturation,
  Vignette,
} from "@react-three/postprocessing";

export default function Effects() {
  return (
    <>
      <EffectComposer enableNormalPass={false} multisampling={0}>
        <Vignette offset={0.8} darkness={0.25} />
        <HueSaturation hue={0.1} saturation={0.4} />
      </EffectComposer>
      <directionalLight
        shadow-mapSize={1024}
        shadow-bias={-0.001}
        shadow-normalBias={0.03}
        castShadow
        position={[-25, 1, 30]}
        intensity={6}
      />
      <Environment
        ground={{ height: 15, radius: 20, scale: 2 }}
        files="https://dl.polyhaven.org/file/ph-assets/HDRIs/hdr/1k/kloppenheim_06_puresky_1k.hdr"
      />
    </>
  );
}
