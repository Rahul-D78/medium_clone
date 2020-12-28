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

<<<<<<< HEAD
<<<<<<< HEAD
2. Create database user and grant all privileges 
=======
2. Create database user and grant all privileges .
>>>>>>> 49bda5fb43631371560b164429bc28586c86b448
=======
2. Create database user and grant all privileges .
>>>>>>> 5740635798204da0909f45328c1234f35f2e29ea

```SQL
 $create database conduit;
 
 $create user conduit with encrypted password 'conduit';
 
 $grant all privileges on database conduit to conduit;

```

## Installation
```$ npm install```

## Running the app
```$ npm start```
