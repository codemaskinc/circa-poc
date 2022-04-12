import { StyleSheet } from 'react-native'
import { TemplateSettings } from '../styles'
import { useTemplate } from './useTemplate'
import { CustomNamedStyles } from '../types'

type StylesObject<T> = {
    template: TemplateSettings,
    styles: T
}

export const useStyles = <T extends CustomNamedStyles<T> | CustomNamedStyles<any>>(styles?: (template: TemplateSettings) => T | CustomNamedStyles<T>): StylesObject<T> => {
    const template = useTemplate()
    // @ts-ignore
    const styleSheet = StyleSheet.create(styles ? styles(template) : {})

    return {
        template,
        styles: styleSheet as unknown as T
    }
}
