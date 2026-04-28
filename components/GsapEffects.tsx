"use client";

import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function GsapEffects() {
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let idleId = 0;
    let timeoutId: ReturnType<typeof setTimeout> | null = null;

    const startAnimations = () => {
      const fades = gsap.utils.toArray<HTMLElement>(".animate-fade");
      fades.forEach((el) => {
        gsap.fromTo(
          el,
          { autoAlpha: 0, y: 24 },
          {
            autoAlpha: 1,
            y: 0,
            duration: 0.8,
            ease: "power2.out",
            scrollTrigger: {
              trigger: el,
              start: "top 85%"
            }
          }
        );
      });

      const cards = gsap.utils.toArray<HTMLElement>(".animate-card");
      gsap.fromTo(
        cards,
        { autoAlpha: 0, y: 16 },
        {
          autoAlpha: 1,
          y: 0,
          duration: 0.6,
          ease: "power1.out",
          stagger: 0.1,
          scrollTrigger: {
            trigger: "#scenes",
            start: "top 80%"
          }
        }
      );

      const parallax = gsap.utils.toArray<HTMLElement>(".parallax-target");
      parallax.forEach((el) => {
        gsap.to(el, {
          yPercent: -5,
          ease: "none",
          scrollTrigger: {
            trigger: el,
            start: "top bottom",
            end: "bottom top",
            scrub: true
          }
        });
      });
    };

    if ("requestIdleCallback" in window) {
      idleId = window.requestIdleCallback(() => startAnimations(), { timeout: 1200 });
    } else {
      timeoutId = setTimeout(startAnimations, 300);
    }

    return () => {
      if ("cancelIdleCallback" in window && idleId) {
        window.cancelIdleCallback(idleId);
      }
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return null;
}
