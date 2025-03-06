import { CSSProperties } from "@vanilla-extract/css"
import typographies from "../typographies/typographies.css"

type BoxSize = Pick<
  CSSProperties,
  | "width"
  | "padding"
  | "gap"
  | "borderRadius"
  | "fontSize"
  | "lineHeight"
  | "fontWeight"
>

type BaseBoxSizes = {
  xxSmall: BoxSize
  xSmall: BoxSize
  small: BoxSize
  medium: BoxSize
  large: BoxSize
  xLarge: BoxSize
  xxLarge: BoxSize
}

type BoxFeature = "full"

type BoxFeatureSizes = {
  [key in `${Extract<keyof BaseBoxSizes, string>}_${BoxFeature}`]: BoxSize
}

type BoxSizes = BaseBoxSizes & BoxFeatureSizes

const baseBoxSizes: BaseBoxSizes = {
  xxSmall: {
    padding: "0.1rem 0.4rem",
    borderRadius: "0.24rem",
    gap: "0.2rem",
    ...typographies.body4,
  },
  xSmall: {
    padding: "0.3rem 0.6rem",
    borderRadius: "0.24rem",
    gap: "0.2rem",
    ...typographies.body3,
  },
  small: {
    padding: "0.4rem 0.7rem",
    borderRadius: "0.28rem",
    gap: "0.2rem",
    ...typographies.body2,
  },
  medium: {
    padding: "0.4rem 0.8rem",
    borderRadius: "0.3rem",
    gap: "0.2rem",
    ...typographies.body1,
  },
  large: {
    padding: "0.6rem 0.9rem",
    borderRadius: "0.36rem",
    gap: "0.2rem",
    ...typographies.header5,
  },
  xLarge: {
    padding: "0.7rem 1rem",
    borderRadius: "0.4rem",
    gap: "0.2rem",
    ...typographies.header4,
  },
  xxLarge: {
    padding: "0.8rem 1.2rem",
    borderRadius: "0.46rem",
    gap: "0.2rem",
    ...typographies.header3,
  },
}

const boxSizes: BoxSizes = {
  ...baseBoxSizes,
  xxSmall_full: {
    ...baseBoxSizes.xxSmall,
    width: "100%",
  },
  xSmall_full: {
    ...baseBoxSizes.xSmall,
    width: "100%",
  },
  small_full: {
    ...baseBoxSizes.small,
    width: "100%",
  },
  medium_full: {
    ...baseBoxSizes.medium,
    width: "100%",
  },
  large_full: {
    ...baseBoxSizes.large,
    width: "100%",
  },
  xLarge_full: {
    ...baseBoxSizes.xLarge,
    width: "100%",
  },
  xxLarge_full: {
    ...baseBoxSizes.xxLarge,
    width: "100%",
  },
}

export default boxSizes
