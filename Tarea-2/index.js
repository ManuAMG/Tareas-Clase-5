const selectorDatos = document.querySelector("#ingresar");

selectorDatos.onclick = function(){
    const nombreUsuario = document.querySelector("#nombre-usuario").value
    const segundoNombreUsuario = document.querySelector("#segundoNombre-usuario").value
    const apellidoUsuario = document.querySelector("#apellido-usuario").value
    const edadUsuario = Number(document.querySelector("#nombre-usuario").value)

let juntarDatos = `Hola ${nombreUsuario} ${segundoNombreUsuario}, tu apellido es ${apellidoUsuario} y tenes ${edadUsuario} años`

document.querySelector("#resultado").innetText = juntarDatos

const saludarUsuario = document.querySelector("h1")
saludarUsuario.innerText = `Hola ${nombreUsuario}`
}