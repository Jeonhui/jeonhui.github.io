import { globalStyle, style } from "@vanilla-extract/css"

export const list = style({
  listStyle: "none",
  padding: 0,
  margin: 0,
})

globalStyle(`${list} > li`, {
  padding: "0.05rem 0",
})
