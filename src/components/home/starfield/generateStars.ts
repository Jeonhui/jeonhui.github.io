// Deterministic PRNG so the sky is identical on every visit.
const mulberry32 = (seed: number) => () => {
  seed |= 0
  seed = (seed + 0x6d2b79f5) | 0
  let t = Math.imul(seed ^ (seed >>> 15), 1 | seed)
  t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t
  return ((t ^ (t >>> 14)) >>> 0) / 4294967296
}

export type StarBuffers = {
  positions: Float32Array
  magnitudes: Float32Array
  temperatures: Float32Array
  phases: Float32Array
  count: number
}

/**
 * Wide star cluster (small Plummer core + broad halo) plus a sparse background field.
 * Magnitudes follow a steep power law: thousands of faint stars, a handful of bright ones.
 */
export const generateStars = (clusterCount: number, fieldCount: number): StarBuffers => {
  const rand = mulberry32(20250501)
  const count = clusterCount + fieldCount
  const positions = new Float32Array(count * 3)
  const magnitudes = new Float32Array(count)
  const temperatures = new Float32Array(count)
  const phases = new Float32Array(count)

  const randomDirection = () => {
    const z = rand() * 2 - 1
    const a = rand() * Math.PI * 2
    const r = Math.sqrt(1 - z * z)
    return [r * Math.cos(a), r * Math.sin(a), z]
  }

  for (let i = 0; i < count; i++) {
    const inCluster = i < clusterCount
    let x: number, y: number, z: number

    if (inCluster) {
      // A small Plummer core (25%) inside a wide, gently concentrated halo (75%),
      // so the cluster reads as a broad field rather than a single bright knot.
      const [dx, dy, dz] = randomDirection()
      let r: number
      if (rand() < 0.25) {
        const u = Math.max(rand(), 1e-4)
        r = Math.min(0.55 / Math.sqrt(Math.pow(u, -2 / 3) - 1), 1.4)
      } else {
        r = 2.1 * Math.pow(rand(), 0.62)
      }
      x = dx * r * 1.15
      y = dy * r * 0.85
      z = dz * r
    } else {
      x = (rand() * 2 - 1) * 3.2
      y = (rand() * 2 - 1) * 2.0
      z = (rand() * 2 - 1) * 2.0
    }

    positions[i * 3] = x
    positions[i * 3 + 1] = y
    positions[i * 3 + 2] = z

    const m = Math.pow(rand(), inCluster ? 4.5 : 9)
    magnitudes[i] = Math.min(0.16 + m * (inCluster ? 0.9 : 0.55), 1)

    // ~16% amber giants, the rest blue-white.
    temperatures[i] = rand() < 0.16 ? 0.72 + rand() * 0.28 : rand() * 0.5
    phases[i] = rand()
  }

  return { positions, magnitudes, temperatures, phases, count }
}
