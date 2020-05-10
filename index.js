//1
let Coche = { marca: "Asiento", modelo: "León", matricula: "1234AAA", acelerar: function () { console.log("a todo gas") }, frenar: function () { console.log("cuidado con la abuelita en el paso de cebra") } };
//2
class Turismo {
    constructor(marca, modelo, matricula) {
        this.marca = marca;
        this.modelo = modelo;
        this.matricula = matricula;
    }
    acelerar() { console.log("a todo gas") }
    frenar() { console.log("cuidado con la abuelita en el paso de cebra") };
}
//3
let miTurismo = new Turismo("Asiento", "Leon", "1234AAA");
//4
let miSegundoTurismo = new Turismo("Vuelve", "XC90", "1540GAB");
//5
class Persona {
    constructor(nombre, apellidos, edad, gustosMusicales) {
        this.nombre = nombre;
        this.apellidos = apellidos;
        this.edad = edad;
        this.gustosMusicales = gustosMusicales;
    }
    envejecer() {
        this.edad++
    };
    nuevoGusto(nuevoGusto) {
        this.gustosMusicales.push(nuevoGusto)
    }
}
//6
let rockero = new Persona("Freddie", "Mercury", 45, ["Queen", "AC/DC"]);
//7
function aplicar__nuevoGusto() {
    rockero.nuevoGusto("My Chemical Romance");
}
//8
let Perro = ["Gofo", "Terrier", function () { return ("Ha hecho " + Math.random() * 3 + " caquitas") }]
//9
let Perrito = { nombre: "Golfo", raza: "Terrier", popo: function () { return ("Ha hecho " + Math.random() * 3 + " caquitas") } };
//10
class Perrazo {
    constructor(nombre, raza) {
        this.nombre = nombre;
        this.raza = raza;
    }

    popo() {
        return "Ha hecho " + Math.random() * 3 + " caquitas";
    }
}
//11
let lebrelazo = new Perrazo("Gus", "Lebrel");


//12
class Husky extends Perrazo {
    constructor(nombre, heterocromia) {
        super(nombre, "Husky");
        this.heterocromia = heterocromia;
    }
    tieneHeterocromia() {
        console.log(this.heterocromia ? "si" : "no");
    }
}
//13
let miHusky = new Husky("Alaska", true);
//14
class Coordenadas {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }

}
//15
class Jugador {
    constructor(posicion, fuerza, velocidad, direccion, vida) {
        this.posicion = posicion;
        this.fuerza = fuerza;
        this.velocidad = velocidad;
        this.direccion = direccion;
        this.vida = vida;
    }
    moverse() {
        this.posicion.x += this.velocidad.x * this.direccion.x;
        this.posicion.y += this.velocidad.y * this.direccion.y;
    }
    perderVida() {
        this.vida -= 1;
    }
}
//16
let jugadores = [new Jugador, new Jugador];
//17
let FrameworksJavaScript = { frameworks: [], generarFramework: function () { this.frameworks.push(randomString() + ".js") } };
//18
class Error_ {
    constructor(codigo, descripcion, nombre) {
        this.codigo = codigo;
        this.descripcion = descripcion;
        this.nombre = nombre;
    }

    imprimirError() {
        console.log(this);
    }
}
//19
class Huevera {
    constructor(huevosMaximos, huevos) {
        this.huevosMaximos = huevosMaximos;
        this.huevos = huevos;
    }

    comprarHuevos(num) {
        this.huevos += num;
    }
}
//20
let Nevera = { productos: [], get numProductos() { return this.productos.length } };
//21
let Congelador = {
    productos: [], set compra(compra) {
        for (let i = 0; i < compra.length; i++) {
            this.productos.push(compra[i]);
        }
    }
}
//22
let Pecera = {
    peces: [], get numPeces() { return this.peces.length }, set nuevosPeces(nuevosPeces) {
        for (let i = 0; i < nuevosPeces.length; i++) {
            this.peces.push(nuevosPeces[i]);
        }
    }
};
//23
class Lavavajillas {
    constructor(carga) {
        this.carga = carga;
    }

    set nuevaCarga(carga) {
        if (carga.platos === undefined)
            carga.platos = this.carga.platos;
        if (carga.vasos === undefined)
            carga.vasos = this.carga.vasos;
        this.carga = carga;
    }
}
//24
class ColeccionLibros {
    constructor(libros) {
        this.libros = libros;
    }

    get ultimaAdquisicion() {
        return this.libros[this.libros.length - 1];
    }
}
//25
class Humano {
    constructor(nombre, nacimiento) {
        this.nombre = nombre;
        this.nacimiento = nacimiento;
    }

    get edad() {
        return (new Date().getFullYear() - this.nacimiento);
    }

    set edad(nuevaEdad) {
        this.nacimiento = new Date().getFullYear() - nuevaEdad;
    }
}
//26
class Horno {
    constructor(horaInicio, horaFin) {
        this.horaInicio = horaInicio;
        this.horaFin = horaFin;
    }
    get tiempoPasado() {
        let tiempo = new Date();
        return ("Llevamos " + TiempoAString(new Tiempo(tiempo.getHours() - this.horaInicio.horas, tiempo.getMinutes() - this.horaInicio.minutos)));
    }
    get tiempoRestante() {
        let tiempo = new Date();
        return ("Quedan " + TiempoAString(new Tiempo(this.horaFin.horas - tiempo.getHours(), this.horaFin.minutos - tiempo.getMinutes())));
    }
}