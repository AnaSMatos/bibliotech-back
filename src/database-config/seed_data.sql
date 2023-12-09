-- Insert usuários com a senha já criptografada
INSERT INTO "usuarios" ("id", "nome", "sobrenome", "funcao", "login", "senha", "uri_foto")
VALUES
(1, 'Mário', 'Silva', 'Administrador', 'mario_silva@example.com', '$2a$10$IvE26.r7vf8S6rcsbx4jsevizz7lG8VaonHHrXROpTocslr/rR2yO', 'https://media.istockphoto.com/id/926375680/pt/foto/confident-senior-businessman-leader-looking-at-camera-team-at-background.jpg?s=2048x2048&w=is&k=20&c=HQ2jvATv3F-vde46IrTKTN-xCd_hZ9kfOUxT2Cajo4s='),
(2, 'Ana', 'Santos', 'Membro', 'ana_santos@example.com', '$2a$10$EJ3S4KOKBhKLylCMNM3Nyu1csJKHr9VKMwU.SgVpKzlqW9U.SlQx.', 'https://media.istockphoto.com/id/1438437093/pt/foto/young-adult-woman-in-studio-shots-making-facial-expressions-and-using-fingers-and-hands.jpg?s=2048x2048&w=is&k=20&c=HBxqf3-4FpOlMS8zjtYThyARM-sZQA0E3dFETUdMrSM='),
(3, 'Carlos', 'Oliveira', 'Chefe de Laboratorio', 'carlos_oliveira@example.com', '$2a$10$8T7Iagjuh4Qq71LnDlRTneL7R4aQcT3fxSm3qoRIWO3jY/SomoZMC', 'https://media.istockphoto.com/id/1309489745/pt/foto/portrait-of-young-happy-indian-business-man-executive-looking-at-camera-eastern-male.jpg?s=2048x2048&w=is&k=20&c=A_G25MBdV4jFTaBGTZ4MAkYrud4COXqWVvUq_N8NrSA=');

-- Insert de livros
INSERT INTO "livros" ("ISBN", "titulo", "autor", "descricao", "categoria", "data_aquisicao", "estado_conservacao", "localizacao_fisica", "uri_capa")
VALUES 
(9780123456789, 'Lógica de programação', 'Mário Silva', 'Uma ointrodução à programação', 'Didático', '2022-01-01', 'Bom', 'Prateleira A', 'https://imgs.search.brave.com/jbre8Mh7WOpFRSYvgWUHcmbUhjVbzqicXFEXmEpEJOs/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9kaWNh/c2RlcHJvZ3JhbWFj/YW8uY29tLmJyL2lt/YWdlcy9vcy1tZWxo/b3Jlcy1saXZyb3Mt/c29icmUtcHJvZ3Jh/bWFjYW8vTGl2cm9M/b2dpY2FEZVByb2dy/YW1hY2FvLnBuZw'),
(9789876543210, 'A Oração dos Miseráveis', 'Ana Santos', 'Uma obra-prima fictícia', 'Tecnologia', '2022-02-15', 'Excelente', 'Gaveta da Escrivaninha', 'https://imgs.search.brave.com/3TvxS-_nVqVfbQusrDkSPJGcJOIefBX-iTKEvlopEbE/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZW5zLmVsaXZyb3Mu/bG92ZS9HYXJldGgt/SGFucmFoYW4vYmFp/eGFyLWxpdnJvLW9y/YWNhby1kb3MtbWlz/ZXJhdmVpcy1sZWdh/ZG8tZG8tZmVycm8t/bmVncm8tdm9sLTEt/Z2FyZXRoLWhhbnJh/aGFuLWVtLWVwdWIt/cGRmLW1vYmktb3Ut/bGVyLW9ubGluZV9s/YXJnZS53ZWJw'),
(9785432109876, 'História do Brasil', 'Carlos Oliveira', 'Uma jornada pela história brasileira', 'História', '2021-12-10', 'Regular', 'Estante B', 'https://imgs.search.brave.com/Ii3C_-9Z0om7MEhWb_QK3TvDa4EnvoWBqyzChdwyzws/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9tLm1l/ZGlhLWFtYXpvbi5j/b20vaW1hZ2VzL0kv/NTFFZmJLR1hrUUwu/anBn');

-- Insert materiais
INSERT INTO "materiais_didaticos" ("descricao", "categoria", "numero_serie", "data_aquisicao", "estado_conservacao", "localizacao_fisica", "uri_foto")
VALUES
('Livro de Caligrafia', 'Educação', 12345, '2022-01-20', 'Bom', 'Armário C', 'https://imgs.search.brave.com/bfNQPF32WOdeAeUIkJ7cayzuau_COLt89i1EmPWi0fQ/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9jZG52/Mi5tb292aW4uY29t/LmJyL2VkaXRvcmFy/aWRlZWwvaW1hZ2Vu/cy9wcm9kdXRvcy9s/aXN0YS85Mzk2MmRi/YWEwLmpwZw'),
('Atlas Geográfico', 'Geografia', 67890, '2022-02-05', 'Excelente', 'Prateleira do Laboratório', 'https://imgs.search.brave.com/x2KRT-bk_xkXkqVj5FaZWVHtBpmXYtLlGagxNoFrCQ8/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9tLm1l/ZGlhLWFtYXpvbi5j/b20vaW1hZ2VzL0kv/NzFkdm9IYVFweEwu/anBn'),
('Dicionário Francês-Português', 'Idiomas', 54321, '2021-12-01', 'Regular', 'Gaveta D', 'https://imgs.search.brave.com/C-86uEt0JEV7hRK9U6mxyPi-Ps8_6L23XfdgzwO81P0/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9tLm1l/ZGlhLWFtYXpvbi5j/b20vaW1hZ2VzL0kv/NDFFblp2T3BraEwu/anBn');

--Insert empréstimos
INSERT INTO "emprestimos" ("id_usuario", "id_livro", "id_material_didatico", "data_emprestimo", "data_devolucao_prevista", "status", "tipo_item")
VALUES
(1, 9780123456789, NULL, '2022-03-01', '2022-03-15', 'Em andamento', 'livro'),
(2, 9789876543210, NULL, '2022-04-10', '2022-04-25', 'Em andamento', 'livro'),
(3, NULL, 1, '2022-05-15', '2022-05-30', 'Concluído', 'material_didatico');