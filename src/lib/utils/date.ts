import { format, fromUnixTime, parseISO } from 'date-fns'

type AnyDate = Date | number | string

const toDateFnsDate = (date: AnyDate) => {
    const formattedDate = typeof date === 'string'
        ? parseISO(date as string)
        : fromUnixTime(date as number)

    return formattedDate as Date
}

export const toPaymentDate = (date: string) => format(toDateFnsDate(date), 'MMM d')
