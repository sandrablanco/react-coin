import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
const API_KEY = import.meta.env.VITE_API_KEY;


function Home() {   
    const [coins, setCoins] = useState([]);
    useEffect(() => {
        fetch(` https://rest.coincap.io/v3/assets?apiKey=${API_KEY}`)
            .then((response) => response.json())
            .then((data) => setCoins(data.data))//nos devuelve un array donde coins es objeto
            .catch((error) => console.error("Error fetching coins:", error));
        }, []);       
    return (
        <>
        <div>
            <h1>Criptomonedas</h1>
             {/*metemos ternario si array vacio mostrar cargando sino devuelveme lo otro*/}
              {coins.length === 0 ? (
        <p>Cargando...</p>
      ) : (
            <ul>
                {coins.map((coin) => (
                    <li key={coin.id}>
                        <Link to={`/coin/${coin.id}`}>{coin.name}</Link>- Valor: ${parseFloat(coin.priceUsd).toFixed(2)} {/*convertimos string en numero y con 2 decimals*/}
                    </li>
                ))}
            </ul>)}
            
        </div>
        </>
    );
}

export default Home;