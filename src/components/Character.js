// Write your Character component here
import React from 'react';
import styled from 'styled-components'

const Character = props => {

    const {name, height, mass, born} = props;


    return (
        <CardBox>
            <Name>{name}</Name>
            <p><strong>Born:</strong> {born} <strong>Height:</strong> {height} <strong>Mass:</strong> {mass}</p>
        </CardBox>
    
    );
}

const CardBox = styled.div`
    border-radius: 0px;
    background: #fff;
    display: grid;
    justify-content: stretch;
    grid-template-columns: 1fr;
    grid-row-gap: 0;
    gap: .5rem;
    margin-top: 1rem;
    padding: 3rem;
    box-shadow: 2rem 2rem 6rem rgba(0, 0, 0, 0.15);
    font-size: 1.4rem;
    justify-items: center;
`

const Name = styled.h3`
font-size: 2.4rem;
font-family: 'Poller One';
text-transform: uppercase;
`

const Button = styled.a`
font-size: 1rem;
text-transform: uppercase;
`

export default Character;