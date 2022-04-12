import React from 'react'
import { View } from 'react-native'
import { useStyles } from 'lib/hooks'
import { createStyles } from 'lib/styles'
import { VoidFunction } from 'lib/types'
import { Touchable, Typography } from 'lib/components'
import { Icons } from 'assets'

type CommunityCardProps = {
    title: string,
    subtitle: string,
    onPress?: VoidFunction,
    renderIcon(): React.ReactNode
}

export const CommunityCard: React.FunctionComponent<CommunityCardProps> = ({
    title,
    subtitle,
    onPress,
    renderIcon
}) => {
    const { styles, template } = useStyles(stylesheet)

    return (
        <Touchable
            style={styles.container}
            onPress={onPress}
        >
            <View style={styles.row}>
                {renderIcon()}
                <View style={styles.cardBody}>
                    <Typography.Subheading style={styles.title}>
                        {title}
                    </Typography.Subheading>
                    <Typography.Regular>
                        {subtitle}
                    </Typography.Regular>
                </View>
                <Icons.ArrowRight
                    size={18}
                    forceColor={template.ui.label}
                />
            </View>
        </Touchable>
    )
}

const stylesheet = createStyles(template => ({
    container: {
        height: 112,
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: template.gap(2)
    },
    row: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    cardBody: {
        flex: 1,
        marginHorizontal: template.gap(1)
    },
    title: {
        fontWeight: '500',
        marginBottom: template.gap(1)
    }
}))
