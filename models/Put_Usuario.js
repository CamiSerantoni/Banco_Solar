import pool from "../config/db.js";

const Put_Usuario = async (usuario) => { 

let client

const values = Object.values(usuario)
const consulta = {
    text: "UPDATE usuarios SET nombre = $2, balance = $3 WHERE id = $1 returning *",
    values
}
try {
    client = await pool.connect();
    const result = await client.query(consulta);
    return result.rows
} catch (error) {
    return console.error('Error al editar usuario', error.stack);
} finally {
    if (client) {
        client.release();
    }
}
}


export default Put_Usuario;