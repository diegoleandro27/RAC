import { Sequelize } from "sequelize";

export const db = new Sequelize(
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

