export default /* glsl */ ` 
// based on: https://www.shadertoy.com/view/ctsBRr

float fadeTimer = 0.0;
uniform float uTime;
varying vec3 csm_vPosition;
varying vec2 vUv;

#define ss(a,b,t) smoothstep(a,b,t)

float gyroid (vec3 seed) {
  return dot(sin(seed), cos(seed.yzx));
}

float fbm (vec3 seed) {
    float result = 0.0, a = 0.5;
    for (int i = 0; i < 5; ++i, a /= 2.0) {
        seed.z += result * 0.5;
        result += abs(gyroid(seed / a) * a);
    }
    return result;
}

vec3 getColor(float t) {
    // Define a color palette here
    vec3 colors[5];
    colors[0] = vec3(0.0, 0.5, 0.0); // Blue
    colors[1] = vec3(0.0, 1.0, 0.0); // Green
    colors[2] = vec3(1.0, 0.0, 0.0); // Red
    colors[3] = vec3(1.0, 1.0, 0.0); // Yellow
    colors[4] = vec3(0.8, 0.2, 0.8); // Purple
    
    int numColors = 5;
    int index = int(floor(t * float(numColors)));
    return colors[index];
}
              
void main() {

  vec2 p = vUv;
  float d = length(p);
  p = normalize(p) * log(length(p) * 0.5);
  p = vec2(atan(p.y, p.x), length(p) * 0.5 + uTime * 0.5);
  float shades = 6.0;
  float shape = ss(0.9, 0.5, fbm(vec3(p * 0.5, 0.0)));
  float shade = ceil(shape * shades) / shades;
  
  // Get a color based on the shade value
  vec3 bgColor = getColor(shade);
  
  vec3 color = mix(bgColor, vec3(1.0), ss(2.0, 0.0, d));

  vec4 finalTexture = vec4(color, 1.0);

  csm_DiffuseColor = finalTexture;

}

`;
