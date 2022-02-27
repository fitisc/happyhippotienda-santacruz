$.get("data.json", (data) => {
    data.forEach((element) => {
        div1.innerHTML += `<div class="card">
        <img src="${element.img}" style="width:100%">
        <h3>${element.nombre}</h3>
        <h4>PRECIO : $<span>${element.precio}</span></h4>
        <button class="btn-buy" data-id="${element.id}">AGREGAR</button>
        </div>`;
    });
  
    let btnBuy = document.querySelectorAll(".btn-buy");

btnBuy.forEach((element) => {
    element.addEventListener("click", (event) => {
        enviarAlCarrito(event.target.parentElement);    
    });
});

});


  let carrito = JSON.parse(localStorage.getItem("carrito")) || [];
let div1 = document.querySelector("#prendasDiv");
let sidebar = document.querySelector(".carritoSide");


const enviarAlCarrito = (datosProductos) => {
    let productoAlCarrito = {
        imagen: datosProductos.querySelector("img").src, 
        nombre: datosProductos.querySelector("h3").textContent,
        precio: Number(datosProductos.querySelector("h4 span").textContent),
        precioTotal: Number(datosProductos.querySelector("h4 span").textContent),
        cantidad: 1,
        id:Number(datosProductos.querySelector("button").getAttribute("data-id")),
    };

    let existeProducto = carrito.some((element) => element.id === productoAlCarrito.id
            );

    if (existeProducto) {
        carrito = carrito.map((element) => {
            if (element.id === productoAlCarrito.id) {
                element.cantidad++;
                element.precioTotal = element.precio * element.cantidad;
                return element;
            } else {
                return element;
            }
        });
    } else {
        carrito.push(productoAlCarrito);
    }
    localStorage.setItem("carrito", JSON.stringify(carrito));
    inyectarHTMLcarrito();
};
            


const inyectarHTMLcarrito = () => {
    sidebar.innerHTML = "";
    let divTitulo = document.createElement("div");
    divTitulo.innerHTML = "<h5>CARRITO DE COMPRAS</h5>";
    sidebar.appendChild(divTitulo);
    carrito.forEach((element) => {
        sidebar.innerHTML += ` 
        <div>
        <h6>${element.nombre}</h6>
        <img src="${element.imagen}" style="width:20%">
        <h6 style= "font-size:1em">Cantidad: ${element.cantidad}</h6>
        <button class="btn-menos" data-id=${element.id}> - </button>
        <button class="btn-mas" data-id=${element.id}> + </button>
        <button class="btn-borrar btn-primary" data-id=${element.id}>BORRAR </button>
        <p>subtotal por prenda: $${element.precioTotal}</p>
        </div>`;
    });
    

    let divTotal = document.createElement("div");
    let miTotal = totalDelCarrito();
    divTotal.innerHTML = 
    `<p><strong>TOTAL COMPRA: $ ${miTotal}</strong></p>
    <button class="btn-danger" id="btn1">FINALIZAR COMPRA</button>`
    sidebar.appendChild(divTotal); 
};


const restarProducto = (event) => {
    let idProducto = Number(event.target.getAttribute("data-id"));
  
    carrito = carrito.map((element) => {
      if (element.id === idProducto) {
        element.cantidad--;
        element.precioTotal = element.precioTotal - element.precio;
        return element;
      } else {
        return element;
      }
    });
    localStorage.setItem("carrito", JSON.stringify(carrito));
    inyectarHTMLcarrito();
  };

  const sumarProducto = (event) => {
    let idProducto = Number(event.target.getAttribute("data-id"));
  
    carrito = carrito.map((element) => {
      if (element.id === idProducto) {
        element.cantidad++;
        element.precioTotal = element.precioTotal + element.precio;
        return element;
      } else {
        return element;
      }
    });
    localStorage.setItem("carrito", JSON.stringify(carrito));
    inyectarHTMLcarrito();
  };
  
  const borrarProducto = (event) => {
    let idProducto = Number(event.target.getAttribute("data-id"));
    carrito = carrito.filter((element) => element.id != idProducto);
    localStorage.setItem("carrito", JSON.stringify(carrito));
    inyectarHTMLcarrito();
  };
  
  sidebar.addEventListener("click", (event) => {
    if (event.target.classList.contains("btn-menos")) {
      restarProducto(event);
    }
    if (event.target.classList.contains("btn-mas")) {
      sumarProducto(event);
    }
    if (event.target.classList.contains("btn-borrar")) {
      borrarProducto(event);
    }
  });
  
  const totalDelCarrito = () => {
    let miTotal = carrito.reduce(
      (acumulador, iterador) => acumulador + iterador.precioTotal,
      0
    );
    return miTotal;
  };
  
  $( document ).ready(function() {
    const APIURL = 'https://jsonplaceholder.typicode.com/posts' ; 
   
    const infoPost =  { totalDelCarrito }
    
    $("#btn1").click(() => { 
        $.ajax({
            method: "POST",
            url:  APIURL,
            data: infoPost,
            success: function(respuesta){
                //$(".carritoSide").append(`<div>${respuesta.totalDelCarrito}</div>`);
                swal({
                  text: "Compra realizada",
                 tittle: infoPost,
                 icon: "success",

                })
                
            }
        });
    });
  });
  

inyectarHTMLcarrito();

