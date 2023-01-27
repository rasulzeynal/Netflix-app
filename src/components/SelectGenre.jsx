import React from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import { fetchDataByGenre } from '../store';

const Select = styled.select`
margin-left:5rem;
cursor: pointer;
font-size: 1.4rem;
background-color: rgba(0,0,0,0.4);
color: white;
@media (max-width:450px) {
    margin-left: 1rem;
    font-size: 0.9rem;
}
`;

const SelectGenre = ({genres,type}) => {
    const dispatch = useDispatch();
  return (
    <Select className='flex' onChange={e => {
        dispatch(fetchDataByGenre({genre: e.target.value, type}))
    }}>
        {genres.map((genre) => {
            return (
                <option value={genre.id} key={genre.id}>
                    {genre.name}
                </option>
            )
        })}
    </Select>
  )
}

export default SelectGenre