document.addEventListener('DOMContentLoaded', () => {
  const productos = [
    { nombre: 'Producto 1', precio: 10 },
    { nombre: 'Producto 2', precio: 20 },
    { nombre: 'Producto 3', precio: 15 },
    { nombre: 'Producto 4', precio: 25 },
  ];
  const carrito = [];
  const productosDiv = document.getElementById('productos');
  productos.forEach((producto, index) => {
    const button = document.createElement('button');
    button.textContent = `Agregar ${producto.nombre} - $${producto.precio}`;
    button.addEventListener('click', () => agregarProductoAlCarrito(index));
    productosDiv.appendChild(button);
  });
  function agregarProductoAlCarrito(index) {
    carrito.push(productos[index]);
    guardarCarritoEnStorage();
    actualizarCarrito();
  }
  function actualizarCarrito() {
    const carritoUl = document.getElementById('carrito');
    carritoUl.innerHTML = '';
    carrito.forEach(producto => {
      const li = document.createElement('li');
      li.textContent = `${producto.nombre} - $${producto.precio}`;
      carritoUl.appendChild(li);
    });
  }
  function guardarCarritoEnStorage() {
    localStorage.setItem('carrito', JSON.stringify(carrito));
  }
  function cargarCarritoDesdeStorage() {
    const carritoGuardado = localStorage.getItem('carrito');
    if (carritoGuardado) {
      carrito.push(...JSON.parse(carritoGuardado));
      actualizarCarrito();
    }
  }
  cargarCarritoDesdeStorage();
  const botonVaciarCarrito = document.getElementById('vaciarCarrito');
  botonVaciarCarrito.addEventListener('click', () => {
    carrito.length = 0; 
    guardarCarritoEnStorage(); 
   actualizarCarrito(); 
  });
});






























// let productos=[
//   {nombre: "argentina",
//    precio: "$200",
//   img:"./assets/argentina.avif"},
//    {nombre: "boca",
//    precio: "$200",
//    img:"./assets/boca.avif"},
//    {nombre: "bayern",
//    precio: "$200",
//    img:"./assets/bayern.avif"},
//    {nombre: "arsenal",
//    precio: "$200",
//    img:"./assets/arsenal.avif"}
// ]

// let contenedorProductos = document.getElementById("productos-content")
// let carritoul = document.getElementById("carritoUl")
// let carrito = []



// productos.forEach((producto) => {
//   let div =document.createElement("div")
//   div.className = "contenedor"
//  div.innerHTML = `<h2>${producto.nombre}</h2>
//   <h3>${producto.precio}</h3>
//   <img src="${producto.img}">
//   `
//   contenedorProductos.append(div)
// let boton =document.createElement("button")
// boton.innerText ="comprar"

// div.append(boton)
// boton.addEventListener("click",() => {
//   carrito.push({
//     nombre: producto.nombre,
//     precio:producto.precio,
//     img:producto.img
//   })
// console.log(carrito)
// })
// })


//let numero1 =Number(prompt("ingrese un numero"))
// let numero2 =Number(prompt("ingrese otro numero"))
// let operador =prompt("ingrese la operacion que quiere hacer(+,-,*,/)")

// function calculadora(numero1,numero2,operador) {
//   if (operador === "" || operador === undefined ){
//     alert("no pusiste un operador valido")
  
//   }
//   else if (operador === "-"){
//     alert(numero1 - numero2)
//    }
//    else if (operador === "+"){
//     alert(numero1 + numero2 )
//    }
//    else if (operador === "/"){
//     alert(numero1 / numero2 )
//    }
//    else if (operador === "*"){
//     alert(numero1 * numero2 )
//    }
  
//   }
//  calculadora(numero1,numero2,operador)
 
// let titulo =document.getElementById("titulo")
// console.log(titulo.innerText)
// console.log (titulo.innerText = "hola pepe")

//  // recorriendo html collection
// let productoEspecial = document.getElementById("productoEspecial").innerHTML
// console.log(productoEspecial)
// let productos = document.getElementsByClassName("productos")
// for (let producto of productos)
// {console.log(producto.innerHTML)}

// // forma de cambiarlo en el dom 
// let ejemplo = document.getElementById("ejemplo")
// // con innerHTML puedo escribir html dentro,con inner text no 
// ejemplo.innerHTML=`  <h2> pepe </h2> `
//  ejemplo.className = "alex" // le agrego una clase al contenedor 
//  let nuevoTitulo = document.createElement("h2")

