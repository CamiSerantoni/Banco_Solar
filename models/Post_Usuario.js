import pool from "../config/db.js";
const Post_Usuario = async (usuario) => {
    let client
    const values = Object.values(usuario);
    const consulta = {
        name: 'insert-Usuario',
        text: 'INSERT INTO usuarios (nombre, balance) VALUES ($1, $2) RETURNING *',
        values: values
    }
    try {
        client = await pool.connect();
        const result = await client.query(consulta);
   
        return result;
    } catch (error) {
        return console.error('Error al insertar usuario', error.code, error.stack, error.message);
    } finally {
        if (client) {
            client.release();
        }
    }
}
export default Post_Usuario;