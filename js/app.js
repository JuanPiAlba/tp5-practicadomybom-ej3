let tareas = [];
let listaTareas = document.getElementById("listaTareas");
let formularioTareas = document.getElementById("formtarea");
let tarea = document.getElementById("tarea");

formularioTareas.addEventListener("submit", agregarTarea);

function agregarTarea(e) {
  e.preventDefault();
  tareas.push(tarea).value;
  crearTarea(tarea.value, tareas.length - 1);
  formularioTareas.reset();
}

function crearTarea(tarea, indice) {
  listaTareas.innerHTML =
    listaTareas.innerHTML +
    `<li class= "list-group-item d-flex justify-content-between"><p>${tarea}</p><button class="btn btn-primary" onclick="eliminarTarea${indice}" type="button">Eliminar</button></li>`;
}

function eliminarTarea(indice) {
  tareas.splice(indice, 1);
  tareas.forEach((tarea, posicion) => {
    crearTarea(tarea, posicion);
  });
  console.log(indice);
}
