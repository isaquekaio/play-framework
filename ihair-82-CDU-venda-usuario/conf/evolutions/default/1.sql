# --- Created by Ebean DDL
# To stop Ebean DDL generation, remove this comment and start using Evolutions

# --- !Ups

create table produto (
  id                            serial not null,
  nome                          varchar(255),
  descricao                     varchar(255),
  preco                         float,
  marca                         varchar(255),
  usuario_id                    integer,
  constraint pk_produto primary key (id)
);

create table usuario (
  id                            serial not null,
  nome                          varchar(255),
  email                         varchar(255),
  senha                         varchar(255),
  cpf                           varchar(255),
  fone                          varchar(255),
  cep                           varchar(255),
  rua                           varchar(255),
  numero                        varchar(255),
  bairro                        varchar(255),
  cidade                        varchar(255),
  estado                        varchar(255),
  complemento                   varchar(255),
  constraint pk_usuario primary key (id)
);

create index ix_produto_usuario_id on produto (usuario_id);
alter table produto add constraint fk_produto_usuario_id foreign key (usuario_id) references usuario (id) on delete restrict on update restrict;


# --- !Downs

alter table if exists produto drop constraint if exists fk_produto_usuario_id;
drop index if exists ix_produto_usuario_id;

drop table if exists produto cascade;

drop table if exists usuario cascade;

