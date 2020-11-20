// Hice esto para que se cierre el menú hamburguesa al hacerle click en la opción seleccionada

const links = document.querySelectorAll(".nav-link");
const arrayNodes = Array.from(links);
console.log(links);
console.log(arrayNodes);
const burguer = document.querySelector('#btn-menu');
arrayNodes.forEach(function (node) {
    node.addEventListener('click', function (event) {
        burguer.click();
    });
});
// Modo oscuro

// Vaciar el dormulario 
