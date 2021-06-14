import React, { useContext } from 'react';
import Input from '../../components/Input';
import Button from '../../components/Button';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../providers/auth';
import './style.css';

const Home = () => {
    const authContext = useContext(AuthContext);

    const handleSetName = (e) => {
        authContext.setName(e.target.value);
    }
    const handleSetFilmFavorite = (e) => {
        authContext.setFilmFavorite(e.target.value);
    }
    return (
        <div className="home">
            <h2>Digite seu nome </h2>
            <Input type="text" onChange={handleSetName} />
            <h2>Digite filme seu favorito</h2>
            <textarea rows="4" onChange={handleSetFilmFavorite} />

            <div>
                <Link to="/page02">
                    <Button title="Próxima" disabled={!authContext.name || !authContext.filmFavorite } />
                </Link>
            </div>
        </div>
    )
}
export default Home;