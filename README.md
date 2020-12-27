# medium clone based upon realworld.io api

## Technologies used 

1. typescript - programing language
2. Nodejs - Platform 
3. express - framework
4. TypeORM - ORM
5. PostgreSQL - Database 

## Database setup

```$ sudo -i -u postgres```

1. Enter `psql` as admin .

```$ psql```

2. Create database user and grant all privileges .

```SQL
 $create database conduit;
 
 $create user conduit with encrypted password 'conduit';
 
 $grant all privileges on database conduit to conduit;

```

## Installation
```$ npm install```

## Running the app
```$ npm start```
