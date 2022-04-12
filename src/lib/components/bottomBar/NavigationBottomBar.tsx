import React from 'react'
import { View } from 'react-native'
import { BottomTabBarProps } from '@react-navigation/bottom-tabs'
import { createStyles } from 'lib/styles'
import { useStyles } from 'lib/hooks'
import { useNavigationBottomRoutes } from './useNavigationBottomRoutes'
import { Icon } from './Icon'
import { SafeAreaBottomSpacer } from '../SafeAreaBottomSpacer'

type NavigationBottomBarProps = BottomTabBarProps

export const NavigationBottomBar: React.FunctionComponent<NavigationBottomBarProps> = ({ navigation, state }) => {
    const { styles, template } = useStyles(stylesheet)
    const routes = useNavigationBottomRoutes(state)

    return (
        <View style={styles.container}>
            <View style={styles.tabBar}>
                {routes.map((route, index) => (
                    <Icon
                        route={route}
                        key={route.key}
                        navigation={navigation}
                        isActive={state.index === index}
                    />
                ))}
            </View>
            <SafeAreaBottomSpacer backgroundColor={template.ui.white} />
        </View>
    )
}

const stylesheet = createStyles(template => ({
    container: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
    },
    tabBar: {
        height: 80,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        borderTopRightRadius: template.gap(2),
        borderTopLeftRadius: template.gap(2),
        backgroundColor: template.ui.white,
        ...template.ui.createShadow()
    }
}))
