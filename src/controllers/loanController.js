import db from '../db.js';
import { getFormattedDate } from '../utils/getFormattedDate.js';

export async function borrowItem(req, res){
    try{
        const {id_usuario, id_item, data_devolucao_prevista} = req.body;
        const data_emprestimo = getFormattedDate()
        await db.query(`
        INSERT INTO emprestimos (id_usuario, id_item, data_emprestimo, data_devolucao_prevista, status) 
	    VALUES ($1, $2, $3, $4, $5)`, [id_usuario, id_item, data_emprestimo, data_devolucao_prevista, 'Em andamento']);
        res.sendStatus(201)
    }catch(err){
        console.log(err)
        res.sendStatus(500)
    }
}

export async function returnItem(req, res){
    try{
        const {id_emprestimo} = req.body
        await db.query(`
            UPDATE emprestimos
            SET status = $1
            WHERE id = $2
        `, ['Concluído', id_emprestimo])
        res.sendStatus(200)
    }catch(err){
        console.log(err)
        res.sendStatus(500)
    }
}