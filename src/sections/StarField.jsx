import { useEffect, useRef } from 'react'

function StarField() {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    const parent = canvas.parentElement

    if (!ctx || !parent) return

    let stars = []
    let animationId
    let width = 0
    let height = 0
    let dpr = 1
    let lastFrame = 0
    let resizeObserver
    let isVisible = true

    const isMobile = window.matchMedia('(max-width: 768px)')

    const mouse = {
      x: 0,
      y: 0,
      active: false,
    }

    const getStarCount = () => {
      const area = width * height
      return isMobile.matches
        ? Math.min(160, Math.max(90, Math.floor(area / 9000)))
        : Math.min(350, Math.max(150, Math.floor(area / 5000)))
    }

    const createStar = () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      size: Math.random() * 1.3 + 0.4,
      speed: Math.random() * 0.6 + 0.2,
      angle: Math.random() * Math.PI * 2,
      twinkle: Math.random() * 0.6 + 0.4,
      phase: Math.random() * Math.PI * 2,
    })

    const createStars = () => {
      const count = getStarCount()
      stars = Array.from({ length: count }, createStar)
    }

    const resizeCanvas = () => {
      // Use the complete page height so the stars remain behind
      // all portfolio sections while scrolling.
      width = parent.clientWidth
      height = Math.max(parent.scrollHeight, parent.clientHeight)

      // Limit pixel density on mobile to reduce rendering cost.
      dpr = Math.min(window.devicePixelRatio || 1, isMobile.matches ? 1.25 : 2)

      canvas.width = Math.round(width * dpr)
      canvas.height = Math.round(height * dpr)
      canvas.style.width = `${width}px`
      canvas.style.height = `${height}px`

      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)

      createStars()
    }

    const handlePointerMove = (event) => {
      // Pointer interaction is only needed on devices with a mouse.
      if (event.pointerType === 'touch') return

      const rect = canvas.getBoundingClientRect()
      mouse.x = event.clientX - rect.left
      mouse.y = event.clientY - rect.top
      mouse.active = true
    }

    const handlePointerLeave = () => {
      mouse.active = false
    }

    const animate = (timestamp) => {
      animationId = requestAnimationFrame(animate)

      // Pause drawing when the tab is hidden or canvas is off-screen.
      if (document.hidden || !isVisible) return

      // Limit mobile rendering to around 30 FPS.
      const frameInterval = isMobile.matches ? 1000 / 30 : 1000 / 60
      if (timestamp - lastFrame < frameInterval) return
      lastFrame = timestamp

      ctx.clearRect(0, 0, width, height)

      const interactive = mouse.active && !isMobile.matches

      for (let i = 0; i < stars.length; i++) {
        const star = stars[i]

        if (interactive) {
          const dx = mouse.x - star.x
          const dy = mouse.y - star.y
          const distance = Math.hypot(dx, dy)

          if (distance > 8) {
            const angle = Math.atan2(dy, dx)
            const pull = star.speed * 0.35
            const spin = star.speed * 0.5

            star.x += Math.cos(angle) * pull - Math.sin(angle) * spin
            star.y += Math.sin(angle) * pull + Math.cos(angle) * spin
          } else {
            stars[i] = createStar()
          }
        } else {
          star.angle += 0.002
          star.x += Math.cos(star.angle) * 0.12
          star.y += Math.sin(star.angle) * 0.12
        }

        if (
          star.x < 0 ||
          star.x > width ||
          star.y < 0 ||
          star.y > height
        ) {
          stars[i] = createStar()
        }

        const currentStar = stars[i]
        const alpha =
          currentStar.twinkle *
          (0.75 + Math.sin(timestamp * 0.0015 + currentStar.phase) * 0.25)

        ctx.beginPath()
        ctx.arc(
          currentStar.x,
          currentStar.y,
          currentStar.size,
          0,
          Math.PI * 2
        )
        ctx.fillStyle = `rgba(191, 219, 254, ${alpha})`

        // Avoid expensive shadow rendering on mobile.
        if (!isMobile.matches) {
          ctx.shadowBlur = 6
          ctx.shadowColor = '#60a5fa'
        }

        ctx.fill()
      }

      ctx.shadowBlur = 0
    }

    const handleVisibilityChange = () => {
      if (!document.hidden) {
        lastFrame = 0
      }
    }

    resizeCanvas()

    // Resize when sections or page content change height.
    resizeObserver = new ResizeObserver(() => {
      resizeCanvas()
    })
    resizeObserver.observe(parent)

    window.addEventListener('resize', resizeCanvas)
    window.addEventListener('pointermove', handlePointerMove)
    window.addEventListener('pointerleave', handlePointerLeave)
    document.addEventListener('visibilitychange', handleVisibilityChange)

    // Pause animation when the page is not visible on screen.
    const intersectionObserver = new IntersectionObserver(([entry]) => {
      isVisible = entry.isIntersecting
    })
    intersectionObserver.observe(canvas)

    animationId = requestAnimationFrame(animate)

    return () => {
      cancelAnimationFrame(animationId)
      resizeObserver?.disconnect()
      intersectionObserver.disconnect()

      window.removeEventListener('resize', resizeCanvas)
      window.removeEventListener('pointermove', handlePointerMove)
      window.removeEventListener('pointerleave', handlePointerLeave)
      document.removeEventListener('visibilitychange', handleVisibilityChange)
    }
  }, [])

  return <canvas ref={canvasRef} className="star-canvas" aria-hidden="true" />
}

export default StarField