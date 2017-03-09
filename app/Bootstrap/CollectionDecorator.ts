import { default as MongoDbConnection } from './Database';
import { default as Config } from '../Config';

export default function Collection(collectionName: string, alias?: string) {
    return function decoratorFactory(target: Function, propertyName?: string): void {
        if (typeof target === 'function' && propertyName === undefined) {
            let DbConfig = Config.DB;
            let db = new MongoDbConnection(DbConfig);
            alias = (typeof alias !== "undefined") ? alias : collectionName;
            Object.defineProperty(target.prototype, alias, db.getCollection(collectionName));
        }
    }
}