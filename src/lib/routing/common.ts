import { RouteProp, NavigationProp as NativeNavigationProp } from '@react-navigation/native'
import { StackNavigationProp } from '@react-navigation/stack'
import { ScreenNames } from './screens'
import { NavigationScreenParams } from './stackParams'

export type NavigationParams<S extends ScreenNames> = RouteProp<NavigationScreenParams, S>
export type StackProps<S extends ScreenNames> = StackNavigationProp<NavigationScreenParams, S>
export type NavigationProps<S extends ScreenNames> = NativeNavigationProp<NavigationScreenParams, S>
