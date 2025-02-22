import {ThemeType} from "@/design-system/theme/type/ThemeType";

type ThemeMode = "light" | "dark"

type ThemeSelectType = {[key in ThemeMode]: ThemeType}

export type {ThemeSelectType}
export default ThemeMode