import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {

  // 1. Definiendo un arreglo de objetos Task
  tasks: Task[] = [
    {
      name: "Tarea 1",
      status: true
    },
    {
      name: "Tarea 2",
      status: false
    },
    {
      name: "Tarea 3",
      status: false
    },
  ];

  // 1. se ejecuta al inicio cada vez
  constructor() {
    this.countTasks();
  }

  doneTasksCount: number = 0;
  pendingTasksCount: number = 0;

  countTasks() {
    let doneCount: number = 0;
    let pendingCount: number = 0;

    this.tasks.forEach(task => {
      if (task.status) {
        doneCount += 1;
      } else {
        pendingCount += 1;
      }
    });

    this.doneTasksCount = doneCount;
    this.pendingTasksCount = pendingCount;
  }
  
  // 2. Creando una funcion que recibe el valor de tipo String
  addTask(value: string) {

    // 3. Verificar si no hay valores vacíos
    if (value.trim().length === 0) {
      alert("Enter task name, please");
      return;
    }
    
   // 4. Antes de guardarse, creamos un objeto con el nuevo valor que escribe el usuario
    const newTaks: Task = {
      name: value,
      status: false // valor por defecto
    };

    // 5. ahora, registramos la nueva tarea
    this.tasks.push(newTaks);

    // 6. actualizado estado contador de tarea
    this.countTasks();
  }

  // 1. funcion que recibe el valor del indice
  taskDelete(index: number) {
    // 2. eliminar el valor dentro del arreglo a traves de su posicion
    this.tasks.splice(index, 1);

    // 3. actualizado estado contador de tarea
    this.countTasks();
  }

  complete(index: number) {
    // 1. capturamos el objeto por su indice
    const value = this.tasks[index];

    // 2. cambiar su estado de pendiente -> completado | viceversa
    value.status = !value.status;

    // 3. actualizado estado contador de tarea
    this.countTasks();
  }
 
}
