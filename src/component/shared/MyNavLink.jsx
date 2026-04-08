import React from 'react';
import { NavLink } from 'react-router';

const MyNavLink = ({to,children}) => {
    return (
        <NavLink to={to} className={
       ({isActive})=>`${isActive? 'border-b border-purple-600': " "}`
        }>
            {children}
        </NavLink>
    );
};

export default MyNavLink;