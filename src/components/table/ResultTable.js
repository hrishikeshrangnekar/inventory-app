import React from 'react';

import CategoryWiseTable from './CategoryWiseTable';

class ResultTable extends React.Component {
    render() {
        const searchKey = this.props.searchKey;

        let items = this.props.items;

        items = items.filter(item => {
            if (this.props.showOnlyStocked && !item.stocked) {
                return false;
            }

            return item.name.includes(searchKey);
        });

        const categoryWiseResults = {};

        for (let item of items) {
            if (!categoryWiseResults[item.category]) {
                categoryWiseResults[item.category] = [];
            }

            categoryWiseResults[item.category].push(item);
        };

        let results = [];

        for (let category in categoryWiseResults) {
            let items = categoryWiseResults[category];
            results.push(<CategoryWiseTable key={category} category={category} items={items}/>);
        }

        return (
            <div className="table-div">
            <table>
                <thead>
                    <tr><th>Name</th><th>Price</th></tr>
                </thead>
            </table>
            {results}
            </div>
        );
    }
}

export default ResultTable;