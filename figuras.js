const calcularRomboide= ()=>{

    let base = document.getElementById("base").value
    let altura = document.getElementById("altura").value

    let area = base*altura

    document.getElementById("resultRomboide").innerHTML= area
}


const calcularCirculo = ()=>{
    const PI = 3.1416

    let radio = document.getElementById("radio").value

    let result = (PI * (radio*radio))

    document.getElementById("resultadocirculo").innerHTML= result
}



}

const calcularAreaRectangulo = () =>{
    let base =document.getElementById("valorRectangulo1").value
    let altura = document.getElementById("valorRectangulo2").value

    let baseRectangulo = base * altura

    document.getElementById("resultadoRectangulo").innerHTML = baseRectangulo

}