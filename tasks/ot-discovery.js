module.exports = function(grunt){
    var request = require('request');

    var buildUrl = function(server, action){
        return 'http://' + server + '/discovery/' + action;
    };

    var execute = function(url, options, done){
        grunt.verbose.writeln('Making request: ' + url);
        var res = request({
            url: url,
            headers: {
                'user-agent': 'grunt-ot-discovery'
            }
        }, function(err, res, body){
            if(!options.ignoreErrors && err){
                return done(err);
            }

            var statusCode = res && res.statusCode;

            if(statusCode !== 200 && !options.ignoreErrors){
                return done(new Error('status code was: ' + res.statusCode));
            }

            var lease = options.ignoreErrors ? {} : JSON.parse(body || "{}");
            grunt.log.ok(options.action + ' => ' + statusCode + ': ' + JSON.stringify(lease));
            done();
        });
    };

    grunt.registerMultiTask('ot-discovery', function(){
        var done = this.async();
        var options = this.options({
            server: '127.0.0.1',
            action: 'announce',
            ignoreErrors: false
        });

        grunt.verbose.writeflags(options);

        execute(buildUrl(options.server, options.action), options, done);
    });
};
