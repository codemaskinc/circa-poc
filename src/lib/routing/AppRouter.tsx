import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { RootStack } from './screens'
import { AppStackParams } from './stackParams'
import { BottomTabNavigator } from './BottomTabNavigator'

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

export const AppRouter: React.FunctionComponent = () => (
    <NavigationContainer>
        {renderAppStack()}
    </NavigationContainer>
)
