import axios, { AxiosResponse } from 'axios';

/**
 * @param {number} limit - Limit of songs to fetch from Billboard's top 100 (set to 10 by default)
 * @returns {JSON} - Array of songs
 */
export async function endpoint(limit: number = 10): Promise<any> {
  let response: AxiosResponse<any>;

  try {
    response = await axios.get(`https://euphoric.vercel.app/api/music/top?limit=${limit}`);
  } catch (error) {
    console.error('Error:', error);
    throw new Error('Failed to fetch data from the endpoint.');
  }

  return response.data;
}
