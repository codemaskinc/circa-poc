import React from 'react'
import { TextStyle } from 'react-native'
import { VoidFunction } from 'lib/types'
import { createStyles } from 'lib/styles'
import { useStyles } from 'lib/hooks'
import { ThemedText } from './ThemedText'

type RegularProps = {
    numberOfLines?: number,
    onPress?: VoidFunction,
    style?: TextStyle,
    forceColor?: string
}

export const Regular: React.FunctionComponent<RegularProps> = ({
    children,
    numberOfLines,
    onPress,
    style = {},
    forceColor,
}) => {
    const { styles, template } = useStyles(stylesheet)

    return (
        <ThemedText
            onPress={onPress}
            style={{
                ...styles.text,
                ...style,
            }}
            numberOfLines={numberOfLines}
            forceColor={forceColor || template.ui.label}
            children={children}
        />
    )
}

const stylesheet = createStyles(() => ({
    text: {
        fontSize: 14,
        lineHeight: 14,
        fontWeight: '300'
    },
}))
