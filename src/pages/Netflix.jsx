import React, { useEffect, useState } from 'react'
import Navbar from "../components/Navbar";
import backgroundImage from "../assets/maxresdefault.jpg";
import MovieLogo from "../assets/title.png";
import {FaPlay} from "react-icons/fa";
import {AiOutlineInfoCircle} from "react-icons/ai";
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchMovies, getGenres } from '../store';
import Slider from '../components/Slider';


const Container = styled.div`
background-color: black;
.hero{
  position: relative;
  img{
    width: 100vw;
  }
  .container{
    position: absolute;
    bottom: 5rem;
    margin-left: 5rem;
    .logo{
      img{
        width: 50vw;
      }
    }
    .buttons{
      margin: 5rem;
      margin-left: 0;
      gap: 2rem;
      margin-top: 1rem;
      button{
        font-size: 1.4rem;
        gap: 1rem;
        border-radius: 0.2rem;
        padding: 0.5rem;
        padding-left: 2rem;
        padding-right: 2.4rem;
        border: none;
        cursor: pointer;
        transition: 0.3s ease-in-out;
        &:hover{
          opacity: 0.8;
        }
        &:nth-of-type(2){
          background-color: rgba(109,109,110,0.7);
          color: white;
          svg{
            font-size: 1.8rem;
          }
        }
      }
    }
  }
}
@media (max-width:750px) {
  .hero{
  .container{
    bottom: 1rem;
    margin-left: 2rem !important;
    .logo{
      img{
        width: 50vw;
      }
    }
    .buttons{
      margin-top: 1rem !important;
      margin-bottom: 0.5rem !important;
      button{
        font-size: 1.1rem;
        border-radius: 0.2rem;
        padding: 0.3rem;
        padding-left: 1rem;
        padding-right: 1rem;
        &:nth-of-type(2){
          display: none;
        }
      }
    }
  }
}
}
`;

const Netflix = () => {
  const navigate = useNavigate();

  const genresLoaded = useSelector((state) => state.netflix.genresLoaded);
  const movies = useSelector(state => state.netflix.movies)
  const dispatch = useDispatch();

  useEffect(()=> {
    dispatch(getGenres())
  })
  useEffect(() => {
    if (genresLoaded) dispatch(fetchMovies({type:"all"}));
  },[genresLoaded])
  const [isScrolled,setIsScrolled] = useState(false);

  window.onscroll = () => {
      setIsScrolled(window.pageYOffset === 0 ? false : true);
      return () => (window.onscroll = null);
  }
  return (
    <Container>
      <Navbar isScrolled={isScrolled} />
      <div className='hero'>
        <img src={backgroundImage} alt="background"
        className='background-image'/>
      <div className="container">
        <div className="logo">
          <img src={MovieLogo} alt="Movie Logo"/>
        </div>
        <div className="buttons flex">
        <button className="flex j-center a-center" onClick={() => navigate("/player")}>
          <FaPlay/>Play
        </button>
        <button className="flex j-center a-center">
          <AiOutlineInfoCircle/> More Info
        </button>
      </div>
      </div>
      </div>
      <Slider movies={movies}/>
    </Container>
  )
}

export default Netflix