import React from 'react'
import { ViewProps, View, ViewStyle } from 'react-native'
import { useStyles } from 'lib/hooks'
import { createStyles } from 'lib/styles'

interface BackgroundProps extends ViewProps {
    style?: ViewStyle
}

export const Background: React.FunctionComponent<BackgroundProps> = ({
    children,
    style = {},
    ...props
}) => {
    const { styles } = useStyles(stylesheet)

    return (
        <View
            {...props}
            children={children}
            style={{
                ...styles.container,
                ...style
            }}
        />
    )
}

const stylesheet = createStyles(template => ({
    container: {
        flex: 1,
        backgroundColor: template.ui.background
    }
}))
