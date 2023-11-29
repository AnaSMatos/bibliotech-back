import db from "../db.js";
import { getUserRole } from "../utils/getUserRole.js";

export async function registerBook(req, res) {
    const { 
        isbn, titulo, autor, descricao, 
        categoria, data_aquisicao, estado_conservacao, 
        localizacao_fisica, uri_capa 
    } = req.body;
    const {token} = res.locals
    try{
        const userRole = await getUserRole(token)

        if(userRole != 'Chefe de laboratorio'){
            return res.sendStatus(401)
        }

        await db.query(`
        INSERT INTO livros ("ISBN", titulo, autor, descricao, 
            categoria, data_aquisicao, estado_conservacao, 
            localizacao_fisica, uri_capa) 
	    VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9)`, [isbn, titulo, autor, descricao, categoria, 
            data_aquisicao, estado_conservacao, localizacao_fisica, uri_capa ]);
        res.sendStatus(201);
    }catch(err){
        console.log(err);
        res.sendStatus(500);
    }
}

export async function getBooks(req, res) {
    const { searchTerm } = req.query;
    try{
        let query = 'SELECT * FROM livros';

        const params = [];

        if (searchTerm) {
            query += `
                WHERE
                    titulo ILIKE '%' || $1 || '%' OR
                    autor ILIKE '%' || $1 || '%' OR
                    categoria ILIKE '%' || $1 || '%'
            `;
            
            params.push(searchTerm);
        }

        const books = await db.query(query, params);

        res.send(books.rows).status(200);
    }catch(err){
        console.log(err);
        res.sendStatus(500);
    }
}

export async function updateBook(req, res){
    const { 
        isbn, titulo, autor, descricao, 
        categoria, data_aquisicao, estado_conservacao, 
        localizacao_fisica, uri_capa 
    } = req.body;
    const {token} = res.locals
    try{
        const userRole = await getUserRole(token)

        if(userRole != 'Chefe de laboratorio'){
            return res.sendStatus(401)
        }

        await db.query(`
        UPDATE livros 
        SET (titulo, autor, descricao, categoria, data_aquisicao, estado_conservacao, 
        localizacao_fisica, uri_capa) = ($1, $2, $3, $4, $5, $6, $7, $8)
        WHERE "ISBN" = $9
        `, [titulo, autor, descricao, categoria, 
            data_aquisicao, estado_conservacao, localizacao_fisica, uri_capa, isbn ]);
        res.sendStatus(200);
    }catch(err){
        console.log(err);
        res.sendStatus(500);
    }
}

export async function deleteBook(req, res){
    const {isbn} = req.body
    const {token} = res.locals
    try{
        const userRole = await getUserRole(token)

        if(userRole != 'Chefe de laboratorio'){
            return res.sendStatus(401)
        }

        await db.query(`
            DELETE FROM livros WHERE "ISBN" = $1
        `, [isbn])

        res.sendStatus(200)
    }catch(err){
        console.log(err);
        res.sendStatus(500)
    }
}