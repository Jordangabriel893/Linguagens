
//O fetch sempre retorna uma promessa 

// fetch("https://ranekapi.origamid.dev/wp-json/api/produto")
//   .then(response => response.json())
//   .then(jsonResponse => {
//     document.querySelector("#app").innerText = jsonResponse[0].nome;
//   });

// const data = {
//   id: Math.random() + "andrerafa",
//   nome: "Andre",
//   email: Math.random() + "andrerafa@origamid.com",
//   senha: "123456",
//   cep: "123456",
//   rua: "Ali Perto",
//   numero: "230",
//   bairro: "Botafogo",
//   cidade: "Rio de Janeiro",
//   estado: "Rio de Janeiro"
// };
// fetch("https://ranekapi.origamid.dev/wp-json/api/usuario", {
//   method: "POST",
//   headers: {
//     "Content-Type": "application/json"
//   },
//   body: JSON.stringify(data)
// });



//AULA PARA CADASTRO DE USUARIO


//Sempre irá rodar o codigo dele sem travar o resto codigo do java scrypt atraves de uma API que é de onde puxamos 
//as informações que queremos que no caso é desse(https) referenciado no fetch
//Esse api retorna um arquivo (json) com uma lista de produtos
// Ele sempre retorna uma "promessa"(promise no f12)
fetch("https://ranekapi.origamid.dev/wp-json/api/produto")
//Para que possamos ter acesso a promessa utilizamos o (then) para que ele passe uma função de callback que vai ocorrer após a promessa ser resolvida
//r é um objeto que quer dizer (response)
  .then(r => r.json())
  //jsonBody é o corpo com uma lista(array)
  .then(jsonBody => {
    //é necessario referenciar como um (#app) dentro de querySelector
    //junto ao .innerHTML + 
    //"=" + 
    // o nome dado a arrow + o a posição do item da lista ([0]) +
    //.nome para mostra o nome do objeto da lista na posição [0] do Array
    document.querySelector("#app").innerHTML = jsonBody[0].nome;
    console.log(jsonBody);
  });

const data = {
  id: "andrerafa",
  nome: "Andre",
  email: "andrerafa@origamid.com",
  senha: "123456",
  cep: "123456",
  rua: "Ali Perto",
  numero: "230",
  bairro: "Botafogo",
  cidade: "Rio de Janeiro",
  estado: "Rio de Janeiro"
};

//Com essa nova api é possivel criar novos usuarios por isso ao final do endereço da api foi alterado de /produto para /usuario
// 1º Obrigatorio passar a url 
// 2º Um objeto com opções através da (,) + as chaves({})

fetch("https://ranekapi.origamid.dev/wp-json/api/usuario", {
  //mothod "POST" por que estamos inserindo uma informação dentro do servidor
  method: "POST",
  //Cabeçalho(headers)+abrir um objeto através das chaves({}) + o tipo de conteudo que estamos enviando pro servidor(application/json") dentro do "Content-Type"
  headers: {
    "Content-Type": "application/json"
  },
  //O corpo que é o que vamos enviar pra ele.
  //Sempre em formato de string
  // podemos sempre transforma-lo desta maneira JSON.strinfy()
  //Dentro do parenteses o que queremos mandar (Const data)
  body: JSON.stringify(data)
});
