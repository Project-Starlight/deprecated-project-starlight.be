"use strict";

function fetchFromServer(url, httpVerb, requestBody) {
    const options = buildOptions(httpVerb, requestBody);
    return fetch(url, options)
        .then(res => res.json())
        .then(json => {
            if ("errors" in json) { //make sure you also use "errors" in laravel
                throw json;
            } else {
                return json;
            }
        });
}

function buildOptions(method, body) {
    const options = {};

    options.method = method;
    options.headers = {
        "Content-Type": "application/json"
    };

    if (body) {
        options.body = JSON.stringify(body);
    }

    return options;
}


