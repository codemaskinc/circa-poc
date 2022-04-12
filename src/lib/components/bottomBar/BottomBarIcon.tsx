import React from 'react'
import { VoidFunction } from 'lib/types'
import { createStyles } from 'lib/styles'
import { useStyles } from 'lib/hooks'
import { Touchable } from 'lib/components'

type BottomBarIconProps = {
    onPress: VoidFunction,
    icon: JSX.Element,
    label: string,
    isActive: boolean,
    badge?: string
}

export const BottomBarIcon: React.FunctionComponent<BottomBarIconProps> = ({
    icon,
    onPress,
    isActive
}) => {
    const { styles } = useStyles(stylesheet)

    return (
        <Touchable
            onPress={onPress}
            style={styles.container(isActive)}
        >
            {icon}
        </Touchable>
    )
}

const stylesheet = createStyles(template => ({
    container: (isActive: boolean) => ({
        flexDirection: 'column',
        alignItems: 'center',
        width: 44,
        height: 44,
        borderRadius: 22,
        justifyContent: 'center',
        backgroundColor: isActive
            ? template.ui.primary
            : template.ui.white
    })
}))
