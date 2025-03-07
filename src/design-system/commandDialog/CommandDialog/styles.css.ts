import { globalStyle, style } from "@vanilla-extract/css"
import { theme } from "../../theme/theme.css"

const commandDialogTheme = theme.colors.commandDialog

const componentAttributeMap = {
  overlay: "[cmdk-overlay]",
  dialog: "[cmdk-dialog]",
  root: "[cmdk-root]",
  inputContainer: "[cmdk-input-container]",
  inputIcon: "[cmdk-input-icon]",
  input: "[cmdk-input]",
  result: "[cmdk-result]",
  list: "[cmdk-list]",
  listSizer: "[cmdk-list-sizer]",
  group: "[cmdk-group]",
  groupHeading: "[cmdk-group-heading]",
  groupItems: "[cmdk-group-items]",
  groupHidden: "[data-hidden]",
  item: "[cmdk-item]",
  itemHover: "[cmdk-item]:hover:not([data-disabled])",
  itemDisabled: "[data-disabled=true]",
  itemSelected: "[data-selected=true]",
  separator: "[cmdk-separator]",
  empty: "[cmdk-empty]",
  loading: "[cmdk-loading]",
}

// Command Dialog Overlay
export const commandDialogOverlay = style({
  position: "absolute",
  top: 0,
  backgroundColor: commandDialogTheme.overlay,
  ...theme.layouts.fullParent,
  transition: "opacity 0.2s ease-in-out, visibility 0.2s ease-in-out",
})

export const commandDialogOverlayInvisible = style({
  opacity: 0,
  visibility: "hidden",
  transitionDelay: "0.1s",
})

export const commandDialogOverlayVisible = style({
  opacity: 1,
  visibility: "visible",
  transitionDelay: "0",
})

// CommandDialog
const width = theme.breakpoints.medium

export const commandDialog = style({
  ...theme.alignments.columnTopCenter,
  position: "absolute",
  width: "80%",
  maxWidth: width.width,
  maxHeight: "60svh",
  transform: "translateX(-50%)",
  top: "20%",
  left: "50%",
  transition: "opacity 0.2s ease-in-out, visibility 0.2s ease-in-out",
  backdropFilter: "blur(22px)",
  borderRadius: `${theme.spaces.medium}`,
})

export const commandDialogInvisible = style({
  opacity: 0,
  visibility: "hidden",
  transitionDelay: "0",
})

export const commandDialogVisible = style({
  opacity: 1,
  visibility: "visible",
  transitionDelay: "0.1s",
})

globalStyle(`${commandDialog} ${componentAttributeMap.root}`, {
  position: "relative",
  width: "100%",
  overflow: "hidden",
  maxHeight: "100%",
  ...theme.alignments.columnTopLeft,
  // backgroundColor: commandDialogTheme.background,
  borderRadius: `${theme.spaces.medium}`,
  ...(commandDialogTheme.border && {
    boxShadow: `0 0 0 0.1rem ${commandDialogTheme.border} inset`,
  }),
})

// Input
const inputTextSize = theme.typographies.header4

globalStyle(`${commandDialog} ${componentAttributeMap.inputContainer}`, {
  ...theme.layouts.fullWidth,
  ...theme.alignments.rowCenterLeft,
  gap: theme.spaces.small,
  padding: `${theme.spaces.small} ${theme.spaces.medium}`,
})

globalStyle(`${commandDialog} ${componentAttributeMap.inputIcon}`, {
  fill: commandDialogTheme.input.icon,
  height: `calc(${inputTextSize.lineHeight} - 0.4rem)`,
  aspectRatio: "1",
})

globalStyle(`${commandDialog} ${componentAttributeMap.input}`, {
  flexGrow: 1,
  backgroundColor: "transparent",
  border: "none",
  outline: "none",
  color: commandDialogTheme.input.text,
  fontSize: inputTextSize.fontSize,
  fontWeight: inputTextSize.fontWeight,
  lineHeight: inputTextSize.lineHeight,
})

globalStyle(`${commandDialog} ${componentAttributeMap.input}::placeholder`, {
  color: commandDialogTheme.input.placeholder,
})

globalStyle(`${commandDialog} ${componentAttributeMap.result}`, {
  ...theme.layouts.fullWidth,
  overflowY: "scroll",
  scrollBehavior: "smooth",
  borderTop: `0.1rem solid ${commandDialogTheme.border}`,
})

globalStyle(`${commandDialog} ${componentAttributeMap.list}`, {
  ...theme.layouts.fullWidth,
  height: "fit-content",
  padding: `${theme.spaces.small} 0 ${theme.spaces.medium} 0`,
})

globalStyle(`${commandDialog} ${componentAttributeMap.listSizer}`, {
  ...theme.layouts.fullWidth,
  ...theme.alignments.columnTopLeft,
  gap: theme.spaces.xSmall,
})

globalStyle(`${commandDialog} ${componentAttributeMap.group}:not([hidden])`, {
  ...theme.layouts.fullWidth,
  ...theme.alignments.columnTopLeft,
})

globalStyle(`${commandDialog} ${componentAttributeMap.groupHeading}`, {
  ...theme.boxSizes.xxSmall_full,
  color: commandDialogTheme.groupHeadingText,
})

globalStyle(`${commandDialog} ${componentAttributeMap.groupItems}`, {
  ...theme.layouts.fullWidth,
  ...theme.alignments.columnTopLeft,
  gap: theme.spaces.small,
  padding: `0 ${theme.spaces.small}`,
})

globalStyle(`${commandDialog} ${componentAttributeMap.groupHidden}`, {})

globalStyle(`${commandDialog} ${componentAttributeMap.item}`, {
  ...theme.boxSizes.medium_full,
  color: commandDialogTheme.item.default.text,
  backgroundColor: commandDialogTheme.item.default.background,
  padding: `${theme.spaces.xxSmall} ${theme.spaces.medium}`,
})

globalStyle(`${commandDialog} ${componentAttributeMap.itemHover}`, {
  color: commandDialogTheme.item.hover.text,
  backgroundColor: commandDialogTheme.item.hover.background,
})

globalStyle(`${commandDialog} ${componentAttributeMap.itemDisabled}`, {
  color: commandDialogTheme.item.disabled.text,
  // backgroundColor: commandDialogTheme.item.disabled.background,
})

globalStyle(`${commandDialog} ${componentAttributeMap.itemSelected}`, {
  color: commandDialogTheme.item.selected.text,
  backgroundColor: commandDialogTheme.item.selected.background,
})

globalStyle(`${commandDialog} ${componentAttributeMap.separator}`, {})

globalStyle(`${commandDialog} ${componentAttributeMap.empty}`, {
  ...theme.alignments.columnCenter,
  ...theme.layouts.fullWidth,
  color: commandDialogTheme.groupHeadingText,
  padding: theme.spaces.xLarge,
})

globalStyle(`${commandDialog} ${componentAttributeMap.loading}`, {})
