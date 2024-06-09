# perfil-estudiante
 Este proyecto de Angular es para mi perfil como desarrollador y estudiante

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
