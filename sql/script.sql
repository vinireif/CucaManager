create database cucamanager;
use cucamanager;

/*
 * Usuario
 */
create table usuario (
  id int(8) primary key auto_increment,
  email varchar(50),
  senha varchar(50),
  ativo char(1)
);
insert into usuario values (0,'admin','adminadmin',"S");

/*
 * Cucas
 */
create table cuca (
  id int(8) primary key auto_increment,
  id_usuario int(8),
  titulo varchar(50),
  descricao varchar(50),
  data date,
  preco float(4,2),
  ativo char(1)
);
