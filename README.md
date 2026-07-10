# Actividad 5 - Introducción a React

<p align="center">
  <strong>TECNOLÓGICO NACIONAL DE MÉXICO</strong><br>
  <strong>INSTITUTO TECNOLÓGICO DE OAXACA</strong>
</p>

<p align="center">
  <strong>Nombre de la carrera:</strong><br>
  Ingeniería en Sistemas Computacionales
</p>

<p align="center">
  <strong>Nombre de la materia:</strong><br>
  Programación Web
</p>

<p align="center">
  <strong>Unidad:</strong><br>
  Unidad 2
</p>

<p align="center">
  <strong>Título del trabajo:</strong><br>
  Actividad 5 - Introducción a React: Fundamentos y Primer Componente
</p>

<p align="center">
  <strong>Alumno:</strong><br>
  Hernández Pérez Miguel Angel
</p>

<p align="center">
  <strong>Docente:</strong><br>
  Adelina Martínez Nieto
</p>

<p align="center">
  <strong>Grupo:</strong><br>
  B
</p>

<p align="center">
  <strong>Fecha de entrega:</strong><br>
  10 de julio de 2026
</p>

---

## Descripción del proyecto

Este proyecto fue realizado con React y Vite para practicar los fundamentos principales de React.

La aplicación representa una pequeña página para organizar una fiesta de cumpleaños. Incluye un título de invitación, sugerencias de regalos, un contador de rebanadas de pastel y una lista dinámica de invitados.

En el proyecto se utilizaron componentes funcionales, props, estado con `useState`, eventos, renderizado condicional y el método `.map()`.

La lista de invitados permite agregar personas, editar sus nombres, confirmar o cancelar su asistencia y eliminarlas. Los cambios se realizan mediante el estado de React mientras la aplicación se encuentra abierta.

---

## Cuestionario

### a) ¿Qué diferencia hay entre props y state en React?

Las props son datos que un componente recibe desde otro componente, normalmente desde un componente padre. Sirven para enviar información y no deben modificarse directamente dentro del componente que las recibe.

El state es información que pertenece a un componente y puede cambiar mientras se utiliza la aplicación. Cuando el estado cambia, React actualiza automáticamente la información que se muestra en pantalla.

En este proyecto utilicé props en el componente `SugerenciaRegalo`, que recibe el nombre del regalo, su precio y la tienda.

---

### b) ¿Por qué es importante usar una key al renderizar una lista de elementos?

La propiedad `key` permite que React identifique cada elemento de una lista.

Esto ayuda a React a reconocer qué elemento fue agregado, eliminado o modificado. También permite que las actualizaciones de la lista se realicen de manera más ordenada y eficiente.

En la lista de invitados utilicé el identificador de cada invitado como `key`.

```jsx
<li key={invitado.id}>
```

---

### c) Explica con tus propias palabras qué hace la función useState y da un ejemplo de dónde la usaste en tu mini aplicación

`useState` es una función de React que permite guardar información dentro de un componente y modificarla cuando ocurre alguna acción.

Cuando el valor guardado cambia, React vuelve a mostrar el componente con la información actualizada.

En este proyecto utilicé `useState` en el contador de rebanadas de pastel.

```jsx
const [rebanadas, setRebanadas] = useState(0);
```

La variable `rebanadas` guarda la cantidad actual y `setRebanadas` permite cambiarla cuando el usuario presiona los botones para sumar o restar.

También utilicé `useState` para guardar y actualizar la lista de invitados.

---

### d) Enlace del repositorio de GitHub

https://github.com/Angixs-zz/t3_act5_react

---

### e) Enlace del proyecto desplegado en GitHub Pages

https://angixs-zz.github.io/t3_act5_react/