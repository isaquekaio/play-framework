# --- Sample dataset

# --- !Ups

insert into Usuario (id,nome,email,senha) values (1,'Isaque','isaque@gmail.com','123admin');
insert into Usuario (id,nome,email,senha) values (2,'Kaio','kaio@gmail.com','admin123');

insert into Produto (id,nome,descricao,preco,marca,usuario_id) values(1,'Banho de Verniz Forever Liss 1kg','Banho de Verniz Brilho e Hidratação Extremo Forever Liss é ideal para recuperar os cabelos. Proporciona Brilho Extremo nos fios reavivando a cor.',44.90,'FOREVER LISS',1);

insert into Produto (id,nome,descricao,preco,marca,usuario_id) values(2,'Sweet Hair Barbados - Shampoo Masculino 250ml','Desenvolvido para facilitar os cuidados com a barba e os cabelos - o Sweet Hair Shampoo Barbados Masculino promove a limpeza.',17.90,'Sweet',1);

insert into Produto (id,nome,descricao,preco,marca,usuario_id) values(3,'Dove Men Care Shampoo Limpeza Refrescante - 200 ml','Shampoo Dove Men Care Limpeza Refrescante 200ml. Enriquecido com cafeína e mentol, este shampoo para homens lava eliminando oleosidade e impurezas dos fios, dando com um efeito energizante e refrescante.',9.90,'Dove',2);

insert into Produto (id,nome,descricao,preco,marca,usuario_id) values(4,'Shampoo Masculino Eudora H Máxima Ação 5 em 1 250ml','O Eudora H Shampoo Fortificante 5 em 1 combate e previne a caspa nas primeiras aplicações, alivia a coceira, combate e previne a queda, fortifica os fios, hidrata e dá brilho.',24.99,'Eudora',2);

# --- !Downs