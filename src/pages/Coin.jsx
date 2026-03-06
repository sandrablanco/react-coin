import {useState, useEffect} from 'react';
import {useParams} from 'react-router-dom';
 const API_KEY = import.meta.env.VITE_API_KEY;

function Coin() {
    const [coin, setCoin] = useState(null);
    const {id} = useParams();
    useEffect(() => {
        fetch(`https://rest.coincap.io/v3/assets/${id}?apiKey=${import.meta.env.VITE_API_KEY}`)
            .then((response) => response.json())
            .then((data) => setCoin(data));
    }   , [id]);
    if (!coin) {
        return (
        <div>Loading...
        <p>{coin.name}</p>
        <p>Rank: {coin.rank}</p>
        <p>Symbol: {coin.symbol}</p>
        </div>
        );

    }
}
export default Coin;