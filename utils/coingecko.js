import axios from 'axios';

export async function getTrending() {
  const res = await axios.get("https://api.coingecko.com/api/v3/search/trending");
  return res.data.coins[0].item;
}