import styled from 'styled-components';
import headerImage from '../Images/aboutBanner.jpeg';
import ducklings from '../Images/ducklings.png';

export default function About() {
    return (
        <StyledAbout className="aboutPage pageContainer">
            <div className='headerBanner aboutBanner'>
                <h1>About</h1>
            </div>
            <div className='text'>
                <p>This website is a practice project for me to hone skills from previous weeks!</p>
                <p>I am using a get request with an API through The Cornell Labs to pull data about bird sightings in the USA. I am pulling data about 20 bird sightings at a time, and displaying this in individual blocks fir each sighting.</p>
            </div>
            <img src={ducklings} alt='cute ducklings' />
        </StyledAbout>
    );
}

const StyledAbout = styled.div`
    .aboutBanner {
        background-image: url(${headerImage});
    }
    .text {
        margin: 3%;
    }
    & p:nth-of-type(2) {
        margin-top: 2%;
    }
`