--Script original do banco de dados

CREATE TABLE "livros" (
    "ISBN" INTEGER NOT NULL PRIMARY KEY,
    "titulo" TEXT NOT NULL,
    "autor" TEXT NOT NULL,
    "descricao" TEXT NOT NULL,
    "categoria" TEXT NOT NULL,
    "data_aquisicao" DATE NOT NULL,
    "estado_conservacao" TEXT NOT NULL,
    "localizacao_fisica" TEXT NOT NULL,
    "uri_capa" TEXT NOT NULL
);

CREATE TABLE "materiais_didaticos" (
    "id" SERIAL NOT NULL PRIMARY KEY,
    "descricao" TEXT NOT NULL,
    "categoria" TEXT NOT NULL,
    "numero_serie" INTEGER NOT NULL,
    "data_aquisicao" DATE NOT NULL,
    "estado_conservacao" TEXT NOT NULL,
    "localizacao_fisica" TEXT NOT NULL,
    "uri_foto" TEXT NOT NULL
);

CREATE TABLE "usuarios" (
    "id" SERIAL NOT NULL PRIMARY KEY,
    "nome" TEXT NOT NULL,
    "sobrenome" TEXT NOT NULL,
    "funcao" TEXT NOT NULL,
    "login" TEXT NOT NULL,
    "senha" TEXT NOT NULL,
    "uri_foto" TEXT NOT NULL
);

CREATE TABLE "emprestimos" (
    "id" SERIAL NOT NULL PRIMARY KEY,
    "id_usuario" BIGINT NOT NULL,
    "id_livro" INTEGER REFERENCES "livros" ("ISBN"),
    "id_material_didatico" BIGINT REFERENCES "materiais_didaticos" ("id"),
    "data_emprestimo" DATE NOT NULL,
    "data_devolucao_prevista" DATE NOT NULL,
    "status" TEXT NOT NULL
);

CREATE TABLE "sessoes" (
    "id" SERIAL NOT NULL PRIMARY KEY,
    "token" TEXT NOT NULL,
    "user_id" BIGINT NOT NULL
);

ALTER TABLE "emprestimos" ADD CONSTRAINT "emprestimos_id_usuario_foreign" FOREIGN KEY("id_usuario") REFERENCES "usuarios"("id");


--Alteraçoes necessárias:
--Adicionar a coluna is_available para facilitar o controle dos livros no frontend

ALTER TABLE "livros" ADD COLUMN "is_available" BOOLEAN DEFAULT true;
ALTER TABLE "materiais_didaticos" ADD COLUMN "is_available" BOOLEAN DEFAULT true;

-- Adicionar a coluna "tipo_item" na tabela emprestimos
ALTER TABLE "emprestimos"
ADD COLUMN "tipo_item" TEXT;

-- Atualizando os registros existentes com o tipo do item
UPDATE "emprestimos"
SET "tipo_item" = 'livro'
WHERE "id_livro" IS NOT NULL;

UPDATE "emprestimos"
SET "tipo_item" = 'material_didatico'
WHERE "id_material_didatico" IS NOT NULL;

--Mudando o tipo de ISBN de int para BIGINT por ser um código de 13 caracteres
ALTER TABLE "livros"
ALTER COLUMN "ISBN" TYPE BIGINT;

--Mudando a coluna id_livro para tipo BIGINT pois é uma referencia ao ISBN

ALTER TABLE "emprestimos"
ALTER COLUMN "id_livro" TYPE BIGINT;
