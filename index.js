const Coche = {
    marca: "volvo",
    modelo: "S40",
    matricula: 798797,
  
    acelerar: function() {
        console.log("a todo gas");
     
    },

    frenar: function() {
        console.log( "cuidado con la abuelita en el paso de cebra");
    }
    
  };

  class Turismo {
    constructor(marca,modelo,matricula){
      this.marca=marca
      this.modelo=modelo
      this.matricula=matricula
    }
     acelerar() {
        console.log("a todo gas");
    }

    frenar() {
        console.log( "cuidado con la abuelita en el paso de cebra");
    }
  };

  const miTurismo = new Turismo("Asiento", "Leon", "1234AAA") 
  const miSegundoTurismo = new Turismo("Vuelve", "XC90", "1540GAB") 

  class Persona {
    constructor(nombre, apellidos, edad, gustosMusicales){
      this.nombre=nombre
      this.apellidos=apellidos
      this.edad=edad
      this.gustosMusicales=gustosMusicales
    }
    envejecer(){
      this.edad= this.edad+1;
    }
    nuevoGusto(a){
       this.gustosMusicales.push(a);
      
    }
  };

  const rockero = new Persona("Freddie", "Mercury", 45,["Queen", "AC/DC"] )
 

  function aplicar__nuevoGusto() {
    rockero.nuevoGusto("My Chemical Romance")
  }

  const Perro= [
    "nombre",
    "raza", 
    function popo(){
      return "Ha hecho "+ Math.random() * 3 + " caquitas"
    }
    ];

    const Perrito = {
        nombre:"nombre",
        raza: "raza",
         popo(){
         return "Ha hecho "+ Math.random() * 3 + " caquitas"
        }
        };

        class Perrazo {
            constructor(nombre, raza){
              this.nombre=nombre
              this.raza=raza
            }
            popo(){
                return "Ha hecho "+ Math.random() * 3 + " caquitas"
              };
          };
