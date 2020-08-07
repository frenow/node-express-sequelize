Usage

npm install
run migrations and seeders
npx sequelize db:migrate
npx sequelize db:seed:all

start express server
npm start


npx sequelize model:generate --name Empresa --attributes nome:string,documento:string


npx sequelize seed:generate --name seed-empresa