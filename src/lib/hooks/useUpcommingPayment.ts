import { Plan } from '../models'

export const useUpcommingPayment = (plan: Plan) => {
    switch (plan) {
        case Plan.OnePay:
        case Plan.OnePayDeferred:
            return '1'
        case Plan.TwoPay:
            return '2'
        case Plan.FourPay:
            return '4'
        default:
            return ''
    }
}
