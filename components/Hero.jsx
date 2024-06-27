import { useState } from 'react';
import axios from 'axios';

export default function Hero() {
  const [url, setUrl] = useState("");
  const [shortUrl, setShortUrl] = useState("");
  const [error, setError] = useState("");

  const handleShortenUrl = async () => {
    try {
      const response = await axios.post("/api/shorten", { url });
      setShortUrl(response.data.shortUrl);
    } catch (error) {
      setError("Failed to shorten URL");
    }
  };

  const handleCopyUrl = () => {
    navigator.clipboard.writeText(`http://${shortUrl}`);
    alert("Copied to clipboard!");
  };

  return (
    <main className="flex flex-col items-center justify-center flex-1 py-4">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">URL Shortener</h1>
        <div className="flex items-center space-x-2 mb-4">
          <input
            type="text"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            placeholder="Enter URL to shorten"
            className="border border-gray-300 px-3 py-2 rounded-md w-80"
          />
          <button
            onClick={handleShortenUrl}
            className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md"
          >
            Shorten
          </button>
        </div>
        {shortUrl && (
          <div className="flex flex-col items-center">
            <p className="text-green-600">
              Shortened URL:{" "}
              <a
                href={`http://${shortUrl}`}
                target="_blank"
                rel="noopener noreferrer"
                className="underline"
              >
                {shortUrl}
              </a>
            </p>
            <div className="mt-4 space-x-2">
              <button
                onClick={handleCopyUrl}
                className="bg-gray-200 hover:bg-gray-300 text-gray-800 px-4 py-2 rounded-md"
              >
                Copy Shortened URL
              </button>
            </div>
          </div>
        )}
        {error && <p className="text-red-600 mt-2">{error}</p>}
      </div>
    </main>
  );
}
