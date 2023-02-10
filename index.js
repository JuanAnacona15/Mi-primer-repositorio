const inicio = new Date('07/26/22');
const mls = 24 * 60 * 60 * 1000;
diasTranscurridos = 20
function calcularDias(){
    hoy = new Date();
    mlsTranscurridos = Math.abs(inicio.getTime() - hoy.getTime());
    diasTranscurridos = Math.round(mlsTranscurridos/mls);
    console.log(diasTranscurridos)
    
}

calcularDias()


