import styled from "styled-components";
import cinema from "./assets/cinema.png";
import search from "./assets/search.png";
import movieicon from "./assets/watching-a-movie.png"
import MovieComponent from "./components/movieComponent.js";
import { useState } from "react";
import axios from "axios";
import MovieInfoComponent from "./components/MovieInfoComponent.js";
const API_KEY= 'eddcf5d5';


const Container= styled.div`
display: flex;
flex-direction: column;
`;
const AppName= styled.div`
display: flex;
flex-direction: row;
align-items: center;
`;
const MovieImg= styled.img`
width: 50px;
height: 50px;
margin: 10px;
`;
const Header = styled.div`
display: flex;
flex-direction: row;
justify-content: space-between;
background-color:#5D6D7E;
align-items: center;
color: white;
font-size: 25px;
padding: 5px;
font-weight:bold;
box-shadow: rgba(0, 0, 0, 0.1) 0px 20px 25px -5px, rgba(0, 0, 0, 0.04) 0px 10px 10px -5px;
`;
const SearchBox= styled.div`
display: flex;
flex-direction: row;
padding: 15px 10px;
background-color:white;
border-radius: 5px;
width: 500px;
height: 15px;
align-items: center;

`;
const SearchImg= styled.img`
width: 30px;
height: 30px;

`;
const SearchInput= styled.input`
width: 500px;
height: 30px;
border: none;
padding-left: 5px;
margin-left: 15px;
font-size: 18px;
font-weight: bold;
outline: none;
`;
const MovieListContainer= styled.div`
display: flex;
flex-direction: row;
flex-wrap: wrap;
padding: 30px;
justify-content: space-evenly;
gap: 24px;

`;
const Placeholder = styled.img`
width: 300px;
height: 300px;
margin: 150px;
opacity: 80%;
`
function App() {
  const [searchQuery, updateSearchQuery] = useState();
  const [timeoutId, updateTimeoutId] = useState();
  const[movieList, updateMovieList] = useState();
  const[selectedMovie, onMovieSelect]=useState();

  const fetchData= async(searchString)=>{
    console.log(searchQuery);
    const response= await axios.get(`https://www.omdbapi.com/?s=${searchString}&apikey=${API_KEY}`);
    console.log(response);
    updateMovieList(response.data.Search);

  }
  const onTextChange= (event)=>{
    clearTimeout(timeoutId);
    updateSearchQuery(event.target.value);
    const timeout= setTimeout(()=>fetchData(event.target.value), 500);
    updateTimeoutId(timeout);
  };
  
  return (
    <Container>
      <Header>
        <AppName>
           <MovieImg src={cinema} alt="Logo"/>
           Movie Vault
        </AppName>
        <SearchBox>
          <SearchImg src={search} alt="search icon"/>
          <SearchInput placeholder="Search a movie..." value={searchQuery} onChange={onTextChange}/>
        </SearchBox>
      </Header>
      {selectedMovie && <MovieInfoComponent selectedMovie={selectedMovie} onMovieSelect={onMovieSelect}/>}
      <MovieListContainer>
        {movieList?.length ? movieList.map((movie,index)=><MovieComponent key={index} movie={movie} onMovieSelect={onMovieSelect}/>): <Placeholder src={movieicon} alt="movie icon" />}
      </MovieListContainer>
    </Container>
    
  );
}

export default App;
