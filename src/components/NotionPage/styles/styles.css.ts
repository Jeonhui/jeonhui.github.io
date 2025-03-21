import { globalStyle, style } from "@vanilla-extract/css"
import { theme } from "@design-system/theme/theme.css"

export const layout = style({
  scrollPaddingTop: "1rem",
})

export const notionRenderer = style({})

globalStyle(`${notionRenderer}`, {
  vars: {
    "--notion-font": theme.fonts.base,
    "--fg-color": theme.colors.text.text,
    "--fg-color-0": "rgba(55, 53, 47, 0.09)",
    "--fg-color-1": "rgba(55, 53, 47, 0.16)",
    "--fg-color-2": "rgba(55, 53, 47, 0.4)",
    "--fg-color-3": "rgba(55, 53, 47, 0.6)",
    "--fg-color-4": "#000",
    "--fg-color-5": "rgba(55, 53, 47, 0.024)",
    "--fg-color-6": "rgba(55, 53, 47, 0.8)",
    "--fg-color-7": "rgba(55, 53, 47, 0.5)",
    "--fg-color-icon": theme.colors.text.textDim2,

    "--bg-color": "transparent",
    "--bg-color-0": "rgba(135, 131, 120, 0.15)",
    "--bg-color-1": "rgb(247, 246, 243)",
    "--bg-color-2": "rgba(135, 131, 120, 0.15)",

    "--select-color-0": theme.colors.primary,
    "--select-color-1": "rgba(45, 170, 219, 0.3)",
    "--select-color-2": "#d9eff8",

    "--notion-red": "rgb(224, 62, 62)",
    "--notion-pink": "rgb(173, 26, 114)",
    "--notion-blue": theme.colors.primary,
    "--notion-purple": "rgb(105, 64, 165)",
    "--notion-teal": "rgb(77, 100, 97)",
    "--notion-yellow": "rgb(223, 171, 1)",
    "--notion-orange": "rgb(217, 115, 13)",
    "--notion-brown": "rgb(100, 71, 58)",
    "--notion-gray": "rgb(155, 154, 151)",

    "--notion-red_background": "rgb(251, 228, 228)",
    "--notion-pink_background": "rgb(244, 223, 235)",
    "--notion-blue_background": "rgb(221, 235, 241)",
    "--notion-purple_background": "rgb(234, 228, 242)",
    "--notion-teal_background": "rgb(221, 237, 234)",
    "--notion-yellow_background": "rgb(251, 243, 219)",
    "--notion-orange_background": "rgb(250, 235, 221)",
    "--notion-brown_background": "rgb(233, 229, 227)",
    "--notion-gray_background": "rgb(235, 236, 237)",

    "--notion-red_background_co": "rgba(251, 228, 228, 0.3)",
    "--notion-pink_background_co": "rgba(244, 223, 235, 0.3)",
    "--notion-blue_background_co": "rgba(221, 235, 241, 0.3)",
    "--notion-purple_background_co": "rgba(234, 228, 242, 0.3)",
    "--notion-teal_background_co": "rgba(221, 237, 234, 0.3)",
    "--notion-yellow_background_co": "rgba(251, 243, 219, 0.3)",
    "--notion-orange_background_co": "rgba(250, 235, 221, 0.3)",
    "--notion-brown_background_co": "rgba(233, 229, 227, 0.3)",
    "--notion-gray_background_co": "rgba(235, 236, 237, 0.3)",

    "--notion-item-blue": "rgb(211, 229, 239)",
    "--notion-item-orange": "rgb(250, 222, 201)",
    "--notion-item-green": "rgb(219, 237, 219)",
    "--notion-item-pink": "rgb(245, 224, 233)",
    "--notion-item-brown": "rgb(238, 224, 218)",
    "--notion-item-red": "rgb(255, 226, 221)",
    "--notion-item-yellow": "rgb(253, 236, 200)",
    "--notion-item-default": "rgba(227, 226, 224, 0.5)",
    "--notion-item-purple": "rgb(232, 222, 238)",
    "--notion-item-gray": "rgb(227, 226, 224)",

    "--notion-item-text-blue": "rgb(24, 51, 71)",
    "--notion-item-text-orange": "rgb(73, 41, 14)",
    "--notion-item-text-green": "rgb(28, 56, 41)",
    "--notion-item-text-pink": "rgb(76, 35, 55)",
    "--notion-item-text-brown": "rgb(68, 42, 30)",
    "--notion-item-text-red": "rgb(93, 23, 21)",
    "--notion-item-text-yellow": "rgb(64, 44, 27)",
    "--notion-item-text-default": "rgb(50, 48, 44)",
    "--notion-item-text-purple": "rgb(65, 36, 84)",
    "--notion-item-text-gray": "rgb(50, 48, 44)",

    "--notion-item-bullet-blue": "rgb(91, 151, 189)",
    "--notion-item-bullet-orange": "rgb(215, 129, 58)",
    "--notion-item-bullet-green": "rgb(108, 155, 125)",
    "--notion-item-bullet-pink": "rgb(205, 116, 159)",
    "--notion-item-bullet-brown": "rgb(187, 132, 108)",
    "--notion-item-bullet-red": "rgb(225, 111, 100)",
    "--notion-item-bullet-yellow": "rgb(203, 148, 51)",
    "--notion-item-bullet-default": "rgb(91, 151, 189)",
    "--notion-item-bullet-purple": "rgb(167, 130, 195)",
    "--notion-item-bullet-gray": "rgb(145, 145, 142)",

    "--notion-max-width": "720px",
    "--notion-header-height": "45px",
  },
})

