const fragmentShader = `
uniform float u_intensity;
uniform float u_time;

varying vec2 vUv;
varying float vDisplacement;

void main() {
  float distort = 2.0 * vDisplacement * u_intensity;

  // Maintain color vibrancy
  vec3 color = vec3(abs(vUv - 0.5) * 2.0 * (1.0 - distort), 1.0);

  // Slight transparency without losing color strength
  float alpha = 0.45; // ✨ tweak between 0.5 - 0.8 as needed

  gl_FragColor = vec4(color, alpha);
}
`;

export default fragmentShader;
