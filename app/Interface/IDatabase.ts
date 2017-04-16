import DbDriver from '../Types/DbDriverType';

export interface IDatabase {
    constructor(databaseConfiguration: IDatabaseConfig): void;

    
}

export interface IDatabaseConfig {
    driver: DbDriver,
    host: string,
    port: number,
    database: string,
    username: string | null,
    password?: string | null
    autoSchemaSync: boolean
}