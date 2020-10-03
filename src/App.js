import React, { useEffect, useState } from 'react';
import Login from './components/Login/Login.component';
import { getTokenFromUrl } from './components/Login/Spotify';
import SpotifyWebApi from 'spotify-web-api-js';
import Player from './components/Player/Player.component';
import { useDataLayerValue } from './components/DataLayer/DataLayer.component';

import './App.css';

const spotify = new SpotifyWebApi(); 

function App() {
  const [token, setToken] = useState(null);
  const [{ user }, dispatch] = useDataLayerValue();

  useEffect(() => {
    const hash = getTokenFromUrl();
    window.location.hash = "";
    const _token = hash.access_token;

    if (_token) {
      setToken(_token);

      dispatch ({
        type: 'SET_TOKEN',
        token: _token,
      });

      spotify.setAccessToken(_token);

      spotify.getMe().then((user) => {
        dispatch ({
          type: 'SET_USER',
          user: user,
        });
      });
    }

    console.log("I have a token", _token);
  }, []);

  return (
    <div>
      {
        // token ? (
          <Player spotify={spotify} />
        // ) : (
          // <Login />
        // )
      }
    </div>
  );
}

export default App;
