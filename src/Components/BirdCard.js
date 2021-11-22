import React from 'react';

export default function BirdCard({ bird }) {
    return(
        <div key={bird.comName}>
            <h3>{bird.comName}</h3>
            <p>Scientific Name: {bird.sciName}</p>
            <p>Number observed: {bird.howMany}</p>
            <p>Location: {bird.locName}</p>
            <p>Date: {bird.obsDt}</p>
        </div>
    );
}