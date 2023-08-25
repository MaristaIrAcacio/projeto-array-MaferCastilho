let nomes = [];
let qtdeNomes = 0;

function verificar() {
    qtdeNomes = parseInt(document.getElementById('qtdeNomes').value);
    console.log(qtdeNomes);
    if (qtdeNomes != 0) {
         window.location.href = 'exibenomes.html';
         document.getElementById('qtde').innerHTML = "Você escolheu " + qtdeNomes + " nomes";
         for (let qt = 0; qt < qtdeNomes; qt++) {
             nomes[qt] = prompt("informe um nome");
             console.log(nomes);
         }
    } else {
         alert("Informe a quantidade de nomes a ser cadastrado");
    }
}

function gerar() {
    let lista = document.getElementById('lista');

    // for(var i = 0; i < nomes.length; i++){
    //     let item = document.createElement('li');
    //     item.appendChild(document.createTextNode(nomes[i]));
    //     lista.appendChild(item);
}
// function gerar(){
//     location.replace("index.html", "_self");
// }