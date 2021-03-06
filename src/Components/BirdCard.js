import React from "react";
import styled from "styled-components";

import footprints from "../Images/footprints.png";

export default function BirdCard({ bird }) {
  return (
    <StyledBirdCards key={bird.comName} className="card">
      <h3>{bird.comName}</h3>
      <div className="cardText">
        <p>
          <b class="bold">Scientific Name:</b> {bird.sciName}
        </p>
        <p>
          <b class="bold">Number observed:</b> {bird.howMany}
        </p>
        <p>
          <b class="bold">Location:</b> {bird.locName}
        </p>
        <p>
          <b class="bold">Date:</b> {bird.obsDt}
        </p>
        <p>
          <a
            href={`https://www.google.com/search?q=${bird.comName}`}
            target="_blank"
            rel="noreferrer"
            className="blueLink"
          >
            Google Results
          </a>
        </p>
      </div>
      <img src={footprints} alt="bird footprints" />
    </StyledBirdCards>
  );
}

const StyledBirdCards = styled.div`
  width: 30%;
  background: white;
  padding: 1%;
  margin-bottom: 1%;
  .cardText {
    display: flex;
    flex-direction: column;
  }
  & p {
    text-align: left;
  }
  & img {
    width: 20%;
  }

  @media (max-width: 768px) {
    width: 40%;
  }
  @media (max-width: 480px) {
    width: 80%;
  }
`;
