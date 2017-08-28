import React from 'react';

import SportItemRow from './SportItemRow';

class CategoryWiseTable extends React.Component {

//  {category: "Sporting Goods", price: "$49.99", stocked: true, name: "Football"},

    render() {
        const itemsList = this.props.items.map(item => (
            <SportItemRow key={item.name} item={item}/>
        ));

        return (
            <table>
                <thead>
                    <tr><th>{this.props.category}</th><th></th></tr>
                </thead>
                <tbody>{itemsList}</tbody>
            </table>
        );
    }
}

export default CategoryWiseTable;