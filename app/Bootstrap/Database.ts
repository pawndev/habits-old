import MongoDB = require("mongodb");

export default class MongoDbConnection {
    public config: any;
    private _database: MongoDB.Db;

    constructor(mongoConf: any) {
        let self = this;
        this.config = mongoConf;
        let url : string = MongoDbConnection.ConnectionString(mongoConf);
        MongoDB.MongoClient.connect(url).then((db: MongoDB.Db) => {
            self._database = db;
        }, (err) => {
            if (err) throw new Error(`An error occured : ${err}`);
        });
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
        return this._database.close();
    }

    get Database() : MongoDB.Db {
        return this._database;
    }

    getCollection(collectionName: string) : MongoDB.Collection {
        return this._database.collection(collectionName);
    }

    getAllCollections() : Promise<MongoDB.Collection[]> {
        return this._database.collections();
    }
}