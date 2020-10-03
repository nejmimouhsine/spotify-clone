import React from 'react';
import { loginUrl } from './Spotify';

import './Login.style.scss';

const Login = () => {
    return (
        <div className="login">
            <img 
                className="login__img"
                src="https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/Spotify_Logo_CMYK_White.png"
                alt="Spotify Logo"
            />
            <a href={loginUrl} className="login__link">Login With Spotify</a>
        </div>
    )
}

export default Login;