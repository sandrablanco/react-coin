import {Link} from 'react-router-dom';
import {useState, useEffect} from 'react';
const API_KEY = import.meta.env.VITE_API_KEY;

function Favorites() {
    const [favorites, setFavorites] = useState([]);
    const [coins, setCoins] = useState([]);
    useEffect(() => { //leer favs en localStorage
        const storedFavorites = localStorage.getItem('favorites');
        if (storedFavorites) {
            setFavorites(JSON.parse(storedFavorites));
        }
    }, []);

    useEffect(() => { //obtener info de cada fav
        const fetchFavoriteCoins = async () => {
            const coinsData = await Promise.all(
                favorites.map(async (id) => {
                    const res = await fetch(`https://rest.coincap.io/v3/assets/${id}?apiKey=${API_KEY}`);
                    const data = await res.json();
                    return data.data;
                })
            );
            setCoins(coinsData);
        };
        if (favorites.length > 0) {
            fetchFavoriteCoins();
        }
    }, [favorites]);
    return (
        <>
        <div>
            <h1>Mis cripto favs</h1>
            {coins.length === 0 ? (
                <p>No hay criptomonedas favoritas guardadas</p>
            ) : (
                <ul>
                    {coins.map((coinData) => (
                        <li key={coinData.id}>
                            <Link to={`/coin/${coinData.id}`} />
                               <h2>{coinData.name}</h2>
                            <p>Precio: ${parseFloat(coinData.priceUsd).toFixed(2)}</p>
                        </li>
                    ))}
                </ul>
            )}
        </div>
        </>
    );
}

export default Favorites;