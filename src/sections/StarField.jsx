
import { useEffect, useRef } from 'react'

function StarField() {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    const parent = canvas.parentElement

    let stars = []
    let animationId

    const mouse = {
      x: window.innerWidth / 2,
      y: window.innerHeight / 2,
      active: false,
    }

    const getWidth = () => canvas.clientWidth
    const getHeight = () => canvas.clientHeight

    const createStar = () => ({
      x: Math.random() * getWidth(),
      y: Math.random() * getHeight(),
      size: Math.random() * 1.5 + 0.4,
      speed: Math.random() * 1.2 + 0.5,
      angle: Math.random() * Math.PI * 2,
      twinkle: Math.random() * 0.7 + 0.3,
    })

    const createStars = () => {
      const width = getWidth()
      const height = getHeight()

      const count = Math.min(
        500,
        Math.max(150, Math.floor((width * height) / 3500))
      )

      stars = Array.from({ length: count }, createStar)
    }

    const resizeCanvas = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2)
      const width = parent.clientWidth
      const height = parent.scrollHeight

      canvas.width = width * dpr
      canvas.height = height * dpr
      canvas.style.width = `${width}px`
      canvas.style.height = `${height}px`

      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
      createStars()
    }

    const handleMouseMove = (event) => {
      const rect = canvas.getBoundingClientRect()

      mouse.x = event.clientX - rect.left
      mouse.y = event.clientY - rect.top
      mouse.active = true
    }

    const handleMouseLeave = () => {
      mouse.active = false
    }

    const animate = () => {
      const width = getWidth()
      const height = getHeight()

      ctx.clearRect(0, 0, width, height)

      stars.forEach((star, index) => {
        if (mouse.active) {
          const dx = mouse.x - star.x
          const dy = mouse.y - star.y
          const distance = Math.sqrt(dx * dx + dy * dy)

          if (distance > 8) {
            const angle = Math.atan2(dy, dx)
            const pull = star.speed * 0.45
            const spin = star.speed * 0.7

            star.x += Math.cos(angle) * pull
            star.y += Math.sin(angle) * pull
            star.x += -Math.sin(angle) * spin
            star.y += Math.cos(angle) * spin
          } else {
            stars[index] = createStar()
          }
        } else {
          star.angle += 0.003
          star.x += Math.cos(star.angle) * 0.15
          star.y += Math.sin(star.angle) * 0.15
        }

        if (
          star.x < 0 ||
          star.x > width ||
          star.y < 0 ||
          star.y > height
        ) {
          stars[index] = createStar()
        }

        ctx.beginPath()
        ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(191, 219, 254, ${star.twinkle})`
        ctx.shadowBlur = 8
        ctx.shadowColor = '#60a5fa'
        ctx.fill()
        ctx.shadowBlur = 0
      })

      animationId = requestAnimationFrame(animate)
    }

    resizeCanvas()
    animate()

    const resizeObserver = new ResizeObserver(resizeCanvas)
    resizeObserver.observe(parent)

    window.addEventListener('resize', resizeCanvas)
    window.addEventListener('mousemove', handleMouseMove)
    document.addEventListener('mouseleave', handleMouseLeave)

    return () => {
      cancelAnimationFrame(animationId)
      resizeObserver.disconnect()
      window.removeEventListener('resize', resizeCanvas)
      window.removeEventListener('mousemove', handleMouseMove)
      document.removeEventListener('mouseleave', handleMouseLeave)
    }
  }, [])

  return <canvas ref={canvasRef} className="star-canvas" />
}

export default StarField
