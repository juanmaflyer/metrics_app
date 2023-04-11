# Requisitos y pasos para correr el proyecto

## Requisitos

* Ruby (3.1.2)
* Node (V19.8.1)
* PostgreSQL

## Pasos

- Configurar PostgreSQL (crear un usuario y actualizar el archivo `config/database.yml` para que use ese usuario)
- `bundle install`
- En el directorio *angular* ejecutar `npm install`
- rails db:setup (recrea la DB, ejecuta migraciones y correr los seeds)
- rails s
- En el directorio *angular* ejecutar `ng serve`
- Navegar a `localhost:4200`