"use client"

import { useEffect, useState } from "react"

/**
 * Animated Envelopes for Hero Section
 * 
 * Creates impressive animated envelopes that float and move across the screen
 * with smooth animations and visual effects
 */
export function AnimatedEnvelopesHero() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  // Generate envelopes with deterministic positions (no Math.random for hydration safety)
  const envelopes = Array.from({ length: 20 }, (_, i) => ({
    id: i,
    size: ((i * 7) % 30) + 20, // 20-50px
    startX: ((i * 13) % 120) - 10, // Start off-screen or on-screen
    startY: ((i * 19) % 100), // 0-100%
    endX: ((i * 17) % 120) - 10, // End position
    endY: ((i * 23) % 100), // End position
    duration: ((i * 11) % 25) + 20, // 20-45s animation duration
    delay: ((i * 29) % 8), // 0-8s delay
    rotation: ((i * 31) % 360), // 0-360deg
    rotationSpeed: ((i * 37) % 20) - 10, // -10 to 10 deg/s
    opacity: ((i * 41) % 30) + 10, // 10-40% opacity
  }))

  if (!mounted) return null

  return (
    <>
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {envelopes.map((envelope) => {
          const deltaX = envelope.endX - envelope.startX
          const deltaY = envelope.endY - envelope.startY
          
          return (
            <div
              key={envelope.id}
              className="absolute"
              style={{
                left: `${envelope.startX}%`,
                top: `${envelope.startY}%`,
                width: `${envelope.size}px`,
                height: `${envelope.size * 0.7}px`,
                opacity: `${envelope.opacity / 100}`,
                animation: `envelope-float ${envelope.duration}s ease-in-out infinite`,
                animationDelay: `${envelope.delay}s`,
                transform: `rotate(${envelope.rotation}deg)`,
                '--delta-x': `${deltaX}%`,
                '--delta-y': `${deltaY}%`,
                '--rotation-start': `${envelope.rotation}deg`,
                '--rotation-end': `${envelope.rotation + envelope.rotationSpeed * 20}deg`,
              } as React.CSSProperties & {
                '--delta-x': string
                '--delta-y': string
                '--rotation-start': string
                '--rotation-end': string
              }}
            >
              {/* Animated envelope SVG with gradient */}
              <svg
                viewBox="0 0 24 24"
                fill="none"
                className="w-full h-full drop-shadow-lg"
                style={{
                  filter: 'blur(0.5px)',
                }}
              >
                <defs>
                  <linearGradient id={`envelopeGradient-${envelope.id}`} x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="rgb(59, 130, 246)" stopOpacity="0.3" />
                    <stop offset="50%" stopColor="rgb(96, 165, 250)" stopOpacity="0.2" />
                    <stop offset="100%" stopColor="rgb(147, 197, 253)" stopOpacity="0.15" />
                  </linearGradient>
                </defs>
                <path
                  d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"
                  stroke="rgb(59, 130, 246)"
                  strokeWidth="1.5"
                  fill={`url(#envelopeGradient-${envelope.id})`}
                />
                <path
                  d="M22 6l-10 7L2 6"
                  stroke="rgb(96, 165, 250)"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
              </svg>
              
              {/* Glow effect */}
              <div
                className="absolute inset-0 rounded-lg bg-blue-400/20 blur-xl animate-pulse"
                style={{
                  animationDuration: `${envelope.duration}s`,
                  animationDelay: `${envelope.delay}s`,
                }}
              />
            </div>
          )
        })}
      </div>
      
      {/* Global CSS animation */}
      <style jsx global>{`
        @keyframes envelope-float {
          0% {
            transform: translate(0, 0) rotate(var(--rotation-start, 0deg));
            opacity: var(--opacity-start, 0.2);
          }
          25% {
            transform: translate(calc(var(--delta-x, 0%) * 0.25), calc(var(--delta-y, 0%) * 0.25)) rotate(calc(var(--rotation-start, 0deg) + 45deg));
            opacity: calc(var(--opacity-start, 0.2) + 0.1);
          }
          50% {
            transform: translate(calc(var(--delta-x, 0%) * 0.5), calc(var(--delta-y, 0%) * 0.5)) rotate(calc(var(--rotation-start, 0deg) + 90deg));
            opacity: var(--opacity-start, 0.2);
          }
          75% {
            transform: translate(calc(var(--delta-x, 0%) * 0.75), calc(var(--delta-y, 0%) * 0.75)) rotate(calc(var(--rotation-start, 0deg) + 135deg));
            opacity: calc(var(--opacity-start, 0.2) + 0.05);
          }
          100% {
            transform: translate(var(--delta-x, 0%), var(--delta-y, 0%)) rotate(var(--rotation-end, 0deg));
            opacity: var(--opacity-start, 0.2);
          }
        }
      `}</style>
    </>
  )
}
