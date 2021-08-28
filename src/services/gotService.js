export default class GotService {

    constructor() {
        this._apiBase = 'https://www.anapioficeandfire.com/api'
    }

    async getResource(url) {
        const res = await fetch(`${this._apiBase}${url}`);
        
        if(!res.ok) {
            throw new Error(`Coul not fetch ${url}` + `, received ${res.status}`);
        }

        return await res.json();
    }

    getAllCharacters() {
        this.getResource(`/characters?page=20&pageSize=10`);
    }

    getCharacter(id) {
        this.getResource(`/characters/${id}`);
    }

    getAllBooks() {
        this.getResource(`/books`);
    }

    getBook(id) {
        this.getResource(`/books/${id}`);
    }

    getAllHouses() {
        this.getResource(`/houses`);
    }

    getHouse(id) {
        this.getResource(`/houses/${id}`);
    }

}

const got = new GotService();