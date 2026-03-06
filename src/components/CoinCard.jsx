import styles from './CoinCard.modules.css';
      

function CoinCard({ coin }) {
  return (
   <div className={styles.card}>
   <h2 className={styles.name}>{coin.name} ({coin.symbol})</h2>
   <p className={styles.rank}>Rank: {coin.rank}</p>
   <p className={styles.price}>Price (USD): ${parseFloat(coin.priceUsd).toFixed(2)}</p>
</div>
  );
}

export default CoinCard;