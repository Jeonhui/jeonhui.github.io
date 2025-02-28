import { CSSProperties } from "@vanilla-extract/css"

type Alignment = Pick<
  CSSProperties,
  "display" | "flexDirection" | "justifyContent" | "alignItems"
>

type AlignmentTheme = {
  columnCenter: Alignment
  columnTopLeft: Alignment
  columnTopCenter: Alignment
  columnTopRight: Alignment
  columnCenterLeft: Alignment
  columnCenterRight: Alignment
  columnBottomLeft: Alignment
  columnBottomCenter: Alignment
  columnBottomRight: Alignment
  rowCenter: Alignment
  rowTopLeft: Alignment
  rowTopCenter: Alignment
  rowTopRight: Alignment
  rowCenterLeft: Alignment
  rowCenterRight: Alignment
  rowBottomLeft: Alignment
  rowBottomCenter: Alignment
  rowBottomRight: Alignment
}

type Direction = "column" | "row"
type VerticalAlignment = "top" | "center" | "bottom"
type HorizontalAlignment = "left" | "center" | "right"

const createAlignment = (
  direction: Direction,
  vertical: VerticalAlignment,
  horizontal: HorizontalAlignment,
): Alignment => {
  return {
    display: "flex",
    flexDirection: direction,
    justifyContent: direction === "column" ? horizontal : vertical,
    alignItems: direction === "column" ? vertical : horizontal,
  }
}

const alignmentTheme: AlignmentTheme = {
  columnCenter: createAlignment("column", "center", "center"),
  columnTopLeft: createAlignment("column", "top", "left"),
  columnTopCenter: createAlignment("column", "top", "center"),
  columnTopRight: createAlignment("column", "top", "right"),
  columnCenterLeft: createAlignment("column", "center", "left"),
  columnCenterRight: createAlignment("column", "center", "right"),
  columnBottomLeft: createAlignment("column", "bottom", "left"),
  columnBottomCenter: createAlignment("column", "bottom", "center"),
  columnBottomRight: createAlignment("column", "bottom", "right"),
  rowCenter: createAlignment("row", "center", "center"),
  rowTopLeft: createAlignment("row", "top", "left"),
  rowTopCenter: createAlignment("row", "top", "center"),
  rowTopRight: createAlignment("row", "top", "right"),
  rowCenterLeft: createAlignment("row", "center", "left"),
  rowCenterRight: createAlignment("row", "center", "right"),
  rowBottomLeft: createAlignment("row", "bottom", "left"),
  rowBottomCenter: createAlignment("row", "bottom", "center"),
  rowBottomRight: createAlignment("row", "bottom", "right"),
}

export default alignmentTheme
