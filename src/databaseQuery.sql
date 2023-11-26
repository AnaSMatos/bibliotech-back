CREATE TABLE "livros"(
    "ISBN" SERIAL NOT NULL,
    "titulo" TEXT NOT NULL,
    "autor" TEXT NOT NULL,
    "descricao" TEXT NOT NULL,
    "categoria" TEXT NOT NULL,
    "data_aquisicao" DATE NOT NULL,
    "estado_conservacao" TEXT NOT NULL,
    "localizacao_fisica" TEXT NOT NULL,
    "uri_capa" TEXT NOT NULL
);
ALTER TABLE
    "livros" ADD PRIMARY KEY("ISBN");
CREATE TABLE "emprestimos"(
    "id_usuario" BIGINT NOT NULL,
    "id_item" BIGINT NOT NULL,
    "data_emprestimo" DATE NOT NULL,
    "data_devolucao_prevista" DATE NOT NULL,
    "status" TEXT NOT NULL
);
CREATE TABLE "materiais_didaticos"(
    "id" SERIAL NOT NULL,
    "descricao" TEXT NOT NULL,
    "categoria" TEXT NOT NULL,
    "numero_serie" INTEGER NOT NULL,
    "data_aquisicao" DATE NOT NULL,
    "estado_conservacao" TEXT NOT NULL,
    "localizacao_fisica" TEXT NOT NULL,
    "uri_foto" TEXT NOT NULL
);
ALTER TABLE
    "materiais_didaticos" ADD PRIMARY KEY("id");
CREATE TABLE "usuarios"(
    "id" SERIAL NOT NULL,
    "nome" TEXT NOT NULL,
    "sobrenome" TEXT NOT NULL,
    "funcao" TEXT NOT NULL,
    "login" UUID NOT NULL,
    "senha" TEXT NOT NULL,
    "uri_foto" TEXT NOT NULL
);
ALTER TABLE
    "usuarios" ADD PRIMARY KEY("id");
CREATE TABLE "sessoes"(
    "id" SERIAL NOT NULL,
    "token" UUID NOT NULL,
    "user_id" BIGINT NOT NULL
);
ALTER TABLE
    "sessoes" ADD PRIMARY KEY("id");    
ALTER TABLE
    "emprestimos" ADD CONSTRAINT "emprestimos_id_item_livro" FOREIGN KEY("id_item") REFERENCES "livros"("ISBN");
ALTER TABLE
    "emprestimos" ADD CONSTRAINT "emprestimos_id_item_material" FOREIGN KEY("id_item") REFERENCES "materiais_didaticos"("id");
ALTER TABLE
    "emprestimos" ADD CONSTRAINT "emprestimos_id_usuario_foreign" FOREIGN KEY("id_usuario") REFERENCES "usuarios"("id");