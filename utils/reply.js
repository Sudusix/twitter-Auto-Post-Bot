import { twitterClient } from './twitter.js';

export default async function autoReply() {
  const search = await twitterClient.v2.search("crypto -is:retweet", { max_results: 5 });

  for (const t of search.data) {
    await twitterClient.v2.reply("🚀 Latest trend coming soon!", t.id);
  }
}