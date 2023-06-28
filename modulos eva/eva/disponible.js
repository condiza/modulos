
import { productos } from "./productos.js";

function productosCantidad() {
    const opciones= {
        1:"granos",
        2:"aseo",
        3: "carnes",
        4:"lácteos",
};

const result= productos();
let pregunta= parseInt(prompt("marque 1:Para granos; 2:Para aseo; 3: Para carnes; 4: Para lácteos"));
if (opciones[pregunta]) {
    result[pregunta -1].forEach((producto) => {console.log(`hay ${producto.cantidad} unidades de  ${producto.nombre} `)})
}else {
    alert("opcion no valida");
}

}

export {productosCantidad}