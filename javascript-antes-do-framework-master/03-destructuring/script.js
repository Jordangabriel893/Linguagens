function handleMouseMove({ clientX, clientY }) {
  console.log(clientX, clientY);
}
// "({clientX, clientY})" também pode ser escrito na forma de - 
//const:{ clientX, clientY} = event quando a function "handleMouseMove" receber o argumento (event): Ex - handleMouseMove(event)

const frutas = ["Banana", "Uva"];

const [fruta1, fruta2] = frutas;
//array que recebe uma cor e uma função que muda a cor do array através do "setColor"
const useState = [
  "blue",
  function(color) {
    useState[0] = color;
  }
];

const [color, setColor] = useState;
setColor("red")
// document.documentElement.addEventListener("mousemove", handleMouseMove);
