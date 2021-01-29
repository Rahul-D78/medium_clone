# Introduction :
This is an api for an blogging app based on `realworld.io` API . The frontend of the project is build using `React.js` [Follow_Link](https://github.com/Rahul-D78/medium_frontend).

## Technologies used 

1. typescript - programing language
2. Nodejs - Platform 
3. express - framework
4. TypeORM - ORM
5. PostgreSQL - Database
6. JWT -- auth
7. Google OAuth -- auth

## Database setup

```$ sudo -i -u postgres```

1. Enter `psql` as admin .

```$ psql```

2. Create database user and grant all privileges 

```SQL
 $create database conduit;
 
 $create user conduit with encrypted password 'conduit';
 
 `swith to the newly created db and grant all privileges to the user`
 
 $grant all privileges on database conduit to conduit;

```

## Installation
```$ npm install```

## Running the app
```$ npm start```
