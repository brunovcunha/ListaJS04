document.write(`<h1>Ordem de apresentação do grupo</h1>`)

quant = prompt("Informe a quantidade de participantes do grupo: ");

participante = [];
for (i = 1; i <= quant; i++) {
    participante[i] = prompt("Digite o nome do " + i + "° participante");
}

for (i = 0; i < quant; i++) {
    indice = Math.round(Math.random() * (participante.length - 1)) + 1;
    document.write(`<h3>${i + 1}° ${participante[indice]}</h3>`);
    participante.splice(indice, 1);
}
