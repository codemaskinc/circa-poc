enum Plan {
    OnePay = 'onepay',
    TwoPay = 'twopay',
    FourPay = 'fourpay',
    OnePayDeferred = 'onepaydeferred'
}

type Payment = {
    leaseId: number,
    paymentId: number,
    arrearsPaymentId: number,
    bankAccountId: number,
    globalPaymentId: number,
    isLatePayment: boolean,
    plan: Plan,
    paymentDate: string,
    amount: number,
    daysToActForFailedPayment: number,
    contractPaymentId: number
}

type AdditionalDetails = {
    defaultPaymentDateForDisplay: string,
    defaultPaymentPlanForDisplay: string,
    plan: Plan,
    bankAccountId: number,
    bankAccountName: string,
    globalPaymentId: number,
    isReschedulePayment: boolean,
    isLastMinuteChange: boolean,
    isLastPayment: boolean,
    daysForNextPayment: number,
    daysForNextPaymentText: string,
    amountForNextPayment: number,
    paymentId: number,
    arrearsPaymentId: number,
    failedPayments: Array<Payment>,
    upcomingPayments: Array<Payment>
}

export type Lease = {
    leaseId: number,
    unitDisplayName: string,
    unitPrimaryDisplayName: string,
    additionalDetails: AdditionalDetails
}
