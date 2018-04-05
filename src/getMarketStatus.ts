import { getAllCryptoValues, CMCCurrencySnapshot } from 'get-crypto-fiat-values'

export default async () => {
    const aResult: CMCCurrencySnapshot[] = await getAllCryptoValues()

    let one_hour: number = 0
    let one_day: number = 0
    let one_week: number = 0

    aResult.forEach((cmcCurrency: CMCCurrencySnapshot) => {
        one_hour += (cmcCurrency.percent_change_1h < 0) ? 1: -1
        one_day += (cmcCurrency.percent_change_24h < 0) ? 1: -1
        one_week += (cmcCurrency.percent_change_7d < 0) ? 1: -1
    })

    console.log('one hour: ', one_hour)
    console.log('one day: ', one_day)
    console.log('one week: ', one_week)
    
    return {
        GREEN_OR_RED: {
            ONE_HOUR: (one_hour < 0) ? 'RED' : 'GREEN'
        }
    }
}