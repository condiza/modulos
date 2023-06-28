

function productos() {
    let granos= [
        {nombre:"arroz",cantidad: 33},
        {nombre:"frijoles",cantidad: 40},
        {nombre:"lentejas",cantidad: 20},
    ];
    let aseo =[
        {nombre:"jabón",cantidad:22},
        {nombre:"límpido",cantidad:12},
        {nombre:"champú",cantidad:2}
    ];
    let carnes =[
        {nombre:"pescado",cantidad:22},
        {nombre:"res",cantidad:12},
        {nombre:"cerdo",cantidad:2}
    ];
    let lacteos =[
        {nombre:"yogurt",cantidad:22},
        {nombre:"leche",cantidad:12},
        {nombre:"kumis",cantidad:2}
    ];

    return [granos,aseo,carnes,lacteos];
}
export {productos};
