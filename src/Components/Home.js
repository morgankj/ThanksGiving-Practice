import styled from 'styled-components';
import image from '../Images/homeBanner.jpeg';

export default function Home() {
  return (
    <StyledHome className="homePage">
        <div className='headerBanner homeHeader'>
            <h1>Thanksgiving<br/>Birds</h1>
        </div>
        <div className='tagline'>
            <p>This is a little Thanksgiving Holiday page for me to practice some coding and have fun over the week break! I'm enjoying the process so far, and it is helping me to remember concepts that we learned in previous weeks.</p>
            <p>I will be using an API to request data on birds, which you can access via the BIRDS link in the nav. </p>
        </div>
    </StyledHome>
  );
}

const StyledHome = styled.div`
    margin: 2%;

    .homeHeader {
        background-image: url(${image});
    }

    .tagline {
        margin: 4% 0;
        color: darkred;
        background: white;
        & p {
            margin: 1%;
        }
    }
`