import { RootStack, ScreenNames } from './screens'

export type AppStackParams = {
    [RootStack.Root]: undefined,

    // register all screens here
    [ScreenNames.Home]: undefined
}

export type NavigationTabParams = {
    [ScreenNames.Home]: undefined,
    [ScreenNames.Plans]: undefined,
    [ScreenNames.Wallet]: undefined,
    [ScreenNames.Payments]: undefined,
    [ScreenNames.Settings]: undefined
}

export type NavigationScreenParams = AppStackParams & NavigationTabParams
