// async function fetchProdutos(url) {
//   const response = await fetch(url);
//   const json = await response.json();
//   return json;
// }

// fetchProdutos("https://ranekapi.origamid.dev/wp-json/api/produto");


//MODO SIMPLIFICADO DO INICIO DA AULA ANTERIOR E MAIS DINÂMICO

//Podemos colocar try{ } catch e {}
//Para lidarmmos com erros
//Awayt espera uma promessa ser resolvida para poder retornar
async function fetchProdutos(url) {
  const response = await fetch(url);
  const jsonBody = await response.json();
  return jsonBody;
}

const requisicao = fetchProdutos(
  "https://ranekapi.origamid.dev/wp-json/api/produto"
);
