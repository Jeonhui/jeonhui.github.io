import { Property } from "csstype"

type ZIndex = Property.ZIndex

type ZIndices = {
  base: ZIndex
  background: ZIndex
  default: ZIndex
  dropdown: ZIndex
  modal: ZIndex
  overlay: ZIndex
}

const zIndices: ZIndices = {
  base: "0",
  background: "100",
  default: "200",
  dropdown: "300",
  modal: "400",
  overlay: "500",
}

export default zIndices
