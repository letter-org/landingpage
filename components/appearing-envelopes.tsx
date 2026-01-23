"use client"

import { useEffect, useState } from "react"

/**
 * Appearing Envelopes Component
 * 
 * Creates envelopes that fade in progressively as the user scrolls
 * Light blue, transparent envelopes that appear with a subtle animation
 */
export function AppearingEnvelopes() {
  const [visibleEnvelopes, setVisibleEnvelopes] = useState<number[]>([])

  useEffect(() => {
    // Generate envelopes that appear progressively
    const envelopes = Array.from({ length: 15 }, (_, i) => i)
    
    // Show envelopes progressively with delays
    envelopes.forEach((id, index) => {
      setTimeout(() => {
        setVisibleEnvelopes((prev) => [...prev, id])
      }, index * 200) // 200ms delay between each envelope
    })
  }, [])

  // Generate deterministic positions and properties for envelopes (no Math.random for hydration safety)
  const envelopeData = Array.from({ length: 15 }, (_, i) => ({
    id: i,
    size: ((i * 5) % 25) + 20, // Deterministic size 20-45px
    x: ((i * 7) % 100), // Deterministic x 0-100%
    y: ((i * 11) % 100), // Deterministic y 0-100%
    rotation: ((i * 13) % 360), // Deterministic rotation 0-360deg
    delay: ((i * 17) % 2), // Deterministic delay 0-2s
    duration: ((i * 19) % 15) + 20, // Deterministic duration 20-35s
  }))

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {envelopeData.map((envelope) => (
        <div
          key={envelope.id}
          className={`absolute transition-opacity duration-1000 ${
            visibleEnvelopes.includes(envelope.id) ? 'opacity-[0.15]' : 'opacity-0'
          }`}
          style={{
            left: `${envelope.x}%`,
            top: `${envelope.y}%`,
            width: `${envelope.size}px`,
            height: `${envelope.size * 0.7}px`,
            animation: visibleEnvelopes.includes(envelope.id)
              ? `float-letter ${envelope.duration}s ease-in-out infinite`
              : 'none',
            animationDelay: `${envelope.delay}s`,
            transform: `rotate(${envelope.rotation}deg)`,
          }}
        >
          {/* Envelope SVG - light blue, transparent */}
          <svg
            viewBox="0 0 24 24"
            fill="none"
            className="w-full h-full"
            style={{ filter: 'blur(1px)' }}
          >
            <path
              d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"
              stroke="rgb(96, 165, 250)"
              strokeWidth="1.5"
              fill="rgba(96, 165, 250, 0.1)"
            />
            <path
              d="M22 6l-10 7L2 6"
              stroke="rgb(96, 165, 250)"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
          </svg>
        </div>
      ))}
    </div>
  )
}
