CREATE SCHEMA `digital4tech` ;

CREATE TABLE `digital4tech`.`categorias` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `marca` VARCHAR(200) NOT NULL,
  `logo` VARCHAR(200) NOT NULL,
  PRIMARY KEY (`id`));

CREATE TABLE `digital4tech`.`usuarios` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `nombre` VARCHAR(100) NOT NULL,
  `apellido` VARCHAR(100) NOT NULL,
  `usuario` VARCHAR(100) NOT NULL,
  `email` VARCHAR(150) NOT NULL,
  `clave` VARCHAR(100) NOT NULL,
  `rol_id` INT NOT NULL,
  `avatar` VARCHAR(200) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE INDEX `email_UNIQUE` (`email` ASC) VISIBLE);

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
  
CREATE TABLE `digital4tech`.`roles` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `nombre_rol` VARCHAR(200) NOT NULL,
  PRIMARY KEY (`id`));

ALTER TABLE `digital4tech`.`productos` 
ADD CONSTRAINT `fk_productos_categoria`
  FOREIGN KEY (`categoria_id`)
  REFERENCES `digital4tech`.`categorias` (`id`)
  ON DELETE NO ACTION
  ON UPDATE NO ACTION;
  
ALTER TABLE `digital4tech`.`usuarios` 
ADD CONSTRAINT `fk_usuarios_rol`
  FOREIGN KEY (`rol_id`)
  REFERENCES `digital4tech`.`roles` (`id`)
  ON DELETE NO ACTION
  ON UPDATE NO ACTION;

insert into `digital4tech`.categorias (marca, logo) values ('Intel', 'logo_intel.jpg');
insert into `digital4tech`.categorias (marca, logo) values ('Amd', 'logo_amd.jpg');

insert into `digital4tech`.roles (nombre_rol) values ('Administrador');
insert into `digital4tech`.roles (nombre_rol) values ('Cliente');

INSERT INTO `digital4tech`.Productos (titulo, imagen, categoria_id, procesador, mother, video, ram, disco, gabinete, fuente, precio)
VALUES (
"TYRION LANNISTER",
"pcArmada_01.jpg",
1,
"Intel Core i5 12400F",
"MSI PRO Z690-A",
"XFX Radeon RX 6600 8GB GDDR6",
"Kingston DDR4 16GB 3600MHz",
"SSD M.2 WD 2TB Black SN750",
"Cooler Master Mastercase H500",
"AEROCOOL CYLON 500W RGB CON 80 PLUS BRONZE",
206555
  );

INSERT INTO `digital4tech`.Productos (titulo, imagen, categoria_id, procesador, mother, video, ram, disco, gabinete, fuente, precio)
VALUES (
"DARTH VADER",
"pcArmada_02.jpg",
1,
"INTEL CORE I3 10100 4.3 GHZ",
"ASUS PRIME B460M-A R2.0",
"LHR GEFORCE RTX 3050 8GB GALAX OC",
"8GB 2666 MHZ BEAST KINGSTON FURY",
"1TB SEAGATE BARRACUDA",
"Mid TOWER SENTEY Z20",
"THERMALTAKE SMART 600W 80 PLUS WHITE",
159779
  );

INSERT INTO `digital4tech`.Productos (titulo, imagen, categoria_id, procesador, mother, video, ram, disco, gabinete, fuente, precio)
VALUES (
"LEGOLAS",
"pcArmada_03.jpg",
1,
"INTEL CORE I3 10100 4.3 GHZ COMET LAKE 1200",
"ASUS PRIME B460M-A R2.0",
"GEFORCE GTX 1660 TI 6GB GALAX 1 CLICK OC",
"8GB 2666 MHZ BEAST KINGSTON FURY",
"1TB SEAGATE BARRACUDA",
"GAMER RGB LED AEROCOOL BOLT",
"THERMALTAKE SMART 600W 80 PLUS WHITE",
151079
  );

