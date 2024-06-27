import { nanoid } from 'nanoid';
import clientPromise from '../../utils/mongodb';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { url } = req.body;
    const shortId = nanoid(7);
    const shortUrl = `${req.headers.host}/api/${shortId}`;

    try {
      const client = await clientPromise;
      const db = client.db();

      const urlsCollection = db.collection('urls');
      await urlsCollection.insertOne({ shortId, url });

      res.status(200).json({ shortUrl });
    } catch (error) {
      console.error('Error connecting to MongoDB', error);
      res.status(500).json({ message: 'Internal Server Error' });
    }
  } else {
    res.status(405).json({ message: 'Method Not Allowed' });
  }
}
