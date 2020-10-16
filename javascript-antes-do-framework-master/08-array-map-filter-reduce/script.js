// const precos = [
//   "Crédito",
//   "R$ 200",
//   "R$ 400",
//   "Contas Pagar",
//   "R$ 300",
//   "R$ 400",
//   "Meus dados"
// ];

// const precosFiltro = precos.filter(preco => preco.includes("R$"));

// const precoNumeros = precosFiltro.map(preco =>
//   Number(preco.replace("R$ ", ""))
// );

// const total = precoNumeros.reduce((acc, item) => acc + item);

// console.log(total);

//Arrays são caracterizadas pelo uso de "[]"
const precos = [
  "Crédito",
  "R$ 200",
  "R$ 400",
  "Contas Pagar",
  "R$ 300",
  "R$ 400",
  "Meus dados"
];
//FILTER
//Para filltrar e somente deixar somente os preços
//Declaro um objeto de nome qualquer + "= " + o nome do Array.filter que vai receber uma função de callback em uma arrow
//Na arrow function declaro um parametro para a arrow function(preco) + a arrow (=>) + o parametro.includes + 
//o que quero filtrar que os elementos tem em comum ("R$")
const precosFiltro = precos.filter(preco => preco.includes("R$"));


//MAP
//Objeto com uma arrow function para retirar elementos da Arrow. Neste caso para tirar o cifrão.
//Declaro um objeto de nome qualquer + "= " + o nome do Array.map, que neste caso é um array somente com os preços
//Na arrow function declaro um parametro para a arrow function(preco) + a arrow (=>) + "Number" + parametro.replace(preco.replace) +
//E dentro do parênteses na primeira aspas o que eu quero alterar ("R$") + , + na outra aspas para o que eu quero alterar ("")
//Neste caso queremos alterar para que seja um campo vazio
const precoNumeros = precosFiltro.map(preco =>
//É necessario colocar  a ","" + ("") sem nada para que não de undefined
  Number(preco.replace("R$ ", ""))
);

//REDUCE
//Pega um valor anterior e soma com o valor atual da Arrow precoNumeros
//Declaro um objeto de nome qualquer + "= " + o nome do Array.reduce que vai receber uma função de callback em uma arrow
//Na arrow function declaro dois parametros para a arrow function(acc, item) + a arrow (=>) + o comando que ela tem que retornar (acc + item)
//Que nada mais é do que os o primeiro valor + o segundo = resultaod + o terceiro = resultado + quarto, ate terminar 
const total = precoNumeros.reduce((acc, item) => acc + item);

console.log(total);
