# tubee node.js SDK with typescript support

[![Build Status](https://travis-ci.org/gyselroth/tubee-sdk-node.svg?branch=master)](https://travis-ci.org/gyselroth/tubee-sdk-typescript-node)
[![GitHub release](https://img.shields.io/github/release/gyselroth/tubee-sdk-node.svg)](https://github.com/gyselroth/tubee-sdk-typescript-node/releases)
[![npm](https://img.shields.io/npm/v/@gyselroth/tubee-sdk-node.svg)](https://www.npmjs.com/package/@gyselroth/tubee-sdk-node)
[![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)](https://raw.githubusercontent.com/gyselroth/tubee-sdk-typescript-node/master/LICENSE) 

Provides a node.js SDK for tubee. Including typescript definition.
>**Note** This SDK is mostly generated from the tubee [OpenAPI](https://github.com/OAI/OpenAPI-Specification) specs.

## Install
```
npm install --save @gyselroth/tubee-sdk-node
```

## Usage

### Example request

```javascript
const { v1, auth } = require('@gyselroth/tubee-sdk-node');

var server = 'https://localhost:8090';
var client = new v1.NamespacesApi(server + '/api/v1');
var basic = new auth.basic('admin', 'admin');
client.setDefaultAuthentication(basic);

client.getNamespaces().then((response) => {
  console.log(response.body);
}).catch((error) => {
  console.log(error);
});
```
