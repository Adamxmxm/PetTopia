import {Sequelize} from "sequelize";

const db = new Sequelize('petopia', 'root', '', {
    host: "localhost",
    dialect: "mysql"
});

export default db;