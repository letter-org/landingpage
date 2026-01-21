"use client"

interface ChatbotIconProps {
  className?: string
  isAnimated?: boolean
}

export function ChatbotIcon({ className = "w-14 h-14", isAnimated = false }: ChatbotIconProps) {
  return (
    <div className={`relative ${className}`}>
      {/* White circular background */}
      <div className="absolute inset-0 bg-white rounded-full shadow-lg" />
      
      <svg
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full relative z-10 p-2"
      >
        <defs>
          {/* Blue to cyan gradient matching NextLetter logo */}
          <linearGradient id="nextletterGradient" x1="50%" y1="100%" x2="50%" y2="0%">
            <stop offset="0%" stopColor="#0000FF" />
            <stop offset="100%" stopColor="#00FFFF" />
          </linearGradient>
        </defs>
        
        {/* Envelope outline - solid blue for better visibility */}
        <path 
          d="M15 38 L15 78 C15 81 17 83 20 83 L80 83 C83 83 85 81 85 78 L85 38"
          stroke="#1E3A8A"
          strokeWidth="5"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        />
        
        {/* Envelope flap - left side */}
        <path 
          d="M15 38 L42 58"
          stroke="#1E3A8A"
          strokeWidth="5"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        />
        
        {/* Envelope flap - right side */}
        <path 
          d="M85 38 L58 58"
          stroke="#1E3A8A"
          strokeWidth="5"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        />
        
        {/* N letter with arrow */}
        <g className={isAnimated ? "animate-float" : ""}>
          {/* N - left vertical */}
          <path 
            d="M35 65 L35 35"
            stroke="url(#nextletterGradient)"
            strokeWidth="5"
            strokeLinecap="round"
            fill="none"
          />
          
          {/* N - diagonal */}
          <path 
            d="M35 65 L55 35"
            stroke="url(#nextletterGradient)"
            strokeWidth="5"
            strokeLinecap="round"
            fill="none"
          />
          
          {/* N - right vertical becoming arrow */}
          <path 
            d="M55 65 L55 20"
            stroke="url(#nextletterGradient)"
            strokeWidth="5"
            strokeLinecap="round"
            fill="none"
          >
            {isAnimated && (
              <animate
                attributeName="d"
                values="M55 65 L55 20;M55 65 L55 15;M55 65 L55 20"
                dur="1.5s"
                repeatCount="indefinite"
                calcMode="spline"
                keySplines="0.4 0 0.2 1; 0.4 0 0.2 1"
              />
            )}
          </path>
          
          {/* Arrow head */}
          <path 
            d="M47 28 L55 18 L63 28"
            stroke="url(#nextletterGradient)"
            strokeWidth="5"
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
          >
            {isAnimated && (
              <animate
                attributeName="d"
                values="M47 28 L55 18 L63 28;M47 23 L55 13 L63 23;M47 28 L55 18 L63 28"
                dur="1.5s"
                repeatCount="indefinite"
                calcMode="spline"
                keySplines="0.4 0 0.2 1; 0.4 0 0.2 1"
              />
            )}
          </path>
        </g>
      </svg>
      
      {/* Online indicator */}
      <div className="absolute -bottom-0.5 -right-0.5 w-4 h-4 bg-green-500 rounded-full border-2 border-white shadow-sm">
        {isAnimated && (
          <span className="absolute inset-0 rounded-full bg-green-400 animate-ping opacity-75" />
        )}
      </div>
    </div>
  )
}
