## Actividad
Desarrollar un servidor web utilizando Express que proporcione una API REST para gestionar una lista de tareas pendientes (To-Do List). La API deberá permitir realizar operaciones CRUD (Crear, Leer, Actualizar y Eliminar) sobre las tareas, así como calcular estadísticas sobre las mismas.

**Requisitos del ejercicio:**
1. Crear un servidor web utilizando Express.
2. Definir rutas para las siguientes operaciones CRUD sobre las tareas:
	- Crear una nueva tarea.
	- Leer todas las tareas.
	- Leer una tarea específica por su ID.
	- Actualizar una tarea existente.
	- Eliminar una tarea por su ID.
3. Implementar una funcionalidad adicional para calcular estadísticas sobre las tareas, como:
		Cantidad total de tareas.
		Tarea más reciente (fecha de creación más reciente).
		Tarea más antigua (fecha de creación más antigua).
		Cantidad de tareas completadas y pendientes.
4. Utilizar estructuras de datos simples (p. ej., arrays, objetos) para almacenar las tareas en memoria en lugar de una base de datos real.
5. Implementar manejo de errores para casos como solicitudes inválidas o tareas que no existen.
6. Probar la API utilizando herramientas como Postman, Insomnia, etc. para asegurarse de que todas las operaciones CRUD y el cálculo de estadísticas funcionen correctamente.



## Uso con Postman
 (asegure tener el agente postman local)

 
#### a. Crear una Nueva Tarea (POST)
- Selecciona el Método: POST
- Ingresa la URL: http://localhost:3000/tareas
- Selecciona la pestaña Body y elige la opción raw.
- Selecciona el formato JSON en el menú desplegable (dentro de la pestaña Body).
- Introduce el JSON para la nueva tarea. Ejemplo:

```json
    {
      "nombre": "Comprar leche",
      "completada": false
    }
```
- Hacer click en send

#### b. Leer Todas las Tareas (GET)b. Leer Todas las Tareas (GET)
- Selecciona el Método: GET
- Ingresa la URL: http://localhost:3000/tareas
- Haz clic en Send.
- Revisa la respuesta para ver la lista de todas las tareas.
#### c. Leer una Tarea Específica (GET)
- Selecciona el Método: GET
- Ingresa la URL: http://localhost:3000/tareas/:id
- Reemplaza :id con el ID de la tarea que deseas leer (por ejemplo, http://localhost:3000/tareas/1).
- Haz clic en Send.
- Revisa la respuesta para ver los detalles de la tarea con el ID especificado.
#### d. Actualizar una Tarea (PUT)
- Selecciona el Método: PUT
- Ingresa la URL: http://localhost:3000/tareas/:id
- Reemplaza :id con el ID de la tarea que deseas actualizar (por ejemplo, http://localhost:3000/tareas/1).
- Selecciona la pestaña Body y elige la opción raw.
- Selecciona el formato JSON en el menú desplegable.
- Introduce el JSON para actualizar la tarea. Ejemplo:
```json
{
  "nombre": "Comprar pan",
  "completada": true
}
```
#### e. Eliminar una Tarea (DELETE)
- Selecciona el Método: DELETE
- Ingresa la URL: http://localhost:3000/tareas/:id
- Reemplaza :id con el ID de la tarea que deseas eliminar (por ejemplo, http://localhost:3000/tareas/1).
- Haz clic en Send.
- Revisa la respuesta:
   Un código de estado 204 No Content indica que la tarea se eliminó correctamente.
#### f. Obtener Estadísticas sobre las Tareas (GET)
- Selecciona el Método: GET
- Ingresa la URL: http://localhost:3000/estadisticas
- Haz clic en Send.
- Revisa la respuesta para ver las estadísticas sobre las tareas, como el total de tareas, la tarea más reciente, la tarea más antigua, y la cantidad de tareas completadas y pendientes.
  
