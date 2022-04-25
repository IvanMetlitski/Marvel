class MarvelService {
    _apiBase = 'https://gateway.marvel.com:443/v1/public/';
    _apiKey = 'apikey=246544d72410cca365dd3131078cac1a';
    getResource =async(url)=> {
        let res = await fetch(url);

        if (!res.ok) {
            throw new Error (`Couldn't fetch ${url}, status: ${res.status}`);
        }
        return await res.json();
    }

    getAllCharacters =()=> {
        return this.getResource(`${this._apiBase}characters?limit=9&offset=213&${this._apiKey}`);
    }
    getCharacter =(id)=> {
        return this.getResource(`${this._apiBase}characters/${id}?${this._apiKey}`);
    }
}
export default MarvelService;