import db from '../db.js';
import { getFormattedDate } from '../utils/getFormattedDate.js';

export async function borrowItem(req, res){
    try{
        const {id_usuario, id_livro, id_material_didatico, data_devolucao_prevista, tipo_item} = req.body;
        const data_emprestimo = getFormattedDate()
        await db.query(`
        INSERT INTO emprestimos (id_usuario, id_livro, id_material_didatico, data_emprestimo, data_devolucao_prevista, tipo_item, status) 
	    VALUES ($1, $2, $3, $4, $5, $6, $7)`, [id_usuario, id_livro, id_material_didatico, data_emprestimo, data_devolucao_prevista, tipo_item, 'Em andamento']);
        if(id_livro){
            await db.query(`
            UPDATE livros
            SET is_available = false
            WHERE "ISBN" = $1
            `, [id_livro])
        }else{
            await db.query(`
            UPDATE materiais_didaticos
            SET is_available = false
            WHERE id = $1
            `, [id_material_didatico])
        }
        res.sendStatus(201)
    }catch(err){
        console.log(err)
        res.sendStatus(500)
    }
}

export async function returnItem(req, res){
    try{
        const {id_emprestimo, id_livro, id_material_didatico} = req.body
        await db.query(`
            UPDATE emprestimos
            SET status = $1
            WHERE id = $2
        `, ['Concluído', id_emprestimo])

        if(id_livro){
            await db.query(`
            UPDATE livros
            SET is_available = true
            WHERE "ISBN" = $1
            `, [id_livro])
        }else{
            await db.query(`
            UPDATE materiais_didaticos
            SET is_available = true
            WHERE id = $1
            `, [id_material_didatico])
        }
        res.sendStatus(200)
    }catch(err){
        console.log(err)
        res.sendStatus(500)
    }
}

export async function getLoansByUser(req, res){
    try{
        const {id} = req.query
        const loans = await db.query(`
        SELECT 
            e.*,
            CASE
                WHEN e.tipo_item = 'livro' THEN l.titulo
                WHEN e.tipo_item = 'material_didatico' THEN m.descricao
            END AS item_nome,
            CASE
                WHEN e.tipo_item = 'livro' THEN l.autor
                WHEN e.tipo_item = 'material_didatico' THEN m.categoria
            END AS item_autor,
            CASE
                WHEN e.tipo_item = 'livro' THEN l.uri_capa
                WHEN e.tipo_item = 'material_didatico' THEN m.uri_foto
            END AS uri_capa
        FROM emprestimos e
        LEFT JOIN livros l ON e.id_livro = l."ISBN" AND e.tipo_item = 'livro'
        LEFT JOIN materiais_didaticos m ON e.id_material_didatico = m.id AND e.tipo_item = 'material_didatico'
        WHERE e.id = $1
    `, [id]);
        res.send(loans.rows).status(200)
    }catch(err){
        console.log(err)
        res.sendStatus(500)
    }
}

export async function renewLoan(req, res){
    try{
        const {loan_id, delivery_date} = req.query
        await db.query(`
            UPDATE emprestimos
            SET data_devolucao_prevista = $1
            WHERE id = $2
        `, [delivery_date, loan_id])
        res.sendStatus(200)
    }catch(err){
        console.log(err)
        res.sendStatus(500)
    }
    
}

export const getLoans = async(req, res) => {
    try {
        const test = await db.query(`
        SELECT * FROM emprestimos
        `)
        res.send(test.rows)
    } catch (error) {
        console.log(error)
    }
}