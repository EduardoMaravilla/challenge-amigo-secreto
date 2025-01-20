# Challenge Amigo Secreto
Este repositorio contiene el desarrollo del [Challenge Amigo Secreto](https://app.aluracursos.com/course/logica-programacion-challenge-amigo-secreto);

## Descripción del challenge

En este desafío, se desarrollo una aplicación que permita a los usuarios ingresar nombres de amigos en una lista para luego realizar un sorteo aleatorio y determinar quién es el ***"amigo secreto"***.

El usuario deberá agregar nombres mediante un campo de texto y un botón ***"Adicionar"***. Los nombres ingresados se mostrarán en una lista visible en la página, y al finalizar, un botón ***"Sortear Amigo"*** seleccionará uno de los nombres de forma aleatoria, mostrando el resultado en pantalla.

### Funcionalidades:

 1. **Agregar nombres:** Los usuarios escribirán el nombre de un amigo en un campo de texto y lo agregarán a una lista visible al hacer clic en ***"Adicionar"***.

 2. **Validar entrada:** Si el campo de texto está vacío, el programa mostrará una alerta pidiendo un nombre válido.

 3. **Visualizar la lista:** Los nombres ingresados aparecerán en una lista debajo del campo de entrada.

 4. **Sorteo aleatorio:** Al hacer clic en el botón ***"Sortear Amigo"***, se seleccionará aleatoriamente un nombre de la lista y se mostrará en la página.

 ---

## Conocimientos Aplicados

En el desarrollo del Challenge **Amigo Secreto**, se aplicaron los siguientes conocimientos de programación y desarrollo web:

### 1. **Manipulación del DOM (Document Object Model):**
   - Uso de métodos como `document.getElementById` y `document.querySelector` para capturar elementos del DOM.
   - Actualización dinámica del contenido del DOM mediante las propiedades `innerHTML` y `value`.

### 2. **Validación de Entrada:**
   - Implementación de validaciones para asegurar que los datos ingresados por el usuario sean válidos:
     - Verificar que el campo de texto no esté vacío.
     - Validar que los nombres ingresados cumplan con un formato específico utilizando expresiones regulares (`RegExp`).

### 3. **Gestión de Arreglos:**
   - Almacenamiento dinámico de los nombres de amigos en un arreglo (`listaAmigos`).
   - Uso de métodos como `.push()` para agregar elementos al arreglo.
   - Iteración sobre el arreglo utilizando un bucle `for` y el método `map()` para generar una lista dinámica en HTML.

### 4. **Generación de Números Aleatorios:**
   - Uso de `Math.random()` y `Math.floor()` para seleccionar un índice aleatorio en el arreglo y sortear un amigo.

### 5. **Reutilización de Código:**
   - Creación de funciones reutilizables para tareas específicas como:
     - Obtener el valor de un campo de texto.
     - Limpiar el contenido de un campo.
     - Mostrar los nombres en una lista.
     - Validar la entrada del usuario.

### 6. **Buenas Prácticas en Programación:**
   - Uso de nombres descriptivos para variables y funciones.
   - Separación de responsabilidades en funciones específicas para facilitar la lectura y el mantenimiento del código.
   - Inclusión de comentarios claros para explicar el propósito de cada función.

### 7. **Experiencia del Usuario (UX):**
   - Alertas informativas para guiar al usuario en caso de errores o acciones necesarias.
   - Limpieza del campo de entrada después de agregar un nombre para mejorar la experiencia de uso.

---

Estos conocimientos fortalecieron habilidades clave en desarrollo web con JavaScript, como la manipulación del DOM, el trabajo con eventos y arreglos, y la validación de datos en tiempo real.
