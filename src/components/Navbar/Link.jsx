import React from 'react';

const Link = ({route}) => {
    return (
        <li className='px-4 hover:bg-pink-400' >
            <a href={route.path}>{route.label}</a>
        </li>
    );
};

export default Link;