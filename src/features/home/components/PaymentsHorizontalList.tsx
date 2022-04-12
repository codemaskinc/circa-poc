import React from 'react'
import { ScrollView } from 'react-native'
import { useStyles } from 'lib/hooks'
import { createStyles } from 'lib/styles'
import { Payment } from 'lib/models'
import { PaymentTile } from './PaymentTile'
import { VoidFunction } from 'lib/types'
import { SeeAll } from './SeeAll'

type PaymentsHorizontalListProps = {
    payments: Array<Payment>,
    onSeeAllPress?: VoidFunction
}

export const PaymentsHorizontalList: React.FunctionComponent<PaymentsHorizontalListProps> = ({
    payments,
    onSeeAllPress
}) => {
    const { styles, template } = useStyles(stylesheet)

    return payments.length > 0 ? (
        <ScrollView
            horizontal
            pagingEnabled
            decelerationRate="fast"
            showsHorizontalScrollIndicator={false}
            snapToInterval={140 + template.gap(2)}
            contentContainerStyle={styles.scrollViewContainer}
        >
            {payments.map((payment, index) => (
                <PaymentTile
                    index={index}
                    key={payment.paymentUUID}
                    onPress={() => {}}
                    {...payment}
                />
            ))}
            <SeeAll onPress={onSeeAllPress} />
        </ScrollView>
    ) : null
}

const stylesheet = createStyles(template => ({
    scrollViewContainer: {
        height: 200,
        paddingLeft: template.gap(2)
    }
}))
