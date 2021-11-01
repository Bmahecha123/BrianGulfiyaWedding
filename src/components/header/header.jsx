import React from 'react';
import { Link } from 'react-router-dom';
import { colors, fontSizing, fontStyles, spacing } from '../../theme';
import outerheaven from '../../assets/outerheaven.png';

import './header.css';

//syles
const headerStyles = {
    backgroundColor: colors.headerBackgroundColor,
    margin: 0
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

const buttonStyles = {
    ...linkStyles,
    backgroundColor: colors.buttonBackgroundColor,
    boxShadow: colors.buttonBoxShadow
};

const pStyles = {
    fontSize: fontSizing.medium,
    padding: 0,
    margin: 0,
    marginBottom: spacing.small,
    textAlign: 'center'
};

const buttonLayoutStyles = {
    padding: 0,
    margin: 0,

    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around'
};

const imgStyles = {
    maxWidth: spacing.xxxlarge
};

const Header = () => {

    return (
        <header style={headerStyles}>
            <nav>
                <ul>
                    <li><Link style={linkStyles} to="/"><img style={imgStyles} alt="brian and gulfiya" src={outerheaven} /></Link></li>
                    <li style={liStyles}><Link style={linkStyles} to='/rsvp'>RSVP</Link></li>
                    <li style={liStyles}><Link style={linkStyles} to='/contact'>Contact</Link></li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;