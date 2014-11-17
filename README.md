# grunt-ot-discovery
[![Build Status](https://travis-ci.org/opentable/grunt-ot-discovery.png?branch=master)](https://travis-ci.org/opentable/grunt-ot-discovery) [![NPM version](https://badge.fury.io/js/grunt-ot-discovery.png)](http://badge.fury.io/js/grunt-ot-discovery) ![Dependencies](https://david-dm.org/opentable/grunt-ot-discovery.png)

Hook for ot-flavoured service-discovery.

Assumes the server is running hapi-service-discovery module and has endpoints `discovery/announce` and `discovery/unannounce` available.

installation:

```npm install --save grunt-ot-discovery```

usage:

```
grunt.initConfig({
  'ot-discovery':{
    'announce': {
      options: {
        server: 'my.server.domain',
        action: 'announce'
      }
    },
    'unannounce': {
      options: {
        server: 'my.server.domain'
        action: 'unannounce',
        ignoreErrors: true
      }
    }
  }
});

options:

`server`: server to hit
`action`: announce | unannounce (default announce)
`ignoreErrors`: true | false (default false)
