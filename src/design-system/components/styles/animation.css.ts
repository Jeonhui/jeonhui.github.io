import { keyframes, style } from "@vanilla-extract/css"

const slideUpAnimation = keyframes({
  from: {
    transform: "translateY(100%)",
    opacity: 0,
  },
  to: {
    transform: "translateY(0)",
    opacity: 1,
  },
})

const slideUpAnimationBase = style({
  animationName: slideUpAnimation,
  animationDuration: "0.5s",
  animationTimingFunction: "ease-out",
  animationFillMode: "forwards",
})

export const slideUp = (delay: number = 0): string => {
  return style([
    slideUpAnimationBase,
    {
      animationDelay: `${delay}s`, // 순차적으로 0.2초씩 딜레이 추가
    },
  ])
}
