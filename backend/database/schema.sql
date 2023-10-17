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
    id_activity BINARY(16) primary key DEFAULT (UUID_TO_BIN(UUID())),
    title VARCHAR(50) NOT NULL,
    user_id BINARY(16),
    admin_id BINARY(16),
    act_description VARCHAR(60) NOT NULL,
    price INT NOT NULL,
    stock INT NOT NULL,
    createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    FOREIGN KEY (user_id) REFERENCES users(id),
    FOREIGN KEY (admin_id) REFERENCES admins(id)
);
SELECT * FROM activities;
insert into activities(title, act_description, price, stock) values
('Barranquismo', 'rapela por los ríos', 40, 10),
('Boulder', 'prueba a escalar sin cuerda', 40, 10),
('MTB', 'bici extrema', 35, 5);
drop table activities;
drop table users;