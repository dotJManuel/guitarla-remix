
export async function getGuitarras() {
    const respuesta = await fetch(`${process.env.API_URL}/guitarras`);
    return await respuesta.json()
}