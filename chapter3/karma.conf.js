// Karma configuration

module.exports = function(config){
  config.set({
    // base path that will be used to resolve files and exclude
    basePath: '',

    // testing framework to use (jasmine/mocha/quint/...)
    framework:['jasmine'],

    //list of files / patterns to load in the browser
    files:[
      'angular.min.js',
      'angular-mocks.js',
      'controller.js',
      'simpleSpec.js',
      'controllerSpec.js'
    ],

    //list of files / patterns to exclude
    exclude: [],

    //web server port
    port: 8080,

    // level of loggin
    // possible values: LOG_DISABLE || LOG_ERROR || LOG_WARN || LOG_INFO || LOG_DEBUG
    loglevel: config.LOG_INFO,

    //enable / disable watching file and executing tests whenever any files changes
    autoWatch: true,

    // Start these browsers, currently available
    browsers: ['Chrome'],

    //Continues Integration mode 
    //if true, it captures browsers, runs tests, and exits
    singleRun: false
  });
};