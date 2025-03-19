// pages/api/news/health.ts
import type { NextApiRequest, NextApiResponse } from 'next';

const API_KEY = 'ce5c3f238cee40cf9ce20c1bb382f74c';
const NEWS_API_URL = 'https://newsapi.org/v2/top-headlines';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== 'GET') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  try {
    // Add more detailed logging
    // console.log('Fetching news from:', `${NEWS_API_URL}?country=us&category=health&apiKey=${API_KEY}`);
    
    const response = await fetch(
      `${NEWS_API_URL}?country=us&category=health&apiKey=${API_KEY}`,
      {
        headers: {
          'Authorization': `Bearer ${API_KEY}`,
          'Content-Type': 'application/json',
        },
      }
    );
    
    // Log the response status
    console.log('News API response status:', response.status);
    
    const data = await response.json();
    console.log('News API response:', data);

    if (data.status === 'error') {
      throw new Error(data.message || 'Failed to fetch news');
    }

    // Set CORS headers
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET');
    
    return res.status(200).json(data);
  } catch (error) {
    console.error('News API Error:', error);
    return res.status(500).json({ 
      status: 'error',
      message: error instanceof Error ? error.message : 'Failed to fetch news data'
    });
  }
}