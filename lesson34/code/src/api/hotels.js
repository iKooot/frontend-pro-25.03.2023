import { get } from './httpClient.js';

export async function getHotels(signal) {
  return await get('hotels', signal);
}
