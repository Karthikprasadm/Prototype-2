"use client"

import { useEffect } from "react"

export function EventHighlighter() {
  useEffect(() => {
    const hash = window.location.hash
    if (!hash.startsWith("#event-")) return

    const el = document.getElementById(hash.slice(1))
    if (!el) return

    el.scrollIntoView({ behavior: "smooth", block: "center" })

    const startTimer = setTimeout(() => {
      // Soft base glow on the card itself
      el.classList.add("event-card-lit")

      // Ensure card is a positioning context for the absolute beam
      el.style.position = "relative"

      // Inject the sweeping beam element inside the card
      const beam = document.createElement("span")
      beam.className = "event-border-beam"
      el.appendChild(beam)

      // Tear down after animation finishes (~2.1 s)
      const cleanupTimer = setTimeout(() => {
        beam.remove()
        el.classList.remove("event-card-lit")
        el.style.position = ""
      }, 2250)

      return () => clearTimeout(cleanupTimer)
    }, 450)

    return () => clearTimeout(startTimer)
  }, [])

  return (
    <style>{`
      /* Register the custom angle property so the browser interpolates it */
      @property --beam-angle {
        syntax: '<angle>';
        initial-value: 0deg;
        inherits: false;
      }

      /* Subtle static glow behind the beam */
      .event-card-lit {
        box-shadow:
          0 0 0 1px rgba(168, 85, 247, 0.35),
          0 0 28px rgba(168, 85, 247, 0.18) !important;
        transition: box-shadow 0.4s ease;
      }

      /* The beam element — lives inside the card (overflow:hidden clips it cleanly) */
      .event-border-beam {
        position: absolute;
        inset: 0;
        border-radius: inherit;
        pointer-events: none;
        z-index: 20;

        /* Bright comet on a transparent field, rotating via --beam-angle */
        background: conic-gradient(
          from var(--beam-angle),
          transparent 72%,
          rgba(139, 92, 246, 0.45)  80%,
          rgba(192, 132, 252, 0.9)  84%,
          rgba(255, 255, 255, 0.95) 87%,
          rgba(232, 121, 249, 0.7)  90%,
          transparent               95%
        );

        /* Hollow mask — only the 2px padding ring is visible */
        -webkit-mask:
          linear-gradient(#fff 0 0) content-box,
          linear-gradient(#fff 0 0);
        -webkit-mask-composite: xor;
        mask:
          linear-gradient(#fff 0 0) content-box,
          linear-gradient(#fff 0 0);
        mask-composite: exclude;
        padding: 2px;

        /* 2 rotations in 2.1 s, then fade */
        animation:
          beam-spin 1.05s linear 2,
          beam-fade 2.1s ease-out forwards;
      }

      @keyframes beam-spin {
        to { --beam-angle: 360deg; }
      }

      @keyframes beam-fade {
        0%,  68% { opacity: 1; }
        100%      { opacity: 0; }
      }
    `}</style>
  )
}