// nuevoTitulo.innerHTML = "alex capo"
// document.body.append(nuevoTitulo)
// //para borrarlo seria
// // nuevoTitulo.remove()

 
//  document.getElementById("nombre").placeholder = "pone un nombre"
//  document.getElementById("edad").value = " pone un numero "

 
//  let lista = document.getElementById("lista")
//  let arrayPersonas = ["alex", "nashe", "juan", "pedro"]

// for (let persona of arrayPersonas){
//   let nuevaPersona = document.createElement("li")
//   nuevaPersona.innerHTML = persona
//   lista.appendChild(nuevaPersona); 

// }



// // con backticks se puede escribir asi 
// `<h2> lalal ${lista.innerHTML}</h2>`
// let contenedor = document.createElement("div")
// document.body.appendChild(contenedor)

// productos = [
// {nombre: "pepe",
// precio : 2000},
// {nombre: "pepe",
// precio : 2000},
// {nombre: "pepe",
// precio : 2000}]
  
// for (let persona of productos) {
//   let producto = document.createElement("h1")
//   producto.innerHTML = `${persona.nombre}
//   ${persona.precio}
//   `
//   contenedor.appendChild(producto)

//query selector
// document.querySelector("#id " ".clase " "etiqueta ")
 


//  class Producto {
//    constructor(nombre, precio,envio) {
//      this.nombre = nombre;
//      this.precio = precio;
//      this.envio = envio
//    }

//    calcularEnvio(codigo) {
//      if (codigo !== null) {
//        if (!isNaN(codigo) && codigo > 0 && codigo <= 4000) {
//          if (codigo < 2000) {
//            return "El envío es de $2000";
//          } else {
//            return "El envío es gratis";
//          }
//        } else {
//          return "El código postal no es válido";
//        }
//      }
//    }
//  }

//  let productosArray = [];

//  let agregarProducto = true;
//  while (agregarProducto) {
//    let nombreProducto = prompt("Ingrese el nombre del producto");
//    let precioProducto = prompt("Ingrese el precio del producto");
//    let codigopostal = prompt("Ingrese su código postal");

//    let producto = new Producto(nombreProducto, precioProducto, codigopostal);

//    console.log("Nombre del producto: " + producto.nombre);
//    console.log("Precio del producto: " + producto.precio);
//    console.log("El costo del envio es : " + producto.calcularEnvio(codigopostal));



//    productosArray.push(producto);

//    let continuar = prompt("Desea agregar otro producto? (Si/No)");
//    if (continuar.toLowerCase() === "no") {
//      agregarProducto = false;
//    }
//  }



// let boton =document.getElementById("boton")
// boton.addEventListener("click", respuestaClick)
// function respuestaClick(){
//   console.log("tocaste el boton")
// }

// let input =document.getElementById("texto")

// input.onmousemove = function (evento) {console.log("mousemove" , evento)}


//otra forma es 


// tambien se puede hacer directamente en la etiqueta html con el atributo onclick




// boton.addEventListener("focus", respuestaClick)



// Ejemplos de funcion de orden superior que retorna una funcion

//   function mayorQue(n){
//      return (m) => m > n
//     return function (m) {return m > n}

//  }

//  let mayorQueDiez = mayorQue(10)
//  console.log(mayorQueDiez(11))


//  function asignarOperacion(operacion){
//   if (operacion == "sumar"){
//     return function(numero1,numero2){return numero1 +numero2}
//   }
//   else if (operacion == "restar"){
//     return (numero1,numero2) => numero1 -numero2
//   }
//  } 


//  let sumar = asignarOperacion("sumar")
//  let restar = asignarOperacion("restar")

//  console.log(sumar(15,33))
//  console.log(restar(20,10))
// //  Ejemplos de funcion de orden superior que toma como parametro una funcion (se llaman callbacks)
// let numeros =[1,2,3,4,5]
// function cadaUno(array,funcion)
// {
//   for(let elementos of array){
//   funcion(elementos)
// }
// }



// let total = 0
// function acumular(num){
//   total += num
// }


// cadaUno(numeros, acumular)
// console.log(total)


// const duplicado = []

// function sumarAlArray(numero)  {
//   duplicado.push(numero*2)
// }
// cadaUno(numeros ,sumarAlArray )

// // cadaUno(numeros ,(elementos) => {
// //   duplicado.push(elementos*2  )
// // })


