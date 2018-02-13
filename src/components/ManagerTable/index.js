import React from 'react';

import ProductsTable from './ProductsTable';

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
};

export const TableLanguageProduct = () => (
    <table>
        <tr>
            <th>{ dict.name }</th>
            <th>{ dict.language }</th>
            <th>{ dict.describe }</th>
            <th>{ dict.image }</th>
        </tr>
    </table>
);

export const TableCompany = () => (
    <table>
        <tr>
            <th>{ dict.name }</th>
            <th>{ dict.address }</th>
            <th>{ dict.telephone }</th>
            <th>{ dict.contant_person_name }</th>
        </tr>
    </table>
);

export { ProductsTable };
