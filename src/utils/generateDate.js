const crearFecha = () =>{
    const fechaActual = new Date();
    
    const año = fechaActual.getFullYear();
    const mes = String(fechaActual.getMonth() + 1).padStart(2, '0'); // se suma 1 al mes porque los meses en JavaScript comienzan en 0
    const dia = String(fechaActual.getDate()).padStart(2, '0');
    const horas = String(fechaActual.getHours()).padStart(2, '0');
    const minutos = String(fechaActual.getMinutes()).padStart(2, '0');
    const segundos = String(fechaActual.getSeconds()).padStart(2, '0');
    
    const fechaComoCadena = `${año}-${mes}-${dia} ${horas}:${minutos}:${segundos}`;
    return fechaActual.toISOString()
}

export {crearFecha}