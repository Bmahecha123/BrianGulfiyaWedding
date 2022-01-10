import React from 'react';
import { Link } from 'react-router-dom';
import { colors, containerSizing, fontSizing, fontStyles, spacing } from '../../theme';
//header pics
import homeIcon from '../../assets/home.png';
import rsvpIcon from '../../assets/guestBookIcon.png';
import registryIcon from '../../assets/gift.png';

import './header.css';

//syles
const headerStyles = {
    backgroundColor: colors.headerBackgroundColor,
    margin: 0,
    padding: spacing.medium,
};

const liStyles = {
    backgroundColor: colors.buttonBackgroundColor,
    //boxShadow: colors.buttonBoxShadow,
    fontWeight: fontStyles.bold
};

const linkStyles = {
    textDecoration: 'none',
    color: colors.buttonTextColor,
    fontSize: fontSizing.medium
};

const imgStyles = {
    maxWidth: fontSizing.xlarge,
    maxHeight: fontSizing.xlarge,
    objectFit: 'cover',
    
};

const Header = () => {
    return (
        <header style={headerStyles}>
            <nav>
                <ul>
                    <li style={liStyles}><Link style={linkStyles} to="/"><img style={imgStyles} src={homeIcon} alt="homeIcon" /></Link></li>
                    <li style={liStyles}><Link style={linkStyles} to='/registry'><img style={imgStyles} src={registryIcon} alt="registryIcon" /></Link></li>
                    {/* <li style={liStyles}><a style={linkStyles} rel="noreferrer" target="_blank" href="https://www.zola.com/registry/brianandgulfiya">Registry</a></li> */}
                    <li style={liStyles}><Link style={linkStyles} to='/rsvp'><img style={imgStyles} src={rsvpIcon} alt="rsvpIcon" /></Link></li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;