import MongoDB = require("mongodb");

export default class MongoDbConnection {
    public config: any;
    private static _database: MongoDB.Db;
    private static instance: MongoDbConnection;

    constructor(mongoConf: any) {
        if (!MongoDbConnection.instance) {
            this.config = mongoConf;
            let url : string = MongoDbConnection.ConnectionString(mongoConf);
            MongoDB.MongoClient.connect(url).then((db: MongoDB.Db) => {
                MongoDbConnection._database = db;
            }, (err) => {
                if (err) throw new Error(`An error occured : ${err}`);
            });
            MongoDbConnection.instance = this;
        } else {
            return MongoDbConnection.instance;
        }
    }

    static ConnectionString(mongoConf: any) : string {
         let stringGenerated = "";

        if (mongoConf.user && mongoConf.password) {
            stringGenerated += `${mongoConf.user}:${mongoConf.password}@`;
        }

        stringGenerated += `${mongoConf.url}:${mongoConf.port}/${mongoConf.database}`;

        return stringGenerated;
    }

    Close() : Promise<void> {
        return MongoDbConnection._database.close();
    }

    get Database() : MongoDB.Db {
        return MongoDbConnection._database;
    }

    getCollection(collectionName: string) : MongoDB.Collection {
        return MongoDbConnection._database.collection(collectionName);
    }

    getAllCollections() : Promise<MongoDB.Collection[]> {
        return MongoDbConnection._database.collections();
    }
}