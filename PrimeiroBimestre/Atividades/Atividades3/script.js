const ul = document.querySelector(".lista");


function adicionar(evento){
    evento.preventDefault()


    if (evento.target[0].value === "") {
        alert("Coloque uma atividade diaria!")
        return;
    }

const atividades = "Atividades:" + evento.target[0].value

console.log(evento.target)
console.log(evento.target[0].value)

const li = document.createElement("li");
li.textContent = atividades;

ul.appendChild(li);

evento.target[0].value = "";

}

function remover(elemento){
    elemento.remove();
}


ul.addEventListener("click" , (evento) => {
    remover(evento.target);
})
