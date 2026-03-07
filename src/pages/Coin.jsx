import {useState, useEffect} from 'react';
import {useParams} from 'react-router-dom';
 const API_KEY = import.meta.env.VITE_API_KEY;

function Coin() {
    const [coin, setCoin] = useState(null);
    const {id} = useParams();
    useEffect(() => {
        fetch(`https://rest.coincap.io/v3/assets/${id}?apiKey=${import.meta.env.VITE_API_KEY}`)
            .then((response) => response.json())
            .then((data) => setCoin(data.data));
    }   , [id]);
    //funcion para añadir a favoritos
    const addFavorites = () => {
        const storedFavorites = localStorage.getItem('favorites');//Lee favs guardadps
        const favorites = storedFavorites ? JSON.parse(storedFavorites) : [];//si hay favs lo convertimos en array
        if (!favorites.includes(coin.id)) { //si no esta el id de la moneda en favs lo añadimos
            favorites.push(coin.id);
            localStorage.setItem('favorites', JSON.stringify(favorites));//Guardamos el array actualizado en localStorage
        }
    };
    const deleteFavorites = () => {
        const storedFavorites = localStorage.getItem('favorites');//lee los favs guardados
        const favorites = storedFavorites ? JSON.parse(storedFavorites) : [];//Si hay favs lo convertimos en  array
        const updatedFavorites = favorites.filter((favId) => favId !== coin.id); //filtramos el array para eliminar el id de la moneda
        localStorage.setItem('favorites', JSON.stringify(updatedFavorites));//actualizamos el localStorage con el array actualizado sin la moneda eliminada
    };
    if (!coin) {
        return (
            <p>Loading... </p>)}
            return (
        <div>
        <p>{coin.name}</p>
        <p>Rank: {coin.rank}</p>
        <p>Symbol: {coin.symbol}</p>
        <p>Price (USD): ${parseFloat(coin.priceUsd).toFixed(2)}</p>
        <button onClick={addFavorites}>Add to Favorites</button>
        <button onClick={deleteFavorites}>Delete from Favorites</button>
        </div>
        );

    }
}

export default Coin;