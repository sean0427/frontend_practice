import React from 'react';

export default (onChange) => ({ title, name }) => (
    <li>
        <label htmlfor={ name }>{ title }</label>
        <input id={ name } type="text" name={ name } onChange={onChange} />
    </li>
);
