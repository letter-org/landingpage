import { useState, useEffect } from "react"

interface LogoProps {
  variant?: "dark" | "white"
  showText?: boolean
  className?: string
  size?: "sm" | "md" | "lg"
}

// TODO: add final logo file at public/brand/nextletter-logo.svg
// For now, using a placeholder that will be replaced when the final logo is added

export function Logo({ variant = "dark", showText = true, className = "", size = "md" }: LogoProps) {
  const [logoError, setLogoError] = useState(false)

  // Size configuration: desktop ~140-160px, mobile ~120px
  const sizeMap = {
    sm: { desktop: "w-[120px] md:w-[140px]", mobile: "w-[120px]" },
    md: { desktop: "w-[140px] md:w-[160px]", mobile: "w-[120px]" },
    lg: { desktop: "w-[160px] md:w-[180px]", mobile: "w-[140px]" },
  }

  const widthClasses = sizeMap[size]

  // Select logo based on variant
  const logoSrc = variant === "white" 
    ? "/brand/nextletter-logo-white.svg" 
    : "/brand/nextletter-logo.svg"

  // Always render the same structure to avoid hydration mismatch
  // Render logo directly without conditional mounting
  return (
    <div className={`relative ${widthClasses.mobile} ${widthClasses.desktop} h-auto ${className}`}>
      {logoError ? (
        // Fallback placeholder if logo file doesn't exist
        <div className="flex items-center gap-2">
          <div className={`w-10 h-10 ${variant === "white" ? "bg-white" : "bg-blue-500"} rounded-lg flex items-center justify-center`}>
            <span className={`font-bold text-xl ${variant === "white" ? "text-blue-500" : "text-white"}`}>N</span>
          </div>
          <span className={`text-xl font-bold ${variant === "white" ? "text-white" : "text-foreground"}`}>
            NextLetter
          </span>
        </div>
      ) : (
        <img
          src={logoSrc}
          alt="NextLetter"
          className="w-full h-auto"
          onError={() => setLogoError(true)}
        />
      )}
    </div>
  )
}
