import pool from "../config/db.js";

const Get_Transferencias = async() => {
    let client
    const consulta = {
        name: 'get-Transferencias',
        text: `
        SELECT trans.id, trans.fecha, trans.monto, emisor.nombre as emisor, receptor.nombre as receptor
        FROM transferencias as trans
        JOIN usuarios as emisor ON trans.emisor = emisor.id
        JOIN usuarios as receptor ON trans.receptor = receptor.id
        ORDER BY trans.id DESC
        `,
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