<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> 3879070... feat: re-add built specs and update gitignore
=======
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
=======
var __assign =
  (this && this.__assign) ||
  function () {
    __assign =
      Object.assign ||
      function (t) {
>>>>>>> 39a91f1... feat: apply new rule to files
=======
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
>>>>>>> 8601a08... feat: add built files
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
<<<<<<< HEAD
<<<<<<< HEAD
};
<<<<<<< HEAD
>>>>>>> de30ae2... feat: clean up code
=======
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
>>>>>>> 771e538... feat: Load specs of cli that exists in current package
var __spreadArray = (this && this.__spreadArray) || function (to, from) {
=======
var __assign =
  (this && this.__assign) ||
  function () {
    __assign =
      Object.assign ||
      function (t) {
=======
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
>>>>>>> d0857f4... feat: update formatting
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
<<<<<<< HEAD
  };
var __spreadArray =
  (this && this.__spreadArray) ||
  function (to, from) {
>>>>>>> 880aa33... feat: update prettierignore
=======
var __spreadArray = (this && this.__spreadArray) || function (to, from) {
>>>>>>> c80c604... Revert "feat: update prettierignore"
    for (var i = 0, il = from.length, j = to.length; i < il; i++, j++)
        to[j] = from[i];
    return to;
=======
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
=======
  };
var __awaiter =
  (this && this.__awaiter) ||
  function (thisArg, _arguments, P, generator) {
    function adopt(value) {
      return value instanceof P
        ? value
        : new P(function (resolve) {
            resolve(value);
          });
    }
>>>>>>> 39a91f1... feat: apply new rule to files
=======
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
>>>>>>> 8601a08... feat: add built files
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __spreadArray = (this && this.__spreadArray) || function (to, from) {
    for (var i = 0, il = from.length, j = to.length; i < il; i++, j++)
        to[j] = from[i];
    return to;
};
var searchGenerator = {
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 8601a08... feat: add built files
    script: function (context) {
        if (context[context.length - 1] === "")
            return "";
        var searchTerm = context[context.length - 1];
        return "curl -s -H \"Accept: application/json\" \"https://api.npms.io/v2/search?q=" + searchTerm + "&size=20\"";
    },
    postProcess: function (out) {
        try {
            var results = JSON.parse(out).results;
            return results.map(function (item) { return ({
                name: item.package.name,
                description: item.package.description,
            }); });
        }
        catch (e) {
            return [];
        }
    },
<<<<<<< HEAD
>>>>>>> d0857f4... feat: update formatting
};
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 99e7ece... feat: migrate to typescript
=======
>>>>>>> 3879070... feat: re-add built specs and update gitignore
=======
>>>>>>> c80c604... Revert "feat: update prettierignore"
var yarnGenerators = {
    getScripts: {
        script: "cat package.json",
        postProcess: function (output) {
            if (output.trim() == "") {
                return [];
            }
            try {
                var packageContent = JSON.parse(output);
                var scripts = packageContent["scripts"];
                if (scripts) {
                    return Object.keys(scripts).map(function (scriptName) { return ({
                        name: scriptName,
                        icon: "https://yarnpkg.com/favicon-32x32.png",
                    }); });
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======

=======
=======
>>>>>>> 3879070... feat: re-add built specs and update gitignore
                }
            }
            catch (e) { }
=======
var searchGenerator = {
    script: function (context) {
        if (context[context.length - 1] === "")
            return "";
        var searchTerm = context[context.length - 1];
        return "curl -s -H \"Accept: application/json\" \"https://api.npms.io/v2/search?q=" + searchTerm + "&size=20\"";
    },
    postProcess: function (out) {
        try {
            var results = JSON.parse(out).results;
            return results.map(function (item) { return ({
                name: item.package.name,
                description: item.package.description,
            }); });
        }
        catch (e) {
>>>>>>> 0ef9e17... feat: add search and scripting to yarn
            return [];
        }
    },
=======
var getScriptsGenerator = {
<<<<<<< HEAD
  script:
    "until [[ -f package.json ]] || [[ $PWD = '/' ]]; do cd ..; done; cat package.json",
  // splitOn: "\n",
  postProcess: function (out) {
    if (out.trim() == "") {
      return [];
    }
    try {
      var packageContent = JSON.parse(out);
      var scripts = packageContent["scripts"];
      var figCompletions_1 = packageContent["fig"] || {};
      if (scripts) {
        return Object.keys(scripts).map(function (key) {
          var icon = "fig://icon?type=yarn";
          var customScripts = figCompletions_1[key];
          return __assign(
            { name: key, icon: icon },
            customScripts !== undefined && customScripts
          );
        });
      }
    } catch (e) {
      console.error(e);
    }
    return [];
  },
>>>>>>> 880aa33... feat: update prettierignore
};
var getScriptsGenerator = {
=======
>>>>>>> d0857f4... feat: update formatting
    script: "until [[ -f package.json ]] || [[ $PWD = '/' ]]; do cd ..; done; cat package.json",
    // splitOn: "\n",
    postProcess: function (out) {
        if (out.trim() == "") {
            return [];
        }
        try {
            var packageContent = JSON.parse(out);
            var scripts = packageContent["scripts"];
            var figCompletions_1 = packageContent["fig"] || {};
            if (scripts) {
                return Object.keys(scripts).map(function (key) {
                    var icon = "fig://icon?type=yarn";
                    var customScripts = figCompletions_1[key];
                    return __assign({ name: key, icon: icon }, (customScripts !== undefined && customScripts));
                });
            }
        }
        catch (e) {
            console.error(e);
        }
        return [];
<<<<<<< HEAD
=======
                }
            }
            catch (e) { }
            return [];
        },
>>>>>>> c80c604... Revert "feat: update prettierignore"
=======
>>>>>>> d0857f4... feat: update formatting
    },
=======
  script: function (context) {
    if (context[context.length - 1] === "") return "";
    var searchTerm = context[context.length - 1];
    return (
      'curl -s -H "Accept: application/json" "https://api.npms.io/v2/search?q=' +
      searchTerm +
      '&size=20"'
    );
  },
  postProcess: function (out) {
    try {
      var results = JSON.parse(out).results;
      return results.map(function (item) {
        return {
          name: item.package.name,
          description: item.package.description,
        };
      });
    } catch (e) {
      return [];
    }
  },
};
var getScriptsGenerator = {
  script:
    "until [[ -f package.json ]] || [[ $PWD = '/' ]]; do cd ..; done; cat package.json",
  // splitOn: "\n",
  postProcess: function (out) {
    if (out.trim() == "") {
      return [];
    }
    try {
      var packageContent = JSON.parse(out);
      var scripts = packageContent["scripts"];
      var figCompletions_1 = packageContent["fig"] || {};
      if (scripts) {
        return Object.keys(scripts).map(function (key) {
          var icon = "fig://icon?type=yarn";
          var customScripts = figCompletions_1[key];
          return __assign(
            { name: key, icon: icon },
            customScripts !== undefined && customScripts
          );
        });
      }
    } catch (e) {
      console.error(e);
    }
    return [];
  },
>>>>>>> 39a91f1... feat: apply new rule to files
=======
};
var getScriptsGenerator = {
    script: "until [[ -f package.json ]] || [[ $PWD = '/' ]]; do cd ..; done; cat package.json",
    // splitOn: "\n",
    postProcess: function (out) {
        if (out.trim() == "") {
            return [];
        }
        try {
            var packageContent = JSON.parse(out);
            var scripts = packageContent["scripts"];
            var figCompletions_1 = packageContent["fig"] || {};
            if (scripts) {
                return Object.keys(scripts).map(function (key) {
                    var icon = "fig://icon?type=yarn";
                    var customScripts = figCompletions_1[key];
                    return __assign({ name: key, icon: icon }, (customScripts !== undefined && customScripts));
                });
            }
        }
        catch (e) {
            console.error(e);
        }
        return [];
    },
>>>>>>> 8601a08... feat: add built files
};
<<<<<<< HEAD
>>>>>>> 99e7ece... feat: migrate to typescript
=======
>>>>>>> 3879070... feat: re-add built specs and update gitignore
// generate package list from package.json file
var packageList = {
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
    script: "cat package.json",
    postProcess: function (out) {
=======
    script: "cat package.json",
    postProcess: function (out) {
        console.log("THIS IS A TEST");
        console.log(out);
>>>>>>> c80c604... Revert "feat: update prettierignore"
=======
    script: "cat package.json",
    postProcess: function (out) {
>>>>>>> d0857f4... feat: update formatting
=======
    script: "cat package.json",
    postProcess: function (out) {
>>>>>>> 8601a08... feat: add built files
        if (out.trim() == "") {
            return [];
        }
        try {
            var packageContent = JSON.parse(out);
            var dependencyScripts = packageContent["dependencies"] || {};
            var devDependencyScripts = packageContent["devDependencies"] || {};
            if (dependencyScripts || devDependencyScripts) {
                return __spreadArray(__spreadArray([], Object.keys(dependencyScripts)), Object.keys(devDependencyScripts)).map(function (dependencyName) { return ({
                    name: dependencyName,
                    icon: "📦",
                }); });
            }
        }
        catch (e) {
            console.log(e);
        }
        return [];
    },
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> 39a91f1... feat: apply new rule to files
  script: "cat package.json",
  postProcess: function (out) {
    if (out.trim() == "") {
      return [];
    }
    try {
      var packageContent = JSON.parse(out);
      var dependencyScripts = packageContent["dependencies"] || {};
      var devDependencyScripts = packageContent["devDependencies"] || {};
      if (dependencyScripts || devDependencyScripts) {
        return __spreadArray(
          __spreadArray([], Object.keys(dependencyScripts)),
          Object.keys(devDependencyScripts)
        ).map(function (dependencyName) {
          return {
            name: dependencyName,
            icon: "📦",
          };
        });
      }
    } catch (e) {
      console.log(e);
    }
    return [];
  },
<<<<<<< HEAD
>>>>>>> 880aa33... feat: update prettierignore
=======
>>>>>>> c80c604... Revert "feat: update prettierignore"
=======
>>>>>>> d0857f4... feat: update formatting
};
var configList = {
    script: "yarn config list",
    postProcess: function (out) {
        if (out.trim() == "") {
            return [];
        }
        try {
            var startIndex = out.indexOf("{");
            var endIndex = out.indexOf("}");
            var output = out.substring(startIndex, endIndex + 1);
            // TODO: fix hacky code
            // reason: JSON parse was not working without double quotes
            output = output
                .replace(/\'/gi, '"')
                .replace("lastUpdateCheck", '"lastUpdateCheck"')
                .replace("registry", '"lastUpdateCheck"');
            var configObject = JSON.parse(output);
            if (configObject) {
                return Object.keys(configObject).map(function (key) { return ({ name: key }); });
            }
        }
        catch (e) { }
        return [];
<<<<<<< HEAD
    },
};
var completionSpec = {
<<<<<<< HEAD
<<<<<<< HEAD
    name: "yarn",
    description: "Manage packages and run scripts",
    generateSpec: function (_context, executeShellCommand) { return __awaiter(void 0, void 0, void 0, function () {
        var script, postProcess, packages, _a, cli, subcommands;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    script = packageList.script, postProcess = packageList.postProcess;
                    _a = postProcess;
                    return [4 /*yield*/, executeShellCommand(script)];
                case 1:
                    packages = _a.apply(void 0, [_b.sent()]).map(function (_a) {
                        var name = _a.name;
                        return name;
                    });
                    cli = ["vue", "nuxt", "expo", "jest", "next"];
                    subcommands = packages
                        .filter(function (name) { return cli.includes(name); })
                        .map(function (name) { return ({
                        name: name,
                        loadSpec: name,
                        icon: "fig://icon?type=package",
                    }); });
                    return [2 /*return*/, {
                            name: "yarn",
                            subcommands: subcommands,
                        }];
            }
        });
    }); },
    args: [
        {
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
            generators: {
                script: "cat package.json",
                postProcess: function (out) {
                    if (out.trim() == "") {
                        return []
                    }

                    try {
                        let package = JSON.parse(out)
                        let scripts = package["scripts"]
                        if (scripts) {
                            return Object.keys(scripts)
                        }
                    } catch (e) { }

                    return []
>>>>>>> 7245588... Updates Yarn specs
                }
            }
            catch (e) { }
            return [];
=======
            generators: yarnGenerators.getScripts,
>>>>>>> 99e7ece... feat: migrate to typescript
=======
            generators: yarnGenerators.getScripts,
>>>>>>> 3879070... feat: re-add built specs and update gitignore
=======
            generators: getScriptsGenerator,
            isOptional: true,
>>>>>>> 0ef9e17... feat: add search and scripting to yarn
        },
    ],
    options: [
        {
            name: "--cache-folder",
            description: "specify a custom folder that must be used to store the yarn cache",
            args: {
                template: "folders",
            },
        },
        {
            name: "--check-files",
            description: "install will verify file tree of packages for consistency",
        },
        {
            name: "--cwd",
            description: "working directory to use (default: .)",
            args: {
                template: "folders",
            },
        },
        {
            name: "--disable-pnp",
            description: "disable the Plug'n'Play installation",
        },
        {
            name: "--emoji",
            description: "enable emoji in output (default: true)",
            args: {
                name: "bool",
                suggestions: [{ name: "true" }, { name: "false" }],
            },
        },
        {
            name: ["--enable-pnp", "--pnp"],
            description: "enable the Plug'n'Play installation",
        },
=======
  name: "yarn",
  description: "Manage packages and run scripts",
=======
=======
>>>>>>> 8601a08... feat: add built files
};
var configList = {
    script: "yarn config list",
    postProcess: function (out) {
        if (out.trim() == "") {
            return [];
        }
<<<<<<< HEAD
      });
    });
  },
>>>>>>> 39a91f1... feat: apply new rule to files
  args: [
    {
      generators: getScriptsGenerator,
      isOptional: true,
    },
  ],
  options: [
    {
      name: "--cache-folder",
      description:
        "specify a custom folder that must be used to store the yarn cache",
      args: {
        template: "folders",
      },
    },
    {
      name: "--check-files",
      description: "install will verify file tree of packages for consistency",
    },
    {
      name: "--cwd",
      description: "working directory to use (default: .)",
      args: {
        template: "folders",
      },
    },
    {
      name: "--disable-pnp",
      description: "disable the Plug'n'Play installation",
    },
    {
      name: "--emoji",
      description: "enable emoji in output (default: true)",
      args: {
        name: "bool",
        suggestions: [{ name: "true" }, { name: "false" }],
      },
    },
    {
      name: ["--enable-pnp", "--pnp"],
      description: "enable the Plug'n'Play installation",
    },
    {
      name: "--flat",
      description: "only allow one version of a package",
    },
    {
      name: "--focus",
      description:
        "Focus on a single workspace by installing remote copies of its sibling workspaces.",
    },
    {
      name: "--force",
      description:
        " install and build packages even if they were built before, overwrite lockfile",
    },
    {
      name: "--frozen-lockfile",
      description: "don't generate a lockfile and fail if an update is needed",
    },
    {
      name: "--global-folder",
      description: "specify a custom folder to store global packages",
      args: {
        template: "folders",
      },
    },
    {
      name: "--har",
      description: "save HAR output of network traffic",
    },
    {
      name: "--https-proxy",
      description: "",
      args: {
        name: "path",
        suggestions: [{ name: "https://" }],
      },
    },
    {
      name: "--ignore-engines",
      description: "ignore engines check",
    },
    {
      name: "--ignore-optional",
      description: "ignore optional dependencies",
    },
    {
      name: "--ignore-platform",
      description: "ignore platform checks",
    },
    {
      name: "--ignore-scripts",
      description: "don't run lifecycle scripts",
    },
    {
      name: "--json",
      description:
        "format Yarn log messages as lines of JSON (see jsonlines.org)",
    },
    {
      name: "--link-duplicates",
      description: "create hardlinks to the repeated modules in node_modules",
    },
    {
      name: "--link-folder",
      description: "specify a custom folder to store global links",
      args: {
        template: "folders",
      },
    },
    {
      name: "--modules-folder",
      description:
        "rather than installing modules into the node_modules folder relative to the cwd, output them here",
      args: {
        template: "folders",
      },
    },
    {
      name: "--mutex",
      description: "use a mutex to ensure only one yarn instance is executing",
      args: [
<<<<<<< HEAD
>>>>>>> 880aa33... feat: update prettierignore
=======
    name: "yarn",
    description: "Manage packages and run scripts",
    args: [
>>>>>>> c80c604... Revert "feat: update prettierignore"
        {
            generators: yarnGenerators.getScripts,
        },
    ],
    options: [
        {
            name: "--cache-folder",
            description: "specify a custom folder that must be used to store the yarn cache",
            args: {
                template: "folders",
            },
        },
        {
            name: "--check-files",
            description: "install will verify file tree of packages for consistency",
=======
    },
=======
        try {
            var startIndex = out.indexOf("{");
            var endIndex = out.indexOf("}");
            var output = out.substring(startIndex, endIndex + 1);
            // TODO: fix hacky code
            // reason: JSON parse was not working without double quotes
            output = output
                .replace(/\'/gi, '"')
                .replace("lastUpdateCheck", '"lastUpdateCheck"')
                .replace("registry", '"lastUpdateCheck"');
            var configObject = JSON.parse(output);
            if (configObject) {
                return Object.keys(configObject).map(function (key) { return ({ name: key }); });
            }
        }
        catch (e) { }
        return [];
    },
>>>>>>> 8601a08... feat: add built files
};
var completionSpec = {
    name: "yarn",
    description: "Manage packages and run scripts",
    generateSpec: function (_context, executeShellCommand) { return __awaiter(void 0, void 0, void 0, function () {
        var script, postProcess, packages, _a, cli, subcommands;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    script = packageList.script, postProcess = packageList.postProcess;
                    _a = postProcess;
                    return [4 /*yield*/, executeShellCommand(script)];
                case 1:
                    packages = _a.apply(void 0, [_b.sent()]).map(function (_a) {
                        var name = _a.name;
                        return name;
                    });
                    cli = ["vue", "nuxt", "expo", "jest", "next"];
                    subcommands = packages
                        .filter(function (name) { return cli.includes(name); })
                        .map(function (name) { return ({
                        name: name,
                        loadSpec: name,
                        icon: "fig://icon?type=package",
                    }); });
                    return [2 /*return*/, {
                            name: "yarn",
                            subcommands: subcommands,
                        }];
            }
        });
    }); },
    args: [
<<<<<<< HEAD
        {
            generators: getScriptsGenerator,
            isOptional: true,
>>>>>>> d0857f4... feat: update formatting
        },
    ],
    options: [
        {
<<<<<<< HEAD
            name: "--cwd",
            description: "working directory to use (default: .)",
=======
            name: "--cache-folder",
            description: "specify a custom folder that must be used to store the yarn cache",
>>>>>>> d0857f4... feat: update formatting
            args: {
                template: "folders",
            },
        },
        {
<<<<<<< HEAD
            name: "--disable-pnp",
            description: "disable the Plug'n'Play installation",
        },
        {
            name: "--emoji",
            description: "enable emoji in output (default: true)",
            args: {
                name: "bool",
                suggestions: [{ name: "true" }, { name: "false" }],
            },
        },
        {
            name: ["--enable-pnp", "--pnp"],
            description: "enable the Plug'n'Play installation",
        },
        {
            name: "--flat",
            description: "only allow one version of a package",
        },
=======
>>>>>>> 39a91f1... feat: apply new rule to files
=======
>>>>>>> 8601a08... feat: add built files
        {
            generators: getScriptsGenerator,
            isOptional: true,
        },
    ],
    options: [
        {
            name: "--cache-folder",
            description: "specify a custom folder that must be used to store the yarn cache",
            args: {
                template: "folders",
            },
        },
        {
            name: "--check-files",
            description: "install will verify file tree of packages for consistency",
        },
        {
            name: "--cwd",
            description: "working directory to use (default: .)",
            args: {
                template: "folders",
            },
        },
        {
            name: "--disable-pnp",
            description: "disable the Plug'n'Play installation",
        },
        {
            name: "--emoji",
            description: "enable emoji in output (default: true)",
            args: {
                name: "bool",
                suggestions: [{ name: "true" }, { name: "false" }],
            },
        },
        {
            name: ["--enable-pnp", "--pnp"],
            description: "enable the Plug'n'Play installation",
        },
        {
            name: "--flat",
            description: "only allow one version of a package",
        },
        {
            name: "--focus",
            description: "Focus on a single workspace by installing remote copies of its sibling workspaces.",
        },
        {
            name: "--force",
            description: " install and build packages even if they were built before, overwrite lockfile",
        },
        {
            name: "--frozen-lockfile",
            description: "don't generate a lockfile and fail if an update is needed",
        },
        {
            name: "--global-folder",
            description: "specify a custom folder to store global packages",
            args: {
                template: "folders",
            },
        },
        {
<<<<<<< HEAD
<<<<<<< HEAD
=======
            name: "--check-files",
            description: "install will verify file tree of packages for consistency",
        },
        {
            name: "--cwd",
            description: "working directory to use (default: .)",
            args: {
                template: "folders",
            },
        },
        {
            name: "--disable-pnp",
            description: "disable the Plug'n'Play installation",
        },
        {
            name: "--emoji",
            description: "enable emoji in output (default: true)",
            args: {
                name: "bool",
                suggestions: [{ name: "true" }, { name: "false" }],
            },
        },
        {
            name: ["--enable-pnp", "--pnp"],
            description: "enable the Plug'n'Play installation",
        },
        {
            name: "--flat",
            description: "only allow one version of a package",
        },
        {
            name: "--focus",
            description: "Focus on a single workspace by installing remote copies of its sibling workspaces.",
=======
          name: ["-O", "--optional"],
          description: "save package to your `optionalDependencies`",
=======
            name: "--har",
            description: "save HAR output of network traffic",
>>>>>>> 8601a08... feat: add built files
        },
        {
            name: "--https-proxy",
            description: "",
            args: {
                name: "path",
                suggestions: [{ name: "https://" }],
            },
        },
        {
            name: "--ignore-engines",
            description: "ignore engines check",
        },
        {
            name: "--ignore-optional",
            description: "ignore optional dependencies",
        },
        {
            name: "--ignore-platform",
            description: "ignore platform checks",
        },
        {
            name: "--ignore-scripts",
            description: "don't run lifecycle scripts",
        },
        {
            name: "--json",
            description: "format Yarn log messages as lines of JSON (see jsonlines.org)",
        },
        {
            name: "--link-duplicates",
            description: "create hardlinks to the repeated modules in node_modules",
        },
        {
            name: "--link-folder",
            description: "specify a custom folder to store global links",
            args: {
                template: "folders",
            },
        },
        {
            name: "--modules-folder",
            description: "rather than installing modules into the node_modules folder relative to the cwd, output them here",
            args: {
                template: "folders",
            },
        },
        {
            name: "--mutex",
            description: "use a mutex to ensure only one yarn instance is executing",
            args: [
                {
                    name: "type",
                    suggestions: [{ name: ":" }],
                },
                {
                    name: "specifier",
                    suggestions: [{ name: ":" }],
                },
            ],
        },
        {
<<<<<<< HEAD
          name: ["-h", "--help"],
          description: "output usage information",
>>>>>>> 39a91f1... feat: apply new rule to files
=======
            name: "--network-concurrency",
            description: "maximum number of concurrent network requests",
            args: [
                {
                    name: "number",
                },
            ],
        },
        {
            name: "--network-timeout",
            description: "TCP timeout for network requests",
            args: [
                {
                    name: "milliseconds",
                },
            ],
>>>>>>> 8601a08... feat: add built files
        },
        {
<<<<<<< HEAD
<<<<<<< HEAD
            name: "--force",
            description: " install and build packages even if they were built before, overwrite lockfile",
        },
        {
            name: "--frozen-lockfile",
            description: "don't generate a lockfile and fail if an update is needed",
        },
        {
            name: "--global-folder",
            description: "specify a custom folder to store global packages",
            args: {
                template: "folders",
            },
        },
        {
            name: "--har",
            description: "save HAR output of network traffic",
        },
        {
            name: "--https-proxy",
            description: "",
            args: {
                name: "path",
                suggestions: [{ name: "https://" }],
            },
        },
        {
            name: "--ignore-engines",
            description: "ignore engines check",
        },
        {
            name: "--ignore-optional",
            description: "ignore optional dependencies",
        },
        {
            name: "--ignore-platform",
            description: "ignore platform checks",
        },
        {
            name: "--ignore-scripts",
            description: "don't run lifecycle scripts",
        },
        {
>>>>>>> d0857f4... feat: update formatting
            name: "--json",
            description: "format Yarn log messages as lines of JSON (see jsonlines.org)",
        },
        {
            name: "--link-duplicates",
            description: "create hardlinks to the repeated modules in node_modules",
        },
        {
            name: "--link-folder",
            description: "specify a custom folder to store global links",
            args: {
                template: "folders",
            },
        },
        {
            name: "--modules-folder",
            description: "rather than installing modules into the node_modules folder relative to the cwd, output them here",
            args: {
                template: "folders",
            },
        },
        {
            name: "--mutex",
            description: "use a mutex to ensure only one yarn instance is executing",
            args: [
                {
                    name: "type",
                    suggestions: [{ name: ":" }],
                },
                {
                    name: "specifier",
                    suggestions: [{ name: ":" }],
                },
            ],
        },
        {
            name: "--network-concurrency",
            description: "maximum number of concurrent network requests",
            args: [
                {
                    name: "number",
                },
            ],
        },
        {
            name: "--network-timeout",
            description: "TCP timeout for network requests",
            args: [
                {
                    name: "milliseconds",
                },
            ],
        },
        {
            name: "--no-bin-links",
            description: "don't generate bin links when setting up packages",
=======
          name: ["-h", "--help"],
          description: "output usage information",
>>>>>>> 39a91f1... feat: apply new rule to files
=======
            name: "--no-bin-links",
            description: "don't generate bin links when setting up packages",
>>>>>>> 8601a08... feat: add built files
        },
        {
            name: "--no-default-rc",
            description: "prevent Yarn from automatically detecting yarnrc and npmrc files",
        },
        {
            name: "--no-lockfile",
            description: "don't read or generate a lockfile",
        },
        {
            name: "--non-interactive",
            description: "do not show interactive prompts",
        },
        {
            name: "--no-node-version-check",
            description: "do not warn when using a potentially unsupported Node version",
        },
        {
            name: "--no-progress",
            description: "disable progress bar",
        },
        {
            name: "--offline",
            description: "trigger an error if any required dependencies are not available in local cache",
        },
        {
            name: "--otp",
            description: "one-time password for two factor authentication",
            args: [
                {
                    name: "otpcode",
                },
<<<<<<< HEAD
<<<<<<< HEAD
            ],
        },
        {
            name: "--prefer-offline",
            description: "use network only if dependencies are not available in local cache",
<<<<<<< HEAD
        },
        {
            name: "--preferred-cache-folder",
            description: "specify a custom folder to store the yarn cache if possible",
            args: {
                template: "folders",
            },
        },
        {
            name: ["--prod", "--production"],
            description: "",
            args: {},
        },
        {
            name: "--proxy",
            description: "",
            args: [
                {
                    name: "host",
                },
            ],
        },
        {
            name: "--pure-lockfile",
            description: "don't generate a lockfile",
        },
        {
            name: "--registry",
            description: "override configuration registry",
            args: [
                {
                    name: "url",
                },
            ],
        },
        {
=======
        },
        {
            name: "--preferred-cache-folder",
            description: "specify a custom folder to store the yarn cache if possible",
            args: {
                template: "folders",
=======
              ],
>>>>>>> 39a91f1... feat: apply new rule to files
            },
          ],
=======
            ],
>>>>>>> 8601a08... feat: add built files
        },
        {
            name: "--prefer-offline",
            description: "use network only if dependencies are not available in local cache",
        },
        {
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> d0857f4... feat: update formatting
            name: ["-s", "--silent"],
            description: "skip Yarn console logs, other types of logs (script output) will be printed",
=======
          name: "get",
          description: "Print the value for a given key",
          args: [
            {
              generators: configList,
            },
          ],
>>>>>>> 39a91f1... feat: apply new rule to files
=======
            name: "--preferred-cache-folder",
            description: "specify a custom folder to store the yarn cache if possible",
            args: {
                template: "folders",
            },
>>>>>>> 8601a08... feat: add built files
        },
        {
            name: ["--prod", "--production"],
            description: "",
            args: {},
        },
        {
            name: "--proxy",
            description: "",
            args: [
                {
                    name: "host",
                },
            ],
        },
        {
            name: "--pure-lockfile",
            description: "don't generate a lockfile",
        },
        {
<<<<<<< HEAD
<<<<<<< HEAD
            name: "--update-checksums",
            description: "update package checksums from current repository",
<<<<<<< HEAD
=======
          name: ["-h", "--help"],
          description: "output usage information",
>>>>>>> 39a91f1... feat: apply new rule to files
=======
            name: "--registry",
            description: "override configuration registry",
            args: [
                {
                    name: "url",
                },
            ],
        },
        {
            name: ["-s", "--silent"],
            description: "skip Yarn console logs, other types of logs (script output) will be printed",
>>>>>>> 8601a08... feat: add built files
        },
        {
            name: "--scripts-prepend-node-path",
            description: "prepend the node executable dir to the PATH in scripts",
            args: {
                suggestions: [{ name: "true" }, { name: "false" }],
            },
        },
        {
            name: "--skip-integrity-check",
            description: "run install without checking if node_modules is installed",
        },
        {
            name: "--strict-semver",
            description: "",
        },
        {
            name: "--update-checksums",
            description: "update package checksums from current repository",
        },
        {
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
            name: "add",
            description: "Installs a package and any packages that it depends on.",
            args: {
                name: "package",
                generators: searchGenerator,
                debounce: true,
                variadic: true,
            },
=======
            name: "add",
            description: "Installs a package and any packages that it depends on.",
>>>>>>> c80c604... Revert "feat: update prettierignore"
            options: [
                {
                    name: ["-W", "--ignore-workspace-root-check"],
                    description: "required to run yarn add inside a workspace root",
                },
                {
                    name: ["-D", "--dev"],
                    description: "save package to your `devDependencies`",
                },
                {
                    name: ["-P", "--peer"],
                    description: "save package to your `peerDependencies`",
                },
                {
                    name: ["-O", "--optional"],
                    description: "save package to your `optionalDependencies`",
                },
                {
                    name: ["-E", "--exact"],
                    description: "install exact version",
                },
                {
                    name: ["-T", "--tilde"],
                    description: "install most recent release with the same minor version",
                },
                {
                    name: ["-A", "--audit"],
                    description: "Run vulnerability audit on installed packages",
                },
                {
                    name: ["-h", "--help"],
                    description: "output usage information",
                },
            ],
<<<<<<< HEAD
=======
          name: "--latest",
          description: "bin prefix to use to install binaries",
>>>>>>> 880aa33... feat: update prettierignore
=======
>>>>>>> c80c604... Revert "feat: update prettierignore"
=======
          name: "--latest",
          description: "bin prefix to use to install binaries",
>>>>>>> 39a91f1... feat: apply new rule to files
=======
            name: "--use-yarnrc",
            description: "specifies a yarnrc file that Yarn should use (.yarnrc only, not .npmrc)",
            args: {
                template: "filepaths",
            },
>>>>>>> 8601a08... feat: add built files
        },
        {
            name: ["-v", "--version"],
            description: "output the version number",
        },
        {
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> c80c604... Revert "feat: update prettierignore"
            name: "autoclean",
            description: "Cleans and removes unnecessary files from package dependencies",
            options: [
                {
                    name: ["-h", "--help"],
                    description: "output usage information",
                },
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
            ],
=======
=======
>>>>>>> 3879070... feat: re-add built specs and update gitignore
=======
>>>>>>> c80c604... Revert "feat: update prettierignore"
                {
                    name: ["-i", "--init"],
                    description: "Creates the .yarnclean file if it does not exist, and adds the default entries",
                },
                {
                    name: ["-f", "--force"],
                    description: "if a .yarnclean file exists, run the clean process",
                },
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
            ]
>>>>>>> 7245588... Updates Yarn specs
=======
            ],
>>>>>>> 99e7ece... feat: migrate to typescript
=======
            ],
>>>>>>> 3879070... feat: re-add built specs and update gitignore
=======
          name: ["-y", "--yes"],
          description: "use default options",
>>>>>>> 880aa33... feat: update prettierignore
=======
            ],
>>>>>>> c80c604... Revert "feat: update prettierignore"
        },
        {
            name: "bin",
            description: "Displays the location of the yarn bin folder",
            options: [
                {
                    name: ["-h", "--help"],
                    description: "output usage information",
                },
            ],
=======
=======
            name: "--verbose",
            description: "output verbose messages on internal operations",
        },
        {
            name: ["-h", "--help"],
            description: "output usage information",
>>>>>>> 8601a08... feat: add built files
        },
    ],
    subcommands: [
        {
<<<<<<< HEAD
            name: "--use-yarnrc",
            description: "specifies a yarnrc file that Yarn should use (.yarnrc only, not .npmrc)",
            args: {
                template: "filepaths",
            },
        },
        {
            name: ["-v", "--version"],
            description: "output the version number",
        },
        {
            name: "--verbose",
            description: "output verbose messages on internal operations",
        },
        {
            name: ["-h", "--help"],
            description: "output usage information",
>>>>>>> d0857f4... feat: update formatting
=======
          name: ["-y", "--yes"],
          description: "use default options",
        },
        {
          name: ["-p", "--private"],
          description: "use default options and private true",
>>>>>>> 39a91f1... feat: apply new rule to files
        },
    ],
    subcommands: [
        {
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> c80c604... Revert "feat: update prettierignore"
            name: "cache",
            description: "",
            options: [
                {
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
                    name: "--pattern",
                    description: "filter cached packages by pattern",
                    args: [
                        {
                            name: "pattern",
                        },
                    ],
                },
                {
=======
>>>>>>> 7245588... Updates Yarn specs
=======
>>>>>>> 3879070... feat: re-add built specs and update gitignore
=======
>>>>>>> c80c604... Revert "feat: update prettierignore"
                    name: ["-h", "--help"],
                    description: "output usage information",
                },
            ],
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> 3879070... feat: re-add built specs and update gitignore
=======
>>>>>>> c80c604... Revert "feat: update prettierignore"
            subcommands: [
                {
                    name: "clean",
                    description: "clear global cache",
                },
                {
                    name: "dir",
                    description: "print yarn’s global cache path",
                },
                {
                    name: "list",
                    description: "print out every cached package",
                    options: [
                        {
                            name: "--pattern",
                            description: "filter cached packages by pattern",
                            args: [
                                {
                                    name: "pattern",
                                },
                            ],
                        },
                    ],
                },
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
            ]
>>>>>>> 7245588... Updates Yarn specs
=======
            ],
>>>>>>> 99e7ece... feat: migrate to typescript
=======
            ],
