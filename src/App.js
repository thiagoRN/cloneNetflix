import React, { useEffect, useState } from 'react';

import Tmdb from './Tmdb';
import MovieRow from './components/MovieRow/MovieRow.jsx';
import FeaturedMovie from './components/FeaturedMovie';
import Header from './components/Header';

import './App.css';


function App() {

  const [movieList, setMovieList]= useState([]);
  const [featuredData, setFeaturedData]= useState(null);
  const [blackHeader, setBlackHeader]= useState(false);

  useEffect(()=>{

    const loadAll = async()=>{
      let list = await Tmdb.getHomeList();
      setMovieList(list);

      let originals = list.filter(i=>i.slug === 'originals')
      let randomChosen = Math.floor(Math.random() * (originals[0].items.results.length - 1));
      let chosen = originals[0].items.results[randomChosen];
      let chosenInfo = await Tmdb.getMovieInfo(chosen.id, 'tv');
      setFeaturedData(chosenInfo);
    }

    loadAll();
  }, []);

  useEffect(() => {
    const scrollListener = () => {
      if (window.scrollY > 10) {
        setBlackHeader(true);
      }else {
        setBlackHeader(false);
      }
    }

    window.addEventListener('scroll', scrollListener);

    return () => {
      window.removeEventListener('scroll', scrollListener);
    }
  },[]);

  return (
    <div className="page">


      <Header black={blackHeader} />

     {featuredData && 
       <FeaturedMovie item={featuredData}/>
     }

      <section className="lists">
        {movieList.map((item, key)=>(
          <MovieRow key={key} title={item.title} items={item.items}/>
       ))}
      </section>

      <footer className="">
            Direitos de imagem para Netflix & pelab7web<br/>
            Dados pegos do site Themoviedb.org <br/>
      </footer>


      {movieList.length <= 0 &&
      <div class="loading">
          <img src="https://www.rchandru.com/images/portfolio/loading.gif" alt="Carregando"/>
      </div>    
      }
    </div>
  );
}

export default App;
