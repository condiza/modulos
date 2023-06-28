
import{productosCantidad} from './disponible.js';
import {actualizar} from './actualizar.js'
import { eliminar } from './eliminar.js';
function main() {
    let opciones=parseInt(prompt("escoja 1: para Mostrar productos disponibles; 2: Para ingresar o actualizar productos; 3: Para eliminar"));

    if(opciones==1){
        productosCantidad();
    }else if (opciones==2) {
        let opciones=parseInt(prompt("En que categoria desea realizar el cambio: 1:Para garanos; 2: Para aseo; 3: Para carnes; 4: Para lácteos"));
        actualizar(opciones);
    } else if (opciones==3) {
        let opciones=parseInt(prompt("En que categoria desea eliminar un producto: 1:Para garanos; 2: Para aseo; 3: Para carnes; 4: Para lácteos"))
        eliminar(opciones);
    } else{
        alert("opcion no valida");
    }
    
}
main()


