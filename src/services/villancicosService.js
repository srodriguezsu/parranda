import axios from 'axios';

export const API_URL = 'http://localhost:3456';

export async function getVillancicos() {
    const response = await axios.get( API_URL + '/villancicos');
    // console.log(response.data);
    return response.data;
}