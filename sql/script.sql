create database cucamanager;
use cucamanager;

/*
 * Usuario
 */
create table usuario (
  id int(8) primary key auto_increment,
  nome varchar(50),
  email varchar(50),
  senha varchar(50),
  token varchar(32),
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
  preco float(6,2),
  ativo char(1)
);

/*
 * Participante
 */
create table participante (
    id int(8) primary key auto_increment,
    id_usuario int(8),
    id_cuca int(8),
    pago char(1)
);
