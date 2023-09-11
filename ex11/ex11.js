
document.write("<h1>Cartas Sorteadas:</h1>");

balaio = [];
for (i=1; i<=27; i++) balaio.push(i);

document.write("<p>Cartas do Jogador 1</p>");
for (i=0; i<3;i++) {
    indice = Math.round(Math.random()*balaio.length-1);
    document.write(`<img src="cartas/carta${balaio[indice]}.png" alt="">`);
    balaio.splice(indice,1);
}


document.write("<p>Cartas do Jogador 2</p>");
for (i=0; i<3;i++) {
    indice = Math.round(Math.random()*balaio.length-1);
    document.write(`<img src="cartas/carta${balaio[indice]}.png" alt="">`);
    balaio.splice(indice,1);
}

document.write("<p>Cartas do Jogador 3</p>");
for (i=0; i<3;i++) {
    indice = Math.round(Math.random()*balaio.length-1);
    document.write(`<img src="cartas/carta${balaio[indice]}.png" alt="">`);
    balaio.splice(indice,1);
}

document.write("<p>Cartas do Jogador 4</p>");
for (i=0; i<3;i++) {
    indice = Math.round(Math.random()*balaio.length-1);
    document.write(`<img src="cartas/carta${balaio[indice]}.png" alt="">`);
    balaio.splice(indice,1);
}