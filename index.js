import { cimKi } from "./fuggvenyek.js";
import { kutyaKi } from "./fuggvenyek.js";
import { kLista } from "./adatok.js";

//cimKi(cim);
kLista.forEach(kutya => {
    kutyaKi(kutya);
})

const gombElem = $(".kivalaszt")
gombElem.on("click", (event) => {
    console.log(event.target);
});
