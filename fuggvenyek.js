export function cimKi(cim){
    const tag = document.querySelector("header");
    tag.append(`${cim}`)
}

export function kutyaKi(kutya){
    const divElem = $(".tartalomArc");
    divElem.append(`<div class="col-lg-4 col-md-6">
                        <div class="card">
                            <h3>${kutya.nev}</h3>
                            <p>${kutya.kor}<p>
                            <p>${kutya.nem}</p>
                            <button class="kivalaszt btn btn-success">Select<button>
                        </div>
                    </div>`)
}
