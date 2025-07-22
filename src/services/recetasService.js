    import axios from 'axios';

export const API_URL = 'http://localhost:3456';

export async function getRecipes(token) {
    const response = await axios.get( API_URL + '/recetas', {
        headers: {
            Authorization: `Bearer ${token}`
        }
    });
    console.log(response.data);
    return response.data;
}

export async function getRecipeById(id) {
    const response = await axios.get(API_URL + '/recetas/' + id);
    return response.data;
}


export async function createRecipe(recipe, token) {
    const response = await axios.post(API_URL + '/recetas', recipe, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    });
    return response.data;
}

export async function updateRecipeById(id, recipe, token) {
    const response = await axios.put(API_URL + '/recetas/' + id, recipe, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    });
    return response.data;
}

export async function deleteRecipe(id, token) {
    const response = await axios.delete(API_URL + '/recetas/' + id,
        {
            headers: {
                Authorization: `Bearer ${token}`
            }
        });
    return response.data;
}

export async function likeReceta(id, token) {
    console.log(API_URL + '/recetas/' + id + '/like');
    const response = await axios.post(API_URL + '/recetas/' + id + '/like', {}, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    });
    return response.data;
}

export async function dislikeReceta(id, token) {
    const response = await axios.post(API_URL + '/recetas/' + id + '/dislike', {}, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    });
    return response.data;
}