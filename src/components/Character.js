// Write your Character component here
import React from 'react';
import styled from 'styled-components'

const Character = props => {

    const {name, height, mass} = props;


    return (
        <CardBox>
            <p>{name}</p>
        </CardBox>
    
    );
}

const CardBox = styled.div`
    border-radius: 6px;
    background: #fff;
    display: grid;
    justify-content: stretch;
    grid-template-columns: 1fr;
    grid-row-gap: 0;
    gap: 1rem;
    margin-top: 1rem;
    padding: 2rem;
    box-shadow: 2rem 2rem 6rem rgba(0, 0, 0, 0.15);
    font-size: 1.6rem;
    justify-items: center;
`

const Button = styled.a`
font-size: 1rem;
text-transform: uppercase;
`

export default Character;