>>>>>>> 3879070... feat: re-add built specs and update gitignore
        },
        {
            name: "config",
            description: "configure yarn",
            options: [
                {
                    name: ["-h", "--help"],
                    description: "output usage information",
                },
            ],
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> 3879070... feat: re-add built specs and update gitignore
            subcommands: [
                {
                    name: "set",
                    description: "Sets the config key to a certain value",
                    options: [
                        {
                            name: ["-g", "--global"],
                            description: "set global config",
                        },
                    ],
                },
                {
                    name: "get",
                    description: "Print the value for a given key",
                    args: [
                        {
                            generators: configList,
                        },
                    ],
                },
                {
                    name: "delete",
                    description: "Deletes a given key from the config",
                    args: [
                        {
                            generators: configList,
                        },
                    ],
                },
                {
                    name: "list",
                    description: "Displays the current configuration",
                },
            ],
<<<<<<< HEAD
>>>>>>> 7245588... Updates Yarn specs
=======
>>>>>>> 3879070... feat: re-add built specs and update gitignore
=======
          name: ["-i", "--install"],
          description: "install a specific Yarn release",
          args: [
            {
              name: "version",
=======
            name: "add",
            description: "Installs a package and any packages that it depends on.",
            args: {
                name: "package",
                generators: searchGenerator,
                debounce: true,
                variadic: true,
>>>>>>> d0857f4... feat: update formatting
            },
            options: [
                {
                    name: ["-W", "--ignore-workspace-root-check"],
                    description: "required to run yarn add inside a workspace root",
                },
                {
                    name: ["-D", "--dev"],
                    description: "save package to your `devDependencies`",
                },
                {
                    name: ["-P", "--peer"],
                    description: "save package to your `peerDependencies`",
                },
                {
                    name: ["-O", "--optional"],
                    description: "save package to your `optionalDependencies`",
                },
                {
                    name: ["-E", "--exact"],
                    description: "install exact version",
                },
                {
                    name: ["-T", "--tilde"],
                    description: "install most recent release with the same minor version",
                },
                {
                    name: ["-A", "--audit"],
                    description: "Run vulnerability audit on installed packages",
                },
                {
                    name: ["-h", "--help"],
                    description: "output usage information",
                },
            ],
        },
        {
            name: "audit",
            description: "Perform a vulnerability audit against the installed packages",
            options: [
                {
                    name: "--summary",
                    description: "Only print the summary.",
                },
                {
                    name: "--groups",
                    description: "Only audit dependencies from listed groups. Default: devDependencies, dependencies, optionalDependencies",
                    args: {
                        name: "group_name",
                        variadic: true,
                    },
                },
                {
                    name: "--level",
                    description: "Only print advisories with severity greater than or equal to one of the following: info|low|moderate|high|critical. Default: info",
                    args: {
                        name: "severity",
                        suggestions: [
                            { name: "info" },
                            { name: "low" },
                            { name: "moderate" },
                            { name: "high" },
                            { name: "critical" },
                        ],
                    },
                },
                {
                    name: ["-h", "--help"],
                    description: "output usage information",
                },
            ],
=======
          name: ["-i", "--install"],
          description: "install a specific Yarn release",
          args: [
            {
              name: "version",
            },
          ],
        },
        {
          name: ["-2"],
          description: "generates the project using Yarn 2",
        },
        {
          name: ["-h", "--help"],
          description: "output usage information",
>>>>>>> 39a91f1... feat: apply new rule to files
        },
      ],
    },
    {
      name: "install",
      description: "Install all the dependencies listed within package.json",
      options: [
        {
<<<<<<< HEAD
<<<<<<< HEAD
          name: ["-2"],
          description: "generates the project using Yarn 2",
>>>>>>> 880aa33... feat: update prettierignore
=======
            ],
        },
        {
            name: "config",
            description: "configure yarn",
=======
            name: "autoclean",
            description: "Cleans and removes unnecessary files from package dependencies",
            options: [
                {
                    name: ["-h", "--help"],
                    description: "output usage information",
                },
                {
                    name: ["-i", "--init"],
                    description: "Creates the .yarnclean file if it does not exist, and adds the default entries",
                },
                {
                    name: ["-f", "--force"],
                    description: "if a .yarnclean file exists, run the clean process",
                },
            ],
        },
        {
            name: "bin",
            description: "Displays the location of the yarn bin folder",
>>>>>>> d0857f4... feat: update formatting
            options: [
                {
                    name: ["-h", "--help"],
                    description: "output usage information",
                },
            ],
<<<<<<< HEAD
            subcommands: [
                {
                    name: "set",
                    description: "Sets the config key to a certain value",
                    options: [
                        {
                            name: ["-g", "--global"],
                            description: "set global config",
                        },
                    ],
                },
                {
                    name: "get",
                    description: "Print the value for a given key",
                    args: [
                        {
                            generators: configList,
                        },
                    ],
                },
                {
                    name: "delete",
                    description: "Deletes a given key from the config",
                    args: [
                        {
                            generators: configList,
                        },
                    ],
                },
                {
                    name: "list",
                    description: "Displays the current configuration",
                },
            ],
>>>>>>> c80c604... Revert "feat: update prettierignore"
        },
        {
            name: "create",
            description: "Creates new projects from any create-* starter kits",
=======
        },
        {
            name: "cache",
            description: "",
>>>>>>> d0857f4... feat: update formatting
=======
            name: "add",
            description: "Installs a package and any packages that it depends on.",
            args: {
                name: "package",
                generators: searchGenerator,
                debounce: true,
                variadic: true,
            },
            options: [
                {
                    name: ["-W", "--ignore-workspace-root-check"],
                    description: "required to run yarn add inside a workspace root",
                },
                {
                    name: ["-D", "--dev"],
                    description: "save package to your `devDependencies`",
                },
                {
                    name: ["-P", "--peer"],
                    description: "save package to your `peerDependencies`",
                },
                {
                    name: ["-O", "--optional"],
                    description: "save package to your `optionalDependencies`",
                },
                {
                    name: ["-E", "--exact"],
                    description: "install exact version",
                },
                {
                    name: ["-T", "--tilde"],
                    description: "install most recent release with the same minor version",
                },
                {
                    name: ["-A", "--audit"],
                    description: "Run vulnerability audit on installed packages",
                },
                {
                    name: ["-h", "--help"],
                    description: "output usage information",
                },
            ],
        },
        {
            name: "audit",
            description: "Perform a vulnerability audit against the installed packages",
            options: [
                {
                    name: "--summary",
                    description: "Only print the summary.",
                },
                {
                    name: "--groups",
                    description: "Only audit dependencies from listed groups. Default: devDependencies, dependencies, optionalDependencies",
                    args: {
                        name: "group_name",
                        variadic: true,
                    },
                },
                {
                    name: "--level",
                    description: "Only print advisories with severity greater than or equal to one of the following: info|low|moderate|high|critical. Default: info",
                    args: {
                        name: "severity",
                        suggestions: [
                            { name: "info" },
                            { name: "low" },
                            { name: "moderate" },
                            { name: "high" },
                            { name: "critical" },
                        ],
                    },
                },
                {
                    name: ["-h", "--help"],
                    description: "output usage information",
                },
            ],
        },
        {
            name: "autoclean",
            description: "Cleans and removes unnecessary files from package dependencies",
            options: [
                {
                    name: ["-h", "--help"],
                    description: "output usage information",
                },
                {
                    name: ["-i", "--init"],
                    description: "Creates the .yarnclean file if it does not exist, and adds the default entries",
                },
                {
                    name: ["-f", "--force"],
                    description: "if a .yarnclean file exists, run the clean process",
                },
            ],
        },
        {
            name: "bin",
            description: "Displays the location of the yarn bin folder",
            options: [
                {
                    name: ["-h", "--help"],
                    description: "output usage information",
                },
            ],
        },
        {
            name: "cache",
            description: "",
>>>>>>> 8601a08... feat: add built files
            options: [
                {
                    name: ["-h", "--help"],
                    description: "output usage information",
                },
            ],
<<<<<<< HEAD
<<<<<<< HEAD
        },
        {
            name: "exec",
            description: "",
=======
=======
>>>>>>> 8601a08... feat: add built files
            subcommands: [
                {
                    name: "clean",
                    description: "clear global cache",
                },
                {
                    name: "dir",
                    description: "print yarn’s global cache path",
                },
                {
                    name: "list",
                    description: "print out every cached package",
                    options: [
                        {
                            name: "--pattern",
                            description: "filter cached packages by pattern",
                            args: [
                                {
                                    name: "pattern",
                                },
                            ],
                        },
                    ],
                },
            ],
<<<<<<< HEAD
        },
        {
            name: "config",
            description: "configure yarn",
>>>>>>> d0857f4... feat: update formatting
            options: [
                {
                    name: ["-h", "--help"],
                    description: "output usage information",
                },
            ],
<<<<<<< HEAD
        },
        {
            name: "generate-lock-entry",
            description: "Generates a lock file entry",
            options: [
                {
                    name: "--use-manifest",
                    description: "Specify which manifest file to use for generating lock entry",
                    args: {
                        template: "filepaths",
                    },
                },
                {
                    name: "--resolved",
                    description: "Generate from <*.tgz>#<hash>",
                    args: {
                        template: "filepaths",
                    },
                },
                {
=======
            subcommands: [
                {
                    name: "set",
                    description: "Sets the config key to a certain value",
                    options: [
                        {
                            name: ["-g", "--global"],
                            description: "set global config",
                        },
                    ],
                },
                {
                    name: "get",
                    description: "Print the value for a given key",
                    args: [
                        {
                            generators: configList,
                        },
                    ],
                },
                {
                    name: "delete",
                    description: "Deletes a given key from the config",
                    args: [
                        {
                            generators: configList,
                        },
                    ],
                },
                {
                    name: "list",
                    description: "Displays the current configuration",
                },
            ],
        },
        {
            name: "create",
            description: "Creates new projects from any create-* starter kits",
            options: [
                {
>>>>>>> d0857f4... feat: update formatting
                    name: ["-h", "--help"],
                    description: "output usage information",
                },
            ],
        },
        {
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
            name: "exec",
            description: "",
            options: [
                {
                    name: ["-h", "--help"],
                    description: "output usage information",
                },
            ],
        },
        {
            name: "generate-lock-entry",
            description: "Generates a lock file entry",
            options: [
                {
                    name: "--use-manifest",
                    description: "Specify which manifest file to use for generating lock entry",
                    args: {
                        template: "filepaths",
                    },
                },
                {
                    name: "--resolved",
                    description: "Generate from <*.tgz>#<hash>",
                    args: {
                        template: "filepaths",
                    },
                },
                {
                    name: ["-h", "--help"],
                    description: "output usage information",
                },
            ],
        },
        {
>>>>>>> d0857f4... feat: update formatting
            name: "global",
            description: "Install packages globally on your operating system",
            args: {
                name: "package",
                generators: searchGenerator,
                debounce: true,
                variadic: true,
            },
<<<<<<< HEAD
=======
            name: "global",
            description: "Install packages globally on your operating system",
>>>>>>> c80c604... Revert "feat: update prettierignore"
=======
>>>>>>> d0857f4... feat: update formatting
            options: [
                {
                    name: "--prefix",
                    description: "bin prefix to use to install binaries",
                    args: {
                        name: "prefix",
                    },
                },
                {
                    name: "--latest",
                    description: "bin prefix to use to install binaries",
                },
                {
                    name: ["-h", "--help"],
                    description: "output usage information",
                },
            ],
<<<<<<< HEAD
<<<<<<< HEAD
=======
          name: "--focus",
          description:
            "Focus on a single workspace by installing remote copies of its sibling workspaces.",
>>>>>>> 880aa33... feat: update prettierignore
=======
>>>>>>> c80c604... Revert "feat: update prettierignore"
        },
        {
            name: "help",
            description: "output usage information",
            options: [],
        },
        {
<<<<<<< HEAD
<<<<<<< HEAD
            name: "import",
<<<<<<< HEAD
<<<<<<< HEAD
            description: "",
            options: [],
        },
        {
            name: "info",
            description: "",
            options: [],
=======
=======
>>>>>>> 3879070... feat: re-add built specs and update gitignore
            description: "Generates yarn.lock from an npm package-lock.json file",
            options: [],
        },
        {
            name: "info",
            description: "Show information about a package",
<<<<<<< HEAD
<<<<<<< HEAD
            options: [
            ]
>>>>>>> 7245588... Updates Yarn specs
=======
            options: [],
>>>>>>> 99e7ece... feat: migrate to typescript
=======
            options: [],
>>>>>>> 3879070... feat: re-add built specs and update gitignore
=======
          name: "--frozen-lockfile",
          description:
            "don't generate a lockfile and fail if an update is needed",
        },
        {
          name: "--har",
          description: "save HAR output of network traffic",
>>>>>>> 880aa33... feat: update prettierignore
=======
            name: "import",
            description: "Generates yarn.lock from an npm package-lock.json file",
            options: [],
        },
        {
            name: "info",
            description: "Show information about a package",
            options: [],
>>>>>>> c80c604... Revert "feat: update prettierignore"
        },
        {
            name: "init",
            description: "Interactively creates or updates a package.json file",
            options: [
                {
                    name: ["-y", "--yes"],
                    description: "use default options",
                },
                {
                    name: ["-p", "--private"],
                    description: "use default options and private true",
                },
                {
                    name: ["-i", "--install"],
                    description: "install a specific Yarn release",
                    args: [
                        {
                            name: "version",
                        },
                    ],
                },
                {
                    name: ["-2"],
                    description: "generates the project using Yarn 2",
                },
                {
                    name: ["-h", "--help"],
                    description: "output usage information",
                },
            ],
        },
        {
<<<<<<< HEAD
<<<<<<< HEAD
            name: "install",
<<<<<<< HEAD
<<<<<<< HEAD
            description: "",
            options: [],
=======
=======
>>>>>>> 3879070... feat: re-add built specs and update gitignore
=======
            name: "install",
>>>>>>> c80c604... Revert "feat: update prettierignore"
            description: "Install all the dependencies listed within package.json",
            options: [
                {
                    name: "--check-files",
                    description: "install will verify file tree of packages for consistency",
                },
                {
                    name: "--flat",
                    description: "only allow one version of a package",
                },
                {
                    name: "--focus",
                    description: "Focus on a single workspace by installing remote copies of its sibling workspaces.",
                },
                {
                    name: "--force",
                    description: " install and build packages even if they were built before, overwrite lockfile",
                },
                {
                    name: "--frozen-lockfile",
                    description: "don't generate a lockfile and fail if an update is needed",
                },
                {
                    name: "--har",
                    description: "save HAR output of network traffic",
                },
                {
                    name: "--ignore-engines",
                    description: "ignore engines check",
                },
                {
                    name: "--ignore-optional",
                    description: "ignore optional dependencies",
                },
                {
                    name: "--ignore-scripts",
                    description: "don't run lifecycle scripts",
                },
                {
                    name: "--modules-folder",
                    description: "rather than installing modules into the node_modules folder relative to the cwd, output them here",
                    args: {
                        template: "folders",
                    },
                },
                {
                    name: "--no-lockfile",
                    description: "don't read or generate a lockfile",
                },
                {
                    name: "--non-interactive",
                    description: "do not show interactive prompts",
                },
                {
                    name: "--offline",
                    description: "trigger an error if any required dependencies are not available in local cache",
                },
                {
                    name: ["--prod", "--production"],
                    description: "",
                    args: {},
                },
                {
                    name: "--pure-lockfile",
                    description: "don't generate a lockfile",
                },
                {
                    name: ["-s", "--silent"],
                    description: "skip Yarn console logs, other types of logs (script output) will be printed",
                },
                {
                    name: "--verbose",
                    description: "output verbose messages on internal operations",
                },
            ],
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 7245588... Updates Yarn specs
=======
>>>>>>> 3879070... feat: re-add built specs and update gitignore
        },
        {
            name: "licenses",
            description: "",
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
            options: [],
        },
        {
            name: "link",
            description: "",
            options: [],
        },
        {
            name: "list",
            description: "",
            options: [],
        },
        {
            name: "login",
            description: "",
            options: [],
        },
        {
            name: "logout",
            description: "",
            options: [],
=======
            options: [
            ],
=======
            options: [],
>>>>>>> 99e7ece... feat: migrate to typescript
=======
            options: [],
>>>>>>> 3879070... feat: re-add built specs and update gitignore
            subcommands: [
                {
                    name: "list",
                    description: "List licenses for installed packages",
                },
                {
                    name: "generate-disclaimer",
                    description: "List of licenses from all the packages",
                },
            ],
=======
          name: "--ignore-optional",
          description: "ignore optional dependencies",
        },
        {
          name: "--ignore-scripts",
          description: "don't run lifecycle scripts",
>>>>>>> 880aa33... feat: update prettierignore
=======
        },
        {
            name: "licenses",
            description: "",
            options: [],
            subcommands: [
                {
                    name: "list",
                    description: "List licenses for installed packages",
                },
                {
                    name: "generate-disclaimer",
                    description: "List of licenses from all the packages",
                },
            ],
>>>>>>> c80c604... Revert "feat: update prettierignore"
        },
        {
            name: "link",
            description: "Symlink a package folder during development",
            options: [],
            args: {
                name: "package",
            },
        },
        {
            name: "list",
            description: "lists all dependencies for the current working directory",
            options: [
                {
                    name: "--depth",
                    description: "restrict the depth of the dependencies",
                },
                {
                    name: "--pattern",
                    description: "filter the list of dependencies by the pattern",
                },
            ],
        },
        {
            name: "login",
            description: "Store registry username and email",
            options: [],
        },
        {
<<<<<<< HEAD
<<<<<<< HEAD
            name: "logout",
            description: "Clear registry username and email",
<<<<<<< HEAD
<<<<<<< HEAD
            options: [
            ]
>>>>>>> 7245588... Updates Yarn specs
=======
            options: [],
>>>>>>> 99e7ece... feat: migrate to typescript
=======
            options: [],
>>>>>>> 3879070... feat: re-add built specs and update gitignore
=======
          name: "--offline",
          description:
            "trigger an error if any required dependencies are not available in local cache",
>>>>>>> 880aa33... feat: update prettierignore
=======
            name: "logout",
            description: "Clear registry username and email",
            options: [],
>>>>>>> c80c604... Revert "feat: update prettierignore"
=======
        },
        {
            name: "help",
            description: "output usage information",
            options: [],
=======
          name: "--check-files",
          description:
            "install will verify file tree of packages for consistency",
=======
>>>>>>> 8601a08... feat: add built files
        },
        {
            name: "config",
            description: "configure yarn",
            options: [
                {
                    name: ["-h", "--help"],
                    description: "output usage information",
                },
            ],
            subcommands: [
                {
                    name: "set",
                    description: "Sets the config key to a certain value",
                    options: [
                        {
                            name: ["-g", "--global"],
                            description: "set global config",
                        },
                    ],
                },
                {
                    name: "get",
                    description: "Print the value for a given key",
                    args: [
                        {
                            generators: configList,
                        },
                    ],
                },
                {
                    name: "delete",
                    description: "Deletes a given key from the config",
                    args: [
                        {
                            generators: configList,
                        },
                    ],
                },
                {
                    name: "list",
                    description: "Displays the current configuration",
                },
            ],
        },
        {
            name: "create",
            description: "Creates new projects from any create-* starter kits",
            options: [
                {
                    name: ["-h", "--help"],
                    description: "output usage information",
                },
            ],
        },
        {
<<<<<<< HEAD
          name: "--force",
          description:
            " install and build packages even if they were built before, overwrite lockfile",
>>>>>>> 39a91f1... feat: apply new rule to files
=======
            name: "exec",
            description: "",
            options: [
                {
                    name: ["-h", "--help"],
                    description: "output usage information",
                },
            ],
>>>>>>> 8601a08... feat: add built files
        },
        {
            name: "generate-lock-entry",
            description: "Generates a lock file entry",
            options: [
                {
                    name: "--use-manifest",
                    description: "Specify which manifest file to use for generating lock entry",
                    args: {
                        template: "filepaths",
                    },
                },
                {
                    name: "--resolved",
                    description: "Generate from <*.tgz>#<hash>",
                    args: {
                        template: "filepaths",
                    },
                },
                {
                    name: ["-h", "--help"],
                    description: "output usage information",
                },
            ],
        },
        {
            name: "global",
            description: "Install packages globally on your operating system",
            args: {
                name: "package",
                generators: searchGenerator,
                debounce: true,
                variadic: true,
            },
            options: [
                {
                    name: "--prefix",
                    description: "bin prefix to use to install binaries",
                    args: {
                        name: "prefix",
                    },
                },
                {
                    name: "--latest",
                    description: "bin prefix to use to install binaries",
                },
                {
                    name: ["-h", "--help"],
                    description: "output usage information",
                },
            ],
        },
        {
            name: "help",
            description: "output usage information",
        },
        {
            name: "import",
            description: "Generates yarn.lock from an npm package-lock.json file",
        },
        {
            name: "info",
            description: "Show information about a package",
        },
        {
            name: "init",
            description: "Interactively creates or updates a package.json file",
            options: [
                {
                    name: ["-y", "--yes"],
                    description: "use default options",
                },
                {
                    name: ["-p", "--private"],
                    description: "use default options and private true",
                },
                {
                    name: ["-i", "--install"],
                    description: "install a specific Yarn release",
                    args: [
                        {
                            name: "version",
                        },
                    ],
                },
                {
                    name: ["-2"],
                    description: "generates the project using Yarn 2",
                },
                {
                    name: ["-h", "--help"],
                    description: "output usage information",
                },
            ],
        },
        {
            name: "install",
            description: "Install all the dependencies listed within package.json",
            options: [
                {
                    name: "--check-files",
                    description: "install will verify file tree of packages for consistency",
                },
                {
                    name: "--flat",
                    description: "only allow one version of a package",
                },
                {
                    name: "--focus",
                    description: "Focus on a single workspace by installing remote copies of its sibling workspaces.",
                },
                {
                    name: "--force",
                    description: " install and build packages even if they were built before, overwrite lockfile",
                },
                {
                    name: "--frozen-lockfile",
                    description: "don't generate a lockfile and fail if an update is needed",
                },
                {
                    name: "--har",
                    description: "save HAR output of network traffic",
                },
                {
                    name: "--ignore-engines",
                    description: "ignore engines check",
                },
                {
                    name: "--ignore-optional",
                    description: "ignore optional dependencies",
                },
                {
                    name: "--ignore-scripts",
                    description: "don't run lifecycle scripts",
                },
                {
                    name: "--modules-folder",
                    description: "rather than installing modules into the node_modules folder relative to the cwd, output them here",
                    args: {
                        template: "folders",
                    },
                },
                {
                    name: "--no-lockfile",
                    description: "don't read or generate a lockfile",
                },
                {
                    name: "--non-interactive",
                    description: "do not show interactive prompts",
                },
                {
                    name: "--offline",
                    description: "trigger an error if any required dependencies are not available in local cache",
                },
                {
                    name: ["--prod", "--production"],
                    description: "",
                    args: {},
                },
                {
                    name: "--pure-lockfile",
                    description: "don't generate a lockfile",
                },
                {
                    name: ["-s", "--silent"],
                    description: "skip Yarn console logs, other types of logs (script output) will be printed",
                },
                {
                    name: "--verbose",
                    description: "output verbose messages on internal operations",
                },
            ],
        },
        {
            name: "licenses",
            description: "",
            subcommands: [
                {
                    name: "list",
                    description: "List licenses for installed packages",
                },
                {
                    name: "generate-disclaimer",
                    description: "List of licenses from all the packages",
                },
            ],
        },
        {
            name: "link",
            description: "Symlink a package folder during development",
            args: {
                name: "package",
            },
        },
        {
            name: "list",
            description: "lists all dependencies for the current working directory",
            options: [
                {
                    name: "--depth",
                    description: "restrict the depth of the dependencies",
                },
                {
                    name: "--pattern",
                    description: "filter the list of dependencies by the pattern",
                },
            ],
        },
        {
            name: "login",
            description: "Store registry username and email",
        },
        {
<<<<<<< HEAD
<<<<<<< HEAD
            name: "logout",
            description: "Clear registry username and email",
            options: [],
>>>>>>> d0857f4... feat: update formatting
=======
          name: "--offline",
          description:
            "trigger an error if any required dependencies are not available in local cache",
>>>>>>> 39a91f1... feat: apply new rule to files
=======
            name: "logout",
            description: "Clear registry username and email",
>>>>>>> 8601a08... feat: add built files
        },
        {
            name: "node",
            description: "",
        },
        {
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
            name: "outdated",
<<<<<<< HEAD
<<<<<<< HEAD
            description: "",
=======
            name: "outdated",
            description: "Checks for outdated package dependencies",
>>>>>>> d0857f4... feat: update formatting
            options: [],
        },
        {
            name: "owner",
<<<<<<< HEAD
            description: "",
            options: [],
        },
        {
            name: "pack",
            description: "",
            options: [],
        },
        {
            name: "policies",
            description: "",
=======
            description: "Manage package owners",
            options: [],
            subcommands: [
                {
                    name: "list",
                    description: "Lists all of the owners of a package",
                },
                {
                    name: "add",
                    description: "Adds the user as an owner of the package",
                },
                {
                    name: "add",
                    description: "Removes the user as an owner of the package",
                },
            ],
        },
        {
            name: "pack",
            description: "Creates a compressed gzip archive of package dependencies",
            options: [
                {
                    name: "--filename",
                    description: "Creates a compressed gzip archive of package dependencies and names the file filename",
                },
            ],
        },
        {
            name: "policies",
            description: "Defines project-wide policies for your project",
>>>>>>> d0857f4... feat: update formatting
            options: [],
        },
        {
            name: "publish",
<<<<<<< HEAD
            description: "",
            options: [],
        },
        {
            name: "remove",
            description: "",
            options: [],
=======
=======
>>>>>>> 3879070... feat: re-add built specs and update gitignore
            description: "Checks for outdated package dependencies",
            options: [],
=======
          name: "--pure-lockfile",
          description: "don't generate a lockfile",
>>>>>>> 880aa33... feat: update prettierignore
=======
            name: "outdated",
            description: "Checks for outdated package dependencies",
            options: [],
>>>>>>> c80c604... Revert "feat: update prettierignore"
=======
          name: "--pure-lockfile",
          description: "don't generate a lockfile",
>>>>>>> 39a91f1... feat: apply new rule to files
=======
            name: "outdated",
            description: "Checks for outdated package dependencies",
>>>>>>> 8601a08... feat: add built files
        },
        {
            name: "owner",
            description: "Manage package owners",
            subcommands: [
                {
                    name: "list",
                    description: "Lists all of the owners of a package",
                },
                {
                    name: "add",
                    description: "Adds the user as an owner of the package",
                },
                {
                    name: "add",
                    description: "Removes the user as an owner of the package",
                },
            ],
        },
        {
            name: "pack",
            description: "Creates a compressed gzip archive of package dependencies",
            options: [
                {
                    name: "--filename",
                    description: "Creates a compressed gzip archive of package dependencies and names the file filename",
                },
            ],
        },
        {
            name: "policies",
            description: "Defines project-wide policies for your project",
        },
        {
            name: "publish",
            description: "Publishes a package to the npm registry",
        },
        {
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> c80c604... Revert "feat: update prettierignore"
=======
            description: "Publishes a package to the npm registry",
            options: [],
        },
        {
>>>>>>> d0857f4... feat: update formatting
            name: "remove",
            description: "remove installed package",
            options: [],
=======
            name: "remove",
            description: "remove installed package",
>>>>>>> 8601a08... feat: add built files
            args: [
                {
                    generators: packageList,
                },
            ],
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 7245588... Updates Yarn specs
=======
>>>>>>> 3879070... feat: re-add built specs and update gitignore
        },
        {
            name: "run",
            description: "",
            options: [],
            args: [
                // TODO get this generator to work and combine the logic of both of these
                //     {
                //         generators: {
                //            script: "ls -1 $(yarn bin)", // ISSUE: this runs in /bin/sh, yarn may not be defined in sh PATH
                //            splitOn: "\n",
                //            postProcess: function (out) {
                //                try {
                //                    if (out) {
                //                        return out
                //                    }
                //                } catch(e) { }
                //                return []
                //            }
                //           }
                //     },
                {
                    generators: getScriptsGenerator,
                },
            ],
=======
          name: "--depth",
          description: "restrict the depth of the dependencies",
        },
        {
          name: "--pattern",
          description: "filter the list of dependencies by the pattern",
>>>>>>> 880aa33... feat: update prettierignore
=======
        },
        {
=======
        },
        {
>>>>>>> d0857f4... feat: update formatting
            name: "run",
            description: "",
            options: [],
            args: [
                // TODO get this generator to work and combine the logic of both of these
                //     {
                //         generators: {
                //            script: "ls -1 $(yarn bin)", // ISSUE: this runs in /bin/sh, yarn may not be defined in sh PATH
                //            splitOn: "\n",
                //            postProcess: function (out) {
                //                try {
                //                    if (out) {
                //                        return out
                //                    }
                //                } catch(e) { }
                //                return []
                //            }
                //           }
                //     },
                {
<<<<<<< HEAD
                    generators: yarnGenerators.getScripts,
                },
            ],
>>>>>>> c80c604... Revert "feat: update prettierignore"
        },
        {
<<<<<<< HEAD
<<<<<<< HEAD
            name: "tag",
<<<<<<< HEAD
<<<<<<< HEAD
            description: "",
=======
                    generators: getScriptsGenerator,
                },
            ],
=======
          name: "--depth",
          description: "restrict the depth of the dependencies",
        },
        {
          name: "--pattern",
          description: "filter the list of dependencies by the pattern",
>>>>>>> 39a91f1... feat: apply new rule to files
=======
        },
        {
            name: "run",
            description: "",
            args: [
                // TODO get this generator to work and combine the logic of both of these
                //     {
                //         generators: {
                //            script: "ls -1 $(yarn bin)", // ISSUE: this runs in /bin/sh, yarn may not be defined in sh PATH
                //            splitOn: "\n",
                //            postProcess: function (out) {
                //                try {
                //                    if (out) {
                //                        return out
                //                    }
                //                } catch(e) { }
                //                return []
                //            }
                //           }
                //     },
                {
                    generators: getScriptsGenerator,
                },
            ],
>>>>>>> 8601a08... feat: add built files
        },
        {
<<<<<<< HEAD
<<<<<<< HEAD
            name: "tag",
            description: "Add, remove, or list tags on a package",
>>>>>>> d0857f4... feat: update formatting
            options: [],
        },
        {
            name: "team",
<<<<<<< HEAD
            description: "",
=======
            description: "Maintain team memberships",
>>>>>>> d0857f4... feat: update formatting
            options: [],
        },
        {
            name: "unlink",
<<<<<<< HEAD
            description: "",
            options: [],
=======
=======
>>>>>>> 3879070... feat: re-add built specs and update gitignore
            description: "Add, remove, or list tags on a package",
            options: [],
=======
          name: "list",
          description: "Lists all of the owners of a package",
>>>>>>> 880aa33... feat: update prettierignore
=======
            name: "tag",
            description: "Add, remove, or list tags on a package",
            options: [],
>>>>>>> c80c604... Revert "feat: update prettierignore"
=======
          name: "list",
          description: "Lists all of the owners of a package",
>>>>>>> 39a91f1... feat: apply new rule to files
=======
            name: "tag",
            description: "Add, remove, or list tags on a package",
>>>>>>> 8601a08... feat: add built files
        },
        {
            name: "team",
            description: "Maintain team memberships",
        },
        {
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
            name: "unlink",
            description: "Unlink a previously created symlink for a package",
<<<<<<< HEAD
<<<<<<< HEAD
            options: [
            ]
>>>>>>> 7245588... Updates Yarn specs
=======
            options: [],
>>>>>>> 99e7ece... feat: migrate to typescript
=======
            options: [],
>>>>>>> 3879070... feat: re-add built specs and update gitignore
=======
          name: "add",
          description: "Removes the user as an owner of the package",
>>>>>>> 880aa33... feat: update prettierignore
=======
            name: "unlink",
            description: "Unlink a previously created symlink for a package",
            options: [],
>>>>>>> c80c604... Revert "feat: update prettierignore"
=======
            description: "Unlink a previously created symlink for a package",
            options: [],
>>>>>>> d0857f4... feat: update formatting
=======
          name: "add",
          description: "Removes the user as an owner of the package",
>>>>>>> 39a91f1... feat: apply new rule to files
=======
            name: "unlink",
            description: "Unlink a previously created symlink for a package",
>>>>>>> 8601a08... feat: add built files
        },
        {
            name: "unplug",
            description: "",
        },
        {
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
            name: "upgrade",
<<<<<<< HEAD
<<<<<<< HEAD
            description: "",
            options: [],
        },
        {
            name: "upgrade-interactive",
            description: "",
            options: [],
        },
        {
            name: "upgradeInteractive",
            description: "",
            options: [],
        },
        {
            name: "version",
            description: "",
            options: [],
        },
        {
            name: "versions",
            description: "",
            options: [],
        },
        {
            name: "why",
            description: "",
            options: [],
        },
        {
            name: "workspace",
            description: "",
            options: [],
=======
=======
>>>>>>> 3879070... feat: re-add built specs and update gitignore
            description: "Upgrades packages to their latest version based on the specified range",
            options: [],
=======
          generators: packageList,
>>>>>>> 880aa33... feat: update prettierignore
=======
            name: "upgrade",
            description: "Upgrades packages to their latest version based on the specified range",
            options: [],
>>>>>>> c80c604... Revert "feat: update prettierignore"
=======
            name: "upgrade",
            description: "Upgrades packages to their latest version based on the specified range",
            options: [],
>>>>>>> d0857f4... feat: update formatting
=======
          generators: packageList,
>>>>>>> 39a91f1... feat: apply new rule to files
=======
            name: "upgrade",
            description: "Upgrades packages to their latest version based on the specified range",
>>>>>>> 8601a08... feat: add built files
        },
        {
            name: "upgrade-interactive",
            description: "Upgrades packages in interactive mode",
        },
        {
            name: "version",
            description: "update version of your package",
            options: [
                {
                    name: ["--major"],
                    description: "auto-increment major version number",
                },
                {
                    name: ["--minor"],
                    description: "auto-increment minor version number",
                },
                {
                    name: ["--patch"],
                    description: "auto-increment patch version number",
                },
            ],
        },
        {
            name: "versions",
            description: "Displays version information of the currently installed Yarn, Node.js, and its dependencies",
        },
        {
            name: "why",
            description: "Show information about why a package is installed",
        },
        {
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
            name: "workspace",
            description: "Manage workspace",
<<<<<<< HEAD
<<<<<<< HEAD
            options: [
            ],
>>>>>>> 7245588... Updates Yarn specs
=======
            options: [],
>>>>>>> 99e7ece... feat: migrate to typescript
=======
            options: [],
>>>>>>> 3879070... feat: re-add built specs and update gitignore
=======
            name: "workspace",
            description: "Manage workspace",
            options: [],
>>>>>>> c80c604... Revert "feat: update prettierignore"
=======
            name: "workspace",
            description: "Manage workspace",
            options: [],
>>>>>>> d0857f4... feat: update formatting
=======
            name: "workspace",
            description: "Manage workspace",
>>>>>>> 8601a08... feat: add built files
            args: [
                {
                    name: "name",
                    generators: {
                        script: "cat package.json",
                        postProcess: function (out) {
                            if (out.trim() == "") {
                                return [];
                            }
                            try {
                                var packageContent = JSON.parse(out);
                                var workspaces = packageContent["workspaces"];
                                if (workspaces) {
                                    return workspaces;
                                }
                            }
                            catch (e) { }
                            return [];
                        },
                    },
                },
                // TODO arg 1 is script suggestion from the workspace specified in arg 0.
            ],
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> 39a91f1... feat: apply new rule to files
          name: "subcommand",
          description: "",
          args: {
            suggestions: [{ name: "info" }, { name: "run" }],
          },
<<<<<<< HEAD
>>>>>>> 880aa33... feat: update prettierignore
=======
>>>>>>> c80c604... Revert "feat: update prettierignore"
=======
>>>>>>> d0857f4... feat: update formatting
=======
>>>>>>> 39a91f1... feat: apply new rule to files
=======
>>>>>>> 8601a08... feat: add built files
        },
        {
            name: "workspaces",
            description: "Show information about your workspaces",
            options: [
                {
                    name: "subcommand",
                    description: "",
                    args: {
                        suggestions: [{ name: "info" }, { name: "run" }],
                    },
                },
                {
                    name: "flags",
                    description: "",
                },
            ],
        },
    ],
};

