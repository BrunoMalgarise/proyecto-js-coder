const pintarCarrito = () => {
    modalContenedor.innerHTML = "";
    modalContenedor.style.display = "flex";
    const modalHeader = document.createElement("div");
    modalHeader.className = "modal-header"
    modalHeader.innerHTML = `
    <h1 class="modal-header-title">Carrito</h1>
    `;
    modalContenedor.append(modalHeader);

    const modalbutton = document.createElement("h1");
    modalbutton.innerText = "x";
    modalbutton.className = "btn-modal-header";

    modalbutton.addEventListener("click", ()=>{
        modalContenedor.style.display = "none";
    })

    modalHeader.append(modalbutton);

    carrito.forEach((product) => {
        let carritoContent = document.createElement("div");
        carritoContent.className = "modal-contenido";
        carritoContent.innerHTML = `
            <img src="${product.img}"></img>
            <h3>${product.nombre}</h3>
            <p class="price-header">${product.precio} $</p>
            <span class="restar"> - </span>
            <p>Cantidad:  ${product.cantidad}</p>
            <span class="sumar"> + </span>
            <p>Total: ${product.cantidad * product.precio}</p>

        `;

        modalContenedor.append(carritoContent);


        let restar = carritoContent.querySelector(".restar")

        restar.addEventListener("click", () =>{
            if(product.cantidad !== 1) {
            product.cantidad--;
            }
            saveLocal();
            pintarCarrito();
        });

        let sumar = carritoContent.querySelector(".sumar")
        sumar.addEventListener("click" , ()=>{
            product.cantidad++;
            saveLocal();
            pintarCarrito();
        })

        let eliminar = document.createElement("span");
        
        eliminar.innerText = "❌";
        eliminar.className = "delete-product";
        carritoContent.append(eliminar);

        eliminar.addEventListener("click", eliminarProducto);
    });

    const total = carrito.reduce((acc, el) => acc + el.precio * el.cantidad, 0);

    const totalDeCompra = document.createElement("div");
    totalDeCompra.className = "total-content";
    totalDeCompra.innerHTML = `
    Total a pagar: ${total} $`;
    modalContenedor.append(totalDeCompra);
};

verCarrito.addEventListener("click", pintarCarrito);

const eliminarProducto = () => {
    const busquedaPorId = carrito.find((element) => element.id);

    carrito = carrito.filter((carritoId) =>{
        return carritoId !== busquedaPorId;
    });
    carritoContenido();
    saveLocal();
    pintarCarrito();

}

const carritoContenido = () => {
    cantidadCarrito.style.display = "block";

    const carritoLength = carrito.length;

    localStorage.setItem("carritoLength", JSON.stringify(carritoLength));

    cantidadCarrito.innerText = JSON.parse(localStorage.getItem("carritoLength"));
};

carritoContenido();
