import React, { Component } from 'react';

class HottestCountryBadge extends Component {

    getHottestCountry = (clients) => {
        let countries = {}
        clients.forEach(c => {
            if (countries[c.country] >= 0) {
                countries[c.country]++
            } else {
                countries[c.country] = 0
            }
        })
        let max = 0
        let hottestCountry = ""
        Object.keys(countries).map(c => {
            if (countries[c] > max) {
                max = countries[c]
                hottestCountry = c
            }
        })
        return hottestCountry
    }

    render() {

        let hottestCountry = this.getHottestCountry(this.props.clientsData)

        return (
            <div id="badge">
            <span id="logoHottest" className="fas fa-globe-americas"></span>
            <span id="value">{hottestCountry}</span>
            <span id="text">Hottest Country</span>
        </div>
        );
    }
}


export default HottestCountryBadge;