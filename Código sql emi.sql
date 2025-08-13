create table idoso (
id_idoso int primary key auto_increment,
nome_idoso varchar(45),
data_nascimento date,
usuario varchar(45),
senha varchar(8),
email varchar(100),
genero char(1)
);

create table treino(
id_treino int primary key auto_increment,
nome_treino varchar(50),
recomendacao varchar(100),
num_series int,
num_repeticoes int
);

create table exercicio (
id_exercicio int primary key auto_increment,
nome_exercicio varchar(50),
descricao_exercicio varchar(300),
num_repeticoes int,
num_series int,
vd_exercicio blob,
img_exercicio blob
);

create table idoso_treino (
id_treino int,
id_idoso int,
dt_treino date,
primary key (id_treino, id_idoso),
foreign key (id_treino) references treino(id_treino),
foreign key (id_idoso) references idoso(id_idoso)
);

create table exercicio_treino (
id_exercicio int,
id_treino int,
primary key (id_exercicio, id_treino),
foreign key (id_exercicio) references exercicio(id_exercicio),
foreign key (id_treino) references treino(id_treino)
);