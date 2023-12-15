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
                const userData = user.rows[0]
                const parsedData = {id:userData.id, nome:userData.nome, sobrenome: userData.sobrenome, funcao: userData.funcao, foto: userData.uri_foto}
                return res.send({...parsedData, token}).status(200);
            }else{
                return res.sendStatus(401);
            }
        }
    }catch(err){
        res.sendStatus(500);
    }
}

export async function deleteUser(req, res){
    const {id} = req.query
    try{
        await db.query(`
            DELETE FROM usuarios WHERE id = $1
        `, [id])
        res.sendStatus(200)
    }catch(err){
        console.log(err);
        res.sendStatus(500)
    }
}

export async function editUser(req, res){
    const { nome, sobrenome, login, funcao, uri_foto } = req.body
    try{
        await db.query(`
        UPDATE usuarios 
        SET (nome, sobrenome, login, funcao, uri_foto) 
	    VALUES ($1, $2, $3, $4, $5)`, [nome, sobrenome, login, funcao, uri_foto]);
        res.sendStatus(200)
    }catch(err){
        console.log(err);
        res.sendStatus(500)
    }
}

export async function getUsers(req, res){
    try{
        const users = await db.query(`
            SELECT id, nome, sobrenome, login, funcao, uri_foto FROM usuarios
        `)
        res.send(users.rows).status(200)
    }catch(err){
        console.log(err);
        res.sendStatus(500)
    }
}