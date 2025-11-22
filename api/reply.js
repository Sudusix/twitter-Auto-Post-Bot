import autoReply from '../utils/reply.js';
export default async function handler(req, res) {
  await autoReply();
  res.status(200).send("Reply OK");
}