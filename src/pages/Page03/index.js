import React, { useContext } from 'react';
import Input from '../../components/Input';
import Button from '../../components/Button';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../providers/auth';
import './style.css';

const Page03 = () => {
    const authContext = useContext(AuthContext);

    const handleSetMovieOrSeries = (e) => {
        authContext.setMovieOrSeries(e.target.value);
    }
    return (
        <div className="page--03">
            <h2>Prefere filmes ou séries?</h2>
            <label>Filmes</label>
            <Input type="checkbox" value="Filmes" onChange={handleSetMovieOrSeries} checked={(authContext.movieOrSeries === "Filmes")} />
            <label>Séries</label>
            <Input type="checkbox" value="Séries" onChange={handleSetMovieOrSeries} checked={(authContext.movieOrSeries === "Séries")} />
            <br />

            <div>
                <Link to="/page02"><Button title="Voltar" /></Link>
                <Link to="/search-result"> <Button title="Finalizar" disabled={!authContext.movieOrSeries} /></Link>
            </div>

        </div>
    )
}
export default Page03;