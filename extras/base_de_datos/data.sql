select * from productos;
select * from productos WHERE id=1;
INSERT INTO productos (titulo, imagen, categoria_id, procesador, mother, video, ram, disco, gabinete, fuente, precio)
VALUES ('TYRION LANNISTER', 'pcArmada_01.jpg', 1, 'Intel Core i5 12400F', 'MSI PRO Z690-A', 'XFX Radeon RX 6600 8GB GDDR6','Kingston DDR4 16GB 3600MHz', 'SSD M.2 WD 2TB Black SN750', 'Cooler Master Mastercase H500', 'AEROCOOL CYLON 500W RGB CON 80 PLUS BRONZE', 206.555);

INSERT INTO productos (titulo, imagen, categoria_id, procesador, mother, video, ram, disco, gabinete, fuente, precio)
VALUES ('DARTH VADER', 'pcArmada_01.jpg', 2, 'Intel Core i5 12400F', 'MSI PRO Z690-A', 'XFX Radeon RX 6600 8GB GDDR6','Kingston DDR4 16GB 3600MHz', 'SSD M.2 WD 2TB Black SN750', 'Cooler Master Mastercase H500', 'AEROCOOL CYLON 500W RGB CON 80 PLUS BRONZE', 206.555);

INSERT INTO categorias_pc(marca,logo)
VALUES ('Intel', 'logo_intel.jpg');

select * from categorias_pc;

update categorias_pc SET marca = 'AMD', logo = 'logo_amd.jpg' WHERE id=2;

SELECT categorias_pc.marca AS marca, productos.titulo, productos.categoria_id
FROM productos
INNER JOIN categorias_pc;

DELETE FROM productos WHERE titulo = 'TYRION LANNISTER' ;