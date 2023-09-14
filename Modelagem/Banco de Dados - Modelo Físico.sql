create database DB_EASY_CARROS;

use DB_EASY_CARROS;
 
 
CREATE TABLE T_CLIENTE(
  cpf_cliente INT PRIMARY KEY NOT NULL,
  nm_cliente VARCHAR(50) NOT NULL,
  tel_cliente VARCHAR(50) NOT NULL,
  dt_dascimento date NOT NULL,
  end_email VARCHAR(50) NOT NULL,
  end_cliente VARCHAR(100) NOT NULL,
  senha VARCHAR(50) NOT NULL,
  ds_sexo varchar(14) NOT NULL,
  dt_cadastro DATE NOT NULL,
  img_cliente varchar(300) NOT NULL);  -- OK
  

CREATE TABLE T_DOCUMENTO(
  nr_documento INT PRIMARY KEY NOT NULL,
  img_documento VARCHAR(300) NOT NULL,
  dt_vencimento DATE NOT NULL,
  tp_documento VARCHAR(20) NULL DEFAULT NULL,
  -- FK
    CPF_CLIENTE int NOT NULL,
    CPF_COLABORADOR INT NOT NULL); -- OK



CREATE TABLE T_COLABORADOR(
  cpf_colaborador INT PRIMARY KEY NOT NULL,
  nm_colaborador VARCHAR(50) NOT NULL,
  tel_colaborador VARCHAR(50) NOT NULL,
  end_email VARCHAR(30) NOT NULL,
  dt_nascimento DATE NOT NULL,
  img_colaborador VARCHAR(300) NOT NULL,
  dt_cadastro DATE NOT NULL,
  senha VARCHAR(50) NOT NULL,
  end_colaborador VARCHAR(100) NOT NULL); -- OK


    
    
CREATE TABLE T_RESERVA(
	nr_reserva INT PRIMARY KEY NOT NULL,
	tip_entrega VARCHAR(10),
	dt_reserva DATE NOT NULL,
	dt_inicio_reserva DATE NOT NULL,
	dt_fim_reserva DATE NOT NULL,
	end_delivery VARCHAR(100),
    -- ##########################    4 CHAVES ESTRANGEIRAS ABAIXO
	id_filial INT NOT NULL,
	id_carro INT NOT NULL,
	cpf_cliente INT NOT NULL,
	cpf_colaborador INT NOT NULL); -- OK
  
  
CREATE TABLE T_FORMAS_PGTO(
	nr_transacao INT PRIMARY KEY NOT NULL,
    nr_cartao VARCHAR(20) NOT NULL,
    nm_forma_pgto VARCHAR (30) NOT NULL,
    qtd_parcelas INT NOT NULL,
    dt_pgto DATE NOT NULL,
    -- FK
    nr_reserva INT NOT NULL UNIQUE); -- OK


CREATE TABLE T_FILIAL(
	id_filial INT PRIMARY KEY NOT NULL,
    nr_cnpj VARCHAR(20) NOT NULL,
    end_email VARCHAR(30) NOT NULL,
    tel_filial VARCHAR(20) NOT NULL,
    nm_filial VARCHAR(30) NOT NULL,
    end_filial VARCHAR(100) NOT NULL); -- OK


CREATE TABLE T_CARRO(
	id_carro INT PRIMARY KEY NOT NULL,
    nm_modelo VARCHAR(40) NOT NULL,
    nr_ano INT NOT NULL,
    ds_cor VARCHAR(20) NOT NULL,
    nm_marca VARCHAR(20) NOT NULL,
    qtd_km DECIMAL NOT NULL,
    nr_placa INT NOT NULL,
    dt_revisao DATE NOT NULL,
    qtd_portas INT NOT NULL,
    tp_transmissao VARCHAR(20) NOT NULL,
    txt_adicionais VARCHAR(200) NOT NULL,
    vl_diaria DECIMAL NOT NULL,
    -- FK 
    id_filial INT NOT NULL); -- OK

-- ############### RELAÇÕES ###############

DROP TABLE T_CARRO;

DROP TABLE T_RESERVA;

DROP TABLE T_FORMAS_PGTO;

  -- RELACAO CLIENTE - DOCUMENTO 
	alter table T_DOCUMENTO add constraint CPF_CLIENTE
	foreign key(cpf_cliente)
	references T_CLIENTE(cpf_cliente)
	on delete no action;    -- OK
    
    -- RELACAO CLIENTE - RESERVA 
	alter table T_RESERVA add constraint CPF_CLIENTE_RESERVA
	foreign key(cpf_cliente)
	references T_CLIENTE(cpf_cliente)
	on delete no action; -- OK

-- RELAÇÃO DOCUMENTO - COLABORADOR
  
	alter table T_DOCUMENTO add constraint cpf_colaborador
	foreign key(cpf_colaborador)
	references T_COLABORADOR(cpf_colaborador)
	on delete no action; -- OK
    
      -- RELAÇÃO RESERVA - COLABORADOR

  	alter table T_RESERVA add constraint CPF_RESERVA_COLABORADOR
	foreign key(cpf_colaborador)
	references T_COLABORADOR(cpf_colaborador)
	on delete no action; -- OK
    
-- RELAÇÃO RESERVA - FILIAL

  	alter table T_RESERVA add constraint ID_FILIAL_RESERVA
	foreign key(id_filial)
	references T_FILIAL(id_filial)
	on delete no action; -- OK


-- RELAÇÃO CARRO - FILIAL

  	alter table T_RESERVA add constraint ID_RESERVA_CARRO
	foreign key(id_carro)
	references T_CARRO(id_carro)
	on delete no action; -- OK


-- RELAÇÃO RESERVA - CARRO

  	alter table T_CARRO add constraint ID_CARRO_FILIAL
	foreign key(id_filial)
	references T_FILIAL(id_filial)
	on delete no action; -- OK



-- RELAÇÃO RESERVA - FORMA_PGTO

  	alter table T_FORMAS_PGTO add constraint NR_RESERVA_FORMAS_PGTO
	foreign key(nr_reserva)
	references T_RESERVA(nr_reserva)
	on delete no action; -- OK
