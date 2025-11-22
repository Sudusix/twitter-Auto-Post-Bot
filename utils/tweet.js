import { twitterClient } from './twitter.js';
import { getTrending } from './coingecko.js';

export default async function tweetCrypto() {
  const coin = await getTrending();

  const text = `🔥 Trending Crypto: ${coin.name} (${coin.symbol})
💵 BTC Price: ${coin.price_btc}`;

  await twitterClient.v2.tweet(text);
}