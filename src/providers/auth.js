import React, { useState } from 'react';

export const AuthContext = React.createContext({});

export const AuthProvider = (props) => {
    const [name, setName] = useState('');
    const [filmFavorite, setFilmFavorite] = useState('');
    const [launchYear, setLaunchYear] = useState('');
    const [movieOrSeries, setMovieOrSeries] = useState('');

    return (
        <AuthContext.Provider value={{
            name, setName,
            filmFavorite, setFilmFavorite,
            launchYear, setLaunchYear,
            movieOrSeries, setMovieOrSeries
        }}>
            {props.children}
        </AuthContext.Provider>
    )
}