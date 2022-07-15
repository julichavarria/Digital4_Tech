CREATE SCHEMA `digital4tech` ;

CREATE TABLE `digital4tech`.`usuarios` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `nombre` VARCHAR(100) NOT NULL,
  `apellido` VARCHAR(100) NOT NULL,
  `usuario` VARCHAR(100) NOT NULL,
  `email` VARCHAR(150) NOT NULL,
  `password` VARCHAR(100) NOT NULL,
  `rol_id` INT NOT NULL,
  `avatar` VARCHAR(200) NOT NULL,
  PRIMARY KEY (`id`));


CREATE TABLE `digital4tech`.`productos` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `titulo` VARCHAR(200) NOT NULL,
  `imagen` VARCHAR(200) NOT NULL,
  `categoria_id` INT NOT NULL,
  `procesador` VARCHAR(200) NOT NULL,
  `mother` VARCHAR(200) NOT NULL,
  `video` VARCHAR(200) NULL,
  `ram` VARCHAR(200) NOT NULL,
  `disco` VARCHAR(200) NOT NULL,
  `gabinete` VARCHAR(200) NOT NULL,
  `fuente` VARCHAR(200) NOT NULL,
  `precio` FLOAT NOT NULL,
  PRIMARY KEY (`id`));

CREATE TABLE `digital4tech`.`categorias_pc` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `marca` VARCHAR(200) NOT NULL,
  `logo` VARCHAR(200) NOT NULL,
  PRIMARY KEY (`id`));

CREATE TABLE `digital4tech`.`roles` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `nombre_rol` VARCHAR(200) NOT NULL,
  PRIMARY KEY (`id`));

ALTER TABLE `digital4tech`.`productos` 
ADD CONSTRAINT `fk_productos_categoria`
  FOREIGN KEY (`categoria_id`)
  REFERENCES `digital4tech`.`categorias_pc` (`id`)
  ON DELETE NO ACTION
  ON UPDATE NO ACTION;
  
  ALTER TABLE `digital4tech`.`usuarios` 
ADD CONSTRAINT `fk_usuarios_rol`
  FOREIGN KEY (`rol_id`)
  REFERENCES `digital4tech`.`roles` (`id`)
  ON DELETE NO ACTION
  ON UPDATE NO ACTION;


