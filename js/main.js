const contenidoWeb = document.getElementById("contenidoWeb");
const verCarrito = document.getElementById("verCarrito");
const modalContenedor = document.getElementById("modalContenedor");
const cantidadCarrito = document.getElementById("cantidadCarrito");


const titulo = document.querySelector("h1 span"),
    tituloSecundario = document.querySelector("h2"),
    card = document.querySelector(".card");
const btn = document.querySelector("#btn"),
    contenedor = document.querySelector(".contenedor");

let carrito = JSON.parse(localStorage.getItem("carrito")) || [];
//forEach pora el array Y empezamos a crear el html.
// productos.forEach((product) => {
//     let contenido = document.createElement("div");
//     contenido.className = "tarjeta";
//     contenido.innerHTML = `
//     <img src="${product.img}">
//     <h3>${product.nombre}</h3>
//     <p class="price">${product.precio} $</p>
//     `;

//     contenidoWeb.append(contenido);

//     let comprar = document.createElement("button");
//     comprar.innerText = "comprar";
//     comprar.className = "btnComprar"

//     contenido.append(comprar);

//     comprar.addEventListener("click", () => {

//         const repetido = carrito.some((productoRepetido) => productoRepetido.id === product.id);

//         if (repetido) {
//             carrito.map((prod) => {
//                 if (prod.id === product.id) {
//                     prod.cantidad++;
//                 }
//             });
//         } else {
//             carrito.push({
//                 id: product.id,
//                 img: product.img,
//                 nombre: product.nombre,
//                 precio: product.precio,
//                 cantidad: product.cantidad,
//             });
//         }
//         console.log(carrito);
//         console.log(carrito.length);
//         carritoContenido();
//         saveLocal();
//     });
// });


//LocalStorage
//set items
const saveLocal = () => {
    localStorage.setItem("carrito", JSON.stringify(carrito));
};
//get items


//Cosas nuevass.


const pedirProductos = (arr) => {
    return new Promise((resolve, reject) => {
        //Retraso de 2.5seg con setTimeout. 
        setTimeout(() => {
            resolve(arr);
        }, 2500);
    });
};
let productosAuxiliar = [];

const renderServicios = (arr) => {
    let html;
    contenedor.innerText = "";
    for (const item of arr) {
        const { id, nombre, img, precio } = item;

        html = `
        <div class="tarjeta">
            <div class="card-image">
            <img class="img-tarjeta" src="${img}">
            </div>
        <div class="card-content">
            <span class="card-title">${nombre.toUpperCase()}</span>
            <p class="price">$${precio}</p>
        
        </div>
        <div class="card-action">
            <button class="btnComprar" id="${id}">Comprar</button>
        </div>
        </div>
    `;

        contenedor.innerHTML += html;
    }
};
pedirProductos(productos)
    .then((res) => {
        productosAuxiliar = res;
        renderServicios(productosAuxiliar)
    });

const lista = document.querySelector("#listado");





