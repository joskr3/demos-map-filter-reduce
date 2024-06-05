// map vs filter vs reduce
//inmutabilidad -> que no se modifica , sino que se crea uno nuevo

//let arrayNuevo = [1,2,3,4]

//map -> mapear -> recorrido


let misAhorros = [ 10, 20, 30, 40, 50, 60 ]


function invertir( miMonto ) {
  return miMonto * 10
}

let inversion = misAhorros.map( ( miMonto ) => {
  return miMonto * 10
} )

let inversion2 = misAhorros.map( ( miMonto ) => invertir( miMonto ) )

console.log( inversion2 )



let misNombres = [ 'J', 'o', 's', 'u', 'e' ]


let mayusculas = misNombres.map( ( letra, index ) => { return `${index}. ${letra.toUpperCase()}` } )

console.log( mayusculas )



let programa = [ 'v12', 'v24', 'v21', 'v32' ]

// con el metodo map quiero que le agregen a cada elemento el string 'telefono -> 'telefono v12'


let arrayProductos = [ 'leche', 'huevos', 'pan', 'azucar', 'vegetales' ]

// cada elemento debera lucir asi: el producto -> leche costo  $32



let preciosEnDolares = [ 23, 43, 23, 12, 12, 12, 45 ]

preciosEnDolares.map( ( precio ) => {
  console.log( precio * 3.40 )
} )


// filter ->filtro


let paisesDelMundo = [ 'Argentina', 'Peru', 'Alemania', 'Italia', 'Inglaterra' ]

let paisesCampeonesDelMundo = paisesDelMundo.filter( ( pais ) => pais !== 'Peru' )

console.log( paisesCampeonesDelMundo )


let paisesConComidaRica = paisesDelMundo.filter( ( pais ) => pais === 'Peru' )

console.log( paisesConComidaRica )


let notasDelBimestre = [ 10.5, 6.0, 20, 14.3, 5, 3.6 ]

//quiero mostrar a los aprobados y a los desaprobados 


// reduce -> reducir

let gananciasDelDia = [ 12.3, 32, 5.7, 76.1, 10, 10, 10, 28 ]

const total = gananciasDelDia.reduce( ( suma, valorIndiviadual ) => suma + valorIndiviadual, 0 )

console.log( total )


const horasDelDia = [ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23 ]

const horasEnUnDia = horasDelDia.reduce( ( suma, hora ) => suma + hora, 0 )

console.log( horasEnUnDia )



let numeroClientes = 35


let aplicarDescuentos = 20


let clientesConDescuento = numeroClientes - aplicarDescuentos

console.log( clientesConDescuento )


aplicarDescuentos = 32

clientesConDescuento = numeroClientes - aplicarDescuentos

console.log( clientesConDescuento, "2" )



function cuadradosConMap( ...numeros ) {
  return numeros.map( ( numero ) => numero ** 2 )
}

console.log( cuadradosConMap( 2, 4, 5 ) )



function restarAImpares( ...numeros ) {
  return numeros.map( ( numero ) => numero % 2 !== 0 && numero - ( numero * 0.25 ) )
}


console.log( restarAImpares( 1, 2, 3, 4, 5, 6 ) )




