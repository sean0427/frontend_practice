import React from 'react';

import { TableCompany, ProductsTable } from './ManagerTable';

const dict = {
    LanguageProduct: 'LanguageProduct',
    Company: 'Company',
    Product: 'Product',
};

const TAB_PRODUCT = 1;
const TAB_COMPANY = 2;

export default class Manager extends React.Component {
    static defaultProps = {
        pageNumber: 0,
        products: [],
    };

    constructor(props) {
        super(props);

        this.state = {
            selected_tab: TAB_PRODUCT
        };
    }

    handleTabClick(tab) {
        this.setState({ selected_tab: tab });
    }

    render() {
        let _table = '';

        switch (this.state.selected_tab) {
            case TAB_COMPANY:
                _table = TableCompany();
                break;
            case TAB_PRODUCT:
            default:
                _table = ProductsTable(this.props.products);
        }

        return (
            <div>
                <h1>Manager</h1>
                <div className="tab">
                    <button onClick={() => this.handleTabClick(TAB_PRODUCT) }>
                        { dict.Product }
                    </button>
                    <button onClick={() => this.handleTabClick(TAB_COMPANY)}>
                        { dict.Company }
                    </button>
                </div>
                { _table }

            </div>
        );
    }
}
