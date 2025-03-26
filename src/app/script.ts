const BASE_URL = 'https://api.dictionaryapi.dev/api/v2/entries/en'

async function fetchData<T>(word: string) : Promise<T> {
    const response = await fetch(`${BASE_URL}/${word}`);

    if(!response.ok) {
        throw new Error(response.statusText);
    }

    return await response.json() as Promise<T>
}