globalStyle(`${notionRenderer}:is(.dark-mode)`, {
  vars: {
    "--fg-color-0": "var(--fg-color)",
    "--fg-color-1": "var(--fg-color)",
    "--fg-color-2": "var(--fg-color)",
    "--fg-color-3": "var(--fg-color)",
    "--fg-color-4": "var(--fg-color)",
    "--fg-color-5": "rgba(255, 255, 255, 0.7)",
    "--fg-color-6": "#fff",
    "--bg-color-0": "rgb(71, 76, 80)",
    "--bg-color-1": "rgb(63, 68, 71)",
    "--bg-color-2": "rgba(135, 131, 120, 0.15)",
    "--notion-red": "rgb(255, 115, 105)",
    "--notion-pink": "rgb(226, 85, 161)",
    "--notion-purple": "rgb(154, 109, 215)",
    "--notion-teal": "rgb(77, 171, 154)",
    "--notion-yellow": "rgb(255, 220, 73)",
    "--notion-orange": "rgb(255, 163, 68)",
    "--notion-brown": "rgb(147, 114, 100)",
    "--notion-gray": "rgba(151, 154, 155, 0.95)",
    "--notion-red_background": "rgb(89, 65, 65)",
    "--notion-pink_background": "rgb(83, 59, 76)",
    "--notion-blue_background": "rgb(54, 73, 84)",
    "--notion-purple_background": "rgb(68, 63, 87)",
    "--notion-teal_background": "rgb(53, 76, 75)",
    "--notion-yellow_background": "rgb(89, 86, 59)",
    "--notion-orange_background": "rgb(89, 74, 58)",
    "--notion-brown_background": "rgb(67, 64, 64)",
    "--notion-gray_background": "rgb(69, 75, 78)",
    "--notion-red_background_co": "rgba(89, 65, 65, 0.3)",
    "--notion-pink_background_co": "rgba(83, 59, 76, 0.3)",
    "--notion-blue_background_co": "rgba(120, 162, 187, 0.3)",
    "--notion-purple_background_co": "rgba(68, 63, 87, 0.3)",
    "--notion-teal_background_co": "rgba(53, 76, 75, 0.3)",
    "--notion-yellow_background_co": "rgba(89, 86, 59, 0.3)",
    "--notion-orange_background_co": "rgba(89, 74, 58, 0.3)",
    "--notion-brown_background_co": "rgba(67, 64, 64, 0.3)",
    "--notion-gray_background_co": "rgba(69, 75, 78, 0.3)",
  },
})

const gradientTextColor = `linear-gradient(45deg, ${theme.colors.gradient.start} 0%, ${theme.colors.gradient.end} 100%)`
const gradientTextProperties = {
  background: gradientTextColor,
  backgroundClip: "text !important",
  color: "transparent !important",
  transition: "background-position 1s ease-in-out",
  backgroundSize: "200% 200%",
}

globalStyle(".notion-title", {
  ...gradientTextProperties,
})

globalStyle(".notion-blue", {
  ...gradientTextProperties,
})

globalStyle(".notion-h-title, .notion-text, .notion-list", {
  transition: "color 0.3s ease-in-out",
  color: theme.colors.text.text,
})

globalStyle(".notion-link", {
  color: theme.colors.text.textDim,
})

globalStyle(".notion-code", {
  fontFamily: theme.fonts.code,
  color: theme.colors.text.text,
})

globalStyle(".notion-code-copy-button:hover", {
  backgroundColor: theme.colors.button.text.hover.background,
})

globalStyle(".notion-code-copy-button:hover > svg", {
  fill: theme.colors.button.text.hover.text,
})

globalStyle(".notion-code-copy-button:active", {
  backgroundColor: theme.colors.button.text.pressed.background,
})

globalStyle(".notion-code-copy-button:active > svg", {
  fill: theme.colors.button.text.pressed.text,
})

globalStyle(".notion-inline-code", {
  color: theme.colors.primary,
})
