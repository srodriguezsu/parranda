    import axios from 'axios';

export const API_URL = 'http://localhost:3456';

export async function getRecipes() {
    const response = await axios.get( API_URL + '/recetas');
    console.log(response.data);
    return response.data;
}
export async function createRecipe(data) {
    const response = await axios.post(`${API_URL}/recetas`, data);
    return response.data;
}