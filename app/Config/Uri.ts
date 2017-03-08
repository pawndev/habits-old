const Uri : Object = {
    api: {
        backoffice: {
            baseUri: process.env.BACKOFFICE_API_BASE_URL || "http://api.habiteo.com",
            commercialisation: "/api/v1/commercialisation",
        },
        viacrmTranslator: {
            baseUri: "http://translator-viacrm",
            untranslation: "/untranslate"
        }
    }
};

export default Uri;