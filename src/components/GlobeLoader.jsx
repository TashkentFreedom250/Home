import { useEffect, useRef } from 'react'
import { geoOrthographic, geoPath, geoGraticule10 } from 'd3-geo'
import { merge, mesh } from 'topojson-client'
import world from 'world-atlas/countries-110m.json'

const ORBITS = [
  { rx: 138, ry: 44, tilt: -0.32, speed:  1.00, phase: 0.0, len: 1.5, w: 2.2 },
  { rx: 150, ry: 30, tilt:  0.10, speed: -0.72, phase: 2.1, len: 1.8, w: 1.6 },
  { rx: 128, ry: 60, tilt:  0.55, speed:  0.84, phase: 4.0, len: 1.2, w: 2.6 },
]

// Pre-computed topology features (computed once at module load)
const LAND    = merge(world, world.objects.countries.geometries)
const BORDERS = mesh(world, world.objects.countries, (a, b) => a !== b)
const SPHERE  = { type: 'Sphere' }
const GRATICULE = geoGraticule10()

export default function GlobeLoader({ size = 320 }) {
  const globeRef = useRef(null)
  const whirlRef = useRef(null)

  useEffect(() => {
    const BOX = size
    const CX  = BOX / 2
    const CY  = BOX / 2
    const R   = Math.round(BOX * 0.3125)
    const dpr = Math.min(window.devicePixelRatio || 1, 2)

    const prep = (cv) => {
      cv.width  = BOX * dpr
      cv.height = BOX * dpr
      cv.style.width  = `${BOX}px`
      cv.style.height = `${BOX}px`
      const ctx = cv.getContext('2d')
      ctx.scale(dpr, dpr)
      return ctx
    }

    const gctx = prep(globeRef.current)
    const wctx = prep(whirlRef.current)

    const projection = geoOrthographic()
      .scale(R)
      .translate([CX, CY])
      .clipAngle(90)
      .rotate([0, -18, 0])

    const path = geoPath(projection, gctx)

    function drawGlobe(lambda) {
      projection.rotate([lambda, -18, 0])
      gctx.clearRect(0, 0, BOX, BOX)

      // Sphere base — very subtle
      gctx.beginPath(); path(SPHERE)
      gctx.fillStyle = 'rgba(255, 255, 255, 0.025)'
      gctx.fill()

      // Graticule grid
      gctx.beginPath(); path(GRATICULE)
      gctx.lineWidth = 0.6
      gctx.strokeStyle = 'rgba(255, 255, 255, 0.14)'
      gctx.stroke()

      // Land — gold
      gctx.beginPath(); path(LAND)
      gctx.fillStyle = 'rgba(246, 213, 122, 0.55)'
      gctx.fill()

      // Borders — dark separation
      gctx.beginPath(); path(BORDERS)
      gctx.lineWidth = 0.5
      gctx.strokeStyle = 'rgba(2, 3, 20, 0.6)'
      gctx.stroke()

      // Sphere outline — bright gold
      gctx.beginPath(); path(SPHERE)
      gctx.lineWidth = 1.4
      gctx.strokeStyle = 'rgba(246, 213, 122, 0.9)'
      gctx.stroke()
    }

    function drawWhirl(t) {
      wctx.clearRect(0, 0, BOX, BOX)
      wctx.save()
      wctx.translate(CX, CY)

      // Rotating dashed halo
      wctx.save()
      wctx.rotate(t * 0.4)
      wctx.beginPath()
      wctx.ellipse(0, 0, R * 1.18, R * 1.18, 0, 0, Math.PI * 2)
      wctx.setLineDash([1.5, 9])
      wctx.lineWidth = 1
      wctx.strokeStyle = 'rgba(255, 255, 255, 0.22)'
      wctx.stroke()
      wctx.restore()

      // Comet trails
      ORBITS.forEach((o) => {
        const head = t * o.speed + o.phase
        const SEG = 26
        for (let i = 0; i < SEG; i++) {
          const a = head - (i / SEG) * o.len
          const x = Math.cos(a) * o.rx
          const y = Math.sin(a) * o.ry
          const xr = x * Math.cos(o.tilt) - y * Math.sin(o.tilt)
          const yr = x * Math.sin(o.tilt) + y * Math.cos(o.tilt)
          const depth = (Math.sin(a) + 1) / 2
          const fade  = 1 - i / SEG
          const alpha = fade * fade * (0.35 + 0.55 * (1 - depth))
          const rad   = o.w * (0.35 + 0.65 * fade) * (0.7 + 0.3 * (1 - depth))
          wctx.beginPath()
          wctx.arc(xr, yr, rad, 0, Math.PI * 2)
          wctx.fillStyle = `rgba(246, 213, 122, ${alpha.toFixed(3)})`
          wctx.fill()
        }
      })

      wctx.restore()
    }

    let lambda = 0
    let last = performance.now()
    let raf

    function frame(now) {
      const dt = Math.min((now - last) / 1000, 0.05)
      last = now
      lambda += dt * 22
      const t = now / 1000
      drawGlobe(lambda)
      drawWhirl(t * 1.4)
      raf = requestAnimationFrame(frame)
    }

    drawGlobe(0)
    raf = requestAnimationFrame(frame)

    return () => cancelAnimationFrame(raf)
  }, [size])

  return (
    <div className="globe-loader" style={{ width: size, height: size }} aria-hidden="true">
      <canvas ref={whirlRef} className="globe-canvas" />
      <canvas ref={globeRef} className="globe-canvas" />
    </div>
  )
}
