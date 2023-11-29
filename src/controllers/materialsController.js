import db from "../db.js";
import { getUserRole } from "../utils/getUserRole.js";

export async function registerMaterial(req, res) {
    const { 
        descricao, categoria, numero_serie, 
        data_aquisicao, estado_conservacao, 
        localizacao_fisica, uri_foto
    } = req.body;
    const {token} = res.locals
    try{
        const userRole = await getUserRole(token)

        if(userRole != 'Chefe de laboratorio'){
            return res.sendStatus(401)
        }

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
    const { searchTerm } = req.query;
    try{
        let query = 'SELECT * FROM materiais_didaticos';

        const params = [];

        if (searchTerm) {
            query += `
                WHERE
                    descricao ILIKE '%' || $1 || '%' OR
                    categoria ILIKE '%' || $1 || '%'
            `;
            
            params.push(searchTerm);
        }

        const materials = await db.query(query, params);

        res.send(materials.rows).status(200);
    }catch(err){
        console.log(err);
        res.sendStatus(500);
    }
}

export async function updateMaterial(req, res){
    const { 
        id, descricao, categoria, numero_serie, 
        data_aquisicao, estado_conservacao, 
        localizacao_fisica, uri_foto
    } = req.body;
    const {token} = res.locals
    try{
        const userRole = await getUserRole(token)

        if(userRole != 'Chefe de laboratorio'){
            return res.sendStatus(401)
        }

        await db.query(`
        UPDATE materiais_didaticos
        SET descricao, categoria, numero_serie, 
        data_aquisicao, estado_conservacao, 
        localizacao_fisica, uri_foto = $1, $2, $3, $4, $5, $6, $7, $8
        WHERE id = $9
        `, [descricao, categoria, numero_serie, 
            data_aquisicao, estado_conservacao, 
            localizacao_fisica, uri_foto, id ]);
        res.sendStatus(200);
    }catch(err){
        console.log(err);
        res.sendStatus(500);
    }
}

export async function deleteMaterial(req, res){
    const {id} = req.body
    const {token} = res.locals
    try{
        const userRole = await getUserRole(token)

        if(userRole != 'Chefe de laboratorio'){
            return res.sendStatus(401)
        }

        await db.query(`
            DELETE FROM materiais_didaticos WHERE id = $1
        `, [id])

        res.sendStatus(200)
    }catch(err){
        console.log(err);
        res.sendStatus(500)
    }
}