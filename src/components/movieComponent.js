import React from 'react'
import styled from 'styled-components'

const MovieContainer = styled.div`
display: flex;
flex-direction: column;
padding: 10px;
margin: 1px;
width: 260px;
box-shadow: rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px;
cursor: pointer;
background-color: white;
`;
const CoverImg= styled.img`
object-fit: cover;
height: 362px;
`;
const MovieName= styled.span`
font-size: 18px;
font-weight: 600;
margin: 5px 0;
text-transform: capitalize;
white-space: nowrap;
text-overflow: ellipsis;
overflow: hidden;
`;
const InfoCol= styled.div`
display: flex;
flex-direction: row;
justify-content: space-between;
white-space: nowrap;
text-overflow: ellipsis;
overflow: hidden;

`
const MovieInfo= styled.span`
font-size: 16px;
font-weight: 500;
text-transform: capitalize;
`
const MovieComponent = (props) => {
    const {Title, Year,imdbID, Type, Poster} = props.movie;

  return (
    <MovieContainer onClick={()=>props.onMovieSelect(imdbID)}> 
        <CoverImg src={Poster}/>
        <MovieName>{Title}</MovieName>
        <InfoCol>
            <MovieInfo>Year: {Year}</MovieInfo>
            <MovieInfo>Type: {Type}</MovieInfo>
        </InfoCol>
    </MovieContainer>
  )
}

export default MovieComponent