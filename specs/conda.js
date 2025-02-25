var __spreadArray = (this && this.__spreadArray) || function (to, from) {
    for (var i = 0, il = from.length, j = to.length; i < il; i++, j++)
        to[j] = from[i];
    return to;
};
var getInstalledPackages = {
    script: "conda list",
    postProcess: function (out) {
        var lines = out.split("\n");
        var installedPackages = [];
        for (var i = 2; i < lines.length; i++) {
            installedPackages.push({
                name: lines[i],
                icon: "🐍",
            });
        }
        return installedPackages;
    },
};
// const getAllCondaPackages: Fig.Generator = {
//   //script: "conda search -q",
//   script: function (context) {
//     if (context[context.length - 1] === "") return "";
//     const searchTerm = context[context.length - 1];
//     return "conda search '*{searchTerm}*'";
//   },
//   postProcess: function (out) {
//     const lines = out.split("\n");
//     const allPackages = [];
//     allPackages.push({name: lines[0]});
//     // for (let i = 1; i < lines.length; i++) {
//     //   allPackages.push({
//     //     name: lines[i],
//     //     icon: "🐍",
//     //   });
//     // }
//     return allPackages;
//   },
// };
var getCondaEnvironments = {
    script: "conda env list",
    postProcess: function (out) {
        var lines = out.split("\n");
        var installedPackages = [];
        for (var i = 2; i < lines.length; i++) {
            var env_name = lines[i].split(" ")[0];
            installedPackages.push({
                name: env_name,
                icon: "🐍",
            });
        }
        return installedPackages;
    },
};
var getCondaConfigs = {
    script: "conda config --show",
    postProcess: function (out) {
        var lines = out.split("\n");
        var configs = [];
        for (var i = 2; i < lines.length; i++) {
            var config_name = lines[i].split(":")[0];
            if (config_name.includes("-") == false) {
                configs.push({
                    name: config_name,
                    icon: "🐍",
                });
            }
        }
        return configs;
    },
};
var name_options = [
    {
        name: ["-n", "--name"],
        description: "Name of environment.",
        args: {
            name: "Environment",
        },
    },
    {
        name: ["-p", "--prefix"],
        description: "Full path to environment location (i.e. prefix).",
        args: {
            name: "path",
            template: "filepaths",
        },
    },
];
var remove_options = __spreadArray(__spreadArray([
    {
        name: ["--dev"],
        description: "Use sys.executable -m conda in wrapper scripts instead of CONDA_EXE. This is mainly for use during tests where we test new conda source against old Python versions.",
    }
], name_options), [
    {
        name: ["-c", "--channel"],
        description: "they are given (including local directories using the 'file://' syntax or simply a path like '/home/conda/mychan' or '../mychan'). Then, the defaults or channels from .condarc are searched (unless --override-channels is given). You can use 'defaults' to get the default packages for conda. You can also use any name and the .condarc channel_alias value will be prepended. The default channel_alias is http://conda.anaconda.org/.",
        args: {},
    },
    {
        name: ["--use-local"],
        description: "Use locally built packages. Identical to '-c local'.",
    },
    {
        name: ["--override-channels"],
        description: "Do not search default or .condarc channels. Requires --channel.",
    },
    {
        name: ["--repodata-fn"],
        description: "Specify name of repodata on remote server. Conda will try whatever you specify, but will ultimately fall back to repodata.json if your specs are not satisfiable with what you specify here. This is used to employ repodata that is reduced in time scope. You may pass this flag more than once. Leftmost entries are tried first, and the fallback to repodata.json is added for you automatically.",
        args: {},
    },
    {
        name: ["--all"],
        description: "Remove all packages, i.e., the entire environment.",
    },
    {
        name: ["--features"],
        description: "Remove features (instead of packages).",
    },
    {
        name: ["--force-remove, --force"],
        description: "Forces removal of a package without removing packages that depend on it. Using this option will usually leave your environment in a broken and inconsistent state.",
    },
    { name: ["--no-pin"], description: "Ignore pinned file." },
    {
        name: ["-C", "--use-index-cache"],
        description: "Use cache of channel index files, even if it has expired.",
    },
    {
        name: ["-k", "--insecure"],
        description: "Allow conda to perform insecure SSL connections and transfers. Equivalent to setting 'ssl_verify' to 'false'.",
    },
    {
        name: ["--offline"],
        description: "Offline mode. Don't connect to the Internet.",
    },
    {
        name: ["-d", "--dry-run"],
        description: "Only display what would have been done.",
    },
    {
        name: ["--json"],
        description: "Report all output as json. Suitable for using conda programmatically.",
    },
    {
        name: ["-q", "--quiet"],
        description: "Do not display progress bar.",
    },
    {
        name: ["-v", "--verbose"],
        description: "Can be used multiple times. Once for INFO, twice for DEBUG, three times for TRACE.",
    },
    { name: ["-y", "--yes"], description: "Do not ask for confirmation." },
]);
var update_options = __spreadArray(__spreadArray([
    {
        name: ["--file"],
        description: "Read package versions from the given file. Repeated file specifications can be passed (e.g. --file=file1 --file=file2).",
        args: {
            template: "filepaths",
        },
    }
], name_options), [
    {
        name: ["-c", "--channel"],
        description: "they are given (including local directories using the 'file://' syntax or simply a path like '/home/conda/mychan' or '../mychan'). Then, the defaults or channels from .condarc are searched (unless --override-channels is given). You can use 'defaults' to get the default packages for conda. You can also use any name and the .condarc channel_alias value will be prepended. The default channel_alias is http://conda.anaconda.org/.",
        args: {},
    },
    {
        name: ["--use-local"],
        description: "Use locally built packages. Identical to '-c local'.",
    },
    {
        name: ["--override-channels"],
        description: "Do not search default or .condarc channels. Requires --channel.",
    },
    {
        name: ["--repodata-fn"],
        description: "Specify name of repodata on remote server. Conda will try whatever you specify, but will ultimately fall back to repodata.json if your specs are not satisfiable with what you specify here. This is used to employ repodata that is reduced in time scope. You may pass this flag more than once. Leftmost entries are tried first, and the fallback to repodata.json is added for you automatically.",
        args: {},
    },
    {
        name: ["--strict-channel-priority"],
        description: "Packages in lower priority channels are not considered if a package with the same name appears in a higher priority channel.",
    },
    {
        name: ["--no-channel-priority"],
        description: "Package version takes precedence over channel priority. Overrides the value given by conda config --show channel_priority.",
    },
    {
        name: ["--no-deps"],
        description: "Do not install, update, remove, or change dependencies. This WILL lead to broken environments and inconsistent behavior. Use at your own risk.",
    },
    { name: ["--only-deps"], description: "Only install dependencies." },
    { name: ["--no-pin"], description: "Ignore pinned file." },
    {
        name: ["--force-reinstall"],
        description: "Ensure that any user-requested package for the current operation is uninstalled and reinstalled, even if that package already exists in the environment.",
    },
    {
        name: ["--freeze-installed", "--no-update-deps"],
        description: "Do not update or change already-installed dependencies.",
    },
    { name: ["--update-deps"], description: "Update dependencies." },
    {
        name: ["-S", "--satisfied-skip-solve"],
        description: "Exit early and do not run the solver if the requested specs are satisfied. Also skips aggressive updates as configured by 'aggressive_update_packages'. Similar to the default behavior of 'pip install'.",
    },
    {
        name: ["--update-all", "--all"],
        description: "Update all installed packages in the environment.",
    },
    {
        name: ["--update-specs"],
        description: "Update based on provided specifications.",
    },
    {
        name: ["--copy"],
        description: "Install all packages using copies instead of hard- or soft-linking.",
    },
    {
        name: ["--clobber"],
        description: "Allow clobbering of overlapping file paths within packages, and suppress related warnings.",
    },
    {
        name: ["-C", "--use-index-cache"],
        description: "Use cache of channel index files, even if it has expired.",
    },
    {
        name: ["-k", "--insecure"],
        description: "Allow conda to perform insecure SSL connections and transfers. Equivalent to setting 'ssl_verify' to 'false'.",
    },
    {
        name: ["--offline"],
        description: "Offline mode. Don't connect to the Internet.",
    },
    {
        name: ["-d", "--dry-run"],
        description: "Only display what would have been done.",
    },
    {
        name: ["--json"],
        description: "Report all output as json. Suitable for using conda programmatically.",
    },
    {
        name: ["-q", "--quiet"],
        description: "Do not display progress bar.",
    },
    {
        name: ["-v", "--verbose"],
        description: "Can be used multiple times. Once for INFO, twice for DEBUG, three times for TRACE.",
    },
    { name: ["-y", "--yes"], description: "Do not ask for confirmation." },
    {
        name: ["--download-only"],
        description: "Solve an environment and ensure package caches are populated, but exit prior to unlinking and linking packages into the prefix.",
    },
    {
        name: ["--show-channel-urls"],
        description: "Show channel urls. Overrides the value given by conda config --show show_channel_urls.",
    },
]);
var completionSpec = {
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
    name: 'conda',
    description: 'Conda package manager',
    subcommands: [
        {
            name: 'clean',
            description: 'Remove unused packages and caches.',
            args: {},
            options: [
                {
                    name: ['-a', '--all'],
                    description: 'Remove index cache, lock files, unused cache packages, and tarballs.',
                },
                {
                    name: ['-i', '--index-cache'],
                    description: 'Remove index cache.',
                },
                {
                    name: ['-p', '--packages'],
                    description: 'Remove unused packages from writable package caches. ',
                },
                {
                    name: ['-t', '--tarballs'],
                    description: 'Remove cached package tarballs.',
                },
                {
                    name: ['-f', '--force-pkgs-dirs'],
                    description: 'Remove all writable package caches.',
                },
                {
                    name: ['-c', '--tempfiles'],
                    description: 'Remove temporary files that could not be deleted earlier due to being in-use. Argument is path(s) to prefix(es) where files should be found and removed.',
                    args: {
<<<<<<< HEAD
<<<<<<< HEAD
                        template: 'filepaths',
                        variadic: true,
                    },
=======
                        template: "filepaths",
                        isVariadic: true
                    }
>>>>>>> 7980ce4... refactor: Fix broken specs
=======
                        template: 'filepaths',
                        variadic: true,
                    },
>>>>>>> e321ca1... feat: update all scripts and  move to ts
                },
                {
                    name: ['-d', '--dry-run'],
                    description: 'Only display what would have been done.',
                },
                {
                    name: ['--json'],
                    description: 'Report all output as json. Suitable for using conda programmatically.',
                },
                {
                    name: ['-q', '--quiet'],
                    description: 'Do not display progress bar.',
                },
                {
                    name: ['-v', '--verbose'],
                    description: 'Can be used multiple times. Once for INFO, twice for DEBUG, three times for TRACE.',
                },
                {
                    name: ['-y', '--yes'],
                    description: 'Do not ask for confirmation.',
                },
            ],
        },
        {
            name: 'compare',
            description: 'Compare packages between conda environments.',
            args: {
                name: 'file',
                template: 'filepaths',
            },
            options: [
                {
                    name: ['file'],
                    description: 'Path to the environment file that is to be compared against',
                },
                {
                    name: ['-h', '--help'],
                    description: 'Show this help message and exit.',
                },
                {
                    name: ['--json'],
                    description: 'Report all output as json. Suitable for using conda programmatically.',
                },
                {
                    name: ['-v', '--verbose'],
                    description: 'Use once for info, twice for debug, three times for trace.',
                },
                {
                    name: ['-q', '--quiet'],
                    description: 'Do not display progress bar.',
                },
                {
                    name: ['-n', '--name'],
                    description: 'Name of environment.',
                    args: {
                        name: 'environment',
                    },
                },
                {
                    name: ['-p', '--prefix'],
                    description: 'Full path to environment location (i.e. prefix).',
                    args: {
                        name: 'path',
                        template: 'filepaths',
                    },
                },
            ],
        },
        {
            name: 'config',
            description: 'Modify configuration values in .condarc. This is modeled after the git config command. Writes to the user .condarc file by default.',
            options: [
                {
                    name: ['--json'],
                    description: 'Report all output as json. Suitable for using conda programmatically.',
                },
                { name: ['-v, --verbose'], description: 'Use once for info, twice for debug, three times for trace.' },
                { name: ['-q, --quiet'], description: 'Do not display progress bar.' },
                {
                    name: ['--system'],
                    description: "Write to the system .condarc file at '/home/docs/checkouts/readthedocs.org/user_builds/continuumio-conda/conda/latest/.condarc'.",
                },
                {
                    name: ['--env'],
                    description: 'Write to the active conda environment .condarc file (<no active environment>). If no environment is active, write to the user config file (/home/docs/.condarc).',
                },
                { name: ['--file'], description: 'Write to the given file.' },
                {
                    name: ['--show'],
                    description: 'Display configuration values as calculated and compiled. If no arguments given, show information for all configuration values.',
                },
                { name: ['--show-sources'], description: 'Display all identified configuration sources.' },
                { name: ['--validate'], description: 'Validate all configuration sources.' },
                {
                    name: ['--describe'],
                    description: 'Describe given configuration parameters. If no arguments given, show information for all configuration parameters.',
                },
                {
                    name: ['--write-default'],
                    description: 'Write the default configuration to a file. Equivalent to conda config --describe > ~/.condarc.',
                },
                {
                    name: ['--get'],
                    description: 'Get a configuration value.',
                    args: [
                        {
                            name: 'key',
                        },
                    ],
                },
                {
                    name: ['--append'],
                    description: 'Add one configuration value to the end of a list key.',
                    args: [
                        {
                            name: 'key',
                        },
                        {
                            name: 'value',
                        },
                    ],
                },
                {
                    name: ['--prepend, --add'],
                    description: 'Add one configuration value to the beginning of a list key.',
                    args: [
                        {
                            name: 'key',
                        },
                        {
                            name: 'value',
                        },
                    ],
                },
                {
                    name: ['--set'],
                    description: 'Set a boolean or string key',
                    args: [
                        {
                            name: 'key',
                        },
                        {
                            name: 'value',
                        },
                    ],
                },
                {
                    name: ['--remove'],
                    description: 'Remove a configuration value from a list key. This removes all instances of the value.',
                    args: [
                        {
                            name: 'key',
                        },
                        {
                            name: 'value',
                        },
                    ],
                },
                {
                    name: ['--remove-key'],
                    description: 'Remove a configuration key (and all its values).',
                    args: [
                        {
                            name: 'key',
                        },
                    ],
                },
                {
                    name: ['--stdin'],
                    description: 'Apply configuration information given in yaml format piped through stdin.',
                },
            ],
        },
        {
            name: 'create',
            description: 'Create a new conda environment from a list of specified packages.',
            args: { name: 'package_spec', description: 'Packages to install or update in the conda environment.' },
            options: [
                { name: ['--clone'], description: 'Path to (or name of) existing local environment.' },
                {
                    name: ['--file'],
                    description: 'Read package versions from the given file. Repeated file specifications can be passed (e.g. --file=file1 --file=file2).',
                },
                {
                    name: ['--dev'],
                    description: 'Use sys.executable -m conda in wrapper scripts instead of CONDA_EXE. This is mainly for use during tests where we test new conda source against old Python versions.',
                },
                { name: ['-n, --name'], description: 'Name of environment.' },
                { name: ['-p, --prefix'], description: 'Full path to environment location (i.e. prefix).' },
                {
                    name: ['-c, --channel'],
                    description: "they are given (including local directories using the 'file://' syntax or simply a path like '/home/conda/mychan' or '../mychan'). Then, the defaults or channels from .condarc are searched (unless --override-channels is given). You can use 'defaults' to get the default packages for conda. You can also use any name and the .condarc channel_alias value will be prepended. The default channel_alias is http://conda.anaconda.org/.",
                },
                { name: ['--use-local'], description: "Use locally built packages. Identical to '-c local'." },
                {
                    name: ['--override-channels'],
                    description: 'Do not search default or .condarc channels. Requires --channel.',
                },
                {
                    name: ['--repodata-fn'],
                    description: 'Specify name of repodata on remote server. Conda will try whatever you specify, but will ultimately fall back to repodata.json if your specs are not satisfiable with what you specify here. This is used to employ repodata that is reduced in time scope. You may pass this flag more than once. Leftmost entries are tried first, and the fallback to repodata.json is added for you automatically.',
                },
                {
                    name: ['--strict-channel-priority'],
                    description: 'Packages in lower priority channels are not considered if a package with the same name appears in a higher priority channel.',
                },
                {
                    name: ['--no-channel-priority'],
                    description: 'Package version takes precedence over channel priority. Overrides the value given by conda config --show channel_priority.',
                },
                {
                    name: ['--no-deps'],
                    description: 'Do not install, update, remove, or change dependencies. This WILL lead to broken environments and inconsistent behavior. Use at your own risk.',
                },
                { name: ['--only-deps'], description: 'Only install dependencies.' },
                { name: ['--no-pin'], description: 'Ignore pinned file.' },
                {
                    name: ['--no-default-packages'],
                    description: 'Ignore create_default_packages in the .condarc file.',
                },
                {
                    name: ['--copy'],
                    description: 'Install all packages using copies instead of hard- or soft-linking.',
                },
                {
                    name: ['-C, --use-index-cache'],
                    description: 'Use cache of channel index files, even if it has expired.',
                },
                {
                    name: ['-k, --insecure'],
                    description: "Allow conda to perform insecure SSL connections and transfers. Equivalent to setting 'ssl_verify' to 'false'.",
                },
                { name: ['--offline'], description: "Offline mode. Don't connect to the Internet." },
                { name: ['-d, --dry-run'], description: 'Only display what would have been done.' },
                {
                    name: ['--json'],
                    description: 'Report all output as json. Suitable for using conda programmatically.',
                },
                { name: ['-q, --quiet'], description: 'Do not display progress bar.' },
                {
                    name: ['-v, --verbose'],
                    description: 'Can be used multiple times. Once for INFO, twice for DEBUG, three times for TRACE.',
                },
                { name: ['-y, --yes'], description: 'Do not ask for confirmation.' },
                {
                    name: ['--download-only'],
                    description: 'Solve an environment and ensure package caches are populated, but exit prior to unlinking and linking packages into the prefix.',
                },
                {
                    name: ['--show-channel-urls'],
                    description: 'Show channel urls. Overrides the value given by conda config --show show_channel_urls.',
                },
            ],
        },
        {
            name: 'help',
            description: 'Displays a list of available conda commands and their help strings.',
        },
        {
            name: 'info',
            description: 'Display information about current conda install.',
            options: [
                { name: ['-a', '--all'], description: 'Show all information.' },
                { name: ['--base'], description: 'Display base environment path.' },
                { name: ['-e', '--envs'], description: 'List all known conda environments.' },
                { name: ['-s', '--system'], description: 'List environment variables.' },
                { name: ['--unsafe-channels'], description: 'Display list of channels with tokens exposed.' },
                {
                    name: ['--json'],
                    description: 'Report all output as json. Suitable for using conda programmatically.',
                },
                {
                    name: ['-v', '--verbose'],
                    description: 'Use once for info, twice for debug, three times for trace.',
                },
                { name: ['-q', '--quiet'], description: 'Do not display progress bar.' },
            ],
        },
        {
            name: 'init',
            description: 'Initialize conda for shell interaction. [Experimental]',
        },
        {
            name: 'install',
            description: 'Installs a list of packages into a specified conda environment.',
            args: {
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> e321ca1... feat: update all scripts and  move to ts
                name: 'package spec',
                description: 'Packages to install or update in the conda environment.',
                variadic: true,
                generators: getAllCondaPackages,
<<<<<<< HEAD
=======
                name: "package spec",
                description: "Packages to install or update in the conda environment.",
                isVariadic: true,
                generators: getAllCondaPackages
>>>>>>> 7980ce4... refactor: Fix broken specs
=======
>>>>>>> e321ca1... feat: update all scripts and  move to ts
=======
=======
>>>>>>> 39a91f1... feat: apply new rule to files
  name: "conda",
  description: "Conda package manager",
  subcommands: [
    {
<<<<<<< HEAD
      name: "clean",
      description: "Remove unused packages and caches.",
      args: {},
      options: [
        {
          name: ["-a", "--all"],
          description:
            "Remove index cache, lock files, unused cache packages, and tarballs.",
        },
        {
          name: ["-i", "--index-cache"],
          description: "Remove index cache.",
        },
        {
          name: ["-p", "--packages"],
          description: "Remove unused packages from writable package caches. ",
        },
        {
          name: ["-t", "--tarballs"],
          description: "Remove cached package tarballs.",
        },
        {
          name: ["-f", "--force-pkgs-dirs"],
          description: "Remove all writable package caches.",
        },
        {
          name: ["-c", "--tempfiles"],
          description:
            "Remove temporary files that could not be deleted earlier due to being in-use. Argument is path(s) to prefix(es) where files should be found and removed.",
          args: {
            template: "filepaths",
            variadic: true,
          },
        },
        {
          name: ["-d", "--dry-run"],
          description: "Only display what would have been done.",
        },
        {
          name: ["--json"],
          description:
            "Report all output as json. Suitable for using conda programmatically.",
        },
        {
          name: ["-q", "--quiet"],
          description: "Do not display progress bar.",
        },
        {
          name: ["-v", "--verbose"],
          description:
            "Can be used multiple times. Once for INFO, twice for DEBUG, three times for TRACE.",
        },
        {
          name: ["-y", "--yes"],
          description: "Do not ask for confirmation.",
        },
      ],
    },
    {
      name: "compare",
      description: "Compare packages between conda environments.",
      args: {
        name: "file",
        template: "filepaths",
      },
      options: [
        {
          name: ["file"],
          description:
            "Path to the environment file that is to be compared against",
        },
        {
          name: ["-h", "--help"],
          description: "Show this help message and exit.",
        },
        {
          name: ["--json"],
          description:
            "Report all output as json. Suitable for using conda programmatically.",
        },
        {
          name: ["-v", "--verbose"],
          description:
            "Use once for info, twice for debug, three times for trace.",
        },
        {
          name: ["-q", "--quiet"],
          description: "Do not display progress bar.",
        },
        {
          name: ["-n", "--name"],
          description: "Name of environment.",
          args: {
            name: "environment",
          },
        },
        {
          name: ["-p", "--prefix"],
          description: "Full path to environment location (i.e. prefix).",
          args: {
            name: "path",
            template: "filepaths",
          },
        },
      ],
    },
    {
      name: "config",
      description:
        "Modify configuration values in .condarc. This is modeled after the git config command. Writes to the user .condarc file by default.",
      options: [
        {
          name: ["--json"],
          description:
            "Report all output as json. Suitable for using conda programmatically.",
        },
        {
          name: ["-v, --verbose"],
          description:
            "Use once for info, twice for debug, three times for trace.",
        },
        { name: ["-q, --quiet"], description: "Do not display progress bar." },
        {
          name: ["--system"],
          description:
            "Write to the system .condarc file at '/home/docs/checkouts/readthedocs.org/user_builds/continuumio-conda/conda/latest/.condarc'.",
        },
        {
          name: ["--env"],
          description:
            "Write to the active conda environment .condarc file (<no active environment>). If no environment is active, write to the user config file (/home/docs/.condarc).",
        },
        { name: ["--file"], description: "Write to the given file." },
        {
          name: ["--show"],
          description:
            "Display configuration values as calculated and compiled. If no arguments given, show information for all configuration values.",
        },
        {
          name: ["--show-sources"],
          description: "Display all identified configuration sources.",
        },
        {
          name: ["--validate"],
          description: "Validate all configuration sources.",
        },
        {
          name: ["--describe"],
          description:
            "Describe given configuration parameters. If no arguments given, show information for all configuration parameters.",
=======
    name: "conda",
    description: "Conda package manager",
    subcommands: [
=======
      name: "activate",
      description: "Activate an environment",
      args: {
        generators: getCondaEnvironments,
      },
      options: [
>>>>>>> 39a91f1... feat: apply new rule to files
        {
          name: ["--stack"],
          description:
            "Stack the environment being activated on top of the previous active environment.",
        },
        {
<<<<<<< HEAD
            name: "deactivate",
            description: "Deactivate an environment",
>>>>>>> d0857f4... feat: update formatting
=======
          name: ["--no-stack"],
          description:
            "Do not stack the environment. Overrides 'auto_stack' setting",
>>>>>>> 39a91f1... feat: apply new rule to files
        },
      ],
    },
    {
      name: "deactivate",
      description: "Deactivate an environment",
    },
    {
      name: "clean",
      description: "Remove unused packages and caches.",
      args: {},
      options: [
        {
          name: ["-a", "--all"],
          description:
            "Remove index cache, lock files, unused cache packages, and tarballs.",
        },
        {
<<<<<<< HEAD
<<<<<<< HEAD
          name: ["--get"],
          description: "Get a configuration value.",
          args: [
            {
              name: "key",
=======
=======
>>>>>>> 3879070... feat: re-add built specs and update gitignore
    name: "conda",
    description: "Conda package manager",
    subcommands: [
        {
            name: "activate",
            description: "Activate an environment",
            args: {
                generators: getCondaEnvironments,
            },
            options: [
                {
                    name: ["--stack"],
                    description: "Stack the environment being activated on top of the previous active environment.",
                },
                {
                    name: ["--no-stack"],
                    description: "Do not stack the environment. Overrides 'auto_stack' setting",
=======
            name: "compare",
            description: "Compare packages between conda environments.",
            args: {
                name: "file",
                description: "Path to the environment file that is to be compared against",
                template: "filepaths",
            },
            options: __spreadArray(__spreadArray([], name_options), [
                {
                    name: ["-h", "--help"],
                    description: "Show this help message and exit.",
                },
                {
                    name: ["--json"],
                    description: "Report all output as json. Suitable for using conda programmatically.",
                },
                {
                    name: ["-v", "--verbose"],
                    description: "Use once for info, twice for debug, three times for trace.",
                },
                {
                    name: ["-q", "--quiet"],
                    description: "Do not display progress bar.",
                },
            ]),
        },
        {
            name: "config",
            description: "Modify configuration values in .condarc. This is modeled after the git config command. Writes to the user .condarc file by default.",
            options: [
                {
                    name: ["--json"],
                    description: "Report all output as json. Suitable for using conda programmatically.",
                },
                {
                    name: ["-v, --verbose"],
                    description: "Use once for info, twice for debug, three times for trace.",
                },
                { name: ["-q, --quiet"], description: "Do not display progress bar." },
                {
                    name: ["--system"],
                    description: "Write to the system .condarc file at '/home/docs/checkouts/readthedocs.org/user_builds/continuumio-conda/conda/latest/.condarc'.",
                },
                {
                    name: ["--env"],
                    description: "Write to the active conda environment .condarc file (<no active environment>). If no environment is active, write to the user config file (/home/docs/.condarc).",
                },
                {
                    name: ["--file"],
                    description: "Write to the given file.",
                    args: {
                        name: "Target File",
                        template: "filepaths",
                    },
                },
                {
                    name: ["--show"],
                    description: "Display configuration values as calculated and compiled. If no arguments given, show information for all configuration values.",
                    args: {
                        name: "Configuration values",
                        isOptional: true,
                        variadic: true,
                        generators: getCondaConfigs,
                    },
                },
                {
                    name: ["--show-sources"],
                    description: "Display all identified configuration sources.",
                },
                {
                    name: ["--validate"],
                    description: "Validate all configuration sources.",
                },
                {
                    name: ["--describe"],
                    description: "Describe given configuration parameters. If no arguments given, show information for all configuration parameters.",
                    args: {
                        name: "Configuration values",
                        isOptional: true,
                        variadic: true,
                        generators: getCondaConfigs,
                    },
                },
                {
                    name: ["--write-default"],
                    description: "Write the default configuration to a file. Equivalent to conda config --describe > ~/.condarc.",
                },
                {
                    name: ["--get"],
                    description: "Get a configuration value.",
                    args: [
                        {
                            name: "key",
                            isOptional: true,
                            variadic: true,
                        },
                    ],
                },
                {
                    name: ["--append"],
                    description: "Add one configuration value to the end of a list key.",
                    args: [
                        {
                            name: "key",
                        },
                        {
                            name: "value",
                        },
                    ],
                },
                {
                    name: ["--prepend, --add"],
                    description: "Add one configuration value to the beginning of a list key.",
                    args: [
                        {
                            name: "key",
                        },
                        {
                            name: "value",
                        },
                    ],
                },
                {
                    name: ["--set"],
                    description: "Set a boolean or string key",
                    args: [
                        {
                            name: "key",
                        },
                        {
                            name: "value",
                        },
                    ],
                },
                {
                    name: ["--remove"],
                    description: "Remove a configuration value from a list key. This removes all instances of the value.",
                    args: [
                        {
                            name: "key",
                        },
                        {
                            name: "value",
                        },
                    ],
                },
                {
                    name: ["--remove-key"],
                    description: "Remove a configuration key (and all its values).",
                    args: [
                        {
                            name: "key",
                        },
                    ],
                },
                {
                    name: ["--stdin"],
                    description: "Apply configuration information given in yaml format piped through stdin.",
>>>>>>> d0857f4... feat: update formatting
                },
            ],
        },
        {
<<<<<<< HEAD
            name: "deactivate",
            description: "Deactivate an environment",
        },
        {
            name: "clean",
            description: "Remove unused packages and caches.",
            args: {},
            options: [
                {
                    name: ["-a", "--all"],
                    description: "Remove index cache, lock files, unused cache packages, and tarballs.",
                },
                {
                    name: ["-i", "--index-cache"],
                    description: "Remove index cache.",
                },
                {
                    name: ["-p", "--packages"],
                    description: "Remove unused packages from writable package caches. ",
                },
                {
                    name: ["-t", "--tarballs"],
                    description: "Remove cached package tarballs.",
                },
                {
                    name: ["-f", "--force-pkgs-dirs"],
                    description: "Remove all writable package caches.",
                },
                {
                    name: ["-c", "--tempfiles"],
                    description: "Remove temporary files that could not be deleted earlier due to being in-use. Argument is path(s) to prefix(es) where files should be found and removed.",
                    args: {
                        template: "filepaths",
                        variadic: true,
                    },
                },
                {
                    name: ["-d", "--dry-run"],
                    description: "Only display what would have been done.",
                },
                {
                    name: ["--json"],
                    description: "Report all output as json. Suitable for using conda programmatically.",
                },
                {
                    name: ["-q", "--quiet"],
                    description: "Do not display progress bar.",
                },
                {
                    name: ["-v", "--verbose"],
                    description: "Can be used multiple times. Once for INFO, twice for DEBUG, three times for TRACE.",
                },
                {
                    name: ["-y", "--yes"],
                    description: "Do not ask for confirmation.",
                },
            ],
        },
        {
            name: "compare",
            description: "Compare packages between conda environments.",
            args: {
                name: "file",
                description: "Path to the environment file that is to be compared against",
                template: "filepaths",
<<<<<<< HEAD
>>>>>>> a09fa69... removed linting from all js specs in specs folder
=======
>>>>>>> 3879070... feat: re-add built specs and update gitignore
            },
            options: __spreadArray(__spreadArray([], name_options), [
                {
                    name: ["-h", "--help"],
                    description: "Show this help message and exit.",
                },
                {
                    name: ["--json"],
                    description: "Report all output as json. Suitable for using conda programmatically.",
                },
                {
                    name: ["-v", "--verbose"],
                    description: "Use once for info, twice for debug, three times for trace.",
                },
                {
                    name: ["-q", "--quiet"],
                    description: "Do not display progress bar.",
                },
            ]),
        },
        {
            name: "config",
            description: "Modify configuration values in .condarc. This is modeled after the git config command. Writes to the user .condarc file by default.",
            options: [
=======
            name: "create",
            description: "Create a new conda environment from a list of specified packages.",
            args: {
                name: "package_spec",
                description: "Packages to install or update in the conda environment",
                isOptional: true,
                variadic: true,
            },
            options: __spreadArray(__spreadArray([
                {
                    name: ["--clone"],
                    description: "Path to (or name of) existing local environment.",
                    args: {
                        generators: getCondaEnvironments,
                    },
                },
                {
                    name: ["--file"],
                    description: "Read package versions from the given file. Repeated file specifications can be passed (e.g. --file=file1 --file=file2).",
                    args: {
                        template: "filepaths",
                    },
                },
                {
                    name: ["--dev"],
                    description: "Use sys.executable -m conda in wrapper scripts instead of CONDA_EXE. This is mainly for use during tests where we test new conda source against old Python versions.",
                }
            ], name_options), [
                {
                    name: ["-c, --channel"],
                    description: "they are given (including local directories using the 'file://' syntax or simply a path like '/home/conda/mychan' or '../mychan'). Then, the defaults or channels from .condarc are searched (unless --override-channels is given). You can use 'defaults' to get the default packages for conda. You can also use any name and the .condarc channel_alias value will be prepended. The default channel_alias is http://conda.anaconda.org/.",
                    args: {},
                },
                {
                    name: ["--use-local"],
                    description: "Use locally built packages. Identical to '-c local'.",
                },
                {
                    name: ["--override-channels"],
                    description: "Do not search default or .condarc channels. Requires --channel.",
                },
                {
                    name: ["--repodata-fn"],
                    description: "Specify name of repodata on remote server. Conda will try whatever you specify, but will ultimately fall back to repodata.json if your specs are not satisfiable with what you specify here. This is used to employ repodata that is reduced in time scope. You may pass this flag more than once. Leftmost entries are tried first, and the fallback to repodata.json is added for you automatically.",
                    args: {},
                },
                {
                    name: ["--strict-channel-priority"],
                    description: "Packages in lower priority channels are not considered if a package with the same name appears in a higher priority channel.",
                },
                {
                    name: ["--no-channel-priority"],
                    description: "Package version takes precedence over channel priority. Overrides the value given by conda config --show channel_priority.",
                },
                {
                    name: ["--no-deps"],
                    description: "Do not install, update, remove, or change dependencies. This WILL lead to broken environments and inconsistent behavior. Use at your own risk.",
                    isDangerous: true,
                },
                { name: ["--only-deps"], description: "Only install dependencies." },
                { name: ["--no-pin"], description: "Ignore pinned file." },
                {
                    name: ["--no-default-packages"],
                    description: "Ignore create_default_packages in the .condarc file.",
                },
                {
                    name: ["--copy"],
                    description: "Install all packages using copies instead of hard- or soft-linking.",
                },
                {
                    name: ["-C, --use-index-cache"],
                    description: "Use cache of channel index files, even if it has expired.",
                },
                {
                    name: ["-k, --insecure"],
                    description: "Allow conda to perform insecure SSL connections and transfers. Equivalent to setting 'ssl_verify' to 'false'.",
                },
                {
                    name: ["--offline"],
                    description: "Offline mode. Don't connect to the Internet.",
                },
                {
                    name: ["-d, --dry-run"],
                    description: "Only display what would have been done.",
                },
>>>>>>> d0857f4... feat: update formatting
                {
                    name: ["--json"],
                    description: "Report all output as json. Suitable for using conda programmatically.",
                },
<<<<<<< HEAD
                {
                    name: ["-v, --verbose"],
                    description: "Use once for info, twice for debug, three times for trace.",
                },
                { name: ["-q, --quiet"], description: "Do not display progress bar." },
                {
                    name: ["--system"],
                    description: "Write to the system .condarc file at '/home/docs/checkouts/readthedocs.org/user_builds/continuumio-conda/conda/latest/.condarc'.",
                },
                {
                    name: ["--env"],
                    description: "Write to the active conda environment .condarc file (<no active environment>). If no environment is active, write to the user config file (/home/docs/.condarc).",
                },
                {
                    name: ["--file"],
                    description: "Write to the given file.",
                    args: {
                        name: "Target File",
                        template: "filepaths",
                    },
                },
                {
                    name: ["--show"],
                    description: "Display configuration values as calculated and compiled. If no arguments given, show information for all configuration values.",
                    args: {
                        name: "Configuration values",
                        isOptional: true,
                        variadic: true,
                        generators: getCondaConfigs,
                    },
                },
                {
                    name: ["--show-sources"],
                    description: "Display all identified configuration sources.",
                },
                {
                    name: ["--validate"],
                    description: "Validate all configuration sources.",
                },
                {
                    name: ["--describe"],
                    description: "Describe given configuration parameters. If no arguments given, show information for all configuration parameters.",
                    args: {
                        name: "Configuration values",
                        isOptional: true,
                        variadic: true,
                        generators: getCondaConfigs,
                    },
                },
                {
                    name: ["--write-default"],
                    description: "Write the default configuration to a file. Equivalent to conda config --describe > ~/.condarc.",
                },
                {
                    name: ["--get"],
                    description: "Get a configuration value.",
                    args: [
                        {
                            name: "key",
                            isOptional: true,
                            variadic: true,
                        },
                    ],
                },
                {
                    name: ["--append"],
                    description: "Add one configuration value to the end of a list key.",
                    args: [
                        {
                            name: "key",
                        },
                        {
                            name: "value",
                        },
                    ],
                },
                {
                    name: ["--prepend, --add"],
                    description: "Add one configuration value to the beginning of a list key.",
                    args: [
                        {
                            name: "key",
                        },
                        {
                            name: "value",
                        },
                    ],
                },
                {
                    name: ["--set"],
                    description: "Set a boolean or string key",
                    args: [
                        {
                            name: "key",
                        },
                        {
                            name: "value",
                        },
                    ],
                },
                {
                    name: ["--remove"],
                    description: "Remove a configuration value from a list key. This removes all instances of the value.",
                    args: [
                        {
                            name: "key",
                        },
                        {
                            name: "value",
                        },
                    ],
                },
                {
                    name: ["--remove-key"],
                    description: "Remove a configuration key (and all its values).",
                    args: [
                        {
                            name: "key",
                        },
                    ],
                },
                {
                    name: ["--stdin"],
                    description: "Apply configuration information given in yaml format piped through stdin.",
=======
                { name: ["-q, --quiet"], description: "Do not display progress bar." },
                {
                    name: ["-v, --verbose"],
                    description: "Can be used multiple times. Once for INFO, twice for DEBUG, three times for TRACE.",
                },
                { name: ["-y, --yes"], description: "Do not ask for confirmation." },
                {
                    name: ["--download-only"],
                    description: "Solve an environment and ensure package caches are populated, but exit prior to unlinking and linking packages into the prefix.",
                },
                {
                    name: ["--show-channel-urls"],
                    description: "Show channel urls. Overrides the value given by conda config --show show_channel_urls.",
                },
            ]),
        },
        {
            name: "help",
            description: "Displays a list of available conda commands and their help strings.",
        },
        {
            name: "info",
            description: "Display information about current conda install.",
            options: [
                { name: ["-a", "--all"], description: "Show all information." },
                { name: ["--base"], description: "Display base environment path." },
                {
                    name: ["-e", "--envs"],
                    description: "List all known conda environments.",
                },
                {
                    name: ["-s", "--system"],
                    description: "List environment variables.",
                },
                {
                    name: ["--unsafe-channels"],
                    description: "Display list of channels with tokens exposed.",
                },
                {
                    name: ["--json"],
                    description: "Report all output as json. Suitable for using conda programmatically.",
                },
                {
                    name: ["-v", "--verbose"],
                    description: "Use once for info, twice for debug, three times for trace.",
                },
                {
                    name: ["-q", "--quiet"],
                    description: "Do not display progress bar.",
>>>>>>> d0857f4... feat: update formatting
                },
            ],
        },
        {
<<<<<<< HEAD
            name: "create",
            description: "Create a new conda environment from a list of specified packages.",
            args: {
                name: "package_spec",
                description: "Packages to install or update in the conda environment",
                isOptional: true,
                variadic: true,
            },
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
            {
              name: "value",
>>>>>>> 02ea794... added some more logic to eslint and changed the glob so we only lint files in the dev/ specs/ and scripts/ folders
=======
=======
>>>>>>> 3879070... feat: re-add built specs and update gitignore
            options: [
=======
            options: __spreadArray(__spreadArray([
>>>>>>> 1e22cf0... [CONDA][PYTHON] Fixed conda and python in accordance with PR comments
                {
                    name: ["--clone"],
                    description: "Path to (or name of) existing local environment.",
                    args: {
                        generators: getCondaEnvironments,
                    },
                },
                {
                    name: ["--file"],
                    description: "Read package versions from the given file. Repeated file specifications can be passed (e.g. --file=file1 --file=file2).",
                    args: {
                        template: "filepaths",
                    },
                },
                {
                    name: ["--dev"],
                    description: "Use sys.executable -m conda in wrapper scripts instead of CONDA_EXE. This is mainly for use during tests where we test new conda source against old Python versions.",
<<<<<<< HEAD
                },
                { name: ["-n, --name"],
                    description: "Name of environment.",
                    args: {}
                },
                {
                    name: ["-p, --prefix"],
                    description: "Full path to environment location (i.e. prefix).",
                    args: {},
                },
=======
                }
            ], name_options), [
>>>>>>> 1e22cf0... [CONDA][PYTHON] Fixed conda and python in accordance with PR comments
                {
                    name: ["-c, --channel"],
                    description: "they are given (including local directories using the 'file://' syntax or simply a path like '/home/conda/mychan' or '../mychan'). Then, the defaults or channels from .condarc are searched (unless --override-channels is given). You can use 'defaults' to get the default packages for conda. You can also use any name and the .condarc channel_alias value will be prepended. The default channel_alias is http://conda.anaconda.org/.",
                    args: {},
                },
                {
                    name: ["--use-local"],
                    description: "Use locally built packages. Identical to '-c local'.",
                },
                {
                    name: ["--override-channels"],
                    description: "Do not search default or .condarc channels. Requires --channel.",
                },
                {
                    name: ["--repodata-fn"],
                    description: "Specify name of repodata on remote server. Conda will try whatever you specify, but will ultimately fall back to repodata.json if your specs are not satisfiable with what you specify here. This is used to employ repodata that is reduced in time scope. You may pass this flag more than once. Leftmost entries are tried first, and the fallback to repodata.json is added for you automatically.",
                    args: {},
                },
                {
                    name: ["--strict-channel-priority"],
                    description: "Packages in lower priority channels are not considered if a package with the same name appears in a higher priority channel.",
                },
                {
                    name: ["--no-channel-priority"],
                    description: "Package version takes precedence over channel priority. Overrides the value given by conda config --show channel_priority.",
                },
                {
                    name: ["--no-deps"],
                    description: "Do not install, update, remove, or change dependencies. This WILL lead to broken environments and inconsistent behavior. Use at your own risk.",
                    isDangerous: true,
                },
                { name: ["--only-deps"], description: "Only install dependencies." },
                { name: ["--no-pin"], description: "Ignore pinned file." },
                {
                    name: ["--no-default-packages"],
                    description: "Ignore create_default_packages in the .condarc file.",
                },
                {
                    name: ["--copy"],
                    description: "Install all packages using copies instead of hard- or soft-linking.",
                },
                {
                    name: ["-C, --use-index-cache"],
                    description: "Use cache of channel index files, even if it has expired.",
                },
                {
                    name: ["-k, --insecure"],
                    description: "Allow conda to perform insecure SSL connections and transfers. Equivalent to setting 'ssl_verify' to 'false'.",
                },
                {
                    name: ["--offline"],
                    description: "Offline mode. Don't connect to the Internet.",
                },
                {
                    name: ["-d, --dry-run"],
                    description: "Only display what would have been done.",
                },
                {
                    name: ["--json"],
                    description: "Report all output as json. Suitable for using conda programmatically.",
                },
                { name: ["-q, --quiet"], description: "Do not display progress bar." },
                {
                    name: ["-v, --verbose"],
                    description: "Can be used multiple times. Once for INFO, twice for DEBUG, three times for TRACE.",
                },
                { name: ["-y, --yes"], description: "Do not ask for confirmation." },
                {
                    name: ["--download-only"],
                    description: "Solve an environment and ensure package caches are populated, but exit prior to unlinking and linking packages into the prefix.",
                },
                {
                    name: ["--show-channel-urls"],
                    description: "Show channel urls. Overrides the value given by conda config --show show_channel_urls.",
                },
            ]),
        },
        {
            name: "help",
            description: "Displays a list of available conda commands and their help strings.",
        },
        {
            name: "info",
            description: "Display information about current conda install.",
            options: [
                { name: ["-a", "--all"], description: "Show all information." },
                { name: ["--base"], description: "Display base environment path." },
                {
                    name: ["-e", "--envs"],
                    description: "List all known conda environments.",
                },
                {
                    name: ["-s", "--system"],
                    description: "List environment variables.",
                },
                {
                    name: ["--unsafe-channels"],
                    description: "Display list of channels with tokens exposed.",
                },
                {
                    name: ["--json"],
                    description: "Report all output as json. Suitable for using conda programmatically.",
                },
                {
                    name: ["-v", "--verbose"],
                    description: "Use once for info, twice for debug, three times for trace.",
                },
                {
                    name: ["-q", "--quiet"],
                    description: "Do not display progress bar.",
                },
            ],
        },
        {
            name: "init",
            description: "Initialize conda for shell interaction. [Experimental]",
        },
        {
=======
            name: "init",
            description: "Initialize conda for shell interaction. [Experimental]",
        },
        {
>>>>>>> d0857f4... feat: update formatting
            name: "install",
            description: "Installs a list of packages into a specified conda environment.",
            args: {
                name: "package spec",
                description: "Packages to install or update in the conda environment.",
                variadic: true,
<<<<<<< HEAD
<<<<<<< HEAD
                generators: getAllCondaPackages,
<<<<<<< HEAD
>>>>>>> a09fa69... removed linting from all js specs in specs folder
=======
>>>>>>> 3879070... feat: re-add built specs and update gitignore
=======
                //generators: getAllCondaPackages,
>>>>>>> e9001c6... Add subcommands, arguments, and an environment generator to Conda
            },
            options: __spreadArray(__spreadArray([
                {
                    name: ["--revision"],
                    description: "Revert to the specified REVISION.",
                    args: {},
                },
                {
                    name: ["--file"],
                    description: "Read package versions from the given file. Repeated file specifications can be passed (e.g. --file=file1 --file=file2).",
                    args: {
                        template: "filepaths",
                    },
                },
                {
                    name: ["--dev"],
                    description: "Use sys.executable -m conda in wrapper scripts instead of CONDA_EXE. This is mainly for use during tests where we test new conda source against old Python versions.",
                }
            ], name_options), [
                {
                    name: ["-c, --channel"],
                    description: "they are given (including local directories using the 'file://' syntax or simply a path like '/home/conda/mychan' or '../mychan'). Then, the defaults or channels from .condarc are searched (unless --override-channels is given). You can use 'defaults' to get the default packages for conda. You can also use any name and the .condarc channel_alias value will be prepended. The default channel_alias is http://conda.anaconda.org/.",
                    args: {},
                },
                {
                    name: ["--use-local"],
                    description: "Use locally built packages. Identical to '-c local'.",
                },
                {
                    name: ["--override-channels"],
                    description: "Do not search default or .condarc channels. Requires --channel.",
                },
                {
                    name: ["--repodata-fn"],
                    description: "Specify name of repodata on remote server. Conda will try whatever you specify, but will ultimately fall back to repodata.json if your specs are not satisfiable with what you specify here. This is used to employ repodata that is reduced in time scope. You may pass this flag more than once. Leftmost entries are tried first, and the fallback to repodata.json is added for you automatically.",
                    args: {},
                },
                {
                    name: ["--strict-channel-priority"],
                    description: "Packages in lower priority channels are not considered if a package with the same name appears in a higher priority channel.",
                },
                {
                    name: ["--no-channel-priority"],
                    description: "Package version takes precedence over channel priority. Overrides the value given by conda config --show channel_priority.",
                },
                {
                    name: ["--no-deps"],
                    description: "Do not install, update, remove, or change dependencies. This WILL lead to broken environments and inconsistent behavior. Use at your own risk.",
                },
                { name: ["--only-deps"], description: "Only install dependencies." },
                { name: ["--no-pin"], description: "Ignore pinned file." },
                {
                    name: ["--force-reinstall"],
                    description: "Ensure that any user-requested package for the current operation is uninstalled and reinstalled, even if that package already exists in the environment.",
                },
                {
                    name: ["--freeze-installed", "--no-update-deps"],
                    description: "Do not update or change already-installed dependencies.",
                },
                { name: ["--update-deps"], description: "Update dependencies." },
                {
                    name: ["-S", "--satisfied-skip-solve"],
                    description: "Exit early and do not run the solver if the requested specs are satisfied. Also skips aggressive updates as configured by 'aggressive_update_packages'. Similar to the default behavior of 'pip install'.",
                },
                {
                    name: ["--update-all", "--all"],
                    description: "Update all installed packages in the environment.",
                },
                {
                    name: ["--update-specs"],
                    description: "Update based on provided specifications.",
                },
                {
                    name: ["--copy"],
                    description: "Install all packages using copies instead of hard- or soft-linking.",
                },
                {
                    name: ["-m", "--mkdir"],
                    description: "Create the environment directory if necessary.",
                },
                {
                    name: ["--clobber"],
                    description: "Allow clobbering of overlapping file paths within packages, and suppress related warnings.",
                },
                {
                    name: ["-C", "--use-index-cache"],
                    description: "Use cache of channel index files, even if it has expired.",
                },
                {
                    name: ["-k", "--insecure"],
                    description: "Allow conda to perform insecure SSL connections and transfers. Equivalent to setting 'ssl_verify' to 'false'.",
                },
                {
                    name: ["--offline"],
                    description: "Offline mode. Don't connect to the Internet.",
                },
                {
                    name: ["-d", "--dry-run"],
                    description: "Only display what would have been done.",
                },
                {
                    name: ["--json"],
                    description: "Report all output as json. Suitable for using conda programmatically.",
                },
                {
                    name: ["-q", "--quiet"],
                    description: "Do not display progress bar.",
                },
                {
                    name: ["-v", "--verbose"],
                    description: "Can be used multiple times. Once for INFO, twice for DEBUG, three times for TRACE.",
                },
                { name: ["-y", "--yes"], description: "Do not ask for confirmation." },
                {
                    name: ["--download-only"],
                    description: "Solve an environment and ensure package caches are populated, but exit prior to unlinking and linking packages into the prefix.",
                },
                {
                    name: ["--show-channel-urls"],
                    description: "Show channel urls. Overrides the value given by conda config --show show_channel_urls.",
                },
            ]),
        },
        {
            name: "list",
            description: "List linked packages in a conda environment.",
            args: {
                name: "regex",
                description: "List only packages matching this regular expression.",
                isOptional: true,
            },
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
            options: [
                {
                    name: ['--show-channel-urls'],
                    description: 'Show channel urls. Overrides the value given by conda config --show show_channel_urls.',
                },
                {
                    name: ['-c', '--canonical'],
                    description: 'Output canonical names of packages only. Implies --no-pip.',
                },
                { name: ['-f', '--full-name'], description: 'Only search for full names, i.e., ^<regex>$.' },
                {
                    name: ['--explicit'],
                    description: 'List explicitly all installed conda packaged with URL (output may be used by conda create --file).',
                },
                {
                    name: ['-e', '--export'],
                    description: 'Output requirement string only (output may be used by conda create --file).',
                },
                { name: ['-r', '--revisions'], description: 'List the revision history and exit.' },
                { name: ['--no-pip'], description: 'Do not include pip-only installed packages.' },
                { name: ['-n', '--name'], description: 'Name of environment.' },
                { name: ['-p', '--prefix'], description: 'Full path to environment location (i.e. prefix).' },
                {
                    name: ['--json'],
                    description: 'Report all output as json. Suitable for using conda programmatically.',
                },
                {
                    name: ['-v', '--verbose'],
                    description: 'Use once for info, twice for debug, three times for trace.',
                },
                { name: ['-q', '--quiet'], description: 'Do not display progress bar.' },
            ],
        },
        {
            name: 'package',
            description: 'Low-level conda package utility. (EXPERIMENTAL)',
            options: [
                {
                    name: ['-w', '--which'],
                    description: 'Given some PATH print which conda package the file came from.',
                },
                { name: ['-r', '--reset'], description: 'Remove all untracked files and exit.' },
                { name: ['-u', '--untracked'], description: 'Display all untracked files and exit.' },
                { name: ['--pkg-name'], description: 'Package name of the created package.' },
                { name: ['--pkg-version'], description: 'Package version of the created package.' },
                { name: ['--pkg-build'], description: 'Package build number of the created package.' },
                { name: ['-n', '--name'], description: 'Name of environment.' },
                { name: ['-p', '--prefix'], description: 'Full path to environment location (i.e. prefix).' },
            ],
        },
        {
            name: 'remove',
            description: 'Remove a list of packages from a specified conda environment.',
            args: {
<<<<<<< HEAD
<<<<<<< HEAD
                name: 'package name',
                variadic: true,
                generators: getInstalledPackages,
=======
                name: "package name",
                isVariadic: true,
                generators: getInstalledPackages
>>>>>>> 7980ce4... refactor: Fix broken specs
=======
                name: 'package name',
                variadic: true,
                generators: getInstalledPackages,
>>>>>>> e321ca1... feat: update all scripts and  move to ts
            },
            options: [
                {
                    name: ['--dev'],
                    description: 'Use sys.executable -m conda in wrapper scripts instead of CONDA_EXE. This is mainly for use during tests where we test new conda source against old Python versions.',
                },
                { name: ['-n', '--name'], description: 'Name of environment.' },
                { name: ['-p', '--prefix'], description: 'Full path to environment location (i.e. prefix).' },
                {
                    name: ['-c', '--channel'],
                    description: "they are given (including local directories using the 'file://' syntax or simply a path like '/home/conda/mychan' or '../mychan'). Then, the defaults or channels from .condarc are searched (unless --override-channels is given). You can use 'defaults' to get the default packages for conda. You can also use any name and the .condarc channel_alias value will be prepended. The default channel_alias is http://conda.anaconda.org/.",
                },
                { name: ['--use-local'], description: "Use locally built packages. Identical to '-c local'." },
                {
                    name: ['--override-channels'],
                    description: 'Do not search default or .condarc channels. Requires --channel.',
                },
                {
                    name: ['--repodata-fn'],
                    description: 'Specify name of repodata on remote server. Conda will try whatever you specify, but will ultimately fall back to repodata.json if your specs are not satisfiable with what you specify here. This is used to employ repodata that is reduced in time scope. You may pass this flag more than once. Leftmost entries are tried first, and the fallback to repodata.json is added for you automatically.',
                },
                { name: ['--all'], description: 'Remove all packages, i.e., the entire environment.' },
                { name: ['--features'], description: 'Remove features (instead of packages).' },
                {
                    name: ['--force-remove, --force'],
                    description: 'Forces removal of a package without removing packages that depend on it. Using this option will usually leave your environment in a broken and inconsistent state.',
                },
                { name: ['--no-pin'], description: 'Ignore pinned file.' },
                {
                    name: ['-C', '--use-index-cache'],
                    description: 'Use cache of channel index files, even if it has expired.',
                },
                {
                    name: ['-k', '--insecure'],
                    description: "Allow conda to perform insecure SSL connections and transfers. Equivalent to setting 'ssl_verify' to 'false'.",
                },
                { name: ['--offline'], description: "Offline mode. Don't connect to the Internet." },
                { name: ['-d', '--dry-run'], description: 'Only display what would have been done.' },
                {
                    name: ['--json'],
                    description: 'Report all output as json. Suitable for using conda programmatically.',
                },
                { name: ['-q', '--quiet'], description: 'Do not display progress bar.' },
                {
                    name: ['-v', '--verbose'],
                    description: 'Can be used multiple times. Once for INFO, twice for DEBUG, three times for TRACE.',
                },
                { name: ['-y', '--yes'], description: 'Do not ask for confirmation.' },
            ],
        },
        {
            name: 'uninstall',
            description: 'Alias for conda remove.',
            args: {
<<<<<<< HEAD
<<<<<<< HEAD
                name: 'package name',
                variadic: true,
                generators: getInstalledPackages,
=======
                name: "package name",
                isVariadic: true,
                generators: getInstalledPackages
>>>>>>> 7980ce4... refactor: Fix broken specs
=======
                name: 'package name',
                variadic: true,
                generators: getInstalledPackages,
>>>>>>> e321ca1... feat: update all scripts and  move to ts
=======
            {
              name: "value",
=======
                //generators: getAllCondaPackages,
=======
          name: ["-i", "--index-cache"],
          description: "Remove index cache.",
        },
        {
          name: ["-p", "--packages"],
          description: "Remove unused packages from writable package caches. ",
        },
        {
          name: ["-t", "--tarballs"],
          description: "Remove cached package tarballs.",
        },
        {
          name: ["-f", "--force-pkgs-dirs"],
          description: "Remove all writable package caches.",
        },
        {
          name: ["-c", "--tempfiles"],
          description:
            "Remove temporary files that could not be deleted earlier due to being in-use. Argument is path(s) to prefix(es) where files should be found and removed.",
          args: {
            template: "filepaths",
            variadic: true,
          },
        },
        {
          name: ["-d", "--dry-run"],
          description: "Only display what would have been done.",
        },
        {
          name: ["--json"],
          description:
            "Report all output as json. Suitable for using conda programmatically.",
        },
        {
          name: ["-q", "--quiet"],
          description: "Do not display progress bar.",
        },
        {
          name: ["-v", "--verbose"],
          description:
            "Can be used multiple times. Once for INFO, twice for DEBUG, three times for TRACE.",
        },
        {
          name: ["-y", "--yes"],
          description: "Do not ask for confirmation.",
        },
      ],
    },
    {
      name: "compare",
      description: "Compare packages between conda environments.",
      args: {
        name: "file",
        description:
          "Path to the environment file that is to be compared against",
        template: "filepaths",
      },
      options: __spreadArray(__spreadArray([], name_options), [
        {
          name: ["-h", "--help"],
          description: "Show this help message and exit.",
        },
        {
          name: ["--json"],
          description:
            "Report all output as json. Suitable for using conda programmatically.",
        },
=======
    name: "conda",
    description: "Conda package manager",
    subcommands: [
>>>>>>> 8601a08... feat: add built files
        {
            name: "activate",
            description: "Activate an environment",
            args: {
                generators: getCondaEnvironments,
            },
            options: [
                {
                    name: ["--stack"],
                    description: "Stack the environment being activated on top of the previous active environment.",
                },
                {
                    name: ["--no-stack"],
                    description: "Do not stack the environment. Overrides 'auto_stack' setting",
                },
            ],
        },
        {
            name: "deactivate",
            description: "Deactivate an environment",
        },
        {
            name: "clean",
            description: "Remove unused packages and caches.",
            args: {},
            options: [
                {
                    name: ["-a", "--all"],
                    description: "Remove index cache, lock files, unused cache packages, and tarballs.",
                },
                {
                    name: ["-i", "--index-cache"],
                    description: "Remove index cache.",
                },
                {
                    name: ["-p", "--packages"],
                    description: "Remove unused packages from writable package caches. ",
                },
                {
                    name: ["-t", "--tarballs"],
                    description: "Remove cached package tarballs.",
                },
                {
                    name: ["-f", "--force-pkgs-dirs"],
                    description: "Remove all writable package caches.",
                },
                {
                    name: ["-c", "--tempfiles"],
                    description: "Remove temporary files that could not be deleted earlier due to being in-use. Argument is path(s) to prefix(es) where files should be found and removed.",
                    args: {
                        template: "filepaths",
                        variadic: true,
                    },
                },
                {
                    name: ["-d", "--dry-run"],
                    description: "Only display what would have been done.",
                },
                {
                    name: ["--json"],
                    description: "Report all output as json. Suitable for using conda programmatically.",
                },
                {
                    name: ["-q", "--quiet"],
                    description: "Do not display progress bar.",
                },
                {
                    name: ["-v", "--verbose"],
                    description: "Can be used multiple times. Once for INFO, twice for DEBUG, three times for TRACE.",
                },
                {
                    name: ["-y", "--yes"],
                    description: "Do not ask for confirmation.",
                },
            ],
        },
        {
<<<<<<< HEAD
          name: ["--get"],
          description: "Get a configuration value.",
          args: [
            {
              name: "key",
              isOptional: true,
              variadic: true,
>>>>>>> 39a91f1... feat: apply new rule to files
=======
            name: "compare",
            description: "Compare packages between conda environments.",
            args: {
                name: "file",
                description: "Path to the environment file that is to be compared against",
                template: "filepaths",
>>>>>>> 8601a08... feat: add built files
            },
            options: __spreadArray(__spreadArray([], name_options), [
                {
                    name: ["-h", "--help"],
                    description: "Show this help message and exit.",
                },
                {
                    name: ["--json"],
                    description: "Report all output as json. Suitable for using conda programmatically.",
                },
                {
                    name: ["-v", "--verbose"],
                    description: "Use once for info, twice for debug, three times for trace.",
                },
                {
                    name: ["-q", "--quiet"],
                    description: "Do not display progress bar.",
                },
            ]),
        },
        {
            name: "config",
            description: "Modify configuration values in .condarc. This is modeled after the git config command. Writes to the user .condarc file by default.",
            options: [
                {
                    name: ["--json"],
                    description: "Report all output as json. Suitable for using conda programmatically.",
                },
                {
                    name: ["-v, --verbose"],
                    description: "Use once for info, twice for debug, three times for trace.",
                },
                { name: ["-q, --quiet"], description: "Do not display progress bar." },
                {
                    name: ["--system"],
                    description: "Write to the system .condarc file at '/home/docs/checkouts/readthedocs.org/user_builds/continuumio-conda/conda/latest/.condarc'.",
                },
                {
                    name: ["--env"],
                    description: "Write to the active conda environment .condarc file (<no active environment>). If no environment is active, write to the user config file (/home/docs/.condarc).",
                },
                {
                    name: ["--file"],
                    description: "Write to the given file.",
                    args: {
                        name: "Target File",
                        template: "filepaths",
                    },
                },
                {
                    name: ["--show"],
                    description: "Display configuration values as calculated and compiled. If no arguments given, show information for all configuration values.",
                    args: {
                        name: "Configuration values",
                        isOptional: true,
                        variadic: true,
                        generators: getCondaConfigs,
                    },
                },
                {
                    name: ["--show-sources"],
                    description: "Display all identified configuration sources.",
                },
                {
                    name: ["--validate"],
                    description: "Validate all configuration sources.",
                },
                {
                    name: ["--describe"],
                    description: "Describe given configuration parameters. If no arguments given, show information for all configuration parameters.",
                    args: {
                        name: "Configuration values",
                        isOptional: true,
                        variadic: true,
                        generators: getCondaConfigs,
                    },
                },
                {
                    name: ["--write-default"],
                    description: "Write the default configuration to a file. Equivalent to conda config --describe > ~/.condarc.",
                },
                {
                    name: ["--get"],
                    description: "Get a configuration value.",
                    args: [
                        {
                            name: "key",
                            isOptional: true,
                            variadic: true,
                        },
                    ],
                },
                {
                    name: ["--append"],
                    description: "Add one configuration value to the end of a list key.",
                    args: [
                        {
                            name: "key",
                        },
                        {
                            name: "value",
                        },
                    ],
                },
                {
                    name: ["--prepend, --add"],
                    description: "Add one configuration value to the beginning of a list key.",
                    args: [
                        {
                            name: "key",
                        },
                        {
                            name: "value",
                        },
                    ],
                },
                {
                    name: ["--set"],
                    description: "Set a boolean or string key",
                    args: [
                        {
                            name: "key",
                        },
                        {
                            name: "value",
                        },
                    ],
                },
                {
                    name: ["--remove"],
                    description: "Remove a configuration value from a list key. This removes all instances of the value.",
                    args: [
                        {
                            name: "key",
                        },
                        {
                            name: "value",
                        },
                    ],
                },
                {
                    name: ["--remove-key"],
                    description: "Remove a configuration key (and all its values).",
                    args: [
                        {
                            name: "key",
                        },
                    ],
                },
                {
                    name: ["--stdin"],
                    description: "Apply configuration information given in yaml format piped through stdin.",
                },
            ],
        },
        {
<<<<<<< HEAD
          name: ["--append"],
          description: "Add one configuration value to the end of a list key.",
          args: [
            {
              name: "key",
            },
<<<<<<< HEAD
            options: __spreadArray(__spreadArray([
                {
                    name: ["--show-channel-urls"],
                    description: "Show channel urls. Overrides the value given by conda config --show show_channel_urls.",
                },
                {
                    name: ["-c", "--canonical"],
                    description: "Output canonical names of packages only. Implies --no-pip.",
                },
                {
                    name: ["-f", "--full-name"],
                    description: "Only search for full names, i.e., ^<regex>$.",
                },
                {
                    name: ["--explicit"],
                    description: "List explicitly all installed conda packaged with URL (output may be used by conda create --file).",
                },
                {
                    name: ["--md5"],
                    description: "Add MD5 hashsum when using --explicit.",
                },
                {
                    name: ["-e", "--export"],
                    description: "Output requirement string only (output may be used by conda create --file).",
                },
                {
                    name: ["-r", "--revisions"],
                    description: "List the revision history and exit.",
                },
                {
                    name: ["--no-pip"],
                    description: "Do not include pip-only installed packages.",
                }
            ], name_options), [
                {
                    name: ["--json"],
                    description: "Report all output as json. Suitable for using conda programmatically.",
                },
                {
                    name: ["-v", "--verbose"],
                    description: "Use once for info, twice for debug, three times for trace.",
                },
                {
                    name: ["-q", "--quiet"],
                    description: "Do not display progress bar.",
                },
            ]),
        },
        {
            name: "package",
            description: "Low-level conda package utility. (EXPERIMENTAL)",
            options: __spreadArray([
                {
                    name: ["-w", "--which"],
                    description: "Given some PATH print which conda package the file came from.",
                    args: {
                        name: "Path",
                        variadic: true,
                    },
                },
                {
                    name: ["-r", "--reset"],
                    description: "Remove all untracked files and exit.",
                },
                {
                    name: ["-u", "--untracked"],
                    description: "Display all untracked files and exit.",
                },
                {
                    name: ["--pkg-name"],
                    description: "Package name of the created package.",
                    args: {},
                },
                {
                    name: ["--pkg-version"],
                    description: "Package version of the created package.",
                    args: {},
                },
                {
                    name: ["--pkg-build"],
                    description: "Package build number of the created package.",
                    args: {},
                }
            ], name_options),
        },
        {
            name: "remove",
            description: "Remove a list of packages from a specified conda environment.",
            args: {
                name: "package name",
                variadic: true,
                generators: getInstalledPackages,
>>>>>>> d0857f4... feat: update formatting
            },
            options: __spreadArray([], remove_options),
        },
        {
<<<<<<< HEAD
          name: ["--set"],
          description: "Set a boolean or string key",
          args: [
            {
              name: "key",
>>>>>>> 02ea794... added some more logic to eslint and changed the glob so we only lint files in the dev/ specs/ and scripts/ folders
=======
=======
>>>>>>> 3879070... feat: re-add built specs and update gitignore
            options: [
=======
            options: __spreadArray(__spreadArray([
>>>>>>> 1e22cf0... [CONDA][PYTHON] Fixed conda and python in accordance with PR comments
                {
                    name: ["--show-channel-urls"],
                    description: "Show channel urls. Overrides the value given by conda config --show show_channel_urls.",
                },
                {
                    name: ["-c", "--canonical"],
                    description: "Output canonical names of packages only. Implies --no-pip.",
                },
                {
                    name: ["-f", "--full-name"],
                    description: "Only search for full names, i.e., ^<regex>$.",
                },
                {
                    name: ["--explicit"],
                    description: "List explicitly all installed conda packaged with URL (output may be used by conda create --file).",
                },
                {
                    name: ["--md5"],
                    description: "Add MD5 hashsum when using --explicit.",
                },
                {
                    name: ["-e", "--export"],
                    description: "Output requirement string only (output may be used by conda create --file).",
                },
                {
                    name: ["-r", "--revisions"],
                    description: "List the revision history and exit.",
                },
                {
                    name: ["--no-pip"],
                    description: "Do not include pip-only installed packages.",
                }
            ], name_options), [
                {
                    name: ["--json"],
                    description: "Report all output as json. Suitable for using conda programmatically.",
                },
                {
                    name: ["-v", "--verbose"],
                    description: "Use once for info, twice for debug, three times for trace.",
                },
                {
                    name: ["-q", "--quiet"],
                    description: "Do not display progress bar.",
                },
            ]),
        },
        {
            name: "package",
            description: "Low-level conda package utility. (EXPERIMENTAL)",
            options: __spreadArray([
                {
                    name: ["-w", "--which"],
                    description: "Given some PATH print which conda package the file came from.",
                    args: {
                        name: "Path",
                        variadic: true,
                    },
                },
                {
                    name: ["-r", "--reset"],
                    description: "Remove all untracked files and exit.",
                },
                {
                    name: ["-u", "--untracked"],
                    description: "Display all untracked files and exit.",
                },
                {
                    name: ["--pkg-name"],
                    description: "Package name of the created package.",
                    args: {},
                },
                {
                    name: ["--pkg-version"],
                    description: "Package version of the created package.",
                    args: {},
                },
                {
                    name: ["--pkg-build"],
                    description: "Package build number of the created package.",
                    args: {},
                }
            ], name_options),
        },
        {
            name: "remove",
            description: "Remove a list of packages from a specified conda environment.",
=======
            name: "uninstall",
            description: "Alias for conda remove.",
>>>>>>> d0857f4... feat: update formatting
            args: {
                name: "package name",
                variadic: true,
                generators: getInstalledPackages,
=======
            {
              name: "value",
>>>>>>> 39a91f1... feat: apply new rule to files
=======
            name: "create",
            description: "Create a new conda environment from a list of specified packages.",
            args: {
                name: "package_spec",
                description: "Packages to install or update in the conda environment",
                isOptional: true,
                variadic: true,
>>>>>>> 8601a08... feat: add built files
            },
            options: __spreadArray(__spreadArray([
                {
                    name: ["--clone"],
                    description: "Path to (or name of) existing local environment.",
                    args: {
                        generators: getCondaEnvironments,
                    },
                },
                {
                    name: ["--file"],
                    description: "Read package versions from the given file. Repeated file specifications can be passed (e.g. --file=file1 --file=file2).",
                    args: {
                        template: "filepaths",
                    },
                },
                {
                    name: ["--dev"],
                    description: "Use sys.executable -m conda in wrapper scripts instead of CONDA_EXE. This is mainly for use during tests where we test new conda source against old Python versions.",
                }
            ], name_options), [
                {
                    name: ["-c, --channel"],
                    description: "they are given (including local directories using the 'file://' syntax or simply a path like '/home/conda/mychan' or '../mychan'). Then, the defaults or channels from .condarc are searched (unless --override-channels is given). You can use 'defaults' to get the default packages for conda. You can also use any name and the .condarc channel_alias value will be prepended. The default channel_alias is http://conda.anaconda.org/.",
                    args: {},
                },
                {
                    name: ["--use-local"],
                    description: "Use locally built packages. Identical to '-c local'.",
                },
                {
                    name: ["--override-channels"],
                    description: "Do not search default or .condarc channels. Requires --channel.",
                },
                {
                    name: ["--repodata-fn"],
                    description: "Specify name of repodata on remote server. Conda will try whatever you specify, but will ultimately fall back to repodata.json if your specs are not satisfiable with what you specify here. This is used to employ repodata that is reduced in time scope. You may pass this flag more than once. Leftmost entries are tried first, and the fallback to repodata.json is added for you automatically.",
                    args: {},
                },
                {
                    name: ["--strict-channel-priority"],
                    description: "Packages in lower priority channels are not considered if a package with the same name appears in a higher priority channel.",
                },
                {
                    name: ["--no-channel-priority"],
                    description: "Package version takes precedence over channel priority. Overrides the value given by conda config --show channel_priority.",
                },
                {
                    name: ["--no-deps"],
                    description: "Do not install, update, remove, or change dependencies. This WILL lead to broken environments and inconsistent behavior. Use at your own risk.",
                    isDangerous: true,
                },
                { name: ["--only-deps"], description: "Only install dependencies." },
                { name: ["--no-pin"], description: "Ignore pinned file." },
                {
                    name: ["--no-default-packages"],
                    description: "Ignore create_default_packages in the .condarc file.",
                },
                {
                    name: ["--copy"],
                    description: "Install all packages using copies instead of hard- or soft-linking.",
                },
                {
                    name: ["-C, --use-index-cache"],
                    description: "Use cache of channel index files, even if it has expired.",
                },
                {
                    name: ["-k, --insecure"],
                    description: "Allow conda to perform insecure SSL connections and transfers. Equivalent to setting 'ssl_verify' to 'false'.",
                },
                {
                    name: ["--offline"],
                    description: "Offline mode. Don't connect to the Internet.",
                },
                {
                    name: ["-d, --dry-run"],
                    description: "Only display what would have been done.",
                },
                {
                    name: ["--json"],
                    description: "Report all output as json. Suitable for using conda programmatically.",
                },
                { name: ["-q, --quiet"], description: "Do not display progress bar." },
                {
                    name: ["-v, --verbose"],
                    description: "Can be used multiple times. Once for INFO, twice for DEBUG, three times for TRACE.",
                },
                { name: ["-y, --yes"], description: "Do not ask for confirmation." },
                {
                    name: ["--download-only"],
                    description: "Solve an environment and ensure package caches are populated, but exit prior to unlinking and linking packages into the prefix.",
                },
                {
                    name: ["--show-channel-urls"],
                    description: "Show channel urls. Overrides the value given by conda config --show show_channel_urls.",
                },
            ]),
        },
        {
            name: "help",
            description: "Displays a list of available conda commands and their help strings.",
        },
        {
            name: "info",
            description: "Display information about current conda install.",
            options: [
                { name: ["-a", "--all"], description: "Show all information." },
                { name: ["--base"], description: "Display base environment path." },
                {
                    name: ["-e", "--envs"],
                    description: "List all known conda environments.",
                },
                {
                    name: ["-s", "--system"],
                    description: "List environment variables.",
                },
                {
                    name: ["--unsafe-channels"],
                    description: "Display list of channels with tokens exposed.",
                },
                {
                    name: ["--json"],
                    description: "Report all output as json. Suitable for using conda programmatically.",
                },
                {
                    name: ["-v", "--verbose"],
                    description: "Use once for info, twice for debug, three times for trace.",
                },
                {
                    name: ["-q", "--quiet"],
                    description: "Do not display progress bar.",
                },
            ],
        },
        {
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
            name: "uninstall",
            description: "Alias for conda remove.",
            args: {
                name: "package name",
                variadic: true,
                generators: getInstalledPackages,
<<<<<<< HEAD
>>>>>>> a09fa69... removed linting from all js specs in specs folder
=======
>>>>>>> 3879070... feat: re-add built specs and update gitignore
=======
          name: ["--prepend, --add"],
          description:
            "Add one configuration value to the beginning of a list key.",
          args: [
            {
              name: "key",
>>>>>>> 39a91f1... feat: apply new rule to files
            },
            {
              name: "value",
            },
          ],
        },
        {
          name: ["--set"],
          description: "Set a boolean or string key",
          args: [
            {
              name: "key",
            },
<<<<<<< HEAD
=======
            name: "run",
            description: "Run an executable in a conda environment. [Experimental]",
            args: {
                name: "executable",
                template: "filepaths",
            },
>>>>>>> d0857f4... feat: update formatting
            options: __spreadArray(__spreadArray([], name_options), [
                {
                    name: ["-v", "--verbose"],
                    description: "Use once for info, twice for debug, three times for trace.",
                },
                {
                    name: ["--dev"],
                    description: "Sets `CONDA_EXE` to `python -m conda`, assuming the CWD contains the root of conda development sources.",
                },
                {
                    name: ["--debug-wrapper-scripts"],
                    description: "When this is set, where implemented, the shell wrapper scripts will echo to stderr a lot of debugging information.",
                },
                {
                    name: ["--cwd"],
                    description: "Current working directory for command to run in. Defaults to cwd",
                    args: {},
                },
                {
                    name: ["--no-capture-output"],
                    description: "Don't capture stdout/stderr",
                },
                {
                    name: ["--live-stream"],
                    description: "Display the output for the subprocess stdout and stderr on real time.",
                },
            ]),
        },
        {
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
            name: 'search',
            description: 'Search for packages and display associated information. The input is a MatchSpec, a query language for conda packages. See examples below.',
            args: { name: 'query' },
            options: [
                {
                    name: ['--envs'],
                    description: "Search all of the current user's environments. If run as Administrator (on Windows) or UID 0 (on unix), search all known environments on the system.",
                },
                { name: ['-i', '--info'], description: 'Provide detailed information about each package.' },
                {
                    name: ['--subdir', '--platform'],
                    description: "Search the given subdir. Should be formatted like 'osx-64', 'linux-32', 'win-64', and so on. The default is to search the current platform.",
                },
                {
                    name: ['-c', '--channel'],
                    description: "they are given (including local directories using the 'file://' syntax or simply a path like '/home/conda/mychan' or '../mychan'). Then, the defaults or channels from .condarc are searched (unless --override-channels is given). You can use 'defaults' to get the default packages for conda. You can also use any name and the .condarc channel_alias value will be prepended. The default channel_alias is http://conda.anaconda.org/.",
                },
                { name: ['--use-local'], description: "Use locally built packages. Identical to '-c local'." },
                {
                    name: ['--override-channels'],
                    description: 'Do not search default or .condarc channels. Requires --channel.',
                },
                {
                    name: ['--repodata-fn'],
                    description: 'Specify name of repodata on remote server. Conda will try whatever you specify, but will ultimately fall back to repodata.json if your specs are not satisfiable with what you specify here. This is used to employ repodata that is reduced in time scope. You may pass this flag more than once. Leftmost entries are tried first, and the fallback to repodata.json is added for you automatically.',
                },
                {
                    name: ['-C', '--use-index-cache'],
                    description: 'Use cache of channel index files, even if it has expired.',
                },
                {
                    name: ['-k', '--insecure'],
                    description: "Allow conda to perform insecure SSL connections and transfers. Equivalent to setting 'ssl_verify' to 'false'.",
                },
                { name: ['--offline'], description: "Offline mode. Don't connect to the Internet." },
                {
                    name: ['--json'],
                    description: 'Report all output as json. Suitable for using conda programmatically.',
                },
                {
                    name: ['-v', '--verbose'],
                    description: 'Use once for info, twice for debug, three times for trace.',
                },
                { name: ['-q', '--quiet'], description: 'Do not display progress bar.' },
            ],
        },
        {
            name: 'update',
            description: 'Updates conda packages to the latest compatible version.',
            args: {
<<<<<<< HEAD
<<<<<<< HEAD
                name: 'package',
                variadic: true,
                generators: getInstalledPackages,
=======
                name: "package",
                isVariadic: true,
                generators: getInstalledPackages
>>>>>>> 7980ce4... refactor: Fix broken specs
=======
                name: 'package',
                variadic: true,
                generators: getInstalledPackages,
>>>>>>> e321ca1... feat: update all scripts and  move to ts
            },
            options: [
                {
                    name: ['--file'],
                    description: 'Read package versions from the given file. Repeated file specifications can be passed (e.g. --file=file1 --file=file2).',
                },
                { name: ['-n', '--name'], description: 'Name of environment.' },
                { name: ['-p', '--prefix'], description: 'Full path to environment location (i.e. prefix).' },
                {
                    name: ['-c', '--channel'],
                    description: "they are given (including local directories using the 'file://' syntax or simply a path like '/home/conda/mychan' or '../mychan'). Then, the defaults or channels from .condarc are searched (unless --override-channels is given). You can use 'defaults' to get the default packages for conda. You can also use any name and the .condarc channel_alias value will be prepended. The default channel_alias is http://conda.anaconda.org/.",
                },
                { name: ['--use-local'], description: "Use locally built packages. Identical to '-c local'." },
                {
                    name: ['--override-channels'],
                    description: 'Do not search default or .condarc channels. Requires --channel.',
                },
                {
                    name: ['--repodata-fn'],
                    description: 'Specify name of repodata on remote server. Conda will try whatever you specify, but will ultimately fall back to repodata.json if your specs are not satisfiable with what you specify here. This is used to employ repodata that is reduced in time scope. You may pass this flag more than once. Leftmost entries are tried first, and the fallback to repodata.json is added for you automatically.',
                },
                {
                    name: ['--strict-channel-priority'],
                    description: 'Packages in lower priority channels are not considered if a package with the same name appears in a higher priority channel.',
                },
                {
                    name: ['--no-channel-priority'],
                    description: 'Package version takes precedence over channel priority. Overrides the value given by conda config --show channel_priority.',
                },
                {
                    name: ['--no-deps'],
                    description: 'Do not install, update, remove, or change dependencies. This WILL lead to broken environments and inconsistent behavior. Use at your own risk.',
                },
                { name: ['--only-deps'], description: 'Only install dependencies.' },
                { name: ['--no-pin'], description: 'Ignore pinned file.' },
                {
                    name: ['--force-reinstall'],
                    description: 'Ensure that any user-requested package for the current operation is uninstalled and reinstalled, even if that package already exists in the environment.',
                },
                {
                    name: ['--freeze-installed', '--no-update-deps'],
                    description: 'Do not update or change already-installed dependencies.',
                },
                { name: ['--update-deps'], description: 'Update dependencies.' },
                {
                    name: ['-S', '--satisfied-skip-solve'],
                    description: "Exit early and do not run the solver if the requested specs are satisfied. Also skips aggressive updates as configured by 'aggressive_update_packages'. Similar to the default behavior of 'pip install'.",
                },
                { name: ['--update-all', '--all'], description: 'Update all installed packages in the environment.' },
                { name: ['--update-specs'], description: 'Update based on provided specifications.' },
                {
                    name: ['--copy'],
                    description: 'Install all packages using copies instead of hard- or soft-linking.',
                },
                {
                    name: ['--clobber'],
                    description: 'Allow clobbering of overlapping file paths within packages, and suppress related warnings.',
                },
                {
                    name: ['-C', '--use-index-cache'],
                    description: 'Use cache of channel index files, even if it has expired.',
                },
                {
                    name: ['-k', '--insecure'],
                    description: "Allow conda to perform insecure SSL connections and transfers. Equivalent to setting 'ssl_verify' to 'false'.",
                },
                { name: ['--offline'], description: "Offline mode. Don't connect to the Internet." },
                { name: ['-d', '--dry-run'], description: 'Only display what would have been done.' },
                {
                    name: ['--json'],
                    description: 'Report all output as json. Suitable for using conda programmatically.',
                },
                { name: ['-q', '--quiet'], description: 'Do not display progress bar.' },
                {
                    name: ['-v', '--verbose'],
                    description: 'Can be used multiple times. Once for INFO, twice for DEBUG, three times for TRACE.',
                },
                { name: ['-y', '--yes'], description: 'Do not ask for confirmation.' },
                {
                    name: ['--download-only'],
                    description: 'Solve an environment and ensure package caches are populated, but exit prior to unlinking and linking packages into the prefix.',
                },
                {
                    name: ['--show-channel-urls'],
                    description: 'Show channel urls. Overrides the value given by conda config --show show_channel_urls.',
=======
=======
>>>>>>> 3879070... feat: re-add built specs and update gitignore
=======
>>>>>>> d0857f4... feat: update formatting
            name: "search",
            description: "Search for packages and display associated information. The input is a MatchSpec, a query language for conda packages. See examples below.",
            args: { name: "query" },
            options: [
                {
                    name: ["--envs"],
                    description: "Search all of the current user's environments. If run as Administrator (on Windows) or UID 0 (on unix), search all known environments on the system.",
                },
                {
                    name: ["-i", "--info"],
                    description: "Provide detailed information about each package.",
                },
                {
                    name: ["--subdir", "--platform"],
                    description: "Search the given subdir. Should be formatted like 'osx-64', 'linux-32', 'win-64', and so on. The default is to search the current platform.",
                    args: {},
                },
                {
                    name: ["-c", "--channel"],
                    description: "they are given (including local directories using the 'file://' syntax or simply a path like '/home/conda/mychan' or '../mychan'). Then, the defaults or channels from .condarc are searched (unless --override-channels is given). You can use 'defaults' to get the default packages for conda. You can also use any name and the .condarc channel_alias value will be prepended. The default channel_alias is http://conda.anaconda.org/.",
                    args: {},
                },
                {
                    name: ["--use-local"],
                    description: "Use locally built packages. Identical to '-c local'.",
                },
                {
                    name: ["--override-channels"],
                    description: "Do not search default or .condarc channels. Requires --channel.",
                },
                {
                    name: ["--repodata-fn"],
                    description: "Specify name of repodata on remote server. Conda will try whatever you specify, but will ultimately fall back to repodata.json if your specs are not satisfiable with what you specify here. This is used to employ repodata that is reduced in time scope. You may pass this flag more than once. Leftmost entries are tried first, and the fallback to repodata.json is added for you automatically.",
                    args: {},
                },
                {
                    name: ["-C", "--use-index-cache"],
                    description: "Use cache of channel index files, even if it has expired.",
                },
                {
                    name: ["-k", "--insecure"],
                    description: "Allow conda to perform insecure SSL connections and transfers. Equivalent to setting 'ssl_verify' to 'false'.",
                },
                {
                    name: ["--offline"],
                    description: "Offline mode. Don't connect to the Internet.",
                },
                {
                    name: ["--json"],
                    description: "Report all output as json. Suitable for using conda programmatically.",
                },
                {
                    name: ["-v", "--verbose"],
                    description: "Use once for info, twice for debug, three times for trace.",
                },
                {
                    name: ["-q", "--quiet"],
                    description: "Do not display progress bar.",
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
        {
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
            name: 'upgrade',
            description: 'Alias for conda update.',
            args: {
<<<<<<< HEAD
<<<<<<< HEAD
                name: 'package',
                variadic: true,
=======
                name: "package",
                isVariadic: true
>>>>>>> 7980ce4... refactor: Fix broken specs
=======
                name: 'package',
                variadic: true,
>>>>>>> e321ca1... feat: update all scripts and  move to ts
=======
=======
            {
              name: "value",
            },
          ],
        },
        {
>>>>>>> 39a91f1... feat: apply new rule to files
          name: ["--remove"],
          description:
            "Remove a configuration value from a list key. This removes all instances of the value.",
          args: [
            {
              name: "key",
<<<<<<< HEAD
            },
            {
              name: "value",
>>>>>>> 02ea794... added some more logic to eslint and changed the glob so we only lint files in the dev/ specs/ and scripts/ folders
=======
=======
>>>>>>> 3879070... feat: re-add built specs and update gitignore
=======
>>>>>>> d0857f4... feat: update formatting
            name: "update",
            description: "Updates conda packages to the latest compatible version.",
            args: {
                name: "package",
                variadic: true,
                suggestions: [
                    { name: "conda", description: "Update conda", icon: "⭐️" },
                ],
                generators: getInstalledPackages,
=======
>>>>>>> 39a91f1... feat: apply new rule to files
=======
            name: "init",
            description: "Initialize conda for shell interaction. [Experimental]",
        },
        {
            name: "install",
            description: "Installs a list of packages into a specified conda environment.",
            args: {
                name: "package spec",
                description: "Packages to install or update in the conda environment.",
                variadic: true,
                //generators: getAllCondaPackages,
            },
            options: __spreadArray(__spreadArray([
                {
                    name: ["--revision"],
                    description: "Revert to the specified REVISION.",
                    args: {},
                },
                {
                    name: ["--file"],
                    description: "Read package versions from the given file. Repeated file specifications can be passed (e.g. --file=file1 --file=file2).",
                    args: {
                        template: "filepaths",
                    },
                },
                {
                    name: ["--dev"],
                    description: "Use sys.executable -m conda in wrapper scripts instead of CONDA_EXE. This is mainly for use during tests where we test new conda source against old Python versions.",
                }
            ], name_options), [
                {
                    name: ["-c, --channel"],
                    description: "they are given (including local directories using the 'file://' syntax or simply a path like '/home/conda/mychan' or '../mychan'). Then, the defaults or channels from .condarc are searched (unless --override-channels is given). You can use 'defaults' to get the default packages for conda. You can also use any name and the .condarc channel_alias value will be prepended. The default channel_alias is http://conda.anaconda.org/.",
                    args: {},
                },
                {
                    name: ["--use-local"],
                    description: "Use locally built packages. Identical to '-c local'.",
                },
                {
                    name: ["--override-channels"],
                    description: "Do not search default or .condarc channels. Requires --channel.",
                },
                {
                    name: ["--repodata-fn"],
                    description: "Specify name of repodata on remote server. Conda will try whatever you specify, but will ultimately fall back to repodata.json if your specs are not satisfiable with what you specify here. This is used to employ repodata that is reduced in time scope. You may pass this flag more than once. Leftmost entries are tried first, and the fallback to repodata.json is added for you automatically.",
                    args: {},
                },
                {
                    name: ["--strict-channel-priority"],
                    description: "Packages in lower priority channels are not considered if a package with the same name appears in a higher priority channel.",
                },
                {
                    name: ["--no-channel-priority"],
                    description: "Package version takes precedence over channel priority. Overrides the value given by conda config --show channel_priority.",
                },
                {
                    name: ["--no-deps"],
                    description: "Do not install, update, remove, or change dependencies. This WILL lead to broken environments and inconsistent behavior. Use at your own risk.",
                },
                { name: ["--only-deps"], description: "Only install dependencies." },
                { name: ["--no-pin"], description: "Ignore pinned file." },
                {
                    name: ["--force-reinstall"],
                    description: "Ensure that any user-requested package for the current operation is uninstalled and reinstalled, even if that package already exists in the environment.",
                },
                {
                    name: ["--freeze-installed", "--no-update-deps"],
                    description: "Do not update or change already-installed dependencies.",
                },
                { name: ["--update-deps"], description: "Update dependencies." },
                {
                    name: ["-S", "--satisfied-skip-solve"],
                    description: "Exit early and do not run the solver if the requested specs are satisfied. Also skips aggressive updates as configured by 'aggressive_update_packages'. Similar to the default behavior of 'pip install'.",
                },
                {
                    name: ["--update-all", "--all"],
                    description: "Update all installed packages in the environment.",
                },
                {
                    name: ["--update-specs"],
                    description: "Update based on provided specifications.",
                },
                {
                    name: ["--copy"],
                    description: "Install all packages using copies instead of hard- or soft-linking.",
                },
                {
                    name: ["-m", "--mkdir"],
                    description: "Create the environment directory if necessary.",
                },
                {
                    name: ["--clobber"],
                    description: "Allow clobbering of overlapping file paths within packages, and suppress related warnings.",
                },
                {
                    name: ["-C", "--use-index-cache"],
                    description: "Use cache of channel index files, even if it has expired.",
                },
                {
                    name: ["-k", "--insecure"],
                    description: "Allow conda to perform insecure SSL connections and transfers. Equivalent to setting 'ssl_verify' to 'false'.",
                },
                {
                    name: ["--offline"],
                    description: "Offline mode. Don't connect to the Internet.",
                },
                {
                    name: ["-d", "--dry-run"],
                    description: "Only display what would have been done.",
                },
                {
                    name: ["--json"],
                    description: "Report all output as json. Suitable for using conda programmatically.",
                },
                {
                    name: ["-q", "--quiet"],
                    description: "Do not display progress bar.",
                },
                {
                    name: ["-v", "--verbose"],
                    description: "Can be used multiple times. Once for INFO, twice for DEBUG, three times for TRACE.",
                },
                { name: ["-y", "--yes"], description: "Do not ask for confirmation." },
                {
                    name: ["--download-only"],
                    description: "Solve an environment and ensure package caches are populated, but exit prior to unlinking and linking packages into the prefix.",
                },
                {
                    name: ["--show-channel-urls"],
                    description: "Show channel urls. Overrides the value given by conda config --show show_channel_urls.",
                },
            ]),
        },
        {
            name: "list",
            description: "List linked packages in a conda environment.",
            args: {
                name: "regex",
                description: "List only packages matching this regular expression.",
                isOptional: true,
>>>>>>> 8601a08... feat: add built files
            },
            options: __spreadArray(__spreadArray([
                {
                    name: ["--show-channel-urls"],
                    description: "Show channel urls. Overrides the value given by conda config --show show_channel_urls.",
                },
                {
                    name: ["-c", "--canonical"],
                    description: "Output canonical names of packages only. Implies --no-pip.",
                },
                {
                    name: ["-f", "--full-name"],
                    description: "Only search for full names, i.e., ^<regex>$.",
                },
                {
                    name: ["--explicit"],
                    description: "List explicitly all installed conda packaged with URL (output may be used by conda create --file).",
                },
                {
                    name: ["--md5"],
                    description: "Add MD5 hashsum when using --explicit.",
                },
                {
                    name: ["-e", "--export"],
                    description: "Output requirement string only (output may be used by conda create --file).",
                },
                {
                    name: ["-r", "--revisions"],
                    description: "List the revision history and exit.",
                },
                {
                    name: ["--no-pip"],
                    description: "Do not include pip-only installed packages.",
                }
            ], name_options), [
                {
                    name: ["--json"],
                    description: "Report all output as json. Suitable for using conda programmatically.",
                },
                {
                    name: ["-v", "--verbose"],
                    description: "Use once for info, twice for debug, three times for trace.",
                },
                {
                    name: ["-q", "--quiet"],
                    description: "Do not display progress bar.",
                },
            ]),
        },
        {
            name: "package",
            description: "Low-level conda package utility. (EXPERIMENTAL)",
            options: __spreadArray([
                {
                    name: ["-w", "--which"],
                    description: "Given some PATH print which conda package the file came from.",
                    args: {
                        name: "Path",
                        variadic: true,
                    },
                },
                {
                    name: ["-r", "--reset"],
                    description: "Remove all untracked files and exit.",
                },
                {
                    name: ["-u", "--untracked"],
                    description: "Display all untracked files and exit.",
                },
                {
                    name: ["--pkg-name"],
                    description: "Package name of the created package.",
                    args: {},
                },
                {
                    name: ["--pkg-version"],
                    description: "Package version of the created package.",
                    args: {},
                },
                {
                    name: ["--pkg-build"],
                    description: "Package build number of the created package.",
                    args: {},
                }
            ], name_options),
        },
        {
            name: "remove",
            description: "Remove a list of packages from a specified conda environment.",
            args: {
                name: "package name",
                variadic: true,
                generators: getInstalledPackages,
            },
            options: __spreadArray([], remove_options),
        },
        {
<<<<<<< HEAD
<<<<<<< HEAD
            name: "upgrade",
            description: "Alias for conda update.",
            args: {
                name: "package",
                variadic: true,
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> a09fa69... removed linting from all js specs in specs folder
=======
>>>>>>> 3879070... feat: re-add built specs and update gitignore
=======
=======
                suggestions: [{ name: "conda", description: "Update conda", icon: "⭐️" }],
>>>>>>> 1e22cf0... [CONDA][PYTHON] Fixed conda and python in accordance with PR comments
=======
                suggestions: [
                    { name: "conda", description: "Update conda", icon: "⭐️" },
                ],
>>>>>>> 5e6e0c5... git push, commit, add, checkout first attempt
                generators: getInstalledPackages,
>>>>>>> e9a02d4... Conda, python changes
=======
                suggestions: [
                    { name: "conda", description: "Update conda", icon: "⭐️" },
                ],
                generators: getInstalledPackages,
>>>>>>> d0857f4... feat: update formatting
=======
          name: ["--remove-key"],
          description: "Remove a configuration key (and all its values).",
          args: [
            {
              name: "key",
>>>>>>> 39a91f1... feat: apply new rule to files
=======
            name: "uninstall",
            description: "Alias for conda remove.",
            args: {
                name: "package name",
                variadic: true,
                generators: getInstalledPackages,
>>>>>>> 8601a08... feat: add built files
            },
            options: __spreadArray([], remove_options),
        },
        {
            name: "run",
            description: "Run an executable in a conda environment. [Experimental]",
            args: {
                name: "executable",
                template: "filepaths",
            },
            options: __spreadArray(__spreadArray([], name_options), [
                {
                    name: ["-v", "--verbose"],
                    description: "Use once for info, twice for debug, three times for trace.",
                },
                {
                    name: ["--dev"],
                    description: "Sets `CONDA_EXE` to `python -m conda`, assuming the CWD contains the root of conda development sources.",
                },
                {
                    name: ["--debug-wrapper-scripts"],
                    description: "When this is set, where implemented, the shell wrapper scripts will echo to stderr a lot of debugging information.",
                },
                {
                    name: ["--cwd"],
                    description: "Current working directory for command to run in. Defaults to cwd",
                    args: {},
                },
                {
                    name: ["--no-capture-output"],
                    description: "Don't capture stdout/stderr",
                },
                {
                    name: ["--live-stream"],
                    description: "Display the output for the subprocess stdout and stderr on real time.",
                },
            ]),
        },
        {
            name: "search",
            description: "Search for packages and display associated information. The input is a MatchSpec, a query language for conda packages. See examples below.",
            args: { name: "query" },
            options: [
                {
                    name: ["--envs"],
                    description: "Search all of the current user's environments. If run as Administrator (on Windows) or UID 0 (on unix), search all known environments on the system.",
                },
                {
                    name: ["-i", "--info"],
                    description: "Provide detailed information about each package.",
                },
                {
                    name: ["--subdir", "--platform"],
                    description: "Search the given subdir. Should be formatted like 'osx-64', 'linux-32', 'win-64', and so on. The default is to search the current platform.",
                    args: {},
                },
                {
                    name: ["-c", "--channel"],
                    description: "they are given (including local directories using the 'file://' syntax or simply a path like '/home/conda/mychan' or '../mychan'). Then, the defaults or channels from .condarc are searched (unless --override-channels is given). You can use 'defaults' to get the default packages for conda. You can also use any name and the .condarc channel_alias value will be prepended. The default channel_alias is http://conda.anaconda.org/.",
                    args: {},
                },
                {
                    name: ["--use-local"],
                    description: "Use locally built packages. Identical to '-c local'.",
                },
                {
                    name: ["--override-channels"],
                    description: "Do not search default or .condarc channels. Requires --channel.",
                },
                {
                    name: ["--repodata-fn"],
                    description: "Specify name of repodata on remote server. Conda will try whatever you specify, but will ultimately fall back to repodata.json if your specs are not satisfiable with what you specify here. This is used to employ repodata that is reduced in time scope. You may pass this flag more than once. Leftmost entries are tried first, and the fallback to repodata.json is added for you automatically.",
                    args: {},
                },
                {
                    name: ["-C", "--use-index-cache"],
                    description: "Use cache of channel index files, even if it has expired.",
                },
                {
                    name: ["-k", "--insecure"],
                    description: "Allow conda to perform insecure SSL connections and transfers. Equivalent to setting 'ssl_verify' to 'false'.",
                },
                {
                    name: ["--offline"],
                    description: "Offline mode. Don't connect to the Internet.",
                },
                {
                    name: ["--json"],
                    description: "Report all output as json. Suitable for using conda programmatically.",
                },
                {
                    name: ["-v", "--verbose"],
                    description: "Use once for info, twice for debug, three times for trace.",
                },
                {
                    name: ["-q", "--quiet"],
                    description: "Do not display progress bar.",
                },
            ],
        },
        {
            name: "update",
            description: "Updates conda packages to the latest compatible version.",
            args: {
                name: "package",
                variadic: true,
                suggestions: [
                    { name: "conda", description: "Update conda", icon: "⭐️" },
                ],
                generators: getInstalledPackages,
            },
            options: __spreadArray([], update_options),
        },
        {
            name: "upgrade",
            description: "Alias for conda update.",
            args: {
                name: "package",
                variadic: true,
                suggestions: [
                    { name: "conda", description: "Update conda", icon: "⭐️" },
                ],
                generators: getInstalledPackages,
            },
            options: __spreadArray([], update_options),
        },
        {
            name: "build",
            description: "",
            args: {},
        },
        {
            name: "convert",
            description: "Various tools to convert conda packages. Takes a pure Python package build for one platform and converts it to work on one or more other platforms, or all.",
            args: {
                name: "files",
                description: "Package files to convert",
                variadic: true,
                template: "filepaths",
            },
            options: [
                {
                    name: ["-h", "--help"],
                    description: "Show this help message and exit.",
                },
                {
                    name: ["-p", "--platform"],
                    description: "Platform to convert the packages to.",
                    args: {
                        suggestions: [
                            { name: "osx-64" },
                            { name: "osx-arm64" },
                            { name: "linux-32" },
                            { name: "linux-64" },
                            { name: "linux-ppc64" },
                            { name: "linux-ppc64le" },
                            { name: "linux-s390x" },
                            { name: "linux-armv6l" },
                            { name: "linux-armv7l" },
                            { name: "linux-aarch64" },
                            { name: "win-32" },
                            { name: "win-64" },
                            { name: "all" },
                        ],
                    },
                },
                {
                    name: ["--dependencies", "-d"],
                    description: "Additional (besides python) dependencies of the converted package.",
                    args: {
                        name: "Dependencies",
                        isOptional: true,
                        variadic: true,
                    },
                },
                {
                    name: "--show-imports",
                    description: "Show Python imports for compiled parts of the package.",
                },
                {
                    name: ["-f", "--force"],
                    description: "Force convert, even when a package has compiled C extensions.",
                },
                {
                    name: ["-o", "--output-dir"],
                    description: "Directory to write the output files. The packages will be organized in platform/ subdirectories, e.g., win-32/package-1.0-py27_0.tar.bz2.",
                    args: {
                        name: "Output Directory",
                    },
                },
                {
                    name: ["-v", "--verbose"],
                    description: "Print verbose output.",
                },
                {
                    name: "--dry-run",
                    description: "Only display what would have been done.",
                },
                {
                    name: ["-q", "--quiet"],
                    description: "Don't print as much output.",
                },
            ],
        },
        {
            name: "debug",
            description: "",
            args: {},
        },
        {
            name: "develop",
            description: "",
            args: {},
        },
        {
            name: "env",
            description: "",
            args: {},
        },
        {
            name: "index",
            description: "",
            args: {},
        },
        {
            name: "inspect",
            description: "",
            args: {},
        },
        {
            name: "metapackage",
            description: "",
            args: {},
        },
        {
            name: "render",
            description: "",
            args: {},
        },
        {
            name: "server",
            description: "",
            args: {},
        },
        {
            name: "skeleton",
            description: "",
            args: {},
        },
        {
            name: "verify",
            description: "",
            args: {},
        },
    ],
    options: [
        {
            name: ["-h", "--help"],
            description: "Show this help message and exit",
        },
        {
            name: ["-V", "--version"],
            description: "Show the conda version number and exit",
        },
    ],
};

