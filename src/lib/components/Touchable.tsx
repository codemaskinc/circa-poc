// eslint-disable-next-line no-restricted-imports
import { Pressable, ViewStyle } from 'react-native'
import React, { useState } from 'react'
import { VoidFunction } from '../types'

type TouchableProps = {
    onPress?: VoidFunction,
    onLongPress?: VoidFunction,
    disabled?: boolean,
    hitSlopLeft?: number,
    hitSlopRight?: number,
    hitSlopTop?: number,
    hitSlopBottom?: number,
    style?: ViewStyle,
    activeOpacity?: number
}

export const Touchable: React.FunctionComponent<TouchableProps> = ({
    onPress,
    children,
    disabled,
    style,
    onLongPress,
    hitSlopLeft = 0,
    hitSlopRight = 0,
    hitSlopTop = 0,
    hitSlopBottom = 0,
    activeOpacity = 0.95
}) => {
    const [pressedIn, setPressedIn] = useState(false)

    return (
        <Pressable
            children={children}
            android_disableSound
            disabled={disabled}
            onPress={onPress}
            onLongPress={onLongPress}
            style={({ pressed }) => ({
                ...style,
                opacity: pressed || pressedIn ? activeOpacity : 1
            })}
            hitSlop={{
                bottom: hitSlopBottom,
                top: hitSlopTop,
                left: hitSlopLeft,
                right: hitSlopRight,
            }}
            onPressIn={() => setPressedIn(true)}
            onPressOut={() => setPressedIn(false)}
        />
    )
}
