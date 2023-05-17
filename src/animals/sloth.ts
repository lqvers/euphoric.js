import axios, { AxiosResponse } from 'axios';

/**
 * @param {boolean} raw - Indicates whether to return raw image or JSON.
 * @returns {Promise<any>} - A Promise that resolves to the response data.
 */
export async function endpoint(raw = false): Promise<any> {
  let response: AxiosResponse<any>;

  try {
    response = await axios.get(`https://euphoric.vercel.app/api/animals/sloth?raw=${raw}`, {
      responseType: raw ? 'arraybuffer' : 'json',
    });
  } catch (error) {
    console.error('Error:', error);
    throw new Error('Failed to fetch data from the endpoint.');
  }

  if (raw) {
    return response.data;
  } else {
    return response.data.image;
  }
}
