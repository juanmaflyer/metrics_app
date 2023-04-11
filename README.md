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

Si se desea incluir sample data a la tabla `observations`. Se puede correr las siguientes queries para insertar data points en
las métricas de temperaturas a intervalos regulares de 1 minuto y 1 hora.

```
INSERT INTO observations (metric_id, value, timestamp)
    (SELECT 2 as metric_id, trunc(random() * 20 + 70) as value, * FROM generate_series('2023-04-11','2023-04-18', INTERVAL '1 minute') as  timestamp);
```

```
INSERT INTO observations (metric_id, value, timestamp)
    (SELECT 3 as metric_id, trunc(random() * 20 + 10) as value, * FROM generate_series('2023-04-11','2023-04-18', INTERVAL '1 hour') as  timestamp);
```