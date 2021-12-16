import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { API_KEY } from '../Constants/index';

import styled from 'styled-components';
import headerImage from '../Images/birdsBanner.jpeg';

import BirdCard from './BirdCard';

export default function Birds() {
    const [birds, setBirds] = useState();

    useEffect(() => {
        axios.get(`https://api.ebird.org/v2/data/obs/US/recent?maxResults=20`, {
            headers: { 'X-eBirdApiToken': API_KEY }
        })
        .then(res => {
            setBirds(res.data);
        })
        .catch(err => console.log(err));
    }, [])


    return(
        <StyledBirds className="birdsPage pageContainer">
            <div className='headerBanner birdsHeader'>
                <h1>Recent Bird Sightings</h1>
            </div>
            <p className='tagline'>Below is a list of birds recently observed within the USA! This data is pulled directly from ©<a href='https://academy.allaboutbirds.org/' target='_blank' rel='noreferrer' className='blueLink'>The Cornell Lab</a> (with Cornell University), an organization dedicated to advancing the understanding and protection of the natural world.</p>
            <div className='birdContainer'>
                { !birds ? birds.map(bird => (<BirdCard bird={bird} key={bird.speciesCode}/>)) : <div id='loading'>Catching birds...<p id="loadingWarning">This may take a moment.</p></div> }
            </div>
        </StyledBirds>
    );
}

const StyledBirds = styled.div`
    .headerBanner {
        background-image: url(${headerImage});
    }
    .tagline {
        display: block;
    }
    .birdContainer {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-around;
    }
    #loadingWarning {
        font-size: 1.3rem;
    }
    #loading {
        animation: loading 0.8s;
        animation-duration: infinite;
    }
    @keyframes loading {
        0%   {color: red;}
        33%  {color: orange;}
        66%  {color: yellow;}
    }




    #navLogoImg:hover {
        animation: shake 0.3s;
        animation-iteration-count: infinite;
    }
    @keyframes shake {
        0% { transform: translate(1px, 1px) rotate(5deg); }
        20% { transform: translate(-3px, 0px) rotate(10deg); }
        30% { transform: translate(3px, 2px) rotate(-10deg); }
        50% { transform: translate(-1px, 2px) rotate(-20deg); }
        70% { transform: translate(3px, 1px) rotate(-25deg); }
        90% { transform: translate(1px, 2px) rotate(10deg); }
        100% { transform: translate(1px, -2px) rotate(-10deg); }
    }
`