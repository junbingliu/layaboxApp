/*! React Starter Kit | MIT License | http://www.reactstarterkit.com/ */

import request from 'superagent';
import { canUseDOM } from 'fbjs/lib/ExecutionEnvironment';

function getUrl(path) {
    if (path.startsWith('http') || canUseDOM) {
        return path;
    }

    return process.env.WEBSITE_HOSTNAME ?
        `http://${process.env.WEBSITE_HOSTNAME}${path}` :
        `http://127.0.0.1:${global.server.get('port')}${path}`;
}

const HttpClient = {

    get: path => new Promise((resolve, reject) => {
        request
            .get(getUrl(path))
            .withCredentials()
            .end((err, res) => {
                if (err) {
                    if (err.status === 404) {
                        resolve(null);
                    } else {
                        reject(err);
                    }
                } else {
                    resolve(res.body);
                }
            });
    }),

    post:(path,postData) => new Promise((resolve, reject) => {
        request
            .post(getUrl(path))
            .withCredentials()
            .type('form')
            .send(postData)
            .end((err, res) => {
                if (err) {
                    if (err.status === 404) {
                        resolve({state:"err",msg:'not found.'});
                    } else {
                        reject(err);
                    }
                } else {
                    resolve(res.body);
                }
            });
    })

};

export default HttpClient;
