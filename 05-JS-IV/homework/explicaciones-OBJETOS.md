1. En un archivo de texto separado que debes crear, escribe explicaciones de los siguientes conceptos como si se lo estuvieras explicando a un niño de 12 años. Hacer esto te ayudará a descubrir rápidamente cualquier agujero en tu comprensión.

	* Objetos
    --> Los objetos son como Diccionarios (en este caso Objetos) donde podemos guardar cosas  que tiene una Clave:Valor. La definicion correcta seria un "contenedor de datos". 

    Estos "objetos" comienzan con una variable declarada (var, let o const) y un nombre que nosotros le colocaremos, luego, abriremos llaves {} y alli dentro colocaremos las "claves:valor" las cuales deben estar separadas por "dos puntos" ( : ) y finalizadas por una "coma" ( , ). cuando no vamos a colocar ninguna Clave mas, no hace falta colocarle una ' , ' al final.

    ejemplo:

    const miPersona = {
        nombre: 'Noelia',
        edad: 29,
        hobbies: ['Gymnasio', 'Natacion', 'Leer', 'Reposteria'],
        mascota: 'Daisy',
        estudiante: true,
        seriesFavoritas: ['TBBT', 'TWD', 'Game oF Thrones']  //no va " , "
    };

    --> miPersona['hobbies'][3]
        >>> "Reposteria"


	* Propiedades
    ---> Nos referimos a 'una propiedad' dentro de un Objeto al conjunto "Clave:Valor". Las propiedades modifican los objetos.
    Podemos definir nuestros propios objetos. Cualquier objeto tiene propiedades; un gato tiene pelo, un auto tiene ruedas.
            
            const miPersona = {
                nombre: 'Noelia',
                edad: 29
            };
    
    Las claves 'nombre' y 'edad' junto con sus respectivos valores, son propiedades del objeto miPersona.



	* Métodos
    --> son acciones que nos permiten modificar las "propiedades de un objeto". Los paréntesis indican que estamos refiriéndonos a un método, y no a una propiedad.
    
    ""Las cosas que pueden hacer los OBJETOS, se llaman METODOS""

    >>>> --> los objetos y las propiedades podrian ser como nombres, y podemos pensar en los métodos como verbos.


	* Bucle `for…in`
    --> El bucle FOR...IN nos permite iterar (recorrer) sobre las propiedades de un objeto.
    Podemos obtener por separado o en conjunto, las claves y valores de un objeto.
    
    EJEMPLO:
        var ejemplo = {
            nombre: 'Juanita',
            apellido: 'Perez',
            edad: 34,
            nacionalidad: 'Arg'
        };

    BUCLE FOR...IN: para iterar dentro del objeto

        for (var ej in ejemplo) {
            console.log(`Clave: ${ej} : Valor: ${ejemplo[ej]}`);
        }
        
        >>> Clave: nombre : Valor: Juanita
        >>> Clave: apellido : Valor: Perez
        >>> Clave: edad : Valor: 34
        >>> Clave: nacionalidad : Valor: Arg


    * Notación de puntos vs notación de corchetes
    -->La "Notación de puntos" (dot notation )y "Notacion de corchetes" (brackets )Son formas de acceder a los valores de un objeto. 

    var ejemplo = {
        nombre: 'Juanita',
        apellido: 'Perez',
        edad: 34,
        nacionalidad: 'Arg'
    };

>ejemplo.nombre   // NOTACION DE PUNTOS
>>>"Juanita"

>ejemplo['nombre'] // NOTACION DE CORCHETES
>>>"Juanita"       // es importante no olvidar las comillas.




