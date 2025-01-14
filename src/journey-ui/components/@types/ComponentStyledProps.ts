import React from "react";

type ComponentBaseProps = {
    children?: React.ReactNode
}

type ComponentStyledProps<S> = ComponentBaseProps & {
    [P in keyof S]?: S[P]
}

type ComponentStyledPropsWithoutChildren<S> = Omit<ComponentStyledProps<S>, 'children'>

export default ComponentStyledProps

export type {ComponentStyledPropsWithoutChildren}