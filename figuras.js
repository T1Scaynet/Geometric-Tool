// Código del Cuadrado
console.group("Cuadrados");

const ladoCuadrado = 5;
console.log("los lados del cuadrado miden:" + ladoCuadrado + "cm");

const perimetroCuadrado = ladoCuadrado * 4;
console.log("los lados del cuadrado miden:" + perimetroCuadrado + "cm");

const areaCuadrado = ladoCuadrado * ladoCuadrado;
console.log("el área del cuadrado es:" + areaCuadrado + "cm²");

console.groupEnd();


// Código del Triangulo
console.group("Triangulos");

const ladoTriangulo1 = 6;
const ladoTriangulo2 = 6;
const baseTriangulo = 4;

console.log(
    "los lados del triangulo miden:"
    + ladoTriangulo1 
    + "cm, "
    + ladoTriangulo2
    + "cm, " 
    + baseTriangulo 
    + "cm"
);

const alturaTriangulo = 5.5;
console.log("la altura del triámgulo es de: " + alturaTriangulo + "cm");

const perimetroTriangulo = ladoTriangulo1 + ladoTriangulo2 + baseTriangulo;
console.log("el perimetro del triangulo es de: " + perimetroTriangulo + "cm");

const areaTriangulo = (baseTriangulo * alturaTriangulo) / 2;
console.log("el area del triangulo es de: " + areaTriangulo + "cm²");

console.groupEnd();


// Código del Circulo
console.group("Circulos");

// Radio
const radioCirculo = 4;
console.log("el radio del circulo es: " + radioCirculo + "cm");

// Diámetro
const diametroCirculo = radioCirculo * 2;
console.log("el diametro del circulo es: " + diametroCirculo + "cm");


// PI
const PI = Math.PI;
console.log("PI es: " + PI + "cm");


// Circunferencia
const perimetroCirculo = diametroCirculo * PI;
console.log("el perimetro del circulo es: " + perimetroCirculo + "cm");

// Área
const areaCirculo = (radioCirculo * radioCirculo) * PI;
console.log("el area del circulo es: " + areaCirculo + "cm²");

console.groupEnd();