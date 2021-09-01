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
        const books = await this.getResource(`/books`);
        return books.map(book => this._transformBook(book));
    }

    getBook = async (id) => {
        const book = await this.getResource(`/books/${id}`);
        return this._transformBook(book);
    }

    getAllHouses = async () => {
        const houses = await this.getResource(`/houses`);
        return houses.map(house => this._transformHouse(house));
    }

    getHouse = async (id) => {
        const house = await this.getResource(`/houses/${id}`);
        return this._transformHouse(house);
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

    _transformBook(book) {
        const reg = /\d/,
              url = book.url,
              id = url.slice(url.search(reg));
        return {
            name: book.name,
            id: id,
            authors: book.authors,
            publisher: book.publisher,
            country: book.country
        }
    }

    _transformHouse(house) {
        const reg = /\d/,
              url = house.url,
              id = url.slice(url.search(reg));
        return {
            name: house.name,
            id: id,
            region: house.region,
            words: house.words
        }
    }
}