const contenidoWeb = document.getElementById("contenidoWeb");
const verCarrito = document.getElementById("verCarrito");
const modalContenedor = document.getElementById("modalContenedor");
const cantidadCarrito = document.getElementById("cantidadCarrito");


const titulo = document.querySelector("h1 span"),
    tituloSecundario = document.querySelector("h2"),
    card = document.querySelector(".card");
const btn = document.querySelector("#btn"),
    contenedor = document.querySelector(".contenedor");


//forEach pora el array Y empezamos a crear el html.

//setTimeout


let carrito = JSON.parse(localStorage.getItem("carrito")) || [];

const renderServicios = (arr) => {
    productos.forEach((product) => {
        let contenido = document.createElement("div");
        contenido.className = "tarjeta";
        contenido.innerHTML = `
        <img src="${product.img}">
        <h3>${product.nombre}</h3>
        <p class="price">${product.precio} $</p>
        `;

        contenidoWeb.append(contenido);

        let comprar = document.createElement("button");
        comprar.innerText = "comprar";
        comprar.className = "btnComprar"

        contenido.append(comprar);

        comprar.addEventListener("click", () => {

            const repetido = carrito.some((productoRepetido) => productoRepetido.id === product.id);

            if (repetido) {
                carrito.map((prod) => {
                    if (prod.id === product.id) {
                        prod.cantidad++;
                    }
                });
            } else {
                carrito.push({
                    id: product.id,
                    img: product.img,
                    nombre: product.nombre,
                    precio: product.precio,
                    cantidad: product.cantidad,
                });
            }
            console.log(carrito);
            console.log(carrito.length);
            carritoContenido();
            saveLocal();
        });
    });
};




//LocalStorage
const saveLocal = () => {
    localStorage.setItem("carrito", JSON.stringify(carrito));
};


// const pedirProductos = (arr) => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve(arr);
//         }, 2500);
//     });
// };
// pedirProductos(carrito)
//     .then((res) => {
//         datos = res;
//         renderServicios(datos)
//     });






//FETCH
let datosDelFetch = fetch('./data/data.json')
    .then(res => res.json())
    .then(datos => {
        console.log(datos);
        renderServicios(datos);
    })








