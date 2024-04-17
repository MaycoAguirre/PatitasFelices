alert(
  "Bienvenido a Patitas Felices\nUn sitio para adoptar o dar en adopción a perritos"
);

function validarEdadPerro(edad) {
  return edad === "1" || edad === "2" || edad === "3";
}

let opciones;
let edadPerro;
let razaPerro;
let telefono;

while (true) {
  opciones = prompt(
    "¿Desea adoptar o postular un perrito?\n1. Adoptar\n2. Postular"
  );
  if (opciones === "1" || opciones === "2") {
    break;
  } else {
    alert("Por favor, seleccione una opción válida.");
  }
}

switch (opciones) {
  case "1":
    edadPerro = prompt(
      "Seleccione una edad del perro.\n1. Cachorro\n2. Joven\n3. Adulto"
    );
    while (!validarEdadPerro(edadPerro)) {
      alert("Opción no válida para la edad del perro.");
      edadPerro = prompt(
        "Seleccione una edad del perro.\n1. Cachorro\n2. Joven\n3. Adulto"
      );
    }
    break;
  case "2":
    edadPerro = prompt(
      "Indique de qué edad es el perro a postular.\n1. Cachorro\n2. Joven\n3. Adulto"
    );
    while (!validarEdadPerro(edadPerro)) {
      alert("Opción no válida para la edad del perro.");
      edadPerro = prompt(
        "Indique de qué edad es el perro a postular.\n1. Cachorro\n2. Joven\n3. Adulto"
      );
    }
    break;
  default:
    alert("Opción no válida");
    break;
}

do {
  razaPerro = prompt(
    "Por favor, ingrese la raza del perro:\n1. Labrador\n2. Pitbull\n3. Mestizo\n4. Bulldog"
  );
  if (
    razaPerro !== "1" &&
    razaPerro !== "2" &&
    razaPerro !== "3" &&
    razaPerro !== "4"
  ) {
    alert(
      "Opción no válida para la raza del perro. Por favor, seleccione una opción del 1 al 4."
    );
  }
} while (
  razaPerro !== "1" &&
  razaPerro !== "2" &&
  razaPerro !== "3" &&
  razaPerro !== "4"
);

do {
  telefono = prompt("Por favor, ingrese su número de teléfono:");
  if (telefono.length !== 10 || isNaN(telefono)) {
    alert(
      "Número de teléfono no válido. Por favor, ingrese un número de teléfono de 10 dígitos."
    );
  }
} while (telefono.length !== 10 || isNaN(telefono));

alert("¡Gracias por su interés! Nos pondremos en contacto con usted pronto.");