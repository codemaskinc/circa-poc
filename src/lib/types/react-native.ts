import { ImageStyle, TextStyle, ViewStyle } from 'react-native'
import { TemplateSettings } from '../styles'

export type CSSPropertiesFunction = (...props: any) => CSSProperties
export type CSSProperties = ViewStyle | TextStyle | ImageStyle
export type CustomNamedStyles<T> = { [P in keyof T]: CSSProperties | CSSPropertiesFunction }
export type NamedStyles<T> = { [P in keyof T]: CSSProperties }
export type CreateStyles<T> = (template: TemplateSettings) => T

export enum BarStyle {
    Light = 'light-content',
    Dark = 'dark-content'
}
