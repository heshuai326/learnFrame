const ccxt = require('./ccxt')

let kraken    = new ccxt.kraken ()
let bitfinex  = new ccxt.bitfinex ({ verbose: true })
let huobi     = new ccxt.huobi ()

async function run() {
    console.log (kraken,    await kraken.loadMarkets ())
    console.log (bitfinex,  await bitfinex.loadMarkets  ())
    console.log (huobi,     await huobi.loadMarkets ())

    console.log (kraken,    await kraken.fetchOrderBook (kraken.symbols[0]))
    console.log (bitfinex,  await bitfinex.fetchTicker ('BTC/USD'))
    console.log (huobi,     await huobi.fetchTrades ('ETH/CNY'))
}
run()