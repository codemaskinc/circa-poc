import React from 'react'
import { useStyles, useTranslations } from 'lib/hooks'
import { createStyles } from 'lib/styles'
import { Touchable, Typography } from 'lib/components'
import { VoidFunction } from 'lib/types'
import { Icons } from 'assets'

type SeeAllProps = {
    onPress?: VoidFunction
}

export const SeeAll: React.FunctionComponent<SeeAllProps> = ({ onPress }) => {
    const T = useTranslations()
    const { styles } = useStyles(stylesheet)

    return (
        <Touchable
            style={styles.tile}
            onPress={onPress}
        >
            <Typography.Subheading style={styles.seeAll}>
                {T.common.seeAll}
            </Typography.Subheading>
            <Icons.ArrowHeadRight size={20} />
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
        justifyContent: 'space-between',
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: template.gap(2),
        ...template.ui.createShadow(16)
    },
    seeAll: {
        fontWeight: '500'
    }
}))
