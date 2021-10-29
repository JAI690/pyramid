CREATE DATABASE pyramid;
USE pyramid;

CREATE TABLE Usuario(
usuario_id INT NOT NULL AUTO_INCREMENT,
nombre varchar (45) NOT NULL,
correo varchar (45) NOT NULL,
contraseña varchar (45) NOT NULL,
telefono varchar (45) NOT NULL,
PRIMARY KEY (usuario_id)
);

CREATE TABLE Productos(
productos_id INT NOT NULL AUTO_INCREMENT,
nombre varchar (45) NOT NULL,
modelo varchar (45) NOT NULL,
precio_neto numeric NOT NULL,
descripcion varchar (1000) NOT NULL,
tamaño varchar (45) NOT NULL,
material_colchon varchar (1000) NOT NULL,
estructura_piramidal varchar (1000) NOT NULL,
base varchar (1000) NOT NULL,
colores varchar (100) NOT NULL,
ofertas boolean NOT NULL,
oferta_precio numeric,
beneficios varchar (1000) NOT NULL,
num_imgs numeric NOT NULL,
PRIMARY KEY (productos_id)
);
										
INSERT INTO Productos(nombre,modelo,precio_neto,descripcion,tamaño,material_colchon,
estructura_piramidal,base,colores,ofertas,oferta_precio,beneficios,num_imgs)
VALUES('Piramicuna estandar','Piramicuna',5500,	
'La Piramicuna es una camita piramidal para niños pequeños, en especial bebés, que se benefician del efecto piramidal tanto como los adultos en las Piramicamas. Ideal para bebés de hasta dos años de edad',
'infantil','colchón de espuma de alta densidad y viscoelásticas de gran grosor',
'aluminio de alta pureza','Base de madera.Fabricada con tableros marinos especiales y melaminas de excelente calidad',
	'Imprimadas y pintadas en colores a elección o decoraciones personalizadas, sin tóxicos.'
    ,1, 5225,'Produce en los niños una serie de mejoras en el sistema inmunitario. Optimiza todas las funciones fisiológicas, el barrido de radicales libres y el efecto bacteriostático, generado por la imposibilidad de cualquier clase de putrefacción',
    3);
    
INSERT INTO Productos(nombre,modelo,precio_neto,descripcion,tamaño,material_colchon,
estructura_piramidal,base,colores,ofertas,oferta_precio,beneficios,num_imgs)
VALUES('PIRAMICAMA DE LUJO ESPECIAL','Piramicama',29999,
'Cama transparente para iluminación moderada, colorida, cambiante o de color estático',
'King size','Espuma de alta resiliencia','Aluminio de alta pureza',
'Tiene tatami de plástico especial, transparente, no pesa tanto como el vidrio ni es tan frágil como el acrílico',
'Imprimadas y pintadas en colores a elección sin tóxicos', 
  0,NULL, 'Muy adecuada para cromoterapia.',4);

INSERT INTO Productos(nombre,modelo,precio_neto,descripcion,tamaño,material_colchon,
estructura_piramidal,base,colores,ofertas,oferta_precio,beneficios,num_imgs)
VALUES('PIRAMICAMA ESTANDAR','Piramicama',29339,
	'La Piramicama es una cama piramidal ideal para el descanso y sueño de cualquiera','King size',
    'Espuma de alta resiliencia','Aluminio de alta pureza,',
    'La parte de madera (tatami) incluye somieres integrados.',
	'Imprimadas y pintadas en colores a elección sin tóxicos.', 1,21000,
    'Antireumatica, miorrelajante, antibacterial, desinflamatoria, antioxidante, sedante.',4);
    
INSERT INTO Productos(nombre,modelo,precio_neto,descripcion,tamaño,material_colchon,
estructura_piramidal,base,colores,ofertas,oferta_precio,beneficios,num_imgs)
VALUES('LUXOR KA','Luxor',30000,
	'Cama de lujo terapéutica pintada con patrones cromoterapéuticos, con orlas de dorado o plateado en vinílico. Sin tóxicos',
	'King size','colchón de espuma de alta densidad y viscoelásticas de gran grosor','Aluminio de alta pureza',
	'Base de madera con maderas nobles como el roble, petribí, teka.  Pueden además estar talladas por artistas, conocidos o no',
	'Gran selección de colores con pintura ecológica',0,NULL,'Efectos terapeuticos',2);
    
