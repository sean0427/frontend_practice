import React from 'react';
import { dict } from './index';

const _ProductColumn = ({ id, manufacturing, type_id }) => (
    <tr key={ id }>
        <td>{ id }</td>
        <td>{ manufacturing }</td>
        <td>{ type_id }</td>
        <td><button>{ dict.edit }</button></td>
    </tr>
);

export default (productsList) => (
    <table>
        <tr>
            <th>{ dict.id }</th>
            <th>{ dict.manufacturing }</th>
            <th>{ dict.product_type }</th>
            <th>{ dict.edit }</th>
        </tr>
        {  productsList.map(product => _ProductColumn(product)) }
        <tr>
            <th><input /></th>
        </tr>
    </table>
);
