"use client"

/**
 * Swiss Mountains Background Component
 * 
 * Provides a premium background of Swiss mountains inspired by the design model
 * - Light blue, semi-transparent mountains
 * - Sobre, premium, Swiss style
 * - Visible but not aggressive
 */
export function SwissMountainsBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Base mountain silhouette - inspired by design model */}
      <svg
        className="absolute bottom-0 left-0 w-full h-full opacity-[0.25]"
        viewBox="0 0 1200 600"
        preserveAspectRatio="none"
        style={{ filter: 'blur(2px)' }}
      >
        {/* Far mountains - light blue, snow-capped effect */}
        <path
          d="M0,600 L0,350 Q200,250 400,280 T800,260 T1200,280 L1200,600 Z"
          fill="url(#mountainGradient1)"
        />
        {/* Mid mountains - more prominent */}
        <path
          d="M0,600 L0,400 Q300,280 600,300 T1200,300 L1200,600 Z"
          fill="url(#mountainGradient2)"
        />
        {/* Foreground mountains - closest layer */}
        <path
          d="M0,600 L0,450 Q400,320 800,350 T1200,380 L1200,600 Z"
          fill="url(#mountainGradient3)"
        />
        
        {/* Snow caps on peaks - white/light blue */}
        <path
          d="M200,280 Q250,260 300,280 Q350,270 400,280 L400,300 Q350,290 300,300 Q250,290 200,300 Z"
          fill="rgba(255, 255, 255, 0.3)"
        />
        <path
          d="M700,260 Q750,240 800,260 Q850,250 900,260 L900,280 Q850,270 800,280 Q750,270 700,280 Z"
          fill="rgba(255, 255, 255, 0.25)"
        />
        
        <defs>
          {/* Blue gradients matching design model */}
          <linearGradient id="mountainGradient1" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="rgb(147, 197, 253)" stopOpacity="0.35" />
            <stop offset="50%" stopColor="rgb(191, 219, 254)" stopOpacity="0.20" />
            <stop offset="100%" stopColor="rgb(219, 234, 254)" stopOpacity="0.10" />
          </linearGradient>
          <linearGradient id="mountainGradient2" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="rgb(96, 165, 250)" stopOpacity="0.30" />
            <stop offset="50%" stopColor="rgb(147, 197, 253)" stopOpacity="0.18" />
            <stop offset="100%" stopColor="rgb(191, 219, 254)" stopOpacity="0.08" />
          </linearGradient>
          <linearGradient id="mountainGradient3" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="rgb(59, 130, 246)" stopOpacity="0.28" />
            <stop offset="50%" stopColor="rgb(96, 165, 250)" stopOpacity="0.15" />
            <stop offset="100%" stopColor="rgb(147, 197, 253)" stopOpacity="0.06" />
          </linearGradient>
        </defs>
      </svg>
      
      {/* Misty effect in valleys - like in design model */}
      <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-blue-50/20 via-blue-50/10 to-transparent" />
      
      {/* Additional depth overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-50/8 to-transparent" />
    </div>
  )
}
