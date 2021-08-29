export default class GotService {

    constructor() {
        this._apiBase = 'https://www.anapioficeandfire.com/api'
    }

    async getResource(url) {
        const res = await fetch(`${this._apiBase}${url}`);
        
        if(!res.ok) {
            throw new Error(`Coul not fetch ${url}, received ${res.status}`);
        }

        return await res.json();
    }

    async getAllCharacters() {
        const characters = await this.getResource(`/characters?page=20&pageSize=10`);
        return characters.map(char => this._transformChar(char)
        );
    }

    async getCharacter(id) {
        const char = await this.getResource(`/characters/${id}`);
        return this._transformChar(char);
    }

    getAllBooks() {
        return this.getResource(`/books`);
    }

    getBook(id) {
        return this.getResource(`/books/${id}`);
    }

    getAllHouses() {
        return this.getResource(`/houses`);
    }

    getHouse(id) {
        return this.getResource(`/houses/${id}`);
    }

    _transformChar(char) {
        return {
            name: char.name,
            gender: char.gender,
            born: char.born,
            died: char.died,
            culture: char.culture
        }
    }
}