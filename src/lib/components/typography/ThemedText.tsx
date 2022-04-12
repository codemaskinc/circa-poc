import React from 'react'
import { Text, TextStyle } from 'react-native'
import { useStyles } from 'lib/hooks'
import { VoidFunction } from 'lib/types'
import { createStyles } from 'lib/styles'

type ThemedTextProps = {
    numberOfLines?: number,
    onPress?: VoidFunction,
    style?: TextStyle,
    forceColor?: string
}

export const ThemedText: React.FunctionComponent<ThemedTextProps> = ({
    children,
    style = {},
    numberOfLines,
    onPress,
    forceColor
}) => {
    const { styles } = useStyles(stylesheet)

    return (
        <Text
            onPress={onPress}
            allowFontScaling={false}
            numberOfLines={numberOfLines}
            ellipsizeMode={numberOfLines ? 'tail' : undefined}
            style={{
                ...styles.text(forceColor),
                ...style
            }}
            children={children}
        />
    )
}

const stylesheet = createStyles(template => ({
    text: (forceColor?: string) => ({
        fontSize: 14,
        color: forceColor || template.typography.regular
    }),
}))
