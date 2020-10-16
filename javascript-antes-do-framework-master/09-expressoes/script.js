// const grupoA = 100;
// const grupoB = 300;
// const vencedor = grupoA > grupoB ? "Grupo A Venceu" : "Grupo B Venceu";

// const numeros = [2, 3, 4, 5, 6];
// const total = numeros.filter(numero => numero > 4);

// const novoVencedor = grupoA > 50 && "Grupo A Vencendor";
// console.log(novoVencedor);

//Expressões
//Normalmente sempre estão após um sinal de igualdade (=)
//If não poderia ser considerado uma expressão pois ele é um bloco
//Pode funcionar se o if for transformado em um ternario direto
const grupoA = 100;
const grupoB = 300;
//TERNARIO
// objeto de nome qualquer + = + a expressão 
//Logo após a expressão coloca-se o valor de verdadeiro("Grupo A Ganhou") e de falso("Grupo B Ganhou") separados por dois pontos (:)
// Primeiro tem a expressão que primeiro ele vai avaliar se é verdadeiro ou falso
const vencedor = grupoA > grupoB ? "Grupo A Ganhou" : "Grupo B Ganhou";
//Quando eu tenho o (&&) primeiro ele vai verificar se expressão é verdadeira
//E logo em seguida ele verifica se a segunda expressão("Grupo A Vencedor") é verdadeira
const grupoAvenceu = grupoA > 50 && "Grupo A Vencedor";

console.log(grupoAvenceu);


