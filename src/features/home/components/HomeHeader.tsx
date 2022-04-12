import React from 'react'
import { View } from 'react-native'
import { useStyles, useTranslations } from 'lib/hooks'
import { createStyles } from 'lib/styles'
import { Button, Dropdown, Grid, Touchable, Typography } from 'lib/components'
import { Measurements } from 'lib/common'
import { Icons } from 'assets'
import { PaymentsHorizontalList } from './PaymentsHorizontalList'

type HomeHeaderProps = {
    selectedAddressKey?: string,
    setSelectedAddressKey(key: string): void
}

export const HomeHeader: React.FunctionComponent<HomeHeaderProps> = ({
    selectedAddressKey,
    setSelectedAddressKey
}) => {
    const T = useTranslations()
    const { styles, template } = useStyles(stylesheet)
    const addresses = [
        {
            key: '1',
            label: 'Option 1'
        },
        {
            key: '2',
            label: 'Option 2'
        }
    ]

    return (
        <Grid.Gap style={styles.header}>
            <Grid.Gap
                gapBottom={4}
                style={styles.row}
            >
                <View style={styles.actionLeft} />
                <View style={styles.mainAction}>
                    <Dropdown
                        options={addresses}
                        selectedOptionKey={selectedAddressKey}
                        onSelect={setSelectedAddressKey}
                        defaultOption={T.components.homeHeader.dropdown.defaultOption}
                    />
                </View>
                <Touchable style={styles.actionRight}>
                    <Icons.Bell
                        size={30}
                        forceColor={template.ui.white}
                    />
                </Touchable>
            </Grid.Gap>
            <Grid.Gap
                gapBottom={10}
                style={styles.dueInContainer}
            >
                <Typography.Subheading forceColor={template.ui.white}>
                    $1000 {T.common.dueIn}
                </Typography.Subheading>
                <Grid.Gap
                    gapTop={1}
                    style={styles.daysLeftContainer}
                >
                    <Typography.Display forceColor={template.ui.white}>
                        16 {T.common.days}
                    </Typography.Display>
                    <Button
                        width={78}
                        onPress={() => {}}
                        forceColor={template.ui.white}
                        label={T.components.homeHeader.cta}
                    />
                </Grid.Gap>
            </Grid.Gap>
            <View style={styles.paymentListContainer}>
                <PaymentsHorizontalList
                    payments={Array.from(new Array(6)).map((item, index) => ({
                        amount: 1000,
                        paymentUUID: index.toString(),
                        payedAt: new Date(2022, index + 3, 1)
                    }))}
                />
            </View>
        </Grid.Gap>
    )
}

const stylesheet = createStyles(template => ({
    header: {
        zIndex: 2,
        paddingTop: Measurements.StatusBarHeight,
        backgroundColor: template.ui.primary
    },
    row: {
        flexDirection: 'row',
    },
    dueInContainer: {
        paddingHorizontal: template.gap(2)
    },
    daysLeftContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    actionLeft: {
        width: 60
    },
    actionRight: {
        width: 60,
        alignItems: 'flex-end',
        paddingRight: template.gap(3)
    },
    mainAction: {
        flex: 1,
        alignItems: 'center'
    },
    paymentListContainer: {
        position: 'absolute',
        bottom: -170
    }
}))
