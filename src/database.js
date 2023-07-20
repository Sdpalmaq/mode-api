import {Pool} from 'pg';

const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    password: '0402003602',
    database: 'mmarketdemo',
    port: '5432'
})

pool.query('SELECT NOW()', (err, res) => {
    if (err) {
        console.error('Error al conectarse a la base de datos:', err);
    } else {
        console.log('Conexión exitosa a la base de datos');
    }
});

module.exports = pool;
   