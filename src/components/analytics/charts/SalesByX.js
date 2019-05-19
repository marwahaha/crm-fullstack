import React, { Component, PureComponent } from 'react';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
// import '../../style/SalesByCountryChart.css';


class SalesByCountryChart extends Component {
    constructor() {
        super()
        this.state = {
            select: "country"
        }
    }



    generateData = (key) => {
        
    }



    render() {
        // let data = this.generateData(this.state.select)

        return (
            <div id="salesByCountryChart">
            </div>
        );
    }
}

export default SalesByCountryChart;