import {ThemeType} from "@/design-system/theme/type/ThemeType";

declare module 'styled-components' {
    // eslint-disable-next-line @typescript-eslint/no-empty-object-type
    export interface DefaultTheme extends ThemeType {
    }
}