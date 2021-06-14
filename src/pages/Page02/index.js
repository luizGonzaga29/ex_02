import React, { useState, useContext } from 'react';
import Input from '../../components/Input';
import Button from '../../components/Button';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../providers/auth';
import './style.css';

const Page02 = () => {
    const [movieTheater, setMovieTheater] = useState('');
    const authContext = useContext(AuthContext);

    const getAndwers = (e) => {
        setMovieTheater(e.target.value);
    }

    const handleSetLaunchYear = (e) => {
        authContext.setLaunchYear(e.target.value);
    }

    return (
        <div className="page--02">
            <h2>Assistiu o filme no cinema? </h2>
            <label>Sim <Input type="radio" value={'sim'} onChange={getAndwers} checked={movieTheater === 'sim'} /></label>

            <label>Não <Input type="radio" value={'nao'} onChange={getAndwers} checked={movieTheater === 'nao'}/></label>
            <br />

            {movieTheater === 'sim' &&
                <div>
                    <h2>Em qual cinema?</h2>
                    <Input type="text" onChange={handleSetLaunchYear} />
                </div>
            }

            {movieTheater === 'nao' &&
                <div>
                    <h2>Prefere streaming ou cinema? </h2>
                    <Input type="text" onChange={handleSetLaunchYear} />
                </div>
            }

            <div>
                <Link to="/"><Button title="Voltar" /></Link>
                <Link to="/page03"><Button title="Próximo"  disabled={!authContext.launchYear} /></Link>
            </div>

        </div>
    )
}
export default Page02;