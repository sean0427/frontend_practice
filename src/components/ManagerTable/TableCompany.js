import React from 'react';

import { dict } from './';

import PropTypes from 'prop-types';

const TableCompany = ({ list, onPress }) => (
    <table>
        <thead><tr>
            <th>{ dict.name }</th>
            <th>{ dict.address }</th>
            <th>{ dict.telephone }</th>
            <th>{ dict.contant_person_name }</th>
        </tr></thead>
        <tbody>
            { list.map(data => (
                <tr key={data.id} onClick={ () => { onPress(data.id); } }>
                    <td>{data.name}</td>
                    <td>{data.address}</td>
                    <td>{data.telephone}</td>
                    <td>{data.contant_person_name}</td>
                </tr>
            )) }
        </tbody>
    </table>
);

TableCompany.propTypes = {
    data: PropTypes.shape({
        name: PropTypes.string,
        address: PropTypes.string,
        telephone: PropTypes.string,
        contant_person_name: PropTypes.string,
    }),
};

export default TableCompany;
