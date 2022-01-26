const nodoPrincipal = document.getElementById("container");

const formFields = [
    {
        id: "productName",
        label: "Nombre del producto",
    },
    {
        id: "imageUrl",
        label: "Imagen url del producto",
    },
    {
        id: "category",
        label: "categoria",
    },
    {
        id: "tallesProductos",
        label: "Talle",
    },
    {
        id: "price",
        label: "Precio",
    }
]

class Input{
    constructor(id, label) {
        this.id = id
        this.label = label
        this.nodo = document.createElement("div")
        this.nodo.innerHTML = this.generarHTML()
    }

    obtenerNodo() {
        return this.nodo
    }
    generarHTML() {
        return `
                <label for="${this.id}">${this.label}</label>
                <input id="${this.id}"/>
        `  
    }

    agregaEventos(){

    }
}

let contenidoDelForm = '';
for(let n=0; n < formFields.length; n++) {
    const input = new Input(formFields[n].id, formFields[n].label)
    contenidoDelForm = contenidoDelForm + input.generarHTML()
 
}

nodoPrincipal.innerHTML = `
    <h1>Administrador</h1>
    <form id="formulario">
        ${contenidoDelForm} 
        <button type=" submit" id="save">Guardar</button> 
    </form>
    `
    let boton = document.getElementById("save");
    boton.addEventListener("click", function() {
        console.log("clickeando...")
    })

    const inputName = document.getElementById("productName")
    inputName.addEventListener("change", (evt) => {
        console.log(evt.target.value)
    })

    const inputImage = document.getElementById("imageUrl")
    inputImage.addEventListener("change", (evt) => {
        console.log(evt.target.value)
    })
    const inputCategory = document.getElementById("category")
    inputCategory.addEventListener("change", (evt) => {
        console.log(evt.target.value)
    })

    const inputTalle = document.getElementById("tallesProductos")
    inputTalle.addEventListener("change", (evt) => {
        console.log(evt.target.value)
    })

    const inputPrecio = document.getElementById("price")
    inputPrecio.addEventListener("input", (evt) => {
        console.log(evt.target.value)
    })

document.getElementById("formulario").addEventListener("submit", (evt) => {
    evt.preventDefault()
    console.log("Validando el formulario")
    document.getElementById("formulario").submit()
})




