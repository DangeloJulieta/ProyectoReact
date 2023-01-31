
import React from 'react';

export const Logo = ({ nombreLogo }) => {
    return (
        <>
            <a className="navbar-brand brand-logo logo" href="#">
                <img src="https://cdn.iconscout.com/icon/premium/png-512-thumb/wine-76-162623.png?w=256&f=avif" alt="" width="85" height="85" class="d-inline-block align-text-top" />
                {nombreLogo}
            </a>

        
        </>
    );
}