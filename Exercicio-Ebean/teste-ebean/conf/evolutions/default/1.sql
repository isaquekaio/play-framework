# --- Created by Ebean DDL
# To stop Ebean DDL generation, remove this comment and start using Evolutions

# --- !Ups

create table aluno (
  matricula                     integer auto_increment not null,
  nome                          varchar(255),
  data_nasc                     timestamp,
  sexo                          varchar(255),
  curso_codigo                  integer,
  constraint pk_aluno primary key (matricula)
);

create table curso (
  codigo                        integer auto_increment not null,
  nome                          varchar(255),
  nivel                         varchar(255),
  constraint pk_curso primary key (codigo)
);

create table disciplina (
  codigo                        integer auto_increment not null,
  nome                          varchar(255),
  carga_horaria                 integer not null,
  ementa                        varchar(255),
  constraint pk_disciplina primary key (codigo)
);

create table disciplina_aluno (
  disciplina_codigo             integer not null,
  aluno_matricula               integer not null,
  constraint pk_disciplina_aluno primary key (disciplina_codigo,aluno_matricula)
);

create index ix_aluno_curso_codigo on aluno (curso_codigo);
alter table aluno add constraint fk_aluno_curso_codigo foreign key (curso_codigo) references curso (codigo) on delete restrict on update restrict;

create index ix_disciplina_aluno_disciplina on disciplina_aluno (disciplina_codigo);
alter table disciplina_aluno add constraint fk_disciplina_aluno_disciplina foreign key (disciplina_codigo) references disciplina (codigo) on delete restrict on update restrict;

create index ix_disciplina_aluno_aluno on disciplina_aluno (aluno_matricula);
alter table disciplina_aluno add constraint fk_disciplina_aluno_aluno foreign key (aluno_matricula) references aluno (matricula) on delete restrict on update restrict;


# --- !Downs

alter table aluno drop constraint if exists fk_aluno_curso_codigo;
drop index if exists ix_aluno_curso_codigo;

alter table disciplina_aluno drop constraint if exists fk_disciplina_aluno_disciplina;
drop index if exists ix_disciplina_aluno_disciplina;

alter table disciplina_aluno drop constraint if exists fk_disciplina_aluno_aluno;
drop index if exists ix_disciplina_aluno_aluno;

drop table if exists aluno;

drop table if exists curso;

drop table if exists disciplina;

drop table if exists disciplina_aluno;

