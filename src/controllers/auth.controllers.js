const pool = require('../database');
import jwt from 'jsonwebtoken';
import config from '../config'

export const signIn = async (req, res) => {
    const { correo, clave } = req.body;
    try {
        const response = await pool.query('SELECT * FROM seg_usuario WHERE correo = $1 AND clave = $2', [correo, clave]);
        const user = response.rows[0];

        if (response.rowCount === 1) {
            const token = jwt.sign({ userId: user.id_seg_usuario }, config.SECRET, { expiresIn: '3m' });
            res.send({ token });
        } else {
            console.log('wrong user')
            res.send({message: 'wrong user'})
        }

    } catch (error) {


        console.error('Error al iniciar sesión:', error);
        res.status(500).json({ error: 'Error al iniciar sesión' });
    }
}