import React from 'react';
import { containerSizing } from "../../theme";

const sectionStyles = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'center',
};

const mapStyles = {
    width: containerSizing.large,
    height: containerSizing.large,
    border: 0,
    allowfullscreen: '',
    loading: 'lazy',
};

const Registry = (props) => {
    return(
        <section style={sectionStyles}>
            <iframe title="registry-page" src="https://www.zola.com/registry/brianandgulfiya" style={mapStyles}></iframe>
        </section>
    );
};

export default Registry;