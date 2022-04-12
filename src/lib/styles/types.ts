import { KeyValuePair } from '../types'

export type TemplateSettings<S = string, N = number> = {
    ui: {
        primary: S,
        accent: S,
        white: S,
        black: S,
        secondary: S,
        background: S,
        foreground: S,
        label: S,
        spacer: S,
        transparent: S,
        typography: S,
        fontFamily: S | undefined,
        createShadow(y?: number, blur?: number): KeyValuePair
    },
    icon: {
        selected: S,
        unselected: S
    },
    typography: {
        white: S,
        regular: S,
        primary: S,
        label: S
    },
    button: {
        background: S,
        borderColor: S,
        borderWidth: N,
        borderRadius: N,
        height: N,
        paddingHorizontal: N
    },
    gap(factor: number): number
}

export type UiSettings<N = number> = {
    button: {
        height: N,
        borderRadius: N,
        borderWidth: N,
        paddingHorizontal: N
    },
    fontFamily: string | undefined,
    gap(factor: number): number
}
