import clientPromise from '../../utils/mongodb';

export default async function handler(req, res) {
  const { shortId } = req.query;

  try {
    const client = await clientPromise;
    const db = client.db();

    const urlsCollection = db.collection('urls');
    const result = await urlsCollection.findOne({ shortId });

    if (result) {
      res.redirect(result.url);
    } else {
      res.status(404).json({ message: 'URL not found' });
    }
  } catch (error) {
    console.error('Error connecting to MongoDB', error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
}
