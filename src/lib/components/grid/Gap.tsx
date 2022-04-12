import React from 'react'
import { View, ViewProps, ViewStyle } from 'react-native'
import { useStyles } from 'lib/hooks'

interface GapProps extends ViewProps {
    gapTop?: number,
    gapBottom?: number,
    gapLeft?: number,
    gapRight?: number,
    style?: ViewStyle
}

export const Gap: React.FunctionComponent<GapProps> = ({
    gapTop,
    gapBottom,
    gapLeft,
    gapRight,
    style,
    children,
    ...props
}) => {
    const { template } = useStyles()

    return (
        <View
            {...props}
            style={{
                marginTop: gapTop ? template.gap(gapTop) : undefined,
                marginBottom: gapBottom ? template.gap(gapBottom) : undefined,
                marginLeft: gapLeft ? template.gap(gapLeft) : undefined,
                marginRight: gapRight ? template.gap(gapRight) : undefined,
                ...style
            }}
            children={children}
        />
    )
}
