>Para elaborar este repositorio se realizaron los siguientes pasos por orden:
- Se creo nuevo repositorio con ReadMe
- Se creo un nuevo proyecto de Angular desde el CMD con el comando: ng new perfil-estudiante
  Este fue creado en la carpeta del repositorio.
- Se instalaron algunas dependencia como tailwind y Flowbite
- Luego se crearon los componentes necesarios para el header, footer, pagina de perfil y de hoja de vida
- Utilizando OnInit se inicializaron algunos metodos.
- Se crearon las rutas en el app.routes.ts
- Se trabajaron las vistas desde cada component.html
- Se guardaron algunas imagenes e iconos en la carpeta de assests
- Tambien en el app.component.html agregue el app-footer y app-header
- En cada paso se hicieron commits y push al repositorio
- En la vista de hoja de vida se agrego un metodo para descargar un PDF con mi CV
- Para el despliegue:
En angular.json se agrego lo siguiente: "baseHref": "/perfil-estudiante/"

Se utilizaron los siguientes comandos:
    npm run build --prod --base-href=/perfil-estudiante/
    npm install -g angular-cli-ghpages
    ngh --dir=dist/perfil-estudiante/browser

# PerfilEstudiante

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 17.3.3.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
