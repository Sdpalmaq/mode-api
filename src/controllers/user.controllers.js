const pool = require('../database');

export const getUser = async (req, res) =>{
    try {
        const result = await pool.query('SELECT id_seg_usuario, codigo, apellidos, nombres, correo, activo FROM public.seg_usuario;');
        res.json(result.rows);
    } catch (error) {
        console.error('Error al obtener los elementos:', error);
        res.status(500).json({ error: 'Error al obtener los elementos' });
    }
}