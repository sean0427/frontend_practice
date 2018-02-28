import React from 'react';

import ProductsTable from './ProductsTable';
import TableCompany from './TableCompany';


export const dict = {
    id: 'id',
    name: 'name',
    language: 'language',
    describe: 'describe',
    image: 'image',
    address: 'address',
    telephone: 'telephone',
    contant_person_name: 'contant_person_name',
    product_type: 'type',
    manufacturing: 'manufacturing',
    edit: 'edit',
    submit: 'submit',
    price: 'price',
    publisher: 'publisher',
    start_datetime: 'start_datetime',
    end_datetime: 'end_datetime',
};

export const TableLanguageProduct = () => (
    <div className="container"><table>
        <tr>
            <th>{ dict.name }</th>
            <th>{ dict.language }</th>
            <th>{ dict.describe }</th>
            <th>{ dict.image }</th>
        </tr>
    </table></div>
);

export { ProductsTable, TableCompany };
