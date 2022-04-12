import { useStyles } from 'lib/hooks'

export const useIconColor = (isActive?: boolean, forceColor?: string) => {
    const { template } = useStyles()

    if (forceColor) {
        return forceColor
    }

    if (isActive) {
        return template.icon.selected
    }

    return template.icon.unselected
}
