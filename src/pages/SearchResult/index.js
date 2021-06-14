import React, { useContext } from 'react';
import { AuthContext } from '../../providers/auth';
import Button from '../../components/Button';
import './style.css';
import { Link } from 'react-router-dom';


const SearchResult = () => {
    const authContext = useContext(AuthContext);
    return (
        <div className="searchResult">
            <h2>Resultados</h2>

            <h3>Nome</h3>
            <label>{authContext.name}</label>

            <h3>Filme ou série favorito</h3>
            <label>{authContext.filmFavorite}</label>

            <h3>Em que ano assistiu o filme favorito?</h3>
            <label>{authContext.launchYear}</label>

            <h3>Prefere filmes ou séries?</h3>
            <label>{authContext.movieOrSeries}</label>

            <div>
                <Link to="/" ><Button title="Nova Pesquisa" /></Link>
            </div>

        </div>
    )

}

export default SearchResult;