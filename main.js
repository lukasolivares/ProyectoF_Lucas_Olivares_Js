//Productos
let productos = [
    {
        id:01,
        nombre: "remera",
        categoria: "remera",
        precio: 5300,
        stock: 3,
        img: "tengo que buscar"
    },
    {
        id:02,
        nombre: "pantalon de vestir",
        categoria: "pantalon",
        precio: 5300,
        stock: 3,
        img: "tengo que buscar"
    },
    {
        id:03,
        nombre: "buzo oversize",
        categoria: "buzos",
        precio: 5300,
        stock: 3,
        img: "tengo que buscar"
    },
    {
        id:04,
        nombre: "remra crack",
        categoria: "remeras",
        precio: 5300,
        stock: 3,
        img: "tengo que buscar"
    },
    {
        id:05,
        nombre: "zapatillas naiki",
        categoria: "zapatillas",
        precio: 5300,
        stock: 3,
        img: "tengo que buscar"
    },
]

let contenedorProductos = document.getElementById("contenedorProductos")
renderizarShop(productos)

let buscador = document.getElementById("buscador")
buscador.addEventListener("input", filtrarPorNombre)

let inputs = document.getElementsByClassName("input")
console.log(inputs)
for (const input of inputs) {
    input.addEventListener("click", flitrarPorCategoria)
}

function flitrarPorCategoria(e) {
    console.log(e.target.id)
    console.dir(e.target.checked)
    let filtros = []
    for (const input of inputs) {
        console.log(input.checked)
        console.log(input.id)
        if (input.checked) {
            filtros.push(input.id)
        }
    }
    console.log(filtros)
    let arrayFiltrado = productos.filter(producto => filtros.includes(producto.categoria))
    renderizarShop(arrayFiltrado.length >0 ? arrayFiltrado : productos)
    
}

function filtrarPorNombre(e) {
    console.log(e.target.id)
    let arrayFiltrado = productos.filter(productos => productos.nombre.includes(buscador.value))
    renderizarShop(arrayFiltrado)
}

function renderizarShop(arrayDeProductos) {
    contenedorProductos.innerHTML = ""
    arrayDeProductos.forEach(producto => {
        let tarjeta = document.createElement("div")
        tarjeta.className = "tarjetaProducto"
        tarjeta.innerHTML = `
            <h2>${producto.nombre}</h2>
            <p>Categoria: ${producto.categoria}</p>
            <p>Precio: ${producto.precio}</p>
        `
        contenedorProductos.appendChild(tarjeta)
    })
}

//usuario y contrasenia a definir)
let usuario = document.getElementById("usuario")
let contrasenia = document.getElementById("contrasenia")
let iniciarSesion = document.getElementById("iniciar")

let usuarioBD = "lucas"
let contraseniaBD = "lucas123"

iniciarSesion.addEventListener("click", () => {
    console.log("usuario ", usuario.value)
    console.log("contrasenia ", contrasenia.value)
    if (usuario.value == usuarioBD && contrasenia.value == contraseniaBD) {
        alert("Bienvenido/a!")
    } else {
        alert("Datos incorrectos")
    }
})