import React from 'react';
import { NavLink } from 'react-router-dom';

const ActiveLink = ({children,to}) => {
    return (
        <NavLink
                    to={to}
                    className={({ isActive, isPending }) =>
                      isActive
                        ? "text-orange-600 font-bold"
                        : isPending
                        ? "pending"
                        : ""
                    }
                  >
                    {children}
                  </NavLink>
    );
};

export default ActiveLink;