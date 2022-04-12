import React from 'react'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { View } from 'react-native'
import { useStyles } from '../hooks'
import { createStyles } from '../styles'
import { platform } from '../common'

type SafeAreaBottomSpacerProps = {
    forceAndroidHeight?: number,
    forceIOSHeight?: number,
    backgroundColor?: string
}

export const SafeAreaBottomSpacer: React.FunctionComponent<SafeAreaBottomSpacerProps> = ({
    forceIOSHeight,
    forceAndroidHeight,
    backgroundColor
}) => {
    const { styles } = useStyles(stylesheet)
    const insets = useSafeAreaInsets()

    if (platform.isAndroid) {
        return (
            <View style={styles.container(forceAndroidHeight || insets.bottom, backgroundColor)}/>
        )
    }

    return (
        <View style={styles.container(forceIOSHeight || insets.bottom, backgroundColor)}/>
    )
}

const stylesheet = createStyles(template => ({
    container: (height: number, backgroundColor: string = template.ui.transparent) => ({
        height,
        backgroundColor,
    })
}))