INSERT INTO `digital4tech`.Productos (titulo, imagen, categoria_id, procesador, mother, video, ram, disco, gabinete, fuente, precio)
VALUES (
"WALTER WHITE",
"pcArmada_04.jpg",
1,
"INTEL CORE I9 11900KF 5.3 GHZ",
"MSI Z590 GAMING PLUS",
"GEFORCE GTX 1660 6GB MSI SUPER VENTUS XS OC",
"8GB 2666 MHZ CRUCIAL",
"SSD - 480GB - PARA ENSAMBLADO",
"Mid TOWER AEROCOOL PLAYA",
"GIGABYTE 750W 80 PLUS GOLD",
300755
  );

INSERT INTO `digital4tech`.Productos (titulo, imagen, categoria_id, procesador, mother, video, ram, disco, gabinete, fuente, precio)
VALUES (
"VITO CORLEONE",
"pcArmada_05.jpg",
2,
"AMD RYZEN 7 PRO 4750G 4.45 GHZ",
"GIGABYTE GA-B450M GAMING",
"LHR GEFORCE RTX 3060 TI 8GB PNY GAMING XLR8",
"16GB 3200 MHZ BEAST KINGSTON FURY",
"SSD - 480GB - PARA ENSAMBLADO",
"Mid TOWER AEROCOOL PLAYA",
"GIGABYTE 750W 80 PLUS GOLD",
267638
  );

INSERT INTO `digital4tech`.Productos (titulo, imagen, categoria_id, procesador, mother, video, ram, disco, gabinete, fuente, precio)
VALUES (
"LUKE SKYWALKER",
 "pcArmada_06.jpg",
2,
"AMD RYZEN 7 PRO 4750G 4.45 GHZ",
"ASUS PRIME B450M-A II",
"GEFORCE GTX 1660 TI 6GB GALAX 1 CLICK OC",
"8GB 2666 MHZ BEAST KINGSTON FURY",
"SOLIDO SSD 240Gb GIGABYTE",
"Mid TOWER AEROCOOL PLAYA",
"GIGABYTE 750W 80 PLUS GOLD",
193598
  );

INSERT INTO `digital4tech`.Productos (titulo, imagen, categoria_id, procesador, mother, video, ram, disco, gabinete, fuente, precio)
VALUES (
"GOLLUM",
"pcArmada_07.jpg",
2,
"AMD RYZEN 5 5600X 3.7 GHZ",
"GIGABYTE GA-B450M GAMING",
"GEFORCE GTX 1660 TI 6GB GALAX 1 CLICK OC",
"8GB 2666 MHZ BEAST KINGSTON FURY",
"SOLIDO SSD 480Gb KINGSTON",
"Mid TOWER AEROCOOL PLAYA",
"THERMALTAKE SMART 600W 80 PLUS WHITE",
184578
  );

INSERT INTO `digital4tech`.Productos (titulo, imagen, categoria_id, procesador, mother, video, ram, disco, gabinete, fuente, precio)
VALUES (
"MORFEO",
"pcArmada_08.jpg",
2,
"AMD RYZEN 5 3600 4.2 GHZ",
"ASUS PRIME A320M-K",
"GEFORCE GTX 1660 TI 6GB GALAX 1 CLICK OC",
"8GB 2666 MHZ BEAST KINGSTON FURY",
"SOLIDO SSD 240Gb KINGSTON",
"Mid TOWER SENTEY Z20 LITE",
"THERMALTAKE SMART 600W 80 PLUS WHITE",
163479
  );

INSERT INTO `digital4tech`.Productos (titulo, imagen, categoria_id, procesador, mother, video, ram, disco, gabinete, fuente, precio)
VALUES (
"MARTY MCFLY",
"pcArmada_09.jpg",
1,
"INTEL CORE I7 11700F 5.0 GHZ",
"GIGABYTE GA-Z590 UD",
"GEFORCE RTX 3080 TI 12GB ASUS TUF GAMING OC",
"8GB 2666 MHZ CRUCIAL",
"SOLIDO SSD 480Gb KINGSTON",
"Mid TOWER SENTEY Z20 LITE",
"GIGABYTE 750W 80 PLUS GOLD",
452248
  );

