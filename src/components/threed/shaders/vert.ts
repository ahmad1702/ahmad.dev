export default /* glsl */ ` 
varying vec2 vUv;
varying vec3 csm_vPosition;

void main() {
  vUv = uv;
  csm_vPosition = position;
}
`;
