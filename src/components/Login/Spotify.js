const authEndPoint = "https://accounts.spotify.com/authorize";

const redirectUrl = "http://localhost:3000/";

const clientId = "513de1a51bf648318c6ce7ca196548a1";

const scopes = [
    "user-read-currently-playing",
    "user-read-recently-played",
    "user-read-playback-state",
    "user-top-read",
    "user-modify-playback-state"
]

export const getTokenFromUrl = () => {
    return window.location.hash
        .substring(1) // remove the first carachter ("#")
        .split('&') // split element at any "&" and push them into an array {(aafhj&asdfa&sadad) => ["aafhj", "asdfa", "sadad"]}
        .reduce((initial, item) => {
            let parts = item.split('=');
            initial[parts[0]] = decodeURIComponent(parts[1]);

            return initial;
        }, {})
}

export const loginUrl = `${authEndPoint}?client_id=${clientId}&redirect_uri=${redirectUrl}&scope=${scopes.join("%20")}&response_type=token&show_dialog=true`;