# EP2: Implementación de Mockups UI en Ionic y Funcionalidades Adicionales

## Descripción del Proyecto

Este proyecto consiste en la implementación de siete mockups de interfaz de usuario (UI) utilizando el framework Ionic, incluyendo dos formularios de inicio de sesión y registro. Además, se ha desarrollado una funcionalidad para leer datos desde un archivo JSON y se ha diseñado un modelo de base de datos que se puede implementar en diferentes motores de bases de datos.

## Tabla de Contenidos

- [EP2.1: Implementación de Mockups UI](#ep21-implementación-de-mockups-ui)
- [EP2.2: Lectura de Datos desde JSON](#ep22-lectura-de-datos-desde-json)
- [EP2.3: Modelo de la Base de Datos](#ep23-modelo-de-la-base-de-datos)
- [EP2.4: Uso de Patrones de Diseño](#ep24-uso-de-patrones-de-diseño)

## EP2.1: Implementación de Mockups UI

Se implementaron siete mockups de UI en el framework Ionic. Los mockups incluyen:

1. **Pantalla de Inicio**
2. **Pantalla de Registro**
3. **Pantalla de Inicio de Sesión**
4. **Pantalla de Perfil de Usuario**
5. **Pantalla de Listado de Mascotas**
6. **Pantalla de Detalle de Mascota**
7. **Pantalla de Configuración**

Los formularios de inicio de sesión y registro permiten a los usuarios crear una cuenta y acceder a la aplicación de manera segura.

## EP2.2: Lectura de Datos desde JSON

Se implementó la funcionalidad para leer datos desde un archivo JSON, que puede ser local o de una fuente externa. Estos datos se muestran en una de las pantallas de la aplicación, proporcionando una experiencia dinámica y actualizada al usuario.

### Ejemplo de Archivo JSON

```json
[
    {
        "nombre": "Juan",
        "edad": 30,
        "mascota": "Perro"
    },
    {
        "nombre": "Ana",
        "edad": 25,
        "mascota": "Gato"
    }
]
