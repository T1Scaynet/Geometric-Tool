// Código del Cuadrado
console.group("Cuadrados");

function perimetroCuadrado(lado) {
    return lado * 4;
} 
perimetroCuadrado() // llamamos a la funcion para colocar cualquier numero dentro del parentesis
// ejemplo si ponemos--- perimetroCuadrado(2) nos devolvera como resultado 8, porque ahora lado es = 2 --> es igual a return 2 * 4 = 8

function areaCuadrado(lado) {
    return lado * lado;
}
areaCuadrado() //para llamar en consola

console.groupEnd();


// Código del Triangulo
console.group("Triangulos");

function perimetroTriangulo(lado1, lado2, base) {
    return lado1 + lado2 + base;
}

function areaTriangulo(base, altura) {
    return (base * altura) / 2;
}

console.groupEnd();


// Código del Circulo
console.group("Circulos");

// Diámetro
function diametroCirculo(radio) {
    return radio * 2;
}

// PI
const PI = Math.PI;
console.log("PI es: " + PI + "cm");


// Circunferencia
function perimetroCirculo(radio) {
    const diametro = diametroCirculo(radio); // aca esta llamando a la funcion mencioanda antes, de esa forma toma toda su funcion y las trae para calcular lo que ejecuta ese funcion llamada
    return diametro * PI;
}


// Área
function areaCirculo(radio) {
    return (radio * radio) * PI;
}

console.groupEnd();


// Aqui interactuamos con el HTML
// Star Cuadrado
function calcularPerimetroCuadrado() {
    const input = document.getElementById("InputCuadrado");
    const value = input.value;

    const perimetro = perimetroCuadrado(value);
    // alert(perimetro);
};

function calcularAreaCuadrado() {
    const input = document.getElementById("InputCuadrado");
    const value = input.value;

    const perimetro = areaCuadrado(value);
    alert(perimetro);
};
// End Cuadrado

// Star Cuadrado
function calcularPerimetroTriangulo() {
    const inputLado1 = document.getElementById('InputTrianguloLado1');
    const valueLado1 = Number(inputLado1.value);
    
    const inputLado2 = document.getElementById('InputTrianguloLado2');
    const valueLado2 = Number(inputLado2.value);
    
    const inputBase = document.getElementById('InputTrianguloBase');
    const valueBase = Number(inputBase.value);

    const perimetro = perimetroTriangulo(valueLado1, valueLado2, valueBase);
    alert('El perimetro del triangulo es: ' + perimetro + 'cm');

};

function calcularAreaTriangulo() {
    const inputBase = document.getElementById('InputTrianguloBase');
    const valueBase = inputBase.value;

    const inputAltura = document.getElementById('InputTrianguloAltura');
    const valueAltura = inputAltura.value;

    const area = areaTriangulo(valueBase, valueAltura);
    alert('El área es: ' + area + 'cm²')
};
// End Cuadrado

// Star Circulo
function calcularDiametroCirculo() {
    const input = document.getElementById('InputCirculo');
    const value = input.value;

    const diametro = diametroCirculo(value);
    alert('el diametro del circulo es: ' + diametro + 'cm')
};

function calcularPerimetroCirculo() {
    const input = document.getElementById('InputCirculo');
    const value = input.value;

    const perimetro = perimetroCirculo(value);
    alert('el perimetro del circulo es: ' + perimetro + 'cm')
};

function calcularAreaCirculo() {
    const input = document.getElementById('InputCirculo');
    const value = input.value;

    const area = areaCirculo(value);
    alert('el area del circulo es: ' + area + 'cm²')
};
// End Circulo