
import { productos } from "./productos.js";

function actualizar(valor) {
    let cantidad = parseInt(prompt("que cantidad vas a agregar"));

    const resul = productos();

    const categoria = {
        1:{nombre:"granos",productos:resul[0]},
        2:{nombre:"aseo",productos:resul[1]},
        3: {nombre:"carnes",productos:resul[2]},
        4:{nombre:"lácteos",productos:resul[3]}
    }

    if (categoria[valor]) {
        categoria[valor].productos.forEach((producto)=>{console.log(`${producto.nombre} = ${producto.cantidad}`)});

        let agregar= parseInt(prompt(`¿a que producto le vas a agregar la cantidad dicha? (1-${categoria[valor].productos.length})`));
    
        if (agregar >= 1 && agregar <= categoria[valor].productos.length) {
            categoria[valor].productos[agregar-1].cantidad+= cantidad;
            console.info(`la cantidad del: ${categoria[valor].productos[agregar-1].nombre} ahora es: ${categoria[valor].productos[agregar-1].cantidad} unidades`)
            
        }else{
            alert("error")
        }
    }else{
        alert("error")
    }

}

export {actualizar};

