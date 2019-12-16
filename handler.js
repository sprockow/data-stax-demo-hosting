'use strict';

module.exports.authenticate = async (event) => {
  
 const request = event.Records[0].cf.request;
 const headers = request.headers;

// Not true security, but it'll keep it from being accessible to crawlers 
 const expectedAuthString = 'Basic ' + new Buffer('user' + ':' + 'wizard').toString('base64');

 if (headers.authorization) {

  const givenAuthString = headers.authorization[0].value;

  if (givenAuthString === expectedAuthString) {
    return request;
  }

 }

  return {
    status: '401',
    statusDescription: 'Unauthorized',
    body: 'Unauthorized',
    headers: {
        'www-authenticate': [{key: 'WWW-Authenticate', value:'Basic'}]
    },
  };

};
