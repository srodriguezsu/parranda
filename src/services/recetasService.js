export async function getRecipes() {
    const recipes = [
        {
            nombre: "Sancocho de Gallina",

            instrucciones: "Cocinar la gallina con las especias, añadir los vegetales y cocinar hasta que estén suaves.",
            autor: "Chef María",
            imagen: "https://images.pexels.com/photos/16355469/pexels-photo-16355469/free-photo-of-vegetales-verduras-mano-comida.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            valoracion: 4.8,
        },
        {
            nombre: "Buñuelos",

            instrucciones: "Mezclar los ingredientes, formar bolitas y freírlas en aceite caliente.",
            autor: "Chef Pedro",
            imagen: "https://media.istockphoto.com/id/1739697365/photo/traditional-colombian-bu%C3%B1uelo-christmas-atmosphere-candles.jpg?s=2048x2048&w=is&k=20&c=zGAktFgFMRFTol1eiF3r_FyUmoNd7l9Iwf2ynrhdzHw=",
            valoracion: 4.7,
        },
        {
            nombre: "Natilla",

            instrucciones: "Cocinar la leche con maicena y azúcar, añadir canela y coco rallado, dejar enfriar.",
            autor: "Chef Ana",
            imagen: "https://images.pexels.com/photos/14732341/pexels-photo-14732341.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            valoracion: 4.9,
        },
        {
            nombre: "Tamales",

            instrucciones: "Preparar la masa, rellenar con carne y verduras, envolver en hojas de plátano y cocinar al vapor.",
            autor: "Chef Luis",
            imagen: "https://images.pexels.com/photos/14179987/pexels-photo-14179987.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            valoracion: 4.6,
        },
        {
            nombre: "Empanadas",

            instrucciones: "Preparar la masa, rellenar con carne y papa, cerrar y freír en aceite caliente.",
            autor: "Chef Sofía",
            imagen: "https://images.pexels.com/photos/230125/pexels-photo-230125.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            valoracion: 4.4,
        },
    ];
    return recipes;
}