import React from 'react'
import { Image, View } from 'react-native'
import { useStyles, useTranslations } from 'lib/hooks'
import { createStyles } from 'lib/styles'
import { Button, Typography } from 'lib/components'
import { PropertyManager } from 'lib/models'

type PropertyManagerCardProps = {
    propertyManager: PropertyManager
}

export const PropertyManagerCard: React.FunctionComponent<PropertyManagerCardProps> = ({
    propertyManager
}) => {
    const T = useTranslations()
    const { styles } = useStyles(stylesheet)

    return (
        <View style={styles.container}>
            <View style={styles.row}>
                <Image
                    style={styles.avatar}
                    source={{ uri: propertyManager.avatarUrl }}
                />
                <View style={styles.managerDetails}>
                    <Typography.Subheading>
                        {propertyManager.name}
                    </Typography.Subheading>
                    <Typography.Regular>
                        One Riverside
                    </Typography.Regular>
                </View>
            </View>
            <View style={styles.footer}>
                <Button
                    width={61}
                    onPress={() => {}}
                    style={styles.callButton}
                    label={T.components.propertyManagerCard.cta.call}
                />
                <Button
                    width={74}
                    onPress={() => {}}
                    label={T.components.propertyManagerCard.cta.email}
                />
            </View>
        </View>
    )
}

const stylesheet = createStyles(template => ({
    container: {
        height: 112,
        paddingTop: template.gap(2),
        paddingHorizontal: template.gap(2)
    },
    footer: {
        flexDirection: 'row',
        marginTop: template.gap(2),
        marginLeft: template.gap(7)
    },
    row: {
        flexDirection: 'row'
    },
    avatar: {
        width: 40,
        height: 40,
        borderRadius: 20
    },
    managerDetails: {
        marginLeft: template.gap(2)
    },
    callButton: {
        marginRight: template.gap(3)
    }
}))
