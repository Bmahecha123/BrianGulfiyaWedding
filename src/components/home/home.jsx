import React from 'react';
import { cardStyles, colors, containerSizing, fontSizing, spacing } from '../../theme';
import AwesomeSlider from 'react-awesome-slider';
import withAutoplay from 'react-awesome-slider/dist/autoplay';
import 'react-awesome-slider/dist/styles.css';

//Pictures
import carouselPic1 from '../../assets/briangulfiyaistanbul.JPG';
import carouselPic2 from '../../assets/centralpark.JPG';
import carouselPic3 from '../../assets/engagement.JPG';
import carouselPic4 from '../../assets/jiujitsu.jpg';
import compilationVid2 from '../../assets/compilationVid2.MP4';

import { Video } from '../common/video';

const sectionStyles = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'center',
};

const sectionStylesHorizontal = {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
};

const headerStyles = {
    fontSize: fontSizing.xlarge,
};

const imgStyles = {
    maxWidth: containerSizing.medium,
    maxHeight: containerSizing.medium,
    objectFit: 'cover',
    
};

const divStyles = {
    backgroundColor: colors.cardBackgroundColor
};

const mapStyles = {
    width: containerSizing.small,
    height: containerSizing.small,
    border: 0,
    allowfullscreen: '',
    loading: 'lazy',
};

const CarouselImage = (props) => { 
    console.log('PROPSSSSSS');
    console.log(props);
    return <div><img style={imgStyles} src={props.image} /></div> 

};

const AutoplaySlider = withAutoplay(AwesomeSlider);

const Home = () => {
    return(
        <section style={sectionStyles}>
            <h1 style={headerStyles}> Brian and Gulfiya Wedding</h1>

            {/* Info like date/location

            Map component ?

            Carousel of photos

            Row of couple of videos of us */}
            {/* <article style={{...cardStyles(containerSizing.medium)}}>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3467.3503298045753!2d-82.32071418492991!3d29.65160684397774!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88e8a3f3dc55c629%3A0xaf075d39a2a0b3bf!2sSweetwater%20Branch%20Inn%20Lodging%20and%20Events!5e0!3m2!1sen!2sus!4v1635824870207!5m2!1sen!2sus" width="400" height="300" style="border:0;" allowfullscreen="" loading="lazy"></iframe>
            </article> */}

            <AutoplaySlider
                style={{...cardStyles(containerSizing.large)}}
                // screens={[

                // ]}
                play={true}
                cancelOnInteraction={false} // should stop playing on user interaction
                interval={6000}
            >
                <div style={divStyles}><img style={imgStyles} src={carouselPic1} /></div>
                <div style={divStyles}><img style={imgStyles} src={carouselPic2} /></div>
                <div style={divStyles}><img style={imgStyles} src={carouselPic3} /></div>
                <div style={divStyles}><img style={imgStyles} src={carouselPic4} /></div>
            </AutoplaySlider>

            <article style={{...sectionStylesHorizontal, marginTop: spacing.large, marginBottom: spacing.large, flexWrap: 'wrap',}}>
                <Video 
                    style={{...cardStyles(containerSizing.medium), objectFit: 'cover', maxWidth: containerSizing.medium, maxHeight: containerSizing.medium }} 
                    name="CompliationVid2" 
                    source={compilationVid2}
                    maxWidth={containerSizing.medium}
                    maxHeight={containerSizing.medium} />
            </article>

            <article style={{...cardStyles(containerSizing.medium), ...sectionStyles, marginTop: spacing.large, marginBottom: spacing.large}}>
                <h2 style={{fontSize: fontSizing.medium, padding: 0, margin: 0}}>When</h2>
                <p>December 18th, 2021</p>
                <h2 style={{fontSize: fontSizing.medium, padding: 0, margin: 0}}>Where</h2>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3467.3503298045753!2d-82.32071418492991!3d29.65160684397774!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88e8a3f3dc55c629%3A0xaf075d39a2a0b3bf!2sSweetwater%20Branch%20Inn%20Lodging%20and%20Events!5e0!3m2!1sen!2sus!4v1635824870207!5m2!1sen!2sus" style={mapStyles} ></iframe>
            </article>





        </section>
    );
};

export default Home;