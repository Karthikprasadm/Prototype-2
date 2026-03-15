"use client"

import React, { useEffect, useState } from "react"
import Image from "next/image"
import { usePathname } from "next/navigation"
import rnsitLogoImg from "@/assets/Rnsit_logo.png"
import logo25Img from "@/assets/25_logo.png"
import luminusLogoImg from "@/assets/luminus_logo.png"

export function CornerLogos() {
  const [visible, setVisible] = useState(true)
  const pathname = usePathname()
  const isHome = pathname === "/"

  useEffect(() => {
    if (typeof window === "undefined") return

    const handleScroll = () => {
      const y = window.scrollY || window.pageYOffset || 0
      const threshold = 80
      setVisible(y <= threshold)
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    handleScroll()

    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  const style: React.CSSProperties = {
    opacity: visible ? 1 : 0,
    transform: visible
      ? "translateY(0px) scale(1)"
      : "translateY(-6px) scale(0.982)",
    transition:
      "opacity 520ms cubic-bezier(0.16, 1, 0.3, 1), transform 620ms cubic-bezier(0.16, 1, 0.3, 1)",
    pointerEvents: "none",
  }

  const showLuminusLogoOnRight =
    pathname === "/events" ||
    pathname?.startsWith("/events/") ||
    pathname === "/schedule" ||
    pathname === "/contact"

  const rightLogoSrc = showLuminusLogoOnRight ? luminusLogoImg : logo25Img
  const rightLogoAlt = showLuminusLogoOnRight
    ? "Luminus Techfest"
    : "Luminus Techfest 25 years"

  // Make the 25-years logo a bit smaller on the home page; slightly larger on mobile so 25 is easier to see.
  // On events/schedule/contact, Luminus logo is bigger on mobile only for visibility in the nav.
  const rightLogoWidth = showLuminusLogoOnRight ? 144 : 80
  const rightLogoHeight = showLuminusLogoOnRight ? 144 : 80
  const rightLogoClassName = showLuminusLogoOnRight
    ? "h-16 w-auto max-h-16 object-contain sm:h-36 sm:max-h-36"
    : "h-10 w-auto max-h-10 object-contain sm:h-16 sm:max-h-16"

  const rightLogoWrapperClassName = showLuminusLogoOnRight
    ? "fixed -top-1 right-[max(0.5rem,env(safe-area-inset-right))] z-50 flex h-16 sm:h-20 sm:top-2.5 items-center justify-center"
    : "fixed top-3 right-[max(0.5rem,env(safe-area-inset-right))] z-50 flex h-11 sm:h-20 items-center justify-center"

  return (
    <>
      {/* Left Logo — smaller on mobile, safe-area so nav fits in top middle */}
      <div
        className="fixed top-2.5 left-[max(0.5rem,env(safe-area-inset-left))] z-50 flex h-8 sm:h-20 items-center justify-center"
        aria-hidden
        style={style}
      >
        <Image
          src={rnsitLogoImg}
          alt="RNSIT Bengaluru"
          width={80}
          height={80}
          // Avoid <link rel="preload"> to prevent browser console warnings.
          // Still fetch eagerly on home for good LCP.
          loading={isHome ? "eager" : "lazy"}
          fetchPriority={isHome ? "high" : "auto"}
          className="h-8 w-auto max-h-8 object-contain sm:h-20 sm:max-h-20"
        />
      </div>

      {/* Right Logo */}
      <div className={rightLogoWrapperClassName} aria-hidden style={style}>
        <Image
          src={rightLogoSrc}
          alt={rightLogoAlt}
          width={rightLogoWidth}
          height={rightLogoHeight}
          // Avoid preloading (can warn if hidden/not used immediately).
          loading="eager"
          className={rightLogoClassName}
        />
      </div>
    </>
  )
}

