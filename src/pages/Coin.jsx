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
    if (!coin) {
        return (
            <p>Loading... </p>)}
            return (
        <div>
        <p>{coin.name}</p>
        <p>Rank: {coin.rank}</p>
        <p>Symbol: {coin.symbol}</p>
        <p>Price (USD): ${parseFloat(coin.priceUsd).toFixed(2)}</p>
        </div>
        );

    }

export default Coin;