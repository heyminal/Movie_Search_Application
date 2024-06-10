import axios from 'axios';
import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
const API_KEY= 'eddcf5d5';


const Container = styled.div`
display: flex;
flex-direction: row;
padding: 20px 30px;
justify-content: center;
border-bottom: 1px solid lightgray;
`
const CoverImg= styled.img`
object-fit: cover;
height: 350px;
`;
const InfoCol= styled.div`
display: flex;
flex-direction: column;
margin: 20px;

`
const MovieName= styled.span`
font-size: 22px;
font-weight: 600;
margin: 5px 0;
white-space: nowrap;
text-overflow: ellipsis;
overflow: hidden;
text-transform: capitalize;
`
const MovieInfo = styled.span`
font-size: 16px;
font-weight: 500;
margin: 4px 0;
text-overflow: ellipsis;
overflow: hidden;
text-transform: capitalize;
& span{
opacity: 0.5;
}
`
const CloseButton= styled.span`
font-size: 16px;
font-weight: 600;
background-color: #AEB6BF;
height: fit-content;
padding: 8px;
border-radius: 50%;
cursor: pointer;
opacity: 0.8;
`

const MovieInfoComponent = (props) => {
    const [movieInfo, setMovieInfo] = useState();
    const {selectedMovie} = props;
    useEffect(()=>{axios.get(`https://www.omdbapi.com/?i=${selectedMovie}&apikey=${API_KEY}`)
    .then((response)=>setMovieInfo(response.data))
    },[selectedMovie]);

  return (
    <Container>
        {movieInfo? 
        <>
            <CoverImg src={movieInfo?.Poster}/>
            <InfoCol>
                <MovieName>
                    {movieInfo?.Title} : {movieInfo?.Type}
                </MovieName>
                <MovieInfo>
                    IMDB Rating: <span>{movieInfo?.imdbRating}</span>
                </MovieInfo>
                <MovieInfo>
                    Year: <span>{movieInfo?.Year}</span>
                </MovieInfo>
                <MovieInfo>
                    Language: <span>{movieInfo?.Language}</span>
                </MovieInfo>
                <MovieInfo>
                    Rated: <span>{movieInfo?.Rated}</span>
                </MovieInfo>
                <MovieInfo>
                    Released: <span>{movieInfo?.Released}</span>
                </MovieInfo>
                <MovieInfo>
                    Runtime: <span>{movieInfo?.Runtime}</span>
                </MovieInfo>
                <MovieInfo>
                    Genre: <span>{movieInfo?.Genre}</span>
                </MovieInfo>
                <MovieInfo>
                    Director: <span>{movieInfo?.Director}</span>
                </MovieInfo>
                <MovieInfo>
                    Actors: <span>{movieInfo?.Actors}</span>
                </MovieInfo>
                <MovieInfo>
                    Plot: <span>{movieInfo?.Plot}</span>
                </MovieInfo>
            </InfoCol>
            <CloseButton onClick={()=>props.onMovieSelect()}>X</CloseButton>
        </> : "Loading..."}
        
    </Container>
  )
}

export default MovieInfoComponent