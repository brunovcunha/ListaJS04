document.write(`<h1>Ordem de apresentação do grupo</h1>`)

quant = prompt("Digite o numero de participantes do grupo: ");

participantes = [];

for(i = 0; i < quant; i++){
    participantes.push(prompt("Digite o nome da " + (i + 1) + "° pessoa: "));
}

for (i = 0; i < quant; i++) {
    indice = Math.round(Math.random() * (participantes.length - 1));
    document.write(`<h3>${i + 1}° ${participantes[indice]}</h3>`);
    participantes.splice(indice, 1);
}