INSERT INTO `digital4tech`.Productos (titulo, imagen, categoria_id, procesador, mother, video, ram, disco, gabinete, fuente, precio)
VALUES (
"NEYTIRI",
"pcArmada_10.jpg",
2,
"AMD RYZEN 7 PRO 4750G 4.45 GHZ",
"GIGABYTE GA-B450M GAMING",
"GEFORCE RTX 2060 6GB GALAX OC",
"8GB 2666 MHZ CRUCIAL",
"SOLIDO SSD 480Gb KINGSTON",
"Mid TOWER SENTEY Z20 LITE",
"GIGABYTE 750W 80 PLUS GOLD",
207719
  );

INSERT INTO `digital4tech`.Productos (titulo, imagen, categoria_id, procesador, mother, video, ram, disco, gabinete, fuente, precio)
VALUES (
"R2-D2",
"pcArmada_11.jpg",
2,
"AMD RYZEN 7 PRO 4750G 4.45 GHZ",
"GIGABYTE GA-B450M GAMING",
"GEFORCE GTX 1660 6GB MSI SUPER VENTUS XS OC",
"8GB 2666 MHZ CRUCIAL",
"1TB SEAGATE BARRACUDA",
"Mid TOWER SENTEY Z20 LITE",
"GIGABYTE 750W 80 PLUS GOLD",
199689
  );

INSERT INTO `digital4tech`.Productos (titulo, imagen, categoria_id, procesador, mother, video, ram, disco, gabinete, fuente, precio)
VALUES (
"AGENTE SMITH",
"pcArmada_12.jpg",
2,
"AMD RYZEN 7 PRO 4750G 4.45 GHZ",
"GIGABYTE GA-B450M GAMING",
"GEFORCE GT 1030 2GB GAINWARD",
"8GB 2666 MHZ CRUCIAL",
"1TB SEAGATE BARRACUDA",
"MINI TOWER SENTEY F10 RGB",
"CROMAX KC-DAA-500 500W",
97329
  );

INSERT INTO `digital4tech`.Productos (titulo, imagen, categoria_id, procesador, mother, video, ram, disco, gabinete, fuente, precio)
VALUES (
"JAKE SULLY",
"pcArmada_13.jpg",
2,
"AMD RYZEN 5 3600 4.2 GHZ",
"ASUS PRIME A320M-K",
"GEFORCE GTX 1660 TI 6GB GALAX 1 CLICK OC",
"8GB 2666 MHZ CRUCIAL",
"1TB SEAGATE BARRACUDA",
"MINI TOWER SENTEY F10 RGB",
"GIGABYTE 750W 80 PLUS GOLD",
164379
  );

INSERT INTO `digital4tech`.Productos (titulo, imagen, categoria_id, procesador, mother, video, ram, disco, gabinete, fuente, precio)
VALUES (
"KHAL DROGO",
"pcArmada_22.jpg",
2,
"AMD RYZEN 5 3600 4.2 GHZ",
"ASUS PRIME A320M-K",
"GEFORCE GTX 1660 TI 6GB GALAX 1 CLICK OC",
"8GB 2666 MHZ CRUCIAL",
"1TB SEAGATE BARRACUDA",
"MINI TOWER SENTEY F10 RGB",
"GIGABYTE 750W 80 PLUS GOLD",
164379
  );

