
document.write("<h1>Joquempô!</h1>");

jogador01 = Math.round(Math.random() * 2) + 1;

jogador02 = Math.round(Math.random() * 2) + 1;

document.write(`<div class="jogador01"><p>Jogador01</p><img src="img/0${jogador01}-mao.png" alt=""></div>`);

document.write(`<div><img src="img/0${jogador02}-mao.png" alt=""><p>Jogador02</p></div>`);

if(jogador01 == 1 && jogador02 == 2) {
    document.write("<h3>Jogador 01 VENCEU!</h3>")
}

if(jogador02 == 1 && jogador01 == 2) {
    document.write("<h3>Jogador 02 VENCEU!</h3>")
}

if(jogador01 == 2 && jogador02 == 3) {
    document.write("<h3>Jogador 01 VENCEU!</h3>")
}

if(jogador02 == 2 && jogador01 == 3) {
    document.write("<h3>Jogador 02 VENCEU!</h3>")
}

if(jogador01 == 3 && jogador02 == 1) {
    document.write("<h3>Jogador 01 VENCEU!</h3>")
}

if(jogador02 == 3 && jogador01 == 1) {
    document.write("<h3>Jogador 02 VENCEU!</h3>")
}

if(jogador01 == jogador02) {
    document.write("<h3>EMPATE!</h3>")
}