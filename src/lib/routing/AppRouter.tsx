import React, { useEffect, useState } from 'react'
import { Alert } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { authActions } from 'features/auth'
import { homeActions } from 'features/home'
import { useTranslations } from 'lib/hooks'
import { FullScreenLoader } from 'lib/components'
import { AppStackParams } from './stackParams'
import { RootStack } from './screens'
import { BottomTabNavigator } from './BottomTabNavigator'
import { useResidentStore } from '../stores'

const AppStack = createNativeStackNavigator<AppStackParams>()

const renderAppStack = () => (
    <AppStack.Navigator
        initialRouteName={RootStack.Root}
        screenOptions={{
            headerShown: false
        }}
    >
        <AppStack.Screen name={RootStack.Root} component={BottomTabNavigator} />
    </AppStack.Navigator>
)

export const AppRouter: React.FunctionComponent = () => {
    const T = useTranslations()
    const [isAppReady, setIsAppReady] = useState(false)
    const { residentState: { residentId } } = useResidentStore()
    const { fetch: getDashboardData } = homeActions.useGetDashboardData(
        () => setIsAppReady(true),
        () => Alert.alert(T.alerts.dashboardError.title, T.alerts.dashboardError.message)
    )
    const { fetch: getResidentId } = authActions.useGetResidentId(
        () => Alert.alert(T.alerts.residentError.title, T.alerts.residentError.message)
    )
    const { fetch: getOAuthTokens } = authActions.useGetOAuthToken(
        () => getResidentId(),
        () => Alert.alert(T.alerts.oAuthError.title, T.alerts.oAuthError.message)
    )

    useEffect(() => {
        getOAuthTokens()
    }, [])

    useEffect(() => {
        if (residentId) {
            getDashboardData()
        }
    }, [residentId])

    return isAppReady ? (
        <NavigationContainer>
            {renderAppStack()}
        </NavigationContainer>
    ) : (
        <FullScreenLoader />
    )
}
