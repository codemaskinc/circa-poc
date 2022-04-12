import React from 'react'
import { View } from 'react-native'
import { NavigationHelpers, ParamListBase } from '@react-navigation/native'
import { BottomTabNavigationEventMap } from '@react-navigation/bottom-tabs/src/types'
import { Route } from 'lib/types'
import { BottomBarIcon } from './BottomBarIcon'

type IconProps = {
    route: Route,
    isActive: boolean,
    navigation: NavigationHelpers<ParamListBase, BottomTabNavigationEventMap>
}

export const Icon: React.FunctionComponent<IconProps> = ({
    route,
    isActive,
    navigation
}) => (
    <View>
        <BottomBarIcon
            label=""
            key={route.key}
            isActive={isActive}
            icon={React.createElement(route.icon, {
                size: 32,
                isActive
            })}
            onPress={() => {
                const event = navigation.emit({
                    type: 'tabPress',
                    target: route.key,
                    canPreventDefault: true
                })

                if (!isActive && !event.defaultPrevented) {
                    navigation.navigate(route.name)
                }
            }}
        />
    </View>
)
