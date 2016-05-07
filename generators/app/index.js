'use strict';

var generators = require('yeoman-generator');

var gen = generators.Base.extend({
    initializing: function() {

        try {
            this.username = process.env.USER || process.env.USERPROFILE.split(require('path').sep)[2];
        } catch (e) {
            this.username = '';
        }
    },
    prompting: function() {
        var done = this.async();
        var self = this;

        this.prompt([
            {
                type: 'input',
                name: 'name',
                message: 'Your project name',
                validate: function(name) {
                    if (!name) {
                        return 'Project name cannot be empty';
                    }
                    if (!/\w+/.test(name)) {
                        return 'Project name should only consist of 0~9, a~z, A~Z, _, .';
                    }

                    var fs = require('fs');
                    if (!fs.existsSync(self.destinationPath(name))) {
                        return true;
                    }
                    if (require('fs').statSync(self.destinationPath(name)).isDirectory()) {
                        return 'Project already exist';
                    }
                    return true;
                }
            },
            {
                type: 'input',
                name: 'description',
                message: 'Your project description',
                default: ''
            },
            {
                type: 'input',
                name: 'username',
                message: 'Your name',
                default: this.username
            },
            {
                type: 'input',
                name: 'email',
                message: 'Your email',
                default: ''
            },
            {
                type: 'confirm',
                name: 'pushState',
                message: 'Use html5 mode?',
                default: true
            },
            {
                type: 'list',
                name: 'registry',
                message: 'Which registry would you use?',
                choices: [
                    'https://registry.npm.taobao.org',
                    'https://registry.npmjs.org'
                ]
            }
        ])
            .then(function(answers) {
                require('date-util');
                self.answers = answers;
                self.answers.date = new Date().format('mmm d, yyyy');
                self.obj = {answers: self.answers};
                done();
            });
    },
    configuring: function(answers) {
        var path = require('path');
        var fs = require('fs');
        var self = this;
        var done = this.async();
        fs.exists(this.destinationPath(this.answers.name), function(exists) {
            if (exists && fs.statSync(self.destinationPath(self.answers.name)).isDirectory()) {
                self.log.error('Directory [' + self.answers.name + '] exists');
                process.exit(1);
            }
            self.destinationRoot(path.join(self.destinationRoot(), self.answers.name));
            done();
        });
    },
    writing: function() {
        var self = this;
        var _ = require('lodash');

        self.fs.copyTpl(self.templatePath('etc/config.js'), self.destinationPath('etc/config.js'), self.obj);
        self.directory(self.templatePath('img'), self.destinationPath('img'));
        self.directory(self.templatePath('js'), self.destinationPath('js'), function(body) {
            return _.template(body, {
                interpolate: /<%=([\s\S]+?)%>/g
            })(self.obj);
        });
        self.directory(self.templatePath('css'), self.destinationPath('css'));
        self.fs.copy(self.templatePath('eslintrc'), self.destinationPath('.eslintrc'));
        self.fs.copy(self.templatePath('gitignore'), self.destinationPath('.gitignore'));
        self.fs.copy(self.templatePath('index.html_vm'), self.destinationPath('index.html_vm'));

        self.fs.copyTpl(self.templatePath('package.json_vm'), self.destinationPath('package.json'), self.obj);

        self.fs.copyTpl(self.templatePath('webpack.config.dev.js'),
            self.destinationPath('webpack.config.dev.js'), self.obj);

        self.fs.copyTpl(self.templatePath('webpack.config.prod.js'),
            self.destinationPath('webpack.config.prod.js'), self.obj);
    },
    install: function() {
        this.npmInstall(null, {registry: this.answers.registry});
    },
    end: function() {
        this.log.ok('Project ' + this.answers.name + ' generated!!!');
    }
});

module.exports = gen;
