import { storageService } from "./storage.service"

export const bitcoinService = {
    getRate,
    getMarketPrice,
    getConfirmedTransactions,
}

async function getRate(coins) {
    const url = `https://blockchain.info/tobtc?currency=USD&value=${coins}`
    try {
        const res = await fetch(url, {
            headers: new Headers({
                accept: 'application/json',
        }),
    })
        return res.json()
    } catch (err) {
        console.log('err', err)
    }
}

async function getMarketPrice() {
    const url = `https://api.blockchain.info/charts/market-price?timespan=5months&format=json&cors=true`
    try {
        const resFromStorage = storageService.load('market-price')
        if (!resFromStorage) {
            const res = await fetch(url, {
                headers: new Headers({
                    accept: 'application/json',
                }),
            })
            const result = await res.json()
            storageService.store('market-price', result)
            return result
        }
        return resFromStorage
    } catch (err) {
        console.log('err', err)
    }
}

async function getConfirmedTransactions() {
    const url = `https://api.blockchain.info/charts/trade-volume?timespan=5months&format=json&cors=true`
    try {
        const resFromStorage = storageService.load('trade-volume')
        if (!resFromStorage) {
            const res = await fetch(url, {
                headers: new Headers({
                    accept: 'application/json',
                }),
            })
            const result = await res.json()
            storageService.store('trade-volume', result)
            return result
        }
        return resFromStorage
    } catch (err) {
        console.log('err', err)
    }
}
