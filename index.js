const raffle = require('@tapmorales/raffle')
const results = require('./respostas_pesquisa')


let sortudos = []


while(sortudos.length < 60){
    let numeroSorteado = raffle.sort(1, results.length);

    let item = results.splice(numeroSorteado - 1, 1)
    sortudos.push(item[0]);
}

const $output = document.querySelector('#output');

sortudos.forEach( (item, i) => {
    $output.innerHTML += i + ' - ' + item.Nome + '<br>'
} )






