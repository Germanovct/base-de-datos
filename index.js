


import ClienteSql from "./sql.js";
import { config } from "./config/mariaDB.js";

const sql = new ClienteSql(config);


sql.creartabla()
.then(() => {
    console.log('1. Tabla creada');

    const articulos = [
        { nombre: 'Regla', codigo: 'C1', precio: '120', stock: 10},
        { nombre: 'goma', codigo: 'C2', precio: '12', stock: 18},
        { nombre: 'lapiz', codigo: 'C3', precio: '140', stock: 5},
        { nombre: 'remera', codigo: 'C4', precio: '13', stock: 4},
        { nombre: 'buzo', codigo: 'C5', precio: '15', stock: 9},

    ];

    return sql.insertArticles(articulos);
})
.then (()=>{
    console.log ('2. Articulos Agregados')

    return sql.getArticles()
})
.catch((err)=>{
    console.log(err) ; throw err ;
})

.finally(()=>{
    sql.close
})
