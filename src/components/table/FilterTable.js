import React from 'react';

import CategoryWiseTable from './CategoryWiseTable';
import SearchBar from './SearchBar';
import ResultTable from './ResultTable';

class FilterTable extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            searchKey: "",
            showOnlyStocked: false
        };

        this.handleSearchKeyEntered = this.handleSearchKeyEntered.bind(this);
        this.handleShowOnlyStockedChecked = this.handleShowOnlyStockedChecked.bind(this);
    }
//  {category: "Sporting Goods", price: "$49.99", stocked: true, name: "Football"},

    render() {
        return (
            <div>
            <SearchBar searchKey={this.state.searchKey} showOnlyStocked={this.state.showOnlyStocked}
                onSearchKeyEntered={this.handleSearchKeyEntered}
                onShowOnlyStockedChecked={this.handleShowOnlyStockedChecked}
            />
           <ResultTable items={this.props.items} searchKey={this.state.searchKey}
                showOnlyStocked={this.state.showOnlyStocked}
            />
            </div>
        );
    }

    handleShowOnlyStockedChecked(event) {
        this.setState({
            showOnlyStocked: event.target.checked
        });
    }

    handleSearchKeyEntered(event) {
        this.setState({
            searchKey: event.target.value
        });
    }
}

export default FilterTable;