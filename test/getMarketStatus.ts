import { expect } from 'chai'
import getMarketStatus from '../src/getMarketStatus'

// test green or red indicators
describe('getMarketStatus function test', () => {
    it('should return green or red status correctly', async () => {
        const mStatus = await getMarketStatus()
        
        expect(mStatus.GREEN_OR_RED.ONE_HOUR).to.exist
        expect(mStatus.GREEN_OR_RED.ONE_HOUR).to.be.a('string')
        expect(mStatus.GREEN_OR_RED.ONE_HOUR).to.equal('GREEN')
        
        expect(mStatus.GREEN_OR_RED.ONE_DAY).to.exist
        expect(mStatus.GREEN_OR_RED.ONE_DAY).to.be.a('string')
        expect(mStatus.GREEN_OR_RED.ONE_DAY).to.equal('GREEN')
        
        expect(mStatus.GREEN_OR_RED.ONE_WEEK).to.exist
        expect(mStatus.GREEN_OR_RED.ONE_WEEK).to.be.a('string')
        expect(mStatus.GREEN_OR_RED.ONE_WEEK).to.equal('GREEN')
    })
})