import db from "../db.js";

export async function registerMaterial(req, res) {
    const { 
        descricao, categoria, numero_serie, 
        data_aquisicao, estado_conservacao, 
        localizacao_fisica, uri_foto
    } = req.body;
    try{
        await db.query(`
        INSERT INTO materiais_didaticos (descricao, categoria, numero_serie, 
            data_aquisicao, estado_conservacao, 
            localizacao_fisica, uri_foto) 
	    VALUES ($1, $2, $3, $4, $5, $6, $7)`, [descricao, categoria, numero_serie, 
            data_aquisicao, estado_conservacao, localizacao_fisica, uri_foto]);
        res.sendStatus(201);
    }catch(err){
        console.log(err);
        res.sendStatus(500);
    }
}

export async function getMaterials(req, res) {
    try{
        const materials = await db.query(`
            SELECT * FROM materiais_didaticos`
        );
        res.send(materials.rows).status(200);
    }catch(err){
        console.log(err);
        res.sendStatus(500);
    }
}