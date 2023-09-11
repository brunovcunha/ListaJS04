n = parseInt(prompt("Digite um numero inteiro: ")); 

numeroAleatorio = Math.round(Math.random() * n - 1) + 1;

document.write(`<h1>Numero aleatório entre 1 e ${n}</h1>`);
document.write(`<h2>Seu numero aleatório é</h2>`);
document.write(`<h3>${numeroAleatorio}</h3>`);