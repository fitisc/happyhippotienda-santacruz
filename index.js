const productos = [
    {
      id: 1,
      nombre: "Remera niño",
      precio: 1500,
      img: "./img/remeratimon.png",
      cantidad: 1,
      
    },
    {
      id: 2,
      nombre: "remera bebe",
      precio: 1500,
      img: "./img/remeramundo.png",
      cantidad: 1,
      
    },
    {
      id: 3,
      nombre: "vestido nena",
      precio: 1750,
      img: "./img/vestidoplay.png",
      cantidad: 1,
      
    },
    {
      id: 4,
      nombre: "short unisex",
      precio: 1000,
      img: "./img/shortgris.png",
      cantidad: 1,
      
    },
    {
        id: 5,
        nombre: "joggins varon",
        precio: 1700,
        img: "./img/jogginsport.png",
        cantidad: 1,
        
      },
      {
        id: 6,
        nombre: "buzo canguro",
        precio: 3000,
        img: "./img/buzocanguro.png",
        cantidad: 1,
        
      },
      {
        id: 7,
        nombre: "campera rompeviento",
        precio: 3500,
        img: "./img/camperaverde.png",
        cantidad: 1,
        
      },
  ];

  let carrito = JSON.parse(localStorage.getItem("carrito")) || [];
let div1 = document.querySelector("#prendasDiv");
let sidebar = document.querySelector(".carritoSide");

const introducirCards = () => {
productos.forEach((element)=>{
    div1.innerHTML += `<div class="card">
    <img src="${element.img}" style="width:100%">
    <h3>${element.nombre}</h3>
    <h4>PRECIO : $<span>${element.precio}</span></h4>
    <button class="btn-buy" data-id="${element.id}">AGREGAR</button>
    </div>
    `;
});
let btnBuy = document.querySelectorAll(".btn-buy");

btnBuy.forEach((element)=>{
    element.addEventListener("click", (event) => {
        enviarAlCarrito(event.target.parentElement);    
    });
});

};

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
    carrito.forEach((element) => {
        sidebar.innerHTML += ` 
        <div>
        <h3>${element.nombre}</h3>
        <h4>LLEVO: ${element.cantidad}</h4>
        <img src="${element.imagen}" style="width:50%">
        <button class="btn-menos" data-id=${element.id}> - </button>
        <button class="btn-borrar" data-id=${element.id}>BORRAR</button>
        </div>
        `
    });
    let divTotal = document.createElement("div");
    let miTotal = totalDelCarrito();
    divTotal.innerHTML = `<p>TOTAL: ${miTotal}<p>`;
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
  

  
introducirCards();
inyectarHTMLcarrito();