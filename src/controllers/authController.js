import db from '../db.js';
import bcrypt from 'bcrypt';
import { v4 as uuid } from 'uuid';

export async function signUp(req, res) {
    const { nome, sobrenome, login, senha, funcao, uri_foto } = req.body;
    try{
        const hashSenha = await bcrypt.hash(senha, 10);
        await db.query(`
        INSERT INTO usuarios (nome, sobrenome, login, senha, funcao, uri_foto) 
	    VALUES ($1, $2, $3, $4, $5, $6)`, [nome, sobrenome, login, hashSenha, funcao, uri_foto]);
        res.sendStatus(201);
    }catch(err){
        console.log(err);
        res.sendStatus(500);
    }
}

export async function signIn(req, res){
    const {login, senha} = req.body;
    const token = uuid();
    try{
        const user = await db.query(`
        SELECT * FROM usuarios WHERE login = $1`, [login]);
        if(!user?.rows?.length){
            return res.sendStatus(401);
        }else{
            const isMatch = await bcrypt.compare(senha, user.rows[0].senha);
            if(isMatch){
                await db.query(`INSERT INTO sessoes (token, user_id) VALUES ($1, $2)`, [token, user.rows[0].id]);
                return res.send(token).status(200);
            }else{
                return res.sendStatus(401);
            }
        }
    }catch(err){
        res.sendStatus(500);
    }
}