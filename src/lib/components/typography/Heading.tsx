import React from 'react'
import { TextStyle } from 'react-native'
import { VoidFunction } from 'lib/types'
import { useStyles } from 'lib/hooks'
import { createStyles } from 'lib/styles'
import { ThemedText } from './ThemedText'

type HeadingProps = {
    numberOfLines?: number,
    onPress?: VoidFunction,
    style?: TextStyle,
    forceColor?: string
}

export const Heading: React.FunctionComponent<HeadingProps> = ({
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
        fontSize: 20,
        lineHeight: 24,
        fontWeight: '700'
    },
}))
