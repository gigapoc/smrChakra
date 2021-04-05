import axios from 'axios'

let jwt: string;

const connect = async () => {
    return new Promise((resolve, rej) => {
        if (jwt !== undefined) resolve(jwt);
        else
            axios.post(process.env.SERVER_URL + "/auth/local", {
                identifier: process.env.WEBSITE_USERNAME,
                password: process.env.WBSITE_PASSWORD
            })
            .then((value) => {
                jwt = value.data.jwt;
                resolve(value.data.jwt);
            })
            .catch((e) => {
                console.log('ERROR ', e)
            })
    })
}

module.exports = {
    connect
}