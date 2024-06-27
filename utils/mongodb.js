import { MongoClient } from 'mongodb';

const uri = process.env.MONGODB_URI;

if (!uri) {
  throw new Error('Please define the MONGODB_URI environment variable inside .env.local');
}

let client;
let clientPromise;

if (process.env.NODE_ENV === 'development') {
  // Connect to local MongoDB instance in development
  client = new MongoClient(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  clientPromise = client.connect();
} else {
  // Connect to MongoDB Atlas or remote MongoDB instance in production
  client = new MongoClient(uri);
  clientPromise = client.connect();
}

export default clientPromise;
