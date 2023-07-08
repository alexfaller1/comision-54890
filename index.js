let nombreProducto = prompt("Ingrese el nombre del producto");
let precioProducto = prompt("Ingrese el precio del producto");
let nombreObjeto = prompt("Ingrese el nombre para el objeto producto");
let codigopostal =prompt("ingrese su codigo postal")
class Producto {
  constructor(nombre, precio) {
    this.nombre = nombre;
    this.precio = precio;
  }
 calcularEnvio(codigo) {
    if (codigo !== null) {
      if (!isNaN(codigo) && codigo > 0 && codigo <= 4000) {
        if (codigo < 2000) {
         document.write(" El envío es de $2000");
        } else {
          document.write(" El envío es gratis");
        }
      } else {
        document.write(" El código postal no es válido");
      }
    }
  }
  
  
}

let producto = new Producto(nombreProducto, precioProducto);
    let objetoNombreProducto = {
        nombreObjeto: producto
    };
    objetoNombreProducto[nombreObjeto] = producto;

    for (const propiedades in producto){
      document.write(" la propiedad es "+ propiedades)
       document.write(" y el valor es "+ producto[propiedades])
   }
  

 producto.calcularEnvio(codigopostal)
























//  let nota = prompt("Introduce tu nota")

//  if (Number(nota) == nota) {
//      if (nota > 0 && nota <= 10) {
//       if (nota < 3) { document.write("muy deficiente") }
//          else if (nota < 5) { document.write("insuficente") }
//          else if (nota < 6) { document.write("suficiente") }
//          else if (nota < 7) { document.write("bien") }
//          else if (nota < 9) { document.write("muy bien") }
//          else if (nota > 9) { document.write("sos toro") }
//      }
//      else { alert("nota erronea") }
//  }
//  else {
//      if (nota != undefined) {
//          alert("pone un numero mogolico");
//     }
//  }



// let codigo
// do {
//     codigo = prompt("inserte un codigo postal");
//     if (Number(codigo) == codigo) {
//         if (codigo > 0 && codigo <= 4000) {
//             if (codigo < 2000) {
//                 alert("El envio es de $2000")
//             }

//             else if (codigo >= 2000) {
//                 alert("El envio es gratis");
//             }
//         }

//         else { alert("el codigo postal no es valido") };
//     }
//     else {

//         if (codigo !== undefined) {
//             alert("Introduce un numero valido");
//         }
//     }
// }

// do {
//     let edad = prompt("ingrese su edad")
//     if (edad != undefined) {
//         if (edad == Number(edad)) {
//             if (edad < 18) { alert("es menor de edad") }
//             else if (edad > 18) { alert("es mayor de edad") }
//         }
//         else { alert("pusiste una letra guampudo") }

//     }


// } while (condition);

// function sumar (num1,num2){
//   let res =num1 + num2;
//   document.write(res)

// }

// sumar(10,20)


// // DECLARAMOS LA VARIABLE SUMA
// var suma = 0;
// // BUCLE DO WHILE PARA INTRODUCIR VARIOS
// do {
//     // PEDIMOS EL NÚMERO POR TECLADO
//     var numero = prompt("Introduce un numero");
//     // COMPROBAMOS QUE LO INTRODUCIDO ES UN NÚMERO
//     if (Number(numero) == numero) {
//         // CONVERTIMOS EL NÚMERO EN INTEGER (POR SI ACASO)
//         numero = Number(numero);
//         // SUMAMOS LO QUE HAY EN LA VARIABLE SUMA CON ESE NÚMERO
//         suma = suma + numero;
//     }
//     // SI LO INTRODUCIDO NO ES UN NÚMERO
//     else {
//         // SI SE PULSÓ ACEPTAR SIN PONER UN NÚMERO VÁLIDO
//         if (numero != undefined) {
//             alert(numero + " No es un numero");
//         }
//     }
// // VOLVEMOS ARRIBA MIENTRAS NO SE PULSE CANCELAR
// } while (numero != undefined);
// // SI SE PULSÓ CANCELAR SALE DEL BUCLE E IMPRIME EL RESULTADO
// document.write(suma);

// function sumar(numero1,numero2){
//     suma = Number(numero1) + Number(numero2)
//     return suma
// }

// a=prompt("pone un numero")
// b=prompt("pone otro numero")

// resultado =sumar(a,b)
// document.write(resultado)

// array1 = [1, 2, 3, 4, 5, 6, 7, 8, 9,]
// array2 = [10, 11, 12, 13, 14, 15, 16, 17, array1]
// for (let i in array2) {
//     if (i == 8) {
//         for (let i of array1) {
//             document.write(i)
//         }
//     }
//     else { document.write(array2[i]) }

