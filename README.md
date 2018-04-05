# crypto market status

Looks at the current crypto market and deduces highlevel signals.

Returns a structure containing indicators:

```
{
    GREEN_OR_RED: 'GREEN',
    ...
}
```

## install

`yarn add crypto-market-status`

## use

```
import getMarketStatus from 'getMarketStatus'

main async () {
    const mStatus = getMarketStatus()
    console.log(mStatus.GREEN_OR_RED.ONE_WEEK)
}

main()
```

prints `GREEN`

## todo

- add table to readme containing indicators with description and possible return types
- spoof currency package