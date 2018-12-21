# --- Created by Ebean DDL
# To stop Ebean DDL generation, remove this comment and start using Evolutions

# --- !Ups

create table figurinha (
  numero                        integer auto_increment not null,
  nome                          varchar(255),
  preco                         double not null,
  usuario_id                    integer,
  constraint pk_figurinha primary key (numero)
);

create table usuario (
  id                            integer auto_increment not null,
  email                         varchar(255),
  senha                         varchar(255),
  constraint pk_usuario primary key (id)
);

create index ix_figurinha_usuario_id on figurinha (usuario_id);
alter table figurinha add constraint fk_figurinha_usuario_id foreign key (usuario_id) references usuario (id) on delete restrict on update restrict;


# --- !Downs

alter table figurinha drop constraint if exists fk_figurinha_usuario_id;
drop index if exists ix_figurinha_usuario_id;

drop table if exists figurinha;

drop table if exists usuario;

