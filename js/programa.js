$(document).ready(inicio);

const propiedades=["flex-orientation"]

function limpiar_css(){
    
}
function generar_css(){
    let elemento_caja=$("#caja")
    /*Modificamos la flex-orientation*/
    let valor_orientacion=$("#orientacion").val()
    elemento_caja.css("flex-direction", valor_orientacion)
    
    /*Modificamos el wrapping*/
    let valor_wrapping=$("#wrapping").val()
    elemento_caja.css("flex-wrap", valor_wrapping)
    
    /*Modificamos la alineacion*/
    let valor_alineacion=$("#alineacion").val()
    trozos=valor_alineacion.split(":")
    propiedad=trozos[0]
    valor=trozos[1]
    elemento_caja.css(propiedad, valor)
    
}
function inicio(){
    listas=["#orientacion", "#wrapping", "#alineacion"]
    for (lista of listas){
        $(lista).change(generar_css)
    }
}