// declaro variables

let nombre = prompt("Ingrese su nombre");
let apellido = prompt("Ingrese su apellido");
let anoNac = parseInt(prompt("Ingrese su año de nacimiento"));
let marca = prompt("Ingrese la Marca de su vehículo, por ej. Ford, Fiat, Renault, Chevrolet, ect.");
let modelo = prompt("Ingrese el Modelo, ej. Fiesta, Focus, Duster, Captur, Toro, Cronos, Spin, Cruze, etc.");
let marcaModelo = (marca + " " + modelo)
let anoFab = parseInt(prompt("Ingrese el año de fabricación"));
const year = 2021;    
var edad = year - anoNac;
let antiguedad = (year - anoFab);

// Funciones

function descEdad () {    
   
    if (edad > 39 && edad <56) {
        return 5;
    }
    else if (edad > 55 && edad < 66) {
        return 3;
    }
    else{
        return 0;
    }
}

function precio () {
    
    switch(marcaModelo) {

        case "Ford Fiesta": return Math.round((1500000/3500*30) + (antiguedad*10));

        case "Ford Focus": return Math.round((2000000/3500*20) + (antiguedad*10));

        case "Renault Duster": return Math.round((2000000/3500*20) + (antiguedad*10));
        
        case "Renault Captur": return Math.round((2500000/3500*20) + (antiguedad*10));
        
        case "Fiat Toro": return Math.round((3500000/3500*20) + (antiguedad*10));
        
        case "Fiat Cronos": return Math.round((2000000/3500*20) + (antiguedad*10));

        case "Chevrolet Spin": return Math.round((2500000/3500*20) + (antiguedad*10));

        case "Chevrolet Cruze": return Math.round((3500000/3500*20) + (antiguedad*10));

        default: return Math.round((2000000/3500*20) + (antiguedad*10));
    }
}

function descMarca() {
    switch (marca) {

        case "Ford": return 6;    

        case "Renault": return 7;

        case "Fiat": return 5;

        case "Chevrolet": return 4;

        default: return  0;
    }    
}

function precioFinal() {    

    return Math.round (precio() - ((precio() * (descEdad() + descMarca()))/100));

}

function mostrar() {

    if (descMarca() > 0 && descEdad() > 0) {
        alert ("Estimado " + nombre + " " + apellido + " para su vehículo " + marca + " " + modelo + " del año " + anoFab + " tiene un descuento del " + descMarca() + " % sobre el precio de lista $" + precio());

        alert ("Además por tener " + edad + " años de edad, posee un descuento extra del " + descEdad() + " %");

        alert ("Obteniendo un descuento TOTAL de " + (descEdad() + descMarca()) + " %, Felicidades!!, el valor de la cuota mensual es de $ " + precioFinal());

    } //descuento marca y edad        

    else if (descMarca() > 0) {
        alert ("Estimado " + nombre + " " + apellido + " para su vehículo " + marca + " " + modelo + " del año " + anoFab + " tiene un descuento del " + descMarca() + " % sobre el precio de lista $" + precio() + ", Felicidades!!, el valor de la cuota mensual es de $" + precioFinal());

    } //descuento por marca
    
    else if (descEdad() > 0) {
        alert ("Estimado " + nombre + " " + apellido + " por tener " + edad + " años de edad, posees un descuento del " + descEdad() + " % para su vehículo " + marca + " " + modelo + " del año " + anoFab + " sobre el precio de lista $" + precio() + ", Felicidades!!, el valor de la cuota mensual es de $ " + precioFinal());

    } // descuento por edad   

    else {
    alert ("Estimado " + nombre + " " + apellido + " su vehículo " + marca + " " + modelo + " del año " + anoFab + " por el momento NO tiene descuento disponible, el valor de la cuota mensual es de $ " + precioFinal());

    } // sin descuento
}

mostrar();
