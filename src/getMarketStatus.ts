import { getAllCryptoValues, CMCCurrencySnapshot } from 'get-crypto-fiat-values'

export default async () => {
    const aResult: CMCCurrencySnapshot[] | null = await getAllCryptoValues()

    let one_hour: number = 0
    let one_day: number = 0
    let one_week: number = 0

    if (aResult) {
        aResult.forEach((cmcCurrency: CMCCurrencySnapshot) => {
            one_hour += (cmcCurrency.percent_change_1h < 0) ? 1: -1
            one_day += (cmcCurrency.percent_change_24h < 0) ? 1: -1
            one_week += (cmcCurrency.percent_change_7d < 0) ? 1: -1
        })
    }
    
    return {
        GREEN_OR_RED: {
            ONE_HOUR: (one_hour < 0) ? 'RED' : 'GREEN',
            ONE_DAY: (one_day < 0) ? 'RED' : 'GREEN',
            ONE_WEEK: (one_week < 0) ? 'RED' : 'GREEN'
        }
    }
}