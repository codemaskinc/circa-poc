import React from 'react'
import { ActivityIndicator, Image, StyleSheet, View } from 'react-native'
import { useStyles } from 'lib/hooks'
import { createStyles } from 'lib/styles'
import { Images } from 'assets'
import * as Grid from './grid'

export const FullScreenLoader: React.FunctionComponent = () => {
    const { styles, template } = useStyles(stylesheet)

    return (
        <View style={styles.container}>
            <Image
                source={Images.CircaLogo}
                style={styles.logo}
            />
            <Grid.Gap gapTop={2}>
                <ActivityIndicator color={template.ui.primary} />
            </Grid.Gap>
        </View>
    )
}

const stylesheet = createStyles(() => ({
    container: {
        ...StyleSheet.absoluteFillObject,
        justifyContent: 'center',
        alignItems: 'center'
    },
    logo: {
        width: 162,
        height: 56,
        resizeMode: 'contain'
    }
}))
