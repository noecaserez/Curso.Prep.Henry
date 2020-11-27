1. En un archivo de texto separado que debes crear, escribe explicaciones de los siguientes conceptos como si se lo estuvieras explicando a un niño de 12 años. Hacer esto te ayudará a descubrir rápidamente cualquier agujero en tu comprensión.

* Funciones Callback
    LLAMADA DE VUELTA:

    --> es la capacidad de usar una funcion como un argumento de otra funcion

    ejemplo.

    function decirHolaAlUsuario(usuario) {
        return 'Hola' + usuario;         //el usuario en argumentos proviene de otra funcion
    };                                  


    en suma, tenemos una funcion A, que es usada por una funcion B como argumento Funcion(argumento), y para ejecutar B, se necesita ejecutar A