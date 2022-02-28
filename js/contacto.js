const nodoPrincipal = document.getElementById("formulario");

const formFields = [
    {
        id: "name",
        label: "Nombre",
    },
    {
        id: "email",
        label: "Email",
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
        <br><label for="${this.id}">${this.label}</label>
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
    <h5 style="text-decoration:underline">INFORMACION PERSONAL</h5>
    <form id="form1">
        ${contenidoDelForm}<br>
        <label for="contanos mas sobre tu consulta">Contanos sobre tu consulta</label> <br>
            <textarea name="motivo" id="motivo" cols="50" rows="10"></textarea> <br>
        <button type="submit" id="save1">Enviar</button> 
        <button type="reset" id="cancelar">Cancelar</button>
    </form>
    `


    let boton = document.getElementById("save1");
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
   


document.getElementById("formulario").addEventListener("submit", (evt) => {
   evt.preventDefault()
    swal({
        text: "Gracias! Responderemos a la brevedad",
       tittle: form1,
       icon: "success",

      })
    console.log("Validando el formulario")
    //document.getElementById("formulario").submit()


    
    let contacto = JSON.stringify(localStorage.getItem("contacto")) || [];
    localStorage.setItem("contacto", JSON.parse(contacto));
})

