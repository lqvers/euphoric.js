import axios, { AxiosResponse } from 'axios';

/**
 * @param {string} song - Song you wish to grab information about via. Genius
 * @returns {JSON} - JSON Object
 */
export async function endpoint(song: string): Promise<any> {
  let response: AxiosResponse<any>;

  try {
    response = await axios.get(`https://euphoric.vercel.app/api/music/genius?song=${song}`);
  } catch (error) {
    console.error('Error:', error);
    throw new Error('Failed to fetch data from the endpoint.');
  }

  return response.data;
}
