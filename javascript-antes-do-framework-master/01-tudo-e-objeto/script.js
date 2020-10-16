//Link dos slides sobre cada aula
//https://origamid.com/slide/youtube/#/0101-javascript-antes-do-framework/1

//Link das aulas
//https://www.youtube.com/playlist?list=PL9rc_FjKlX39T78CUANwmdta_d1CgUtMt





// const menu = {
//   class: ".principal",
//   ativar() {
//     const menuElement = document.querySelector(this.class);
//     menuElement.classList.add("ativo");
//   }
// };

// const body = document.querySelector("body");
// body.classList.add("js");

//objeto
const menu = {
  //Tem uma propriedade(variável) que recebe uma string ".principal" que também está no class do Html
  class: ".principal",
  //Pode receber também metodos(Function) que é executada pelo parenteses
  ativar() {
  	//Para referenciar o que esta dentro do objeto(Menu) utiliza-se o this.class
    const menuElement = document.querySelector(this.class);
    console.log(menuElement);
  }
};
//para ativar a função do objeto referenciá-se o objeto(menu) + . + function(ativar)
menu.ativar();
