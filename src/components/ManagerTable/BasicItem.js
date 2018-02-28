import React from 'react';

export default (onChange) => ({ title, name, type = 'text', value }) => (
    <li>
        <label htmlfor={ name }>{ title }</label>
        <input id={ name } type={ type } name={ name } onChange={onChange} value={ value }/>
    </li>
);
