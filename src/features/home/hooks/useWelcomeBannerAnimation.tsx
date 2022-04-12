import { runOnJS, useAnimatedStyle, useSharedValue, withSpring, withTiming } from 'react-native-reanimated'
import { VoidFunction } from 'lib/types'

type WelcomeBannerAnimationConfig = {
    paddingTop: number,
    onFinishedAnimation: VoidFunction
}

export const useWelcomeBannerAnimation = (config: WelcomeBannerAnimationConfig) => {
    const animatedHeight = useSharedValue<number>(0)
    const animatedOpacity = useSharedValue<number>(1)
    const animatedPaddingTop = useSharedValue<number>(config.paddingTop)
    const animatedContainerStyles = useAnimatedStyle(() => ({
        height: animatedHeight.value || undefined,
        opacity: animatedOpacity.value,
        paddingTop: animatedPaddingTop.value
    }))

    return {
        animatedHeight,
        animatedContainerStyles,
        startAnimation: () => {
            animatedHeight.value = withSpring(
                0,
                {
                    overshootClamping: true
                },
                isFinished => {
                    if (isFinished) {
                        runOnJS(config.onFinishedAnimation)()
                    }
                }
            )
            animatedOpacity.value = withTiming(0)
            animatedPaddingTop.value = withSpring(
                0,
                {
                    overshootClamping: true
                }
            )
        }
    }
}
