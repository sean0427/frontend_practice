import React from 'react';
import { dict } from './index';

export default ({ list, onPress, current, children }) => (
    <div >
        <table className="manger-product-table">
            <thead>
                <tr>
                    <th>{ dict.name }</th>
                    <th>{ dict.describe }</th>
                    <th>{ dict.price }</th>
                </tr>
            </thead>
            <tbody>
                { list.map(data => (
                    <tr key={data.product_id}
                        onClick={ () => { onPress(data.product_id); } }
                        className={ current === data.product_id ? 'enable' : '' }
                    >
                        <td>{data.name}</td>
                        <td>{data.describe}</td>
                        <td>{data.price}</td>
                    </tr>
                )) }
            </tbody>
        </table>
        <div>
            { children }
        </div>
    </div>
);
