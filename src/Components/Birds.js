import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { API_KEY } from '../Constants/index';

import styled from 'styled-components';
import headerImage from '../Images/birdsBanner.jpeg';

import BirdCard from './BirdCard';

export default function Birds() {
    const [birds, setBirds] = useState();

    useEffect(() => {
        axios.get(`https://api.ebird.org/v2/data/obs/US/recent?maxResults=10`, {
            headers: { 'X-eBirdApiToken': API_KEY }
        })
        .then(res => {
            console.log(res);
            setBirds(res.data);
        })
        .catch(err => console.log(err));
    }, [])


    return(
        <StyledBirds className="birdsPage pageContainer">
            <div className='headerBanner birdsHeader'>
                <h1>Birds</h1>
            </div>
            <div>
                <p>Below is a list of birds recently observed within the USA! This data is pulled directly from ©<a href='https://academy.allaboutbirds.org/'>The Cornell Lab</a> (with Cornell University), an organization dedicated to advancing the understanding and protection of the natural world.</p>
                
            </div>
            <div className='birdContainer'>
                { birds ? birds.map(bird => (<BirdCard bird={bird} key={bird.speciesCode}/>)) : <div>Catching birds...</div> }
            </div>
        </StyledBirds>
    );
}

const StyledBirds = styled.div`
    .headerBanner {
        background-image: url(${headerImage});
    }
    
`