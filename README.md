Открыть терминал в корневой папке проекта
создать базу данных postgreSQL:
sudo su - postgres
psql
CREATE DATABASE reserves_db;
\q
exit

установить зависимости
npm i
отредактировать файл /app/config/db.config.js
PASSWORD: для пользвателя postgres
если бд уже существует, то отредактируйте соответсвующие поля

В командной сроке npm start
из приложеня Postman или другого отправить post запрос
localhost:4200/api/bookings/reserve
body:
{
"event_id": 1,
"user_id": "user123"
}
