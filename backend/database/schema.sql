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
    id_activity int(16) primary key auto_increment,
    activity_image varchar (250),
    title VARCHAR(50) NOT NULL,
    user_id BINARY(16),
    admin_id BINARY(16),
    act_description VARCHAR(60) NOT NULL,
    price INT NOT NULL,
    opinion varchar(50),
    stock INT,
    createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    FOREIGN KEY (user_id) REFERENCES users(id),
    FOREIGN KEY (admin_id) REFERENCES admins(id)
);
SELECT * FROM activities;
insert into activities(id_activity, activity_image, title, act_description, price, opinion, stock) 
values
( 1 , 'https://res.cloudinary.com/dqj4pvyva/image/upload/v1697633262/Dise%C3%B1o_sin_t%C3%ADtulo_48_kzjk3h.png', 'Escalada', 'Escalada en rocas natulales en paisaje edílico.', 55, '4.7/5 15 opiniones', 8),
( 2 , 'https://res.cloudinary.com/dqj4pvyva/image/upload/v1697633262/Dise%C3%B1o_sin_t%C3%ADtulo_47_vcjwbe.png', 'Senderismo', 'Senderismo, rutas en la sierra de Madrid.', 55, '4.7/5 15 opiniones', 8),
( 3 , 'https://res.cloudinary.com/dqj4pvyva/image/upload/v1697633264/Dise%C3%B1o_sin_t%C3%ADtulo_50_zhapmk.png', 'MTB/Enduro-DH', 'MTB/Enduro-DH experiencia extrema en bici.', 45, '4.7/5 12 opiniones' , 5),
( 4 , 'https://res.cloudinary.com/dqj4pvyva/image/upload/v1697633262/Dise%C3%B1o_sin_t%C3%ADtulo_49_l8a0rl.png', 'Barranquismo', 'Barranquismo, rapela por los ríos.', 50, '4.5/5 10 opiniones', 10),
( 5 , 'https://res.cloudinary.com/dqj4pvyva/image/upload/v1697633262/Dise%C3%B1o_sin_t%C3%ADtulo_52_tvst8q.png', 'Boulder', 'Boulder, prueba a escalar sin cuerda.', 45, '4.7/5 10 opiniones', 8),
( 6 , 'https://res.cloudinary.com/dqj4pvyva/image/upload/v1697633262/Dise%C3%B1o_sin_t%C3%ADtulo_51_m9m6bo.png', 'Kayak' , 'Kayak en río natural con los mejores paisajes.', 55, '4.7/5 15 opiniones' , 5);


drop table activities;
drop table users;