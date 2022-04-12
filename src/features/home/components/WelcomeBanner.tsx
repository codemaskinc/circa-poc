import React  from 'react'
import { View } from 'react-native'
import Animated from 'react-native-reanimated'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { useStyles, useTranslations } from 'lib/hooks'
import { createStyles } from 'lib/styles'
import { Button, Grid, Touchable, Typography } from 'lib/components'
import { VoidFunction } from 'lib/types'
import { Icons } from 'assets'
import { useWelcomeBannerAnimation } from '../hooks'

type WelcomeBannerProps = {
    isVisible: boolean,
    onClose: VoidFunction
}

export const WelcomeBanner: React.FunctionComponent<WelcomeBannerProps> = ({
    isVisible,
    onClose
}) => {
    const T = useTranslations()
    const { top } = useSafeAreaInsets()
    const { styles, template } = useStyles(stylesheet)
    const { animatedContainerStyles, startAnimation, animatedHeight } = useWelcomeBannerAnimation({
        onFinishedAnimation: onClose,
        paddingTop: template.gap(2) + top
    })

    return isVisible ? (
        <Animated.View
            style={[
                styles.container(top),
                animatedContainerStyles
            ]}
            onLayout={({ nativeEvent }) => {
                if (!animatedHeight.value) {
                    animatedHeight.value = nativeEvent.layout.height
                }
            }}
        >
            <View style={styles.header}>
                <Typography.Heading forceColor={template.ui.white}>
                    {T.components.welcomeBanner.title}
                </Typography.Heading>
                <Touchable onPress={startAnimation}>
                    <Icons.Close
                        size={24}
                        forceColor={template.ui.white}
                    />
                </Touchable>
            </View>
            <Grid.Gap
                gapTop={2}
                gapBottom={3}
            >
                <Typography.Subheading forceColor={template.ui.white}>
                    {T.components.welcomeBanner.subtitle}
                </Typography.Subheading>
            </Grid.Gap>
            <Grid.Gap
                gapBottom={3}
                gapLeft={2}
            >
                <Button
                    width={106}
                    onPress={() => {}}
                    forceColor={template.ui.white}
                    label={T.components.welcomeBanner.cta}
                />
            </Grid.Gap>
        </Animated.View>
    ) : null
}

const stylesheet = createStyles(template => ({
    container: (top: number) => ({
        paddingRight: template.gap(3),
        paddingLeft: template.gap(2),
        paddingTop: top + template.gap(2),
        backgroundColor: template.ui.accent
    }),
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    }
}))
