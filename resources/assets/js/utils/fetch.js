import { API_HOST, API_PATH } from '../config/_entrypoint';
import axios from 'axios';

const FileDownload = require('react-file-download');

axios.interceptors.response.use(
    (response) => {
        return response;
    },
    (error) => {
        if (error.response.status === 401) {
            //@TODO Needs to take into account user roles
            window.location.href = API_HOST + '/login';
        }

        return Promise.reject(error.response);
    }
);

export default function (url, options = {}) {
    let forAuth = (options.hasOwnProperty('forAuth') && options.forAuth);

    let link = (url.includes(API_PATH) || forAuth)
        ? API_HOST + url
        : API_HOST + API_PATH + url;
    let method = options.hasOwnProperty('method') ? options.method : 'GET';
    let data = options.hasOwnProperty('body') ? options.body : {};

    return axios[method.toLowerCase()](link, data)
        .then((response) => {
            if (response.headers['x-suggested-filename']) {
                return FileDownload(response.data, response.headers['x-suggested-filename']);
            }

            return response;
        })
    ;
}

export function uploadFile(url, file, name) {
    let link = (url.includes(API_PATH))
        ? API_HOST + url
        : API_HOST + API_PATH + url;

    let formData = new FormData();

    formData.append(name, file);

    const config = {
        headers: {
            'content-type': 'multipart/form-data'
        }
    };

    return axios.post(link, formData, config);
}