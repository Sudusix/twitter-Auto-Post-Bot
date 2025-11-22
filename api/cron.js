import tweetCrypto from '../utils/tweet.js';
export default async function handler(req, res) {
  await tweetCrypto();
  res.status(200).send("Cron OK");
}