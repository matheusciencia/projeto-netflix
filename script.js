/* SELETORES

documento = HTML

getElementById -> Trás UM elemento pelo ID
getElementByClassName -> Trás TODOS os elementos com essa classe
getElementByTagName -> Trás TODOS os elementos com essa TAG
getElementByName -> Trás TODOS os elementos com esse NAME

querySelector -> Trás UM elemento, o PRIMEIRO que encontrar
querySelectorAll -> Trás TODOS os elementos que encontrar

ex:

const element = document.getElementByClassName
const element = document.getElementByTagName

---

    *SELECIONAR/ALTERAR TEXTOS

ex: const () =

    element.textContent -> SÓ TEXTO
    element.innerText -> SÓ CSS
    element.innerHTML -> TUDO / HTML


*/

const input = document.getElementById("email-input")

console.log(input)