INSERT INTO `digital4tech`.Productos (titulo, imagen, categoria_id, procesador, mother, video, ram, disco, gabinete, fuente, precio)
VALUES (
"LAGERTHA",
"pcArmada_15.jpg",
2,
"AMD RYZEN 7 PRO 4750G 4.45 GHZ",
"GIGABYTE GA-B450M GAMING",
"LHR GEFORCE RTX 3060 TI 8GB PNY GAMING XLR8",
"16GB 3200 MHZ BEAST KINGSTON FURY",
"SOLIDO SSD M2 PCI-E - 960GB",
"Mid TOWER SENTEY Z20 LITE",
"GIGABYTE 750W 80 PLUS GOLD",
277128
  );

INSERT INTO `digital4tech`.Productos (titulo, imagen, categoria_id, procesador, mother, video, ram, disco, gabinete, fuente, precio)
VALUES (
"UHTRED OF BEBBANBURG",
"pcArmada_16.jpg",
2,
"AMD RYZEN 7 5800X 4.7 GHZ",
"ASUS PRIME B450M-A II",
"GEFORCE GTX 1660 TI 6GB GALAX 1 CLICK OC",
"8GB 2666 MHZ BEAST KINGSTON FURY",
"SOLIDO SSD 240Gb KINGSTON",
"Mid TOWER SENTEY Z20 LITE",
"THERMALTAKE SMART 600W 80 PLUS WHITE",
205316
  );

INSERT INTO `digital4tech`.Productos (titulo, imagen, categoria_id, procesador, mother, video, ram, disco, gabinete, fuente, precio)
VALUES (
"JOHN LOCKE",
"pcArmada_17.jpg",
2,
"AMD RYZEN 7 PRO 4750G 4.45 GHZ",
"GIGABYTE GA-B450M GAMING",
"LHR GEFORCE RTX 3060 TI 8GB PNY GAMING XLR8",
"8GB 2666 MHZ BEAST KINGSTON FURY",
"SOLIDO SSD 240Gb KINGSTON",
"Mid TOWER AEROCOOL PLAYA",
"GIGABYTE 750W 80 PLUS GOLD",
268327
  );

INSERT INTO `digital4tech`.Productos (titulo, imagen, categoria_id, procesador, mother, video, ram, disco, gabinete, fuente, precio)
VALUES (
"TONY STARK",
"pcArmada_18.jpg",
1,
"INTEL CORE I7 11700KF 5.0 GHZ",
"MSI Z590 GAMING PLUS",
"GEFORCE GTX 1660 TI 6GB GALAX 1 CLICK OC",
"16GB 3200 MHZ BEAST KINGSTON FURY",
"SOLIDO SSD 240Gb KINGSTON",
"Mid TOWER AEROCOOL PLAYA",
"THERMALTAKE SMART 600W 80 PLUS WHITE",
241248
  );

INSERT INTO `digital4tech`.Productos (titulo, imagen, categoria_id, procesador, mother, video, ram, disco, gabinete, fuente, precio)
VALUES (
"BJÖRN LOTHBROK",
"pcArmada_19.jpg",
2,
"AMD RYZEN 7 5800X 4.7 GHZ",
"ASUS PRIME B450M-A II",
"GEFORCE GTX 1660 TI 6GB GALAX 1 CLICK OC",
"8GB 2666 MHZ BEAST KINGSTON FURY",
"SOLIDO SSD 480Gb KINGSTON",
" Mid TOWER SENTEY Z20 LITE",
"THERMALTAKE SMART 600W 80 PLUS WHITE",
200258
  );

INSERT INTO `digital4tech`.Productos (titulo, imagen, categoria_id, procesador, mother, video, ram, disco, gabinete, fuente, precio)
VALUES (
"SAUL GOODMAN",
"pcArmada_20.jpg",
1,
"INTEL CORE I9 11900KF 5.3 GHZ",
"MSI Z590 GAMING PLUS",
"GEFORCE GTX 1660 6GB MSI SUPER VENTUS XS OC",
"8GB 2666 MHZ CRUCIALY",
"SOLIDO SSD 240Gb KINGSTON",
" Mid TOWER SENTEY Z20 LITE",
"THERMALTAKE SMART 600W 80 PLUS WHITE",
255279
  );

