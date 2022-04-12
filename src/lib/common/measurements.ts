import { StatusBar } from 'react-native'
import { platform } from './platform'

// todo handle notch, this is POC so leave it for now
const STATUSBAR_HEIGHT = platform.isIOS
    ? 44
    : StatusBar.currentHeight as number

export enum Measurements {
    StatusBarHeight = STATUSBAR_HEIGHT,
}
