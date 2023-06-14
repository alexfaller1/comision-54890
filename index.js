
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



let codigo
do {
    codigo = prompt("inserte un codigo postal");
    if (Number(codigo) == codigo) {
        if (codigo > 0 && codigo <= 4000) {
            if (codigo < 2000) {
                alert("El envio es de $2000")
            }

            else if (codigo >= 2000) {
                alert("El envio es gratis");
            }
        }

        else { alert("el codigo postal no es valido") };
    }
    else {

        if (codigo !== undefined) {
            alert("Introduce un numero valido");
        }
    }
}
while (codigo != undefined);



