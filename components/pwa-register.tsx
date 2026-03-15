"use client"

import { useEffect } from "react"

export function PwaRegister() {
  useEffect(() => {
    if (typeof window === "undefined" || !("serviceWorker" in navigator)) return

    window.addEventListener("load", () => {
      navigator.serviceWorker
        .register("/sw.js", { scope: "/" })
        .then((reg) => {
          if (reg.installing) return
          reg.update()
        })
        .catch(() => {})
    })
  }, [])

  return null
}
