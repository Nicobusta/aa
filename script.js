/* ********** animacion de desplazamiento en varios textos********** */
let scrollElement = document.querySelectorAll('.animated-text');

function animateText() {
    scrollElement.forEach(text => {
      const textPosition = text.getBoundingClientRect().top;
      const windowHeight = window.innerHeight/1.1;
      if (textPosition < windowHeight) {
        text.classList.add('animacion-dinamica');
        
      }
    });
  }
  
  animateText();
  
  window.addEventListener('scroll', () => {
    animateText();
  });

  /* ********** Menu ********** */
((d) => {
  const $btnMenu = d.querySelector(".menu-btn"),
    $menu = d.querySelector(".menu");

  $btnMenu.addEventListener("click", (e) => {
    $btnMenu.firstElementChild.classList.toggle("none");
    $btnMenu.lastElementChild.classList.toggle("none");
    $menu.classList.toggle("is-active");
  });

  d.addEventListener("click", (e) => {
    if (!e.target.matches(".menu a")) return false;

    $btnMenu.firstElementChild.classList.remove("none");
    $btnMenu.lastElementChild.classList.add("none");
    $menu.classList.remove("is-active");
  });
})(document);

  
/* ************************* triangel inicio************************** */
const triangleBase = 48;

const container = document.querySelector(".triangle-container");

const instantiateGrid = () => {
    container.innerHTML='';
    const width = document.body.clientWidth;
    const heigth = document.body.clientHeight * 0.4;

    let columns = Math.ceil(width / (triangleBase * 2)) + 1;
    let rows = Math.ceil(heigth / triangleBase * 1.733);
    container.style.setProperty( '--columns', columns);

    for (let y = 0; y < rows; y++){
        for (let x = 0; x < columns; x++){
            createTriangleSet(x + y * columns, x, y);
        }
    }
}

const createTriangleSet = (index, column, row) =>{ 
    let el = document.createElement("div");
    el.classList.add( "triangle-set" );
    if (row % 2 == 0) el.classList.add("triangle-set--offset");

    container.appendChild(el);
}

window.onresize = () => {
    instantiateGrid();
}

instantiateGrid();
const glow = document.body.querySelector("#glow")

window.addEventListener('mousemove', (event) => {
    glow.style.top = event.pageY + "px";
    glow.style.left = event.pageX + "px";
});