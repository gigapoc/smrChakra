const withPlugins = require("next-compose-plugins");
// const withSass = require('@zeit/next-sass')
// const withCss = require('@zeit/next-css')
const withTM = require('next-transpile-modules')([
    '@fullcalendar/common',
    '@fullcalendar/react',
    '@fullcalendar/daygrid',
    "@fullcalendar/google-calendar"
  ]);

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

module.exports = withPlugins([withTM], config);
