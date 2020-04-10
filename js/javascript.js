function inicializar() {
  // 5.2 tipos de literales
  document.getElementById("n1").innerHTML = 'numéricos como: 2020 23.4 45e3';
  document.getElementById('a1').innerHTML =
    "strings: texto puede ser con comillas dobles o sencillas";
  // 6.1 Objetos y funciones @ 5:39
  qClicks=0;
}

function clickEnBoton() {
  qClicks++;
  document.getElementById("bClicks").innerHTML = qClicks;
  document.getElementById("tClicks").value = document.getElementById("texto1").value;
}

function generarError() {
  //numero1=0;
  try {
    numero = numero1 * 1;
    throw('error personalizado');
    alert("no se ejecutan");
  } catch (e) {
    alert(e);
  } finally {
    // no entiendo para qué
  }
}
