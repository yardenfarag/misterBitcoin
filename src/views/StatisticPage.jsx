import { Component } from 'react'
import { bitcoinService } from '../services/bitcoin.service'
// import { Sparklines, SparklinesLine } from 'react-sparklines'
import { Chart } from '../cmps/Chart'

export class StatisticPage extends Component {

    state = {
        marketPrice: null,
        transactions: null,
    }

    componentDidMount() {
        this.loadData()
    }

    pricePerDay() {
        return this.state.marketPrice.values.map(c => c.y)
    }

    confirmedTransactions() {
        return this.state.transactions.values.map(c => c.y)
    }

    loadData = async () => {
        try {
            const marketPrice = await bitcoinService.getMarketPrice()
            const transactions = await bitcoinService.getConfirmedTransactions()
            this.setState({ marketPrice, transactions })
        } catch (err) {
            console.log(err)
        }
    }

    render() {
        const { marketPrice, transactions } = this.state
        if (!marketPrice || !transactions) return <div>Loading...</div>
        return (
            <section className="statistic">
                <h1>Market Price (USD)</h1>
                <Chart data={this.pricePerDay()} color='blue' />
                <h1>Transactions Per Day</h1>
                <Chart data={this.confirmedTransactions()} color='purple' />
            </section>
        )
    }
}
