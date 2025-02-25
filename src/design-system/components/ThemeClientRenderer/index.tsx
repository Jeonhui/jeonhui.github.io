import React from "react";
import ThemeMode from "../../theme/type/ThemeMode";
import {useIsClient} from "../../hooks";


type ThemeClientRendererProps = {
    theme: ThemeMode;
    isNotClient?: React.ReactNode;
    lightMode?: React.ReactNode;
    darkMode?: React.ReactNode;
}

const ClientRenderer = ({
                            theme,
                            isNotClient,
                            lightMode,
                            darkMode
                        }: ThemeClientRendererProps): React.ReactNode => {

    return !useIsClient() ? isNotClient ?? <></> : theme === "light" ? lightMode ?? <></> : darkMode ?? <></>;
};

export default ClientRenderer;