// console.log(duplicado)




// const cursos = [
//   { nombre: "javascript", precio: 15000 },
//   { nombre: "css", precio: 10000 }
// ];


// // el find retorna el primer elemento que coincida y devuelve solo el objeto 

// let curso = cursos.find((cursoObjeto) => cursoObjeto.nombre === "css")

// // es lo mismo que el find pero devuelve booleano
// let curs1o = cursos.some((cursoObjeto) => cursoObjeto.nombre === "css")
// console.log(curs1o)

// // filter devuelve todo los que consiga,devuelve siempre array y el valor que coincide,en este caso devuelve un array que dentro tiene un objeto
// // let curso1 = cursos.filter((cursoObjeto) => cursoObjeto.nombre === "css")
// let curso2 = cursos.filter((cursoObjeto) => cursoObjeto.nombre.includes("s"))
// console.log(curso2)



// // me crea un array a partir del anterior con los elementos que coincidan con lo que busco,en este caso crea un array con javascriprt y css
// let map = cursos.map( (cursoObjeto) => cursoObjeto.nombre)
// let precioDoble = cursos.map( (cursoObjeto) => ({nombre: cursoObjeto.nombre, precio: cursoObjeto.precio*2}))

// console.log(map)
// console.log(precioDoble)

// let numerasos = [1,2,3,4,5]

// const total1 = numerasos.reduce((total, numerasosElemento )=> total += numerasosElemento,5)
// console.log(total1)

// let numeros1 = [1,2,3,4,5]

// numeros1.sort( (a,b) =>  a-b) //ascendente
// console.log(numeros1)
// numeros1.sort( (a,b) =>  b-a) //descendente
// console.log(numeros1)
// // console.log(curso1)
// // console.log(curso)

// let mayorymenos= [1,5,8,24,125,82,123,62,5,1]

// console.log(Math.max(...mayorymenos))
// // const arreglo = [1, 2, 3, 4, 5];

// // // Ejemplo 1: Imprimir cada elemento del arreglo
// // arreglo.forEach(function(elemento) {
// //   console.log(elemento);
// // });

// // // Ejemplo 2: Calcular la suma de todos los elementos del arreglo
// // let suma = 0;
// // arreglo.forEach(function(elemento) {
// //   suma += elemento;
// // });
// // console.log("La suma es:", suma);

// // // Ejemplo 3: Modificar los elementos del arreglo
// // const arreglo2 = ["Hola", "Mundo", "!"];
// // arreglo2.forEach(function(elemento, indice) {
// //   arreglo2[indice] = elemento.toUpperCase();
// // });
// // console.log(arreglo2);




// let alex = 4.50
// console.log(alex);
// console.log(Math.floor(alex)) // redondea para abajo

// console.log(Math.round(alex)) //redondea segun el decimel ejemplo 4,51 para arriba,4,49 para abajo

// console.log(Math.ceil(alex)) //redondea para arriba
// //square root /raiz cuadrada
// console.log(Math.sqrt(81))
 

// // random
// console.log (Math.random )
// //  0 >= nro > 10
// console.log (Math.random * 10)
// // 0 >= nro > 20

// console.log (Math.random * 20)
// // 0 >= nro > 50
// console.log (Math.random * 50 )
// // 20 >= nro > 50
// console.log (Math.random * 30 + 20 )

// console.log(Math.floor(Math.random()*20))

// console.log(Math.floor(Math.random()*20+1))
// console.log(Math.ceil(Math.random()*20))
// console.log(Math.ceil(Math.random()* Infinity))










// let vocales = 0
// function contarVocales(texto){
//   for (let i = 0; i < texto.length; i++) {
//     let caracter =texto[i].toLowerCase()
//     if (caracter === "a" || caracter === "e" || caracter === "i" || caracter === "o" || caracter === "u") {
//       vocales++;
// }
// }
// return vocales
// }
// console.log(contarVocales("pedo"))






// const array = ["pepe","juan","roberto "]
// function  eliminar(nombre) {
//   let nombreEliminado = array.indexOf(nombre)
//   if (nombre != -1) {
//     array.splice(nombreEliminado, 1)
//   }

// }






