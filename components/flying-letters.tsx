"use client"

/**
 * Flying Letters Component
 * 
 * Creates animated flying letters/envelopes that float across the background
 * Inspired by the design model with letters flying from a mailbox
 */
export function FlyingLetters() {
  // Generate letters with deterministic positions, sizes, and animation delays (no Math.random for hydration safety)
  const letters = Array.from({ length: 12 }, (_, i) => ({
    id: i,
    size: ((i * 7) % 20) + 15, // Deterministic size 15-35px
    x: ((i * 13) % 100), // Deterministic x 0-100%
    y: ((i * 19) % 100), // Deterministic y 0-100%
    duration: ((i * 11) % 20) + 15, // Deterministic duration 15-35s
    delay: ((i * 23) % 5), // Deterministic delay 0-5s
    rotation: ((i * 31) % 360), // Deterministic rotation 0-360deg
  }))

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {letters.map((letter) => (
        <div
          key={letter.id}
          className="absolute opacity-[0.12]"
          style={{
            left: `${letter.x}%`,
            top: `${letter.y}%`,
            width: `${letter.size}px`,
            height: `${letter.size * 0.7}px`,
            animation: `float-letter ${letter.duration}s ease-in-out infinite`,
            animationDelay: `${letter.delay}s`,
            transform: `rotate(${letter.rotation}deg)`,
          }}
        >
          {/* Envelope SVG - blue like in design model */}
          <svg
            viewBox="0 0 24 24"
            fill="none"
            className="w-full h-full"
            style={{ filter: 'blur(0.8px)' }}
          >
            <path
              d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"
              stroke="rgb(59, 130, 246)"
              strokeWidth="1.5"
              fill="rgba(59, 130, 246, 0.15)"
            />
            <path
              d="M22 6l-10 7L2 6"
              stroke="rgb(59, 130, 246)"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
          </svg>
        </div>
      ))}
    </div>
  )
}
