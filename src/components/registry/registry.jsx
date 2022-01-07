import React from 'react';
import { cardStyles, containerSizing, fontSizing, spacing } from "../../theme";
import venmoQrCode from '../../assets/venmoQrCode.jpg';
import zelleLogo from '../../assets/zelle.png';

const sectionStyles = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'center',
};

const rowStyles = {
    display: 'flex',
    flexWrap: 'wrap',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    maxWidth: containerSizing.large,
    maxHeight: containerSizing.large,
};

const headerStyles = {
    fontSize: fontSizing.xlarge,
};

const imgStyles = {
    maxWidth: containerSizing.medium,
    maxHeight: containerSizing.medium,
    objectFit: 'cover',
    borderRadius: 7,
};

const Registry = (props) => {
    return(
        <section style={sectionStyles}>
            <h1 style={headerStyles}>Wedding Fund! </h1>
            <div style={rowStyles}>
                <article style={{...cardStyles(containerSizing.medium), ...sectionStyles, margin: spacing.small}}>
                    <img src={venmoQrCode} alt="venmo qr code" style={imgStyles} />
                </article>
                <article style={{...cardStyles(containerSizing.medium), ...sectionStyles, margin: spacing.small}}>
                    <img src={zelleLogo} alt="zelle logo" style={imgStyles} />
                    <h2 style={{fontSize: fontSizing.medium, padding: 0, margin: 0}}>954-557-4349</h2>
                </article>
            </div>
        </section>
    );
};

export default Registry;