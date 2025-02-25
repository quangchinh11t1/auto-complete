<<<<<<< HEAD
const servicesGenerator: Fig.Generator = {
<<<<<<< HEAD
  script: "brew services list | sed -e 's/ .*//' | tail -n +2",
  postProcess: (output) => {
    const lines = output.split("\n");
    return lines.reduce<Fig.Suggestion[]>((acc, currentLine) => {
      if (lines.includes("unbound")) return acc;
      return acc.concat({
        name: currentLine,
        type: "option",
      });
    }, []);
  },
};

export const brewCompletionSpec: Fig.Spec = {
<<<<<<< HEAD
    name: "brew",
    description: "Package manager for macOS",
    subcommands: [
<<<<<<< HEAD
        { name: "list",        description: "List all installed formulae" },
        { name: "leaves",      description: "List installed formulae that are not dependencies of another installed formula" },
        { name: "doctor",      description: "Check your system for potential problems" },
        { name: "info",        description: "Display brief statistics for your Homebrew installation" },
        { name: "update",      description: "Fetch the newest version of Homebrew and all formulae" },
        { name: "upgrade",     description: "Upgrade outdated casks and outdated" },
        { name: "search",      description: "Perform a substring search of cask tokens and formula names" },
=======
        { name: "list", description: "List all installed formulae" },
        { name: "leaves", description: "List installed formulae that are not dependencies of another installed formula" },
        { name: "doctor", description: "Check your system for potential problems" },
        { name: "info", description: "Display brief statistics for your Homebrew installation" },
        { name: "update", description: "Fetch the newest version of Homebrew and all formulae" },
        { name: "upgrade", description: "Upgrade outdated casks and outdated" },
        { name: "search", description: "Perform a substring search of cask tokens and formula names" },
>>>>>>> ac4358a... adding v2 of spec format for autocomplete
        {
            name: "install",
            description: "Install <formula>",
            insertValue: "install ",
<<<<<<< HEAD
            arg: {
=======
            args: {
<<<<<<< HEAD
>>>>>>> ac4358a... adding v2 of spec format for autocomplete
=======
                variadic: true,
<<<<<<< HEAD
>>>>>>> 9304f5c... Add generator for brew formula
                name: "<formula>",
                // insertValue: "",
                description: "Formula to install",
=======
                name: "formula",
                description: "Formula or cask to install",
>>>>>>> cfb0de4... brew: add casks to generator
                generators: {
                    script: "ls -1 /usr/local/Homebrew/Library/Taps/homebrew/homebrew-core/Formula /usr/local/Homebrew/Library/Taps/homebrew/homebrew-cask/Casks",
                    postProcess: function (out) {

                        return out.split('\n').map(formula => {
                            return {
                                name: formula.replace('.rb', ''),
                                description: "formula",
                                icon: "🍺",
                                priority: (formula[0] >= '0' && formula[0] <= '9') || formula[0] == '/' ? 0 : 100
                            }
                        })
                    }
                }
            }
=======
  name: "brew",
  description: "Package manager for macOS",
  subcommands: [
    { name: "list", description: "List all installed formulae" },
    {
      name: "leaves",
      description:
        "List installed formulae that are not dependencies of another installed formula",
    },
    { name: "doctor", description: "Check your system for potential problems" },
    {
      name: "info",
      description: "Display brief statistics for your Homebrew installation",
    },
    {
      name: "update",
      description: "Fetch the newest version of Homebrew and all formulae",
    },
    { name: "upgrade", description: "Upgrade outdated casks and outdated" },
    {
      name: "search",
      description:
        "Perform a substring search of cask tokens and formula names",
    },
    {
      name: "install",
      description: "Install <formula>",
      insertValue: "install ",
      args: {
        isVariadic: true,
        name: "formula",
        description: "Formula or cask to install",
        generators: {
          script:
            "ls -1 /usr/local/Homebrew/Library/Taps/homebrew/homebrew-core/Formula /usr/local/Homebrew/Library/Taps/homebrew/homebrew-cask/Casks",
          postProcess: function (out) {
            return out.split("\n").map((formula) => {
              return {
                name: formula.replace(".rb", ""),
                description: "formula",
                icon: "🍺",
                priority:
                  (formula[0] >= "0" && formula[0] <= "9") || formula[0] == "/"
                    ? 0
                    : 100,
              };
            });
          },
>>>>>>> 6ba073d... fix: cleanup brew spec
        },
      },
=======
    script: "brew services list | sed -e 's/ .*//' | tail -n +2",
    postProcess: (output) => {
        const lines = output.split('\n');
        return lines.reduce<Fig.Suggestion[]>((acc, currentLine) => {
            if (lines.includes('unbound')) return acc;
            return acc.concat({
                name: currentLine,
                type: 'option',
            });
        }, []);
>>>>>>> 6bc5008... feat: lint & prettier all files
    },
};

<<<<<<< HEAD
    {
      name: "uninstall",
      description: "Uninstall <formula>",
      args: {
        isVariadic: true,
        name: "formula",
        generators: {
          script: "brew list -1 --formulae",
          postProcess: function (out) {
            return out.split("\n").map((formula) => {
              return {
                name: formula,
                icon: "🍺",
                description: "Installed formula",
              };
            });
          },
        },
      },
    },
    {
      name: "cask",
      insertValue: "cask ",
      description:
        "Homebrew Cask provides a friendly CLI workflow for the administration of macOS applications distributed as binaries.",
      subcommands: [
        {
          name: "install",
          insertValue: "install ",
          description: "Installs the given cask",
          args: {
            name: "cask",
            description: "Cask to install",
          },
        },
        {
<<<<<<< HEAD
            name: "uninstall",
            description: "Uninstall <formula>",
            args: {
                variadic: true,
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
                shellSuggestions: {
                    cmd: "brew list -1 --formulae",
                    postProcess: function (out) {
                        return out.split('\n').map(formula => {
                            return { name: formula, icon: "🍺", description: "Installed formula"}
=======
                generator: {
=======
=======
                name: "formula",
>>>>>>> cfb0de4... brew: add casks to generator
                generators: {
>>>>>>> 602e847... replaced arg with args and generator with generators
                    script: "brew list -1 --formulae",
                    postProcess: function (out) {
                        return out.split('\n').map(formula => {
                            return { name: formula, icon: "🍺", description: "Installed formula" }
>>>>>>> ac4358a... adding v2 of spec format for autocomplete
                        })
                    }
                },
=======
          name: "uninstall",
          insertValue: "uninstall ",
          description: "Uninstalls the given cask",
          args: {
            isVariadic: true,
            generators: {
              script: "brew list -1 --cask",
              postProcess: function (out) {
                return out.split("\n").map((formula) => {
                  return {
                    name: formula,
                    icon: "🍺",
                    description: "Installed formula",
                  };
                });
              },
>>>>>>> 6ba073d... fix: cleanup brew spec
            },
          },
        },
      ],
    },
    {
      name: "services",
      description:
        "Manage background services with macOS' launchctl(1) daemon manager.",
      options: [
        {
<<<<<<< HEAD
            name: "cask",
            insertValue: "cask ",
<<<<<<< HEAD
            description: "Homebrew  Cask provides a friendly CLI workflow for the administration of macOS applications distributed as binaries.",
<<<<<<< HEAD
            subcommands:[
                {
                    name: "install <cask>",
=======
            subcommands: [
                {
                    name: "install",
>>>>>>> ac4358a... adding v2 of spec format for autocomplete
                    insertValue: "install ",
=======
            description: "Homebrew Cask provides a friendly CLI workflow for the administration of macOS applications distributed as binaries.",
            subcommands: [
                {
                    name: "install",
<<<<<<< HEAD:specs/brew.ts
<<<<<<< HEAD:specs/brew.ts
                    insertValue: "install",
>>>>>>> c3b1241... Fix completion specs for linter
=======
                    insertValue: "install ",
>>>>>>> 572d212... Update brew.js:specs/brew.js
=======
                    insertValue: "install ",
>>>>>>> fe15c1a... Update brew.js:specs/brew.js
                    description: "Installs the given cask",
                    args: {
                        name: "cask",
                        description: "Cask to install"
                    }
                },
                {
<<<<<<< HEAD
                    name: "uninstall <cask>",
                    insertValue: "uninstall ",
                    description: "Uninstalls the given cask",
                    args: {
                        shellSuggestions: {
                            cmd: "brew list -1 --cask",
                            splitOn: "\n",
                            postProcess: function (out) {
                                return out.split('\n').map(formula => {
                                    return { name: formula, icon: "🍺", description: "Installed cask" }
                                })
                            }
                        }
                    }
=======
                    name: "uninstall",
                    insertValue: "uninstall ",
                    description: "Uninstalls the given cask",
                    args: {
                        variadic: true,
<<<<<<< HEAD
                        generator: {
                            script: "brew list -1 --formulae",
=======
                        generators: {
                            script: "brew list -1 --cask",
>>>>>>> 602e847... replaced arg with args and generator with generators
                            postProcess: function (out) {
                                return out.split('\n').map(formula => {
                                    return { name: formula, icon: "🍺", description: "Installed formula" }
                                })
                            }
                        },
                    },
                    // args: {
                    //     generator: {
                    //         script: "brew list -1 --cask",
                    //         // splitOn: "\n",
                    //         postProcess: function (out) {
                    //             return out.split('\n').map(formula => {
                    //                 return { name: formula, icon: "🍺", description: "Installed cask" }
                    //             })
                    //         }
                    //     }
                    // }
>>>>>>> ac4358a... adding v2 of spec format for autocomplete
                }
            ]
        },
        {
            name: "services",
            description: "Manage background services with macOS\' launchctl(1) daemon manager.",
            options: [
                { name: ["-d", "--debug"], description: "Display any debugging information." },
                { name: ["-q", "--quiet"], description: "Suppress any warnings." },
                { name: ["-v", "--verbose"], description: "Make some output more verbose." },
                { name: ["-h", "--help"], description: "Get help with services command" },
            ],
            subcommands: [
                {
                    name: "cleanup",
                    insertValue: "cleanup",
                    description: "Remove all unused services."
                },
                {
                    name: "list",
                    insertValue: "list",
                    description: "List all services."
                },
                {
                    name: "run",
                    insertValue: "run ",
                    description: "Run the service formula without registering to launch at login (or boot).",
                    options: [
                        {
                            name: "--all",
                            insertValue: "--all",
                            description: "Start all services"
                        }
                    ],
                    args: {
                        variadic: true,
                        generators: brewGenerators.servicesGenerator
                    }
                },
                {
                    name: "start",
                    insertValue: "start ",
                    description: "Start the service formula immediately and register it to launch at login",
                    options: [
                        {
                            name: "--all",
                            insertValue: "--all",
                            description: "Start all services"
                        }
                    ],
                    args: {
                        variadic: true,
                        generators: brewGenerators.servicesGenerator
                    }
                },
                {
                    name: "stop",
                    insertValue: "stop ",
                    description: "Stop the service formula immediately and unregister it from launching at",
                    options: [
                        {
                            name: "--all",
                            insertValue: "--all",
                            description: "Start all services"
                        }
                    ],
                    args: {
                        variadic: true,
                        generators: brewGenerators.servicesGenerator
                    }
                },
                {
                    name: "restart",
                    insertValue: "restart ",
                    description: "Stop (if necessary) and start the service formula immediately and register it to launch at login (or boot).",
                    options: [
                        {
                            name: "--all",
                            insertValue: "--all",
                            description: "Start all services"
                        }
                    ],
                    args: {
                        variadic: true,
                        generators: brewGenerators.servicesGenerator
                    }
                }
            ]
        }
    ],
    options: [
<<<<<<< HEAD
    {
      name: ["--version"],
      description: "The current Homebrew version",
    }
  ]
=======
        {
            name: ["--version"],
            description: "The current Homebrew version",
        }
    ]
>>>>>>> ac4358a... adding v2 of spec format for autocomplete
}
=======
          name: ["-d", "--debug"],
          description: "Display any debugging information.",
=======
export const brewCompletionSpec: Fig.Spec = {
=======
const generators: Record<string, Fig.Generator> = {
  servicesgenerators: {
    script: "brew services list | sed -e 's/ .*//' | tail -n +2",
    postProcess: function (out) {
      return out
        .split("\n")
        .filter((line) => !line.includes("unbound"))
        .map((line) => ({
          name: line,
          type: "option",
        }));
    },
  },
};

export const completionSpec: Fig.Spec = {
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> e321ca1... feat: update all scripts and  move to ts
    name: 'brew',
    description: 'Package manager for macOS',
    subcommands: [
        { name: 'list', description: 'List all installed formulae' },
        {
            name: 'leaves',
            description: 'List installed formulae that are not dependencies of another installed formula',
<<<<<<< HEAD
>>>>>>> 6bc5008... feat: lint & prettier all files
        },
        { name: 'doctor', description: 'Check your system for potential problems' },
        {
            name: 'info',
            description: 'Display brief statistics for your Homebrew installation',
        },
        {
            name: 'update',
            description: 'Fetch the newest version of Homebrew and all formulae',
        },
        { name: 'upgrade', description: 'Upgrade outdated casks and outdated' },
        {
            name: 'search',
            description: 'Perform a substring search of cask tokens and formula names',
        },
=======
        },
        { name: 'doctor', description: 'Check your system for potential problems' },
        { name: 'info', description: 'Display brief statistics for your Homebrew installation' },
        { name: 'update', description: 'Fetch the newest version of Homebrew and all formulae' },
        { name: 'upgrade', description: 'Upgrade outdated casks and outdated' },
        { name: 'search', description: 'Perform a substring search of cask tokens and formula names' },
        { name: 'config', description: 'Show Homebrew and system configuration info' },
>>>>>>> e321ca1... feat: update all scripts and  move to ts
=======
  name: 'brew',
  description: 'Package manager for macOS',
=======
  name: "brew",
  description: "Package manager for macOS",
>>>>>>> 02ea794... added some more logic to eslint and changed the glob so we only lint files in the dev/ specs/ and scripts/ folders
  subcommands: [
    { name: "list", description: "List all installed formulae" },
    {
      name: "leaves",
      description:
        "List installed formulae that are not dependencies of another installed formula",
    },
    {
      name: "doctor",
      description: "Check your system for potential problems",
    },
    {
      name: "info",
      description: "Display brief statistics for your Homebrew installation",
    },
    {
      name: "update",
      description: "Fetch the newest version of Homebrew and all formulae",
    },
    {
      name: "outdated",
      description:
        "List installed casks and formulae that have an updated version available",
      options: [
        {
          name: ["-d", "--debug"],
          description: "Display any debugging information.",
        },
        {
          name: ["-q", "--quiet"],
          description: "List only the names of outdated kegs.",
        },
        {
          name: ["-v", "--verbose"],
          description: "Include detailed version information.",
        },
        {
          name: ["-h", "--help"],
          description: "Show help message for the outdated command.",
        },
        { name: "--cask", description: "List only outdated casks." },
        {
          name: "--fetch-HEAD",
          description:
            "Fetch the upstream repository to detect if the HEAD installation of the formula is outdated.",
        },
        { name: "--formula", description: "List only outdated formulae." },
        {
          name: "--greedy",
          description:
            "Print outdated casks with auto_updates or version :latest.",
        },
        { name: "--json", description: "Print output in JSON format." },
      ],
    },
    { name: "upgrade", description: "Upgrade outdated casks and outdated" },
    {
      name: "search",
      description:
        "Perform a substring search of cask tokens and formula names",
    },
    {
      name: "config",
      description: "Show Homebrew and system configuration info",
    },
    {
      name: "install",
      description: "Install <formula>",
      insertValue: "install ",
      args: {
        variadic: true,
        name: "formula",
        description: "Formula or cask to install",
        generators: {
          script:
            "HBPATH=$(brew --repository); ls -1 $HBPATH/Library/Taps/homebrew/homebrew-core/Formula $HBPATH/Library/Taps/homebrew/homebrew-cask/Casks",
          postProcess: function (out) {
            return out.split("\n").map((formula) => {
              return {
                name: formula.replace(".rb", ""),
                description: "formula",
                icon: "🍺",
                priority:
                  (formula[0] >= "0" && formula[0] <= "9") || formula[0] == "/"
                    ? 0
                    : 51,
              };
            });
          },
        },
      },
    },
    {
      name: "uninstall",
      description: "Uninstall <formula>",
      args: {
        variadic: true,
        name: "formula",
        generators: {
          script: "brew list -1 --formulae",
          postProcess: function (out) {
            return out.split("\n").map((formula) => {
              return {
                name: formula,
                icon: "🍺",
                description: "Installed formula",
              };
            });
          },
        },
      },
    },
    {
      name: "cask",
      insertValue: "cask ",
      description:
        "Homebrew Cask provides a friendly CLI workflow for the administration of macOS applications distributed as binaries.",
      subcommands: [
        {
          name: "install",
          insertValue: "install ",
          description: "Installs the given cask",
          args: {
            name: "cask",
            description: "Cask to install",
          },
        },
>>>>>>> 65036d2... fixed linting and prettier
        {
          name: "uninstall",
          insertValue: "uninstall ",
          description: "Uninstalls the given cask",
          args: {
            variadic: true,
            generators: {
              script: "brew list -1 --cask",
              postProcess: function (out) {
                return out.split("\n").map((formula) => {
                  return {
                    name: formula,
                    icon: "🍺",
                    description: "Installed formula",
                  };
                });
              },
            },
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
          ],
          args: {
            isVariadic: true,
            generators: servicesGenerator,
          },
>>>>>>> 7980ce4... refactor: Fix broken specs
=======
>>>>>>> e321ca1... feat: update all scripts and  move to ts
=======
          },
        },
      ],
    },
    {
      name: "services",
      description:
        "Manage background services with macOS' launchctl(1) daemon manager.",
      options: [
        {
<<<<<<< HEAD
          name: ['-d', '--debug'],
          description: 'Display any debugging information.',
>>>>>>> 65036d2... fixed linting and prettier
        },
        {
<<<<<<< HEAD
            name: 'uninstall',
            description: 'Uninstall <formula>',
            args: {
                variadic: true,
                name: 'formula',
                generators: {
                    script: 'brew list -1 --formulae',
                    postProcess: function (out) {
                        return out.split('\n').map((formula) => {
<<<<<<< HEAD
                            return {
                                name: formula,
                                icon: '🍺',
                                description: 'Installed formula',
                            };
=======
                            return { name: formula, icon: '🍺', description: 'Installed formula' };
>>>>>>> e321ca1... feat: update all scripts and  move to ts
                        });
                    },
                },
            },
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> e321ca1... feat: update all scripts and  move to ts
        },
        {
            name: 'cask',
            insertValue: 'cask ',
            description:
                'Homebrew Cask provides a friendly CLI workflow for the administration of macOS applications distributed as binaries.',
            subcommands: [
                {
                    name: 'install',
                    insertValue: 'install ',
                    description: 'Installs the given cask',
                    args: {
                        name: 'cask',
                        description: 'Cask to install',
                    },
                },
                {
                    name: 'uninstall',
                    insertValue: 'uninstall ',
                    description: 'Uninstalls the given cask',
                    args: {
                        variadic: true,
                        generators: {
                            script: 'brew list -1 --cask',
                            postProcess: function (out) {
                                return out.split('\n').map((formula) => {
<<<<<<< HEAD
                                    return {
                                        name: formula,
                                        icon: '🍺',
                                        description: 'Installed formula',
                                    };
=======
                                    return { name: formula, icon: '🍺', description: 'Installed formula' };
>>>>>>> e321ca1... feat: update all scripts and  move to ts
                                });
                            },
                        },
                    },
                },
            ],
        },
        {
            name: 'services',
            description: "Manage background services with macOS' launchctl(1) daemon manager.",
            options: [
<<<<<<< HEAD
                {
                    name: ['-d', '--debug'],
                    description: 'Display any debugging information.',
                },
                { name: ['-q', '--quiet'], description: 'Suppress any warnings.' },
                {
                    name: ['-v', '--verbose'],
                    description: 'Make some output more verbose.',
                },
                {
                    name: ['-h', '--help'],
                    description: 'Get help with services command',
                },
=======
                { name: ['-d', '--debug'], description: 'Display any debugging information.' },
                { name: ['-q', '--quiet'], description: 'Suppress any warnings.' },
                { name: ['-v', '--verbose'], description: 'Make some output more verbose.' },
                { name: ['-h', '--help'], description: 'Get help with services command' },
>>>>>>> e321ca1... feat: update all scripts and  move to ts
            ],
            subcommands: [
                {
                    name: 'cleanup',
                    insertValue: 'cleanup',
                    description: 'Remove all unused services.',
                },
                {
                    name: 'list',
                    insertValue: 'list',
                    description: 'List all services.',
                },
                {
                    name: 'run',
                    insertValue: 'run ',
                    description: 'Run the service formula without registering to launch at login (or boot).',
                    options: [
                        {
                            name: '--all',
                            insertValue: '--all',
                            description: 'Start all services',
                        },
                    ],
                    args: {
                        variadic: true,
<<<<<<< HEAD
                        generators: servicesGenerator,
=======
                        generators: generators.servicesGenerator,
>>>>>>> e321ca1... feat: update all scripts and  move to ts
                    },
                },
                {
                    name: 'start',
                    insertValue: 'start ',
                    description: 'Start the service formula immediately and register it to launch at login',
                    options: [
                        {
                            name: '--all',
                            insertValue: '--all',
                            description: 'Start all services',
                        },
                    ],
                    args: {
                        variadic: true,
<<<<<<< HEAD
                        generators: servicesGenerator,
=======
                        generators: generators.servicesGenerator,
>>>>>>> e321ca1... feat: update all scripts and  move to ts
                    },
                },
                {
                    name: 'stop',
                    insertValue: 'stop ',
                    description: 'Stop the service formula immediately and unregister it from launching at',
                    options: [
                        {
                            name: '--all',
                            insertValue: '--all',
                            description: 'Start all services',
                        },
                    ],
                    args: {
                        variadic: true,
<<<<<<< HEAD
                        generators: servicesGenerator,
=======
                        generators: generators.servicesGenerator,
>>>>>>> e321ca1... feat: update all scripts and  move to ts
                    },
                },
                {
                    name: 'restart',
                    insertValue: 'restart ',
                    description:
                        'Stop (if necessary) and start the service formula immediately and register it to launch at login (or boot).',
                    options: [
                        {
                            name: '--all',
                            insertValue: '--all',
                            description: 'Start all services',
                        },
                    ],
                    args: {
                        variadic: true,
<<<<<<< HEAD
                        generators: servicesGenerator,
                    },
                },
            ],
=======
          ],
          args: {
            isVariadic: true,
            generators: servicesGenerator,
          },
        },
        {
          name: "stop",
          insertValue: "stop ",
          description:
            "Stop the service formula immediately and unregister it from launching at",
          options: [
            {
              name: "--all",
              insertValue: "--all",
              description: "Start all services",
            },
          ],
          args: {
            isVariadic: true,
            generators: servicesGenerator,
          },
        },
        {
          name: "restart",
          insertValue: "restart ",
          description:
            "Stop (if necessary) and start the service formula immediately and register it to launch at login (or boot).",
          options: [
            {
              name: "--all",
              insertValue: "--all",
              description: "Start all services",
            },
          ],
          args: {
            isVariadic: true,
            generators: servicesGenerator,
          },
>>>>>>> 7980ce4... refactor: Fix broken specs
=======
                        generators: generators.servicesGenerator,
                    },
                },
            ],
>>>>>>> e321ca1... feat: update all scripts and  move to ts
=======
          name: ['-q', '--quiet'],
          description: 'Suppress any warnings.',
=======
          name: ["-d", "--debug"],
          description: "Display any debugging information.",
        },
        {
          name: ["-q", "--quiet"],
          description: "Suppress any warnings.",
>>>>>>> 02ea794... added some more logic to eslint and changed the glob so we only lint files in the dev/ specs/ and scripts/ folders
        },
        {
          name: ["-v", "--verbose"],
          description: "Make some output more verbose.",
        },
        {
          name: ["-h", "--help"],
          description: "Get help with services command",
        },
      ],
      subcommands: [
        {
          name: "cleanup",
          insertValue: "cleanup",
          description: "Remove all unused services.",
        },
        {
          name: "list",
          insertValue: "list",
          description: "List all services.",
        },
        {
          name: "run",
          insertValue: "run ",
          description:
            "Run the service formula without registering to launch at login (or boot).",
          options: [
            {
              name: "--all",
              insertValue: "--all",
              description: "Start all services",
            },
          ],
          args: {
            variadic: true,
            generators: generators.servicesGenerator,
          },
        },
        {
          name: "start",
          insertValue: "start ",
          description:
            "Start the service formula immediately and register it to launch at login",
          options: [
            {
              name: "--all",
              insertValue: "--all",
              description: "Start all services",
            },
          ],
          args: {
            variadic: true,
            generators: generators.servicesGenerator,
          },
        },
        {
          name: "stop",
          insertValue: "stop ",
          description:
            "Stop the service formula immediately and unregister it from launching at",
          options: [
            {
              name: "--all",
              insertValue: "--all",
              description: "Start all services",
            },
          ],
          args: {
            variadic: true,
            generators: generators.servicesGenerator,
          },
>>>>>>> 65036d2... fixed linting and prettier
        },
        {
          name: "restart",
          insertValue: "restart ",
          description:
            "Stop (if necessary) and start the service formula immediately and register it to launch at login (or boot).",
          options: [
            {
              name: "--all",
              insertValue: "--all",
              description: "Start all services",
            },
          ],
          args: {
            variadic: true,
            generators: generators.servicesGenerator,
          },
        },
      ],
    },
    {
      name: "analytics",
      description: "Manages analytics preferences",
      subcommands: [
        {
          name: "on",
          description: "Turns on analytics",
        },
        {
          name: "off",
          description: "Turns off analytics",
        },
      ],
    },
  ],
  options: [
    {
      name: ["--version"],
      description: "The current Homebrew version",
    },
  ],
};
<<<<<<< HEAD
>>>>>>> 6ba073d... fix: cleanup brew spec
=======
>>>>>>> e321ca1... feat: update all scripts and  move to ts
