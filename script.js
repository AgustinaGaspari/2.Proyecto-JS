//variable global
const IVA = 1.21

//clase
class Producto{
    constructor(id,nombre,precio,stock){
        this.id=id;
        this.nombre=nombre;
        this.precio=precio;
        this.stock= stock;
        
    }
}

//Declaro array
    let productos= []
    console.log(productos)
    
    let carrito =[]
    console.log(carrito)

//Agrego productos al array
    productos.push(new Producto(1,"bandolera",2000,30));
    productos.push(new Producto(2,"riñonera",1500,20));
    productos.push(new Producto(3,"bolsotote",3500,15));
    productos.push(new Producto(4,"billetera chica", 900, 10));
    productos.push(new Producto(5,"billetera grande", 1000,10));
    productos.push(new Producto(6,"tabaquera",1500,15));

    
//ALMACENAMIENTO LOCAL con operador ternario
  
  /*  (localStorage.getItem('productoAgregado')===null) ? carrito=[] : carrito=JSON.parse(localStorage.getItem("productoAgregado"));

   (localStorage.getItem("productoAgregado")) ? carrito = JSON.parse(localStorage.getItem("productoAgregado")) : localStorage.setItem("productoAgregado", JSON.stringify(carrito));
    */

//Aumento de cantidad con click- condicional-
/*
    if(carrito.some(producto => producto.nombre== '${producto.nombre}')){
        let indice = carrito.findIndex(producto=> producto.nombre='${producto.nombre}')
        carrito[indice].cant++
        } else{
            let sumaProd= {
                ...productos,
                cant:1
            }
            carrito.push(suma)
    }
*/

// EVENTO

productos.forEach(producto=>{
    document.getElementById(`boton${producto.id}`).addEventListener('click', (e)=>{
        e.preventDefault();
        carrito.push(producto);
        localStorage.setItem("productoAgregado", JSON.stringify(carrito))
    })
})    

let divProductos = document.getElementById('divProd');
let botonCarrito = document.querySelector('#botonCarrito')

botonCarrito.addEventListener('click', ()=>{
    let storageCompra = JSON.parse(localStorage.getItem('productoAgregado'))

    storageCompra.forEach(producto => {
        divProductos.innerHTML += `
        <div class="card bg-secondary m-2" style="width: 18rem;">
        <img src="../img/comprar.png" class="card-img-top" alt="Tabaquera">
        <div class="card-body">
            <h5 class="card-title">${producto.nombre.toUpperCase()}</h5>
            <p class="card-text">Precio: $${producto.precio} </p>
            <p class="card-text">Stock:${producto.stock} </p>
        </div>
    </div>
        `
    })
})

let vaciarCarrito =  document.querySelector('#vaciarCarrito');

const vaciar= () => {
    while(divProductos.firstChild) {
        divProductos.removeChild(divProductos.firstChild);
    }
    return false;
}


vaciarCarrito.addEventListener('click', (e)=>{
    e.preventDefault();
    vaciar();
    
})



