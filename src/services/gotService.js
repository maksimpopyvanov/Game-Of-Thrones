export default class GotService {

    constructor() {
        this._apiBase = 'https://www.anapioficeandfire.com/api'
    }

    getResource = async (url) => {
        const res = await fetch(`${this._apiBase}${url}`);
        
        if(!res.ok) {
            throw new Error(`Coul not fetch ${url}, received ${res.status}`);
        }

        return await res.json();
    }

    getAllCharacters = async () => {
        const characters = await this.getResource(`/characters?page=20&pageSize=10`);
        return characters.map(char => this._transformChar(char)
        );
    }

    getCharacter = async (id) => {
        const char = await this.getResource(`/characters/${id}`);
        return this._transformChar(char);
    }

    getAllBooks = async () => {
        return this.getResource(`/books`);
    }

    getBook = async (id) => {
        return this.getResource(`/books/${id}`);
    }

    getAllHouses = async () => {
        return this.getResource(`/houses`);
    }

    getHouse = async (id) => {
        return this.getResource(`/houses/${id}`);
    }

    _transformChar(char) {
        const reg = /\d/,
              url = char.url,
              id = url.slice(url.search(reg));
        return {
            id: id,
            name: char.name,
            gender: char.gender,
            born: char.born,
            died: char.died,
            culture: char.culture
        }
    }
}