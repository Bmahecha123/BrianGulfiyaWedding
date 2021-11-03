import React from 'react';
import { cardStyles } from '../../theme';

const containerStyles = {
    display: 'flex',
    flexDirection: 'column',
    padding: 0,
};

export const Video = (props) => {
    return (
        <div key={props.name} style={{...containerStyles, maxWidth: props.maxWidth}}>
            <video style={{ ...containerStyles, width: props.maxWidth, maxHeight: props.maxHeight, ...cardStyles('100%')}} controls controlsList="nodownload">
                <source src={props.source} type="video/mp4" />
            </video>
        </div>
    );
};