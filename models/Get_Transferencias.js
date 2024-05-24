import pool from "../config/db.js";
const Get_Transferencias = async() => {
    let client
    const consulta = {
        name: 'get-Transferencias',
        text: 'SELECT * FROM transferencias ORDER BY id DESC',
    }
    try {
        client = await pool.connect();
        const resultado = await client.query(consulta);
        return resultado;
    } catch (error) {
        return console.error('Error al obtener transferencias', error.code, error.stack, error.message);
    } finally {
        if (client) {
            client.release();
        }
    }
}
export default Get_Transferencias;