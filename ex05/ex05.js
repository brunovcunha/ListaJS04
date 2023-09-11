

idade = prompt("Informe a idade media dos participantes: ");

while(idade > 12 && idade < 60){
    alert("O sorteio de almoço só é valido para excursão de idosos(60+) ou crianças(-12)");
    idade = prompt("Informe a idade media dos participantes: ");
}

quant = prompt("Informe a quantidade de participantes da excursão ");

participante = [];
for (i = 1; i <= quant; i++) {
    participante[i] = prompt("Digite o nome do " + i + "° participante");
}

indice = Math.round(Math.random() * (participante.length - 1)) + 1;
document.write(`<h3> Parabéns ${participante[indice].toUpperCase()} você ganhou um almoço!</h3>`);

