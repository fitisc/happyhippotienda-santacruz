//saludar cliente
//Mostrar productos
//calcular precios
//Cobrar productos
//preguntar si quiere seguir comprando

function saludoCliente(){
    alert("Bienvenido a tienda HappyHippo");
    const acceder = confirm("Desea ver productos?");
    return acceder;
}


function prendasDeVestir(){
    let elijaPrenda;
    do{
      elijaPrenda = parseInt(prompt("1)Remeras \n2)Pantalones/Jeans \n 3)Shorts/Bermudas \n4)Buzos \n5)Camperas"));
    switch(elijaPrenda) {
        case 1:
            elijaPrenda = "Remeras";
            break;
        case 2:
            elijaPrenda = "Pantalones/Jeans";
            break;
        case 3:
            elijaPrenda = "Shorts/Bermudas";
            break;
        case 4:
            elijaPrenda = "Buzos";
            break;
        case 5:
            elijaPrenda = "Camperas";
            break;
        
        }
   
    }while(elijaPrenda <1 || elijaPrenda >=5);
    return elijaPrenda;
}

class Producto {
    constructor(prenda, precio) {
        this.prenda = prenda;
        this.precio = precio;
    }
    datos() {
        alert("Usted eligio " + this.prenda + " Precio: " + this.precio);
    }
}

function calcularPrecio(respuestaPrendas) {
    let precioAbonar;
if(respuestaPrendas === "Remeras"){
    talle = prompt("Ingrese talle remera")
    precioAbonar = 1500;
} else if(respuestaPrendas === "Pantalones/Jeans"){
    talle = prompt("Ingrese talle Pantalones/Jeans")
    precioAbonar = 3500; 
} else if(respuestaPrendas === "Shorts/Bermudas"){
    talle = prompt("Ingrese talle Short/Bermudas")
    precioAbonar = 2500;  
} else if(respuestaPrendas === "Buzos"){
    talle = prompt("Ingrese talle Buzos")
    precioAbonar = 2500;  
} else if(respuestaPrendas === "Camperas"){
    talle = prompt("Ingrese talle Campera")
    precioAbonar = 4500;
}else {
    precioAbonar = 0;
} 
return precioAbonar;
}


function cobrar(respuestaPrendas, respuestaPrecio) {

    let miProducto = new Producto(respuestaPrendas, respuestaPrecio);
    miProducto.datos();
    //alert("Su prenda es " + respuestaPrendas + ". Precio $" + respuestaPrecio);

    let pago = parseInt(prompt("Con cuanto abona?"));

    while(isNaN(pago)) {
        pago = parseInt(prompt("Con cuanto abona?"));
    }

    if (pago >= respuestaPrecio) {
        alert("Su vuelto es " + (pago - respuestaPrecio));
    }else {
        alert("No le alcanza");
    }
}


function init() {
const respuestaAcceder = saludoCliente();
if (respuestaAcceder) {
    const respuestaPrendas = prendasDeVestir();
    const respuestaPrecio = calcularPrecio(respuestaPrendas);
    cobrar(respuestaPrendas, respuestaPrecio);
}else {
    alert("Vuelva pronto, lo esperamos");
    }
}

init();

let continuar = confirm("Desea seguir comprando?");
if (continuar) {
    init();
}else {
    alert("Vuelva pronto, lo esperamos");
}
