import React from 'react';

const Link = ({route}) => {
    return (
        <li>
            <a href={route.path}>{route.label}</a>
        </li>
    );
};

export default Link;