import Kartya from "./kartya.js"

export default class Kartyak{

    #lista = []

    constructor(lista, szuloElem) {
        this.#lista = lista
        this.szuloElem = szuloElem
        this.#kartyakKi()
    }

    #kartyakKi(){
        this.#lista.forEach((kutya) => {
            new Kartya(kutya, this.szuloElem)
        })
    }
}