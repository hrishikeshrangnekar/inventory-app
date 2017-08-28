import React from 'react';

class SearchBar extends React.Component {
    
    render() {
        return (
            <field-set> 
                <label>
                    Name:
                    <input type="text" value={this.props.searchKey} onChange={this.props.onSearchKeyEntered} />
                </label>
                <br />
                <label>
                <input type="checkbox" checked={this.props.showOnlyStocked} onChange={this.props.onShowOnlyStockedChecked} />
                    Only  Show stocked products
                </label>
            </field-set>
        );
    }
}

export default SearchBar;