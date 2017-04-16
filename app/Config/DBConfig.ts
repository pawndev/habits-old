import { IDatabaseConfig } from '../Interface/IDatabase';

const DBConfig : IDatabaseConfig = {
    driver: "mysql",
    host: "localhost",
    port: 3306,
    database: "hapits",
    username: "root",
    password: "root",
    autoSchemaSync: true
};

export default DBConfig;