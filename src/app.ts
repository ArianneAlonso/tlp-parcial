interface IConfiguracion{modo(produccion:string):string;}
class Configuracion implements IConfiguracion{

    private static instance: Configuracion;
    private constructor() {
    }

    public static obtenerInstancia() {
        if (!Configuracion.instance) {
            Configuracion.instance = new Configuracion();
        }
        return Configuracion.instance;
    }

    public modo(produccion: string): string {
        console.log(modo);
    }
}



const conf1 = Configuracion.obtenerInstancia();
const conf2 = Configuracion.obtenerInstancia();
conf1.set("modo", "produccion")
console.log(conf2.get("modo"));