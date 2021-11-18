class Producto {
    constructor(nombre,categoria,precio, editorial){
        this.nombre = nombre;
        this.categoria = categoria;
        this.precio = precio;
        this.editorial = editorial;
    }

    

    
    }
// array donde almaceno mis objetos    
const productos = [];
const carrito = [];

productos.push(new Producto ("Naruto", "Shonen", 575, "PaniniArgentina"));

productos.push(new Producto ("One punch man", "Shonen", 575,"PaniniArgentina"));

productos.push(new Producto ("Dr stone", "Shonen",  575, "PaniniArgentina"));

productos.push(new Producto ("Rurouni Kenshin", "Shonen",  1700, "PaniniEspaña"));

productos.push(new Producto ("Food wars" , "Shonen",  1700, "PaniniEspaña" ));

productos.push(new Producto ("Ao no flag", "Shojo",  549, "IvreaArgentina"));

productos.push(new Producto ("Fruit basket", "Shojo",  489, "IvreaArgentina"));

productos.push (new Producto ("Wotakoi", "Shojo",  574, "PaniniArgentina"));

productos.push(new Producto ("Nana", "Shojo",  489, "IvreaArgentina"));

productos.push(new Producto ("Berserk", "Seinen",  574, "PaniniEspaña"));

productos.push(new Producto ("Tokio revengers", "Seinen",  549, "IvreaArgentina"));

productos.push(new Producto ("Given", "Yaoi", 574, "PaniniArgentina"));

productos.push(new Producto ("Junjo romantica", "Yaoi",  549, "IvreaArgentina"));

productos.push(new Producto ("Citrus", "Yuri",  549, "IvreaArgentina"));

productos.push(new Producto ("Still sick", "Yuri",  1700, "EdicionesBabylon"));






/*console.log(productos);
// función para mostrar los productos disponibles
const verProductos = (productos) => {
   let texto = ``;
   for (const Producto of productos) {
       texto += `Producto: ${Producto.nombre}\ncategoria: ${Producto.categoria}\nprecio: $${Producto.precio} 
editorial: ${Producto.editorial}\n\n `
   }

   return texto;
}
//  función  que le permite al usuario comprar un producto
const comprar = () => {
   const ProductoUsuario = prompt(`¿Que producto desea comprar?\n\n 
${verProductos(productos)}`);

     const ProductoEncontrado = productos.find(productos => productos.nombre.toLowerCase() === ProductoUsuario.toLocaleLowerCase().trim());
     if (ProductoEncontrado){
         carrito.push(ProductoEncontrado);
        alert(`Agregaste ${ProductoEncontrado.nombre} a el carrito.`);
     } else {
         alert(`Lo sentimos, no tenemos ese producto.`);
     }
     
}*/

//función para mostrar los productos en el carrito
//const mostrarCarrito = () =>{
    //const productoCarrito = verProductos(carrito);
   // if (productoCarrito) {
       //alert(productoCarrito);
   // } else {
      //  alert(`El carrito está vacío.`)
    //}
    

//}


// Menú
/*let opcion;

do {
       opcion = Number(prompt(`Ingrese una opción:
       1 - Ver productos
       2-  Comprar
       3- Mostrar el carrito
       4 - Salir
    
    `));

     switch (opcion) {
         case 1:
            const valorRecibido = verProductos(productos);
            alert(valorRecibido);
             break;
         case 2:
             comprar();
             break;
         case 3:
             mostrarCarrito();
             break;
         case 4:
             alert (`Gracias por su visita  a Manga's Monke.`);
             break;
         default:
             alert(`Opción incorrecta.`);
             break;
     }


} while(opcion !==4);*/



let mostrarProductos = document.querySelector(".catalogo");


for (let i = 0; i < productos.length; i++){
    mostrarProductos.innerHTML += `
    <div>
    <h3>${productos[i].nombre}</h3>
    <p>${productos[i].precio}</p>
    <button>Agregar al carrito </button>
    <div> <br><br>
    `
}

