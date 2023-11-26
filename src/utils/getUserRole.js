import db from "../db.js";

export async function getUserRole(token) {
    try{
        const user = await db.query(`
        SELECT * FROM sessoes WHERE token = $1`, [token]);

        const userId = user.rows[0].user_id

        const userData =  await db.query(`
        SELECT * FROM usuarios WHERE id = $1`, [userId]);

        const userRole = userData.rows[0].funcao

        return userRole
    }catch(e){
        console.error(e);
    }
}