import React, { useRef } from "react";
import gsap, { Power1, Sine } from "gsap";
import { Box } from "@chakra-ui/react";

function random(min: number, max: number) {
  return min + Math.random() * (max - min);
}

const randomColors = ["#e34278", "#a3073b", "#fc2323", "#fa7380", "#e8548a"];
const randomColorPicker = () => {
  return randomColors[Math.floor(Math.random() * randomColors.length)];
};

const defaultRepeat = () => {
  return {
    duration: random(1, 3),
    repeat: -1,
    yoyo: true,
    ease: Power1.easeInOut,
  };
};

export const Confetti = ({ children }: { children: React.ReactNode }) => {
  const confettiParent = useRef<HTMLDivElement>(null);

  const createConfettiElement = () => {
    const confetti = document.createElement("div");
    confetti.style.position = "absolute";
    confetti.style.width = "24px";
    confetti.style.height = "24px";
    confetti.style.clipPath = `path("M12 4.419c-2.826-5.695-11.999-4.064-11.999 3.27 0 7.27 9.903 10.938 11.999 15.311 2.096-4.373 12-8.041 12-15.311 0-7.327-9.17-8.972-12-3.27z")`;
    confetti.style.backgroundColor = randomColorPicker();
    return confetti;
  };

  const fireConfetti = () => {
    if (!confettiParent.current) return;

    const confettiElements = [...Array(80)].map(() => createConfettiElement());
    confettiElements.forEach((confetti) => {
      confettiParent.current?.appendChild(confetti);

      // Initial settings
      gsap.set(confetti, {
        x: Math.random() > 0.5 ? -20 : window.innerWidth + 20,
        y: -20,
        left: 0,
        bottom: 0,
        scaleX: 1,
      });

      // Animations
      gsap.to(confetti, {
        scaleX: random(0.1, 0.5),
        ...defaultRepeat(),
      });
      gsap.to(confetti, {
        rotateX: random(0, 270),
        ...defaultRepeat(),
      });
      gsap.to(confetti, {
        rotateY: random(0, 270),
        ...defaultRepeat(),
      });
      gsap.to(confetti, {
        rotateZ: random(0, 270),
        ...defaultRepeat(),
      });

      gsap
        .to(confetti, {
          x: random(20, window.innerWidth - 20),
          y: -random(40, window.innerHeight - 20),
          duration: 1,
        })
        .eventCallback("onComplete", () => {
          // Sway left to right
          gsap.to(confetti, {
            x: "+=" + (Math.round(random(0, 1)) ? "-" : "") + random(40, 100),
            ...defaultRepeat(),
          });

          // Fall down and clean up
          gsap
            .to(confetti, {
              y: 0,
              ease: Sine.easeIn,
              duration: random(5, 11),
            })
            .eventCallback("onComplete", () => {
              // Kill animations and remove the element
              const runningTweens = gsap.getTweensOf(confetti);
              runningTweens.forEach((tween) => tween.kill());
              confetti.remove();
            });
        });
    });
  };

  return (
    <>
      <Box onClick={fireConfetti}>{children}</Box>
      <div ref={confettiParent}></div>
    </>
  );
};
