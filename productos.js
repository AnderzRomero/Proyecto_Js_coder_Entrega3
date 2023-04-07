// 3.... Simulador Venta de productos

//Tienda Tecnologica

//clase Producto

class Producto {
    constructor(id, nombre, precio) {
        this.id = id
        this.nombre = nombre
        this.precio = precio
    }
}

// creamor 4 productos
const teclado = new Producto(1, 'Teclado Bluetooth', 65000)
const mouse = new Producto(2, 'MOUSE GAMING EXTREME 7 BOTONES', 27000)
const bluetooth = new Producto(3, 'adaptador Bluetooth y WIFI', 95000)
const audifonos = new Producto(4, 'Manos libres', 10000)

// guardamos los productos
const productos = [teclado, mouse, bluetooth, audifonos]

// Agregar opciones de productos al select

const selectNode = document.querySelector('#listaProductos')
productos.forEach((producto)=>{
    const optionProd = document.createElement('option')
    optionProd.innerText = `${producto.nombre}: $ ${producto.precio}`
    optionProd.setAttribute('id', `${producto.id}`)
    selectNode.append(optionProd)
})

// carrito
const carrito = []

// boton añadir producto
const anadirBtnNode = document.querySelector('#anadirProd')
anadirBtnNode.onclick = ()=>{
    const index = selectNode.selectedIndex
    const prodSelecionado = productos[index]
    carrito.push(prodSelecionado)
    console.log(carrito);
}

// Boton Finalizar Compra
const finalizarBtnNode = document.querySelector('#finalizarCompra')
finalizarBtnNode.onclick = () => {
    let totalCompra = 0;
    carrito.forEach((producto) => {
        totalCompra = totalCompra + producto.precio
    })
    alert(`El total de tu compra es $${totalCompra}`)
}