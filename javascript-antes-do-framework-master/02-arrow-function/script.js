// class Menu {
//   constructor(menu) {
//     this.menuElement = document.querySelector(menu);
//     this.activeClass = "active";
//   }
//   addActiveEvent() {
//     this.menuElement.addEventListener("click", event =>
//       event.target.classList.add(this.activeClass)
//     );
//   }
// }
// // teste
// const menu = new Menu(".principal");
// menu.addActiveEvent();

// const upperName = name => name.toUpperCase();
// const countLetters = word => word.length;

// console.log(countLetters("Andre"));

//função que recebe o nome (upperName), recebe um parametro(name), que retorna o parametro (name) sempre maiusculo
function upperName(name){
return name.toUpperCase();
}
//Tambem pode ser colocada a função dentro de uma variável
const upperName = function upperName(name){
return name.toUpperCase();
}
//Uma função também pode escrita através de um flecha(ARROW). Para um argumento apenas o (name) não necessita parenteses mas,
//Se houver mais de dois argumentos necessita parenteses.
//Se houver apenas uma linha dentro da função, não necessita do (RETURN) e tambem não necessita das chaves ({}) 
const upperName = name =>  name.toUpperCase();
const countLetters = word => word.length;

// Ao criar um class com duas funções que utilizam o mesmo 
class Menu {
  constructor(menu) {
    this.menuElement = document.querySelector(menu);
    this.activeClass = "active";
  }
  addActiveEvent() {
    //Como arrow o event não cria um novo this mas, com function não seria possivel usar dessa forma pois ele cria um novo this
    this.menuElement.addEventListener("click", event => {
      console.log(this);

      event.target.classList.add(this.activeClass);
    });
  }
}

const menu = new Menu(".principal");
menu.addActiveEvent();
