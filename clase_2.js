class Humano{
    constructor(nombre, edad){
        this.nombre=nombre
        this.edad=edad
    }

    correr(){
        console.log("Humano corriendo")
    }
}
h=new Humano("Pepe",20)
h.correr()