// .unshift agrega al principio
// .shift elimina al principio
// .push agrega a lo ultimo 
// .pop elimina a lo ultimo
// .splice(2,5) el primer numero marca el indiice a partir del cual empieza a borrar,
// .slice(desde,hasta) por ejemplo desde el indice 2 hasta el 5 los copia no modifica el array originalno incluye el hasta o sea el indice 5 no lo copia
// el segundo numero es cuantos lugares despues del comienzo borra,
// // en este caso empieza en el indice 2 y borra los siguentes 5 tipos de datos
// .join(",") hace que todo sea string por ejemplo y los separe por una coma 
// .indexof("pepe") busca si existe el string pepe en el array y si esta me devuelve la posicion en la que se encuentra,si no esta es -1
// includes() hace lo mismo pero devuelve booleano
// .reverse() modifica el original invirtiendo el orden 
// .toreverse() hace lo mismo pero sin modifica el original
// arrrayconcatenado= numeros.concat(nombres) una forma de concatenear arrays

// let listaNombres =[]
// let limite = 5

// do {
//   let nombre=prompt("ingresa tu nombre").toUpperCase()
//   listaNombres.push(nombre)
//   console.log("este es el nombre",listaNombres)
//   console.log("este es el tamaño", listaNombres.length)
  
// } while (listaNombres.length != limite);











// class Producto {
//   constructor(nombre, precio) {
//     this.nombre = nombre;
//     this.precio = precio;
//   }

//   calcularEnvio(codigo) {
//     if (codigo !== null) {
//       if (!isNaN(codigo) && codigo > 0 && codigo <= 4000) {
//         if (codigo < 2000) {
//           document.write("El envío es de $2000");
//         } else {
//           document.write("El envío es gratis");
//         }
//       } else {
//         document.write("El código postal no es válido");
//       }
//     }
//   }
// }

// let productosArray = [];

// let agregarProducto = true;
// while (agregarProducto) {
//   let nombreProducto = prompt("Ingrese el nombre del producto");
//   let precioProducto = prompt("Ingrese el precio del producto");
//   let codigopostal = prompt("Ingrese su código postal");

//   let producto = new Producto(nombreProducto, precioProducto);


//   for (const propiedades in producto) {
//     document.write("La propiedad es " + propiedades);
//     document.write(" y el valor es " + producto[propiedades]);
//   }

//   producto.calcularEnvio(codigopostal);

//   productosArray.push(producto);

//   let continuar = prompt("Desea agregar otro producto? (Si/No)");
//   if (continuar === "no") {
//     agregarProducto = false;
//   }
// }


// for (let i = 0; i < productosArray.length; i++) {
//   const productoEspecifico = productosArray[i];
//   console.log("Nombre del producto: " + productoEspecifico.nombre);
//   console.log("Precio del producto: " + productoEspecifico.precio);


// }










// let nombreProducto = prompt("Ingrese el nombre del producto");
// let precioProducto = prompt("Ingrese el precio del producto");
// let nombreObjeto = prompt("Ingrese el nombre para el objeto producto");
// let codigopostal =prompt("ingrese su codigo postal")
// class Producto {
//   constructor(nombre, precio) {
//     this.nombre = nombre;
//     this.precio = precio;
//   }
//  calcularEnvio(codigo) {
//     if (codigo !== null) {
//       if (!isNaN(codigo) && codigo > 0 && codigo <= 4000) {
//         if (codigo < 2000) {
//          document.write(" El envío es de $2000");
//         } else {
//           document.write(" El envío es gratis");
//         }
//       } else {
//         document.write(" El código postal no es válido");
//       }
//     }
//   }
  
// }

// let producto = new Producto(nombreProducto, precioProducto);
//     let objetoNombreProducto = {
//         nombreObjeto: producto
//     };
//     objetoNombreProducto[nombreObjeto] = producto;

//     for (const propiedades in producto){
//       document.write(" la propiedad es "+ propiedades)
//        document.write(" y el valor es "+ producto[propiedades])
//    }

//  producto.calcularEnvio(codigopostal)

//  let productosArray = [];
//  productosArray.push(producto); 
 
//  for (let i = 0; i < productosArray.length; i++) {
//    const productoEspecifico = productosArray[i];
//    console.log("Nombre del producto: " + productoEspecifico.nombre);
//    console.log("Precio del producto: " + productoEspecifico.precio);
//  }






// let array =[1,2,3,4,5,6,7,8,9,10]

// for (i=0; i <array.length; i++) {
//   console.log(array[i])
// }

// console.log(array.length)
// console.log(array[array.length-1])













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