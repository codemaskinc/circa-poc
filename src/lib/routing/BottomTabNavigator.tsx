import React from 'react'
import { BottomTabNavigationOptions, createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { HomeScreen } from 'features/home'
import { SettingsScreen } from 'features/settings'
import { PaymentsScreen } from 'features/payments'
import { WalletScreen } from 'features/wallet'
import { PlansScreen } from 'features/plans'
import { NavigationBottomBar } from 'lib/components'
import { NavigationTabParams } from './stackParams'
import { ScreenNames } from './screens'

const Tab = createBottomTabNavigator<NavigationTabParams>()
const DEFAULT_OPTIONS: BottomTabNavigationOptions = {
    headerShown: false,
    tabBarHideOnKeyboard: true,
    tabBarAllowFontScaling: false
}

export const BottomTabNavigator: React.FunctionComponent = () => (
    <Tab.Navigator
        initialRouteName={ScreenNames.Home}
        tabBar={props => (
            <NavigationBottomBar {...props} />
        )}
        screenOptions={{
            lazy: false
        }}
    >
        <Tab.Screen
            name={ScreenNames.Home}
            component={HomeScreen}
            options={{
                ...DEFAULT_OPTIONS
            }}
        />
        <Tab.Screen
            name={ScreenNames.Plans}
            component={PlansScreen}
            options={{
                ...DEFAULT_OPTIONS
            }}
        />
        <Tab.Screen
            name={ScreenNames.Wallet}
            component={WalletScreen}
            options={{
                ...DEFAULT_OPTIONS
            }}
        />
        <Tab.Screen
            name={ScreenNames.Payments}
            component={PaymentsScreen}
            options={{
                ...DEFAULT_OPTIONS
            }}
        />
        <Tab.Screen
            name={ScreenNames.Settings}
            component={SettingsScreen}
            options={{
                ...DEFAULT_OPTIONS
            }}
        />
    </Tab.Navigator>
)
