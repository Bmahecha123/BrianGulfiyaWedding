import React from 'react';
import { Link } from 'react-router-dom';
import { colors, fontSizing, fontStyles, spacing } from '../../theme';

import './header.css';

//syles
const headerStyles = {
    backgroundColor: colors.headerBackgroundColor,
    margin: 0,
    padding: spacing.medium,
};

const liStyles = {
    backgroundColor: colors.buttonBackgroundColor,
    boxShadow: colors.buttonBoxShadow,
    fontWeight: fontStyles.bold
};

const linkStyles = {
    textDecoration: 'none',
    color: colors.buttonTextColor,
    fontSize: fontSizing.medium
};

const Header = () => {
    return (
        <header style={headerStyles}>
            <nav>
                <ul>
                    <li style={liStyles}><Link style={linkStyles} to="/">Home</Link></li>
                    {/* <li style={liStyles}><Link style={linkStyles} to='/registry'>Registry</Link></li> */}
                    <li style={liStyles}><a style={linkStyles} rel="noreferrer" target="_blank" href="https://www.zola.com/registry/brianandgulfiya">Registry</a></li>
                    <li style={liStyles}><Link style={linkStyles} to='/rsvp'>RSVP</Link></li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;