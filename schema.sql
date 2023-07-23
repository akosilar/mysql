create table users (
    email varchar(255) primary key,
    created_at timestamp default now()
);

insert into users(email) values 
('katie34@yahoo.com'), ('tunde2@gmail.com')