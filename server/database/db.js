import { Sequelize } from "sequelize";

const db = new Sequelize(
    'rac', 
    'root',
    'Scarface27#',
    {
        host:'localhost', 
        dialect:'mysql',
        define: {
            timestamps: false
        }
    }
); 

export default db; 