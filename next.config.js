const withPlugins = require("next-compose-plugins");
// const withSass = require('@zeit/next-sass')
// const withCss = require('@zeit/next-css')

const config = {
    images: {
        domains: [process.env.SERVER_URL]
    },
    // webpack (config, options) {
    //     config.module.rules.push({
    //         test: /\.(png|jpg|gif|svg|eot|ttf|woff|woff2)$/,
    //         use: {
    //             loader: 'url-loader',
    //             options: {
    //                 limit: 100000
    //             }
    //         }
    //     });
 
    //     return config;
    // }
 
};

module.exports = withPlugins([], config);
