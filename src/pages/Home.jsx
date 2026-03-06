import { useState, useEffect } from "react";
import { Link } from "react-router-dom";


function Home() {   
    const [coins, setCoins] = useState([]);
    useEffect(() => {
        fetch("https://api.coingecko.com/api/v3/coins")
            .then((response) => response.json())
            .then((data) => setCoins(data));
    });
    return (
        <>
        <div>
            <h1>Criptomonedas</h1>
            <ul>
                {coins.map((coin) => (
                    <li key={coin.id}>
                        <Link to={`/coin/${coin.id}`}>{coin.name}</Link>
                    </li>
                ))}
            </ul>
        </div>
        </>
    );
}
export default Home;