## Medium clone using relworld.io API

## Technologies used

1. Typescript - Programing language
2. Node.js - platform
3. Express - Framework 
4. TypeORM - ORM
5. PostgreSQL - Database

## Database setup

1. Enter `psql` as admin

2. Create database user and grant all privillages

```SQL
create database conduit;
create user conduit with encrypted password 'conduit';
grant all privileges on database conduit to conduit;
```

## Installing the app
```$ npm install```

## Runnig the app
```$ npm start```   