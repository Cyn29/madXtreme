create database madxtreme;
use madxtreme;

create table users(
    id binary(16) primary key default (uuid_to_bin(uuid())),
    email varchar(50) not null,
    user_password varchar(60) not null,
    createAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updateAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

insert into users(email, user_password) values
('cyntia@gmail.com', '1234'),
('wanda@gmail.com', '1234ss');

SELECT *, BIN_TO_UUID(id) id FROM users;

create table admins(
    id binary(16) primary key default (uuid_to_bin(uuid())),
    email varchar(50) not null,
    admin_password varchar(60) not null,
    createAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updateAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

SHOW GRANTS FOR 'root'@'localhost';
GRANT ALL PRIVILEGES ON madxtreme.* TO 'root'@'localhost';
FLUSH PRIVILEGES;

CREATE TABLE activities (
    id_activity INT(16) primary key auto_increment,
    user_id BINARY(16),
    admin_id BINARY(16),
	activity_image varchar (250) NOT NULL,
	title_activity VARCHAR(60) NOT NULL,
    category_activity VARCHAR(20) NOT NULL,
    act_description VARCHAR(1000) NOT NULL,
    price_activity INT(7) NOT NULL,
    opinion_activity varchar(50),
    activityDetails VARCHAR(300)NOT NULL,
	
    createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    FOREIGN KEY (user_id) REFERENCES users(id),
    FOREIGN KEY (admin_id) REFERENCES admins(id),
	FOREIGN KEY (category_activity) REFERENCES categories(id_category)

);

SELECT * FROM activities;

insert into activities(id_activity, activity_image, title_activity, category_activity, act_description, price_activity, opinion_activity, activityDetails)
values
( 1 , 'https://res.cloudinary.com/dqj4pvyva/image/upload/v1697633262/Dise%C3%B1o_sin_t%C3%ADtulo_48_kzjk3h.png', 'Escalada en rocas natulales en paisaje edílico.', 'Escalada', 'Jaime diseña y dirige la ruta para que practiques y desarrolles tu capacidad de lectura del terreno; Cynthia y Raul te asesoran en todo lo relacionado a la mecánica de la bici y la montaña y Raúl de SLF te da las pautas necesarias para que entiendas la relación entre emociones y respuestas físicas, enfoques miedos desde otro punto de vista y equilibres tu experiencia sobre la bici. 

El curso de Enduro más completo. 
Llegada y orientación.
Sesión de calentamiento e introductoria.            
Entrenamiento de técnica en saltos y postura.
Enduro - DH en diversas ubicaciones.
Almuerzo en la naturaleza.
Cena y tiempo libre.
Últimas rutas de MTB-Enduro.
Comida en la montaña.
Regreso.', 55, '4.7/5 15 opiniones', 'Calle Colón, El Molar. Quedada a las 9.00am'),
( 2 , 'https://res.cloudinary.com/dqj4pvyva/image/upload/v1697633262/Dise%C3%B1o_sin_t%C3%ADtulo_47_vcjwbe.png', 'Senderismo rutas en la sierra de Madrid.', 'Senderismo', '"Wanda lidera y guía la ruta para que puedas practicar y desarrollar tu capacidad de navegación por el terreno. Andrea y Ainhoa te proporcionan consejos sobre la mecánica de la marcha y la naturaleza, mientras que Jaime  de SLF te brinda las pautas necesarias para comprender la relación entre las emociones y las respuestas físicas. Te ayudará a abordar tus miedos desde una perspectiva diferente y a equilibrar tu experiencia en el senderismo. El curso de senderismo más completo.

- Llegada y orientación.
- Sesión de calentamiento e introducción.
- Entrenamiento en técnicas de senderismo y postura.
- Senderismo en diversas ubicaciones.
- Almuerzo en plena naturaleza.
- Cena y tiempo libre.
- Últimas rutas de senderismo.
- Comida en la montaña.
- Regreso."', 55, '4.7/5 15 opiniones', 'Calle Esparragal, Aranda del Duero. Quedada a las 8.00am'),
( 3 , 'https://res.cloudinary.com/dqj4pvyva/image/upload/v1697633264/Dise%C3%B1o_sin_t%C3%ADtulo_50_zhapmk.png', 'MTB/Enduro-DH experiencia extrema en bici.', 'MTB/Enduro-DH', 'Andrea lidera y guía la ruta para que puedas practicar y desarrollar tus habilidades en el MTB/Enduro-DH. Cynthia y Jaime te brindan consejos sobre la mecánica de la bicicleta de montaña y la montaña, mientras que Wanda de SLF te proporciona las pautas necesarias para comprender la relación entre las emociones y las respuestas físicas en este deporte extremo. Te ayudará a abordar tus miedos desde una perspectiva diferente y a equilibrar tu experiencia en el MTB/Enduro-DH. El curso de MTB/Enduro-DH más completo.
Llegada y orientación.
Sesión de calentamiento e introducción.
Entrenamiento en técnicas de MTB/Enduro-DH y postura.
Descensos y rutas en diversas ubicaciones montañosas.
Almuerzo en plena naturaleza.
Cena y tiempo libre.
Últimas rutas de MTB/Enduro-DH.
Comida en la montaña.
Regreso', 45, '4.7/5 12 opiniones' , 'Plaza Mayor La Hiruela. Quedada a las 9.00am'),
( 4 , 'https://res.cloudinary.com/dqj4pvyva/image/upload/v1697633262/Dise%C3%B1o_sin_t%C3%ADtulo_49_l8a0rl.png', 'Barranquismo, rapela por los ríos.', 'Barranquismo', 'Ainhoa lidera y guía la ruta para que puedas practicar y desarrollar tus habilidades en el barranquismo. Raúl y Jaime te brindan consejos sobre la mecánica de la actividad y la naturaleza, mientras que Wanda de SLF te proporciona las pautas necesarias para comprender la relación entre las emociones y las respuestas físicas en este deporte. Te ayudará a abordar tus miedos desde una perspectiva diferente y a equilibrar tu experiencia en el barranquismo. El curso de barranquismo más completo.

- Llegada y orientación.
- Sesión de calentamiento e introducción.
- Entrenamiento en técnicas de barranquismo y postura.
- Descensos de barrancos en diversas ubicaciones.
- Almuerzo en plena naturaleza.
- Cena y tiempo libre.
- Últimas rutas de barranquismo.
- Comida en la montaña.
- Regreso.', 50, '4.5/5 10 opiniones', 'Avenida de la constitución, Narnia. Quedada a las 9.00am'),
( 5 , 'https://res.cloudinary.com/dqj4pvyva/image/upload/v1697633262/Dise%C3%B1o_sin_t%C3%ADtulo_52_tvst8q.png', 'Boulder prueba a escalar sin cuerda.', 'Boulder', 'Jaime lidera y guía la ruta para que puedas practicar y desarrollar tus habilidades en la escalada con cuerdas en entornos naturales y desafiantes. Cynthia y Raúl te brindan consejos sobre la mecánica de la escalada y la montaña, mientras que Andrea Rodríguez de SLF te proporciona las pautas necesarias para comprender la relación entre las emociones y las respuestas físicas en esta emocionante aventura. Te ayudará a abordar tus miedos desde una perspectiva diferente y a equilibrar tu experiencia en la escalada con cuerdas. El curso de escalada con cuerdas más completo.

Llegada y orientación.
Sesión de calentamiento e introducción.
Entrenamiento en técnicas de escalada con cuerdas y postura.
Escalada con cuerdas en diversas ubicaciones naturales.
Almuerzo en plena naturaleza.
Cena y tiempo libre.
Últimas rutas de escalada con cuerdas.
Comida en la montaña.
Regreso.', 45, '4.7/5 10 opiniones', 'Calle Don Bosco, Navacerrada. Quedada a las 9.00am'),
( 6 , 'https://res.cloudinary.com/dqj4pvyva/image/upload/v1697633262/Dise%C3%B1o_sin_t%C3%ADtulo_51_m9m6bo.png', 'Kayak en río natural con los mejores paisajes.', 'Kayak', 'Cynthia lidera y guía la ruta para que puedas practicar y desarrollar tus habilidades en el kayak. Ainhoa y Wanda te brindan consejos sobre la mecánica de la actividad y la naturaleza acuática, mientras que Andrea de SLF te proporciona las pautas necesarias para comprender la relación entre las emociones y las respuestas físicas en este deporte. Te ayudará a abordar tus miedos desde una perspectiva diferente y a equilibrar tu experiencia en el kayak. El curso de kayak más completo.

Llegada y orientación.
Sesión de calentamiento e introducción.
Entrenamiento en técnicas de kayak y postura.
Travesías en kayak en diversas ubicaciones acuáticas.
Almuerzo en plena naturaleza.
Cena y tiempo libre.
Últimas rutas de kayak.
Comida junto al agua.
Regreso.', 55, '4.7/5 15 opiniones' , 'Plaza Levante, Hogwarts. Quedada a las 8.15am');


CREATE TABLE products (
    id_products INT(16) primary key auto_increment,
    category_id INT(16)
	user_id BINARY(16),
    admin_id BINARY(16),
    stock_activity INT(5) NOT NULL,
    date_activity DATE NOT NULL
    FOREIGN KEY (category_id) REFERENCES activities(id_activity),
    FOREIGN KEY (user_id) REFERENCES users(id),
    FOREIGN KEY (admin_id) REFERENCES admins(id)
);

drop table activities;
drop table categories;
drop table admins;