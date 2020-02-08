const { DataSource } = require('apollo-datasource');

class GreeingAPI extends DataSource {
    constructor({ store }) {
        super();
        this.store = store;
    }

    /**
     * This is a function that gets called by ApolloServer when being setup.
     * This function gets called with the datasource config including things
     * like caches and context. We'll assign this.context to the request context
     * here, so we can know about the user making requests
     */
    initialize(config) {
        this.context = config.context;
    }


    async changeGreeting(language,message) {

        const greeting = await this.store.greetings.findOrCreate({ where: { language, message } });
        return greeting;
    }

    async getGreeting(language) {
        const found = await this.store.greetings.find({
            where: { language },
        });
        return found;
    }

}

module.exports = GreeingAPI;
