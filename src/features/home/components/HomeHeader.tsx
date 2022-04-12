import React, { useMemo } from 'react'
import { View } from 'react-native'
import { useCurrency, useStyles, useTranslations } from 'lib/hooks'
import { createStyles } from 'lib/styles'
import { Button, Dropdown, Grid, Touchable, Typography } from 'lib/components'
import { Measurements } from 'lib/common'
import { Lease } from 'lib/models'
import { Icons } from 'assets'
import { PaymentsHorizontalList } from './PaymentsHorizontalList'

type HomeHeaderProps = {
    selectedLease: Lease,
    currentLeases: Array<Lease>,
    setSelectedLease(key: number): void
}

export const HomeHeader: React.FunctionComponent<HomeHeaderProps> = ({
    currentLeases,
    selectedLease,
    setSelectedLease
}) => {
    const T = useTranslations()
    const { formatCurrency } = useCurrency()
    const { styles, template } = useStyles(stylesheet)
    const options = useMemo(() => currentLeases
        .map(lease => ({
            key: lease.leaseId,
            label: lease.unitPrimaryDisplayName
                ? `${lease.unitDisplayName} #${lease.unitPrimaryDisplayName}`
                : lease.unitDisplayName
        })), [currentLeases])
    const dueIn = selectedLease.additionalDetails.daysForNextPayment

    return (
        <Grid.Gap style={styles.header}>
            <Grid.Gap
                gapBottom={4}
                style={styles.row}
            >
                <View style={styles.actionLeft} />
                <View style={styles.mainAction}>
                    <Dropdown
                        options={options}
                        selectedOptionKey={selectedLease.leaseId}
                        onSelect={setSelectedLease}
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
                    {`${formatCurrency(selectedLease.additionalDetails.amountForNextPayment)} ${T.common.dueIn}`}
                </Typography.Subheading>
                <Grid.Gap
                    gapTop={1}
                    style={styles.daysLeftContainer}
                >
                    <Typography.Display forceColor={template.ui.white}>
                        {`${selectedLease.additionalDetails.daysForNextPayment} ${dueIn === 1 ? T.common.day : T.common.days}`}
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
                <PaymentsHorizontalList payments={selectedLease.upcomingPayments} />
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
