
document.write("<h1>Sorteio de Cartas:</h1>");
indice = Math.round(Math.random() * 26) + 1;
document.write(`<img src="../ex11/cartas/carta${indice}.png" alt="">`);