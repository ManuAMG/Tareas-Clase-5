const botonSueldoMensual = document.querySelector("#calcular");

botonSueldoMensual.onclick = function () {
    const sueldoAnual = Number(document.querySelector("#salarioUsuario").value)
    const MESES_EN_UN_ANIO = 12

    let sueldoMensual = sueldoAnual / MESES_EN_UN_ANIO

    document.querySelector("#salario-mensual").innerText = sueldoMensual

    return false;
}