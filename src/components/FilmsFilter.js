import React from 'react';
import styled from 'styled-components'


const FilmsFilter = (props) => {

    return (
        <FilterBox>
        <SelectLabel for="films">Filter By Film Apperances:</SelectLabel>
        <FilterSelect name="films" id="film-select" value={props.filmFilter} onChange={props.handleFilmFilter}>
            <option value="">All Films</option>
            <option value="http://swapi.dev/api/films/1/">Episode IV: A New Hope</option>
            <option value="http://swapi.dev/api/films/2/">Episode V: The Empire Strikes Back</option>
            <option value="http://swapi.dev/api/films/3/">Episode VI: Return of The Jedi</option>
            <option value="http://swapi.dev/api/films/4/">Episode I: The Phantom Menace</option>
        </FilterSelect>
        </FilterBox>
    )

}


const FilterBox = styled.div`
display: grid;
justify-content: center;
`

const FilterSelect = styled.select`
padding: .5rem;
margin: .5rem;
font-family: 'Poller One';
box-shadow: 2rem 2rem 6rem rgba(0, 0, 0, 0.15);
`

const SelectLabel = styled.label`
font-size: 1.4rem;
text-transform: uppercase;
color: #fff;
font-family: 'Poller One';
vertical-align: top;
text-shadow: 0px 2px 10px rgba(0,0,0,0.3);
`


export default FilmsFilter