import React from 'react'
import { View } from 'react-native'
import { useStyles } from 'lib/hooks'
import { createStyles } from 'lib/styles'
import { VoidFunction } from 'lib/types'
import { Payment } from 'lib/models'
import { Touchable, Typography } from 'lib/components'

interface PaymentTileProps extends Payment {
    index: number,
    onPress: VoidFunction
}

export const PaymentTile: React.FunctionComponent<PaymentTileProps> = ({
    index,
    amount,
    onPress
}) => {
    const { styles, template } = useStyles(stylesheet)

    return (
        <Touchable
            onPress={onPress}
            style={styles.tile}
            activeOpacity={1}
        >
            <View style={styles.row}>
                <View style={styles.indexBadge}>
                    <View style={styles.circle}>
                        <Typography.Regular
                            style={styles.index}
                            forceColor={template.ui.black}
                        >
                            {index + 1}
                        </Typography.Regular>
                    </View>
                </View>
                <View style={styles.details}>
                    <Typography.Regular>
                        ${amount}
                    </Typography.Regular>
                    <Typography.Subheading style={styles.date}>
                        Nov 1
                    </Typography.Subheading>
                </View>
            </View>
        </Touchable>
    )
}

const stylesheet = createStyles(template => ({
    tile: {
        height: 64,
        width: 140,
        borderRadius: template.gap(1.5),
        backgroundColor: template.ui.white,
        marginRight: template.gap(2),
        justifyContent: 'center',
        paddingHorizontal: template.gap(2),
        ...template.ui.createShadow(16)
    },
    row: {
        flexDirection: 'row'
    },
    indexBadge: {
        height: 32,
        width: 32,
        backgroundColor: template.ui.secondary,
        borderRadius: template.gap(1),
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: template.gap(1)
    },
    circle: {
        width: 20,
        height: 20,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: template.ui.primary,
        justifyContent: 'center',
        alignItems: 'center'
    },
    date: {
        fontWeight: '500'
    },
    index: {
        fontSize: 14,
        lineHeight: 16,
        fontWeight: '500'
    },
    details: {
        justifyContent: 'center'
    }
}))
