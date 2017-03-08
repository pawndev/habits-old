const DBConfig : Object = {
    isEnable: process.env.DB_ENABLE,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    url: "mongo",
    port: "27017",
    database: "hapits",
    collections: ["test"]
};

export default DBConfig;