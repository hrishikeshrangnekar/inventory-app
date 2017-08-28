import React, { Component } from 'react';

class SportItemRow extends Component {

//  {category: "Sporting Goods", price: "$49.99", stocked: true, name: "Football"},

    render() {
        const item = this.props.item;

        let stockColor = item.stocked ? null : "red";

        return (
        <tr>
            <td style={{color: stockColor}}>{item.name}</td>
            <td>{item.price}</td>
        </tr>)
    }
}

export default SportItemRow;