// }
// let algo = prompt("escribi algo")
// if (algo === null || algo === "") {
//   alert("escribi algo ortiva")
// }
// else if (Number(algo) == algo) {
//   alert("escribiste un numero")
//   if (algo > 100) { alert("pusiste un nunmero mayor a 100") }
//   else if (algo < 100) { alert("pusiste un numero menor 100") }
// }
// else { alert("pusiste algo que no es un numero") }



// function obtenerPromedio(numeros) {
//   let suma = 0;

// //   for (let i = 0; i < numeros.length; i++) {
//     suma += numeros[i];
// suma = suma + numeros[i]
// //   }

// //   let promedio = suma / numeros.length;

// //   return promedio;
// // }

// // let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// // let promedio = obtenerPromedio(array);
// // console.log(promedio);


// function sumar (numero,numero2) {
//   resultado = numero + numero2
//   document.write(resultado)

// }

// sumar(7,5)

// function encontrarMaximo (numeros){
//   for (let i = 0; i < length.numeros ; i++){

//     maximo =numeros[1];
//     document.write(maximo)
//   }
// }
// let array =[1,2,3,4,5,6,7,8,9,10]
// encontrarMaximo(array)


// function encontrarMaximo(numeros) {
//   let maximo = numeros[0]; // Asignamos el primer elemento como valor inicial máximo

//   for (let i = 1; i < numeros.length; i++) {
//     if (numeros[i] < maximo) {
//       maximo = numeros[i]; // Actualizamos el valor máximo si encontramos un número mayor
//     }
//   }

//   return maximo;
// }

// let array = [15, 8, 2, 10, 3, 6];
// let maximo = encontrarMaximo(array);
// console.log(maximo);


// const objeto ={
//   nombre:"puto"

// }
// document.write(objeto);

// var nombre = prompt("Ingresa tu nombre:");
// var nombreMayusculas = nombre.toUpperCase();

// document.write(nombreMayusculas)


// let ingrediente1 = prompt("Ingrese su primer ingrediente")
// let ingrediente2 = prompt("ingrese su segundo ingrediente")
// let ingrediente3 = prompt("ingrese su tercer ingrediente")
// let ingrediente4 = prompt("ingrese su cuarto ingrediente")

// let receta = `<ul>
// <li>${ingrediente1}</li>
// <li>${ingrediente2}</li>
// <li>${ingrediente3}</li>
// <li>${ingrediente4}</li>
// </ul>`
// document.write(receta)
// let a = parseInt(prompt("Ingresa un número"));
// let b = parseInt(prompt("Ingresa otro número"));

// let resultado = a + b;
// document.write(resultado);



// FUNCIONES CONTRUSCTORAS

// function Persona(nombre, apellido, edad) {
//     this.nombre = nombre
//     this.apellido = apellido
//     this.edad = edad
//     // this.hablar = function () { console.log("Hola soy " + this.nombre + " y mi apellido es " + this.apellido + " y tengo " + this.edad) }
// }

// const alex = new Persona('alex', 'faller', 19)




// for (const propiedades in alex) { console.log("la propiedad es",propiedades)
// console.log("el valor de la propiedad es",alex[propiedades])}

//  class Persona {
//     constructor(nombre, apellido, edad){
//         this.nombre = nombre
//         this.apellido = apellido
//         this.edad = edad
//     }
//     hablar() {  console.log("Hola soy " + this.nombre + " y mi apellido es " + this.apellido + " y tengo " + this.edad)}
// }


// const alex = new Persona("alex", 'faller', 19)
// for (const propiedades in alex){
//     console.log("la propiedad es "+ propiedades)
//     console.log("y el valor es "+ alex[propiedades])
// }
// alex.hablar()

//   const nombreProducto =prompt("ingrese el nombre de su producto")
//   const ingresePrecioProducto =prompt("ingrese el precio de su producto")
//   const nombreObjeto = prompt("Ingrese el nombre de su objeto");
//   class Producto {
//       constructor(nombre,precio ){
//           this.nombre = nombre
//           this.precio = precio
//       }
//   }

//   const  = new Producto(nombreProducto,ingresePrecioProducto)



 


//  nombre1=prompt("ingresa un nombre ")
//  nombre2=prompt("ingresa un nombre ")
//  nombre3=prompt("ingresa un nombre ")

// let array =[nombre1,nombre2,nombre3]

// document.write(array)