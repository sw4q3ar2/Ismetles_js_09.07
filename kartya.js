export default class Kartya{

    #kutya = {}
    
    constructor(kutya, szuloElem) {
        this.#kutya = kutya
        this.szuloElem = szuloElem
        this.#kutyaKi()
        this.gombElem = $(".kivalaszt:last")
        this.#esemenyKezelo()
    }

    #esemenyKezelo(){
        this.gombElem.on("click", (event) => {
            console.log(event.target);
        });
    }

    #kutyaKi(){
        this.szuloElem.append(`<div class="col-lg-4 col-md-6">
                            <div class="card">
                                <h3>${this.#kutya.nev}</h3>
                                <p>${this.#kutya.kor}<p>
                                <p>${this.#kutya.nem}</p>
                                <button class="kivalaszt btn btn-success">Select<button>
                            </div>
                        </div>`)
    }

}