import bcrypt from 'bcrypt'
import db from '../db.js'

async function encontrarUsuarioComEmail(email) {
	return db.query(`SELECT * FROM usuarios WHERE email=$1`, [email])
}

async function criarUsuario(nome, sobrenome, login, senha, funcao, uri_foto) {
	const SALT = 10
	const hashSenha = bcrypt.hashSync(senha, SALT)
	return db.query(
		`
	  INSERT INTO usuarios (nome, sobrenome, login, senha, funcao, uri_foto) 
	  VALUES ($1, $2, $3, $4, $5, $6)`,
		[nome, sobrenome, login, hashSenha, funcao, uri_foto]
	)
}

const usersRepository = {
	encontrarUsuarioComEmail,
	criarUsuario,
}

export default usersRepository