INSERT INTO Productos(nombre,modelo,precio_neto,descripcion,tamaño,material_colchon,
estructura_piramidal,base,colores,ofertas,oferta_precio,beneficios,num_imgs)
VALUES('PIRAMICAMA HERCULES','Hercules',11813,
'La Piramicama Hercules es una cama piramidal como la Piramicama estandar, sin embargo sus beneficios son aun mayores e incluso el sueño es mas profundo.',
	'King size','Colchón de espuma de alta densidad y viscoelásticas de gran grosor',
	'aluminio de alta pureza','La parte de madera (tatami), incluye un somier integrado.',
    'Imprimadas y pintadas en colores a elección sin tóxicos.',	0,NULL,
	'Tratamiento efectivo contra dolencias reumáticas, escleróticas, fibromialgia e infecciosas incluyendo septicemia grave. Efecto antiedad por su alto poder antioxidante. Profunda relajación muscular (cuatro veces más potente que la Piramicama Estándar). También la usan personas sanas y en especial bomberos, policías y deportistas de élite'
    ,4);
    
INSERT INTO Productos(nombre,modelo,precio_neto,descripcion,tamaño,material_colchon,
estructura_piramidal,base,colores,ofertas,oferta_precio,beneficios,num_imgs)
VALUES('LUXOR ATRIUM','Luxor',31000,
'Cama de lujo terapéutica con diseño exclusivo y lámpara en la base que emite una iluminación agradable',
'King size','Colchón de espuma de alta densidad y viscoelásticas de gran grosor',
'aluminio de alta pureza, endurecido al sílice, sin hierro ni cobre	',
'La base puede ser de tableros marinos especiales o transparente','Gran selección de colores con pintura ecológica',
	0,NULL,'Efectos terapeuticos',2);


INSERT INTO Productos(nombre,modelo,precio_neto,descripcion,tamaño,material_colchon,
estructura_piramidal,base,colores,ofertas,oferta_precio,beneficios,num_imgs)
VALUES('HYGIA','Hygia',11803,
'La Piramicama Hygia es una cama individual ideal para consultorios o terapias que utilizan el efecto de la anti-piramide',
	'individual','Colchón de espuma de alta densidad y viscoelásticas de gran grosor',
	'aluminio de alta pureza', 'La base puede ser de tableros marinos especiales o transparente',
 	'Imprimadas y pintadas en colores a elección sin tóxicos.',0,NULL,
    'La Piramicama Hygia tiene una alta densidad, con lo que se aseguran tratamientos de extrema eficacia en atrofias accidentales y crónicas del aparato locomotor, tratamiento antirreumático local, inflamaciones de diversa etiología, bacteriosis, etc.',
    1);
    
INSERT INTO Productos(nombre,modelo,precio_neto,descripcion,tamaño,material_colchon,
estructura_piramidal,base,colores,ofertas,oferta_precio,beneficios,num_imgs)
VALUES('LUXOR BAH','Luxor',	32000,
	'Cama de lujo terapéutica con diseño exclusivo y variantes en base: tallada, laminada.',
	'King size','Colchón de espuma de alta densidad y viscoelásticas de gran grosor',
	'Estructura piramidal de cuarzo de calidad superior.',
    'La base estará elaborada en materiales pétreos como el marmol o el granito.',
	'Gran selección de colores con pintura ecológica',
    0,NULL,'Efectos terapeuticos',1);

INSERT INTO Productos(nombre,modelo,precio_neto,descripcion,tamaño,material_colchon,
estructura_piramidal,base,colores,ofertas,oferta_precio,beneficios,num_imgs)
VALUES('PIRAMASCOTA ESTANDAR','Piramascota',4200,
'Piramicama adaptada para mascotas ideal para su descanso y recuperacion',
'large','Espuma de alta resiliencia.','	Estructura piramidal realizada en aluminio de la más alta pureza, endurecido al sílice, sin hierro ni cobre',
	'Base interna de tablero marino de primera calidad, ecológico y resistente a la humedad',
	'Amplia gama de colores en tonos lisos y claros, en acrílico resistente de base acuosa, sin tóxicos',
	1,3990,'Gran confort',3);
    
    
    
    
    