
// 1.- Crea el objeto Coche con las siguientes propiedades: marca, modelo y matricula y los métodos: acelerar {imprimirá por consola "a todo gas"} 
// y frenar {imprimirá por consola "cuidado con la abuelita en el paso de cebra"}

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
//   2.- Crea la clase Turismo con las siguientes propiedades: marca, modelo y matricula declaradas en el constructor 
//   y los métodos: acelerar {imprimirá por consola "a todo gas"} 
//   y frenar {imprimirá por consola "cuidado con la abuelita en el paso de cebra"}

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

    // 9.- Crea el objeto Perrito con las propiedades: nombre, raza y el método popo {devuelve ("Ha hecho " + Math.random() * 3 + " caquitas")}

    const Perrito = {
        nombre:"nombre",
        raza: "raza",
         popo(){
         return "Ha hecho "+ Math.random() * 3 + " caquitas"
        }
        };

        // 10.- Crea la clase Perrazo con las propiedades: nombre, raza y el método popo {devuelve ("Ha hecho " + Math.random() * 3 + " caquitas")}
        
        class Perrazo {
            constructor(nombre, raza){
              this.nombre=nombre
              this.raza=raza
            }
            popo(){
                return "Ha hecho "+ Math.random() * 3 + " caquitas"
              };
          };

        //  11- Crea una nueva instancia de Perrazo llamada lebrelazo cuyas propiedades sean: nombre: "Gus", raza: "Lebrel"

        const lebrelazo = new Perrazo("Gus","Lebrel")

        
// Nivel intermedio
    // 12.- Crea la clase Husky que extienda la clase Perrazo (class Husky extends Perrazo) y añade la propiedad: heterocromia (booleano), 
    // la propiedad raza siempre será "Husky" y el método tieneHeterocromia (imprime por console "si" o "no" en base a la propiedad heterocromia)

    class Husky extends Perrazo {
        
        constructor(nombre, raza, heterocromia){
          super(nombre,raza)
          this.heterocromia = true
          this.raza= "Husky"
        }
        tieneHeterocromia(){
            if(this.heterocromia=== true){
            console.log("si");
            } else {
            console.log("no");
            }
        }
      }

    //   13.- Crea una nueva instancia de Husky llamada miHusky cuyas propiedades sean: nombre: "Alaska", "heterocromia": true

     const miHusky= new Husky("Alaska","Husky","heterocromia")

    //  14.- Crea la clase Coordenadas con las propiedades: x, y

        class Coordenadas {
            constructor(x,y){
                this.x=x
                this.y=y
            }
        }

    // 15.- Crea la clase Jugador con las propiedades: posicion (instancia de coordenadas), fuerza, velocidad (instancia de coordenadas), 
    // direccion (instancia de coordenadas) vida y
    //  los métodos: moverse {posicion.x += velocidad.x * direccion.x, posicion.y += velocidad.y * direccion.y}, perderVida {vida -= 1}

        class Jugador {

            constructor(posicion,fuerza,velocidad,direccion,vida){
                this.posicion= posicion
                this.fuerza= fuerza
                this.velocidad= velocidad
                this.direccion= direccion
                this.vida=vida
            }
            moverse(x,y){
                
                this.posicion.x += this.velocidad.x * this.direccion.x
                this.posicion.y += this.velocidad.y * this.direccion.y
            }
            perderVida(){
                this.vida -= 1
            }
        }

        // 16.- Crea un array de instancias de Jugador llamado jugadores
        const jugadores= []
        jugadores = new Jugador (posicion, fuerza, velocidad, direccion, vida)

        // 17.- Crea el objeto FrameworksJavaScript con la propiedad: array frameworks y
        //  el método: generarFramework {añade al array frameworksJavaScript el string (randomString() + ".js")}

       
        const FrameworksJavaScript = {
            frameworks: [],
            generarFramework(framework) {
              this.frameworks.push(`${randomString()}.js`)
            }
          }
        // 18.- Crea la clase Error_ con las propiedades: codigo, descripcion, nombre y 
        // el método: imprimirError {se imprime a si mismo (this) por pantalla}

        class Error_ {
            constructor(codigo,descripcion,nombre){
                this.codigo = codigo
                this.descripcion = descripcion
                this.nombre= nombre
            }
            imprimirError(){
               console.log(this)
            } 
        }

     

            // 19.- Crea la clase Huevera con las propiedades: huevosMaximos, huevos 
            // y el método comprarHuevos {acepta como argumento un número y añade ese número de huevos}

            class Huevera {
                constructor(huevosMaximos, huevos){
                    this.huevosMaximos=huevosMaximos
                    this.huevos=huevos
                }
                comprarHuevos(a){
                  this.huevos= a+this.huevos
                }
            }
            // 20.- Crea el objeto Nevera con las propiedades: array productos 
            // y el getter numProductos {devuelve la suma del número de productos}

            // const Nevera = {
            //     productos: [],
                
            //      get numProductos(){
            //         return this.productos.lenght
            //     }
            //     };
                const Nevera = {
                    productos: [],
                    
                     get numProductos(){
                        return sum(this.productos)
                    }
                    };

                // 21.- Crea el objeto Congelador con las propiedades: array productos 
                // y el setter compra {acepta un array como argumento y añade cada elemento a this.productos}

                const Congelador ={
                    productos: [],
                    set compra(value){
                        this.productos=value
                    }
                }
                // 22.- Crea el objeto Pecera con las propiedades: array peces y el getter numPeces {retorna el número de peces}
                //  y el setter nuevosPeces {acepta como argumento un array y añade cada elemento a this.peces}