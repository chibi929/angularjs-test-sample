// Karma configuration
// Generated on Fri Apr 28 2017 16:28:04 GMT+0900 (JST)

module.exports = function(config) {
  config.set({

    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: '',


    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: ['jasmine'],


    // list of files / patterns to load in the browser
    files: [
      'node_modules/angular/angular.js',
      'node_modules/angular-mocks/angular-mocks.js',
      'test/index.js'
    ],


    // list of files to exclude
    exclude: [
    ],


    // preprocess matching files before serving them to the browser
    // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
    preprocessors: {
      'test/index.js': ['webpack', 'sourcemap']
    },

    // Webpack settings.
    webpack: {
      devtool: 'inline-source-map',
      resolve: {
        extensions: ['.ts', '.js']
      },
      module: {
        rules: [
          {
            test: /\.ts$/,
            use: ['ts-loader']
          },
          {
            test: /\.ts$/,
            exclude: /(test|node_modules)/,
            use: ['istanbul-instrumenter-loader'],
            enforce: 'post'
          }
        ]
      }
    },

    
    // test results reporter to use
    // possible values: 'dots', 'progress'
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    reporters: ['progress', 'junit', 'html', 'coverage', 'coverage-istanbul'],

    junitReporter: {
      outputDir: 'reports/report'
    },

    htmlReporter: {
      outputDir: 'reports/report'
    },

    coverageReporter: {
      dir: 'reports/coverage',
      reporters: [
        // テキスト形式に出力(コンソール用)
        { type: 'text' },
        // Cobertura形式で出力(Jenkins用)
        { type: 'cobertura' },
        // HTML形式で出力
        // istanbulのバグなのかヌルポになり最後にエラー出力されてしまう
        // エラー出力されても視覚的に確認することはできるが念の為コメントアウトしておく
        // 視覚的に確認する場合はコメントアウトを外してテストする
        //{ type: 'html' }
      ]
    },

    // 通常の coverageReporter では、HTML形式の出力が上記の通りできなかったため、
    // karma-coverage-istanbul-reporter というものを使用するようにした。
    // "text", "cobertura" についてもこちらに寄せることができるが、出力が少々異なるようなので、
    // 念の為、こちらは "HTML" 専用にしておく。
    coverageIstanbulReporter: {
      reports: ['html'],
      dir: 'reports/coverage/html-coverage',
      fixWebpackSourcePaths: true
    },

    
    // web server port
    port: 9876,


    // enable / disable colors in the output (reporters and logs)
    colors: true,


    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,


    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: false,


    // start these browsers
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    browsers: ['PhantomJS'],


    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: true,

    // Concurrency level
    // how many browser should be started simultaneous
    concurrency: Infinity
  })
}
