/**
 * Background Mountains Component
 * 
 * Premium, subtle mountain background for the landing page
 * - Static SVG (no Math.random for hydration safety)
 * - Very light blue, translucent
 * - Premium, discrete, doesn't interfere with readability
 */
export function BackgroundMountains() {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      <svg
        className="absolute bottom-0 left-0 w-full h-full opacity-[0.12]"
        viewBox="0 0 1200 600"
        preserveAspectRatio="none"
        style={{ filter: 'blur(1.5px)' }}
      >
        {/* Far mountains layer */}
        <path
          d="M0,600 L0,380 Q150,300 350,320 T700,300 T1200,320 L1200,600 Z"
          fill="url(#mountainGradient1)"
        />
        {/* Mid mountains layer */}
        <path
          d="M0,600 L0,420 Q250,320 500,340 T1000,320 T1200,340 L1200,600 Z"
          fill="url(#mountainGradient2)"
        />
        {/* Foreground mountains layer */}
        <path
          d="M0,600 L0,480 Q350,360 700,380 T1200,400 L1200,600 Z"
          fill="url(#mountainGradient3)"
        />
        
        {/* Snow caps - subtle white peaks */}
        <path
          d="M180,300 Q220,280 260,300 Q300,285 340,300 L340,320 Q300,310 260,320 Q220,310 180,320 Z"
          fill="rgba(255, 255, 255, 0.2)"
        />
        <path
          d="M680,300 Q720,280 760,300 Q800,285 840,300 L840,320 Q800,310 760,320 Q720,310 680,320 Z"
          fill="rgba(255, 255, 255, 0.18)"
        />
        
        <defs>
          {/* Very subtle blue gradients */}
          <linearGradient id="mountainGradient1" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="rgb(147, 197, 253)" stopOpacity="0.25" />
            <stop offset="50%" stopColor="rgb(191, 219, 254)" stopOpacity="0.12" />
            <stop offset="100%" stopColor="rgb(219, 234, 254)" stopOpacity="0.05" />
          </linearGradient>
          <linearGradient id="mountainGradient2" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="rgb(96, 165, 250)" stopOpacity="0.20" />
            <stop offset="50%" stopColor="rgb(147, 197, 253)" stopOpacity="0.10" />
            <stop offset="100%" stopColor="rgb(191, 219, 254)" stopOpacity="0.04" />
          </linearGradient>
          <linearGradient id="mountainGradient3" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="rgb(59, 130, 246)" stopOpacity="0.18" />
            <stop offset="50%" stopColor="rgb(96, 165, 250)" stopOpacity="0.09" />
            <stop offset="100%" stopColor="rgb(147, 197, 253)" stopOpacity="0.03" />
          </linearGradient>
        </defs>
      </svg>
      
      {/* Subtle mist overlay */}
      <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-blue-50/15 via-blue-50/8 to-transparent" />
    </div>
  )
}
