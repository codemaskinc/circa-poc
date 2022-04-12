import React from 'react'
import { ViewStyle } from 'react-native'
import Animated, {
    useAnimatedStyle,
    useSharedValue,
    withSequence,
    withSpring
} from 'react-native-reanimated'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { useStyles } from 'lib/hooks'
import { Typography } from 'lib/components'
import { createStyles } from 'lib/styles'
import { VoidFunction } from '../types'

type ButtonProps = {
    label: string,
    width?: number,
    style?: ViewStyle,
    disabled?: boolean,
    forceColor?: string,
    onPress: VoidFunction
}

const AnimatedTouchableOpacity = Animated.createAnimatedComponent(TouchableOpacity)

export const Button: React.FunctionComponent<ButtonProps> = ({
    label,
    width,
    onPress,
    disabled,
    style = {},
    forceColor
}) => {
    const animatedScale = useSharedValue<number>(1)
    const animatedTranslateX = useSharedValue(0)
    const { styles, template } = useStyles(stylesheet)
    const animatedButtonStyles = useAnimatedStyle(() => ({
        transform: [
            {
                scale: animatedScale.value
            },
            {
                translateX: animatedTranslateX.value
            }
        ]
    }))

    return (
        <AnimatedTouchableOpacity
            activeOpacity={1}
            disabled={disabled}
            onPressIn={() => {
                animatedScale.value = withSequence(
                    withSpring(0.85, {
                        overshootClamping: true
                    }),
                    withSpring(1, {
                        overshootClamping: true
                    })
                )

                if (width) {
                    animatedTranslateX.value = withSequence(
                        withSpring(width > 80 ? -10 : 10, {
                            overshootClamping: true
                        }),
                        withSpring(0, {
                            overshootClamping: true
                        })
                    )
                }
            }}
            onPress={onPress}
            style={[
                styles.button(width, forceColor),
                animatedButtonStyles,
                style
            ]}
        >
            <Typography.Label
                style={styles.label}
                forceColor={forceColor || template.ui.primary}
            >
                {label}
            </Typography.Label>
        </AnimatedTouchableOpacity>
    )
}

const stylesheet = createStyles(template => ({
    button: (width?: number, forceColor?: string) => ({
        ...template.button,
        width,
        justifyContent: 'center',
        alignItems: 'center',
        x: 0,
        y: 0.5,
        borderColor: forceColor || template.ui.primary
    }),
    label: {
        textTransform: 'uppercase'
    }
}))
