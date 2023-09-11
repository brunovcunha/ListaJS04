n = parseInt(prompt("Digite um numero inteiro: ")); 

m =parseInt(prompt("Digite outro numero inteiro: ")); 

numeroAleatorio = Math.round(Math.random() * (m - n)) + n;

document.write(`<h1>Numero aleatório entre ${n} e ${m}</h1>`)
document.write(`<h2>Seu numero aleatório é</h2>`);
document.write(`<h3>${numeroAleatorio}</h3>`);