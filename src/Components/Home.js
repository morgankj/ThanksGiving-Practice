import styled from 'styled-components';
import headerImage from '../Images/homeBanner.jpeg';
import apiImage from '../Images/birdApiImg.jpeg';
import birdFriends from '../Images/birdFriends.jpeg';
import mustache from '../Images/mustache.jpeg';
import flyingMacaw from '../Images/flyingBirds.png';

export default function Home() {
  return (
    <StyledHome className="homePage pageContainer">
        <div className='headerBanner homeHeader'>
            <h1>Thanksgiving<br/>Birds</h1>
        </div>
        <div className='tagline'>
            <p>This is a little Thanksgiving Holiday page for me to practice some coding and have fun over the week break! I'm enjoying the process so far, and it is helping me to remember concepts that we learned in previous weeks.</p>
            <p>I will be using an API to request data on birds, which you can access via the BIRDS link in the nav. </p>
        </div>
        <div className='bodyLinks'>
            <div className='card'>
                <div id='apiImg' className='img'></div>
                <h3>API Link</h3>
                <p> <a href='https://api.ebird.org/v2/data/obs/US/recent?maxResults=20' target='_blank' rel='noreferrer' className='blueLink'>Here</a> is a link to the API that the BIRD nav uses. I am pulling data from this API.</p>
            </div>
            <div className='card'>
                <div id='birdFriends' className='img'></div>
                <h3>Bird Fact</h3>
                <p>Male birds usually display more vibrant colors than females; male evolution prioritizes attraction while females' prioritize camouflage.</p>
            </div>
            <div className='card'>
                <div id='mustache' className='img'></div>
                <h3>API Link</h3>
                <p>Birds come in many shapes and sizes with unique and distinguishing features. This mustache man is an Inca Tern.</p>
            </div>
        </div>
        <div className='tagline'>
            <p>The structure and inherent lightness of their feathers give birds the ability to fly, but birds and their feathers also come in a remarkable variety of colors and forms. Yet there's more about birds that fascinates us than their appearance: their behaviors, their intelligence, their songs, and more!</p>
            <img src={flyingMacaw} alt='flying macaw' />
        </div>        
    </StyledHome>
  );
}

const StyledHome = styled.div`
    .homeHeader {
        background-image: url(${headerImage});
    }
    .tagline {
        & p {
            margin: 1%;
        }
        & img {
            margin: 0 auto 3%;
        }
    }
    .bodyLinks {
        display: flex;
        justify-content: space-between;
    }
    .card {
        & .img {
            height: 30vh;
            background-position: center;
            background-size: cover;
            border-radius: 5px;
        }
    }
    
    #apiImg {
        background-image: url(${apiImage});
    }

    #birdFriends {
        background-image: url(${birdFriends});
    }

    #mustache {
        background-image: url(${mustache});
    }
`