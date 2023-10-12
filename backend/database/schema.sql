create database madxtreme;
use madxtreme;
create table users(
    id binary(16) primary key default (uuid_to_bin(uuid())),
    email varchar(50) not null,
    user_password varchar(60) not null,
    createAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updateAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);
insert into users(id, email, user_password) values
('cyntia@gmail.com', '1234'),
('wanda@gmail.com', '1234ss');
SELECT *, BIN_TO_UUID(id) id FROM users;