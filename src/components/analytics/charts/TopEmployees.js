import React, { Component } from 'react'
import { ComposedChart, ResponsiveContainer, CartesianAxis, BarChart, CartesianGrid, XAxis, YAxis, Tooltip, Legend, Bar } from 'recharts'

class TopEmployees extends Component {

    createOwnerClientObj = clients => {
        let employeeSales = {}

        clients.forEach(c => {
            if (c.sold) {
                employeeSales[c.owner] ? employeeSales[c.owner]++ : employeeSales[c.owner] = 1
            }
        })

        return employeeSales
    }

    countOccurrences = (arr, val) => arr.reduce((a, v) => (v === val ? a + 1 : a), 0);


    createDataArray = (employeeSales) => {
        let dataArr = []
        let employees = Object.keys(employeeSales)

        employees.forEach(e => {
            dataArr.push({name: e, sales: employeeSales[e]})
        })

        return dataArr
    }

    generateTopEmployees = clients => {
        let numOfEmployees = 3
        let employeeSales = this.createOwnerClientObj(clients)
        
        let dataForChart = this.createDataArray(employeeSales)
        
        dataForChart = dataForChart.sort((a, b) =>  a.sales - b.sales)
        dataForChart.splice(0, dataForChart.length - numOfEmployees)

        return dataForChart
    }

    render() {

        let dataForChart = this.generateTopEmployees(this.props.clientsData)

        return (
            <div id="topEmployees" className="chart">
            <h5>Top Employees</h5>
                <ComposedChart
                    layout="vertical"
                    width={520}
                    height={320}
                    data={dataForChart}
                    margin={{
                        top: 20, right: 20, bottom: 20, left: 20,
                    }}
                >

                    <XAxis type="number" />
                    <YAxis reversed={true} dataKey="name" type="category" />
                    <Tooltip />
                    <Legend />

                    <Bar dataKey="sales" barSize={25} fill="#003f5c" />

                </ComposedChart>
            </div>
        )
    }
}

export default TopEmployees