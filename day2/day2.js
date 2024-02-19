const nome = prompt("Qual é o seu nome?");
const idade = prompt("Quantos anos você tem?");
const linguagem = prompt("Qual linguagem de programação você está estudando?");

console.log(`Olá, ${nome}, você tem ${idade} anos e já está aprendendo ${linguagem}.`);

setTimeout(() => {
    const gosto = prompt(`Você gosta de estudar ${linguagem}? Responda com 1 para SIM ou 2 para NÃO.`);
    if (gosto === "1") {
        console.log("Muito bom! Continue estudando e você terá muito sucesso.");
    } else if (gosto === "2") {
        console.log("Ah, que pena... Já tentou aprender outras linguagens?");
    } else {
        console.log("Opção inválida.");
    }
}, 1000); // atraso de 1 segundo 
