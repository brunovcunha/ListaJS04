
document.write("<h1>Cartas Sorteadas:</h1>");

balaio = [];
for (i=1; i<=27; i++) balaio.push(i);


for (j=0; j<3;j++) {
    document.write(`<p>Cartas do Jogador ${j + 1}</p>`);
    for(i=0; i<3;i++){
    indice = Math.round(Math.random()*balaio.length-1);
    document.write(`<img src="cartas/carta${balaio[indice]}.png" alt="">`);
    balaio.splice(indice,1);
    }
    
}