INSERT INTO `digital4tech`.Productos (titulo, imagen, categoria_id, procesador, mother, video, ram, disco, gabinete, fuente, precio)
VALUES (
"BRIAN O'CONNER",
"pcArmada_21.jpg",
1,
"INTEL CORE I9 12900 5.1 GHZ",
"MSI Z690-A WIFI DDR4",
"GEFORCE GTX 1660 6GB MSI SUPER VENTUS XS OC",
"8GB 2666 MHZ CRUCIAL",
"SOLIDO SSD 480Gb KINGSTON",
" Mid TOWER SENTEY Z20 LITE",
"THERMALTAKE SMART 600W 80 PLUS WHITE",
280838
  );

INSERT INTO `digital4tech`.Productos (titulo, imagen, categoria_id, procesador, mother, video, ram, disco, gabinete, fuente, precio)
VALUES (
"ATHELSTAN",
"pcArmada_14.jpg",
1,
"INTEL CORE I9 12900 5.1 GHZ",
"MSI Z690-A WIFI DDR4",
"RADEON RX 6900 XT 16GB GIGABYTE GAMING",
"16GB 2666 MHZ PNY",
"SOLIDO SSD 240Gb GIGABYTE",
"Mid TOWER AEROCOOL PLAYA",
"AEROCOOL DORADO 850W RGB 80 PLUS GOLD",
495008
  );

INSERT INTO `digital4tech`.Productos (titulo, imagen, categoria_id, procesador, mother, video, ram, disco, gabinete, fuente, precio)
VALUES (
"HUGO HURLEY REYES",
"pcArmada_23.jpg",
1,
"INTEL CORE I9 12900 5.1 GHZ",
"MSI Z690-A WIFI DDR4",
"RADEON RX 6600 8GB POWERCOLOR FIGHTER",
"8GB 2666 MHZ CRUCIAL",
"SOLIDO SSD 240Gb GIGABYTE",
"Mid TOWER AEROCOOL PLAYA",
"GIGABYTE 750W 80 PLUS GOLD",
306916
  );

INSERT INTO `digital4tech`.Productos (titulo, imagen, categoria_id, procesador, mother, video, ram, disco, gabinete, fuente, precio)
VALUES (
"HUGO HURLEY II",
"pcArmada_24.jpg",
1,
"INTEL CORE I9 12900 5.1 GHZ",
"MSI Z690-A WIFI DDR4",
"RADEON RX 6600 8GB POWERCOLOR FIGHTER",
"8GB 2666 MHZ CRUCIAL",
"SOLIDO SSD 500Gb GIGABYTE",
"Mid TOWER AEROCOOL PLAYA",
"GIGABYTE 750W 80 PLUS GOLD",
312221
  );

INSERT INTO `digital4tech`.Productos (titulo, imagen, categoria_id, procesador, mother, video, ram, disco, gabinete, fuente, precio)
VALUES (
"PETER PARKER",
"pcArmada_25.jpg",
2,
"AMD RYZEN 7 PRO 4750G 4.45 GHZ",
"GIGABYTE GA-B450M GAMING",
"RADEON RX 6700 XT 12GB ASROCK CHALLENGER",
"16GB 3200 MHZ BEAST KINGSTON FURY",
"SOLIDO SSD 240Gb GIGABYTE",
"Mid TOWER AEROCOOL PLAYA",
"GIGABYTE 750W 80 PLUS GOLD",
271517
  );

INSERT INTO `digital4tech`.Productos (titulo, imagen, categoria_id, procesador, mother, video, ram, disco, gabinete, fuente, precio)
VALUES (
"DUSTIN HENDERSON",
"pcArmada_26.jpg",
2,
"AMD RYZEN 7 5800X 4.7 GHZ",
"GIGABYTE GA-B450M GAMING",
"GEFORCE RTX 3070 TI 8GB GALAX SG OC",
"16GB 3200 MHZ BEAST KINGSTON FURY",
"SOLIDO SSD 480Gb GIGABYTE",
"Mid TOWER SENTEY Z20 LITE",
"GIGABYTE 750W 80 PLUS GOLD",
320678
  );

