CREATE DATABASE IF NOT EXISTS check_do;

CREATE TABLE IF NOT EXISTS categorias(
	idcategoria INT PRIMARY KEY AUTO_INCREMENT,
    nomecategoria VARCHAR(50) NOT NULL UNIQUE    
);

CREATE TABLE IF NOT EXISTS usuarios(
	idusuario INT PRIMARY KEY AUTO_INCREMENT,
    nomeusuario varchar(45) NOT NULL,
    email varchar(60) NOT NULL UNIQUE,
    senha varchar(8) NOT NULL
    
);

CREATE TABLE IF NOT EXISTS tarefas(
	idtarefa INT PRIMARY KEY AUTO_INCREMENT,
    situacao BOOLEAN DEFAULT(FALSE),
    idusuario INT,
    idcategoria INT,
    FOREIGN KEY(idusuario) REFERENCES usuarios(idusuario),
    FOREIGN KEY(idcategoria) REFERENCES categorias(idcategoria)
);

ALTER TABLE usuarios ADD COLUMN administrador BOOLEAN DEFAULT(FALSE);
ALTER TABLE tarefas ADD COLUMN nometarefa VARCHAR(50) NOT NULL;
ALTER TABLE tarefas ADD COLUMN descricao TEXT;
ALTER TABLE tarefas ADD COLUMN dataconclusao DATE;
ALTER TABLE usuarios CHANGE COLUMN senha senha TEXT;


INSERT INTO usuarios(nomeusuario, email, senha, administrador) VALUES
	("administrador", "admin", "admin", true),
    ("teste", "usuarioteste", "1234", false);

SELECT * FROM usuarios;

INSERT INTO categorias(nomecategoria) VALUES 
	("Decida Quando Fazer"),
	("Faça Imediatamente"),
	("Faça Mais Tarde"),
	("Delegue Para Outra Pessoa");
    
SELECT * FROM categorias;

INSERT INTO tarefas(situacao, idusuario, idcategoria, nometarefa, descricao, dataconclusao) VALUES
	(true, 1, 1, "Fazer Orçamento", "Teste de orçamente para piso laminado", "21-11-05");

INSERT INTO tarefas(situacao, idusuario, idcategoria, nometarefa, descricao, dataconclusao) VALUES
	(true, 1, 1, "Ligar Fulano", "Ligar para Fuluno para definir obra", "21-11-05"),
    (false, 1, 1, "Ligar Fulano", "Ligar para Fuluno para definir obra", "21-11-05"),
    (true, 2, 3, "Ligar Ciclano", "Ligar para Ciclano para definir construcao de sobrado 550m²", "21-11-05");
    
SELECT nometarefa, descricao, nomecategoria, nomeusuario, situacao FROM tarefas INNER JOIN categorias INNER JOIN usuarios WHERE tarefas.idcategoria = categorias.idcategoria AND tarefas.idusuario = usuarios.idusuario AND tarefas.situacao = TRUE;