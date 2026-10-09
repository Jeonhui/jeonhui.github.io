export const STAR_VERTEX = `#version 300 es
precision highp float;

in vec3 aPosition;
in float aMagnitude;
in float aTemperature;
in float aPhase;

uniform mat3 uRotation;
uniform float uAspect;
uniform float uTime;
uniform float uScale;
uniform vec2 uOffset;
uniform float uPixelRatio;
uniform vec2 uMouse;          // cursor in NDC
uniform float uMouseStrength; // 0..1, eased in/out
uniform vec2 uParallax;       // eased cursor offset for depth parallax
uniform float uIntro;         // 0 -> 1 on load: stars converge from far out
uniform float uScroll;        // 0 -> 1 as the hero scrolls away: camera dollies in

out vec3 vColor;
out float vBrightness;
out float vSpike;

vec3 starColor(float t) {
  // t: 0 = hot blue-white, 1 = cool amber
  vec3 hot = vec3(0.70, 0.84, 1.00);
  vec3 white = vec3(1.00, 0.98, 0.95);
  vec3 amber = vec3(1.00, 0.62, 0.32);
  return t < 0.5 ? mix(hot, white, t * 2.0) : mix(white, amber, (t - 0.5) * 2.0);
}

void main() {
  // Intro: start spread wide and converge; each star arrives slightly out of step.
  float arrive = clamp(uIntro * 1.25 - aPhase * 0.25, 0.0, 1.0);
  vec3 p = uRotation * (aPosition * mix(3.2, 1.0, arrive));
  // Scroll: dolly the camera into the cluster.
  p.z += uScroll * 1.6;
  float camera = 3.4;
  float depth = camera - p.z;
  vec2 projected = p.xy / depth * 2.6;

  float near = clamp(3.4 / max(depth, 0.6), 0.55, 2.6);
  vec2 ndc = vec2(projected.x * uScale / uAspect + uOffset.x, projected.y * uScale + uOffset.y);

  // Depth parallax: nearer stars drift further with the cursor.
  ndc += uParallax * (near - 0.55) * 0.035;

  // Cursor lens: push stars outward from the pointer, measured in aspect-corrected space.
  vec2 toMouse = (ndc - uMouse) * vec2(uAspect, 1.0);
  float dist = length(toMouse);
  float lens = exp(-dist * dist * 14.0) * uMouseStrength;
  ndc += normalize(toMouse + 1e-5) / vec2(uAspect, 1.0) * lens * 0.06;

  gl_Position = vec4(ndc, 0.0, 1.0);

  float twinkle = 0.82 + 0.18 * sin(uTime * (0.6 + aPhase * 1.7) + aPhase * 40.0);
  float b = aMagnitude * twinkle;

  gl_PointSize = (2.0 + pow(aMagnitude, 2.0) * 34.0) * near * uPixelRatio * uScale * (1.0 + lens * 0.45);
  vColor = mix(starColor(aTemperature), vec3(1.0, 0.72, 0.42), lens * 0.45);
  vBrightness = b * near * (1.0 + lens * 1.0) * arrive * (1.0 - uScroll * 0.75);
  vSpike = smoothstep(0.82, 1.0, aMagnitude);
}
`

export const STAR_FRAGMENT = `#version 300 es
precision highp float;

in vec3 vColor;
in float vBrightness;
in float vSpike;

out vec4 outColor;

void main() {
  vec2 p = gl_PointCoord * 2.0 - 1.0;
  float d = length(p);
  if (d > 1.0) discard;

  float core = exp(-d * d * 22.0);
  float halo = exp(-d * 4.0) * 0.45;
  float spikes = (exp(-abs(p.x) * 60.0) * exp(-abs(p.y) * 3.2) + exp(-abs(p.y) * 60.0) * exp(-abs(p.x) * 3.2)) * vSpike * 0.8;

  float a = (core + halo + spikes) * vBrightness;
  vec3 c = mix(vColor, vec3(1.0), core * 0.6);
  outColor = vec4(c * a, a);
}
`
