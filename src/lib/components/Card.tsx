import React from 'react'
import { useStyles } from 'lib/hooks'
import { createStyles } from 'lib/styles'
import { VoidFunction } from '../types'
import { Touchable } from './Touchable'

type CardProps = {
    onPress?: VoidFunction
}

export const Card: React.FunctionComponent<CardProps> = ({
    children,
    onPress
}) => {
    const { styles } = useStyles(stylesheet)

    return (
        <Touchable
            onPress={onPress}
            style={styles.container}
            activeOpacity={1}
        >
            {children}
        </Touchable>
    )
}

const stylesheet = createStyles(template => ({
    container: {
        borderRadius: template.gap(2),
        backgroundColor: template.ui.white,
        ...template.ui.createShadow(4, 8)
    }
}))
