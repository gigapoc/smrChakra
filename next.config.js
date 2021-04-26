const withPlugins = require("next-compose-plugins");

const config = {
    images: {
        domains: [process.env.SERVER_URL]
    }
};

module.exports = withPlugins([], config);
