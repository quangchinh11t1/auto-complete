var completionSpec = {
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> e321ca1... feat: update all scripts and  move to ts
    name: 'jest',
    description: 'A delightful JavaScript Testing Framework with a focus on simplicity',
    args: {},
    options: [
        {
            name: ['--bail', '-b'],
            description: 'Exit the test suite immediately upon n number of failing test suite. Defaults to 1',
            args: {
                name: 'n',
            },
        },
        {
            name: ['--cache'],
            description: 'Whether to use the cache',
        },
        {
            name: ['--no-cache'],
            description: 'Whether to use the cache',
        },
        {
            name: ['--changedFilesWithAncestor'],
            description: 'Runs tests related to the current changes and the changes made in the last commit',
        },
        {
            name: ['--changedSince'],
            description: 'Runs tests related to the changes since the provided branch or commit hash',
            args: {
                name: 'since',
            },
        },
        {
            name: ['--ci'],
            description: 'Instead of the regular behavior of storing a new snapshot automatically, will fail the test and require Jest to be run with --updateSnapshot',
        },
        {
            name: ['--clearCache'],
            description: 'Deletes the Jest cache directory and then exits without running tests',
            args: {
                name: 'cacheDirectory',
            },
        },
        {
            name: ['--collectCoverageFrom'],
            displayName: '--collectCoverageFrom=<glob>',
            insertValue: '--collectCoverageFrom=',
            description: 'A glob pattern relative to rootDir matching the files that coverage info needs to be collected from',
            args: {
                name: 'glob',
            },
        },
        {
            name: ['--colors'],
            description: 'Forces test results output highlighting even if stdout is not a TTY',
        },
        {
            name: ['--config', '-c'],
            displayName: '--config=<path>',
            insertValue: '--config=',
            description: 'The path to a Jest config file specifying how to find and execute tests',
            args: {
                name: 'path',
            },
        },
        {
            name: ['--coverage'],
            displayName: '--coverage=<boolean>',
            insertValue: '--coverage=',
            description: 'The path to a Jest config file specifying how to find and execute tests',
            args: {
                name: 'true|false',
                suggestions: [
                    {
                        name: 'true',
                    },
                    {
                        name: 'false',
<<<<<<< HEAD
=======
    name: "jest",
    description: "A delightful JavaScript Testing Framework with a focus on simplicity",
=======
    name: 'jest',
    description: 'A delightful JavaScript Testing Framework with a focus on simplicity',
>>>>>>> 09336dc... fix: Specs exports and script type
    args: {},
    options: [
        {
            name: ['--bail', '-b'],
            description: 'Exit the test suite immediately upon n number of failing test suite. Defaults to 1',
            args: {
                name: 'n',
            },
        },
        {
            name: ['--cache'],
            description: 'Whether to use the cache',
        },
        {
            name: ['--no-cache'],
            description: 'Whether to use the cache',
        },
        {
            name: ['--changedFilesWithAncestor'],
            description: 'Runs tests related to the current changes and the changes made in the last commit',
        },
        {
            name: ['--changedSince'],
            description: 'Runs tests related to the changes since the provided branch or commit hash',
            args: {
                name: 'since',
            },
        },
        {
            name: ['--ci'],
            description: 'Instead of the regular behavior of storing a new snapshot automatically, will fail the test and require Jest to be run with --updateSnapshot',
        },
        {
            name: ['--clearCache'],
            description: 'Deletes the Jest cache directory and then exits without running tests',
            args: {
                name: 'cacheDirectory',
            },
        },
        {
            name: ['--collectCoverageFrom'],
            displayName: '--collectCoverageFrom=<glob>',
            insertValue: '--collectCoverageFrom=',
            description: 'A glob pattern relative to rootDir matching the files that coverage info needs to be collected from',
            args: {
                name: 'glob',
            },
        },
        {
            name: ['--colors'],
            description: 'Forces test results output highlighting even if stdout is not a TTY',
        },
        {
            name: ['--config', '-c'],
            displayName: '--config=<path>',
            insertValue: '--config=',
            description: 'The path to a Jest config file specifying how to find and execute tests',
            args: {
                name: 'path',
            },
        },
        {
            name: ['--coverage'],
            displayName: '--coverage=<boolean>',
            insertValue: '--coverage=',
            description: 'The path to a Jest config file specifying how to find and execute tests',
            args: {
                name: 'true|false',
                suggestions: [
                    {
                        name: 'true',
                    },
                    {
<<<<<<< HEAD
                        name: "false",
>>>>>>> 4082cac... feat: Add removed specs
=======
                        name: 'false',
>>>>>>> 09336dc... fix: Specs exports and script type
=======
>>>>>>> e321ca1... feat: update all scripts and  move to ts
=======
=======
>>>>>>> 3879070... feat: re-add built specs and update gitignore
=======
>>>>>>> d0857f4... feat: update formatting
    name: "jest",
    description: "A delightful JavaScript Testing Framework with a focus on simplicity",
    args: {},
    options: [
        {
            name: ["--bail", "-b"],
            description: "Exit the test suite immediately upon n number of failing test suite. Defaults to 1",
            args: {
                name: "n",
            },
        },
        {
            name: ["--cache"],
            description: "Whether to use the cache",
        },
        {
            name: ["--no-cache"],
            description: "Whether to use the cache",
        },
        {
            name: ["--changedFilesWithAncestor"],
            description: "Runs tests related to the current changes and the changes made in the last commit",
        },
        {
            name: ["--changedSince"],
            description: "Runs tests related to the changes since the provided branch or commit hash",
            args: {
                name: "since",
            },
        },
        {
            name: ["--ci"],
            description: "Instead of the regular behavior of storing a new snapshot automatically, will fail the test and require Jest to be run with --updateSnapshot",
        },
        {
            name: ["--clearCache"],
            description: "Deletes the Jest cache directory and then exits without running tests",
            args: {
                name: "cacheDirectory",
            },
        },
        {
            name: ["--collectCoverageFrom"],
            displayName: "--collectCoverageFrom=<glob>",
            insertValue: "--collectCoverageFrom=",
            description: "A glob pattern relative to rootDir matching the files that coverage info needs to be collected from",
            args: {
                name: "glob",
            },
        },
        {
            name: ["--colors"],
            description: "Forces test results output highlighting even if stdout is not a TTY",
        },
        {
            name: ["--config", "-c"],
            displayName: "--config=<path>",
            insertValue: "--config=",
            description: "The path to a Jest config file specifying how to find and execute tests",
            args: {
                name: "path",
                template: "filepaths",
            },
        },
        {
            name: ["--coverage"],
            displayName: "--coverage=<boolean>",
            insertValue: "--coverage=",
            description: "Enable or disable coverage, disabled by default",
            args: {
                name: "true|false",
                suggestions: [
                    {
                        name: "true",
                    },
                    {
                        name: "false",
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> a09fa69... removed linting from all js specs in specs folder
=======
>>>>>>> 3879070... feat: re-add built specs and update gitignore
=======
>>>>>>> d0857f4... feat: update formatting
                    },
                ],
            },
        },
        {
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 09336dc... fix: Specs exports and script type
=======
>>>>>>> e321ca1... feat: update all scripts and  move to ts
            name: ['--coverageProvider'],
            displayName: '--coverageProvider=<provider>',
            insertValue: '--coverageProvider=',
            description: 'Indicates which provider should be used to instrument code for coverage',
<<<<<<< HEAD
<<<<<<< HEAD
            args: {
                name: 'babel|v8',
                suggestions: [{ name: 'babel' }, { name: 'v8' }],
            },
        },
        {
            name: ['--debug'],
            description: 'Print debugging info about your Jest config',
        },
        {
            name: ['--detectOpenHandles'],
            description: 'Attempt to collect and print open handles preventing Jest from exiting cleanly',
        },
        {
            name: ['--env'],
            displayName: '--env=<environment>',
            insertValue: '--env=',
            description: 'The test environment used for all tests',
            args: {
                name: 'jsdom|node|path/to/env.js',
                suggestions: [{ name: 'jsdom' }, { name: 'node' }],
            },
        },
        {
            name: ['--errorOnDeprecated'],
            description: 'Make calling deprecated APIs throw helpful error messages',
        },
        {
            name: ['--expand', '-e'],
            description: 'Use this flag to show full diffs and errors instead of a patch',
        },
        {
            name: ['--findRelatedTests'],
            displayName: '--findRelatedTests <path1> ... <pathN>',
            description: 'Find and run the tests that cover a space separated list of source files that were passed in as arguments',
            args: {
                name: '<path1> ... <pathN>',
            },
        },
        {
            name: ['--forceExit'],
            description: 'Force Jest to exit after all tests have completed running',
        },
        {
            name: ['--help'],
            description: 'Show the help information',
        },
        {
            name: ['--init'],
            description: 'Generate a basic configuration file',
        },
        {
            name: ['--injectGlobals'],
            description: "Insert Jest's globals (expect, test, describe, beforeEach etc.) into the global environment",
        },
        {
            name: ['--json'],
            description: 'Prints the test results in JSON',
        },
        {
            name: ['--outputFile'],
            displayName: '--outputFile=<filename>',
            insertValue: '--outputFile=',
            description: 'Write test results to a file when the --json option is also specified',
            args: {
                name: 'filename',
            },
        },
        {
            name: ['--lastCommit'],
            description: 'Run all tests affected by file changes in the last commit made',
        },
        {
            name: ['--listTests'],
            description: 'Lists all tests as JSON that Jest will run given the arguments, and exits',
        },
        {
            name: ['--logHeapUsage'],
            description: 'Logs the heap usage after every test',
        },
        {
            name: ['--maxConcurrency'],
            displayName: '--maxConcurrency=<num>',
            insertValue: '--maxConcurrency=',
            description: 'Prevents Jest from executing more than the specified amount of tests at the same time',
            args: {
                name: 'num',
            },
        },
        {
            name: ['--maxWorkers', '-w'],
            displayName: '--maxWorkers=<num>|<string>',
            insertValue: '--maxWorkers=',
            description: 'Specifies the maximum number of workers the worker-pool will spawn for running tests',
            args: {
                name: '<num>|<string>',
            },
        },
        {
            name: ['--noStackTrace'],
            description: 'Disables stack trace in test results output',
        },
        {
            name: ['--notify'],
            description: 'Activates notifications for test results',
        },
        {
            name: ['--onlyChanged', '-o'],
            description: 'Attempts to identify which tests to run based on which files have changed in the current repository',
        },
        {
            name: ['--passWithNoTests'],
            description: 'Allows the test suite to pass when no files are found',
        },
        {
            name: ['--projects'],
            displayName: '--projects <path1> ... <pathN>',
            description: 'Run tests from one or more projects, found in the specified paths; also takes path globs',
            args: {
                name: '<path1> ... <pathN>',
            },
        },
        {
            name: ['--reporters'],
            displayName: '--reporters=<reporter>',
            insertValue: '--reporters=',
            description: 'Run tests with specified reporters',
            args: {
                name: 'reporter',
            },
        },
        {
            name: ['--roots'],
            displayName: '--roots <path1> ... <pathN>',
            description: 'A list of paths to directories that Jest should use to search for files in',
            args: {
                name: '<path1> ... <pathN>',
            },
        },
        {
            name: ['--runInBand', '-i'],
            description: 'Run all tests serially in the current process, rather than creating a worker pool of child processes that run tests',
        },
        {
            name: ['--selectProjects'],
            displayName: '--selectProjects <project1> ... <projectN>',
            description: 'Run only the tests of the specified projects',
            args: {
                name: '<project1> ... <projectN>',
            },
        },
        {
            name: ['--runTestsByPath'],
            description: 'Run only the tests that were specified with their exact paths',
        },
        {
            name: ['--setupTestFrameworkScriptFile'],
            displayName: '--setupTestFrameworkScriptFile=<file>',
            insertValue: '--setupTestFrameworkScriptFile=',
            description: 'The path to a module that runs some code to configure or set up the testing framework before each test',
            args: {
                name: 'file',
            },
        },
        {
            name: ['--showConfig'],
            description: 'Print your Jest config and then exits',
        },
        {
            name: ['--silent'],
            description: 'Prevent tests from printing messages through the console',
        },
        {
            name: ['--testNamePattern', '-t'],
            displayName: '--testNamePattern=<regex>',
            insertValue: '--testNamePattern=',
            description: 'Run only tests with a name that matches the regex',
            args: {
                name: 'regex',
            },
        },
        {
            name: ['--testLocationInResults'],
            description: 'Adds a location field to test results',
        },
        {
            name: ['--testPathPattern'],
            displayName: '--testPathPattern=<regex>',
            insertValue: '--testPathPattern=',
            description: 'A regexp pattern string that is matched against all tests paths before executing the test',
            args: {
                name: 'regex',
            },
        },
        {
            name: ['--testPathIgnorePatterns'],
            displayName: '--testPathIgnorePatterns=[array]',
            insertValue: '--testPathIgnorePatterns=',
            description: 'An array of regexp pattern strings that are tested against all tests paths before executing the test',
            args: {
                name: '[array]',
            },
        },
        {
            name: ['--testRunner'],
            displayName: '--testRunner=<path>',
            insertValue: '--testRunner=',
            description: 'Lets you specify a custom test runner',
            args: {
                name: 'path',
            },
        },
        {
            name: ['--testSequencer'],
            displayName: '--testSequencer=<path>',
            insertValue: '--testSequencer=',
            description: 'Lets you specify a custom test sequencer',
            args: {
                name: 'path',
            },
        },
        {
            name: ['--testTimeout'],
            displayName: '--testTimeout=<num>',
            insertValue: '--testTimeout=',
            description: 'Default timeout of a test in milliseconds',
            args: {
                name: 'timeout in ms',
            },
        },
        {
            name: ['--updateSnapshot', '-u'],
            description: 'Use this flag to re-record every snapshot that fails during this test run',
        },
        {
            name: ['--useStderr'],
            description: 'Divert all output to stderr',
        },
        {
            name: ['--verbose'],
            description: 'Display individual test results with the test suite hierarchy',
        },
        {
            name: ['--version', '-v'],
            description: 'Print the version and exit',
        },
        {
            name: ['--watch'],
            description: 'Watch files for changes and rerun tests related to changed files',
        },
        {
            name: ['--watchAll'],
            description: 'Watch files for changes and rerun all tests when something changes',
        },
        {
            name: ['--watchman'],
            description: 'Whether to use watchman for file crawling',
        },
        {
            name: ['--no-watchman'],
            description: 'Whether to use watchman for file crawling',
=======
=======
>>>>>>> a09fa69... removed linting from all js specs in specs folder
=======
>>>>>>> 3879070... feat: re-add built specs and update gitignore
=======
>>>>>>> d0857f4... feat: update formatting
            name: ["--coverageProvider"],
            displayName: "--coverageProvider=<provider>",
            insertValue: "--coverageProvider=",
            description: "Indicates which provider should be used to instrument code for coverage",
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 09336dc... fix: Specs exports and script type
=======
>>>>>>> e321ca1... feat: update all scripts and  move to ts
            args: {
                name: 'babel|v8',
                suggestions: [{ name: 'babel' }, { name: 'v8' }],
            },
        },
        {
            name: ['--debug'],
            description: 'Print debugging info about your Jest config',
        },
        {
            name: ['--detectOpenHandles'],
            description: 'Attempt to collect and print open handles preventing Jest from exiting cleanly',
        },
        {
            name: ['--env'],
            displayName: '--env=<environment>',
            insertValue: '--env=',
            description: 'The test environment used for all tests',
            args: {
                name: 'jsdom|node|path/to/env.js',
                suggestions: [{ name: 'jsdom' }, { name: 'node' }],
            },
        },
        {
            name: ['--errorOnDeprecated'],
            description: 'Make calling deprecated APIs throw helpful error messages',
        },
        {
            name: ['--expand', '-e'],
            description: 'Use this flag to show full diffs and errors instead of a patch',
        },
        {
            name: ['--findRelatedTests'],
            displayName: '--findRelatedTests <path1> ... <pathN>',
            description: 'Find and run the tests that cover a space separated list of source files that were passed in as arguments',
            args: {
                name: '<path1> ... <pathN>',
            },
        },
        {
            name: ['--forceExit'],
            description: 'Force Jest to exit after all tests have completed running',
        },
        {
            name: ['--help'],
            description: 'Show the help information',
        },
        {
            name: ['--init'],
            description: 'Generate a basic configuration file',
        },
        {
            name: ['--injectGlobals'],
            description: "Insert Jest's globals (expect, test, describe, beforeEach etc.) into the global environment",
        },
        {
            name: ['--json'],
            description: 'Prints the test results in JSON',
        },
        {
            name: ['--outputFile'],
            displayName: '--outputFile=<filename>',
            insertValue: '--outputFile=',
            description: 'Write test results to a file when the --json option is also specified',
            args: {
                name: 'filename',
            },
        },
        {
            name: ['--lastCommit'],
            description: 'Run all tests affected by file changes in the last commit made',
        },
        {
            name: ['--listTests'],
            description: 'Lists all tests as JSON that Jest will run given the arguments, and exits',
        },
        {
            name: ['--logHeapUsage'],
            description: 'Logs the heap usage after every test',
        },
        {
            name: ['--maxConcurrency'],
            displayName: '--maxConcurrency=<num>',
            insertValue: '--maxConcurrency=',
            description: 'Prevents Jest from executing more than the specified amount of tests at the same time',
            args: {
                name: 'num',
            },
        },
        {
            name: ['--maxWorkers', '-w'],
            displayName: '--maxWorkers=<num>|<string>',
            insertValue: '--maxWorkers=',
            description: 'Specifies the maximum number of workers the worker-pool will spawn for running tests',
            args: {
                name: '<num>|<string>',
            },
        },
        {
            name: ['--noStackTrace'],
            description: 'Disables stack trace in test results output',
        },
        {
            name: ['--notify'],
            description: 'Activates notifications for test results',
        },
        {
            name: ['--onlyChanged', '-o'],
            description: 'Attempts to identify which tests to run based on which files have changed in the current repository',
        },
        {
            name: ['--passWithNoTests'],
            description: 'Allows the test suite to pass when no files are found',
        },
        {
            name: ['--projects'],
            displayName: '--projects <path1> ... <pathN>',
            description: 'Run tests from one or more projects, found in the specified paths; also takes path globs',
            args: {
                name: '<path1> ... <pathN>',
            },
        },
        {
            name: ['--reporters'],
            displayName: '--reporters=<reporter>',
            insertValue: '--reporters=',
            description: 'Run tests with specified reporters',
            args: {
                name: 'reporter',
            },
        },
        {
            name: ['--roots'],
            displayName: '--roots <path1> ... <pathN>',
            description: 'A list of paths to directories that Jest should use to search for files in',
            args: {
                name: '<path1> ... <pathN>',
            },
        },
        {
            name: ['--runInBand', '-i'],
            description: 'Run all tests serially in the current process, rather than creating a worker pool of child processes that run tests',
        },
        {
            name: ['--selectProjects'],
            displayName: '--selectProjects <project1> ... <projectN>',
            description: 'Run only the tests of the specified projects',
            args: {
                name: '<project1> ... <projectN>',
            },
        },
        {
            name: ['--runTestsByPath'],
            description: 'Run only the tests that were specified with their exact paths',
        },
        {
            name: ['--setupTestFrameworkScriptFile'],
            displayName: '--setupTestFrameworkScriptFile=<file>',
            insertValue: '--setupTestFrameworkScriptFile=',
            description: 'The path to a module that runs some code to configure or set up the testing framework before each test',
            args: {
                name: 'file',
            },
        },
        {
            name: ['--showConfig'],
            description: 'Print your Jest config and then exits',
        },
        {
            name: ['--silent'],
            description: 'Prevent tests from printing messages through the console',
        },
        {
            name: ['--testNamePattern', '-t'],
            displayName: '--testNamePattern=<regex>',
            insertValue: '--testNamePattern=',
            description: 'Run only tests with a name that matches the regex',
            args: {
                name: 'regex',
            },
        },
        {
            name: ['--testLocationInResults'],
            description: 'Adds a location field to test results',
        },
        {
            name: ['--testPathPattern'],
            displayName: '--testPathPattern=<regex>',
            insertValue: '--testPathPattern=',
            description: 'A regexp pattern string that is matched against all tests paths before executing the test',
            args: {
                name: 'regex',
            },
        },
        {
            name: ['--testPathIgnorePatterns'],
            displayName: '--testPathIgnorePatterns=[array]',
            insertValue: '--testPathIgnorePatterns=',
            description: 'An array of regexp pattern strings that are tested against all tests paths before executing the test',
            args: {
                name: '[array]',
            },
        },
        {
            name: ['--testRunner'],
            displayName: '--testRunner=<path>',
            insertValue: '--testRunner=',
            description: 'Lets you specify a custom test runner',
            args: {
                name: 'path',
            },
        },
        {
            name: ['--testSequencer'],
            displayName: '--testSequencer=<path>',
            insertValue: '--testSequencer=',
            description: 'Lets you specify a custom test sequencer',
            args: {
                name: 'path',
            },
        },
        {
            name: ['--testTimeout'],
            displayName: '--testTimeout=<num>',
            insertValue: '--testTimeout=',
            description: 'Default timeout of a test in milliseconds',
            args: {
                name: 'timeout in ms',
            },
        },
        {
            name: ['--updateSnapshot', '-u'],
            description: 'Use this flag to re-record every snapshot that fails during this test run',
        },
        {
            name: ['--useStderr'],
            description: 'Divert all output to stderr',
        },
        {
            name: ['--verbose'],
            description: 'Display individual test results with the test suite hierarchy',
        },
        {
            name: ['--version', '-v'],
            description: 'Print the version and exit',
        },
        {
            name: ['--watch'],
            description: 'Watch files for changes and rerun tests related to changed files',
        },
        {
            name: ['--watchAll'],
            description: 'Watch files for changes and rerun all tests when something changes',
        },
        {
            name: ['--watchman'],
            description: 'Whether to use watchman for file crawling',
        },
        {
<<<<<<< HEAD
<<<<<<< HEAD
            name: ["--no-watchman"],
            description: "Whether to use watchman for file crawling",
>>>>>>> 4082cac... feat: Add removed specs
=======
            name: ['--no-watchman'],
            description: 'Whether to use watchman for file crawling',
>>>>>>> 09336dc... fix: Specs exports and script type
=======
            name: ['--no-watchman'],
            description: 'Whether to use watchman for file crawling',
>>>>>>> e321ca1... feat: update all scripts and  move to ts
        },
    ],
=======
=======
>>>>>>> e9dbf55... feat: update formatting
  name: "jest",
  description:
    "A delightful JavaScript Testing Framework with a focus on simplicity",
  args: {},
  options: [
    {
      name: ["--bail", "-b"],
      description:
        "Exit the test suite immediately upon n number of failing test suite. Defaults to 1",
      args: {
        name: "n",
      },
    },
    {
      name: ["--cache"],
      description: "Whether to use the cache",
    },
    {
      name: ["--no-cache"],
      description: "Whether to use the cache",
    },
    {
      name: ["--changedFilesWithAncestor"],
      description:
        "Runs tests related to the current changes and the changes made in the last commit",
    },
    {
      name: ["--changedSince"],
      description:
        "Runs tests related to the changes since the provided branch or commit hash",
      args: {
        name: "since",
      },
    },
    {
      name: ["--ci"],
      description:
        "Instead of the regular behavior of storing a new snapshot automatically, will fail the test and require Jest to be run with --updateSnapshot",
    },
    {
      name: ["--clearCache"],
      description:
        "Deletes the Jest cache directory and then exits without running tests",
      args: {
        name: "cacheDirectory",
      },
    },
    {
      name: ["--collectCoverageFrom"],
      displayName: "--collectCoverageFrom=<glob>",
      insertValue: "--collectCoverageFrom=",
      description:
        "A glob pattern relative to rootDir matching the files that coverage info needs to be collected from",
      args: {
        name: "glob",
      },
    },
    {
      name: ["--colors"],
      description:
        "Forces test results output highlighting even if stdout is not a TTY",
    },
    {
      name: ["--config", "-c"],
      displayName: "--config=<path>",
      insertValue: "--config=",
      description:
        "The path to a Jest config file specifying how to find and execute tests",
      args: {
        name: "path",
<<<<<<< HEAD
=======
        template: "filepaths",
>>>>>>> e9dbf55... feat: update formatting
      },
    },
    {
      name: ["--coverage"],
      displayName: "--coverage=<boolean>",
      insertValue: "--coverage=",
<<<<<<< HEAD
      description:
        "The path to a Jest config file specifying how to find and execute tests",
=======
      description: "Enable or disable coverage, disabled by default",
>>>>>>> e9dbf55... feat: update formatting
      args: {
        name: "true|false",
        suggestions: [
          {
            name: "true",
          },
          {
            name: "false",
          },
        ],
      },
    },
    {
      name: ["--coverageProvider"],
      displayName: "--coverageProvider=<provider>",
      insertValue: "--coverageProvider=",
      description:
        "Indicates which provider should be used to instrument code for coverage",
      args: {
        name: "babel|v8",
        suggestions: [{ name: "babel" }, { name: "v8" }],
      },
    },
    {
      name: ["--debug"],
      description: "Print debugging info about your Jest config",
    },
    {
      name: ["--detectOpenHandles"],
      description:
        "Attempt to collect and print open handles preventing Jest from exiting cleanly",
    },
    {
      name: ["--env"],
      displayName: "--env=<environment>",
      insertValue: "--env=",
      description: "The test environment used for all tests",
      args: {
        name: "jsdom|node|path/to/env.js",
<<<<<<< HEAD
=======
        template: "filepaths",
>>>>>>> e9dbf55... feat: update formatting
        suggestions: [{ name: "jsdom" }, { name: "node" }],
      },
    },
    {
      name: ["--errorOnDeprecated"],
      description: "Make calling deprecated APIs throw helpful error messages",
    },
    {
      name: ["--expand", "-e"],
      description:
        "Use this flag to show full diffs and errors instead of a patch",
    },
    {
      name: ["--findRelatedTests"],
      displayName: "--findRelatedTests <path1> ... <pathN>",
      description:
        "Find and run the tests that cover a space separated list of source files that were passed in as arguments",
      args: {
        name: "<path1> ... <pathN>",
      },
    },
    {
      name: ["--forceExit"],
      description: "Force Jest to exit after all tests have completed running",
    },
    {
      name: ["--help"],
      description: "Show the help information",
    },
    {
      name: ["--init"],
      description: "Generate a basic configuration file",
    },
    {
      name: ["--injectGlobals"],
      description:
        "Insert Jest's globals (expect, test, describe, beforeEach etc.) into the global environment",
    },
    {
      name: ["--json"],
      description: "Prints the test results in JSON",
    },
    {
      name: ["--outputFile"],
      displayName: "--outputFile=<filename>",
      insertValue: "--outputFile=",
      description:
        "Write test results to a file when the --json option is also specified",
      args: {
        name: "filename",
      },
    },
    {
      name: ["--lastCommit"],
      description:
        "Run all tests affected by file changes in the last commit made",
    },
    {
      name: ["--listTests"],
      description:
        "Lists all tests as JSON that Jest will run given the arguments, and exits",
    },
    {
      name: ["--logHeapUsage"],
      description: "Logs the heap usage after every test",
    },
    {
      name: ["--maxConcurrency"],
      displayName: "--maxConcurrency=<num>",
      insertValue: "--maxConcurrency=",
      description:
        "Prevents Jest from executing more than the specified amount of tests at the same time",
      args: {
        name: "num",
      },
    },
    {
      name: ["--maxWorkers", "-w"],
      displayName: "--maxWorkers=<num>|<string>",
      insertValue: "--maxWorkers=",
      description:
        "Specifies the maximum number of workers the worker-pool will spawn for running tests",
      args: {
        name: "<num>|<string>",
      },
    },
    {
      name: ["--noStackTrace"],
      description: "Disables stack trace in test results output",
    },
    {
      name: ["--notify"],
      description: "Activates notifications for test results",
    },
    {
      name: ["--onlyChanged", "-o"],
      description:
        "Attempts to identify which tests to run based on which files have changed in the current repository",
    },
    {
      name: ["--passWithNoTests"],
      description: "Allows the test suite to pass when no files are found",
    },
    {
      name: ["--projects"],
      displayName: "--projects <path1> ... <pathN>",
      description:
        "Run tests from one or more projects, found in the specified paths; also takes path globs",
      args: {
        name: "<path1> ... <pathN>",
<<<<<<< HEAD
=======
        variadic: true,
        template: "filepaths",
>>>>>>> e9dbf55... feat: update formatting
      },
    },
    {
      name: ["--reporters"],
      displayName: "--reporters=<reporter>",
      insertValue: "--reporters=",
      description: "Run tests with specified reporters",
      args: {
        name: "reporter",
      },
    },
    {
      name: ["--roots"],
      displayName: "--roots <path1> ... <pathN>",
      description:
        "A list of paths to directories that Jest should use to search for files in",
      args: {
        name: "<path1> ... <pathN>",
<<<<<<< HEAD
=======
        variadic: true,
        template: "folders",
>>>>>>> e9dbf55... feat: update formatting
      },
    },
    {
      name: ["--runInBand", "-i"],
      description:
        "Run all tests serially in the current process, rather than creating a worker pool of child processes that run tests",
    },
    {
      name: ["--selectProjects"],
      displayName: "--selectProjects <project1> ... <projectN>",
      description: "Run only the tests of the specified projects",
      args: {
        name: "<project1> ... <projectN>",
      },
    },
    {
      name: ["--runTestsByPath"],
      description:
        "Run only the tests that were specified with their exact paths",
    },
    {
      name: ["--setupTestFrameworkScriptFile"],
      displayName: "--setupTestFrameworkScriptFile=<file>",
      insertValue: "--setupTestFrameworkScriptFile=",
      description:
        "The path to a module that runs some code to configure or set up the testing framework before each test",
      args: {
        name: "file",
<<<<<<< HEAD
=======
        template: "filepaths",
>>>>>>> e9dbf55... feat: update formatting
      },
    },
    {
      name: ["--showConfig"],
      description: "Print your Jest config and then exits",
    },
    {
      name: ["--silent"],
      description: "Prevent tests from printing messages through the console",
    },
    {
      name: ["--testNamePattern", "-t"],
      displayName: "--testNamePattern=<regex>",
      insertValue: "--testNamePattern=",
      description: "Run only tests with a name that matches the regex",
      args: {
        name: "regex",
      },
    },
    {
      name: ["--testLocationInResults"],
      description: "Adds a location field to test results",
    },
    {
      name: ["--testPathPattern"],
      displayName: "--testPathPattern=<regex>",
      insertValue: "--testPathPattern=",
      description:
        "A regexp pattern string that is matched against all tests paths before executing the test",
      args: {
        name: "regex",
      },
    },
    {
      name: ["--testPathIgnorePatterns"],
      displayName: "--testPathIgnorePatterns=[array]",
      insertValue: "--testPathIgnorePatterns=",
      description:
        "An array of regexp pattern strings that are tested against all tests paths before executing the test",
      args: {
        name: "[array]",
      },
    },
    {
      name: ["--testRunner"],
      displayName: "--testRunner=<path>",
      insertValue: "--testRunner=",
      description: "Lets you specify a custom test runner",
      args: {
        name: "path",
<<<<<<< HEAD
=======
        template: "filepaths",
>>>>>>> e9dbf55... feat: update formatting
      },
    },
    {
      name: ["--testSequencer"],
      displayName: "--testSequencer=<path>",
      insertValue: "--testSequencer=",
      description: "Lets you specify a custom test sequencer",
      args: {
        name: "path",
<<<<<<< HEAD
=======
        template: "filepaths",
>>>>>>> e9dbf55... feat: update formatting
      },
    },
    {
      name: ["--testTimeout"],
      displayName: "--testTimeout=<num>",
      insertValue: "--testTimeout=",
      description: "Default timeout of a test in milliseconds",
      args: {
        name: "timeout in ms",
      },
    },
    {
      name: ["--updateSnapshot", "-u"],
      description:
        "Use this flag to re-record every snapshot that fails during this test run",
    },
    {
      name: ["--useStderr"],
      description: "Divert all output to stderr",
    },
    {
      name: ["--verbose"],
      description:
        "Display individual test results with the test suite hierarchy",
    },
    {
      name: ["--version", "-v"],
      description: "Print the version and exit",
    },
    {
      name: ["--watch"],
      description:
        "Watch files for changes and rerun tests related to changed files",
    },
    {
      name: ["--watchAll"],
      description:
        "Watch files for changes and rerun all tests when something changes",
    },
    {
      name: ["--watchman"],
      description: "Whether to use watchman for file crawling",
    },
    {
      name: ["--no-watchman"],
      description: "Whether to use watchman for file crawling",
    },
  ],
<<<<<<< HEAD
>>>>>>> 02ea794... added some more logic to eslint and changed the glob so we only lint files in the dev/ specs/ and scripts/ folders
=======
=======
>>>>>>> 3879070... feat: re-add built specs and update gitignore
=======
>>>>>>> d0857f4... feat: update formatting
            args: {
                name: "babel|v8",
                suggestions: [{ name: "babel" }, { name: "v8" }],
            },
        },
        {
            name: ["--debug"],
            description: "Print debugging info about your Jest config",
        },
        {
            name: ["--detectOpenHandles"],
            description: "Attempt to collect and print open handles preventing Jest from exiting cleanly",
        },
        {
            name: ["--env"],
            displayName: "--env=<environment>",
            insertValue: "--env=",
            description: "The test environment used for all tests",
            args: {
                name: "jsdom|node|path/to/env.js",
                template: "filepaths",
                suggestions: [{ name: "jsdom" }, { name: "node" }],
            },
        },
        {
            name: ["--errorOnDeprecated"],
            description: "Make calling deprecated APIs throw helpful error messages",
        },
        {
            name: ["--expand", "-e"],
            description: "Use this flag to show full diffs and errors instead of a patch",
        },
        {
            name: ["--findRelatedTests"],
            displayName: "--findRelatedTests <path1> ... <pathN>",
            description: "Find and run the tests that cover a space separated list of source files that were passed in as arguments",
            args: {
                name: "<path1> ... <pathN>",
            },
        },
        {
            name: ["--forceExit"],
            description: "Force Jest to exit after all tests have completed running",
        },
        {
            name: ["--help"],
            description: "Show the help information",
        },
        {
            name: ["--init"],
            description: "Generate a basic configuration file",
        },
        {
            name: ["--injectGlobals"],
            description: "Insert Jest's globals (expect, test, describe, beforeEach etc.) into the global environment",
        },
        {
            name: ["--json"],
            description: "Prints the test results in JSON",
        },
        {
            name: ["--outputFile"],
            displayName: "--outputFile=<filename>",
            insertValue: "--outputFile=",
            description: "Write test results to a file when the --json option is also specified",
            args: {
                name: "filename",
            },
        },
        {
            name: ["--lastCommit"],
            description: "Run all tests affected by file changes in the last commit made",
        },
        {
            name: ["--listTests"],
            description: "Lists all tests as JSON that Jest will run given the arguments, and exits",
        },
        {
            name: ["--logHeapUsage"],
            description: "Logs the heap usage after every test",
        },
        {
            name: ["--maxConcurrency"],
            displayName: "--maxConcurrency=<num>",
            insertValue: "--maxConcurrency=",
            description: "Prevents Jest from executing more than the specified amount of tests at the same time",
            args: {
                name: "num",
            },
        },
        {
            name: ["--maxWorkers", "-w"],
            displayName: "--maxWorkers=<num>|<string>",
            insertValue: "--maxWorkers=",
            description: "Specifies the maximum number of workers the worker-pool will spawn for running tests",
            args: {
                name: "<num>|<string>",
            },
        },
        {
            name: ["--noStackTrace"],
            description: "Disables stack trace in test results output",
        },
        {
            name: ["--notify"],
            description: "Activates notifications for test results",
        },
        {
            name: ["--onlyChanged", "-o"],
            description: "Attempts to identify which tests to run based on which files have changed in the current repository",
        },
        {
            name: ["--passWithNoTests"],
            description: "Allows the test suite to pass when no files are found",
        },
        {
            name: ["--projects"],
            displayName: "--projects <path1> ... <pathN>",
            description: "Run tests from one or more projects, found in the specified paths; also takes path globs",
            args: {
                name: "<path1> ... <pathN>",
                variadic: true,
                template: "filepaths",
            },
        },
        {
            name: ["--reporters"],
            displayName: "--reporters=<reporter>",
            insertValue: "--reporters=",
            description: "Run tests with specified reporters",
            args: {
                name: "reporter",
            },
        },
        {
            name: ["--roots"],
            displayName: "--roots <path1> ... <pathN>",
            description: "A list of paths to directories that Jest should use to search for files in",
            args: {
                name: "<path1> ... <pathN>",
                variadic: true,
                template: "folders",
            },
        },
        {
            name: ["--runInBand", "-i"],
            description: "Run all tests serially in the current process, rather than creating a worker pool of child processes that run tests",
        },
        {
            name: ["--selectProjects"],
            displayName: "--selectProjects <project1> ... <projectN>",
            description: "Run only the tests of the specified projects",
            args: {
                name: "<project1> ... <projectN>",
            },
        },
        {
            name: ["--runTestsByPath"],
            description: "Run only the tests that were specified with their exact paths",
        },
        {
            name: ["--setupTestFrameworkScriptFile"],
            displayName: "--setupTestFrameworkScriptFile=<file>",
            insertValue: "--setupTestFrameworkScriptFile=",
            description: "The path to a module that runs some code to configure or set up the testing framework before each test",
            args: {
                name: "file",
                template: "filepaths",
            },
        },
        {
            name: ["--showConfig"],
            description: "Print your Jest config and then exits",
        },
        {
            name: ["--silent"],
            description: "Prevent tests from printing messages through the console",
        },
        {
            name: ["--testNamePattern", "-t"],
            displayName: "--testNamePattern=<regex>",
            insertValue: "--testNamePattern=",
            description: "Run only tests with a name that matches the regex",
            args: {
                name: "regex",
            },
        },
        {
            name: ["--testLocationInResults"],
            description: "Adds a location field to test results",
        },
        {
            name: ["--testPathPattern"],
            displayName: "--testPathPattern=<regex>",
            insertValue: "--testPathPattern=",
            description: "A regexp pattern string that is matched against all tests paths before executing the test",
            args: {
                name: "regex",
            },
        },
        {
            name: ["--testPathIgnorePatterns"],
            displayName: "--testPathIgnorePatterns=[array]",
            insertValue: "--testPathIgnorePatterns=",
            description: "An array of regexp pattern strings that are tested against all tests paths before executing the test",
            args: {
                name: "[array]",
            },
        },
        {
            name: ["--testRunner"],
            displayName: "--testRunner=<path>",
            insertValue: "--testRunner=",
            description: "Lets you specify a custom test runner",
            args: {
                name: "path",
                template: "filepaths",
            },
        },
        {
            name: ["--testSequencer"],
            displayName: "--testSequencer=<path>",
            insertValue: "--testSequencer=",
            description: "Lets you specify a custom test sequencer",
            args: {
                name: "path",
                template: "filepaths",
            },
        },
        {
            name: ["--testTimeout"],
            displayName: "--testTimeout=<num>",
            insertValue: "--testTimeout=",
            description: "Default timeout of a test in milliseconds",
            args: {
                name: "timeout in ms",
            },
        },
        {
            name: ["--updateSnapshot", "-u"],
            description: "Use this flag to re-record every snapshot that fails during this test run",
        },
        {
            name: ["--useStderr"],
            description: "Divert all output to stderr",
        },
        {
            name: ["--verbose"],
            description: "Display individual test results with the test suite hierarchy",
        },
        {
            name: ["--version", "-v"],
            description: "Print the version and exit",
        },
        {
            name: ["--watch"],
            description: "Watch files for changes and rerun tests related to changed files",
        },
        {
            name: ["--watchAll"],
            description: "Watch files for changes and rerun all tests when something changes",
        },
        {
            name: ["--watchman"],
            description: "Whether to use watchman for file crawling",
        },
        {
            name: ["--no-watchman"],
            description: "Whether to use watchman for file crawling",
        },
    ],
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> a09fa69... removed linting from all js specs in specs folder
=======
>>>>>>> 3879070... feat: re-add built specs and update gitignore
=======
>>>>>>> d0857f4... feat: update formatting
=======
>>>>>>> e9dbf55... feat: update formatting
};
