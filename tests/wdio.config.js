require('dotenv').config()

const url = new URL(process.env.WP_HOME)

exports.config = {
  runner: 'local',
  logLevel: 'warn',
  specs: [
    './tests/e2e/**/*.spec.js',
  ],
  capabilities: [
    {
      os: 'Windows',
      os_version: '10',
      maxInstances: 5,
      browserName: 'chrome',
      project: process.env.BROWSERSTACK_PROJECT || 'WordPress Dev',
      build: process.env.BROWSERSTACK_BUILD || 'Local',
      resolution: '1440x900',
      acceptSslCert: true,
      'goog:chromeOptions': {}
    }
  ],

  hostname: 'hub-cloud.browserstack.com',
  user: process.env.BROWSERSTACK_USER,
  key: process.env.BROWSERSTACK_ACCESS_KEY,

  reporters: ['dot'],
  services: [
    ['browserstack', {
      browserstackLocal: true,
      opts: {
        forceLocal: true
      }
    }]
  ],

  // Options to be passed to Mocha.
  // See the full list at http://mochajs.org/
  framework: 'mocha',
  mochaOpts: {
    ui: 'bdd',
    timeout: 60000
  },

  // =====
  // Hooks
  // =====
  // WebdriverIO provides several hooks you can use to interfere with the test process in order to enhance
  // it and to build services around it. You can either apply a single function or an array of
  // methods to it. If one of them returns with a promise, WebdriverIO will wait until that promise got
  // resolved to continue.
  /**
   * Gets executed once before all workers get launched.
   * @param {Object} config wdio configuration object
   * @param {Array.<Object>} caps list of capabilities details
   */
  // onPrepare: function (config, caps) {
  // },
  /**
   * Gets executed just before initialising the webdriver session and test framework. It allows you
   * to manipulate configurations depending on the capability or spec.
   * @param {Object} config wdio configuration object
   * @param {Array.<Object>} caps list of capabilities details
   * @param {Array.<String>} specs List of spec file paths that are to be run
   */
  beforeSession: function (config, caps, specs) {
    require('expect-webdriverio')
  },
  /**
   * Gets executed before test execution begins. At this point you can access to all global
   * variables like `browser`. It is the perfect place to define custom commands.
   * @param {Array.<Object>} caps list of capabilities details
   * @param {Array.<String>} specs List of spec file paths that are to be run
   */
  before: (caps, specs) => {
    // const chai = require('chai')
    // global.expect = chai.expect
    // chai.Should()
  },
  /**
   * Runs before a WebdriverIO command gets executed.
   * @param {String} commandName hook command name
   * @param {Array} args arguments that command would receive
   */
  // beforeCommand: function (commandName, args) {
  // },
  /**
   * Hook that gets executed before the suite starts
   * @param {Object} suite suite details
   */
  // beforeSuite: function (suite) {
  // },
  /**
   * Function to be executed before a test (in Mocha/Jasmine) starts.
   */
  // beforeTest: function (test, context) {
  // },
  /**
   * Hook that gets executed _before_ a hook within the suite starts (e.g. runs before calling
   * beforeEach in Mocha)
   */
  // beforeHook: function (test, context) {
  // },
  /**
   * Hook that gets executed _after_ a hook within the suite starts (e.g. runs after calling
   * afterEach in Mocha)
   */
  // afterHook: function (test, context, { error, result, duration, passed }) {
  // },
  /**
   * Function to be executed after a test (in Mocha/Jasmine).
   */
  // afterTest: function(test, context, { error, result, duration, passed }) {
  // },


  /**
   * Hook that gets executed after the suite has ended
   * @param {Object} suite suite details
   */
  // afterSuite: function (suite) {
  // },
  /**
   * Runs after a WebdriverIO command gets executed
   * @param {String} commandName hook command name
   * @param {Array} args arguments that command would receive
   * @param {Number} result 0 - command success, 1 - command error
   * @param {Object} error error object if any
   */
  // afterCommand: function (commandName, args, result, error) {
  // },
  /**
   * Gets executed after all tests are done. You still have access to all global variables from
   * the test.
   * @param {Number} result 0 - test pass, 1 - test fail
   * @param {Array.<Object>} capabilities list of capabilities details
   * @param {Array.<String>} specs List of spec file paths that ran
   */
  // after: function (result, capabilities, specs) {
  // },
  /**
   * Gets executed right after terminating the webdriver session.
   * @param {Object} config wdio configuration object
   * @param {Array.<Object>} capabilities list of capabilities details
   * @param {Array.<String>} specs List of spec file paths that ran
   */
  // afterSession: function (config, capabilities, specs) {
  // },
  /**
   * Gets executed after all workers got shut down and the process is about to exit. An error
   * thrown in the onComplete hook will result in the test run failing.
   * @param {Object} exitCode 0 - success, 1 - fail
   * @param {Object} config wdio configuration object
   * @param {Array.<Object>} capabilities list of capabilities details
   * @param {<Object>} results object containing test results
   */
  // onComplete: function(exitCode, config, capabilities, results) {
  // },
  /**
  * Gets executed when a refresh happens.
  * @param {String} oldSessionId session ID of the old session
  * @param {String} newSessionId session ID of the new session
  */
  //onReload: function(oldSessionId, newSessionId) {
  //}
}
