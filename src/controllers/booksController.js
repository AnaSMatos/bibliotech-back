import db from "../db.js";

export async function registerBook(req, res) {
    const { 
        isbn, titulo, autor, descricao, 
        categoria, data_aquisicao, estado_conservacao, 
        localizacao_fisica, uri_capa 
    } = req.body;
    try{
        await db.query(`
        INSERT INTO livros (ISBN, titulo, autor, descricao, 
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
    try{
        const books = await db.query(`
            SELECT * FROM livros`
        );
        res.send(books.rows).status(200);
    }catch(err){
        console.log(err);
        res.sendStatus(500);
    }
}