INSERT INTO `digital4tech`.Productos (titulo, imagen, categoria_id, procesador, mother, video, ram, disco, gabinete, fuente, precio)
VALUES (
 "DOMINIC TORETTO",
"pcArmada_27.jpg",
1,
"INTEL CORE I7 12700F 4.9 GHZ",
"MSI PRO Z690-A DDR5",
"GEFORCE RTX 3070 TI 8GB GALAX SG OC",
"16GB 5200 MHZ LANCER RGB XPG",
"SOLIDO SSD 480Gb GIGABYTE",
"Mid TOWER SENTEY Z20 LITE",
"GIGABYTE 750W 80 PLUS GOLD",
340841
  );

INSERT INTO `digital4tech`.Productos (titulo, imagen, categoria_id, procesador, mother, video, ram, disco, gabinete, fuente, precio)
VALUES (
"STEVE ROGERS",
"pcArmada_28.jpg",
2,
"AMD RYZEN 7 5800X 4.7 GHZ",
"ASUS PRIME B450M-A II",
"GEFORCE RTX 3070 TI 8GB GALAX SG OC",
"16GB 3200 MHZ BEAST KINGSTON FURY",
"SOLIDO SSD 480Gb GIGABYTE",
"Mid TOWER SENTEY Z20 LITE",
"GIGABYTE 750W 80 PLUS GOLD",
357245
  );

INSERT INTO `digital4tech`.Productos (titulo, imagen, categoria_id, procesador, mother, video, ram, disco, gabinete, fuente, precio)
VALUES (
"REY EGBERTO DE WESSEX",
"pcArmada_29.jpg",
1,
"INTEL CORE I5 12400 4.4 GHZ",
"ASUS PRIME H610M-E DDR4",
"GEFORCE GTX 1660 6GB MSI SUPER VENTUS",
"8GB 2666 MHZ BEAST KINGSTON FURY",
"SOLIDO SSD M2 - 240GB",
"Mid TOWER SENTEY Z20 LITE",
"THERMALTAKE SMART 600W 80 PLUS WHITE",
180031
  );

INSERT INTO `digital4tech`.Productos (titulo, imagen, categoria_id, procesador, mother, video, ram, disco, gabinete, fuente, precio)
VALUES (
"KATE AUSTEN",
"pcArmada_30.jpg",
2,
"AMD RYZEN 9 5900X 4.8 GHZ",
"GIGABYTE GA-B450M GAMING",
"GEFORCE RTX 3080 TI 12GB ZOTAC HOLO",
"16GB 2666 MHZ PNY",
"SOLIDO SSD 480Gb KINGSTON",
"Mid TOWER AEROCOOL PLAYA",
"GIGABYTE 750W 80 PLUS GOLD",
455647
  );
  
INSERT INTO `digital4tech`.usuarios (nombre, apellido, usuario, email, clave, rol_id, avatar)
VALUES (
"Administrador",
"AdminApellido",
"Admin",
"admin@d4t.com",
"$2a$10$c59MG0X55hlGZH7xjSExyegwTI8zDzpqv3.TmVwdkyx8THGmv1bYa",
1,
"avatar01.png"
  );

INSERT INTO `digital4tech`.usuarios (nombre, apellido, usuario, email, clave, rol_id, avatar)
VALUES (
"Cliente",
"ClienteApellido",
"Client",
"client@d4t.com",
"$2a$10$XM0K7GwY2VZnQYBFtkaaV.Sia6OxW0NnuzM3y48T0666jJnp2cTtS",
2,
"avatar02.png"
  );
  
SELECT * FROM `digital4tech`.productos;