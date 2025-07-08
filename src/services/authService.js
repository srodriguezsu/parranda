import axios from 'axios';

export const API_URL = 'http://localhost:3456';

export async function signup(usuario) {
    const response = await axios.post(`${API_URL}/signup`, usuario);
    return response.data;
}

export async function login(usuario) {
    const response = await axios.post(`${API_URL}/login`, usuario);

    return response.data;
}

export async function getSelf(token) {
    const response = await axios.get(`${API_URL}/self`, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    });

    return response.data;
}

