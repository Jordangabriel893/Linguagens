// class SmoothScroll {
//   constructor(links, menu) {
//     this.linkElements = document.querySelectorAll(links);
//     this.menuElement = document.querySelector(menu);

//     this.handleClick = this.handleClick.bind(this);
//     this.addScrollEvent();
//   }
//   handleClick(event) {
//     event.preventDefault();
//     const href = event.currentTarget.getAttribute("href");
//     const section = document.querySelector(href);
//     window.scrollTo({
//       top: section.offsetTop - (window.innerHeight - section.clientHeight) / 2,
//       behavior: "smooth"
//     });
//   }
//   addScrollEvent() {
//     this.linkElements.forEach(link =>
//       link.addEventListener("click", this.handleClick)
//     );
//   }
// }

// class ActiveSmoothScroll extends SmoothScroll {
//   constructor(links, menu, sections) {
//     super(links, menu);
//     this.sectionElements = document.querySelectorAll(sections);

//     this.handleScroll = this.handleScroll.bind(this);
//     this.handleScroll();
//     this.activeNavScroll();
//   }
//   handleScroll() {
//     this.sectionElements.forEach((section, i) => {
//       if (window.pageYOffset > section.offsetTop - window.innerHeight * 0.5) {
//         this.linkElements[i].classList.add("active");
//       } else {
//         this.linkElements[i].classList.remove("active");
//       }
//     });
//   }
//   activeNavScroll() {
//     window.addEventListener("scroll", this.handleScroll);
//   }
// }

// new ActiveSmoothScroll("a[href^='#']", ".menu", "section");


//Classes servem para organnizar o codigo em  pequenas funções e objetos que irão servir para uma função específica.
//Classes são nomeadas com nome maiusculo
//Uma classe sempre tem um construtor logo de inicio
//No contructor ele recebe as principais propriedades e é o primeiro codigo a ser executado
class SmoothScroll {
  constructor(links) {
    //Necessario passar o "this" para adicionar as propriedades(linkElements)
    this.linkElements = document.querySelectorAll(links);
    //Para executar a função addClickEvent 
    this.addClickEvent();
  }
  handleClick(event) {
    //Prevenir o padrão
    event.preventDefault();
    //Puxar o href do html para saber onde está exatamente clickando dos elementos 
    const href = event.currentTarget.getAttribute("href");
    //Para saber a seção exata de cada elemento no html
    const section = document.querySelector(href);
    //.scrollTo = "Vá para"
    window.scrollTo({
      //top: section.offsetTop para que ele vá para o item que estamos clicando
      //- (window.innerHeight - section.clientHeight) / 2  - > total da janela - o toal do item /2 para centralizar o item na tela sempre que clicarmos em um item.
      top: section.offsetTop - (window.innerHeight - section.clientHeight) / 2,
      //Comando para que ele vá ate o item clicado de forma suave
      behavior: "smooth"
    });
  }
  //para adicionar o evento de link
  addClickEvent() {
    //forEach para falar com cada link e executar uma função de callback ao click
    this.linkElements.forEach(link => {
      //
      link.addEventListener("click", this.handleClick);
    });
  }
}
//Nova classe extendida com os mesmos elementos de outra através do do Extend que nada mais é que a classe SmoothScroll extendida
class ActiveSmoothScroll extends SmoothScroll {
  //Como sempre recebe o constructor
  constructor(links, sections) {
    //O super executa o constructor da class de SmoothScroll
    //Sendo obrigatorio referencia o (links) nesse novo constructor(links, ) e no super(super(links))
    super(links);
    //Seleciona todas as sections
    this.sectionElements = document.querySelectorAll(sections);
    //Este handleScroll tem que ter este this forçado atraves do (= this.handleScroll.bind(this);), pois,
    //Caso não houvesse este comando o this estaria se referenciando ao objeto "window" da função activeNavScroll
    //O this tem de sempre se referenciar ao objeto do Active SmoothScroll
    //Com o .bind podemos referenciar qual this a function deve ter
    this.handleScroll = this.handleScroll.bind(this);
    //Para ativar as outras duas funções 
    this.handleScroll();
    this.activeNavScroll();
  }
  handleScroll() {
    //Para cada elemento ele vai passar a section e executar uma função
    this.sectionElements.forEach((section, i) => {
      //Verificar se o window passar pelo do valor maximo descendo da section ele vai ativar a cor atraves de window.pageYOffset > section.offsetTop
      //E como a ultima não tem como passar do topo da section adicionamos - window.innerHeight * 0.5 para que ocorra
      if (window.pageYOffset > section.offsetTop - window.innerHeight * 0.5) {
        //Somente no elemento que passou ele ativar a function
        this.linkElements[i].classList.add("active");
      } else {
        //e ao voltar ele desativa a função
        this.linkElements[i].classList.remove("active");
      }
    });
  }
  activeNavScroll() {
    //O evento de scroll sempre que for ativado vai executar uma função(handleScroll)
    window.addEventListener("scroll", this.handleScroll);
  }
}
//No href  o "^=" "significa que comece com" e dentro da aspas (#)
const scroll = new ActiveSmoothScroll("a[href^='#']", "section");

// console.log(scroll.linkElements);
