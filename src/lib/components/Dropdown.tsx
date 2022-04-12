import React, { useMemo, useState } from 'react'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { Modal, StyleSheet, View } from 'react-native'
import Animated, {
    measure,
    useAnimatedReaction,
    useAnimatedRef,
    useAnimatedStyle,
    useSharedValue,
    withTiming
} from 'react-native-reanimated'
import { useStyles } from 'lib/hooks'
import { createStyles } from 'lib/styles'
import { Touchable, Typography } from 'lib/components'
import { Icons } from 'assets'

type DropdownOption = {
    label: string,
    key: number
}

type DropdownProps = {
    defaultOption?: string,
    options: Array<DropdownOption>,
    selectedOptionKey?: number,
    onSelect(key: number): void
}

export const Dropdown: React.FunctionComponent<DropdownProps> = ({
    selectedOptionKey,
    options,
    onSelect,
    defaultOption = ''
}) => {
    const aref = useAnimatedRef<View>()
    const animatedDropdownPosition = useSharedValue({
        y: 0,
        width: 0
    })
    const [isModalVisible, setModalVisibility] = useState<boolean>(false)
    const { styles, template } = useStyles(stylesheet)
    const animatedBorderOpacity = useSharedValue(0)
    const animatedDropdownOpacity = useSharedValue(0)
    const animatedDropdownTranslateY = useSharedValue(0)
    const animatedBorderColor = useSharedValue(template.ui.primary)
    const animatedBackgroundStyles = useAnimatedStyle(() => ({
        borderColor: animatedBorderColor.value
    }))
    const animatedDropdownStyles = useAnimatedStyle(() => ({
        top: animatedDropdownPosition.value.y + animatedDropdownTranslateY.value,
        minWidth: animatedDropdownPosition.value.width,
        opacity: animatedDropdownOpacity.value
    }))
    const onCloseAnimation = () => {
        setModalVisibility(false)
        animatedBorderColor.value = template.ui.primary
        animatedBorderOpacity.value = withTiming(0)
        animatedDropdownOpacity.value = 0
        animatedDropdownTranslateY.value = 10
    }

    useAnimatedReaction(
        () => animatedBorderOpacity,
        () => {
            const measured = measure(aref)

            if (measured) {
                animatedDropdownPosition.value = {
                    // add extra spacing below the dropdown
                    y: measured.pageY + 40,
                    width: measured.width
                }
            }
        }
    )
    const selectedOptionLabel = useMemo(() => {
        if (!selectedOptionKey) {
            return defaultOption
        }

        const targetOption = options.find(option => option.key === selectedOptionKey)

        return targetOption
            ? targetOption.label
            : defaultOption
    }, [options, selectedOptionKey, defaultOption])

    return (
        // @ts-ignore
        <Animated.View ref={aref}>
            <TouchableOpacity
                activeOpacity={1}
                onPress={() => {
                    setModalVisibility(true)
                    animatedBorderColor.value = template.ui.white
                    animatedBorderOpacity.value = withTiming(1)
                    animatedDropdownOpacity.value = withTiming(1)
                    animatedDropdownTranslateY.value = withTiming(0)
                }}
            >
                <Animated.View
                    style={[
                        styles.background,
                        animatedBackgroundStyles
                    ]}
                >
                    <Typography.Subheading
                        style={styles.label}
                        forceColor={template.ui.white}
                    >
                        {selectedOptionLabel}
                    </Typography.Subheading>
                    <View style={styles.iconContainer}>
                        <Icons.ArrowDown
                            size={22}
                            forceColor={template.ui.white}
                        />
                    </View>
                </Animated.View>
                <Modal
                    transparent
                    visible={isModalVisible}
                    onRequestClose={() => setModalVisibility(false)}
                >
                    <Touchable
                        activeOpacity={1}
                        style={StyleSheet.absoluteFillObject}
                        onPress={() => onCloseAnimation()}
                    >
                        <Animated.View
                            style={[
                                styles.dropdown,
                                animatedDropdownStyles
                            ]}
                        >
                            {options.map((option, index) => (
                                <Touchable
                                    key={option.key}
                                    style={styles.option(index === 0)}
                                    onPress={() => {
                                        onSelect(option.key)
                                        onCloseAnimation()
                                    }}
                                >
                                    <Typography.Subheading>
                                        {option.label}
                                    </Typography.Subheading>
                                </Touchable>
                            ))}
                        </Animated.View>
                    </Touchable>
                </Modal>
            </TouchableOpacity>
        </Animated.View>
    )
}

const stylesheet = createStyles(template => ({
    label: {
        marginRight: template.gap(1)
    },
    background: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: template.button.borderWidth,
        borderColor: template.button.borderColor,
        borderRadius: template.button.borderRadius,
        paddingHorizontal: template.gap(2)
    },
    dropdown: {
        position: 'absolute',
        borderRadius: template.gap(2),
        alignSelf: 'center',
        backgroundColor: template.ui.background,
        ...template.ui.createShadow()
    },
    iconContainer: {
        marginTop: template.gap(0.5)
    },
    option: (isFirst: boolean) => ({
        height: 50,
        justifyContent: 'center',
        paddingVertical: template.gap(1),
        paddingHorizontal: template.gap(2),
        borderTopWidth: isFirst ? 0 : 1,
        borderTopColor: template.ui.spacer
    })
}))
