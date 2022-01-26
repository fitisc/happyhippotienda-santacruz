const nodoPrincipal = document.getElementById("container");

const formFields = [
    {
        id: "name",
        label: "Nombre",
    },
    {
        id: "email",
        label: "Email",
    },
    {
        id: "password",
        label: "Password",
    },
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
    <h1>Registro</h1>
    <form id="formulario">
        ${contenidoDelForm} 
        <button type=" submit" id="save">Guardar</button> 
    </form>
    `


    let boton = document.getElementById("save");
    boton.addEventListener("click", function() {
        console.log("clickeando...")
    })

    const inputName = document.getElementById("name")
    inputName.addEventListener("input", (evt) => {
        console.log(evt.target.value)
    })

    const inputEmail = document.getElementById("email")
    inputEmail.addEventListener("input", (evt) => {
        console.log(evt.target.value)
    })
    const inputPassword = document.getElementById("password")
    inputPassword.addEventListener("input", (evt) => {
        console.log(evt.target.value)
    })



document.getElementById("formulario").addEventListener("submit", (evt) => {
    //evt.preventDefault()
    console.log("Validando el formulario")
    document.getElementById("formulario").submit()


    localStorage.setItem("usuario", JSON.stringify(usuario));
    let usuario = JSON.parse(localStorage.getItem("usuario")) || [];
})




   
