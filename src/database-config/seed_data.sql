\c trabalho_bd

INSERT INTO "usuarios" ("id", "nome", "sobrenome", "funcao", "login", "senha", "uri_foto")
VALUES
(1,'Mário', 'Silva', 'Administrador', 'mario_silva@example.com', 'senha123', 'http://exemplo.com/fotos/usuario1'),
(2,'Ana', 'Santos', 'Membro', 'ana_santos@example.com', 'senhasegura456', 'http://exemplo.com/fotos/usuario2'),
(3,'Carlos', 'Oliveira', 'Membro', 'carlos_oliveira@example.com', 'senhaforta789', 'http://exemplo.com/fotos/usuario3');

INSERT INTO "livros" ("titulo", "autor", "descricao", "categoria", "data_aquisicao", "estado_conservacao", "localizacao_fisica", "uri_capa")
VALUES 
('A Arte da Ficção', 'Mário Silva', 'Uma obra-prima fictícia', 'Ficção', '2022-01-01', 'Bom', 'Prateleira A', 'http://exemplo.com/capas/1'),
('Programação 101', 'Ana Santos', 'Uma introdução à programação', 'Tecnologia', '2022-02-15', 'Excelente', 'Gaveta da Escrivaninha', 'http://exemplo.com/capas/2'),
('História do Brasil', 'Carlos Oliveira', 'Uma jornada pela história brasileira', 'História', '2021-12-10', 'Regular', 'Estante B', 'http://exemplo.com/capas/3');

INSERT INTO "materiais_didaticos" ("descricao", "categoria", "numero_serie", "data_aquisicao", "estado_conservacao", "localizacao_fisica", "uri_foto")
VALUES
('Livro de Matemática', 'Educação', 12345, '2022-01-20', 'Bom', 'Armário C', 'http://exemplo.com/fotos/1'),
('Kit de Laboratório de Química', 'Ciências', 67890, '2022-02-05', 'Excelente', 'Prateleira do Laboratório', 'http://exemplo.com/fotos/2'),
('CDs de Aprendizado de Idiomas', 'Idiomas', 54321, '2021-12-01', 'Regular', 'Gaveta D', 'http://exemplo.com/fotos/3');

INSERT INTO "emprestimos" ("id_usuario", "id_item", "data_emprestimo", "data_devolucao_prevista", "status")
VALUES
(1, 1, '2022-03-01', '2022-03-15', 'Em andamento'),
(2, 2, '2022-04-10', '2022-04-25', 'Em andamento'),
(3, 3, '2022-05-15', '2022-05-30', 'Concluído');