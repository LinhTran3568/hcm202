import { useEffect, useRef } from "react"

const COLORS = [
  [224, 168, 168],
  [214, 152, 152],
  [204, 133, 133],
  [233, 195, 195],
  [155, 44, 44],
  [178, 112, 112],
]

function makePetal(ctx, size, color, alpha) {
  ctx.beginPath()
  ctx.moveTo(0, -size / 2)
  ctx.bezierCurveTo(size * 0.55, -size * 0.32, size * 0.5, size * 0.45, 0, size / 2)
  ctx.bezierCurveTo(-size * 0.5, size * 0.45, -size * 0.55, -size * 0.32, 0, -size / 2)
  ctx.closePath()
  ctx.fillStyle = `rgba(${color[0]},${color[1]},${color[2]},${alpha})`
  ctx.fill()
}

export default function LotusPetals() {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    const ctx = canvas.getContext("2d")
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches
    if (reduced) return

    let w = 0
    let h = 0
    let raf = 0

    const DPR = Math.min(window.devicePixelRatio || 1, 2)

    const petals = []
    const COUNT = 46

    function resize() {
      w = window.innerWidth
      h = window.innerHeight
      canvas.width = w * DPR
      canvas.height = h * DPR
      canvas.style.width = `${w}px`
      canvas.style.height = `${h}px`
      ctx.setTransform(DPR, 0, 0, DPR, 0, 0)
      for (const p of petals) {
        p.baseX = ((p.index + 0.5) / COUNT) * w
      }
    }

    function spawn(petal, reset) {
      petal.size = 9 + Math.random() * 13
      petal.x = petal.baseX + (Math.random() - 0.5) * w * 0.16
      petal.y = reset ? -petal.size - Math.random() * h * 0.2 : (petal.baseRow / COUNT) * h
      petal.rot = Math.random() * Math.PI * 2
      petal.rotSpeed = (Math.random() - 0.5) * 0.014
      petal.fall = 0.45 + Math.random() * 0.3
      petal.swayAmp = 10 + Math.random() * 22
      petal.swayPhase = Math.random() * Math.PI * 2
      petal.swaySpeed = 0.006 + Math.random() * 0.005
      petal.color = COLORS[Math.floor(Math.random() * COLORS.length)]
      petal.baseAlpha = 0.4 + Math.random() * 0.3
    }

    resize()
    for (let i = 0; i < COUNT; i++) {
      const p = { index: i }
      p.baseX = ((i + 0.5) / COUNT) * w
      p.baseRow = i
      spawn(p, false)
      petals.push(p)
    }

    function frame() {
      ctx.clearRect(0, 0, w, h)

      for (const p of petals) {
        p.y += p.fall
        p.rot += p.rotSpeed
        p.swayPhase += p.swaySpeed
        const sx = p.x + Math.sin(p.swayPhase) * p.swayAmp

        const edgeFade = Math.min(1, Math.max(0, (h - p.y) / (h * 0.12)))
        const alpha = p.baseAlpha * edgeFade

        if (p.y > h + p.size) {
          spawn(p, true)
        }
        if (alpha <= 0.01) continue

        ctx.save()
        ctx.translate(sx, p.y)
        ctx.rotate(p.rot)
        makePetal(ctx, p.size, p.color, alpha)
        ctx.restore()
      }
      raf = requestAnimationFrame(frame)
    }

    resize()
    window.addEventListener("resize", resize)
    raf = requestAnimationFrame(frame)

    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener("resize", resize)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="petals"
      aria-hidden="true"
      style={{ position: "fixed", inset: 0, zIndex: 1, pointerEvents: "none" }}
    />
  )
}
