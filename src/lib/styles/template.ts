import { TemplateSettings, UiSettings } from './types'

const createShadow = (offsetY = 0, blur = 40) => ({
    shadowOffset: {
        width: 0,
        height: offsetY,
    },
    shadowOpacity: 0.2,
    shadowRadius: blur,
    elevation: 18,
    shadowColor: template.shadow,
})

export const template = {
    primary: '#1E0B66',
    accent: '#6A67CE',
    secondary: '#EDEBFF',
    blackie: '#14142A',
    mist: '#6E7191',
    shadow: '#7090B0',
    white: '#FFFFFF',
    black: '#000000',
    gray: '#E2E2E2',
    transparent: 'transparent'
}

const GRID_GAP = 8

const UISettings: UiSettings = {
    button: {
        height: GRID_GAP * 3,
        borderRadius: GRID_GAP * 3,
        borderWidth: 1,
        paddingHorizontal: GRID_GAP * 2,
    },
    fontFamily: undefined,
    gap: factor => factor * GRID_GAP
}

export const lightTemplate: TemplateSettings = {
    gap: UISettings.gap,
    ui: {
        primary: template.primary,
        accent: template.accent,
        secondary: template.secondary,
        black: template.black,
        transparent: template.transparent,
        typography: template.blackie,
        label: template.mist,
        spacer: template.gray,
        background: template.white,
        foreground: template.white,
        white: template.white,
        fontFamily: UISettings.fontFamily,
        createShadow
    },
    button: {
        borderRadius: UISettings.button.borderRadius,
        height: UISettings.button.height,
        background: template.transparent,
        borderColor: template.white,
        borderWidth: UISettings.button.borderWidth,
        paddingHorizontal: UISettings.button.paddingHorizontal
    },
    icon: {
        selected: template.white,
        unselected: template.primary
    },
    typography: {
        white: template.white,
        regular: template.blackie,
        primary: template.primary,
        label: template.mist
    }
}
