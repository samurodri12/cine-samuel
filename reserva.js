let contenedor=document.getElementById("contenedor")
    contenedor.addEventListener("click",function(evento){
        if(evento.target.classList.contains("w-100")){
            
            evento.target.src="imagenes/roja.png"
        }
    })



let boton=document.getElementById("boton")
boton.addEventListener("click",function(evento){
    evento.preventDefault()
    let asiento=document.getElementById("asiento").value
    let cantidad=document.getElementById("cantidad").value

    let valorPrefenrencial=22000
    let valorGeneral=15000


    if(asiento=="preferencial"){

        alert("el total de su compra es "+(valorPrefenrencial*cantidad))

    }else {

        alert("el total de su compra es "+(valorGeneral*cantidad))

    }


})

