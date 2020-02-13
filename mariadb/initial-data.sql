use devops;

CREATE TABLE IF NOT EXISTS pessoa (
  id int(11) NOT NULL AUTO_INCREMENT,
  nome varchar(256) NOT NULL,
  cargo text NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8;

INSERT INTO pessoa (id, nome, cargo) VALUES (1, 'Gustavo', 'Devops');
