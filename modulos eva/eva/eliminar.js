
import { productos } from "./productos.js";

function eliminar(valor) {
    let cantidad = parseInt(prompt("que cantidad va a eliminar "));

    const resul = productos();

    const categoria = {
        1:{nombre:"granos",productos:resul[0]},
        2:{nombre:"aseo",productos:resul[1]},
        3: {nombre:"carnes",productos:resul[2]},
        4:{nombre:"lácteos",productos:resul[3]}
    }

    if (categoria[valor]) {
        categoria[valor].productos.forEach((producto)=>{console.log(`${producto.nombre} = ${producto.cantidad}`)});

        let agregar= parseInt(prompt(`¿a que producto le va quitar la cantidad dicha? (1-${categoria[valor].productos.length})`));
    
        if (agregar >= 1 && agregar <= categoria[valor].productos.length) {
            if (cantidad<= categoria[valor].productos[agregar-1].cantidad) {
                categoria[valor].productos[agregar-1].cantidad-=cantidad
                console.log(`la cantidad del ${categoria[valor].productos[agregar-1].nombre} ahora es de: ${categoria[valor].productos[agregar-1].cantidad } unidades  `)
            }else{
                alert("la cantidad ingresada no es valida ya que exede la cantidad de los productos en el almacen");
            }
            
        }else{
            alert("opcion no valida");
        }
    }else{
        alert("error")
    }

}

export {eliminar};