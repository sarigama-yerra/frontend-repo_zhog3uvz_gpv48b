import Spline from '@splinetool/react-spline'

function App() {
  const leftPlates = Array.from({ length: 5 })
  const rightPlates = Array.from({ length: 5 })

  return (
    <div className="relative min-h-screen w-full overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0" aria-hidden>
        <div className="h-full w-full" style={{
          background: 'linear-gradient(180deg, #80D8FF 0%, #D48BFF 50%, #FFB180 100%)'
        }} />
      </div>

      {/* Spline scene layer */}
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/UngO8SNLfLcyPG7O/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Card stack overlay (non-interactive so Spline remains interactive) */}
      <div className="pointer-events-none relative z-10 flex items-center justify-center min-h-screen">
        <div className="relative" style={{ perspective: '1200px', perspectiveOrigin: '50% 50%' }}>
          <div className="animate-float relative" style={{ transformStyle: 'preserve-3d' }}>
            {/* Center glowing core */}
            <div className="relative mx-auto" style={{
              width: 280,
              height: 360,
              borderRadius: 24,
              background: 'radial-gradient(120% 120% at 50% 35%, rgba(255, 238, 140, 0.95) 0%, rgba(255, 201, 71, 0.85) 35%, rgba(255, 155, 64, 0.85) 65%, rgba(255, 138, 76, 0.75) 100%)',
              boxShadow: '0 0 40px rgba(255, 205, 70, 0.45), 0 0 80px rgba(255, 145, 80, 0.35)'
            }}>
              {/* subtle inner glass highlight */}
              <div className="absolute inset-0 rounded-[24px]" style={{
                background: 'linear-gradient(180deg, rgba(255,255,255,0.35) 0%, rgba(255,255,255,0.08) 35%, rgba(255,255,255,0) 100%)',
                mixBlendMode: 'soft-light'
              }} />

              {/* fake thickness sides */}
              <div className="absolute inset-0 rounded-[24px]" style={{
                transform: 'translateZ(-24px)',
                boxShadow: '0 30px 60px rgba(255, 150, 90, 0.25)'
              }} />
            </div>

            {/* Left fanned plates */}
            <div className="absolute inset-0">
              {leftPlates.map((_, i) => {
                const angle = 35 + i * 2.5; // 35° → ~45°
                const tx = -170 - i * 40;
                const tz = -40 + i * 20;
                const delay = 0.15 * i;
                return (
                  <div key={`L${i}`} className="plate neon-shadow animate-float-slow" style={{
                    width: 220,
                    height: 140,
                    borderRadius: 18,
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transformStyle: 'preserve-3d',
                    transform: `translate(-50%, -50%) translateX(${tx}px) translateZ(${tz}px) rotateY(${angle}deg)`,
                    background: 'linear-gradient(135deg, #7C3AFF 0%, #FF4FD8 100%)',
                    boxShadow: '0 0 24px rgba(124, 58, 255, 0.45), 0 0 42px rgba(255, 79, 216, 0.35)',
                    opacity: 0.95,
                    animationDelay: `${delay}s`
                  }} />
                )
              })}
            </div>

            {/* Right fanned plates */}
            <div className="absolute inset-0">
              {rightPlates.map((_, i) => {
                const angle = -35 - i * 2.5; // -35° → ~-45°
                const tx = 170 + i * 40;
                const tz = -40 + i * 20;
                const delay = 0.12 * i + 0.2;
                return (
                  <div key={`R${i}`} className="plate neon-shadow animate-float-slow" style={{
                    width: 220,
                    height: 140,
                    borderRadius: 18,
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transformStyle: 'preserve-3d',
                    transform: `translate(-50%, -50%) translateX(${tx}px) translateZ(${tz}px) rotateY(${angle}deg)`,
                    background: 'linear-gradient(135deg, #7C3AFF 0%, #FF4FD8 100%)',
                    boxShadow: '0 0 24px rgba(124, 58, 255, 0.45), 0 0 42px rgba(255, 79, 216, 0.35)',
                    opacity: 0.95,
                    animationDelay: `${delay}s`
                  }} />
                )
              })}
            </div>
          </div>
        </div>
      </div>

      {/* Ambient overlays to soften scene (don’t block Spline) */}
      <div className="pointer-events-none absolute inset-0" aria-hidden>
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[70vmin] h-[70vmin] rounded-full opacity-40 blur-3xl" style={{
          background: 'radial-gradient(closest-side, rgba(255, 200, 120, 0.45), rgba(255, 120, 200, 0.25), rgba(128, 216, 255, 0.0))'
        }} />
      </div>
    </div>
  )
}

export default App
