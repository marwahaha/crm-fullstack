import React, { Component } from 'react';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import "../../../css/salesByX.css"

class SalesByX extends Component {
    constructor() {
        super()
        this.state = {
            selectedCountry: "country"
        }
    }

    changeValue = event => this.setState({ [event.target.name]: event.target.value })
    getFullMonth = (date = new Date()) => new Intl.DateTimeFormat('en-US', { month: "long" }).format(date).slice(0, 3)

    getDataSet = (selection) => {
        let AllData = new Set()
        selection == "month" ?
            this.props.clientsData.forEach(c => AllData.add(this.getFullMonth(new Date(c.firstContact)))) :
            this.props.clientsData.forEach(c => c[selection] ? AllData.add(c[selection]) : null)
        return Array.from(AllData)
    }

    generateData = (selection) => {
        let AllData = this.getDataSet(selection)
        let dataArray = []
        AllData.forEach(d => dataArray.push({ name: d, sales: 0 }))
        for (let c of this.props.clientsData) {
            for (let i in dataArray) {
                if (dataArray[i].name === c[selection]) {
                    dataArray[i].sales++
                } else if (dataArray[i].name === this.getFullMonth(new Date(c.firstContact))) {
                    dataArray[i].sales++
                }
            }
        }
        return dataArray
    }


    render() {
        let data = this.generateData(this.state.selectedCountry)

        return (
            <div id="salesByCountryChart">
                <div className="title">Sales By
                    <select name="select" id="" onChange={this.changeValue}>
                        <option value="country">Country</option>
                        <option value="owner">Owner</option>
                        <option value="emailType">Email Type</option>
                        <option value="month">Month</option>
                    </select>
                </div>
                <ResponsiveContainer width="100%" height="90%">

                    <BarChart
                        data={data}
                        margin={{
                            top: 5, right: 30, left: 20, bottom: 5,
                        }}
                    >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="name" />
                        <YAxis dataKey="sales" />
                        <Tooltip />
                        <Legend />
                        <Bar dataKey="sales" fill="green" />
                    </BarChart>
                </ResponsiveContainer>
            </div>
        );
    }
}

export default SalesByX;