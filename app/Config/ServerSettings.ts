const ServerSettings : Object = {
    Hapi: {
        port: process.env.BACKEND_PORT || 80,
        host: "localhost"
    }
};

export default ServerSettings;