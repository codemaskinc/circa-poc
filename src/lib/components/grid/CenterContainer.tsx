import React from 'react'
import { ViewProps, View, ViewStyle } from 'react-native'
import { useStyles } from 'lib/hooks'
import { createStyles } from 'lib/styles'

interface CenterContainerProps extends ViewProps {
    style?: ViewStyle
}

export const CenterContainer: React.FunctionComponent<CenterContainerProps> = ({
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

const stylesheet = createStyles(() => ({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
}))
