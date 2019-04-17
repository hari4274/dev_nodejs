const request = require('request')

REQUEST_AUTHENTICATE = "/web/session/authenticate";
REQUEST_SEARCH_READ = "/web/dataset/search_read";
var odooConfig = {
    url: "http://localhost",
    port: 8076,
    db: 'astir_live01042019',
    username: 'admin',
    password: 'admin'
}
HOST = odooConfig.url + ":" + odooConfig.port
var sessionData = {};
var userContext = {};

var jsonRCall = (url, data, session_id='') => {
    if(session_id != ''){
        // console.log(session_id);
        request.cookie('session_id=' + session_id);
    }
    return new Promise((resolve, reject) => {
        request.post(url, { json: data }, (err, res, body) => {
            // console.log(JSON.stringify(res));
            if (err) { return reject(err); }
            if (res != undefined) {
                return resolve(res);
            }
        });
    });    
};

var jsonRHeadCall = (url, data, res) => {
    var options = {
        url: HOST + REQUEST_SEARCH_READ,
        headers: res.headers,
        form: data
    };
    
    return new Promise((resolve, reject) => {
        request.post(url, { json: data }, (err, res, body) => {
            // console.log(JSON.stringify(res));
            if (err) { return reject(err); }
            if (res != undefined) {
                return resolve(res);
            }
        });
    });
};


/* var odooSession = () => {
    let url = HOST + REQUEST_AUTHENTICATE;
    let data = {
        "jsonrpc": "2.0",
        "params": {
            "db": odooConfig.db,
            "login": odooConfig.username,
            "password": odooConfig.password
        },
        "id": null
    };
    return new Promise((resolve, reject) => {        
        request.post(url, { json: data }, (err, res, body) => {
            if (err) { return reject(err); }
            if (body != undefined) {
                sessionData = body.result;
                return resolve({
                    'session_id': sessionData.session_id,
                    'context': sessionData.user_context,
                });
            }
        });
    });
}; */

(async () => {
    console.log('calling');
    let sessionReqData = {
        "jsonrpc": "2.0",
        "params": {
            "db": odooConfig.db,
            "login": odooConfig.username,
            "password": odooConfig.password
        },
        "id": null
    };
    // var sessionJson = await odooSession();
    let sessionRes = await jsonRCall(HOST + REQUEST_AUTHENTICATE, sessionReqData);
    let sessionResData = sessionRes.body.result
    let context = sessionResData.user_context
    console.log('sessionResData', JSON.stringify(sessionResData));
    /* var options = {
        url: HOST + REQUEST_SEARCH_READ,
        "headers": {
            "content-type": "application/json",
            "content-length": "1066",
            "set-cookie": [
            "session_id=90eb74ed7abed943b9510785d8024f8189d9b5aa; Expires=Mon, 15-Jul-2019 11:13:49 GMT; Max-Age=7776000; Path=/"
            ],
            "server": "Werkzeug/0.14.1 Python/2.7.15+",
            "date": "Tue, 16 Apr 2019 11:13:49 GMT"
        },
        form: {}
    }; */
    let searchReadReqData = {
        "method": "call",
        "session_id": sessionResData.session_id,
        "params": {
            "context": context,
            "model": 'res.partner',
            "limit": 10,
            "domain": [['customer', '=', 1], ['is_company', '=', 1]],
            "fields": ['name', 'city']
        }
    }
    let searchReadResData = await jsonRCall(HOST + REQUEST_SEARCH_READ, searchReadReqData, sessionRes);
    console.log('searchReadResData', JSON.stringify(searchReadResData));
})();
