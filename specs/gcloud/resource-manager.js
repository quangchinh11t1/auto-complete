var completionSpec = {
    name: "resource-manager",
    description: "Manage Cloud Resources.",
    subcommands: [
        {
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 8601a08... feat: add built files
            name: "folders",
            description: "Manage Cloud Folders.",
            subcommands: [
                {
                    name: "add-iam-policy-binding",
                    description: "Add IAM policy binding for a folder.",
<<<<<<< HEAD
                    subcommands: [],
=======
>>>>>>> 8601a08... feat: add built files
                    options: [
                        {
                            name: "--account",
                            description: "Google Cloud Platform user account to use for invocation. Overrides the default *core/account* property value for this command invocation.",
                            args: {
                                name: "ACCOUNT",
                                description: "string",
                                suggestions: [],
                            },
                        },
                        {
                            name: "--billing-project",
                            description: "The Google Cloud Platform project that will be charged quota for operations performed in gcloud. If you need to operate on one project, but need quota against a different project, you can use this flag to specify the billing project. If both `billing/quota_project` and `--billing-project` are specified, `--billing-project` takes precedence. Run `$ gcloud config set --help` to see more information about `billing/quota_project`.",
                            args: {
                                name: "BILLING_PROJECT",
                                description: "string",
                                suggestions: [],
                            },
                        },
                        {
                            name: "--condition",
                            description: "+\nThe condition of the binding to be added. When the condition is explicitly\nspecified as `None` (`--condition=None`), a binding without a condition is\nadded. When the condition is specified and is not `None`, `--role`\ncannot be a primitive role. Primitive roles are `roles/editor`, `roles/owner`,\nand `roles/viewer`.\n+\n*expression*::: (Required) Expression of the condition which\nevaluates to True or False. This uses a subset of Common Expression\nLanguage syntax.\n+\n*title*::: (Required) A short string describing the purpose of the expression.\n+\n*description*::: (Optional) Additional description for the expression.\n+\nNOTE: An unsatisfied condition will not allow access via this\nbinding.",
                            args: {
                                name: "KEY=VALUE",
                                description: "dict",
                                suggestions: [],
                            },
                        },
                        {
                            name: "--condition-from-file",
                            description: "Path to a local JSON or YAML file that defines the condition.\nTo see available fields, see the help for `--condition`.",
                            args: {
                                name: "CONDITION_FROM_FILE",
                                description: "googlecloudsdk.calliope.arg_parsers:FileContents",
                                suggestions: [],
                            },
                        },
                        {
                            name: "--configuration",
                            description: "The configuration to use for this command invocation. For more\ninformation on how to use configurations, run:\n`gcloud topic configurations`.  You can also use the CLOUDSDK_ACTIVE_CONFIG_NAME environment\nvariable to set the equivalent of this flag for a terminal\nsession.",
                            args: {
                                name: "CONFIGURATION",
                                description: "string",
                                suggestions: [],
                            },
                        },
                        {
                            name: "--flags-file",
                            description: "A YAML or JSON file that specifies a *--flag*:*value* dictionary.\nUseful for specifying complex flag values with special characters\nthat work with any command interpreter. Additionally, each\n*--flags-file* arg is replaced by its constituent flags. See\n$ gcloud topic flags-file for more information.",
                            args: {
                                name: "YAML_FILE",
                                description: "string",
                                suggestions: [],
                            },
                        },
                        {
                            name: "--flatten",
                            description: "Flatten _name_[] output resource slices in _KEY_ into separate records\nfor each item in each slice. Multiple keys and slices may be specified.\nThis also flattens keys for *--format* and *--filter*. For example,\n*--flatten=abc.def* flattens *abc.def[].ghi* references to\n*abc.def.ghi*. A resource record containing *abc.def[]* with N elements\nwill expand to N records in the flattened output. This flag interacts\nwith other flags that are applied in this order: *--flatten*,\n*--sort-by*, *--filter*, *--limit*.",
                            args: {
                                name: "KEY",
                                description: "list",
                                suggestions: [],
                            },
                        },
                        {
                            name: "--format",
                            description: "Set the format for printing command output resources. The default is a\ncommand-specific human-friendly output format. The supported formats\nare: `config`, `csv`, `default`, `diff`, `disable`, `flattened`, `get`, `json`, `list`, `multi`, `none`, `object`, `table`, `text`, `value`, `yaml`. For more details run $ gcloud topic formats.",
                            args: {
                                name: "FORMAT",
                                description: "string",
                                suggestions: [],
                            },
                        },
                        {
                            name: "--help",
                            description: "Display detailed help.",
                        },
                        {
                            name: "--impersonate-service-account",
                            description: "For this gcloud invocation, all API requests will be made as the given service account instead of the currently selected account. This is done without needing to create, download, and activate a key for the account. In order to perform operations as the service account, your currently selected account must have an IAM role that includes the iam.serviceAccounts.getAccessToken permission for the service account. The roles/iam.serviceAccountTokenCreator role has this permission or you may create a custom role. Overrides the default *auth/impersonate_service_account* property value for this command invocation.",
                            args: {
                                name: "SERVICE_ACCOUNT_EMAIL",
                                description: "string",
                                suggestions: [],
                            },
                        },
                        {
                            name: "--log-http",
                            description: "Log all HTTP server requests and responses to stderr. Overrides the default *core/log_http* property value for this command invocation.",
                        },
                        {
                            name: "--member",
                            description: "The member to add the binding for. Should be of the form `user|group|serviceAccount:email` or\n`domain:domain`.\n+\nExamples: `user:test-user@gmail.com`, `group:admins@example.com`,\n`serviceAccount:test123@example.domain.com`, or\n`domain:example.domain.com`.\n+\nCan also be one of the following special values:\n* `allUsers` - Special identifier that represents anyone who is on the internet,\n   with or without a Google account.\n* `allAuthenticatedUsers` - Special identifier that represents anyone who is\n   authenticated with a Google account or a service account.",
                            args: {
                                name: "MEMBER",
                                description: "string",
                                suggestions: [],
                            },
                            priority: 100,
                        },
                        {
                            name: "--project",
                            description: "The Google Cloud Platform project ID to use for this invocation. If\nomitted, then the current project is assumed; the current project can\nbe listed using `gcloud config list --format='text(core.project)'`\nand can be set using `gcloud config set project PROJECTID`.\n+\n`--project` and its fallback `core/project` property play two roles\nin the invocation. It specifies the project of the resource to\noperate on. It also specifies the project for API enablement check,\nquota, and billing. To specify a different project for quota and\nbilling, use `--billing-project` or `billing/quota_project` property.",
                            args: {
                                name: "PROJECT_ID",
                                description: "string",
                                suggestions: [],
                            },
                        },
                        {
                            name: "--quiet",
                            description: "Disable all interactive prompts when running gcloud commands. If input\nis required, defaults will be used, or an error will be raised.\nOverrides the default core/disable_prompts property value for this\ncommand invocation. This is equivalent to setting the environment\nvariable `CLOUDSDK_CORE_DISABLE_PROMPTS` to 1.",
                        },
                        {
                            name: "--role",
                            description: "Define the role of the member.",
                            args: {
                                name: "ROLE",
                                description: "string",
                                suggestions: [],
                            },
                            priority: 100,
                        },
                        {
                            name: "--trace-token",
                            description: "Token used to route traces of service requests for investigation of issues. Overrides the default *core/trace_token* property value for this command invocation.",
                            args: {
                                name: "TRACE_TOKEN",
                                description: "string",
                                suggestions: [],
                            },
                        },
                        {
                            name: "--user-output-enabled",
                            description: "Print user intended output to the console. Overrides the default *core/user_output_enabled* property value for this command invocation. Use *--no-user-output-enabled* to disable.",
                        },
                        {
                            name: "--verbosity",
                            description: "Override the default verbosity for this command. Overrides the default *core/verbosity* property value for this command invocation. _VERBOSITY_ must be one of: *debug*, *info*, *warning*, *error*, *critical*, *none*.",
                            args: {
                                name: "VERBOSITY",
                                description: "string",
                                suggestions: [
                                    "debug",
                                    "info",
                                    "warning",
                                    "error",
                                    "critical",
                                    "none",
                                ],
                            },
                        },
                    ],
                    args: [
                        {
                            name: "FOLDER",
                            description: "ID of the folder or fully qualified identifier for the folder.",
                            variadic: false,
                        },
                    ],
                },
                {
                    name: "create",
                    description: "Create a new folder.",
<<<<<<< HEAD
                    subcommands: [],
=======
>>>>>>> 8601a08... feat: add built files
                    options: [
                        {
                            name: "--account",
                            description: "Google Cloud Platform user account to use for invocation. Overrides the default *core/account* property value for this command invocation.",
                            args: {
                                name: "ACCOUNT",
                                description: "string",
                                suggestions: [],
                            },
                        },
                        {
                            name: "--async",
                            description: "Return immediately, without waiting for the operation in progress to\ncomplete.",
                        },
                        {
                            name: "--billing-project",
                            description: "The Google Cloud Platform project that will be charged quota for operations performed in gcloud. If you need to operate on one project, but need quota against a different project, you can use this flag to specify the billing project. If both `billing/quota_project` and `--billing-project` are specified, `--billing-project` takes precedence. Run `$ gcloud config set --help` to see more information about `billing/quota_project`.",
                            args: {
                                name: "BILLING_PROJECT",
                                description: "string",
                                suggestions: [],
                            },
                        },
                        {
                            name: "--configuration",
                            description: "The configuration to use for this command invocation. For more\ninformation on how to use configurations, run:\n`gcloud topic configurations`.  You can also use the CLOUDSDK_ACTIVE_CONFIG_NAME environment\nvariable to set the equivalent of this flag for a terminal\nsession.",
                            args: {
                                name: "CONFIGURATION",
                                description: "string",
                                suggestions: [],
                            },
                        },
                        {
                            name: "--display-name",
                            description: "Friendly display name to use for the new folder.",
                            args: {
                                name: "DISPLAY_NAME",
                                description: "string",
                                suggestions: [],
                            },
                            priority: 100,
                        },
                        {
                            name: "--flags-file",
                            description: "A YAML or JSON file that specifies a *--flag*:*value* dictionary.\nUseful for specifying complex flag values with special characters\nthat work with any command interpreter. Additionally, each\n*--flags-file* arg is replaced by its constituent flags. See\n$ gcloud topic flags-file for more information.",
                            args: {
                                name: "YAML_FILE",
                                description: "string",
                                suggestions: [],
                            },
                        },
                        {
                            name: "--flatten",
                            description: "Flatten _name_[] output resource slices in _KEY_ into separate records\nfor each item in each slice. Multiple keys and slices may be specified.\nThis also flattens keys for *--format* and *--filter*. For example,\n*--flatten=abc.def* flattens *abc.def[].ghi* references to\n*abc.def.ghi*. A resource record containing *abc.def[]* with N elements\nwill expand to N records in the flattened output. This flag interacts\nwith other flags that are applied in this order: *--flatten*,\n*--sort-by*, *--filter*, *--limit*.",
                            args: {
                                name: "KEY",
                                description: "list",
                                suggestions: [],
                            },
                        },
                        {
                            name: "--folder",
                            description: "ID for the folder to use as a parent",
                            args: {
                                name: "FOLDER_ID",
                                description: "string",
                                suggestions: [],
                            },
                        },
                        {
                            name: "--format",
                            description: "Set the format for printing command output resources. The default is a\ncommand-specific human-friendly output format. The supported formats\nare: `config`, `csv`, `default`, `diff`, `disable`, `flattened`, `get`, `json`, `list`, `multi`, `none`, `object`, `table`, `text`, `value`, `yaml`. For more details run $ gcloud topic formats.",
                            args: {
                                name: "FORMAT",
                                description: "string",
                                suggestions: [],
                            },
                        },
                        {
                            name: "--help",
                            description: "Display detailed help.",
                        },
                        {
                            name: "--impersonate-service-account",
                            description: "For this gcloud invocation, all API requests will be made as the given service account instead of the currently selected account. This is done without needing to create, download, and activate a key for the account. In order to perform operations as the service account, your currently selected account must have an IAM role that includes the iam.serviceAccounts.getAccessToken permission for the service account. The roles/iam.serviceAccountTokenCreator role has this permission or you may create a custom role. Overrides the default *auth/impersonate_service_account* property value for this command invocation.",
                            args: {
                                name: "SERVICE_ACCOUNT_EMAIL",
                                description: "string",
                                suggestions: [],
                            },
                        },
                        {
                            name: "--log-http",
                            description: "Log all HTTP server requests and responses to stderr. Overrides the default *core/log_http* property value for this command invocation.",
                        },
                        {
                            name: "--organization",
                            description: "ID for the organization to use as a parent",
                            args: {
                                name: "ORGANIZATION_ID",
                                description: "string",
                                suggestions: [],
                            },
                        },
                        {
                            name: "--project",
                            description: "The Google Cloud Platform project ID to use for this invocation. If\nomitted, then the current project is assumed; the current project can\nbe listed using `gcloud config list --format='text(core.project)'`\nand can be set using `gcloud config set project PROJECTID`.\n+\n`--project` and its fallback `core/project` property play two roles\nin the invocation. It specifies the project of the resource to\noperate on. It also specifies the project for API enablement check,\nquota, and billing. To specify a different project for quota and\nbilling, use `--billing-project` or `billing/quota_project` property.",
                            args: {
                                name: "PROJECT_ID",
                                description: "string",
                                suggestions: [],
                            },
                        },
                        {
                            name: "--quiet",
                            description: "Disable all interactive prompts when running gcloud commands. If input\nis required, defaults will be used, or an error will be raised.\nOverrides the default core/disable_prompts property value for this\ncommand invocation. This is equivalent to setting the environment\nvariable `CLOUDSDK_CORE_DISABLE_PROMPTS` to 1.",
                        },
                        {
                            name: "--trace-token",
                            description: "Token used to route traces of service requests for investigation of issues. Overrides the default *core/trace_token* property value for this command invocation.",
                            args: {
                                name: "TRACE_TOKEN",
                                description: "string",
                                suggestions: [],
                            },
                        },
                        {
                            name: "--user-output-enabled",
                            description: "Print user intended output to the console. Overrides the default *core/user_output_enabled* property value for this command invocation. Use *--no-user-output-enabled* to disable.",
                        },
                        {
                            name: "--verbosity",
                            description: "Override the default verbosity for this command. Overrides the default *core/verbosity* property value for this command invocation. _VERBOSITY_ must be one of: *debug*, *info*, *warning*, *error*, *critical*, *none*.",
                            args: {
                                name: "VERBOSITY",
                                description: "string",
                                suggestions: [
                                    "debug",
                                    "info",
                                    "warning",
                                    "error",
                                    "critical",
                                    "none",
                                ],
                            },
                        },
                    ],
<<<<<<< HEAD
                    args: [],
=======
>>>>>>> 8601a08... feat: add built files
                },
                {
                    name: "delete",
                    description: "Delete a folder.",
<<<<<<< HEAD
                    subcommands: [],
=======
>>>>>>> 8601a08... feat: add built files
                    options: [
                        {
                            name: "--account",
                            description: "Google Cloud Platform user account to use for invocation. Overrides the default *core/account* property value for this command invocation.",
                            args: {
                                name: "ACCOUNT",
                                description: "string",
                                suggestions: [],
                            },
                        },
                        {
                            name: "--billing-project",
                            description: "The Google Cloud Platform project that will be charged quota for operations performed in gcloud. If you need to operate on one project, but need quota against a different project, you can use this flag to specify the billing project. If both `billing/quota_project` and `--billing-project` are specified, `--billing-project` takes precedence. Run `$ gcloud config set --help` to see more information about `billing/quota_project`.",
                            args: {
                                name: "BILLING_PROJECT",
                                description: "string",
                                suggestions: [],
                            },
                        },
                        {
                            name: "--configuration",
                            description: "The configuration to use for this command invocation. For more\ninformation on how to use configurations, run:\n`gcloud topic configurations`.  You can also use the CLOUDSDK_ACTIVE_CONFIG_NAME environment\nvariable to set the equivalent of this flag for a terminal\nsession.",
                            args: {
                                name: "CONFIGURATION",
                                description: "string",
                                suggestions: [],
                            },
                        },
                        {
                            name: "--flags-file",
                            description: "A YAML or JSON file that specifies a *--flag*:*value* dictionary.\nUseful for specifying complex flag values with special characters\nthat work with any command interpreter. Additionally, each\n*--flags-file* arg is replaced by its constituent flags. See\n$ gcloud topic flags-file for more information.",
                            args: {
                                name: "YAML_FILE",
                                description: "string",
                                suggestions: [],
                            },
                        },
                        {
                            name: "--flatten",
                            description: "Flatten _name_[] output resource slices in _KEY_ into separate records\nfor each item in each slice. Multiple keys and slices may be specified.\nThis also flattens keys for *--format* and *--filter*. For example,\n*--flatten=abc.def* flattens *abc.def[].ghi* references to\n*abc.def.ghi*. A resource record containing *abc.def[]* with N elements\nwill expand to N records in the flattened output. This flag interacts\nwith other flags that are applied in this order: *--flatten*,\n*--sort-by*, *--filter*, *--limit*.",
                            args: {
                                name: "KEY",
                                description: "list",
                                suggestions: [],
                            },
                        },
                        {
                            name: "--format",
                            description: "Set the format for printing command output resources. The default is a\ncommand-specific human-friendly output format. The supported formats\nare: `config`, `csv`, `default`, `diff`, `disable`, `flattened`, `get`, `json`, `list`, `multi`, `none`, `object`, `table`, `text`, `value`, `yaml`. For more details run $ gcloud topic formats.",
                            args: {
                                name: "FORMAT",
                                description: "string",
                                suggestions: [],
                            },
                        },
                        {
                            name: "--help",
                            description: "Display detailed help.",
                        },
                        {
                            name: "--impersonate-service-account",
                            description: "For this gcloud invocation, all API requests will be made as the given service account instead of the currently selected account. This is done without needing to create, download, and activate a key for the account. In order to perform operations as the service account, your currently selected account must have an IAM role that includes the iam.serviceAccounts.getAccessToken permission for the service account. The roles/iam.serviceAccountTokenCreator role has this permission or you may create a custom role. Overrides the default *auth/impersonate_service_account* property value for this command invocation.",
                            args: {
                                name: "SERVICE_ACCOUNT_EMAIL",
                                description: "string",
                                suggestions: [],
                            },
                        },
                        {
                            name: "--log-http",
                            description: "Log all HTTP server requests and responses to stderr. Overrides the default *core/log_http* property value for this command invocation.",
                        },
                        {
                            name: "--project",
                            description: "The Google Cloud Platform project ID to use for this invocation. If\nomitted, then the current project is assumed; the current project can\nbe listed using `gcloud config list --format='text(core.project)'`\nand can be set using `gcloud config set project PROJECTID`.\n+\n`--project` and its fallback `core/project` property play two roles\nin the invocation. It specifies the project of the resource to\noperate on. It also specifies the project for API enablement check,\nquota, and billing. To specify a different project for quota and\nbilling, use `--billing-project` or `billing/quota_project` property.",
                            args: {
                                name: "PROJECT_ID",
                                description: "string",
                                suggestions: [],
                            },
                        },
                        {
                            name: "--quiet",
                            description: "Disable all interactive prompts when running gcloud commands. If input\nis required, defaults will be used, or an error will be raised.\nOverrides the default core/disable_prompts property value for this\ncommand invocation. This is equivalent to setting the environment\nvariable `CLOUDSDK_CORE_DISABLE_PROMPTS` to 1.",
                        },
                        {
                            name: "--trace-token",
                            description: "Token used to route traces of service requests for investigation of issues. Overrides the default *core/trace_token* property value for this command invocation.",
                            args: {
                                name: "TRACE_TOKEN",
                                description: "string",
                                suggestions: [],
                            },
                        },
                        {
                            name: "--user-output-enabled",
                            description: "Print user intended output to the console. Overrides the default *core/user_output_enabled* property value for this command invocation. Use *--no-user-output-enabled* to disable.",
                        },
                        {
                            name: "--verbosity",
                            description: "Override the default verbosity for this command. Overrides the default *core/verbosity* property value for this command invocation. _VERBOSITY_ must be one of: *debug*, *info*, *warning*, *error*, *critical*, *none*.",
                            args: {
                                name: "VERBOSITY",
                                description: "string",
                                suggestions: [
                                    "debug",
                                    "info",
                                    "warning",
                                    "error",
                                    "critical",
                                    "none",
                                ],
                            },
                        },
                    ],
                    args: [
                        {
                            name: "FOLDER_ID",
                            description: "ID for the folder you want to delete.",
                            variadic: false,
                        },
                    ],
                },
                {
                    name: "describe",
                    description: "Show metadata for a folder.",
<<<<<<< HEAD
                    subcommands: [],
=======
>>>>>>> 8601a08... feat: add built files
                    options: [
                        {
                            name: "--account",
                            description: "Google Cloud Platform user account to use for invocation. Overrides the default *core/account* property value for this command invocation.",
                            args: {
                                name: "ACCOUNT",
                                description: "string",
                                suggestions: [],
                            },
                        },
                        {
                            name: "--billing-project",
                            description: "The Google Cloud Platform project that will be charged quota for operations performed in gcloud. If you need to operate on one project, but need quota against a different project, you can use this flag to specify the billing project. If both `billing/quota_project` and `--billing-project` are specified, `--billing-project` takes precedence. Run `$ gcloud config set --help` to see more information about `billing/quota_project`.",
                            args: {
                                name: "BILLING_PROJECT",
                                description: "string",
                                suggestions: [],
                            },
                        },
                        {
                            name: "--configuration",
                            description: "The configuration to use for this command invocation. For more\ninformation on how to use configurations, run:\n`gcloud topic configurations`.  You can also use the CLOUDSDK_ACTIVE_CONFIG_NAME environment\nvariable to set the equivalent of this flag for a terminal\nsession.",
                            args: {
                                name: "CONFIGURATION",
                                description: "string",
                                suggestions: [],
                            },
                        },
                        {
                            name: "--flags-file",
                            description: "A YAML or JSON file that specifies a *--flag*:*value* dictionary.\nUseful for specifying complex flag values with special characters\nthat work with any command interpreter. Additionally, each\n*--flags-file* arg is replaced by its constituent flags. See\n$ gcloud topic flags-file for more information.",
                            args: {
                                name: "YAML_FILE",
                                description: "string",
                                suggestions: [],
                            },
                        },
                        {
                            name: "--flatten",
                            description: "Flatten _name_[] output resource slices in _KEY_ into separate records\nfor each item in each slice. Multiple keys and slices may be specified.\nThis also flattens keys for *--format* and *--filter*. For example,\n*--flatten=abc.def* flattens *abc.def[].ghi* references to\n*abc.def.ghi*. A resource record containing *abc.def[]* with N elements\nwill expand to N records in the flattened output. This flag interacts\nwith other flags that are applied in this order: *--flatten*,\n*--sort-by*, *--filter*, *--limit*.",
                            args: {
                                name: "KEY",
                                description: "list",
                                suggestions: [],
                            },
                        },
                        {
                            name: "--format",
                            description: "Set the format for printing command output resources. The default is a\ncommand-specific human-friendly output format. The supported formats\nare: `config`, `csv`, `default`, `diff`, `disable`, `flattened`, `get`, `json`, `list`, `multi`, `none`, `object`, `table`, `text`, `value`, `yaml`. For more details run $ gcloud topic formats.",
                            args: {
                                name: "FORMAT",
                                description: "string",
                                suggestions: [],
                            },
                        },
                        {
                            name: "--help",
                            description: "Display detailed help.",
                        },
                        {
                            name: "--impersonate-service-account",
                            description: "For this gcloud invocation, all API requests will be made as the given service account instead of the currently selected account. This is done without needing to create, download, and activate a key for the account. In order to perform operations as the service account, your currently selected account must have an IAM role that includes the iam.serviceAccounts.getAccessToken permission for the service account. The roles/iam.serviceAccountTokenCreator role has this permission or you may create a custom role. Overrides the default *auth/impersonate_service_account* property value for this command invocation.",
                            args: {
                                name: "SERVICE_ACCOUNT_EMAIL",
                                description: "string",
                                suggestions: [],
                            },
                        },
                        {
                            name: "--log-http",
                            description: "Log all HTTP server requests and responses to stderr. Overrides the default *core/log_http* property value for this command invocation.",
                        },
                        {
                            name: "--project",
                            description: "The Google Cloud Platform project ID to use for this invocation. If\nomitted, then the current project is assumed; the current project can\nbe listed using `gcloud config list --format='text(core.project)'`\nand can be set using `gcloud config set project PROJECTID`.\n+\n`--project` and its fallback `core/project` property play two roles\nin the invocation. It specifies the project of the resource to\noperate on. It also specifies the project for API enablement check,\nquota, and billing. To specify a different project for quota and\nbilling, use `--billing-project` or `billing/quota_project` property.",
                            args: {
                                name: "PROJECT_ID",
                                description: "string",
                                suggestions: [],
                            },
                        },
                        {
                            name: "--quiet",
                            description: "Disable all interactive prompts when running gcloud commands. If input\nis required, defaults will be used, or an error will be raised.\nOverrides the default core/disable_prompts property value for this\ncommand invocation. This is equivalent to setting the environment\nvariable `CLOUDSDK_CORE_DISABLE_PROMPTS` to 1.",
                        },
                        {
                            name: "--trace-token",
                            description: "Token used to route traces of service requests for investigation of issues. Overrides the default *core/trace_token* property value for this command invocation.",
                            args: {
                                name: "TRACE_TOKEN",
                                description: "string",
                                suggestions: [],
                            },
                        },
                        {
                            name: "--user-output-enabled",
                            description: "Print user intended output to the console. Overrides the default *core/user_output_enabled* property value for this command invocation. Use *--no-user-output-enabled* to disable.",
                        },
                        {
                            name: "--verbosity",
                            description: "Override the default verbosity for this command. Overrides the default *core/verbosity* property value for this command invocation. _VERBOSITY_ must be one of: *debug*, *info*, *warning*, *error*, *critical*, *none*.",
                            args: {
                                name: "VERBOSITY",
                                description: "string",
                                suggestions: [
                                    "debug",
                                    "info",
                                    "warning",
                                    "error",
                                    "critical",
                                    "none",
                                ],
                            },
                        },
                    ],
                    args: [
                        {
                            name: "FOLDER_ID",
                            description: "ID for the folder you want to describe.",
                            variadic: false,
                        },
                    ],
                },
                {
                    name: "get-ancestors-iam-policy",
                    description: "Get IAM policies for a folder and its ancestors.",
<<<<<<< HEAD
                    subcommands: [],
=======
>>>>>>> 8601a08... feat: add built files
                    options: [
                        {
                            name: "--account",
                            description: "Google Cloud Platform user account to use for invocation. Overrides the default *core/account* property value for this command invocation.",
                            args: {
                                name: "ACCOUNT",
                                description: "string",
                                suggestions: [],
                            },
                        },
                        {
                            name: "--billing-project",
                            description: "The Google Cloud Platform project that will be charged quota for operations performed in gcloud. If you need to operate on one project, but need quota against a different project, you can use this flag to specify the billing project. If both `billing/quota_project` and `--billing-project` are specified, `--billing-project` takes precedence. Run `$ gcloud config set --help` to see more information about `billing/quota_project`.",
                            args: {
                                name: "BILLING_PROJECT",
                                description: "string",
                                suggestions: [],
                            },
                        },
                        {
                            name: "--configuration",
                            description: "The configuration to use for this command invocation. For more\ninformation on how to use configurations, run:\n`gcloud topic configurations`.  You can also use the CLOUDSDK_ACTIVE_CONFIG_NAME environment\nvariable to set the equivalent of this flag for a terminal\nsession.",
                            args: {
                                name: "CONFIGURATION",
                                description: "string",
                                suggestions: [],
                            },
                        },
                        {
                            name: "--filter",
                            description: "Apply a Boolean filter _EXPRESSION_ to each resource item to be listed.\nIf the expression evaluates `True`, then that item is listed. For more\ndetails and examples of filter expressions, run $ gcloud topic filters. This\nflag interacts with other flags that are applied in this order: *--flatten*,\n*--sort-by*, *--filter*, *--limit*.",
                            args: {
                                name: "EXPRESSION",
                                description: "string",
                                suggestions: [],
                            },
                        },
                        {
                            name: "--flags-file",
                            description: "A YAML or JSON file that specifies a *--flag*:*value* dictionary.\nUseful for specifying complex flag values with special characters\nthat work with any command interpreter. Additionally, each\n*--flags-file* arg is replaced by its constituent flags. See\n$ gcloud topic flags-file for more information.",
                            args: {
                                name: "YAML_FILE",
                                description: "string",
                                suggestions: [],
                            },
                        },
                        {
                            name: "--flatten",
                            description: "Flatten _name_[] output resource slices in _KEY_ into separate records\nfor each item in each slice. Multiple keys and slices may be specified.\nThis also flattens keys for *--format* and *--filter*. For example,\n*--flatten=abc.def* flattens *abc.def[].ghi* references to\n*abc.def.ghi*. A resource record containing *abc.def[]* with N elements\nwill expand to N records in the flattened output. This flag interacts\nwith other flags that are applied in this order: *--flatten*,\n*--sort-by*, *--filter*, *--limit*.",
                            args: {
                                name: "KEY",
                                description: "list",
                                suggestions: [],
                            },
                        },
                        {
                            name: "--format",
                            description: "Set the format for printing command output resources. The default is a\ncommand-specific human-friendly output format. The supported formats\nare: `config`, `csv`, `default`, `diff`, `disable`, `flattened`, `get`, `json`, `list`, `multi`, `none`, `object`, `table`, `text`, `value`, `yaml`. For more details run $ gcloud topic formats.",
                            args: {
                                name: "FORMAT",
                                description: "string",
                                suggestions: [],
                            },
                        },
                        {
                            name: "--help",
                            description: "Display detailed help.",
                        },
                        {
                            name: "--impersonate-service-account",
                            description: "For this gcloud invocation, all API requests will be made as the given service account instead of the currently selected account. This is done without needing to create, download, and activate a key for the account. In order to perform operations as the service account, your currently selected account must have an IAM role that includes the iam.serviceAccounts.getAccessToken permission for the service account. The roles/iam.serviceAccountTokenCreator role has this permission or you may create a custom role. Overrides the default *auth/impersonate_service_account* property value for this command invocation.",
                            args: {
                                name: "SERVICE_ACCOUNT_EMAIL",
                                description: "string",
                                suggestions: [],
                            },
                        },
                        {
                            name: "--limit",
                            description: "Maximum number of resources to list. The default is *unlimited*.\nThis flag interacts with other flags that are applied in this order:\n*--flatten*, *--sort-by*, *--filter*, *--limit*.",
                            args: {
                                name: "LIMIT",
                                description: "googlecloudsdk.calliope.arg_parsers:Parse",
                                suggestions: [],
                            },
                        },
                        {
                            name: "--log-http",
                            description: "Log all HTTP server requests and responses to stderr. Overrides the default *core/log_http* property value for this command invocation.",
                        },
                        {
                            name: "--page-size",
                            description: "Some services group resource list output into pages. This flag specifies\nthe maximum number of resources per page. The default is determined by the\nservice if it supports paging, otherwise it is *unlimited* (no paging).\nPaging may be applied before or after *--filter* and *--limit* depending\non the service.",
                            args: {
                                name: "PAGE_SIZE",
                                description: "googlecloudsdk.calliope.arg_parsers:Parse",
                                suggestions: [],
                            },
                        },
                        {
                            name: "--project",
                            description: "The Google Cloud Platform project ID to use for this invocation. If\nomitted, then the current project is assumed; the current project can\nbe listed using `gcloud config list --format='text(core.project)'`\nand can be set using `gcloud config set project PROJECTID`.\n+\n`--project` and its fallback `core/project` property play two roles\nin the invocation. It specifies the project of the resource to\noperate on. It also specifies the project for API enablement check,\nquota, and billing. To specify a different project for quota and\nbilling, use `--billing-project` or `billing/quota_project` property.",
                            args: {
                                name: "PROJECT_ID",
                                description: "string",
                                suggestions: [],
                            },
                        },
                        {
                            name: "--quiet",
                            description: "Disable all interactive prompts when running gcloud commands. If input\nis required, defaults will be used, or an error will be raised.\nOverrides the default core/disable_prompts property value for this\ncommand invocation. This is equivalent to setting the environment\nvariable `CLOUDSDK_CORE_DISABLE_PROMPTS` to 1.",
                        },
                        {
                            name: "--sort-by",
                            description: "Comma-separated list of resource field key names to sort by. The\ndefault order is ascending. Prefix a field with ``~'' for descending\norder on that field. This flag interacts with other flags that are applied\nin this order: *--flatten*, *--sort-by*, *--filter*, *--limit*.",
                            args: {
                                name: "FIELD",
                                description: "list",
                                suggestions: [],
                            },
                        },
                        {
                            name: "--trace-token",
                            description: "Token used to route traces of service requests for investigation of issues. Overrides the default *core/trace_token* property value for this command invocation.",
                            args: {
                                name: "TRACE_TOKEN",
                                description: "string",
                                suggestions: [],
                            },
                        },
                        {
                            name: "--user-output-enabled",
                            description: "Print user intended output to the console. Overrides the default *core/user_output_enabled* property value for this command invocation. Use *--no-user-output-enabled* to disable.",
                        },
                        {
                            name: "--verbosity",
                            description: "Override the default verbosity for this command. Overrides the default *core/verbosity* property value for this command invocation. _VERBOSITY_ must be one of: *debug*, *info*, *warning*, *error*, *critical*, *none*.",
                            args: {
                                name: "VERBOSITY",
                                description: "string",
                                suggestions: [
                                    "debug",
                                    "info",
                                    "warning",
                                    "error",
                                    "critical",
                                    "none",
                                ],
                            },
                        },
                    ],
                    args: [
                        {
                            name: "FOLDER_ID",
                            description: "ID of the folder or fully qualified identifier for the folder.",
                            variadic: false,
                        },
                    ],
                },
                {
                    name: "get-iam-policy",
                    description: "Get IAM policy for a folder.",
<<<<<<< HEAD
                    subcommands: [],
=======
>>>>>>> 8601a08... feat: add built files
                    options: [
                        {
                            name: "--account",
                            description: "Google Cloud Platform user account to use for invocation. Overrides the default *core/account* property value for this command invocation.",
                            args: {
                                name: "ACCOUNT",
                                description: "string",
                                suggestions: [],
                            },
                        },
                        {
                            name: "--billing-project",
                            description: "The Google Cloud Platform project that will be charged quota for operations performed in gcloud. If you need to operate on one project, but need quota against a different project, you can use this flag to specify the billing project. If both `billing/quota_project` and `--billing-project` are specified, `--billing-project` takes precedence. Run `$ gcloud config set --help` to see more information about `billing/quota_project`.",
                            args: {
                                name: "BILLING_PROJECT",
                                description: "string",
                                suggestions: [],
                            },
                        },
                        {
                            name: "--configuration",
                            description: "The configuration to use for this command invocation. For more\ninformation on how to use configurations, run:\n`gcloud topic configurations`.  You can also use the CLOUDSDK_ACTIVE_CONFIG_NAME environment\nvariable to set the equivalent of this flag for a terminal\nsession.",
                            args: {
                                name: "CONFIGURATION",
                                description: "string",
                                suggestions: [],
                            },
                        },
                        {
                            name: "--filter",
                            description: "Apply a Boolean filter _EXPRESSION_ to each resource item to be listed.\nIf the expression evaluates `True`, then that item is listed. For more\ndetails and examples of filter expressions, run $ gcloud topic filters. This\nflag interacts with other flags that are applied in this order: *--flatten*,\n*--sort-by*, *--filter*, *--limit*.",
                            args: {
                                name: "EXPRESSION",
                                description: "string",
                                suggestions: [],
                            },
                        },
                        {
                            name: "--flags-file",
                            description: "A YAML or JSON file that specifies a *--flag*:*value* dictionary.\nUseful for specifying complex flag values with special characters\nthat work with any command interpreter. Additionally, each\n*--flags-file* arg is replaced by its constituent flags. See\n$ gcloud topic flags-file for more information.",
                            args: {
                                name: "YAML_FILE",
                                description: "string",
                                suggestions: [],
                            },
                        },
                        {
                            name: "--flatten",
                            description: "Flatten _name_[] output resource slices in _KEY_ into separate records\nfor each item in each slice. Multiple keys and slices may be specified.\nThis also flattens keys for *--format* and *--filter*. For example,\n*--flatten=abc.def* flattens *abc.def[].ghi* references to\n*abc.def.ghi*. A resource record containing *abc.def[]* with N elements\nwill expand to N records in the flattened output. This flag interacts\nwith other flags that are applied in this order: *--flatten*,\n*--sort-by*, *--filter*, *--limit*.",
                            args: {
                                name: "KEY",
                                description: "list",
                                suggestions: [],
                            },
                        },
                        {
                            name: "--format",
                            description: "Set the format for printing command output resources. The default is a\ncommand-specific human-friendly output format. The supported formats\nare: `config`, `csv`, `default`, `diff`, `disable`, `flattened`, `get`, `json`, `list`, `multi`, `none`, `object`, `table`, `text`, `value`, `yaml`. For more details run $ gcloud topic formats.",
                            args: {
                                name: "FORMAT",
                                description: "string",
                                suggestions: [],
                            },
                        },
                        {
                            name: "--help",
                            description: "Display detailed help.",
                        },
                        {
                            name: "--impersonate-service-account",
                            description: "For this gcloud invocation, all API requests will be made as the given service account instead of the currently selected account. This is done without needing to create, download, and activate a key for the account. In order to perform operations as the service account, your currently selected account must have an IAM role that includes the iam.serviceAccounts.getAccessToken permission for the service account. The roles/iam.serviceAccountTokenCreator role has this permission or you may create a custom role. Overrides the default *auth/impersonate_service_account* property value for this command invocation.",
                            args: {
                                name: "SERVICE_ACCOUNT_EMAIL",
                                description: "string",
                                suggestions: [],
                            },
                        },
                        {
                            name: "--limit",
                            description: "Maximum number of resources to list. The default is *unlimited*.\nThis flag interacts with other flags that are applied in this order:\n*--flatten*, *--sort-by*, *--filter*, *--limit*.",
                            args: {
                                name: "LIMIT",
                                description: "googlecloudsdk.calliope.arg_parsers:Parse",
                                suggestions: [],
                            },
                        },
                        {
                            name: "--log-http",
                            description: "Log all HTTP server requests and responses to stderr. Overrides the default *core/log_http* property value for this command invocation.",
                        },
                        {
                            name: "--page-size",
                            description: "Some services group resource list output into pages. This flag specifies\nthe maximum number of resources per page. The default is determined by the\nservice if it supports paging, otherwise it is *unlimited* (no paging).\nPaging may be applied before or after *--filter* and *--limit* depending\non the service.",
                            args: {
                                name: "PAGE_SIZE",
                                description: "googlecloudsdk.calliope.arg_parsers:Parse",
                                suggestions: [],
                            },
                        },
                        {
                            name: "--project",
                            description: "The Google Cloud Platform project ID to use for this invocation. If\nomitted, then the current project is assumed; the current project can\nbe listed using `gcloud config list --format='text(core.project)'`\nand can be set using `gcloud config set project PROJECTID`.\n+\n`--project` and its fallback `core/project` property play two roles\nin the invocation. It specifies the project of the resource to\noperate on. It also specifies the project for API enablement check,\nquota, and billing. To specify a different project for quota and\nbilling, use `--billing-project` or `billing/quota_project` property.",
                            args: {
                                name: "PROJECT_ID",
                                description: "string",
                                suggestions: [],
                            },
                        },
                        {
                            name: "--quiet",
                            description: "Disable all interactive prompts when running gcloud commands. If input\nis required, defaults will be used, or an error will be raised.\nOverrides the default core/disable_prompts property value for this\ncommand invocation. This is equivalent to setting the environment\nvariable `CLOUDSDK_CORE_DISABLE_PROMPTS` to 1.",
                        },
                        {
                            name: "--sort-by",
                            description: "Comma-separated list of resource field key names to sort by. The\ndefault order is ascending. Prefix a field with ``~'' for descending\norder on that field. This flag interacts with other flags that are applied\nin this order: *--flatten*, *--sort-by*, *--filter*, *--limit*.",
                            args: {
                                name: "FIELD",
                                description: "list",
                                suggestions: [],
                            },
                        },
                        {
                            name: "--trace-token",
                            description: "Token used to route traces of service requests for investigation of issues. Overrides the default *core/trace_token* property value for this command invocation.",
                            args: {
                                name: "TRACE_TOKEN",
                                description: "string",
                                suggestions: [],
                            },
                        },
                        {
                            name: "--user-output-enabled",
                            description: "Print user intended output to the console. Overrides the default *core/user_output_enabled* property value for this command invocation. Use *--no-user-output-enabled* to disable.",
                        },
                        {
                            name: "--verbosity",
                            description: "Override the default verbosity for this command. Overrides the default *core/verbosity* property value for this command invocation. _VERBOSITY_ must be one of: *debug*, *info*, *warning*, *error*, *critical*, *none*.",
                            args: {
                                name: "VERBOSITY",
                                description: "string",
                                suggestions: [
                                    "debug",
                                    "info",
                                    "warning",
                                    "error",
                                    "critical",
                                    "none",
                                ],
                            },
                        },
                    ],
                    args: [
                        {
                            name: "FOLDER_ID",
                            description: "ID for the folder whose policy you want to get.",
                            variadic: false,
                        },
                    ],
                },
                {
                    name: "list",
                    description: "List folders accessible by the active account.",
<<<<<<< HEAD
                    subcommands: [],
=======
>>>>>>> 8601a08... feat: add built files
                    options: [
                        {
                            name: "--account",
                            description: "Google Cloud Platform user account to use for invocation. Overrides the default *core/account* property value for this command invocation.",
                            args: {
                                name: "ACCOUNT",
                                description: "string",
                                suggestions: [],
                            },
                        },
                        {
                            name: "--billing-project",
                            description: "The Google Cloud Platform project that will be charged quota for operations performed in gcloud. If you need to operate on one project, but need quota against a different project, you can use this flag to specify the billing project. If both `billing/quota_project` and `--billing-project` are specified, `--billing-project` takes precedence. Run `$ gcloud config set --help` to see more information about `billing/quota_project`.",
                            args: {
                                name: "BILLING_PROJECT",
                                description: "string",
                                suggestions: [],
                            },
                        },
                        {
                            name: "--configuration",
                            description: "The configuration to use for this command invocation. For more\ninformation on how to use configurations, run:\n`gcloud topic configurations`.  You can also use the CLOUDSDK_ACTIVE_CONFIG_NAME environment\nvariable to set the equivalent of this flag for a terminal\nsession.",
                            args: {
                                name: "CONFIGURATION",
                                description: "string",
                                suggestions: [],
                            },
                        },
                        {
                            name: "--filter",
                            description: "Apply a Boolean filter _EXPRESSION_ to each resource item to be listed.\nIf the expression evaluates `True`, then that item is listed. For more\ndetails and examples of filter expressions, run $ gcloud topic filters. This\nflag interacts with other flags that are applied in this order: *--flatten*,\n*--sort-by*, *--filter*, *--limit*.",
                            args: {
                                name: "EXPRESSION",
                                description: "string",
                                suggestions: [],
                            },
                        },
                        {
                            name: "--flags-file",
                            description: "A YAML or JSON file that specifies a *--flag*:*value* dictionary.\nUseful for specifying complex flag values with special characters\nthat work with any command interpreter. Additionally, each\n*--flags-file* arg is replaced by its constituent flags. See\n$ gcloud topic flags-file for more information.",
                            args: {
                                name: "YAML_FILE",
                                description: "string",
                                suggestions: [],
                            },
                        },
                        {
                            name: "--flatten",
                            description: "Flatten _name_[] output resource slices in _KEY_ into separate records\nfor each item in each slice. Multiple keys and slices may be specified.\nThis also flattens keys for *--format* and *--filter*. For example,\n*--flatten=abc.def* flattens *abc.def[].ghi* references to\n*abc.def.ghi*. A resource record containing *abc.def[]* with N elements\nwill expand to N records in the flattened output. This flag interacts\nwith other flags that are applied in this order: *--flatten*,\n*--sort-by*, *--filter*, *--limit*.",
                            args: {
                                name: "KEY",
                                description: "list",
                                suggestions: [],
                            },
                        },
                        {
                            name: "--folder",
                            description: "ID for the folder to list folders under",
                            args: {
                                name: "FOLDER_ID",
                                description: "string",
                                suggestions: [],
                            },
                        },
                        {
                            name: "--format",
                            description: "Set the format for printing command output resources. The default is a\ncommand-specific human-friendly output format. The supported formats\nare: `config`, `csv`, `default`, `diff`, `disable`, `flattened`, `get`, `json`, `list`, `multi`, `none`, `object`, `table`, `text`, `value`, `yaml`. For more details run $ gcloud topic formats.",
                            args: {
                                name: "FORMAT",
                                description: "string",
                                suggestions: [],
                            },
                        },
                        {
                            name: "--help",
                            description: "Display detailed help.",
                        },
                        {
                            name: "--impersonate-service-account",
                            description: "For this gcloud invocation, all API requests will be made as the given service account instead of the currently selected account. This is done without needing to create, download, and activate a key for the account. In order to perform operations as the service account, your currently selected account must have an IAM role that includes the iam.serviceAccounts.getAccessToken permission for the service account. The roles/iam.serviceAccountTokenCreator role has this permission or you may create a custom role. Overrides the default *auth/impersonate_service_account* property value for this command invocation.",
                            args: {
                                name: "SERVICE_ACCOUNT_EMAIL",
                                description: "string",
                                suggestions: [],
                            },
                        },
                        {
                            name: "--limit",
                            description: "Maximum number of resources to list. The default is *unlimited*.\nThis flag interacts with other flags that are applied in this order:\n*--flatten*, *--sort-by*, *--filter*, *--limit*.",
                            args: {
                                name: "LIMIT",
                                description: "googlecloudsdk.calliope.arg_parsers:Parse",
                                suggestions: [],
                            },
                        },
                        {
                            name: "--log-http",
                            description: "Log all HTTP server requests and responses to stderr. Overrides the default *core/log_http* property value for this command invocation.",
                        },
                        {
                            name: "--organization",
                            description: "ID for the organization to list folders under",
                            args: {
                                name: "ORGANIZATION_ID",
                                description: "string",
                                suggestions: [],
                            },
                        },
                        {
                            name: "--page-size",
                            description: "Some services group resource list output into pages. This flag specifies\nthe maximum number of resources per page. The default is determined by the\nservice if it supports paging, otherwise it is *unlimited* (no paging).\nPaging may be applied before or after *--filter* and *--limit* depending\non the service.",
                            args: {
                                name: "PAGE_SIZE",
                                description: "googlecloudsdk.calliope.arg_parsers:Parse",
                                suggestions: [],
                            },
                        },
                        {
                            name: "--project",
                            description: "The Google Cloud Platform project ID to use for this invocation. If\nomitted, then the current project is assumed; the current project can\nbe listed using `gcloud config list --format='text(core.project)'`\nand can be set using `gcloud config set project PROJECTID`.\n+\n`--project` and its fallback `core/project` property play two roles\nin the invocation. It specifies the project of the resource to\noperate on. It also specifies the project for API enablement check,\nquota, and billing. To specify a different project for quota and\nbilling, use `--billing-project` or `billing/quota_project` property.",
                            args: {
                                name: "PROJECT_ID",
                                description: "string",
                                suggestions: [],
                            },
                        },
                        {
                            name: "--quiet",
                            description: "Disable all interactive prompts when running gcloud commands. If input\nis required, defaults will be used, or an error will be raised.\nOverrides the default core/disable_prompts property value for this\ncommand invocation. This is equivalent to setting the environment\nvariable `CLOUDSDK_CORE_DISABLE_PROMPTS` to 1.",
                        },
                        {
                            name: "--sort-by",
                            description: "Comma-separated list of resource field key names to sort by. The\ndefault order is ascending. Prefix a field with ``~'' for descending\norder on that field. This flag interacts with other flags that are applied\nin this order: *--flatten*, *--sort-by*, *--filter*, *--limit*.",
                            args: {
                                name: "FIELD",
                                description: "list",
                                suggestions: [],
                            },
                        },
                        {
                            name: "--trace-token",
                            description: "Token used to route traces of service requests for investigation of issues. Overrides the default *core/trace_token* property value for this command invocation.",
                            args: {
                                name: "TRACE_TOKEN",
                                description: "string",
                                suggestions: [],
                            },
                        },
                        {
                            name: "--uri",
                            description: "Print a list of resource URIs instead of the default output.",
                        },
                        {
                            name: "--user-output-enabled",
                            description: "Print user intended output to the console. Overrides the default *core/user_output_enabled* property value for this command invocation. Use *--no-user-output-enabled* to disable.",
                        },
                        {
                            name: "--verbosity",
                            description: "Override the default verbosity for this command. Overrides the default *core/verbosity* property value for this command invocation. _VERBOSITY_ must be one of: *debug*, *info*, *warning*, *error*, *critical*, *none*.",
                            args: {
                                name: "VERBOSITY",
                                description: "string",
                                suggestions: [
                                    "debug",
                                    "info",
                                    "warning",
                                    "error",
                                    "critical",
                                    "none",
                                ],
                            },
                        },
                    ],
<<<<<<< HEAD
                    args: [],
=======
>>>>>>> 8601a08... feat: add built files
                },
                {
                    name: "move",
                    description: "Move a folder to a new position within the same organization.",
<<<<<<< HEAD
                    subcommands: [],
=======
>>>>>>> 8601a08... feat: add built files
                    options: [
                        {
                            name: "--account",
                            description: "Google Cloud Platform user account to use for invocation. Overrides the default *core/account* property value for this command invocation.",
                            args: {
                                name: "ACCOUNT",
                                description: "string",
                                suggestions: [],
                            },
                        },
                        {
                            name: "--async",
                            description: "Return immediately, without waiting for the operation in progress to\ncomplete.",
                        },
                        {
                            name: "--billing-project",
                            description: "The Google Cloud Platform project that will be charged quota for operations performed in gcloud. If you need to operate on one project, but need quota against a different project, you can use this flag to specify the billing project. If both `billing/quota_project` and `--billing-project` are specified, `--billing-project` takes precedence. Run `$ gcloud config set --help` to see more information about `billing/quota_project`.",
                            args: {
                                name: "BILLING_PROJECT",
                                description: "string",
                                suggestions: [],
                            },
                        },
                        {
                            name: "--configuration",
                            description: "The configuration to use for this command invocation. For more\ninformation on how to use configurations, run:\n`gcloud topic configurations`.  You can also use the CLOUDSDK_ACTIVE_CONFIG_NAME environment\nvariable to set the equivalent of this flag for a terminal\nsession.",
                            args: {
                                name: "CONFIGURATION",
                                description: "string",
                                suggestions: [],
                            },
                        },
                        {
                            name: "--flags-file",
                            description: "A YAML or JSON file that specifies a *--flag*:*value* dictionary.\nUseful for specifying complex flag values with special characters\nthat work with any command interpreter. Additionally, each\n*--flags-file* arg is replaced by its constituent flags. See\n$ gcloud topic flags-file for more information.",
                            args: {
                                name: "YAML_FILE",
                                description: "string",
                                suggestions: [],
                            },
                        },
                        {
                            name: "--flatten",
                            description: "Flatten _name_[] output resource slices in _KEY_ into separate records\nfor each item in each slice. Multiple keys and slices may be specified.\nThis also flattens keys for *--format* and *--filter*. For example,\n*--flatten=abc.def* flattens *abc.def[].ghi* references to\n*abc.def.ghi*. A resource record containing *abc.def[]* with N elements\nwill expand to N records in the flattened output. This flag interacts\nwith other flags that are applied in this order: *--flatten*,\n*--sort-by*, *--filter*, *--limit*.",
                            args: {
                                name: "KEY",
                                description: "list",
                                suggestions: [],
                            },
                        },
                        {
                            name: "--folder",
                            description: "ID for the folder to use as a parent",
                            args: {
                                name: "FOLDER_ID",
                                description: "string",
                                suggestions: [],
                            },
                        },
                        {
                            name: "--format",
                            description: "Set the format for printing command output resources. The default is a\ncommand-specific human-friendly output format. The supported formats\nare: `config`, `csv`, `default`, `diff`, `disable`, `flattened`, `get`, `json`, `list`, `multi`, `none`, `object`, `table`, `text`, `value`, `yaml`. For more details run $ gcloud topic formats.",
                            args: {
                                name: "FORMAT",
                                description: "string",
                                suggestions: [],
                            },
                        },
                        {
                            name: "--help",
                            description: "Display detailed help.",
                        },
                        {
                            name: "--impersonate-service-account",
                            description: "For this gcloud invocation, all API requests will be made as the given service account instead of the currently selected account. This is done without needing to create, download, and activate a key for the account. In order to perform operations as the service account, your currently selected account must have an IAM role that includes the iam.serviceAccounts.getAccessToken permission for the service account. The roles/iam.serviceAccountTokenCreator role has this permission or you may create a custom role. Overrides the default *auth/impersonate_service_account* property value for this command invocation.",
                            args: {
                                name: "SERVICE_ACCOUNT_EMAIL",
                                description: "string",
                                suggestions: [],
                            },
                        },
                        {
                            name: "--log-http",
                            description: "Log all HTTP server requests and responses to stderr. Overrides the default *core/log_http* property value for this command invocation.",
                        },
                        {
                            name: "--organization",
                            description: "ID for the organization to use as a parent",
                            args: {
                                name: "ORGANIZATION_ID",
                                description: "string",
                                suggestions: [],
                            },
                        },
                        {
                            name: "--project",
                            description: "The Google Cloud Platform project ID to use for this invocation. If\nomitted, then the current project is assumed; the current project can\nbe listed using `gcloud config list --format='text(core.project)'`\nand can be set using `gcloud config set project PROJECTID`.\n+\n`--project` and its fallback `core/project` property play two roles\nin the invocation. It specifies the project of the resource to\noperate on. It also specifies the project for API enablement check,\nquota, and billing. To specify a different project for quota and\nbilling, use `--billing-project` or `billing/quota_project` property.",
                            args: {
                                name: "PROJECT_ID",
                                description: "string",
                                suggestions: [],
                            },
                        },
                        {
                            name: "--quiet",
                            description: "Disable all interactive prompts when running gcloud commands. If input\nis required, defaults will be used, or an error will be raised.\nOverrides the default core/disable_prompts property value for this\ncommand invocation. This is equivalent to setting the environment\nvariable `CLOUDSDK_CORE_DISABLE_PROMPTS` to 1.",
                        },
                        {
                            name: "--trace-token",
                            description: "Token used to route traces of service requests for investigation of issues. Overrides the default *core/trace_token* property value for this command invocation.",
                            args: {
                                name: "TRACE_TOKEN",
                                description: "string",
                                suggestions: [],
                            },
                        },
                        {
                            name: "--user-output-enabled",
                            description: "Print user intended output to the console. Overrides the default *core/user_output_enabled* property value for this command invocation. Use *--no-user-output-enabled* to disable.",
                        },
                        {
                            name: "--verbosity",
                            description: "Override the default verbosity for this command. Overrides the default *core/verbosity* property value for this command invocation. _VERBOSITY_ must be one of: *debug*, *info*, *warning*, *error*, *critical*, *none*.",
                            args: {
                                name: "VERBOSITY",
                                description: "string",
                                suggestions: [
                                    "debug",
                                    "info",
                                    "warning",
                                    "error",
                                    "critical",
                                    "none",
                                ],
                            },
                        },
                    ],
                    args: [
                        {
                            name: "FOLDER_ID",
                            description: "ID for the folder you want to move.",
                            variadic: false,
                        },
                    ],
                },
                {
                    name: "remove-iam-policy-binding",
                    description: "Remove IAM policy binding for a folder.",
<<<<<<< HEAD
                    subcommands: [],
=======
>>>>>>> 8601a08... feat: add built files
                    options: [
                        {
                            name: "--account",
                            description: "Google Cloud Platform user account to use for invocation. Overrides the default *core/account* property value for this command invocation.",
                            args: {
                                name: "ACCOUNT",
                                description: "string",
                                suggestions: [],
                            },
                        },
                        {
                            name: "--all",
                            description: "Remove all bindings with this role and member, irrespective of any\nconditions.",
                        },
                        {
                            name: "--billing-project",
                            description: "The Google Cloud Platform project that will be charged quota for operations performed in gcloud. If you need to operate on one project, but need quota against a different project, you can use this flag to specify the billing project. If both `billing/quota_project` and `--billing-project` are specified, `--billing-project` takes precedence. Run `$ gcloud config set --help` to see more information about `billing/quota_project`.",
                            args: {
                                name: "BILLING_PROJECT",
                                description: "string",
                                suggestions: [],
                            },
                        },
                        {
                            name: "--condition",
                            description: "+\nThe condition of the binding to be removed. When the condition is explicitly\nspecified as `None` (`--condition=None`), it matches a binding without a\ncondition. Otherwise, only the binding with a condition which exactly matches\nthe specified condition (including the optional description) will be removed.\n+\n*expression*::: (Required) Expression of the condition which\nevaluates to True or False. This uses a subset of Common Expression\nLanguage syntax.\n+\n*title*::: (Required) A short string describing the purpose of the expression.\n+\n*description*::: (Optional) Additional description for the expression.\n+\nNOTE: An unsatisfied condition will not allow access via this\nbinding.",
                            args: {
                                name: "KEY=VALUE",
                                description: "dict",
                                suggestions: [],
                            },
                        },
                        {
                            name: "--condition-from-file",
                            description: "Path to a local JSON or YAML file that defines the condition.\nTo see available fields, see the help for `--condition`.",
                            args: {
                                name: "CONDITION_FROM_FILE",
                                description: "googlecloudsdk.calliope.arg_parsers:FileContents",
                                suggestions: [],
                            },
                        },
                        {
                            name: "--configuration",
                            description: "The configuration to use for this command invocation. For more\ninformation on how to use configurations, run:\n`gcloud topic configurations`.  You can also use the CLOUDSDK_ACTIVE_CONFIG_NAME environment\nvariable to set the equivalent of this flag for a terminal\nsession.",
                            args: {
                                name: "CONFIGURATION",
                                description: "string",
                                suggestions: [],
                            },
                        },
                        {
                            name: "--flags-file",
                            description: "A YAML or JSON file that specifies a *--flag*:*value* dictionary.\nUseful for specifying complex flag values with special characters\nthat work with any command interpreter. Additionally, each\n*--flags-file* arg is replaced by its constituent flags. See\n$ gcloud topic flags-file for more information.",
                            args: {
                                name: "YAML_FILE",
                                description: "string",
                                suggestions: [],
                            },
                        },
                        {
                            name: "--flatten",
                            description: "Flatten _name_[] output resource slices in _KEY_ into separate records\nfor each item in each slice. Multiple keys and slices may be specified.\nThis also flattens keys for *--format* and *--filter*. For example,\n*--flatten=abc.def* flattens *abc.def[].ghi* references to\n*abc.def.ghi*. A resource record containing *abc.def[]* with N elements\nwill expand to N records in the flattened output. This flag interacts\nwith other flags that are applied in this order: *--flatten*,\n*--sort-by*, *--filter*, *--limit*.",
                            args: {
                                name: "KEY",
                                description: "list",
                                suggestions: [],
                            },
                        },
                        {
                            name: "--format",
                            description: "Set the format for printing command output resources. The default is a\ncommand-specific human-friendly output format. The supported formats\nare: `config`, `csv`, `default`, `diff`, `disable`, `flattened`, `get`, `json`, `list`, `multi`, `none`, `object`, `table`, `text`, `value`, `yaml`. For more details run $ gcloud topic formats.",
                            args: {
                                name: "FORMAT",
                                description: "string",
                                suggestions: [],
                            },
                        },
                        {
                            name: "--help",
                            description: "Display detailed help.",
                        },
                        {
                            name: "--impersonate-service-account",
                            description: "For this gcloud invocation, all API requests will be made as the given service account instead of the currently selected account. This is done without needing to create, download, and activate a key for the account. In order to perform operations as the service account, your currently selected account must have an IAM role that includes the iam.serviceAccounts.getAccessToken permission for the service account. The roles/iam.serviceAccountTokenCreator role has this permission or you may create a custom role. Overrides the default *auth/impersonate_service_account* property value for this command invocation.",
                            args: {
                                name: "SERVICE_ACCOUNT_EMAIL",
                                description: "string",
                                suggestions: [],
                            },
                        },
                        {
                            name: "--log-http",
                            description: "Log all HTTP server requests and responses to stderr. Overrides the default *core/log_http* property value for this command invocation.",
                        },
                        {
                            name: "--member",
                            description: "The member to remove the binding for. Should be of the form `user|group|serviceAccount:email` or\n`domain:domain`.\n+\nExamples: `user:test-user@gmail.com`, `group:admins@example.com`,\n`serviceAccount:test123@example.domain.com`, or\n`domain:example.domain.com`.\n+\nCan also be one of the following special values:\n* `allUsers` - Special identifier that represents anyone who is on the internet,\n   with or without a Google account.\n* `allAuthenticatedUsers` - Special identifier that represents anyone who is\n   authenticated with a Google account or a service account.",
                            args: {
                                name: "MEMBER",
                                description: "string",
                                suggestions: [],
                            },
                            priority: 100,
                        },
                        {
                            name: "--project",
                            description: "The Google Cloud Platform project ID to use for this invocation. If\nomitted, then the current project is assumed; the current project can\nbe listed using `gcloud config list --format='text(core.project)'`\nand can be set using `gcloud config set project PROJECTID`.\n+\n`--project` and its fallback `core/project` property play two roles\nin the invocation. It specifies the project of the resource to\noperate on. It also specifies the project for API enablement check,\nquota, and billing. To specify a different project for quota and\nbilling, use `--billing-project` or `billing/quota_project` property.",
                            args: {
                                name: "PROJECT_ID",
                                description: "string",
                                suggestions: [],
                            },
                        },
                        {
                            name: "--quiet",
                            description: "Disable all interactive prompts when running gcloud commands. If input\nis required, defaults will be used, or an error will be raised.\nOverrides the default core/disable_prompts property value for this\ncommand invocation. This is equivalent to setting the environment\nvariable `CLOUDSDK_CORE_DISABLE_PROMPTS` to 1.",
                        },
                        {
                            name: "--role",
                            description: "The role to remove the member from.",
                            args: {
                                name: "ROLE",
                                description: "string",
                                suggestions: [],
                            },
                            priority: 100,
                        },
                        {
                            name: "--trace-token",
                            description: "Token used to route traces of service requests for investigation of issues. Overrides the default *core/trace_token* property value for this command invocation.",
                            args: {
                                name: "TRACE_TOKEN",
                                description: "string",
                                suggestions: [],
                            },
                        },
                        {
                            name: "--user-output-enabled",
                            description: "Print user intended output to the console. Overrides the default *core/user_output_enabled* property value for this command invocation. Use *--no-user-output-enabled* to disable.",
                        },
                        {
                            name: "--verbosity",
                            description: "Override the default verbosity for this command. Overrides the default *core/verbosity* property value for this command invocation. _VERBOSITY_ must be one of: *debug*, *info*, *warning*, *error*, *critical*, *none*.",
                            args: {
                                name: "VERBOSITY",
                                description: "string",
                                suggestions: [
                                    "debug",
                                    "info",
                                    "warning",
                                    "error",
                                    "critical",
                                    "none",
                                ],
                            },
                        },
                    ],
                    args: [
                        {
                            name: "FOLDER",
                            description: "ID of the folder or fully qualified identifier for the folder.",
                            variadic: false,
                        },
                    ],
                },
                {
                    name: "set-iam-policy",
                    description: "Set IAM policy for a folder.",
<<<<<<< HEAD
                    subcommands: [],
=======
>>>>>>> 8601a08... feat: add built files
                    options: [
                        {
                            name: "--account",
                            description: "Google Cloud Platform user account to use for invocation. Overrides the default *core/account* property value for this command invocation.",
                            args: {
                                name: "ACCOUNT",
                                description: "string",
                                suggestions: [],
                            },
                        },
                        {
                            name: "--billing-project",
                            description: "The Google Cloud Platform project that will be charged quota for operations performed in gcloud. If you need to operate on one project, but need quota against a different project, you can use this flag to specify the billing project. If both `billing/quota_project` and `--billing-project` are specified, `--billing-project` takes precedence. Run `$ gcloud config set --help` to see more information about `billing/quota_project`.",
                            args: {
                                name: "BILLING_PROJECT",
                                description: "string",
                                suggestions: [],
                            },
                        },
                        {
                            name: "--configuration",
                            description: "The configuration to use for this command invocation. For more\ninformation on how to use configurations, run:\n`gcloud topic configurations`.  You can also use the CLOUDSDK_ACTIVE_CONFIG_NAME environment\nvariable to set the equivalent of this flag for a terminal\nsession.",
                            args: {
                                name: "CONFIGURATION",
                                description: "string",
                                suggestions: [],
                            },
                        },
                        {
                            name: "--flags-file",
                            description: "A YAML or JSON file that specifies a *--flag*:*value* dictionary.\nUseful for specifying complex flag values with special characters\nthat work with any command interpreter. Additionally, each\n*--flags-file* arg is replaced by its constituent flags. See\n$ gcloud topic flags-file for more information.",
                            args: {
                                name: "YAML_FILE",
                                description: "string",
                                suggestions: [],
                            },
                        },
                        {
                            name: "--flatten",
                            description: "Flatten _name_[] output resource slices in _KEY_ into separate records\nfor each item in each slice. Multiple keys and slices may be specified.\nThis also flattens keys for *--format* and *--filter*. For example,\n*--flatten=abc.def* flattens *abc.def[].ghi* references to\n*abc.def.ghi*. A resource record containing *abc.def[]* with N elements\nwill expand to N records in the flattened output. This flag interacts\nwith other flags that are applied in this order: *--flatten*,\n*--sort-by*, *--filter*, *--limit*.",
                            args: {
                                name: "KEY",
                                description: "list",
                                suggestions: [],
                            },
                        },
                        {
                            name: "--format",
                            description: "Set the format for printing command output resources. The default is a\ncommand-specific human-friendly output format. The supported formats\nare: `config`, `csv`, `default`, `diff`, `disable`, `flattened`, `get`, `json`, `list`, `multi`, `none`, `object`, `table`, `text`, `value`, `yaml`. For more details run $ gcloud topic formats.",
                            args: {
                                name: "FORMAT",
                                description: "string",
                                suggestions: [],
                            },
                        },
                        {
                            name: "--help",
                            description: "Display detailed help.",
                        },
                        {
                            name: "--impersonate-service-account",
                            description: "For this gcloud invocation, all API requests will be made as the given service account instead of the currently selected account. This is done without needing to create, download, and activate a key for the account. In order to perform operations as the service account, your currently selected account must have an IAM role that includes the iam.serviceAccounts.getAccessToken permission for the service account. The roles/iam.serviceAccountTokenCreator role has this permission or you may create a custom role. Overrides the default *auth/impersonate_service_account* property value for this command invocation.",
                            args: {
                                name: "SERVICE_ACCOUNT_EMAIL",
                                description: "string",
                                suggestions: [],
                            },
                        },
                        {
                            name: "--log-http",
                            description: "Log all HTTP server requests and responses to stderr. Overrides the default *core/log_http* property value for this command invocation.",
                        },
                        {
                            name: "--project",
                            description: "The Google Cloud Platform project ID to use for this invocation. If\nomitted, then the current project is assumed; the current project can\nbe listed using `gcloud config list --format='text(core.project)'`\nand can be set using `gcloud config set project PROJECTID`.\n+\n`--project` and its fallback `core/project` property play two roles\nin the invocation. It specifies the project of the resource to\noperate on. It also specifies the project for API enablement check,\nquota, and billing. To specify a different project for quota and\nbilling, use `--billing-project` or `billing/quota_project` property.",
                            args: {
                                name: "PROJECT_ID",
                                description: "string",
                                suggestions: [],
                            },
                        },
                        {
                            name: "--quiet",
                            description: "Disable all interactive prompts when running gcloud commands. If input\nis required, defaults will be used, or an error will be raised.\nOverrides the default core/disable_prompts property value for this\ncommand invocation. This is equivalent to setting the environment\nvariable `CLOUDSDK_CORE_DISABLE_PROMPTS` to 1.",
                        },
                        {
                            name: "--trace-token",
                            description: "Token used to route traces of service requests for investigation of issues. Overrides the default *core/trace_token* property value for this command invocation.",
                            args: {
                                name: "TRACE_TOKEN",
                                description: "string",
                                suggestions: [],
                            },
                        },
                        {
                            name: "--user-output-enabled",
                            description: "Print user intended output to the console. Overrides the default *core/user_output_enabled* property value for this command invocation. Use *--no-user-output-enabled* to disable.",
                        },
                        {
                            name: "--verbosity",
                            description: "Override the default verbosity for this command. Overrides the default *core/verbosity* property value for this command invocation. _VERBOSITY_ must be one of: *debug*, *info*, *warning*, *error*, *critical*, *none*.",
                            args: {
                                name: "VERBOSITY",
                                description: "string",
                                suggestions: [
                                    "debug",
                                    "info",
                                    "warning",
                                    "error",
                                    "critical",
                                    "none",
                                ],
                            },
                        },
                    ],
                    args: [
                        {
                            name: "FOLDER_ID",
                            description: "ID for the folder whose policy you want to set.",
                            variadic: false,
                        },
                        {
                            name: "POLICY_FILE",
                            description: "JSON or YAML file with the IAM policy.",
                            variadic: false,
                        },
                    ],
                },
                {
                    name: "undelete",
                    description: "Undelete a folder.",
<<<<<<< HEAD
                    subcommands: [],
=======
>>>>>>> 8601a08... feat: add built files
                    options: [
                        {
                            name: "--account",
                            description: "Google Cloud Platform user account to use for invocation. Overrides the default *core/account* property value for this command invocation.",
                            args: {
                                name: "ACCOUNT",
                                description: "string",
                                suggestions: [],
                            },
                        },
                        {
                            name: "--billing-project",
                            description: "The Google Cloud Platform project that will be charged quota for operations performed in gcloud. If you need to operate on one project, but need quota against a different project, you can use this flag to specify the billing project. If both `billing/quota_project` and `--billing-project` are specified, `--billing-project` takes precedence. Run `$ gcloud config set --help` to see more information about `billing/quota_project`.",
                            args: {
                                name: "BILLING_PROJECT",
                                description: "string",
                                suggestions: [],
                            },
                        },
                        {
                            name: "--configuration",
                            description: "The configuration to use for this command invocation. For more\ninformation on how to use configurations, run:\n`gcloud topic configurations`.  You can also use the CLOUDSDK_ACTIVE_CONFIG_NAME environment\nvariable to set the equivalent of this flag for a terminal\nsession.",
                            args: {
                                name: "CONFIGURATION",
                                description: "string",
                                suggestions: [],
                            },
                        },
                        {
                            name: "--flags-file",
                            description: "A YAML or JSON file that specifies a *--flag*:*value* dictionary.\nUseful for specifying complex flag values with special characters\nthat work with any command interpreter. Additionally, each\n*--flags-file* arg is replaced by its constituent flags. See\n$ gcloud topic flags-file for more information.",
                            args: {
                                name: "YAML_FILE",
                                description: "string",
                                suggestions: [],
                            },
                        },
                        {
                            name: "--flatten",
                            description: "Flatten _name_[] output resource slices in _KEY_ into separate records\nfor each item in each slice. Multiple keys and slices may be specified.\nThis also flattens keys for *--format* and *--filter*. For example,\n*--flatten=abc.def* flattens *abc.def[].ghi* references to\n*abc.def.ghi*. A resource record containing *abc.def[]* with N elements\nwill expand to N records in the flattened output. This flag interacts\nwith other flags that are applied in this order: *--flatten*,\n*--sort-by*, *--filter*, *--limit*.",
                            args: {
                                name: "KEY",
                                description: "list",
                                suggestions: [],
                            },
                        },
                        {
                            name: "--format",
                            description: "Set the format for printing command output resources. The default is a\ncommand-specific human-friendly output format. The supported formats\nare: `config`, `csv`, `default`, `diff`, `disable`, `flattened`, `get`, `json`, `list`, `multi`, `none`, `object`, `table`, `text`, `value`, `yaml`. For more details run $ gcloud topic formats.",
                            args: {
                                name: "FORMAT",
                                description: "string",
                                suggestions: [],
                            },
                        },
                        {
                            name: "--help",
                            description: "Display detailed help.",
                        },
                        {
                            name: "--impersonate-service-account",
                            description: "For this gcloud invocation, all API requests will be made as the given service account instead of the currently selected account. This is done without needing to create, download, and activate a key for the account. In order to perform operations as the service account, your currently selected account must have an IAM role that includes the iam.serviceAccounts.getAccessToken permission for the service account. The roles/iam.serviceAccountTokenCreator role has this permission or you may create a custom role. Overrides the default *auth/impersonate_service_account* property value for this command invocation.",
                            args: {
                                name: "SERVICE_ACCOUNT_EMAIL",
                                description: "string",
                                suggestions: [],
                            },
                        },
                        {
                            name: "--log-http",
                            description: "Log all HTTP server requests and responses to stderr. Overrides the default *core/log_http* property value for this command invocation.",
                        },
                        {
                            name: "--project",
                            description: "The Google Cloud Platform project ID to use for this invocation. If\nomitted, then the current project is assumed; the current project can\nbe listed using `gcloud config list --format='text(core.project)'`\nand can be set using `gcloud config set project PROJECTID`.\n+\n`--project` and its fallback `core/project` property play two roles\nin the invocation. It specifies the project of the resource to\noperate on. It also specifies the project for API enablement check,\nquota, and billing. To specify a different project for quota and\nbilling, use `--billing-project` or `billing/quota_project` property.",
                            args: {
                                name: "PROJECT_ID",
                                description: "string",
                                suggestions: [],
                            },
                        },
                        {
                            name: "--quiet",
                            description: "Disable all interactive prompts when running gcloud commands. If input\nis required, defaults will be used, or an error will be raised.\nOverrides the default core/disable_prompts property value for this\ncommand invocation. This is equivalent to setting the environment\nvariable `CLOUDSDK_CORE_DISABLE_PROMPTS` to 1.",
                        },
                        {
                            name: "--trace-token",
                            description: "Token used to route traces of service requests for investigation of issues. Overrides the default *core/trace_token* property value for this command invocation.",
                            args: {
                                name: "TRACE_TOKEN",
                                description: "string",
                                suggestions: [],
                            },
                        },
                        {
                            name: "--user-output-enabled",
                            description: "Print user intended output to the console. Overrides the default *core/user_output_enabled* property value for this command invocation. Use *--no-user-output-enabled* to disable.",
                        },
                        {
                            name: "--verbosity",
                            description: "Override the default verbosity for this command. Overrides the default *core/verbosity* property value for this command invocation. _VERBOSITY_ must be one of: *debug*, *info*, *warning*, *error*, *critical*, *none*.",
                            args: {
                                name: "VERBOSITY",
                                description: "string",
                                suggestions: [
                                    "debug",
                                    "info",
                                    "warning",
                                    "error",
                                    "critical",
                                    "none",
                                ],
                            },
                        },
                    ],
                    args: [
                        {
                            name: "FOLDER_ID",
                            description: "ID for the folder you want to undelete.",
                            variadic: false,
                        },
                    ],
                },
                {
                    name: "update",
                    description: "Update the display name of a folder.",
<<<<<<< HEAD
                    subcommands: [],
=======
>>>>>>> 8601a08... feat: add built files
                    options: [
                        {
                            name: "--account",
                            description: "Google Cloud Platform user account to use for invocation. Overrides the default *core/account* property value for this command invocation.",
                            args: {
                                name: "ACCOUNT",
                                description: "string",
                                suggestions: [],
                            },
                        },
                        {
                            name: "--billing-project",
                            description: "The Google Cloud Platform project that will be charged quota for operations performed in gcloud. If you need to operate on one project, but need quota against a different project, you can use this flag to specify the billing project. If both `billing/quota_project` and `--billing-project` are specified, `--billing-project` takes precedence. Run `$ gcloud config set --help` to see more information about `billing/quota_project`.",
                            args: {
                                name: "BILLING_PROJECT",
                                description: "string",
                                suggestions: [],
                            },
                        },
                        {
                            name: "--configuration",
                            description: "The configuration to use for this command invocation. For more\ninformation on how to use configurations, run:\n`gcloud topic configurations`.  You can also use the CLOUDSDK_ACTIVE_CONFIG_NAME environment\nvariable to set the equivalent of this flag for a terminal\nsession.",
                            args: {
                                name: "CONFIGURATION",
                                description: "string",
                                suggestions: [],
                            },
                        },
                        {
                            name: "--display-name",
                            description: "New display name for the folder (unique under the same parent).",
                            args: {
                                name: "DISPLAY_NAME",
                                description: "string",
                                suggestions: [],
                            },
                            priority: 100,
                        },
                        {
                            name: "--flags-file",
                            description: "A YAML or JSON file that specifies a *--flag*:*value* dictionary.\nUseful for specifying complex flag values with special characters\nthat work with any command interpreter. Additionally, each\n*--flags-file* arg is replaced by its constituent flags. See\n$ gcloud topic flags-file for more information.",
                            args: {
                                name: "YAML_FILE",
                                description: "string",
                                suggestions: [],
                            },
                        },
                        {
                            name: "--flatten",
                            description: "Flatten _name_[] output resource slices in _KEY_ into separate records\nfor each item in each slice. Multiple keys and slices may be specified.\nThis also flattens keys for *--format* and *--filter*. For example,\n*--flatten=abc.def* flattens *abc.def[].ghi* references to\n*abc.def.ghi*. A resource record containing *abc.def[]* with N elements\nwill expand to N records in the flattened output. This flag interacts\nwith other flags that are applied in this order: *--flatten*,\n*--sort-by*, *--filter*, *--limit*.",
                            args: {
                                name: "KEY",
                                description: "list",
                                suggestions: [],
                            },
                        },
                        {
                            name: "--format",
                            description: "Set the format for printing command output resources. The default is a\ncommand-specific human-friendly output format. The supported formats\nare: `config`, `csv`, `default`, `diff`, `disable`, `flattened`, `get`, `json`, `list`, `multi`, `none`, `object`, `table`, `text`, `value`, `yaml`. For more details run $ gcloud topic formats.",
                            args: {
                                name: "FORMAT",
                                description: "string",
                                suggestions: [],
                            },
                        },
                        {
                            name: "--help",
                            description: "Display detailed help.",
                        },
                        {
                            name: "--impersonate-service-account",
                            description: "For this gcloud invocation, all API requests will be made as the given service account instead of the currently selected account. This is done without needing to create, download, and activate a key for the account. In order to perform operations as the service account, your currently selected account must have an IAM role that includes the iam.serviceAccounts.getAccessToken permission for the service account. The roles/iam.serviceAccountTokenCreator role has this permission or you may create a custom role. Overrides the default *auth/impersonate_service_account* property value for this command invocation.",
                            args: {
                                name: "SERVICE_ACCOUNT_EMAIL",
                                description: "string",
                                suggestions: [],
                            },
                        },
                        {
                            name: "--log-http",
                            description: "Log all HTTP server requests and responses to stderr. Overrides the default *core/log_http* property value for this command invocation.",
                        },
                        {
                            name: "--project",
                            description: "The Google Cloud Platform project ID to use for this invocation. If\nomitted, then the current project is assumed; the current project can\nbe listed using `gcloud config list --format='text(core.project)'`\nand can be set using `gcloud config set project PROJECTID`.\n+\n`--project` and its fallback `core/project` property play two roles\nin the invocation. It specifies the project of the resource to\noperate on. It also specifies the project for API enablement check,\nquota, and billing. To specify a different project for quota and\nbilling, use `--billing-project` or `billing/quota_project` property.",
                            args: {
                                name: "PROJECT_ID",
                                description: "string",
                                suggestions: [],
                            },
                        },
                        {
                            name: "--quiet",
                            description: "Disable all interactive prompts when running gcloud commands. If input\nis required, defaults will be used, or an error will be raised.\nOverrides the default core/disable_prompts property value for this\ncommand invocation. This is equivalent to setting the environment\nvariable `CLOUDSDK_CORE_DISABLE_PROMPTS` to 1.",
                        },
                        {
                            name: "--trace-token",
                            description: "Token used to route traces of service requests for investigation of issues. Overrides the default *core/trace_token* property value for this command invocation.",
                            args: {
                                name: "TRACE_TOKEN",
                                description: "string",
                                suggestions: [],
                            },
                        },
                        {
                            name: "--user-output-enabled",
                            description: "Print user intended output to the console. Overrides the default *core/user_output_enabled* property value for this command invocation. Use *--no-user-output-enabled* to disable.",
                        },
                        {
                            name: "--verbosity",
                            description: "Override the default verbosity for this command. Overrides the default *core/verbosity* property value for this command invocation. _VERBOSITY_ must be one of: *debug*, *info*, *warning*, *error*, *critical*, *none*.",
                            args: {
                                name: "VERBOSITY",
                                description: "string",
                                suggestions: [
                                    "debug",
                                    "info",
                                    "warning",
                                    "error",
                                    "critical",
                                    "none",
                                ],
                            },
                        },
                    ],
                    args: [
                        {
                            name: "FOLDER_ID",
                            description: "ID for the folder you want to update.",
                            variadic: false,
                        },
                    ],
                },
            ],
            options: [
                {
                    name: "--account",
                    description: "Google Cloud Platform user account to use for invocation. Overrides the default *core/account* property value for this command invocation.",
                    args: {
                        name: "ACCOUNT",
                        description: "string",
                        suggestions: [],
                    },
                },
                {
                    name: "--billing-project",
                    description: "The Google Cloud Platform project that will be charged quota for operations performed in gcloud. If you need to operate on one project, but need quota against a different project, you can use this flag to specify the billing project. If both `billing/quota_project` and `--billing-project` are specified, `--billing-project` takes precedence. Run `$ gcloud config set --help` to see more information about `billing/quota_project`.",
                    args: {
                        name: "BILLING_PROJECT",
                        description: "string",
                        suggestions: [],
                    },
                },
                {
                    name: "--configuration",
                    description: "The configuration to use for this command invocation. For more\ninformation on how to use configurations, run:\n`gcloud topic configurations`.  You can also use the CLOUDSDK_ACTIVE_CONFIG_NAME environment\nvariable to set the equivalent of this flag for a terminal\nsession.",
                    args: {
                        name: "CONFIGURATION",
                        description: "string",
                        suggestions: [],
                    },
                },
                {
                    name: "--flags-file",
                    description: "A YAML or JSON file that specifies a *--flag*:*value* dictionary.\nUseful for specifying complex flag values with special characters\nthat work with any command interpreter. Additionally, each\n*--flags-file* arg is replaced by its constituent flags. See\n$ gcloud topic flags-file for more information.",
                    args: {
                        name: "YAML_FILE",
                        description: "string",
                        suggestions: [],
                    },
                },
                {
                    name: "--flatten",
                    description: "Flatten _name_[] output resource slices in _KEY_ into separate records\nfor each item in each slice. Multiple keys and slices may be specified.\nThis also flattens keys for *--format* and *--filter*. For example,\n*--flatten=abc.def* flattens *abc.def[].ghi* references to\n*abc.def.ghi*. A resource record containing *abc.def[]* with N elements\nwill expand to N records in the flattened output. This flag interacts\nwith other flags that are applied in this order: *--flatten*,\n*--sort-by*, *--filter*, *--limit*.",
                    args: {
                        name: "KEY",
                        description: "list",
                        suggestions: [],
                    },
                },
                {
                    name: "--format",
                    description: "Set the format for printing command output resources. The default is a\ncommand-specific human-friendly output format. The supported formats\nare: `config`, `csv`, `default`, `diff`, `disable`, `flattened`, `get`, `json`, `list`, `multi`, `none`, `object`, `table`, `text`, `value`, `yaml`. For more details run $ gcloud topic formats.",
                    args: {
                        name: "FORMAT",
                        description: "string",
                        suggestions: [],
                    },
                },
                {
                    name: "--help",
                    description: "Display detailed help.",
                },
                {
                    name: "--impersonate-service-account",
                    description: "For this gcloud invocation, all API requests will be made as the given service account instead of the currently selected account. This is done without needing to create, download, and activate a key for the account. In order to perform operations as the service account, your currently selected account must have an IAM role that includes the iam.serviceAccounts.getAccessToken permission for the service account. The roles/iam.serviceAccountTokenCreator role has this permission or you may create a custom role. Overrides the default *auth/impersonate_service_account* property value for this command invocation.",
                    args: {
                        name: "SERVICE_ACCOUNT_EMAIL",
                        description: "string",
                        suggestions: [],
                    },
                },
                {
                    name: "--log-http",
                    description: "Log all HTTP server requests and responses to stderr. Overrides the default *core/log_http* property value for this command invocation.",
                },
                {
                    name: "--project",
                    description: "The Google Cloud Platform project ID to use for this invocation. If\nomitted, then the current project is assumed; the current project can\nbe listed using `gcloud config list --format='text(core.project)'`\nand can be set using `gcloud config set project PROJECTID`.\n+\n`--project` and its fallback `core/project` property play two roles\nin the invocation. It specifies the project of the resource to\noperate on. It also specifies the project for API enablement check,\nquota, and billing. To specify a different project for quota and\nbilling, use `--billing-project` or `billing/quota_project` property.",
                    args: {
                        name: "PROJECT_ID",
                        description: "string",
                        suggestions: [],
                    },
                },
                {
                    name: "--quiet",
                    description: "Disable all interactive prompts when running gcloud commands. If input\nis required, defaults will be used, or an error will be raised.\nOverrides the default core/disable_prompts property value for this\ncommand invocation. This is equivalent to setting the environment\nvariable `CLOUDSDK_CORE_DISABLE_PROMPTS` to 1.",
                },
                {
                    name: "--trace-token",
                    description: "Token used to route traces of service requests for investigation of issues. Overrides the default *core/trace_token* property value for this command invocation.",
                    args: {
                        name: "TRACE_TOKEN",
                        description: "string",
                        suggestions: [],
                    },
                },
                {
                    name: "--user-output-enabled",
                    description: "Print user intended output to the console. Overrides the default *core/user_output_enabled* property value for this command invocation. Use *--no-user-output-enabled* to disable.",
                },
                {
                    name: "--verbosity",
                    description: "Override the default verbosity for this command. Overrides the default *core/verbosity* property value for this command invocation. _VERBOSITY_ must be one of: *debug*, *info*, *warning*, *error*, *critical*, *none*.",
                    args: {
                        name: "VERBOSITY",
                        description: "string",
                        suggestions: [
                            "debug",
                            "info",
                            "warning",
                            "error",
                            "critical",
                            "none",
                        ],
                    },
                },
            ],
<<<<<<< HEAD
            args: [],
=======
          name: "add-iam-policy-binding",
          description: "Add IAM policy binding for a folder.",
          subcommands: [],
          options: [
            {
              name: "--account",
              description:
                "Google Cloud Platform user account to use for invocation. Overrides the default *core/account* property value for this command invocation.",
              args: {
                name: "ACCOUNT",
                description: "string",
                suggestions: [],
              },
            },
            {
              name: "--billing-project",
              description:
                "The Google Cloud Platform project that will be charged quota for operations performed in gcloud. If you need to operate on one project, but need quota against a different project, you can use this flag to specify the billing project. If both `billing/quota_project` and `--billing-project` are specified, `--billing-project` takes precedence. Run `$ gcloud config set --help` to see more information about `billing/quota_project`.",
              args: {
                name: "BILLING_PROJECT",
                description: "string",
                suggestions: [],
              },
            },
            {
              name: "--condition",
              description:
                "+\nThe condition of the binding to be added. When the condition is explicitly\nspecified as `None` (`--condition=None`), a binding without a condition is\nadded. When the condition is specified and is not `None`, `--role`\ncannot be a primitive role. Primitive roles are `roles/editor`, `roles/owner`,\nand `roles/viewer`.\n+\n*expression*::: (Required) Expression of the condition which\nevaluates to True or False. This uses a subset of Common Expression\nLanguage syntax.\n+\n*title*::: (Required) A short string describing the purpose of the expression.\n+\n*description*::: (Optional) Additional description for the expression.\n+\nNOTE: An unsatisfied condition will not allow access via this\nbinding.",
              args: {
                name: "KEY=VALUE",
                description: "dict",
                suggestions: [],
              },
            },
            {
              name: "--condition-from-file",
              description:
                "Path to a local JSON or YAML file that defines the condition.\nTo see available fields, see the help for `--condition`.",
              args: {
                name: "CONDITION_FROM_FILE",
                description: "googlecloudsdk.calliope.arg_parsers:FileContents",
                suggestions: [],
              },
            },
            {
              name: "--configuration",
              description:
                "The configuration to use for this command invocation. For more\ninformation on how to use configurations, run:\n`gcloud topic configurations`.  You can also use the CLOUDSDK_ACTIVE_CONFIG_NAME environment\nvariable to set the equivalent of this flag for a terminal\nsession.",
              args: {
                name: "CONFIGURATION",
                description: "string",
                suggestions: [],
              },
            },
            {
              name: "--flags-file",
              description:
                "A YAML or JSON file that specifies a *--flag*:*value* dictionary.\nUseful for specifying complex flag values with special characters\nthat work with any command interpreter. Additionally, each\n*--flags-file* arg is replaced by its constituent flags. See\n$ gcloud topic flags-file for more information.",
              args: {
                name: "YAML_FILE",
                description: "string",
                suggestions: [],
              },
            },
            {
              name: "--flatten",
              description:
                "Flatten _name_[] output resource slices in _KEY_ into separate records\nfor each item in each slice. Multiple keys and slices may be specified.\nThis also flattens keys for *--format* and *--filter*. For example,\n*--flatten=abc.def* flattens *abc.def[].ghi* references to\n*abc.def.ghi*. A resource record containing *abc.def[]* with N elements\nwill expand to N records in the flattened output. This flag interacts\nwith other flags that are applied in this order: *--flatten*,\n*--sort-by*, *--filter*, *--limit*.",
              args: {
                name: "KEY",
                description: "list",
                suggestions: [],
              },
            },
            {
              name: "--format",
              description:
                "Set the format for printing command output resources. The default is a\ncommand-specific human-friendly output format. The supported formats\nare: `config`, `csv`, `default`, `diff`, `disable`, `flattened`, `get`, `json`, `list`, `multi`, `none`, `object`, `table`, `text`, `value`, `yaml`. For more details run $ gcloud topic formats.",
              args: {
                name: "FORMAT",
                description: "string",
                suggestions: [],
              },
            },
            {
              name: "--help",
              description: "Display detailed help.",
            },
            {
              name: "--impersonate-service-account",
              description:
                "For this gcloud invocation, all API requests will be made as the given service account instead of the currently selected account. This is done without needing to create, download, and activate a key for the account. In order to perform operations as the service account, your currently selected account must have an IAM role that includes the iam.serviceAccounts.getAccessToken permission for the service account. The roles/iam.serviceAccountTokenCreator role has this permission or you may create a custom role. Overrides the default *auth/impersonate_service_account* property value for this command invocation.",
              args: {
                name: "SERVICE_ACCOUNT_EMAIL",
                description: "string",
                suggestions: [],
              },
            },
            {
              name: "--log-http",
              description:
                "Log all HTTP server requests and responses to stderr. Overrides the default *core/log_http* property value for this command invocation.",
            },
            {
              name: "--member",
              description:
                "The member to add the binding for. Should be of the form `user|group|serviceAccount:email` or\n`domain:domain`.\n+\nExamples: `user:test-user@gmail.com`, `group:admins@example.com`,\n`serviceAccount:test123@example.domain.com`, or\n`domain:example.domain.com`.\n+\nCan also be one of the following special values:\n* `allUsers` - Special identifier that represents anyone who is on the internet,\n   with or without a Google account.\n* `allAuthenticatedUsers` - Special identifier that represents anyone who is\n   authenticated with a Google account or a service account.",
              args: {
                name: "MEMBER",
                description: "string",
                suggestions: [],
              },
              priority: 100,
            },
            {
              name: "--project",
              description:
                "The Google Cloud Platform project ID to use for this invocation. If\nomitted, then the current project is assumed; the current project can\nbe listed using `gcloud config list --format='text(core.project)'`\nand can be set using `gcloud config set project PROJECTID`.\n+\n`--project` and its fallback `core/project` property play two roles\nin the invocation. It specifies the project of the resource to\noperate on. It also specifies the project for API enablement check,\nquota, and billing. To specify a different project for quota and\nbilling, use `--billing-project` or `billing/quota_project` property.",
              args: {
                name: "PROJECT_ID",
                description: "string",
                suggestions: [],
              },
            },
            {
              name: "--quiet",
              description:
                "Disable all interactive prompts when running gcloud commands. If input\nis required, defaults will be used, or an error will be raised.\nOverrides the default core/disable_prompts property value for this\ncommand invocation. This is equivalent to setting the environment\nvariable `CLOUDSDK_CORE_DISABLE_PROMPTS` to 1.",
            },
            {
              name: "--role",
              description: "Define the role of the member.",
              args: {
                name: "ROLE",
                description: "string",
                suggestions: [],
              },
              priority: 100,
            },
            {
              name: "--trace-token",
              description:
                "Token used to route traces of service requests for investigation of issues. Overrides the default *core/trace_token* property value for this command invocation.",
              args: {
                name: "TRACE_TOKEN",
                description: "string",
                suggestions: [],
              },
            },
            {
              name: "--user-output-enabled",
              description:
                "Print user intended output to the console. Overrides the default *core/user_output_enabled* property value for this command invocation. Use *--no-user-output-enabled* to disable.",
            },
            {
              name: "--verbosity",
              description:
                "Override the default verbosity for this command. Overrides the default *core/verbosity* property value for this command invocation. _VERBOSITY_ must be one of: *debug*, *info*, *warning*, *error*, *critical*, *none*.",
              args: {
                name: "VERBOSITY",
                description: "string",
                suggestions: [
                  "debug",
                  "info",
                  "warning",
                  "error",
                  "critical",
                  "none",
                ],
              },
            },
          ],
          args: [
            {
              name: "FOLDER",
              description:
                "ID of the folder or fully qualified identifier for the folder.",
              variadic: false,
            },
          ],
        },
        {
          name: "create",
          description: "Create a new folder.",
          subcommands: [],
          options: [
            {
              name: "--account",
              description:
                "Google Cloud Platform user account to use for invocation. Overrides the default *core/account* property value for this command invocation.",
              args: {
                name: "ACCOUNT",
                description: "string",
                suggestions: [],
              },
            },
            {
              name: "--async",
              description:
                "Return immediately, without waiting for the operation in progress to\ncomplete.",
            },
            {
              name: "--billing-project",
              description:
                "The Google Cloud Platform project that will be charged quota for operations performed in gcloud. If you need to operate on one project, but need quota against a different project, you can use this flag to specify the billing project. If both `billing/quota_project` and `--billing-project` are specified, `--billing-project` takes precedence. Run `$ gcloud config set --help` to see more information about `billing/quota_project`.",
              args: {
                name: "BILLING_PROJECT",
                description: "string",
                suggestions: [],
              },
            },
            {
              name: "--configuration",
              description:
                "The configuration to use for this command invocation. For more\ninformation on how to use configurations, run:\n`gcloud topic configurations`.  You can also use the CLOUDSDK_ACTIVE_CONFIG_NAME environment\nvariable to set the equivalent of this flag for a terminal\nsession.",
              args: {
                name: "CONFIGURATION",
                description: "string",
                suggestions: [],
              },
            },
            {
              name: "--display-name",
              description: "Friendly display name to use for the new folder.",
              args: {
                name: "DISPLAY_NAME",
                description: "string",
                suggestions: [],
              },
              priority: 100,
            },
            {
              name: "--flags-file",
              description:
                "A YAML or JSON file that specifies a *--flag*:*value* dictionary.\nUseful for specifying complex flag values with special characters\nthat work with any command interpreter. Additionally, each\n*--flags-file* arg is replaced by its constituent flags. See\n$ gcloud topic flags-file for more information.",
              args: {
                name: "YAML_FILE",
                description: "string",
                suggestions: [],
              },
            },
            {
              name: "--flatten",
              description:
                "Flatten _name_[] output resource slices in _KEY_ into separate records\nfor each item in each slice. Multiple keys and slices may be specified.\nThis also flattens keys for *--format* and *--filter*. For example,\n*--flatten=abc.def* flattens *abc.def[].ghi* references to\n*abc.def.ghi*. A resource record containing *abc.def[]* with N elements\nwill expand to N records in the flattened output. This flag interacts\nwith other flags that are applied in this order: *--flatten*,\n*--sort-by*, *--filter*, *--limit*.",
              args: {
                name: "KEY",
                description: "list",
                suggestions: [],
              },
            },
            {
              name: "--folder",
              description: "ID for the folder to use as a parent",
              args: {
                name: "FOLDER_ID",
                description: "string",
                suggestions: [],
              },
            },
            {
              name: "--format",
              description:
                "Set the format for printing command output resources. The default is a\ncommand-specific human-friendly output format. The supported formats\nare: `config`, `csv`, `default`, `diff`, `disable`, `flattened`, `get`, `json`, `list`, `multi`, `none`, `object`, `table`, `text`, `value`, `yaml`. For more details run $ gcloud topic formats.",
              args: {
                name: "FORMAT",
                description: "string",
                suggestions: [],
              },
            },
            {
              name: "--help",
              description: "Display detailed help.",
            },
            {
              name: "--impersonate-service-account",
              description:
                "For this gcloud invocation, all API requests will be made as the given service account instead of the currently selected account. This is done without needing to create, download, and activate a key for the account. In order to perform operations as the service account, your currently selected account must have an IAM role that includes the iam.serviceAccounts.getAccessToken permission for the service account. The roles/iam.serviceAccountTokenCreator role has this permission or you may create a custom role. Overrides the default *auth/impersonate_service_account* property value for this command invocation.",
              args: {
                name: "SERVICE_ACCOUNT_EMAIL",
                description: "string",
                suggestions: [],
              },
            },
            {
              name: "--log-http",
              description:
                "Log all HTTP server requests and responses to stderr. Overrides the default *core/log_http* property value for this command invocation.",
            },
            {
              name: "--organization",
              description: "ID for the organization to use as a parent",
              args: {
                name: "ORGANIZATION_ID",
                description: "string",
                suggestions: [],
              },
            },
            {
              name: "--project",
              description:
                "The Google Cloud Platform project ID to use for this invocation. If\nomitted, then the current project is assumed; the current project can\nbe listed using `gcloud config list --format='text(core.project)'`\nand can be set using `gcloud config set project PROJECTID`.\n+\n`--project` and its fallback `core/project` property play two roles\nin the invocation. It specifies the project of the resource to\noperate on. It also specifies the project for API enablement check,\nquota, and billing. To specify a different project for quota and\nbilling, use `--billing-project` or `billing/quota_project` property.",
              args: {
                name: "PROJECT_ID",
                description: "string",
                suggestions: [],
              },
            },
            {
              name: "--quiet",
              description:
                "Disable all interactive prompts when running gcloud commands. If input\nis required, defaults will be used, or an error will be raised.\nOverrides the default core/disable_prompts property value for this\ncommand invocation. This is equivalent to setting the environment\nvariable `CLOUDSDK_CORE_DISABLE_PROMPTS` to 1.",
            },
            {
              name: "--trace-token",
              description:
                "Token used to route traces of service requests for investigation of issues. Overrides the default *core/trace_token* property value for this command invocation.",
              args: {
                name: "TRACE_TOKEN",
                description: "string",
                suggestions: [],
              },
            },
            {
              name: "--user-output-enabled",
              description:
                "Print user intended output to the console. Overrides the default *core/user_output_enabled* property value for this command invocation. Use *--no-user-output-enabled* to disable.",
            },
            {
              name: "--verbosity",
              description:
                "Override the default verbosity for this command. Overrides the default *core/verbosity* property value for this command invocation. _VERBOSITY_ must be one of: *debug*, *info*, *warning*, *error*, *critical*, *none*.",
              args: {
                name: "VERBOSITY",
                description: "string",
                suggestions: [
                  "debug",
                  "info",
                  "warning",
                  "error",
                  "critical",
                  "none",
                ],
              },
            },
          ],
        },
        {
          name: "delete",
          description: "Delete a folder.",
          subcommands: [],
          options: [
            {
              name: "--account",
              description:
                "Google Cloud Platform user account to use for invocation. Overrides the default *core/account* property value for this command invocation.",
              args: {
                name: "ACCOUNT",
                description: "string",
                suggestions: [],
              },
            },
            {
              name: "--billing-project",
              description:
                "The Google Cloud Platform project that will be charged quota for operations performed in gcloud. If you need to operate on one project, but need quota against a different project, you can use this flag to specify the billing project. If both `billing/quota_project` and `--billing-project` are specified, `--billing-project` takes precedence. Run `$ gcloud config set --help` to see more information about `billing/quota_project`.",
              args: {
                name: "BILLING_PROJECT",
                description: "string",
                suggestions: [],
              },
            },
            {
              name: "--configuration",
              description:
                "The configuration to use for this command invocation. For more\ninformation on how to use configurations, run:\n`gcloud topic configurations`.  You can also use the CLOUDSDK_ACTIVE_CONFIG_NAME environment\nvariable to set the equivalent of this flag for a terminal\nsession.",
              args: {
                name: "CONFIGURATION",
                description: "string",
                suggestions: [],
              },
            },
            {
              name: "--flags-file",
              description:
                "A YAML or JSON file that specifies a *--flag*:*value* dictionary.\nUseful for specifying complex flag values with special characters\nthat work with any command interpreter. Additionally, each\n*--flags-file* arg is replaced by its constituent flags. See\n$ gcloud topic flags-file for more information.",
              args: {
                name: "YAML_FILE",
                description: "string",
                suggestions: [],
              },
            },
            {
              name: "--flatten",
              description:
                "Flatten _name_[] output resource slices in _KEY_ into separate records\nfor each item in each slice. Multiple keys and slices may be specified.\nThis also flattens keys for *--format* and *--filter*. For example,\n*--flatten=abc.def* flattens *abc.def[].ghi* references to\n*abc.def.ghi*. A resource record containing *abc.def[]* with N elements\nwill expand to N records in the flattened output. This flag interacts\nwith other flags that are applied in this order: *--flatten*,\n*--sort-by*, *--filter*, *--limit*.",
              args: {
                name: "KEY",
                description: "list",
                suggestions: [],
              },
            },
            {
              name: "--format",
              description:
                "Set the format for printing command output resources. The default is a\ncommand-specific human-friendly output format. The supported formats\nare: `config`, `csv`, `default`, `diff`, `disable`, `flattened`, `get`, `json`, `list`, `multi`, `none`, `object`, `table`, `text`, `value`, `yaml`. For more details run $ gcloud topic formats.",
              args: {
                name: "FORMAT",
                description: "string",
                suggestions: [],
              },
            },
            {
              name: "--help",
              description: "Display detailed help.",
            },
            {
              name: "--impersonate-service-account",
              description:
                "For this gcloud invocation, all API requests will be made as the given service account instead of the currently selected account. This is done without needing to create, download, and activate a key for the account. In order to perform operations as the service account, your currently selected account must have an IAM role that includes the iam.serviceAccounts.getAccessToken permission for the service account. The roles/iam.serviceAccountTokenCreator role has this permission or you may create a custom role. Overrides the default *auth/impersonate_service_account* property value for this command invocation.",
              args: {
                name: "SERVICE_ACCOUNT_EMAIL",
                description: "string",
                suggestions: [],
              },
            },
            {
              name: "--log-http",
              description:
                "Log all HTTP server requests and responses to stderr. Overrides the default *core/log_http* property value for this command invocation.",
            },
            {
              name: "--project",
              description:
                "The Google Cloud Platform project ID to use for this invocation. If\nomitted, then the current project is assumed; the current project can\nbe listed using `gcloud config list --format='text(core.project)'`\nand can be set using `gcloud config set project PROJECTID`.\n+\n`--project` and its fallback `core/project` property play two roles\nin the invocation. It specifies the project of the resource to\noperate on. It also specifies the project for API enablement check,\nquota, and billing. To specify a different project for quota and\nbilling, use `--billing-project` or `billing/quota_project` property.",
              args: {
                name: "PROJECT_ID",
                description: "string",
                suggestions: [],
              },
            },
            {
              name: "--quiet",
              description:
                "Disable all interactive prompts when running gcloud commands. If input\nis required, defaults will be used, or an error will be raised.\nOverrides the default core/disable_prompts property value for this\ncommand invocation. This is equivalent to setting the environment\nvariable `CLOUDSDK_CORE_DISABLE_PROMPTS` to 1.",
            },
            {
              name: "--trace-token",
              description:
                "Token used to route traces of service requests for investigation of issues. Overrides the default *core/trace_token* property value for this command invocation.",
              args: {
                name: "TRACE_TOKEN",
                description: "string",
                suggestions: [],
              },
            },
            {
              name: "--user-output-enabled",
              description:
                "Print user intended output to the console. Overrides the default *core/user_output_enabled* property value for this command invocation. Use *--no-user-output-enabled* to disable.",
            },
            {
              name: "--verbosity",
              description:
                "Override the default verbosity for this command. Overrides the default *core/verbosity* property value for this command invocation. _VERBOSITY_ must be one of: *debug*, *info*, *warning*, *error*, *critical*, *none*.",
              args: {
                name: "VERBOSITY",
                description: "string",
                suggestions: [
                  "debug",
                  "info",
                  "warning",
                  "error",
                  "critical",
                  "none",
                ],
              },
            },
          ],
          args: [
            {
              name: "FOLDER_ID",
              description: "ID for the folder you want to delete.",
              variadic: false,
            },
          ],
        },
        {
          name: "describe",
          description: "Show metadata for a folder.",
          subcommands: [],
          options: [
            {
              name: "--account",
              description:
                "Google Cloud Platform user account to use for invocation. Overrides the default *core/account* property value for this command invocation.",
              args: {
                name: "ACCOUNT",
                description: "string",
                suggestions: [],
              },
            },
            {
              name: "--billing-project",
              description:
                "The Google Cloud Platform project that will be charged quota for operations performed in gcloud. If you need to operate on one project, but need quota against a different project, you can use this flag to specify the billing project. If both `billing/quota_project` and `--billing-project` are specified, `--billing-project` takes precedence. Run `$ gcloud config set --help` to see more information about `billing/quota_project`.",
              args: {
                name: "BILLING_PROJECT",
                description: "string",
                suggestions: [],
              },
            },
            {
              name: "--configuration",
              description:
                "The configuration to use for this command invocation. For more\ninformation on how to use configurations, run:\n`gcloud topic configurations`.  You can also use the CLOUDSDK_ACTIVE_CONFIG_NAME environment\nvariable to set the equivalent of this flag for a terminal\nsession.",
              args: {
                name: "CONFIGURATION",
                description: "string",
                suggestions: [],
              },
            },
            {
              name: "--flags-file",
              description:
                "A YAML or JSON file that specifies a *--flag*:*value* dictionary.\nUseful for specifying complex flag values with special characters\nthat work with any command interpreter. Additionally, each\n*--flags-file* arg is replaced by its constituent flags. See\n$ gcloud topic flags-file for more information.",
              args: {
                name: "YAML_FILE",
                description: "string",
                suggestions: [],
              },
            },
            {
              name: "--flatten",
              description:
                "Flatten _name_[] output resource slices in _KEY_ into separate records\nfor each item in each slice. Multiple keys and slices may be specified.\nThis also flattens keys for *--format* and *--filter*. For example,\n*--flatten=abc.def* flattens *abc.def[].ghi* references to\n*abc.def.ghi*. A resource record containing *abc.def[]* with N elements\nwill expand to N records in the flattened output. This flag interacts\nwith other flags that are applied in this order: *--flatten*,\n*--sort-by*, *--filter*, *--limit*.",
              args: {
                name: "KEY",
                description: "list",
                suggestions: [],
              },
            },
            {
              name: "--format",
              description:
                "Set the format for printing command output resources. The default is a\ncommand-specific human-friendly output format. The supported formats\nare: `config`, `csv`, `default`, `diff`, `disable`, `flattened`, `get`, `json`, `list`, `multi`, `none`, `object`, `table`, `text`, `value`, `yaml`. For more details run $ gcloud topic formats.",
              args: {
                name: "FORMAT",
                description: "string",
                suggestions: [],
              },
            },
            {
              name: "--help",
              description: "Display detailed help.",
            },
            {
              name: "--impersonate-service-account",
              description:
                "For this gcloud invocation, all API requests will be made as the given service account instead of the currently selected account. This is done without needing to create, download, and activate a key for the account. In order to perform operations as the service account, your currently selected account must have an IAM role that includes the iam.serviceAccounts.getAccessToken permission for the service account. The roles/iam.serviceAccountTokenCreator role has this permission or you may create a custom role. Overrides the default *auth/impersonate_service_account* property value for this command invocation.",
              args: {
                name: "SERVICE_ACCOUNT_EMAIL",
                description: "string",
                suggestions: [],
              },
            },
            {
              name: "--log-http",
              description:
                "Log all HTTP server requests and responses to stderr. Overrides the default *core/log_http* property value for this command invocation.",
            },
            {
              name: "--project",
              description:
                "The Google Cloud Platform project ID to use for this invocation. If\nomitted, then the current project is assumed; the current project can\nbe listed using `gcloud config list --format='text(core.project)'`\nand can be set using `gcloud config set project PROJECTID`.\n+\n`--project` and its fallback `core/project` property play two roles\nin the invocation. It specifies the project of the resource to\noperate on. It also specifies the project for API enablement check,\nquota, and billing. To specify a different project for quota and\nbilling, use `--billing-project` or `billing/quota_project` property.",
              args: {
                name: "PROJECT_ID",
                description: "string",
                suggestions: [],
              },
            },
            {
              name: "--quiet",
              description:
                "Disable all interactive prompts when running gcloud commands. If input\nis required, defaults will be used, or an error will be raised.\nOverrides the default core/disable_prompts property value for this\ncommand invocation. This is equivalent to setting the environment\nvariable `CLOUDSDK_CORE_DISABLE_PROMPTS` to 1.",
            },
            {
              name: "--trace-token",
              description:
                "Token used to route traces of service requests for investigation of issues. Overrides the default *core/trace_token* property value for this command invocation.",
              args: {
                name: "TRACE_TOKEN",
                description: "string",
                suggestions: [],
              },
            },
            {
              name: "--user-output-enabled",
              description:
                "Print user intended output to the console. Overrides the default *core/user_output_enabled* property value for this command invocation. Use *--no-user-output-enabled* to disable.",
            },
            {
              name: "--verbosity",
              description:
                "Override the default verbosity for this command. Overrides the default *core/verbosity* property value for this command invocation. _VERBOSITY_ must be one of: *debug*, *info*, *warning*, *error*, *critical*, *none*.",
              args: {
                name: "VERBOSITY",
                description: "string",
                suggestions: [
                  "debug",
                  "info",
                  "warning",
                  "error",
                  "critical",
                  "none",
                ],
              },
            },
          ],
          args: [
            {
              name: "FOLDER_ID",
              description: "ID for the folder you want to describe.",
              variadic: false,
            },
          ],
        },
        {
          name: "get-ancestors-iam-policy",
          description: "Get IAM policies for a folder and its ancestors.",
          subcommands: [],
          options: [
            {
              name: "--account",
              description:
                "Google Cloud Platform user account to use for invocation. Overrides the default *core/account* property value for this command invocation.",
              args: {
                name: "ACCOUNT",
                description: "string",
                suggestions: [],
              },
            },
            {
              name: "--billing-project",
              description:
                "The Google Cloud Platform project that will be charged quota for operations performed in gcloud. If you need to operate on one project, but need quota against a different project, you can use this flag to specify the billing project. If both `billing/quota_project` and `--billing-project` are specified, `--billing-project` takes precedence. Run `$ gcloud config set --help` to see more information about `billing/quota_project`.",
              args: {
                name: "BILLING_PROJECT",
                description: "string",
                suggestions: [],
              },
            },
            {
              name: "--configuration",
              description:
                "The configuration to use for this command invocation. For more\ninformation on how to use configurations, run:\n`gcloud topic configurations`.  You can also use the CLOUDSDK_ACTIVE_CONFIG_NAME environment\nvariable to set the equivalent of this flag for a terminal\nsession.",
              args: {
                name: "CONFIGURATION",
                description: "string",
                suggestions: [],
              },
            },
            {
              name: "--filter",
              description:
                "Apply a Boolean filter _EXPRESSION_ to each resource item to be listed.\nIf the expression evaluates `True`, then that item is listed. For more\ndetails and examples of filter expressions, run $ gcloud topic filters. This\nflag interacts with other flags that are applied in this order: *--flatten*,\n*--sort-by*, *--filter*, *--limit*.",
              args: {
                name: "EXPRESSION",
                description: "string",
                suggestions: [],
              },
            },
            {
              name: "--flags-file",
              description:
                "A YAML or JSON file that specifies a *--flag*:*value* dictionary.\nUseful for specifying complex flag values with special characters\nthat work with any command interpreter. Additionally, each\n*--flags-file* arg is replaced by its constituent flags. See\n$ gcloud topic flags-file for more information.",
              args: {
                name: "YAML_FILE",
                description: "string",
                suggestions: [],
              },
            },
            {
              name: "--flatten",
              description:
                "Flatten _name_[] output resource slices in _KEY_ into separate records\nfor each item in each slice. Multiple keys and slices may be specified.\nThis also flattens keys for *--format* and *--filter*. For example,\n*--flatten=abc.def* flattens *abc.def[].ghi* references to\n*abc.def.ghi*. A resource record containing *abc.def[]* with N elements\nwill expand to N records in the flattened output. This flag interacts\nwith other flags that are applied in this order: *--flatten*,\n*--sort-by*, *--filter*, *--limit*.",
              args: {
                name: "KEY",
                description: "list",
                suggestions: [],
              },
            },
            {
              name: "--format",
              description:
                "Set the format for printing command output resources. The default is a\ncommand-specific human-friendly output format. The supported formats\nare: `config`, `csv`, `default`, `diff`, `disable`, `flattened`, `get`, `json`, `list`, `multi`, `none`, `object`, `table`, `text`, `value`, `yaml`. For more details run $ gcloud topic formats.",
              args: {
                name: "FORMAT",
                description: "string",
                suggestions: [],
              },
            },
            {
              name: "--help",
              description: "Display detailed help.",
            },
            {
              name: "--impersonate-service-account",
              description:
                "For this gcloud invocation, all API requests will be made as the given service account instead of the currently selected account. This is done without needing to create, download, and activate a key for the account. In order to perform operations as the service account, your currently selected account must have an IAM role that includes the iam.serviceAccounts.getAccessToken permission for the service account. The roles/iam.serviceAccountTokenCreator role has this permission or you may create a custom role. Overrides the default *auth/impersonate_service_account* property value for this command invocation.",
              args: {
                name: "SERVICE_ACCOUNT_EMAIL",
                description: "string",
                suggestions: [],
              },
            },
            {
              name: "--limit",
              description:
                "Maximum number of resources to list. The default is *unlimited*.\nThis flag interacts with other flags that are applied in this order:\n*--flatten*, *--sort-by*, *--filter*, *--limit*.",
              args: {
                name: "LIMIT",
                description: "googlecloudsdk.calliope.arg_parsers:Parse",
                suggestions: [],
              },
            },
            {
              name: "--log-http",
              description:
                "Log all HTTP server requests and responses to stderr. Overrides the default *core/log_http* property value for this command invocation.",
            },
            {
              name: "--page-size",
              description:
                "Some services group resource list output into pages. This flag specifies\nthe maximum number of resources per page. The default is determined by the\nservice if it supports paging, otherwise it is *unlimited* (no paging).\nPaging may be applied before or after *--filter* and *--limit* depending\non the service.",
              args: {
                name: "PAGE_SIZE",
                description: "googlecloudsdk.calliope.arg_parsers:Parse",
                suggestions: [],
              },
            },
            {
              name: "--project",
              description:
                "The Google Cloud Platform project ID to use for this invocation. If\nomitted, then the current project is assumed; the current project can\nbe listed using `gcloud config list --format='text(core.project)'`\nand can be set using `gcloud config set project PROJECTID`.\n+\n`--project` and its fallback `core/project` property play two roles\nin the invocation. It specifies the project of the resource to\noperate on. It also specifies the project for API enablement check,\nquota, and billing. To specify a different project for quota and\nbilling, use `--billing-project` or `billing/quota_project` property.",
              args: {
                name: "PROJECT_ID",
                description: "string",
                suggestions: [],
              },
            },
            {
              name: "--quiet",
              description:
                "Disable all interactive prompts when running gcloud commands. If input\nis required, defaults will be used, or an error will be raised.\nOverrides the default core/disable_prompts property value for this\ncommand invocation. This is equivalent to setting the environment\nvariable `CLOUDSDK_CORE_DISABLE_PROMPTS` to 1.",
            },
            {
              name: "--sort-by",
              description:
                "Comma-separated list of resource field key names to sort by. The\ndefault order is ascending. Prefix a field with ``~'' for descending\norder on that field. This flag interacts with other flags that are applied\nin this order: *--flatten*, *--sort-by*, *--filter*, *--limit*.",
              args: {
                name: "FIELD",
                description: "list",
                suggestions: [],
              },
            },
            {
              name: "--trace-token",
              description:
                "Token used to route traces of service requests for investigation of issues. Overrides the default *core/trace_token* property value for this command invocation.",
              args: {
                name: "TRACE_TOKEN",
                description: "string",
                suggestions: [],
              },
            },
            {
              name: "--user-output-enabled",
              description:
                "Print user intended output to the console. Overrides the default *core/user_output_enabled* property value for this command invocation. Use *--no-user-output-enabled* to disable.",
            },
            {
              name: "--verbosity",
              description:
                "Override the default verbosity for this command. Overrides the default *core/verbosity* property value for this command invocation. _VERBOSITY_ must be one of: *debug*, *info*, *warning*, *error*, *critical*, *none*.",
              args: {
                name: "VERBOSITY",
                description: "string",
                suggestions: [
                  "debug",
                  "info",
                  "warning",
                  "error",
                  "critical",
                  "none",
                ],
              },
            },
          ],
          args: [
            {
              name: "FOLDER_ID",
              description:
                "ID of the folder or fully qualified identifier for the folder.",
              variadic: false,
            },
          ],
        },
        {
          name: "get-iam-policy",
          description: "Get IAM policy for a folder.",
          subcommands: [],
          options: [
            {
              name: "--account",
              description:
                "Google Cloud Platform user account to use for invocation. Overrides the default *core/account* property value for this command invocation.",
              args: {
                name: "ACCOUNT",
                description: "string",
                suggestions: [],
              },
            },
            {
              name: "--billing-project",
              description:
                "The Google Cloud Platform project that will be charged quota for operations performed in gcloud. If you need to operate on one project, but need quota against a different project, you can use this flag to specify the billing project. If both `billing/quota_project` and `--billing-project` are specified, `--billing-project` takes precedence. Run `$ gcloud config set --help` to see more information about `billing/quota_project`.",
              args: {
                name: "BILLING_PROJECT",
                description: "string",
                suggestions: [],
              },
            },
            {
              name: "--configuration",
              description:
                "The configuration to use for this command invocation. For more\ninformation on how to use configurations, run:\n`gcloud topic configurations`.  You can also use the CLOUDSDK_ACTIVE_CONFIG_NAME environment\nvariable to set the equivalent of this flag for a terminal\nsession.",
              args: {
                name: "CONFIGURATION",
                description: "string",
                suggestions: [],
              },
            },
            {
              name: "--filter",
              description:
                "Apply a Boolean filter _EXPRESSION_ to each resource item to be listed.\nIf the expression evaluates `True`, then that item is listed. For more\ndetails and examples of filter expressions, run $ gcloud topic filters. This\nflag interacts with other flags that are applied in this order: *--flatten*,\n*--sort-by*, *--filter*, *--limit*.",
              args: {
                name: "EXPRESSION",
                description: "string",
                suggestions: [],
              },
            },
            {
              name: "--flags-file",
              description:
                "A YAML or JSON file that specifies a *--flag*:*value* dictionary.\nUseful for specifying complex flag values with special characters\nthat work with any command interpreter. Additionally, each\n*--flags-file* arg is replaced by its constituent flags. See\n$ gcloud topic flags-file for more information.",
              args: {
                name: "YAML_FILE",
                description: "string",
                suggestions: [],
              },
            },
            {
              name: "--flatten",
              description:
                "Flatten _name_[] output resource slices in _KEY_ into separate records\nfor each item in each slice. Multiple keys and slices may be specified.\nThis also flattens keys for *--format* and *--filter*. For example,\n*--flatten=abc.def* flattens *abc.def[].ghi* references to\n*abc.def.ghi*. A resource record containing *abc.def[]* with N elements\nwill expand to N records in the flattened output. This flag interacts\nwith other flags that are applied in this order: *--flatten*,\n*--sort-by*, *--filter*, *--limit*.",
              args: {
                name: "KEY",
                description: "list",
                suggestions: [],
              },
            },
            {
              name: "--format",
              description:
                "Set the format for printing command output resources. The default is a\ncommand-specific human-friendly output format. The supported formats\nare: `config`, `csv`, `default`, `diff`, `disable`, `flattened`, `get`, `json`, `list`, `multi`, `none`, `object`, `table`, `text`, `value`, `yaml`. For more details run $ gcloud topic formats.",
              args: {
                name: "FORMAT",
                description: "string",
                suggestions: [],
              },
            },
            {
              name: "--help",
              description: "Display detailed help.",
            },
            {
              name: "--impersonate-service-account",
              description:
                "For this gcloud invocation, all API requests will be made as the given service account instead of the currently selected account. This is done without needing to create, download, and activate a key for the account. In order to perform operations as the service account, your currently selected account must have an IAM role that includes the iam.serviceAccounts.getAccessToken permission for the service account. The roles/iam.serviceAccountTokenCreator role has this permission or you may create a custom role. Overrides the default *auth/impersonate_service_account* property value for this command invocation.",
              args: {
                name: "SERVICE_ACCOUNT_EMAIL",
                description: "string",
                suggestions: [],
              },
            },
            {
              name: "--limit",
              description:
                "Maximum number of resources to list. The default is *unlimited*.\nThis flag interacts with other flags that are applied in this order:\n*--flatten*, *--sort-by*, *--filter*, *--limit*.",
              args: {
                name: "LIMIT",
                description: "googlecloudsdk.calliope.arg_parsers:Parse",
                suggestions: [],
              },
            },
            {
              name: "--log-http",
              description:
                "Log all HTTP server requests and responses to stderr. Overrides the default *core/log_http* property value for this command invocation.",
            },
            {
              name: "--page-size",
              description:
                "Some services group resource list output into pages. This flag specifies\nthe maximum number of resources per page. The default is determined by the\nservice if it supports paging, otherwise it is *unlimited* (no paging).\nPaging may be applied before or after *--filter* and *--limit* depending\non the service.",
              args: {
                name: "PAGE_SIZE",
                description: "googlecloudsdk.calliope.arg_parsers:Parse",
                suggestions: [],
              },
            },
            {
              name: "--project",
              description:
                "The Google Cloud Platform project ID to use for this invocation. If\nomitted, then the current project is assumed; the current project can\nbe listed using `gcloud config list --format='text(core.project)'`\nand can be set using `gcloud config set project PROJECTID`.\n+\n`--project` and its fallback `core/project` property play two roles\nin the invocation. It specifies the project of the resource to\noperate on. It also specifies the project for API enablement check,\nquota, and billing. To specify a different project for quota and\nbilling, use `--billing-project` or `billing/quota_project` property.",
              args: {
                name: "PROJECT_ID",
                description: "string",
                suggestions: [],
              },
            },
            {
              name: "--quiet",
              description:
                "Disable all interactive prompts when running gcloud commands. If input\nis required, defaults will be used, or an error will be raised.\nOverrides the default core/disable_prompts property value for this\ncommand invocation. This is equivalent to setting the environment\nvariable `CLOUDSDK_CORE_DISABLE_PROMPTS` to 1.",
            },
            {
              name: "--sort-by",
              description:
                "Comma-separated list of resource field key names to sort by. The\ndefault order is ascending. Prefix a field with ``~'' for descending\norder on that field. This flag interacts with other flags that are applied\nin this order: *--flatten*, *--sort-by*, *--filter*, *--limit*.",
              args: {
                name: "FIELD",
                description: "list",
                suggestions: [],
              },
            },
            {
              name: "--trace-token",
              description:
                "Token used to route traces of service requests for investigation of issues. Overrides the default *core/trace_token* property value for this command invocation.",
              args: {
                name: "TRACE_TOKEN",
                description: "string",
                suggestions: [],
              },
            },
            {
              name: "--user-output-enabled",
              description:
                "Print user intended output to the console. Overrides the default *core/user_output_enabled* property value for this command invocation. Use *--no-user-output-enabled* to disable.",
            },
            {
              name: "--verbosity",
              description:
                "Override the default verbosity for this command. Overrides the default *core/verbosity* property value for this command invocation. _VERBOSITY_ must be one of: *debug*, *info*, *warning*, *error*, *critical*, *none*.",
              args: {
                name: "VERBOSITY",
                description: "string",
                suggestions: [
                  "debug",
                  "info",
                  "warning",
                  "error",
                  "critical",
                  "none",
                ],
              },
            },
          ],
          args: [
            {
              name: "FOLDER_ID",
              description: "ID for the folder whose policy you want to get.",
              variadic: false,
            },
          ],
        },
        {
          name: "list",
          description: "List folders accessible by the active account.",
          subcommands: [],
          options: [
            {
              name: "--account",
              description:
                "Google Cloud Platform user account to use for invocation. Overrides the default *core/account* property value for this command invocation.",
              args: {
                name: "ACCOUNT",
                description: "string",
                suggestions: [],
              },
            },
            {
              name: "--billing-project",
              description:
                "The Google Cloud Platform project that will be charged quota for operations performed in gcloud. If you need to operate on one project, but need quota against a different project, you can use this flag to specify the billing project. If both `billing/quota_project` and `--billing-project` are specified, `--billing-project` takes precedence. Run `$ gcloud config set --help` to see more information about `billing/quota_project`.",
              args: {
                name: "BILLING_PROJECT",
                description: "string",
                suggestions: [],
              },
            },
            {
              name: "--configuration",
              description:
                "The configuration to use for this command invocation. For more\ninformation on how to use configurations, run:\n`gcloud topic configurations`.  You can also use the CLOUDSDK_ACTIVE_CONFIG_NAME environment\nvariable to set the equivalent of this flag for a terminal\nsession.",
              args: {
                name: "CONFIGURATION",
                description: "string",
                suggestions: [],
              },
            },
            {
              name: "--filter",
              description:
                "Apply a Boolean filter _EXPRESSION_ to each resource item to be listed.\nIf the expression evaluates `True`, then that item is listed. For more\ndetails and examples of filter expressions, run $ gcloud topic filters. This\nflag interacts with other flags that are applied in this order: *--flatten*,\n*--sort-by*, *--filter*, *--limit*.",
              args: {
                name: "EXPRESSION",
                description: "string",
                suggestions: [],
              },
            },
            {
              name: "--flags-file",
              description:
                "A YAML or JSON file that specifies a *--flag*:*value* dictionary.\nUseful for specifying complex flag values with special characters\nthat work with any command interpreter. Additionally, each\n*--flags-file* arg is replaced by its constituent flags. See\n$ gcloud topic flags-file for more information.",
              args: {
                name: "YAML_FILE",
                description: "string",
                suggestions: [],
              },
            },
            {
              name: "--flatten",
              description:
                "Flatten _name_[] output resource slices in _KEY_ into separate records\nfor each item in each slice. Multiple keys and slices may be specified.\nThis also flattens keys for *--format* and *--filter*. For example,\n*--flatten=abc.def* flattens *abc.def[].ghi* references to\n*abc.def.ghi*. A resource record containing *abc.def[]* with N elements\nwill expand to N records in the flattened output. This flag interacts\nwith other flags that are applied in this order: *--flatten*,\n*--sort-by*, *--filter*, *--limit*.",
              args: {
                name: "KEY",
                description: "list",
                suggestions: [],
              },
            },
            {
              name: "--folder",
              description: "ID for the folder to list folders under",
              args: {
                name: "FOLDER_ID",
                description: "string",
                suggestions: [],
              },
            },
            {
              name: "--format",
              description:
                "Set the format for printing command output resources. The default is a\ncommand-specific human-friendly output format. The supported formats\nare: `config`, `csv`, `default`, `diff`, `disable`, `flattened`, `get`, `json`, `list`, `multi`, `none`, `object`, `table`, `text`, `value`, `yaml`. For more details run $ gcloud topic formats.",
              args: {
                name: "FORMAT",
                description: "string",
                suggestions: [],
              },
            },
            {
              name: "--help",
              description: "Display detailed help.",
            },
            {
              name: "--impersonate-service-account",
              description:
                "For this gcloud invocation, all API requests will be made as the given service account instead of the currently selected account. This is done without needing to create, download, and activate a key for the account. In order to perform operations as the service account, your currently selected account must have an IAM role that includes the iam.serviceAccounts.getAccessToken permission for the service account. The roles/iam.serviceAccountTokenCreator role has this permission or you may create a custom role. Overrides the default *auth/impersonate_service_account* property value for this command invocation.",
              args: {
                name: "SERVICE_ACCOUNT_EMAIL",
                description: "string",
                suggestions: [],
              },
            },
            {
              name: "--limit",
              description:
                "Maximum number of resources to list. The default is *unlimited*.\nThis flag interacts with other flags that are applied in this order:\n*--flatten*, *--sort-by*, *--filter*, *--limit*.",
              args: {
                name: "LIMIT",
                description: "googlecloudsdk.calliope.arg_parsers:Parse",
                suggestions: [],
              },
            },
            {
              name: "--log-http",
              description:
                "Log all HTTP server requests and responses to stderr. Overrides the default *core/log_http* property value for this command invocation.",
            },
            {
              name: "--organization",
              description: "ID for the organization to list folders under",
              args: {
                name: "ORGANIZATION_ID",
                description: "string",
                suggestions: [],
              },
            },
            {
              name: "--page-size",
              description:
                "Some services group resource list output into pages. This flag specifies\nthe maximum number of resources per page. The default is determined by the\nservice if it supports paging, otherwise it is *unlimited* (no paging).\nPaging may be applied before or after *--filter* and *--limit* depending\non the service.",
              args: {
                name: "PAGE_SIZE",
                description: "googlecloudsdk.calliope.arg_parsers:Parse",
                suggestions: [],
              },
            },
            {
              name: "--project",
              description:
                "The Google Cloud Platform project ID to use for this invocation. If\nomitted, then the current project is assumed; the current project can\nbe listed using `gcloud config list --format='text(core.project)'`\nand can be set using `gcloud config set project PROJECTID`.\n+\n`--project` and its fallback `core/project` property play two roles\nin the invocation. It specifies the project of the resource to\noperate on. It also specifies the project for API enablement check,\nquota, and billing. To specify a different project for quota and\nbilling, use `--billing-project` or `billing/quota_project` property.",
              args: {
                name: "PROJECT_ID",
                description: "string",
                suggestions: [],
              },
            },
            {
              name: "--quiet",
              description:
                "Disable all interactive prompts when running gcloud commands. If input\nis required, defaults will be used, or an error will be raised.\nOverrides the default core/disable_prompts property value for this\ncommand invocation. This is equivalent to setting the environment\nvariable `CLOUDSDK_CORE_DISABLE_PROMPTS` to 1.",
            },
            {
              name: "--sort-by",
              description:
                "Comma-separated list of resource field key names to sort by. The\ndefault order is ascending. Prefix a field with ``~'' for descending\norder on that field. This flag interacts with other flags that are applied\nin this order: *--flatten*, *--sort-by*, *--filter*, *--limit*.",
              args: {
                name: "FIELD",
                description: "list",
                suggestions: [],
              },
            },
            {
              name: "--trace-token",
              description:
                "Token used to route traces of service requests for investigation of issues. Overrides the default *core/trace_token* property value for this command invocation.",
              args: {
                name: "TRACE_TOKEN",
                description: "string",
                suggestions: [],
              },
            },
            {
              name: "--uri",
              description:
                "Print a list of resource URIs instead of the default output.",
            },
            {
              name: "--user-output-enabled",
              description:
                "Print user intended output to the console. Overrides the default *core/user_output_enabled* property value for this command invocation. Use *--no-user-output-enabled* to disable.",
            },
            {
              name: "--verbosity",
              description:
                "Override the default verbosity for this command. Overrides the default *core/verbosity* property value for this command invocation. _VERBOSITY_ must be one of: *debug*, *info*, *warning*, *error*, *critical*, *none*.",
              args: {
                name: "VERBOSITY",
                description: "string",
                suggestions: [
                  "debug",
                  "info",
                  "warning",
                  "error",
                  "critical",
                  "none",
                ],
              },
            },
          ],
        },
        {
          name: "move",
          description:
            "Move a folder to a new position within the same organization.",
          subcommands: [],
          options: [
            {
              name: "--account",
              description:
                "Google Cloud Platform user account to use for invocation. Overrides the default *core/account* property value for this command invocation.",
              args: {
                name: "ACCOUNT",
                description: "string",
                suggestions: [],
              },
            },
            {
              name: "--async",
              description:
                "Return immediately, without waiting for the operation in progress to\ncomplete.",
            },
            {
              name: "--billing-project",
              description:
                "The Google Cloud Platform project that will be charged quota for operations performed in gcloud. If you need to operate on one project, but need quota against a different project, you can use this flag to specify the billing project. If both `billing/quota_project` and `--billing-project` are specified, `--billing-project` takes precedence. Run `$ gcloud config set --help` to see more information about `billing/quota_project`.",
              args: {
                name: "BILLING_PROJECT",
                description: "string",
                suggestions: [],
              },
            },
            {
              name: "--configuration",
              description:
                "The configuration to use for this command invocation. For more\ninformation on how to use configurations, run:\n`gcloud topic configurations`.  You can also use the CLOUDSDK_ACTIVE_CONFIG_NAME environment\nvariable to set the equivalent of this flag for a terminal\nsession.",
              args: {
                name: "CONFIGURATION",
                description: "string",
                suggestions: [],
              },
            },
            {
              name: "--flags-file",
              description:
                "A YAML or JSON file that specifies a *--flag*:*value* dictionary.\nUseful for specifying complex flag values with special characters\nthat work with any command interpreter. Additionally, each\n*--flags-file* arg is replaced by its constituent flags. See\n$ gcloud topic flags-file for more information.",
              args: {
                name: "YAML_FILE",
                description: "string",
                suggestions: [],
              },
            },
            {
              name: "--flatten",
              description:
                "Flatten _name_[] output resource slices in _KEY_ into separate records\nfor each item in each slice. Multiple keys and slices may be specified.\nThis also flattens keys for *--format* and *--filter*. For example,\n*--flatten=abc.def* flattens *abc.def[].ghi* references to\n*abc.def.ghi*. A resource record containing *abc.def[]* with N elements\nwill expand to N records in the flattened output. This flag interacts\nwith other flags that are applied in this order: *--flatten*,\n*--sort-by*, *--filter*, *--limit*.",
              args: {
                name: "KEY",
                description: "list",
                suggestions: [],
              },
            },
            {
              name: "--folder",
              description: "ID for the folder to use as a parent",
              args: {
                name: "FOLDER_ID",
                description: "string",
                suggestions: [],
              },
            },
            {
              name: "--format",
              description:
                "Set the format for printing command output resources. The default is a\ncommand-specific human-friendly output format. The supported formats\nare: `config`, `csv`, `default`, `diff`, `disable`, `flattened`, `get`, `json`, `list`, `multi`, `none`, `object`, `table`, `text`, `value`, `yaml`. For more details run $ gcloud topic formats.",
              args: {
                name: "FORMAT",
                description: "string",
                suggestions: [],
              },
            },
            {
              name: "--help",
              description: "Display detailed help.",
            },
            {
              name: "--impersonate-service-account",
              description:
                "For this gcloud invocation, all API requests will be made as the given service account instead of the currently selected account. This is done without needing to create, download, and activate a key for the account. In order to perform operations as the service account, your currently selected account must have an IAM role that includes the iam.serviceAccounts.getAccessToken permission for the service account. The roles/iam.serviceAccountTokenCreator role has this permission or you may create a custom role. Overrides the default *auth/impersonate_service_account* property value for this command invocation.",
              args: {
                name: "SERVICE_ACCOUNT_EMAIL",
                description: "string",
                suggestions: [],
              },
            },
            {
              name: "--log-http",
              description:
                "Log all HTTP server requests and responses to stderr. Overrides the default *core/log_http* property value for this command invocation.",
            },
            {
              name: "--organization",
              description: "ID for the organization to use as a parent",
              args: {
                name: "ORGANIZATION_ID",
                description: "string",
                suggestions: [],
              },
            },
            {
              name: "--project",
              description:
                "The Google Cloud Platform project ID to use for this invocation. If\nomitted, then the current project is assumed; the current project can\nbe listed using `gcloud config list --format='text(core.project)'`\nand can be set using `gcloud config set project PROJECTID`.\n+\n`--project` and its fallback `core/project` property play two roles\nin the invocation. It specifies the project of the resource to\noperate on. It also specifies the project for API enablement check,\nquota, and billing. To specify a different project for quota and\nbilling, use `--billing-project` or `billing/quota_project` property.",
              args: {
                name: "PROJECT_ID",
                description: "string",
                suggestions: [],
              },
            },
            {
              name: "--quiet",
              description:
                "Disable all interactive prompts when running gcloud commands. If input\nis required, defaults will be used, or an error will be raised.\nOverrides the default core/disable_prompts property value for this\ncommand invocation. This is equivalent to setting the environment\nvariable `CLOUDSDK_CORE_DISABLE_PROMPTS` to 1.",
            },
            {
              name: "--trace-token",
              description:
                "Token used to route traces of service requests for investigation of issues. Overrides the default *core/trace_token* property value for this command invocation.",
              args: {
                name: "TRACE_TOKEN",
                description: "string",
                suggestions: [],
              },
            },
            {
              name: "--user-output-enabled",
              description:
                "Print user intended output to the console. Overrides the default *core/user_output_enabled* property value for this command invocation. Use *--no-user-output-enabled* to disable.",
            },
            {
              name: "--verbosity",
              description:
                "Override the default verbosity for this command. Overrides the default *core/verbosity* property value for this command invocation. _VERBOSITY_ must be one of: *debug*, *info*, *warning*, *error*, *critical*, *none*.",
              args: {
                name: "VERBOSITY",
                description: "string",
                suggestions: [
                  "debug",
                  "info",
                  "warning",
                  "error",
                  "critical",
                  "none",
                ],
              },
            },
          ],
          args: [
            {
              name: "FOLDER_ID",
              description: "ID for the folder you want to move.",
              variadic: false,
            },
          ],
        },
        {
          name: "remove-iam-policy-binding",
          description: "Remove IAM policy binding for a folder.",
          subcommands: [],
          options: [
            {
              name: "--account",
              description:
                "Google Cloud Platform user account to use for invocation. Overrides the default *core/account* property value for this command invocation.",
              args: {
                name: "ACCOUNT",
                description: "string",
                suggestions: [],
              },
            },
            {
              name: "--all",
              description:
                "Remove all bindings with this role and member, irrespective of any\nconditions.",
            },
            {
              name: "--billing-project",
              description:
                "The Google Cloud Platform project that will be charged quota for operations performed in gcloud. If you need to operate on one project, but need quota against a different project, you can use this flag to specify the billing project. If both `billing/quota_project` and `--billing-project` are specified, `--billing-project` takes precedence. Run `$ gcloud config set --help` to see more information about `billing/quota_project`.",
              args: {
                name: "BILLING_PROJECT",
                description: "string",
                suggestions: [],
              },
            },
            {
              name: "--condition",
              description:
                "+\nThe condition of the binding to be removed. When the condition is explicitly\nspecified as `None` (`--condition=None`), it matches a binding without a\ncondition. Otherwise, only the binding with a condition which exactly matches\nthe specified condition (including the optional description) will be removed.\n+\n*expression*::: (Required) Expression of the condition which\nevaluates to True or False. This uses a subset of Common Expression\nLanguage syntax.\n+\n*title*::: (Required) A short string describing the purpose of the expression.\n+\n*description*::: (Optional) Additional description for the expression.\n+\nNOTE: An unsatisfied condition will not allow access via this\nbinding.",
              args: {
                name: "KEY=VALUE",
                description: "dict",
                suggestions: [],
              },
            },
            {
              name: "--condition-from-file",
              description:
                "Path to a local JSON or YAML file that defines the condition.\nTo see available fields, see the help for `--condition`.",
              args: {
                name: "CONDITION_FROM_FILE",
                description: "googlecloudsdk.calliope.arg_parsers:FileContents",
                suggestions: [],
              },
            },
            {
              name: "--configuration",
              description:
                "The configuration to use for this command invocation. For more\ninformation on how to use configurations, run:\n`gcloud topic configurations`.  You can also use the CLOUDSDK_ACTIVE_CONFIG_NAME environment\nvariable to set the equivalent of this flag for a terminal\nsession.",
              args: {
                name: "CONFIGURATION",
                description: "string",
                suggestions: [],
              },
            },
            {
              name: "--flags-file",
              description:
                "A YAML or JSON file that specifies a *--flag*:*value* dictionary.\nUseful for specifying complex flag values with special characters\nthat work with any command interpreter. Additionally, each\n*--flags-file* arg is replaced by its constituent flags. See\n$ gcloud topic flags-file for more information.",
              args: {
                name: "YAML_FILE",
                description: "string",
                suggestions: [],
              },
            },
            {
              name: "--flatten",
              description:
                "Flatten _name_[] output resource slices in _KEY_ into separate records\nfor each item in each slice. Multiple keys and slices may be specified.\nThis also flattens keys for *--format* and *--filter*. For example,\n*--flatten=abc.def* flattens *abc.def[].ghi* references to\n*abc.def.ghi*. A resource record containing *abc.def[]* with N elements\nwill expand to N records in the flattened output. This flag interacts\nwith other flags that are applied in this order: *--flatten*,\n*--sort-by*, *--filter*, *--limit*.",
              args: {
                name: "KEY",
                description: "list",
                suggestions: [],
              },
            },
            {
              name: "--format",
              description:
                "Set the format for printing command output resources. The default is a\ncommand-specific human-friendly output format. The supported formats\nare: `config`, `csv`, `default`, `diff`, `disable`, `flattened`, `get`, `json`, `list`, `multi`, `none`, `object`, `table`, `text`, `value`, `yaml`. For more details run $ gcloud topic formats.",
              args: {
                name: "FORMAT",
                description: "string",
                suggestions: [],
              },
            },
            {
              name: "--help",
              description: "Display detailed help.",
            },
            {
              name: "--impersonate-service-account",
              description:
                "For this gcloud invocation, all API requests will be made as the given service account instead of the currently selected account. This is done without needing to create, download, and activate a key for the account. In order to perform operations as the service account, your currently selected account must have an IAM role that includes the iam.serviceAccounts.getAccessToken permission for the service account. The roles/iam.serviceAccountTokenCreator role has this permission or you may create a custom role. Overrides the default *auth/impersonate_service_account* property value for this command invocation.",
              args: {
                name: "SERVICE_ACCOUNT_EMAIL",
                description: "string",
                suggestions: [],
              },
            },
            {
              name: "--log-http",
              description:
                "Log all HTTP server requests and responses to stderr. Overrides the default *core/log_http* property value for this command invocation.",
            },
            {
              name: "--member",
              description:
                "The member to remove the binding for. Should be of the form `user|group|serviceAccount:email` or\n`domain:domain`.\n+\nExamples: `user:test-user@gmail.com`, `group:admins@example.com`,\n`serviceAccount:test123@example.domain.com`, or\n`domain:example.domain.com`.\n+\nCan also be one of the following special values:\n* `allUsers` - Special identifier that represents anyone who is on the internet,\n   with or without a Google account.\n* `allAuthenticatedUsers` - Special identifier that represents anyone who is\n   authenticated with a Google account or a service account.",
              args: {
                name: "MEMBER",
                description: "string",
                suggestions: [],
              },
              priority: 100,
            },
            {
              name: "--project",
              description:
                "The Google Cloud Platform project ID to use for this invocation. If\nomitted, then the current project is assumed; the current project can\nbe listed using `gcloud config list --format='text(core.project)'`\nand can be set using `gcloud config set project PROJECTID`.\n+\n`--project` and its fallback `core/project` property play two roles\nin the invocation. It specifies the project of the resource to\noperate on. It also specifies the project for API enablement check,\nquota, and billing. To specify a different project for quota and\nbilling, use `--billing-project` or `billing/quota_project` property.",
              args: {
                name: "PROJECT_ID",
                description: "string",
                suggestions: [],
              },
            },
            {
              name: "--quiet",
              description:
                "Disable all interactive prompts when running gcloud commands. If input\nis required, defaults will be used, or an error will be raised.\nOverrides the default core/disable_prompts property value for this\ncommand invocation. This is equivalent to setting the environment\nvariable `CLOUDSDK_CORE_DISABLE_PROMPTS` to 1.",
            },
            {
              name: "--role",
              description: "The role to remove the member from.",
              args: {
                name: "ROLE",
                description: "string",
                suggestions: [],
              },
              priority: 100,
            },
            {
              name: "--trace-token",
              description:
                "Token used to route traces of service requests for investigation of issues. Overrides the default *core/trace_token* property value for this command invocation.",
              args: {
                name: "TRACE_TOKEN",
                description: "string",
                suggestions: [],
              },
            },
            {
              name: "--user-output-enabled",
              description:
                "Print user intended output to the console. Overrides the default *core/user_output_enabled* property value for this command invocation. Use *--no-user-output-enabled* to disable.",
            },
            {
              name: "--verbosity",
              description:
                "Override the default verbosity for this command. Overrides the default *core/verbosity* property value for this command invocation. _VERBOSITY_ must be one of: *debug*, *info*, *warning*, *error*, *critical*, *none*.",
              args: {
                name: "VERBOSITY",
                description: "string",
                suggestions: [
                  "debug",
                  "info",
                  "warning",
                  "error",
                  "critical",
                  "none",
                ],
              },
            },
          ],
          args: [
            {
              name: "FOLDER",
              description:
                "ID of the folder or fully qualified identifier for the folder.",
              variadic: false,
            },
          ],
        },
        {
          name: "set-iam-policy",
          description: "Set IAM policy for a folder.",
          subcommands: [],
          options: [
            {
              name: "--account",
              description:
                "Google Cloud Platform user account to use for invocation. Overrides the default *core/account* property value for this command invocation.",
              args: {
                name: "ACCOUNT",
                description: "string",
                suggestions: [],
              },
            },
            {
              name: "--billing-project",
              description:
                "The Google Cloud Platform project that will be charged quota for operations performed in gcloud. If you need to operate on one project, but need quota against a different project, you can use this flag to specify the billing project. If both `billing/quota_project` and `--billing-project` are specified, `--billing-project` takes precedence. Run `$ gcloud config set --help` to see more information about `billing/quota_project`.",
              args: {
                name: "BILLING_PROJECT",
                description: "string",
                suggestions: [],
              },
            },
            {
              name: "--configuration",
              description:
                "The configuration to use for this command invocation. For more\ninformation on how to use configurations, run:\n`gcloud topic configurations`.  You can also use the CLOUDSDK_ACTIVE_CONFIG_NAME environment\nvariable to set the equivalent of this flag for a terminal\nsession.",
              args: {
                name: "CONFIGURATION",
                description: "string",
                suggestions: [],
              },
            },
            {
              name: "--flags-file",
              description:
                "A YAML or JSON file that specifies a *--flag*:*value* dictionary.\nUseful for specifying complex flag values with special characters\nthat work with any command interpreter. Additionally, each\n*--flags-file* arg is replaced by its constituent flags. See\n$ gcloud topic flags-file for more information.",
              args: {
                name: "YAML_FILE",
                description: "string",
                suggestions: [],
              },
            },
            {
              name: "--flatten",
              description:
                "Flatten _name_[] output resource slices in _KEY_ into separate records\nfor each item in each slice. Multiple keys and slices may be specified.\nThis also flattens keys for *--format* and *--filter*. For example,\n*--flatten=abc.def* flattens *abc.def[].ghi* references to\n*abc.def.ghi*. A resource record containing *abc.def[]* with N elements\nwill expand to N records in the flattened output. This flag interacts\nwith other flags that are applied in this order: *--flatten*,\n*--sort-by*, *--filter*, *--limit*.",
              args: {
                name: "KEY",
                description: "list",
                suggestions: [],
              },
            },
            {
              name: "--format",
              description:
                "Set the format for printing command output resources. The default is a\ncommand-specific human-friendly output format. The supported formats\nare: `config`, `csv`, `default`, `diff`, `disable`, `flattened`, `get`, `json`, `list`, `multi`, `none`, `object`, `table`, `text`, `value`, `yaml`. For more details run $ gcloud topic formats.",
              args: {
                name: "FORMAT",
                description: "string",
                suggestions: [],
              },
            },
            {
              name: "--help",
              description: "Display detailed help.",
            },
            {
              name: "--impersonate-service-account",
              description:
                "For this gcloud invocation, all API requests will be made as the given service account instead of the currently selected account. This is done without needing to create, download, and activate a key for the account. In order to perform operations as the service account, your currently selected account must have an IAM role that includes the iam.serviceAccounts.getAccessToken permission for the service account. The roles/iam.serviceAccountTokenCreator role has this permission or you may create a custom role. Overrides the default *auth/impersonate_service_account* property value for this command invocation.",
              args: {
                name: "SERVICE_ACCOUNT_EMAIL",
                description: "string",
                suggestions: [],
              },
            },
            {
              name: "--log-http",
              description:
                "Log all HTTP server requests and responses to stderr. Overrides the default *core/log_http* property value for this command invocation.",
            },
            {
              name: "--project",
              description:
                "The Google Cloud Platform project ID to use for this invocation. If\nomitted, then the current project is assumed; the current project can\nbe listed using `gcloud config list --format='text(core.project)'`\nand can be set using `gcloud config set project PROJECTID`.\n+\n`--project` and its fallback `core/project` property play two roles\nin the invocation. It specifies the project of the resource to\noperate on. It also specifies the project for API enablement check,\nquota, and billing. To specify a different project for quota and\nbilling, use `--billing-project` or `billing/quota_project` property.",
              args: {
                name: "PROJECT_ID",
                description: "string",
                suggestions: [],
              },
            },
            {
              name: "--quiet",
              description:
                "Disable all interactive prompts when running gcloud commands. If input\nis required, defaults will be used, or an error will be raised.\nOverrides the default core/disable_prompts property value for this\ncommand invocation. This is equivalent to setting the environment\nvariable `CLOUDSDK_CORE_DISABLE_PROMPTS` to 1.",
            },
            {
              name: "--trace-token",
              description:
                "Token used to route traces of service requests for investigation of issues. Overrides the default *core/trace_token* property value for this command invocation.",
              args: {
                name: "TRACE_TOKEN",
                description: "string",
                suggestions: [],
              },
            },
            {
              name: "--user-output-enabled",
              description:
                "Print user intended output to the console. Overrides the default *core/user_output_enabled* property value for this command invocation. Use *--no-user-output-enabled* to disable.",
            },
            {
              name: "--verbosity",
              description:
                "Override the default verbosity for this command. Overrides the default *core/verbosity* property value for this command invocation. _VERBOSITY_ must be one of: *debug*, *info*, *warning*, *error*, *critical*, *none*.",
              args: {
                name: "VERBOSITY",
                description: "string",
                suggestions: [
                  "debug",
                  "info",
                  "warning",
                  "error",
                  "critical",
                  "none",
                ],
              },
            },
          ],
          args: [
            {
              name: "FOLDER_ID",
              description: "ID for the folder whose policy you want to set.",
              variadic: false,
            },
            {
              name: "POLICY_FILE",
              description: "JSON or YAML file with the IAM policy.",
              variadic: false,
            },
          ],
        },
        {
          name: "undelete",
          description: "Undelete a folder.",
          subcommands: [],
          options: [
            {
              name: "--account",
              description:
                "Google Cloud Platform user account to use for invocation. Overrides the default *core/account* property value for this command invocation.",
              args: {
                name: "ACCOUNT",
                description: "string",
                suggestions: [],
              },
            },
            {
              name: "--billing-project",
              description:
                "The Google Cloud Platform project that will be charged quota for operations performed in gcloud. If you need to operate on one project, but need quota against a different project, you can use this flag to specify the billing project. If both `billing/quota_project` and `--billing-project` are specified, `--billing-project` takes precedence. Run `$ gcloud config set --help` to see more information about `billing/quota_project`.",
              args: {
                name: "BILLING_PROJECT",
                description: "string",
                suggestions: [],
              },
            },
            {
              name: "--configuration",
              description:
                "The configuration to use for this command invocation. For more\ninformation on how to use configurations, run:\n`gcloud topic configurations`.  You can also use the CLOUDSDK_ACTIVE_CONFIG_NAME environment\nvariable to set the equivalent of this flag for a terminal\nsession.",
              args: {
                name: "CONFIGURATION",
                description: "string",
                suggestions: [],
              },
            },
            {
              name: "--flags-file",
              description:
                "A YAML or JSON file that specifies a *--flag*:*value* dictionary.\nUseful for specifying complex flag values with special characters\nthat work with any command interpreter. Additionally, each\n*--flags-file* arg is replaced by its constituent flags. See\n$ gcloud topic flags-file for more information.",
              args: {
                name: "YAML_FILE",
                description: "string",
                suggestions: [],
              },
            },
            {
              name: "--flatten",
              description:
                "Flatten _name_[] output resource slices in _KEY_ into separate records\nfor each item in each slice. Multiple keys and slices may be specified.\nThis also flattens keys for *--format* and *--filter*. For example,\n*--flatten=abc.def* flattens *abc.def[].ghi* references to\n*abc.def.ghi*. A resource record containing *abc.def[]* with N elements\nwill expand to N records in the flattened output. This flag interacts\nwith other flags that are applied in this order: *--flatten*,\n*--sort-by*, *--filter*, *--limit*.",
              args: {
                name: "KEY",
                description: "list",
                suggestions: [],
              },
            },
            {
              name: "--format",
              description:
                "Set the format for printing command output resources. The default is a\ncommand-specific human-friendly output format. The supported formats\nare: `config`, `csv`, `default`, `diff`, `disable`, `flattened`, `get`, `json`, `list`, `multi`, `none`, `object`, `table`, `text`, `value`, `yaml`. For more details run $ gcloud topic formats.",
              args: {
                name: "FORMAT",
                description: "string",
                suggestions: [],
              },
            },
            {
              name: "--help",
              description: "Display detailed help.",
            },
            {
              name: "--impersonate-service-account",
              description:
                "For this gcloud invocation, all API requests will be made as the given service account instead of the currently selected account. This is done without needing to create, download, and activate a key for the account. In order to perform operations as the service account, your currently selected account must have an IAM role that includes the iam.serviceAccounts.getAccessToken permission for the service account. The roles/iam.serviceAccountTokenCreator role has this permission or you may create a custom role. Overrides the default *auth/impersonate_service_account* property value for this command invocation.",
              args: {
                name: "SERVICE_ACCOUNT_EMAIL",
                description: "string",
                suggestions: [],
              },
            },
            {
              name: "--log-http",
              description:
                "Log all HTTP server requests and responses to stderr. Overrides the default *core/log_http* property value for this command invocation.",
            },
            {
              name: "--project",
              description:
                "The Google Cloud Platform project ID to use for this invocation. If\nomitted, then the current project is assumed; the current project can\nbe listed using `gcloud config list --format='text(core.project)'`\nand can be set using `gcloud config set project PROJECTID`.\n+\n`--project` and its fallback `core/project` property play two roles\nin the invocation. It specifies the project of the resource to\noperate on. It also specifies the project for API enablement check,\nquota, and billing. To specify a different project for quota and\nbilling, use `--billing-project` or `billing/quota_project` property.",
              args: {
                name: "PROJECT_ID",
                description: "string",
                suggestions: [],
              },
            },
            {
              name: "--quiet",
              description:
                "Disable all interactive prompts when running gcloud commands. If input\nis required, defaults will be used, or an error will be raised.\nOverrides the default core/disable_prompts property value for this\ncommand invocation. This is equivalent to setting the environment\nvariable `CLOUDSDK_CORE_DISABLE_PROMPTS` to 1.",
            },
            {
              name: "--trace-token",
              description:
                "Token used to route traces of service requests for investigation of issues. Overrides the default *core/trace_token* property value for this command invocation.",
              args: {
                name: "TRACE_TOKEN",
                description: "string",
                suggestions: [],
              },
            },
            {
              name: "--user-output-enabled",
              description:
                "Print user intended output to the console. Overrides the default *core/user_output_enabled* property value for this command invocation. Use *--no-user-output-enabled* to disable.",
            },
            {
              name: "--verbosity",
              description:
                "Override the default verbosity for this command. Overrides the default *core/verbosity* property value for this command invocation. _VERBOSITY_ must be one of: *debug*, *info*, *warning*, *error*, *critical*, *none*.",
              args: {
                name: "VERBOSITY",
                description: "string",
                suggestions: [
                  "debug",
                  "info",
                  "warning",
                  "error",
                  "critical",
                  "none",
                ],
              },
            },
          ],
          args: [
            {
              name: "FOLDER_ID",
              description: "ID for the folder you want to undelete.",
              variadic: false,
            },
          ],
        },
        {
          name: "update",
          description: "Update the display name of a folder.",
          subcommands: [],
          options: [
            {
              name: "--account",
              description:
                "Google Cloud Platform user account to use for invocation. Overrides the default *core/account* property value for this command invocation.",
              args: {
                name: "ACCOUNT",
                description: "string",
                suggestions: [],
              },
            },
            {
              name: "--billing-project",
              description:
                "The Google Cloud Platform project that will be charged quota for operations performed in gcloud. If you need to operate on one project, but need quota against a different project, you can use this flag to specify the billing project. If both `billing/quota_project` and `--billing-project` are specified, `--billing-project` takes precedence. Run `$ gcloud config set --help` to see more information about `billing/quota_project`.",
              args: {
                name: "BILLING_PROJECT",
                description: "string",
                suggestions: [],
              },
            },
            {
              name: "--configuration",
              description:
                "The configuration to use for this command invocation. For more\ninformation on how to use configurations, run:\n`gcloud topic configurations`.  You can also use the CLOUDSDK_ACTIVE_CONFIG_NAME environment\nvariable to set the equivalent of this flag for a terminal\nsession.",
              args: {
                name: "CONFIGURATION",
                description: "string",
                suggestions: [],
              },
            },
            {
              name: "--display-name",
              description:
                "New display name for the folder (unique under the same parent).",
              args: {
                name: "DISPLAY_NAME",
                description: "string",
                suggestions: [],
              },
              priority: 100,
            },
            {
              name: "--flags-file",
              description:
                "A YAML or JSON file that specifies a *--flag*:*value* dictionary.\nUseful for specifying complex flag values with special characters\nthat work with any command interpreter. Additionally, each\n*--flags-file* arg is replaced by its constituent flags. See\n$ gcloud topic flags-file for more information.",
              args: {
                name: "YAML_FILE",
                description: "string",
                suggestions: [],
              },
            },
            {
              name: "--flatten",
              description:
                "Flatten _name_[] output resource slices in _KEY_ into separate records\nfor each item in each slice. Multiple keys and slices may be specified.\nThis also flattens keys for *--format* and *--filter*. For example,\n*--flatten=abc.def* flattens *abc.def[].ghi* references to\n*abc.def.ghi*. A resource record containing *abc.def[]* with N elements\nwill expand to N records in the flattened output. This flag interacts\nwith other flags that are applied in this order: *--flatten*,\n*--sort-by*, *--filter*, *--limit*.",
              args: {
                name: "KEY",
                description: "list",
                suggestions: [],
              },
            },
            {
              name: "--format",
              description:
                "Set the format for printing command output resources. The default is a\ncommand-specific human-friendly output format. The supported formats\nare: `config`, `csv`, `default`, `diff`, `disable`, `flattened`, `get`, `json`, `list`, `multi`, `none`, `object`, `table`, `text`, `value`, `yaml`. For more details run $ gcloud topic formats.",
              args: {
                name: "FORMAT",
                description: "string",
                suggestions: [],
              },
            },
            {
              name: "--help",
              description: "Display detailed help.",
            },
            {
              name: "--impersonate-service-account",
              description:
                "For this gcloud invocation, all API requests will be made as the given service account instead of the currently selected account. This is done without needing to create, download, and activate a key for the account. In order to perform operations as the service account, your currently selected account must have an IAM role that includes the iam.serviceAccounts.getAccessToken permission for the service account. The roles/iam.serviceAccountTokenCreator role has this permission or you may create a custom role. Overrides the default *auth/impersonate_service_account* property value for this command invocation.",
              args: {
                name: "SERVICE_ACCOUNT_EMAIL",
                description: "string",
                suggestions: [],
              },
            },
            {
              name: "--log-http",
              description:
                "Log all HTTP server requests and responses to stderr. Overrides the default *core/log_http* property value for this command invocation.",
            },
            {
              name: "--project",
              description:
                "The Google Cloud Platform project ID to use for this invocation. If\nomitted, then the current project is assumed; the current project can\nbe listed using `gcloud config list --format='text(core.project)'`\nand can be set using `gcloud config set project PROJECTID`.\n+\n`--project` and its fallback `core/project` property play two roles\nin the invocation. It specifies the project of the resource to\noperate on. It also specifies the project for API enablement check,\nquota, and billing. To specify a different project for quota and\nbilling, use `--billing-project` or `billing/quota_project` property.",
              args: {
                name: "PROJECT_ID",
                description: "string",
                suggestions: [],
              },
            },
            {
              name: "--quiet",
              description:
                "Disable all interactive prompts when running gcloud commands. If input\nis required, defaults will be used, or an error will be raised.\nOverrides the default core/disable_prompts property value for this\ncommand invocation. This is equivalent to setting the environment\nvariable `CLOUDSDK_CORE_DISABLE_PROMPTS` to 1.",
            },
            {
              name: "--trace-token",
              description:
                "Token used to route traces of service requests for investigation of issues. Overrides the default *core/trace_token* property value for this command invocation.",
              args: {
                name: "TRACE_TOKEN",
                description: "string",
                suggestions: [],
              },
            },
            {
              name: "--user-output-enabled",
              description:
                "Print user intended output to the console. Overrides the default *core/user_output_enabled* property value for this command invocation. Use *--no-user-output-enabled* to disable.",
            },
            {
              name: "--verbosity",
              description:
                "Override the default verbosity for this command. Overrides the default *core/verbosity* property value for this command invocation. _VERBOSITY_ must be one of: *debug*, *info*, *warning*, *error*, *critical*, *none*.",
              args: {
                name: "VERBOSITY",
                description: "string",
                suggestions: [
                  "debug",
                  "info",
                  "warning",
                  "error",
                  "critical",
                  "none",
                ],
              },
            },
          ],
          args: [
            {
              name: "FOLDER_ID",
              description: "ID for the folder you want to update.",
              variadic: false,
            },
          ],
        },
      ],
      options: [
        {
          name: "--account",
          description:
            "Google Cloud Platform user account to use for invocation. Overrides the default *core/account* property value for this command invocation.",
          args: {
            name: "ACCOUNT",
            description: "string",
            suggestions: [],
          },
        },
        {
          name: "--billing-project",
          description:
            "The Google Cloud Platform project that will be charged quota for operations performed in gcloud. If you need to operate on one project, but need quota against a different project, you can use this flag to specify the billing project. If both `billing/quota_project` and `--billing-project` are specified, `--billing-project` takes precedence. Run `$ gcloud config set --help` to see more information about `billing/quota_project`.",
          args: {
            name: "BILLING_PROJECT",
            description: "string",
            suggestions: [],
          },
        },
        {
          name: "--configuration",
          description:
            "The configuration to use for this command invocation. For more\ninformation on how to use configurations, run:\n`gcloud topic configurations`.  You can also use the CLOUDSDK_ACTIVE_CONFIG_NAME environment\nvariable to set the equivalent of this flag for a terminal\nsession.",
          args: {
            name: "CONFIGURATION",
            description: "string",
            suggestions: [],
          },
        },
        {
          name: "--flags-file",
          description:
            "A YAML or JSON file that specifies a *--flag*:*value* dictionary.\nUseful for specifying complex flag values with special characters\nthat work with any command interpreter. Additionally, each\n*--flags-file* arg is replaced by its constituent flags. See\n$ gcloud topic flags-file for more information.",
          args: {
            name: "YAML_FILE",
            description: "string",
            suggestions: [],
          },
        },
        {
          name: "--flatten",
          description:
            "Flatten _name_[] output resource slices in _KEY_ into separate records\nfor each item in each slice. Multiple keys and slices may be specified.\nThis also flattens keys for *--format* and *--filter*. For example,\n*--flatten=abc.def* flattens *abc.def[].ghi* references to\n*abc.def.ghi*. A resource record containing *abc.def[]* with N elements\nwill expand to N records in the flattened output. This flag interacts\nwith other flags that are applied in this order: *--flatten*,\n*--sort-by*, *--filter*, *--limit*.",
          args: {
            name: "KEY",
            description: "list",
            suggestions: [],
          },
        },
        {
          name: "--format",
          description:
            "Set the format for printing command output resources. The default is a\ncommand-specific human-friendly output format. The supported formats\nare: `config`, `csv`, `default`, `diff`, `disable`, `flattened`, `get`, `json`, `list`, `multi`, `none`, `object`, `table`, `text`, `value`, `yaml`. For more details run $ gcloud topic formats.",
          args: {
            name: "FORMAT",
            description: "string",
            suggestions: [],
          },
        },
        {
          name: "--help",
          description: "Display detailed help.",
        },
        {
          name: "--impersonate-service-account",
          description:
            "For this gcloud invocation, all API requests will be made as the given service account instead of the currently selected account. This is done without needing to create, download, and activate a key for the account. In order to perform operations as the service account, your currently selected account must have an IAM role that includes the iam.serviceAccounts.getAccessToken permission for the service account. The roles/iam.serviceAccountTokenCreator role has this permission or you may create a custom role. Overrides the default *auth/impersonate_service_account* property value for this command invocation.",
          args: {
            name: "SERVICE_ACCOUNT_EMAIL",
            description: "string",
            suggestions: [],
          },
        },
        {
          name: "--log-http",
          description:
            "Log all HTTP server requests and responses to stderr. Overrides the default *core/log_http* property value for this command invocation.",
        },
        {
          name: "--project",
          description:
            "The Google Cloud Platform project ID to use for this invocation. If\nomitted, then the current project is assumed; the current project can\nbe listed using `gcloud config list --format='text(core.project)'`\nand can be set using `gcloud config set project PROJECTID`.\n+\n`--project` and its fallback `core/project` property play two roles\nin the invocation. It specifies the project of the resource to\noperate on. It also specifies the project for API enablement check,\nquota, and billing. To specify a different project for quota and\nbilling, use `--billing-project` or `billing/quota_project` property.",
          args: {
            name: "PROJECT_ID",
            description: "string",
            suggestions: [],
          },
        },
        {
          name: "--quiet",
          description:
            "Disable all interactive prompts when running gcloud commands. If input\nis required, defaults will be used, or an error will be raised.\nOverrides the default core/disable_prompts property value for this\ncommand invocation. This is equivalent to setting the environment\nvariable `CLOUDSDK_CORE_DISABLE_PROMPTS` to 1.",
        },
        {
          name: "--trace-token",
          description:
            "Token used to route traces of service requests for investigation of issues. Overrides the default *core/trace_token* property value for this command invocation.",
          args: {
            name: "TRACE_TOKEN",
            description: "string",
            suggestions: [],
          },
        },
        {
          name: "--user-output-enabled",
          description:
            "Print user intended output to the console. Overrides the default *core/user_output_enabled* property value for this command invocation. Use *--no-user-output-enabled* to disable.",
        },
        {
          name: "--verbosity",
          description:
            "Override the default verbosity for this command. Overrides the default *core/verbosity* property value for this command invocation. _VERBOSITY_ must be one of: *debug*, *info*, *warning*, *error*, *critical*, *none*.",
          args: {
            name: "VERBOSITY",
            description: "string",
            suggestions: [
              "debug",
              "info",
              "warning",
              "error",
              "critical",
              "none",
            ],
          },
        },
      ],
    },
    {
      name: "org-policies",
      description: "Manage Org Policies.",
      subcommands: [
        {
          name: "allow",
          description:
            "Add values to an Organization Policy allowed_values list policy.",
          subcommands: [],
          options: [
            {
              name: "--account",
              description:
                "Google Cloud Platform user account to use for invocation. Overrides the default *core/account* property value for this command invocation.",
              args: {
                name: "ACCOUNT",
                description: "string",
                suggestions: [],
              },
            },
            {
              name: "--billing-project",
              description:
                "The Google Cloud Platform project that will be charged quota for operations performed in gcloud. If you need to operate on one project, but need quota against a different project, you can use this flag to specify the billing project. If both `billing/quota_project` and `--billing-project` are specified, `--billing-project` takes precedence. Run `$ gcloud config set --help` to see more information about `billing/quota_project`.",
              args: {
                name: "BILLING_PROJECT",
                description: "string",
                suggestions: [],
              },
            },
            {
              name: "--configuration",
              description:
                "The configuration to use for this command invocation. For more\ninformation on how to use configurations, run:\n`gcloud topic configurations`.  You can also use the CLOUDSDK_ACTIVE_CONFIG_NAME environment\nvariable to set the equivalent of this flag for a terminal\nsession.",
              args: {
                name: "CONFIGURATION",
                description: "string",
                suggestions: [],
              },
            },
            {
              name: "--flags-file",
              description:
                "A YAML or JSON file that specifies a *--flag*:*value* dictionary.\nUseful for specifying complex flag values with special characters\nthat work with any command interpreter. Additionally, each\n*--flags-file* arg is replaced by its constituent flags. See\n$ gcloud topic flags-file for more information.",
              args: {
                name: "YAML_FILE",
                description: "string",
                suggestions: [],
              },
            },
            {
              name: "--flatten",
              description:
                "Flatten _name_[] output resource slices in _KEY_ into separate records\nfor each item in each slice. Multiple keys and slices may be specified.\nThis also flattens keys for *--format* and *--filter*. For example,\n*--flatten=abc.def* flattens *abc.def[].ghi* references to\n*abc.def.ghi*. A resource record containing *abc.def[]* with N elements\nwill expand to N records in the flattened output. This flag interacts\nwith other flags that are applied in this order: *--flatten*,\n*--sort-by*, *--filter*, *--limit*.",
              args: {
                name: "KEY",
                description: "list",
                suggestions: [],
              },
            },
            {
              name: "--folder",
              description: "Folder ID.",
              args: {
                name: "FOLDER_ID",
                description: "string",
                suggestions: [],
              },
            },
            {
              name: "--format",
              description:
                "Set the format for printing command output resources. The default is a\ncommand-specific human-friendly output format. The supported formats\nare: `config`, `csv`, `default`, `diff`, `disable`, `flattened`, `get`, `json`, `list`, `multi`, `none`, `object`, `table`, `text`, `value`, `yaml`. For more details run $ gcloud topic formats.",
              args: {
                name: "FORMAT",
                description: "string",
                suggestions: [],
              },
            },
            {
              name: "--help",
              description: "Display detailed help.",
            },
            {
              name: "--impersonate-service-account",
              description:
                "For this gcloud invocation, all API requests will be made as the given service account instead of the currently selected account. This is done without needing to create, download, and activate a key for the account. In order to perform operations as the service account, your currently selected account must have an IAM role that includes the iam.serviceAccounts.getAccessToken permission for the service account. The roles/iam.serviceAccountTokenCreator role has this permission or you may create a custom role. Overrides the default *auth/impersonate_service_account* property value for this command invocation.",
              args: {
                name: "SERVICE_ACCOUNT_EMAIL",
                description: "string",
                suggestions: [],
              },
            },
            {
              name: "--log-http",
              description:
                "Log all HTTP server requests and responses to stderr. Overrides the default *core/log_http* property value for this command invocation.",
            },
            {
              name: "--organization",
              description: "Organization ID.",
              args: {
                name: "ORGANIZATION_ID",
                description: "string",
                suggestions: [],
              },
            },
            {
              name: "--quiet",
              description:
                "Disable all interactive prompts when running gcloud commands. If input\nis required, defaults will be used, or an error will be raised.\nOverrides the default core/disable_prompts property value for this\ncommand invocation. This is equivalent to setting the environment\nvariable `CLOUDSDK_CORE_DISABLE_PROMPTS` to 1.",
            },
            {
              name: "--trace-token",
              description:
                "Token used to route traces of service requests for investigation of issues. Overrides the default *core/trace_token* property value for this command invocation.",
              args: {
                name: "TRACE_TOKEN",
                description: "string",
                suggestions: [],
              },
            },
            {
              name: "--user-output-enabled",
              description:
                "Print user intended output to the console. Overrides the default *core/user_output_enabled* property value for this command invocation. Use *--no-user-output-enabled* to disable.",
            },
            {
              name: "--verbosity",
              description:
                "Override the default verbosity for this command. Overrides the default *core/verbosity* property value for this command invocation. _VERBOSITY_ must be one of: *debug*, *info*, *warning*, *error*, *critical*, *none*.",
              args: {
                name: "VERBOSITY",
                description: "string",
                suggestions: [
                  "debug",
                  "info",
                  "warning",
                  "error",
                  "critical",
                  "none",
                ],
              },
            },
          ],
          args: [
            {
              name: "ORG_POLICY_ID",
              description: "The Org Policy constraint name.",
              variadic: false,
            },
            {
              name: "ALLOWED_VALUE",
              description:
                "The values to add to the allowed_values list policy.",
              variadic: true,
            },
          ],
        },
        {
          name: "delete",
          description: "Delete an Organization Policy.",
          subcommands: [],
          options: [
            {
              name: "--account",
              description:
                "Google Cloud Platform user account to use for invocation. Overrides the default *core/account* property value for this command invocation.",
              args: {
                name: "ACCOUNT",
                description: "string",
                suggestions: [],
              },
            },
            {
              name: "--billing-project",
              description:
                "The Google Cloud Platform project that will be charged quota for operations performed in gcloud. If you need to operate on one project, but need quota against a different project, you can use this flag to specify the billing project. If both `billing/quota_project` and `--billing-project` are specified, `--billing-project` takes precedence. Run `$ gcloud config set --help` to see more information about `billing/quota_project`.",
              args: {
                name: "BILLING_PROJECT",
                description: "string",
                suggestions: [],
              },
            },
            {
              name: "--configuration",
              description:
                "The configuration to use for this command invocation. For more\ninformation on how to use configurations, run:\n`gcloud topic configurations`.  You can also use the CLOUDSDK_ACTIVE_CONFIG_NAME environment\nvariable to set the equivalent of this flag for a terminal\nsession.",
              args: {
                name: "CONFIGURATION",
                description: "string",
                suggestions: [],
              },
            },
            {
              name: "--flags-file",
              description:
                "A YAML or JSON file that specifies a *--flag*:*value* dictionary.\nUseful for specifying complex flag values with special characters\nthat work with any command interpreter. Additionally, each\n*--flags-file* arg is replaced by its constituent flags. See\n$ gcloud topic flags-file for more information.",
              args: {
                name: "YAML_FILE",
                description: "string",
                suggestions: [],
              },
            },
            {
              name: "--flatten",
              description:
                "Flatten _name_[] output resource slices in _KEY_ into separate records\nfor each item in each slice. Multiple keys and slices may be specified.\nThis also flattens keys for *--format* and *--filter*. For example,\n*--flatten=abc.def* flattens *abc.def[].ghi* references to\n*abc.def.ghi*. A resource record containing *abc.def[]* with N elements\nwill expand to N records in the flattened output. This flag interacts\nwith other flags that are applied in this order: *--flatten*,\n*--sort-by*, *--filter*, *--limit*.",
              args: {
                name: "KEY",
                description: "list",
                suggestions: [],
              },
            },
            {
              name: "--folder",
              description: "Folder ID.",
              args: {
                name: "FOLDER_ID",
                description: "string",
                suggestions: [],
              },
            },
            {
              name: "--format",
              description:
                "Set the format for printing command output resources. The default is a\ncommand-specific human-friendly output format. The supported formats\nare: `config`, `csv`, `default`, `diff`, `disable`, `flattened`, `get`, `json`, `list`, `multi`, `none`, `object`, `table`, `text`, `value`, `yaml`. For more details run $ gcloud topic formats.",
              args: {
                name: "FORMAT",
                description: "string",
                suggestions: [],
              },
            },
            {
              name: "--help",
              description: "Display detailed help.",
            },
            {
              name: "--impersonate-service-account",
              description:
                "For this gcloud invocation, all API requests will be made as the given service account instead of the currently selected account. This is done without needing to create, download, and activate a key for the account. In order to perform operations as the service account, your currently selected account must have an IAM role that includes the iam.serviceAccounts.getAccessToken permission for the service account. The roles/iam.serviceAccountTokenCreator role has this permission or you may create a custom role. Overrides the default *auth/impersonate_service_account* property value for this command invocation.",
              args: {
                name: "SERVICE_ACCOUNT_EMAIL",
                description: "string",
                suggestions: [],
              },
            },
            {
              name: "--log-http",
              description:
                "Log all HTTP server requests and responses to stderr. Overrides the default *core/log_http* property value for this command invocation.",
            },
            {
              name: "--organization",
              description: "Organization ID.",
              args: {
                name: "ORGANIZATION_ID",
                description: "string",
                suggestions: [],
              },
            },
            {
              name: "--quiet",
              description:
                "Disable all interactive prompts when running gcloud commands. If input\nis required, defaults will be used, or an error will be raised.\nOverrides the default core/disable_prompts property value for this\ncommand invocation. This is equivalent to setting the environment\nvariable `CLOUDSDK_CORE_DISABLE_PROMPTS` to 1.",
            },
            {
              name: "--trace-token",
              description:
                "Token used to route traces of service requests for investigation of issues. Overrides the default *core/trace_token* property value for this command invocation.",
              args: {
                name: "TRACE_TOKEN",
                description: "string",
                suggestions: [],
              },
            },
            {
              name: "--user-output-enabled",
              description:
                "Print user intended output to the console. Overrides the default *core/user_output_enabled* property value for this command invocation. Use *--no-user-output-enabled* to disable.",
            },
            {
              name: "--verbosity",
              description:
                "Override the default verbosity for this command. Overrides the default *core/verbosity* property value for this command invocation. _VERBOSITY_ must be one of: *debug*, *info*, *warning*, *error*, *critical*, *none*.",
              args: {
                name: "VERBOSITY",
                description: "string",
                suggestions: [
                  "debug",
                  "info",
                  "warning",
                  "error",
                  "critical",
                  "none",
                ],
              },
            },
          ],
          args: [
            {
              name: "ORG_POLICY_ID",
              description: "The Org Policy constraint name.",
              variadic: false,
            },
          ],
        },
        {
          name: "deny",
          description:
            "Add values to an Organization Policy denied_values list policy.",
          subcommands: [],
          options: [
            {
              name: "--account",
              description:
                "Google Cloud Platform user account to use for invocation. Overrides the default *core/account* property value for this command invocation.",
              args: {
                name: "ACCOUNT",
                description: "string",
                suggestions: [],
              },
            },
            {
              name: "--billing-project",
              description:
                "The Google Cloud Platform project that will be charged quota for operations performed in gcloud. If you need to operate on one project, but need quota against a different project, you can use this flag to specify the billing project. If both `billing/quota_project` and `--billing-project` are specified, `--billing-project` takes precedence. Run `$ gcloud config set --help` to see more information about `billing/quota_project`.",
              args: {
                name: "BILLING_PROJECT",
                description: "string",
                suggestions: [],
              },
            },
            {
              name: "--configuration",
              description:
                "The configuration to use for this command invocation. For more\ninformation on how to use configurations, run:\n`gcloud topic configurations`.  You can also use the CLOUDSDK_ACTIVE_CONFIG_NAME environment\nvariable to set the equivalent of this flag for a terminal\nsession.",
              args: {
                name: "CONFIGURATION",
                description: "string",
                suggestions: [],
              },
            },
            {
              name: "--flags-file",
              description:
                "A YAML or JSON file that specifies a *--flag*:*value* dictionary.\nUseful for specifying complex flag values with special characters\nthat work with any command interpreter. Additionally, each\n*--flags-file* arg is replaced by its constituent flags. See\n$ gcloud topic flags-file for more information.",
              args: {
                name: "YAML_FILE",
                description: "string",
                suggestions: [],
              },
            },
            {
              name: "--flatten",
              description:
                "Flatten _name_[] output resource slices in _KEY_ into separate records\nfor each item in each slice. Multiple keys and slices may be specified.\nThis also flattens keys for *--format* and *--filter*. For example,\n*--flatten=abc.def* flattens *abc.def[].ghi* references to\n*abc.def.ghi*. A resource record containing *abc.def[]* with N elements\nwill expand to N records in the flattened output. This flag interacts\nwith other flags that are applied in this order: *--flatten*,\n*--sort-by*, *--filter*, *--limit*.",
              args: {
                name: "KEY",
                description: "list",
                suggestions: [],
              },
            },
            {
              name: "--folder",
              description: "Folder ID.",
              args: {
                name: "FOLDER_ID",
                description: "string",
                suggestions: [],
              },
            },
            {
              name: "--format",
              description:
                "Set the format for printing command output resources. The default is a\ncommand-specific human-friendly output format. The supported formats\nare: `config`, `csv`, `default`, `diff`, `disable`, `flattened`, `get`, `json`, `list`, `multi`, `none`, `object`, `table`, `text`, `value`, `yaml`. For more details run $ gcloud topic formats.",
              args: {
                name: "FORMAT",
                description: "string",
                suggestions: [],
              },
            },
            {
              name: "--help",
              description: "Display detailed help.",
            },
            {
              name: "--impersonate-service-account",
              description:
                "For this gcloud invocation, all API requests will be made as the given service account instead of the currently selected account. This is done without needing to create, download, and activate a key for the account. In order to perform operations as the service account, your currently selected account must have an IAM role that includes the iam.serviceAccounts.getAccessToken permission for the service account. The roles/iam.serviceAccountTokenCreator role has this permission or you may create a custom role. Overrides the default *auth/impersonate_service_account* property value for this command invocation.",
              args: {
                name: "SERVICE_ACCOUNT_EMAIL",
                description: "string",
                suggestions: [],
              },
            },
            {
              name: "--log-http",
              description:
                "Log all HTTP server requests and responses to stderr. Overrides the default *core/log_http* property value for this command invocation.",
            },
            {
              name: "--organization",
              description: "Organization ID.",
              args: {
                name: "ORGANIZATION_ID",
                description: "string",
                suggestions: [],
              },
            },
            {
              name: "--quiet",
              description:
                "Disable all interactive prompts when running gcloud commands. If input\nis required, defaults will be used, or an error will be raised.\nOverrides the default core/disable_prompts property value for this\ncommand invocation. This is equivalent to setting the environment\nvariable `CLOUDSDK_CORE_DISABLE_PROMPTS` to 1.",
            },
            {
              name: "--trace-token",
              description:
                "Token used to route traces of service requests for investigation of issues. Overrides the default *core/trace_token* property value for this command invocation.",
              args: {
                name: "TRACE_TOKEN",
                description: "string",
                suggestions: [],
              },
            },
            {
              name: "--user-output-enabled",
              description:
                "Print user intended output to the console. Overrides the default *core/user_output_enabled* property value for this command invocation. Use *--no-user-output-enabled* to disable.",
            },
            {
              name: "--verbosity",
              description:
                "Override the default verbosity for this command. Overrides the default *core/verbosity* property value for this command invocation. _VERBOSITY_ must be one of: *debug*, *info*, *warning*, *error*, *critical*, *none*.",
              args: {
                name: "VERBOSITY",
                description: "string",
                suggestions: [
                  "debug",
                  "info",
                  "warning",
                  "error",
                  "critical",
                  "none",
                ],
              },
            },
          ],
          args: [
            {
              name: "ORG_POLICY_ID",
              description: "The Org Policy constraint name.",
              variadic: false,
            },
            {
              name: "DENIED_VALUE",
              description:
                "The values to add to the denied_values list policy.",
              variadic: true,
            },
          ],
>>>>>>> 39a91f1... feat: apply new rule to files
=======
>>>>>>> 8601a08... feat: add built files
        },
        {
            name: "org-policies",
            description: "Manage Org Policies.",
            subcommands: [
                {
                    name: "allow",
                    description: "Add values to an Organization Policy allowed_values list policy.",
<<<<<<< HEAD
                    subcommands: [],
=======
>>>>>>> 8601a08... feat: add built files
                    options: [
                        {
                            name: "--account",
                            description: "Google Cloud Platform user account to use for invocation. Overrides the default *core/account* property value for this command invocation.",
                            args: {
                                name: "ACCOUNT",
                                description: "string",
                                suggestions: [],
                            },
                        },
                        {
                            name: "--billing-project",
                            description: "The Google Cloud Platform project that will be charged quota for operations performed in gcloud. If you need to operate on one project, but need quota against a different project, you can use this flag to specify the billing project. If both `billing/quota_project` and `--billing-project` are specified, `--billing-project` takes precedence. Run `$ gcloud config set --help` to see more information about `billing/quota_project`.",
                            args: {
                                name: "BILLING_PROJECT",
                                description: "string",
                                suggestions: [],
                            },
                        },
                        {
                            name: "--configuration",
                            description: "The configuration to use for this command invocation. For more\ninformation on how to use configurations, run:\n`gcloud topic configurations`.  You can also use the CLOUDSDK_ACTIVE_CONFIG_NAME environment\nvariable to set the equivalent of this flag for a terminal\nsession.",
                            args: {
                                name: "CONFIGURATION",
                                description: "string",
                                suggestions: [],
                            },
                        },
                        {
                            name: "--flags-file",
                            description: "A YAML or JSON file that specifies a *--flag*:*value* dictionary.\nUseful for specifying complex flag values with special characters\nthat work with any command interpreter. Additionally, each\n*--flags-file* arg is replaced by its constituent flags. See\n$ gcloud topic flags-file for more information.",
                            args: {
                                name: "YAML_FILE",
                                description: "string",
                                suggestions: [],
                            },
                        },
                        {
                            name: "--flatten",
                            description: "Flatten _name_[] output resource slices in _KEY_ into separate records\nfor each item in each slice. Multiple keys and slices may be specified.\nThis also flattens keys for *--format* and *--filter*. For example,\n*--flatten=abc.def* flattens *abc.def[].ghi* references to\n*abc.def.ghi*. A resource record containing *abc.def[]* with N elements\nwill expand to N records in the flattened output. This flag interacts\nwith other flags that are applied in this order: *--flatten*,\n*--sort-by*, *--filter*, *--limit*.",
                            args: {
                                name: "KEY",
                                description: "list",
                                suggestions: [],
                            },
                        },
                        {
                            name: "--folder",
                            description: "Folder ID.",
                            args: {
                                name: "FOLDER_ID",
                                description: "string",
                                suggestions: [],
                            },
                        },
                        {
                            name: "--format",
                            description: "Set the format for printing command output resources. The default is a\ncommand-specific human-friendly output format. The supported formats\nare: `config`, `csv`, `default`, `diff`, `disable`, `flattened`, `get`, `json`, `list`, `multi`, `none`, `object`, `table`, `text`, `value`, `yaml`. For more details run $ gcloud topic formats.",
                            args: {
                                name: "FORMAT",
                                description: "string",
                                suggestions: [],
                            },
                        },
                        {
                            name: "--help",
                            description: "Display detailed help.",
                        },
                        {
                            name: "--impersonate-service-account",
                            description: "For this gcloud invocation, all API requests will be made as the given service account instead of the currently selected account. This is done without needing to create, download, and activate a key for the account. In order to perform operations as the service account, your currently selected account must have an IAM role that includes the iam.serviceAccounts.getAccessToken permission for the service account. The roles/iam.serviceAccountTokenCreator role has this permission or you may create a custom role. Overrides the default *auth/impersonate_service_account* property value for this command invocation.",
                            args: {
                                name: "SERVICE_ACCOUNT_EMAIL",
                                description: "string",
                                suggestions: [],
                            },
                        },
                        {
                            name: "--log-http",
                            description: "Log all HTTP server requests and responses to stderr. Overrides the default *core/log_http* property value for this command invocation.",
                        },
                        {
                            name: "--organization",
                            description: "Organization ID.",
                            args: {
                                name: "ORGANIZATION_ID",
                                description: "string",
                                suggestions: [],
                            },
                        },
                        {
                            name: "--quiet",
                            description: "Disable all interactive prompts when running gcloud commands. If input\nis required, defaults will be used, or an error will be raised.\nOverrides the default core/disable_prompts property value for this\ncommand invocation. This is equivalent to setting the environment\nvariable `CLOUDSDK_CORE_DISABLE_PROMPTS` to 1.",
                        },
                        {
                            name: "--trace-token",
                            description: "Token used to route traces of service requests for investigation of issues. Overrides the default *core/trace_token* property value for this command invocation.",
                            args: {
                                name: "TRACE_TOKEN",
                                description: "string",
                                suggestions: [],
                            },
                        },
                        {
                            name: "--user-output-enabled",
                            description: "Print user intended output to the console. Overrides the default *core/user_output_enabled* property value for this command invocation. Use *--no-user-output-enabled* to disable.",
                        },
                        {
                            name: "--verbosity",
                            description: "Override the default verbosity for this command. Overrides the default *core/verbosity* property value for this command invocation. _VERBOSITY_ must be one of: *debug*, *info*, *warning*, *error*, *critical*, *none*.",
                            args: {
                                name: "VERBOSITY",
                                description: "string",
                                suggestions: [
                                    "debug",
                                    "info",
                                    "warning",
                                    "error",
                                    "critical",
                                    "none",
                                ],
                            },
                        },
                    ],
                    args: [
                        {
                            name: "ORG_POLICY_ID",
                            description: "The Org Policy constraint name.",
                            variadic: false,
                        },
                        {
                            name: "ALLOWED_VALUE",
                            description: "The values to add to the allowed_values list policy.",
                            variadic: true,
                        },
                    ],
                },
                {
                    name: "delete",
                    description: "Delete an Organization Policy.",
<<<<<<< HEAD
                    subcommands: [],
=======
>>>>>>> 8601a08... feat: add built files
                    options: [
                        {
                            name: "--account",
                            description: "Google Cloud Platform user account to use for invocation. Overrides the default *core/account* property value for this command invocation.",
                            args: {
                                name: "ACCOUNT",
                                description: "string",
                                suggestions: [],
                            },
                        },
                        {
                            name: "--billing-project",
                            description: "The Google Cloud Platform project that will be charged quota for operations performed in gcloud. If you need to operate on one project, but need quota against a different project, you can use this flag to specify the billing project. If both `billing/quota_project` and `--billing-project` are specified, `--billing-project` takes precedence. Run `$ gcloud config set --help` to see more information about `billing/quota_project`.",
                            args: {
                                name: "BILLING_PROJECT",
                                description: "string",
                                suggestions: [],
                            },
                        },
                        {
                            name: "--configuration",
                            description: "The configuration to use for this command invocation. For more\ninformation on how to use configurations, run:\n`gcloud topic configurations`.  You can also use the CLOUDSDK_ACTIVE_CONFIG_NAME environment\nvariable to set the equivalent of this flag for a terminal\nsession.",
                            args: {
                                name: "CONFIGURATION",
                                description: "string",
                                suggestions: [],
                            },
                        },
                        {
                            name: "--flags-file",
                            description: "A YAML or JSON file that specifies a *--flag*:*value* dictionary.\nUseful for specifying complex flag values with special characters\nthat work with any command interpreter. Additionally, each\n*--flags-file* arg is replaced by its constituent flags. See\n$ gcloud topic flags-file for more information.",
                            args: {
                                name: "YAML_FILE",
                                description: "string",
                                suggestions: [],
                            },
                        },
                        {
                            name: "--flatten",
                            description: "Flatten _name_[] output resource slices in _KEY_ into separate records\nfor each item in each slice. Multiple keys and slices may be specified.\nThis also flattens keys for *--format* and *--filter*. For example,\n*--flatten=abc.def* flattens *abc.def[].ghi* references to\n*abc.def.ghi*. A resource record containing *abc.def[]* with N elements\nwill expand to N records in the flattened output. This flag interacts\nwith other flags that are applied in this order: *--flatten*,\n*--sort-by*, *--filter*, *--limit*.",
                            args: {
                                name: "KEY",
                                description: "list",
                                suggestions: [],
                            },
                        },
                        {
                            name: "--folder",
                            description: "Folder ID.",
                            args: {
                                name: "FOLDER_ID",
                                description: "string",
                                suggestions: [],
                            },
                        },
                        {
                            name: "--format",
                            description: "Set the format for printing command output resources. The default is a\ncommand-specific human-friendly output format. The supported formats\nare: `config`, `csv`, `default`, `diff`, `disable`, `flattened`, `get`, `json`, `list`, `multi`, `none`, `object`, `table`, `text`, `value`, `yaml`. For more details run $ gcloud topic formats.",
                            args: {
                                name: "FORMAT",
                                description: "string",
                                suggestions: [],
                            },
                        },
                        {
                            name: "--help",
                            description: "Display detailed help.",
                        },
                        {
                            name: "--impersonate-service-account",
                            description: "For this gcloud invocation, all API requests will be made as the given service account instead of the currently selected account. This is done without needing to create, download, and activate a key for the account. In order to perform operations as the service account, your currently selected account must have an IAM role that includes the iam.serviceAccounts.getAccessToken permission for the service account. The roles/iam.serviceAccountTokenCreator role has this permission or you may create a custom role. Overrides the default *auth/impersonate_service_account* property value for this command invocation.",
                            args: {
                                name: "SERVICE_ACCOUNT_EMAIL",
                                description: "string",
                                suggestions: [],
                            },
                        },
                        {
                            name: "--log-http",
                            description: "Log all HTTP server requests and responses to stderr. Overrides the default *core/log_http* property value for this command invocation.",
                        },
                        {
                            name: "--organization",
                            description: "Organization ID.",
                            args: {
                                name: "ORGANIZATION_ID",
                                description: "string",
                                suggestions: [],
                            },
                        },
                        {
                            name: "--quiet",
                            description: "Disable all interactive prompts when running gcloud commands. If input\nis required, defaults will be used, or an error will be raised.\nOverrides the default core/disable_prompts property value for this\ncommand invocation. This is equivalent to setting the environment\nvariable `CLOUDSDK_CORE_DISABLE_PROMPTS` to 1.",
                        },
                        {
                            name: "--trace-token",
                            description: "Token used to route traces of service requests for investigation of issues. Overrides the default *core/trace_token* property value for this command invocation.",
                            args: {
                                name: "TRACE_TOKEN",
                                description: "string",
                                suggestions: [],
                            },
                        },
                        {
                            name: "--user-output-enabled",
                            description: "Print user intended output to the console. Overrides the default *core/user_output_enabled* property value for this command invocation. Use *--no-user-output-enabled* to disable.",
                        },
                        {
                            name: "--verbosity",
                            description: "Override the default verbosity for this command. Overrides the default *core/verbosity* property value for this command invocation. _VERBOSITY_ must be one of: *debug*, *info*, *warning*, *error*, *critical*, *none*.",
                            args: {
                                name: "VERBOSITY",
                                description: "string",
                                suggestions: [
                                    "debug",
                                    "info",
                                    "warning",
                                    "error",
                                    "critical",
                                    "none",
                                ],
                            },
                        },
                    ],
                    args: [
                        {
                            name: "ORG_POLICY_ID",
                            description: "The Org Policy constraint name.",
                            variadic: false,
                        },
                    ],
                },
                {
                    name: "deny",
                    description: "Add values to an Organization Policy denied_values list policy.",
<<<<<<< HEAD
                    subcommands: [],
=======
>>>>>>> 8601a08... feat: add built files
                    options: [
                        {
                            name: "--account",
                            description: "Google Cloud Platform user account to use for invocation. Overrides the default *core/account* property value for this command invocation.",
                            args: {
                                name: "ACCOUNT",
                                description: "string",
                                suggestions: [],
                            },
                        },
                        {
                            name: "--billing-project",
                            description: "The Google Cloud Platform project that will be charged quota for operations performed in gcloud. If you need to operate on one project, but need quota against a different project, you can use this flag to specify the billing project. If both `billing/quota_project` and `--billing-project` are specified, `--billing-project` takes precedence. Run `$ gcloud config set --help` to see more information about `billing/quota_project`.",
                            args: {
                                name: "BILLING_PROJECT",
                                description: "string",
                                suggestions: [],
                            },
                        },
                        {
                            name: "--configuration",
                            description: "The configuration to use for this command invocation. For more\ninformation on how to use configurations, run:\n`gcloud topic configurations`.  You can also use the CLOUDSDK_ACTIVE_CONFIG_NAME environment\nvariable to set the equivalent of this flag for a terminal\nsession.",
                            args: {
                                name: "CONFIGURATION",
                                description: "string",
                                suggestions: [],
                            },
                        },
                        {
                            name: "--flags-file",
                            description: "A YAML or JSON file that specifies a *--flag*:*value* dictionary.\nUseful for specifying complex flag values with special characters\nthat work with any command interpreter. Additionally, each\n*--flags-file* arg is replaced by its constituent flags. See\n$ gcloud topic flags-file for more information.",
                            args: {
                                name: "YAML_FILE",
                                description: "string",
                                suggestions: [],
                            },
                        },
                        {
                            name: "--flatten",
                            description: "Flatten _name_[] output resource slices in _KEY_ into separate records\nfor each item in each slice. Multiple keys and slices may be specified.\nThis also flattens keys for *--format* and *--filter*. For example,\n*--flatten=abc.def* flattens *abc.def[].ghi* references to\n*abc.def.ghi*. A resource record containing *abc.def[]* with N elements\nwill expand to N records in the flattened output. This flag interacts\nwith other flags that are applied in this order: *--flatten*,\n*--sort-by*, *--filter*, *--limit*.",
                            args: {
                                name: "KEY",
                                description: "list",
                                suggestions: [],
                            },
                        },
                        {
                            name: "--folder",
                            description: "Folder ID.",
                            args: {
                                name: "FOLDER_ID",
                                description: "string",
                                suggestions: [],
                            },
                        },
                        {
                            name: "--format",
                            description: "Set the format for printing command output resources. The default is a\ncommand-specific human-friendly output format. The supported formats\nare: `config`, `csv`, `default`, `diff`, `disable`, `flattened`, `get`, `json`, `list`, `multi`, `none`, `object`, `table`, `text`, `value`, `yaml`. For more details run $ gcloud topic formats.",
                            args: {
                                name: "FORMAT",
                                description: "string",
                                suggestions: [],
                            },
                        },
                        {
                            name: "--help",
                            description: "Display detailed help.",
                        },
                        {
                            name: "--impersonate-service-account",
                            description: "For this gcloud invocation, all API requests will be made as the given service account instead of the currently selected account. This is done without needing to create, download, and activate a key for the account. In order to perform operations as the service account, your currently selected account must have an IAM role that includes the iam.serviceAccounts.getAccessToken permission for the service account. The roles/iam.serviceAccountTokenCreator role has this permission or you may create a custom role. Overrides the default *auth/impersonate_service_account* property value for this command invocation.",
                            args: {
                                name: "SERVICE_ACCOUNT_EMAIL",
                                description: "string",
                                suggestions: [],
                            },
                        },
                        {
                            name: "--log-http",
                            description: "Log all HTTP server requests and responses to stderr. Overrides the default *core/log_http* property value for this command invocation.",
                        },
                        {
                            name: "--organization",
                            description: "Organization ID.",
                            args: {
                                name: "ORGANIZATION_ID",
                                description: "string",
                                suggestions: [],
                            },
                        },
                        {
                            name: "--quiet",
                            description: "Disable all interactive prompts when running gcloud commands. If input\nis required, defaults will be used, or an error will be raised.\nOverrides the default core/disable_prompts property value for this\ncommand invocation. This is equivalent to setting the environment\nvariable `CLOUDSDK_CORE_DISABLE_PROMPTS` to 1.",
                        },
                        {
                            name: "--trace-token",
                            description: "Token used to route traces of service requests for investigation of issues. Overrides the default *core/trace_token* property value for this command invocation.",
                            args: {
                                name: "TRACE_TOKEN",
                                description: "string",
                                suggestions: [],
                            },
                        },
                        {
                            name: "--user-output-enabled",
                            description: "Print user intended output to the console. Overrides the default *core/user_output_enabled* property value for this command invocation. Use *--no-user-output-enabled* to disable.",
                        },
                        {
                            name: "--verbosity",
                            description: "Override the default verbosity for this command. Overrides the default *core/verbosity* property value for this command invocation. _VERBOSITY_ must be one of: *debug*, *info*, *warning*, *error*, *critical*, *none*.",
                            args: {
                                name: "VERBOSITY",
                                description: "string",
                                suggestions: [
                                    "debug",
                                    "info",
                                    "warning",
                                    "error",
                                    "critical",
                                    "none",
                                ],
                            },
                        },
                    ],
                    args: [
                        {
                            name: "ORG_POLICY_ID",
                            description: "The Org Policy constraint name.",
                            variadic: false,
                        },
                        {
                            name: "DENIED_VALUE",
                            description: "The values to add to the denied_values list policy.",
                            variadic: true,
                        },
                    ],
                },
                {
                    name: "describe",
                    description: "Describe an Organization Policy.",
<<<<<<< HEAD
                    subcommands: [],
=======
>>>>>>> 8601a08... feat: add built files
                    options: [
                        {
                            name: "--account",
                            description: "Google Cloud Platform user account to use for invocation. Overrides the default *core/account* property value for this command invocation.",
                            args: {
                                name: "ACCOUNT",
                                description: "string",
                                suggestions: [],
                            },
                        },
                        {
                            name: "--billing-project",
                            description: "The Google Cloud Platform project that will be charged quota for operations performed in gcloud. If you need to operate on one project, but need quota against a different project, you can use this flag to specify the billing project. If both `billing/quota_project` and `--billing-project` are specified, `--billing-project` takes precedence. Run `$ gcloud config set --help` to see more information about `billing/quota_project`.",
                            args: {
                                name: "BILLING_PROJECT",
                                description: "string",
                                suggestions: [],
                            },
                        },
                        {
                            name: "--configuration",
                            description: "The configuration to use for this command invocation. For more\ninformation on how to use configurations, run:\n`gcloud topic configurations`.  You can also use the CLOUDSDK_ACTIVE_CONFIG_NAME environment\nvariable to set the equivalent of this flag for a terminal\nsession.",
                            args: {
                                name: "CONFIGURATION",
                                description: "string",
                                suggestions: [],
                            },
                        },
                        {
                            name: "--effective",
                            description: "Show the effective policy.",
                        },
                        {
                            name: "--flags-file",
                            description: "A YAML or JSON file that specifies a *--flag*:*value* dictionary.\nUseful for specifying complex flag values with special characters\nthat work with any command interpreter. Additionally, each\n*--flags-file* arg is replaced by its constituent flags. See\n$ gcloud topic flags-file for more information.",
                            args: {
                                name: "YAML_FILE",
                                description: "string",
                                suggestions: [],
                            },
                        },
                        {
                            name: "--flatten",
                            description: "Flatten _name_[] output resource slices in _KEY_ into separate records\nfor each item in each slice. Multiple keys and slices may be specified.\nThis also flattens keys for *--format* and *--filter*. For example,\n*--flatten=abc.def* flattens *abc.def[].ghi* references to\n*abc.def.ghi*. A resource record containing *abc.def[]* with N elements\nwill expand to N records in the flattened output. This flag interacts\nwith other flags that are applied in this order: *--flatten*,\n*--sort-by*, *--filter*, *--limit*.",
                            args: {
                                name: "KEY",
                                description: "list",
                                suggestions: [],
                            },
                        },
                        {
                            name: "--folder",
                            description: "Folder ID.",
                            args: {
                                name: "FOLDER_ID",
                                description: "string",
                                suggestions: [],
                            },
                        },
                        {
                            name: "--format",
                            description: "Set the format for printing command output resources. The default is a\ncommand-specific human-friendly output format. The supported formats\nare: `config`, `csv`, `default`, `diff`, `disable`, `flattened`, `get`, `json`, `list`, `multi`, `none`, `object`, `table`, `text`, `value`, `yaml`. For more details run $ gcloud topic formats.",
                            args: {
                                name: "FORMAT",
                                description: "string",
                                suggestions: [],
                            },
                        },
                        {
                            name: "--help",
                            description: "Display detailed help.",
                        },
                        {
                            name: "--impersonate-service-account",
                            description: "For this gcloud invocation, all API requests will be made as the given service account instead of the currently selected account. This is done without needing to create, download, and activate a key for the account. In order to perform operations as the service account, your currently selected account must have an IAM role that includes the iam.serviceAccounts.getAccessToken permission for the service account. The roles/iam.serviceAccountTokenCreator role has this permission or you may create a custom role. Overrides the default *auth/impersonate_service_account* property value for this command invocation.",
                            args: {
                                name: "SERVICE_ACCOUNT_EMAIL",
                                description: "string",
                                suggestions: [],
                            },
                        },
                        {
                            name: "--log-http",
                            description: "Log all HTTP server requests and responses to stderr. Overrides the default *core/log_http* property value for this command invocation.",
                        },
                        {
                            name: "--organization",
                            description: "Organization ID.",
                            args: {
                                name: "ORGANIZATION_ID",
                                description: "string",
                                suggestions: [],
                            },
                        },
                        {
                            name: "--quiet",
                            description: "Disable all interactive prompts when running gcloud commands. If input\nis required, defaults will be used, or an error will be raised.\nOverrides the default core/disable_prompts property value for this\ncommand invocation. This is equivalent to setting the environment\nvariable `CLOUDSDK_CORE_DISABLE_PROMPTS` to 1.",
                        },
                        {
                            name: "--trace-token",
                            description: "Token used to route traces of service requests for investigation of issues. Overrides the default *core/trace_token* property value for this command invocation.",
                            args: {
                                name: "TRACE_TOKEN",
                                description: "string",
                                suggestions: [],
                            },
                        },
                        {
                            name: "--user-output-enabled",
                            description: "Print user intended output to the console. Overrides the default *core/user_output_enabled* property value for this command invocation. Use *--no-user-output-enabled* to disable.",
                        },
                        {
                            name: "--verbosity",
                            description: "Override the default verbosity for this command. Overrides the default *core/verbosity* property value for this command invocation. _VERBOSITY_ must be one of: *debug*, *info*, *warning*, *error*, *critical*, *none*.",
                            args: {
                                name: "VERBOSITY",
                                description: "string",
                                suggestions: [
                                    "debug",
                                    "info",
                                    "warning",
                                    "error",
                                    "critical",
                                    "none",
                                ],
                            },
                        },
                    ],
                    args: [
                        {
                            name: "ORG_POLICY_ID",
                            description: "The Org Policy constraint name.",
                            variadic: false,
                        },
                    ],
                },
                {
                    name: "disable-enforce",
                    description: "Turns off enforcement of boolean Organization Policy constraint.",
<<<<<<< HEAD
                    subcommands: [],
=======
>>>>>>> 8601a08... feat: add built files
                    options: [
                        {
                            name: "--account",
                            description: "Google Cloud Platform user account to use for invocation. Overrides the default *core/account* property value for this command invocation.",
                            args: {
                                name: "ACCOUNT",
                                description: "string",
                                suggestions: [],
                            },
                        },
                        {
                            name: "--billing-project",
                            description: "The Google Cloud Platform project that will be charged quota for operations performed in gcloud. If you need to operate on one project, but need quota against a different project, you can use this flag to specify the billing project. If both `billing/quota_project` and `--billing-project` are specified, `--billing-project` takes precedence. Run `$ gcloud config set --help` to see more information about `billing/quota_project`.",
                            args: {
                                name: "BILLING_PROJECT",
                                description: "string",
                                suggestions: [],
                            },
                        },
                        {
                            name: "--configuration",
                            description: "The configuration to use for this command invocation. For more\ninformation on how to use configurations, run:\n`gcloud topic configurations`.  You can also use the CLOUDSDK_ACTIVE_CONFIG_NAME environment\nvariable to set the equivalent of this flag for a terminal\nsession.",
                            args: {
                                name: "CONFIGURATION",
                                description: "string",
                                suggestions: [],
                            },
                        },
                        {
                            name: "--flags-file",
                            description: "A YAML or JSON file that specifies a *--flag*:*value* dictionary.\nUseful for specifying complex flag values with special characters\nthat work with any command interpreter. Additionally, each\n*--flags-file* arg is replaced by its constituent flags. See\n$ gcloud topic flags-file for more information.",
                            args: {
                                name: "YAML_FILE",
                                description: "string",
                                suggestions: [],
                            },
                        },
                        {
                            name: "--flatten",
                            description: "Flatten _name_[] output resource slices in _KEY_ into separate records\nfor each item in each slice. Multiple keys and slices may be specified.\nThis also flattens keys for *--format* and *--filter*. For example,\n*--flatten=abc.def* flattens *abc.def[].ghi* references to\n*abc.def.ghi*. A resource record containing *abc.def[]* with N elements\nwill expand to N records in the flattened output. This flag interacts\nwith other flags that are applied in this order: *--flatten*,\n*--sort-by*, *--filter*, *--limit*.",
                            args: {
                                name: "KEY",
                                description: "list",
                                suggestions: [],
                            },
                        },
                        {
                            name: "--folder",
                            description: "Folder ID.",
                            args: {
                                name: "FOLDER_ID",
                                description: "string",
                                suggestions: [],
                            },
                        },
                        {
                            name: "--format",
                            description: "Set the format for printing command output resources. The default is a\ncommand-specific human-friendly output format. The supported formats\nare: `config`, `csv`, `default`, `diff`, `disable`, `flattened`, `get`, `json`, `list`, `multi`, `none`, `object`, `table`, `text`, `value`, `yaml`. For more details run $ gcloud topic formats.",
                            args: {
                                name: "FORMAT",
                                description: "string",
                                suggestions: [],
                            },
                        },
                        {
                            name: "--help",
                            description: "Display detailed help.",
                        },
                        {
                            name: "--impersonate-service-account",
                            description: "For this gcloud invocation, all API requests will be made as the given service account instead of the currently selected account. This is done without needing to create, download, and activate a key for the account. In order to perform operations as the service account, your currently selected account must have an IAM role that includes the iam.serviceAccounts.getAccessToken permission for the service account. The roles/iam.serviceAccountTokenCreator role has this permission or you may create a custom role. Overrides the default *auth/impersonate_service_account* property value for this command invocation.",
                            args: {
                                name: "SERVICE_ACCOUNT_EMAIL",
                                description: "string",
                                suggestions: [],
                            },
                        },
                        {
                            name: "--log-http",
                            description: "Log all HTTP server requests and responses to stderr. Overrides the default *core/log_http* property value for this command invocation.",
                        },
                        {
                            name: "--organization",
                            description: "Organization ID.",
                            args: {
                                name: "ORGANIZATION_ID",
                                description: "string",
                                suggestions: [],
                            },
                        },
                        {
                            name: "--quiet",
                            description: "Disable all interactive prompts when running gcloud commands. If input\nis required, defaults will be used, or an error will be raised.\nOverrides the default core/disable_prompts property value for this\ncommand invocation. This is equivalent to setting the environment\nvariable `CLOUDSDK_CORE_DISABLE_PROMPTS` to 1.",
                        },
                        {
                            name: "--trace-token",
                            description: "Token used to route traces of service requests for investigation of issues. Overrides the default *core/trace_token* property value for this command invocation.",
                            args: {
                                name: "TRACE_TOKEN",
                                description: "string",
                                suggestions: [],
                            },
                        },
                        {
                            name: "--user-output-enabled",
                            description: "Print user intended output to the console. Overrides the default *core/user_output_enabled* property value for this command invocation. Use *--no-user-output-enabled* to disable.",
                        },
                        {
                            name: "--verbosity",
                            description: "Override the default verbosity for this command. Overrides the default *core/verbosity* property value for this command invocation. _VERBOSITY_ must be one of: *debug*, *info*, *warning*, *error*, *critical*, *none*.",
                            args: {
                                name: "VERBOSITY",
                                description: "string",
                                suggestions: [
                                    "debug",
                                    "info",
                                    "warning",
                                    "error",
                                    "critical",
                                    "none",
                                ],
                            },
                        },
                    ],
                    args: [
                        {
                            name: "ORG_POLICY_ID",
                            description: "The Org Policy constraint name.",
                            variadic: false,
                        },
                    ],
                },
                {
                    name: "enable-enforce",
                    description: "Turns on enforcement of boolean Organization Policy constraint.",
<<<<<<< HEAD
                    subcommands: [],
=======
>>>>>>> 8601a08... feat: add built files
                    options: [
                        {
                            name: "--account",
                            description: "Google Cloud Platform user account to use for invocation. Overrides the default *core/account* property value for this command invocation.",
                            args: {
                                name: "ACCOUNT",
                                description: "string",
                                suggestions: [],
                            },
                        },
                        {
                            name: "--billing-project",
                            description: "The Google Cloud Platform project that will be charged quota for operations performed in gcloud. If you need to operate on one project, but need quota against a different project, you can use this flag to specify the billing project. If both `billing/quota_project` and `--billing-project` are specified, `--billing-project` takes precedence. Run `$ gcloud config set --help` to see more information about `billing/quota_project`.",
                            args: {
                                name: "BILLING_PROJECT",
                                description: "string",
                                suggestions: [],
                            },
                        },
                        {
                            name: "--configuration",
                            description: "The configuration to use for this command invocation. For more\ninformation on how to use configurations, run:\n`gcloud topic configurations`.  You can also use the CLOUDSDK_ACTIVE_CONFIG_NAME environment\nvariable to set the equivalent of this flag for a terminal\nsession.",
                            args: {
                                name: "CONFIGURATION",
                                description: "string",
                                suggestions: [],
                            },
                        },
                        {
                            name: "--flags-file",
                            description: "A YAML or JSON file that specifies a *--flag*:*value* dictionary.\nUseful for specifying complex flag values with special characters\nthat work with any command interpreter. Additionally, each\n*--flags-file* arg is replaced by its constituent flags. See\n$ gcloud topic flags-file for more information.",
                            args: {
                                name: "YAML_FILE",
                                description: "string",
                                suggestions: [],
                            },
                        },
                        {
                            name: "--flatten",
                            description: "Flatten _name_[] output resource slices in _KEY_ into separate records\nfor each item in each slice. Multiple keys and slices may be specified.\nThis also flattens keys for *--format* and *--filter*. For example,\n*--flatten=abc.def* flattens *abc.def[].ghi* references to\n*abc.def.ghi*. A resource record containing *abc.def[]* with N elements\nwill expand to N records in the flattened output. This flag interacts\nwith other flags that are applied in this order: *--flatten*,\n*--sort-by*, *--filter*, *--limit*.",
                            args: {
                                name: "KEY",
                                description: "list",
                                suggestions: [],
                            },
                        },
                        {
                            name: "--folder",
                            description: "Folder ID.",
                            args: {
                                name: "FOLDER_ID",
                                description: "string",
                                suggestions: [],
                            },
                        },
                        {
                            name: "--format",
                            description: "Set the format for printing command output resources. The default is a\ncommand-specific human-friendly output format. The supported formats\nare: `config`, `csv`, `default`, `diff`, `disable`, `flattened`, `get`, `json`, `list`, `multi`, `none`, `object`, `table`, `text`, `value`, `yaml`. For more details run $ gcloud topic formats.",
                            args: {
                                name: "FORMAT",
                                description: "string",
                                suggestions: [],
                            },
                        },
                        {
                            name: "--help",
                            description: "Display detailed help.",
                        },
                        {
                            name: "--impersonate-service-account",
                            description: "For this gcloud invocation, all API requests will be made as the given service account instead of the currently selected account. This is done without needing to create, download, and activate a key for the account. In order to perform operations as the service account, your currently selected account must have an IAM role that includes the iam.serviceAccounts.getAccessToken permission for the service account. The roles/iam.serviceAccountTokenCreator role has this permission or you may create a custom role. Overrides the default *auth/impersonate_service_account* property value for this command invocation.",
                            args: {
                                name: "SERVICE_ACCOUNT_EMAIL",
                                description: "string",
                                suggestions: [],
                            },
                        },
                        {
                            name: "--log-http",
                            description: "Log all HTTP server requests and responses to stderr. Overrides the default *core/log_http* property value for this command invocation.",
                        },
                        {
                            name: "--organization",
                            description: "Organization ID.",
                            args: {
                                name: "ORGANIZATION_ID",
                                description: "string",
                                suggestions: [],
                            },
                        },
                        {
                            name: "--quiet",
                            description: "Disable all interactive prompts when running gcloud commands. If input\nis required, defaults will be used, or an error will be raised.\nOverrides the default core/disable_prompts property value for this\ncommand invocation. This is equivalent to setting the environment\nvariable `CLOUDSDK_CORE_DISABLE_PROMPTS` to 1.",
                        },
                        {
                            name: "--trace-token",
                            description: "Token used to route traces of service requests for investigation of issues. Overrides the default *core/trace_token* property value for this command invocation.",
                            args: {
                                name: "TRACE_TOKEN",
                                description: "string",
                                suggestions: [],
                            },
                        },
                        {
                            name: "--user-output-enabled",
                            description: "Print user intended output to the console. Overrides the default *core/user_output_enabled* property value for this command invocation. Use *--no-user-output-enabled* to disable.",
                        },
                        {
                            name: "--verbosity",
                            description: "Override the default verbosity for this command. Overrides the default *core/verbosity* property value for this command invocation. _VERBOSITY_ must be one of: *debug*, *info*, *warning*, *error*, *critical*, *none*.",
                            args: {
                                name: "VERBOSITY",
                                description: "string",
                                suggestions: [
                                    "debug",
                                    "info",
                                    "warning",
                                    "error",
                                    "critical",
                                    "none",
                                ],
                            },
                        },
                    ],
                    args: [
                        {
                            name: "ORG_POLICY_ID",
                            description: "The Org Policy constraint name.",
                            variadic: false,
                        },
                    ],
                },
                {
                    name: "list",
                    description: "List Organization Policies associated with the specified resource.",
<<<<<<< HEAD
                    subcommands: [],
=======
>>>>>>> 8601a08... feat: add built files
                    options: [
                        {
                            name: "--account",
                            description: "Google Cloud Platform user account to use for invocation. Overrides the default *core/account* property value for this command invocation.",
                            args: {
                                name: "ACCOUNT",
                                description: "string",
                                suggestions: [],
                            },
                        },
                        {
                            name: "--billing-project",
                            description: "The Google Cloud Platform project that will be charged quota for operations performed in gcloud. If you need to operate on one project, but need quota against a different project, you can use this flag to specify the billing project. If both `billing/quota_project` and `--billing-project` are specified, `--billing-project` takes precedence. Run `$ gcloud config set --help` to see more information about `billing/quota_project`.",
                            args: {
                                name: "BILLING_PROJECT",
                                description: "string",
                                suggestions: [],
                            },
                        },
                        {
                            name: "--configuration",
                            description: "The configuration to use for this command invocation. For more\ninformation on how to use configurations, run:\n`gcloud topic configurations`.  You can also use the CLOUDSDK_ACTIVE_CONFIG_NAME environment\nvariable to set the equivalent of this flag for a terminal\nsession.",
                            args: {
                                name: "CONFIGURATION",
                                description: "string",
                                suggestions: [],
                            },
                        },
                        {
                            name: "--filter",
                            description: "Apply a Boolean filter _EXPRESSION_ to each resource item to be listed.\nIf the expression evaluates `True`, then that item is listed. For more\ndetails and examples of filter expressions, run $ gcloud topic filters. This\nflag interacts with other flags that are applied in this order: *--flatten*,\n*--sort-by*, *--filter*, *--limit*.",
                            args: {
                                name: "EXPRESSION",
                                description: "string",
                                suggestions: [],
                            },
                        },
                        {
                            name: "--flags-file",
                            description: "A YAML or JSON file that specifies a *--flag*:*value* dictionary.\nUseful for specifying complex flag values with special characters\nthat work with any command interpreter. Additionally, each\n*--flags-file* arg is replaced by its constituent flags. See\n$ gcloud topic flags-file for more information.",
                            args: {
                                name: "YAML_FILE",
                                description: "string",
                                suggestions: [],
                            },
                        },
                        {
                            name: "--flatten",
                            description: "Flatten _name_[] output resource slices in _KEY_ into separate records\nfor each item in each slice. Multiple keys and slices may be specified.\nThis also flattens keys for *--format* and *--filter*. For example,\n*--flatten=abc.def* flattens *abc.def[].ghi* references to\n*abc.def.ghi*. A resource record containing *abc.def[]* with N elements\nwill expand to N records in the flattened output. This flag interacts\nwith other flags that are applied in this order: *--flatten*,\n*--sort-by*, *--filter*, *--limit*.",
                            args: {
                                name: "KEY",
                                description: "list",
                                suggestions: [],
                            },
                        },
                        {
                            name: "--folder",
                            description: "Folder ID.",
                            args: {
                                name: "FOLDER_ID",
                                description: "string",
                                suggestions: [],
                            },
                        },
                        {
                            name: "--format",
                            description: "Set the format for printing command output resources. The default is a\ncommand-specific human-friendly output format. The supported formats\nare: `config`, `csv`, `default`, `diff`, `disable`, `flattened`, `get`, `json`, `list`, `multi`, `none`, `object`, `table`, `text`, `value`, `yaml`. For more details run $ gcloud topic formats.",
                            args: {
                                name: "FORMAT",
                                description: "string",
                                suggestions: [],
                            },
                        },
                        {
                            name: "--help",
                            description: "Display detailed help.",
                        },
                        {
                            name: "--impersonate-service-account",
                            description: "For this gcloud invocation, all API requests will be made as the given service account instead of the currently selected account. This is done without needing to create, download, and activate a key for the account. In order to perform operations as the service account, your currently selected account must have an IAM role that includes the iam.serviceAccounts.getAccessToken permission for the service account. The roles/iam.serviceAccountTokenCreator role has this permission or you may create a custom role. Overrides the default *auth/impersonate_service_account* property value for this command invocation.",
                            args: {
                                name: "SERVICE_ACCOUNT_EMAIL",
                                description: "string",
                                suggestions: [],
                            },
                        },
                        {
                            name: "--limit",
                            description: "Maximum number of resources to list. The default is *unlimited*.\nThis flag interacts with other flags that are applied in this order:\n*--flatten*, *--sort-by*, *--filter*, *--limit*.",
                            args: {
                                name: "LIMIT",
                                description: "googlecloudsdk.calliope.arg_parsers:Parse",
                                suggestions: [],
                            },
                        },
                        {
                            name: "--log-http",
                            description: "Log all HTTP server requests and responses to stderr. Overrides the default *core/log_http* property value for this command invocation.",
                        },
                        {
                            name: "--organization",
                            description: "Organization ID.",
                            args: {
                                name: "ORGANIZATION_ID",
                                description: "string",
                                suggestions: [],
                            },
                        },
                        {
                            name: "--page-size",
                            description: "Some services group resource list output into pages. This flag specifies\nthe maximum number of resources per page. The default is determined by the\nservice if it supports paging, otherwise it is *unlimited* (no paging).\nPaging may be applied before or after *--filter* and *--limit* depending\non the service.",
                            args: {
                                name: "PAGE_SIZE",
                                description: "googlecloudsdk.calliope.arg_parsers:Parse",
                                suggestions: [],
                            },
                        },
                        {
                            name: "--quiet",
                            description: "Disable all interactive prompts when running gcloud commands. If input\nis required, defaults will be used, or an error will be raised.\nOverrides the default core/disable_prompts property value for this\ncommand invocation. This is equivalent to setting the environment\nvariable `CLOUDSDK_CORE_DISABLE_PROMPTS` to 1.",
                        },
                        {
                            name: "--show-unset",
                            description: "Show available constraints. For more information about constraints, see\nhttps://cloud.google.com/resource-manager/docs/organization-policy/understanding-constraints",
                        },
                        {
                            name: "--sort-by",
                            description: "Comma-separated list of resource field key names to sort by. The\ndefault order is ascending. Prefix a field with ``~'' for descending\norder on that field. This flag interacts with other flags that are applied\nin this order: *--flatten*, *--sort-by*, *--filter*, *--limit*.",
                            args: {
                                name: "FIELD",
                                description: "list",
                                suggestions: [],
                            },
                        },
                        {
                            name: "--trace-token",
                            description: "Token used to route traces of service requests for investigation of issues. Overrides the default *core/trace_token* property value for this command invocation.",
                            args: {
                                name: "TRACE_TOKEN",
                                description: "string",
                                suggestions: [],
                            },
                        },
                        {
                            name: "--uri",
                            description: "Print a list of resource URIs instead of the default output.",
                        },
                        {
                            name: "--user-output-enabled",
                            description: "Print user intended output to the console. Overrides the default *core/user_output_enabled* property value for this command invocation. Use *--no-user-output-enabled* to disable.",
                        },
                        {
                            name: "--verbosity",
                            description: "Override the default verbosity for this command. Overrides the default *core/verbosity* property value for this command invocation. _VERBOSITY_ must be one of: *debug*, *info*, *warning*, *error*, *critical*, *none*.",
                            args: {
                                name: "VERBOSITY",
                                description: "string",
                                suggestions: [
                                    "debug",
                                    "info",
                                    "warning",
                                    "error",
                                    "critical",
                                    "none",
                                ],
                            },
                        },
                    ],
<<<<<<< HEAD
                    args: [],
=======
>>>>>>> 8601a08... feat: add built files
                },
                {
                    name: "set-policy",
                    description: "Set Organization Policy.",
<<<<<<< HEAD
                    subcommands: [],
=======
>>>>>>> 8601a08... feat: add built files
                    options: [
                        {
                            name: "--account",
                            description: "Google Cloud Platform user account to use for invocation. Overrides the default *core/account* property value for this command invocation.",
                            args: {
                                name: "ACCOUNT",
                                description: "string",
                                suggestions: [],
                            },
                        },
                        {
                            name: "--billing-project",
                            description: "The Google Cloud Platform project that will be charged quota for operations performed in gcloud. If you need to operate on one project, but need quota against a different project, you can use this flag to specify the billing project. If both `billing/quota_project` and `--billing-project` are specified, `--billing-project` takes precedence. Run `$ gcloud config set --help` to see more information about `billing/quota_project`.",
                            args: {
                                name: "BILLING_PROJECT",
                                description: "string",
                                suggestions: [],
                            },
                        },
                        {
                            name: "--configuration",
                            description: "The configuration to use for this command invocation. For more\ninformation on how to use configurations, run:\n`gcloud topic configurations`.  You can also use the CLOUDSDK_ACTIVE_CONFIG_NAME environment\nvariable to set the equivalent of this flag for a terminal\nsession.",
                            args: {
                                name: "CONFIGURATION",
                                description: "string",
                                suggestions: [],
                            },
                        },
                        {
                            name: "--flags-file",
                            description: "A YAML or JSON file that specifies a *--flag*:*value* dictionary.\nUseful for specifying complex flag values with special characters\nthat work with any command interpreter. Additionally, each\n*--flags-file* arg is replaced by its constituent flags. See\n$ gcloud topic flags-file for more information.",
                            args: {
                                name: "YAML_FILE",
                                description: "string",
                                suggestions: [],
                            },
                        },
                        {
                            name: "--flatten",
                            description: "Flatten _name_[] output resource slices in _KEY_ into separate records\nfor each item in each slice. Multiple keys and slices may be specified.\nThis also flattens keys for *--format* and *--filter*. For example,\n*--flatten=abc.def* flattens *abc.def[].ghi* references to\n*abc.def.ghi*. A resource record containing *abc.def[]* with N elements\nwill expand to N records in the flattened output. This flag interacts\nwith other flags that are applied in this order: *--flatten*,\n*--sort-by*, *--filter*, *--limit*.",
                            args: {
                                name: "KEY",
                                description: "list",
                                suggestions: [],
                            },
                        },
                        {
                            name: "--folder",
                            description: "Folder ID.",
                            args: {
                                name: "FOLDER_ID",
                                description: "string",
                                suggestions: [],
                            },
                        },
                        {
                            name: "--format",
                            description: "Set the format for printing command output resources. The default is a\ncommand-specific human-friendly output format. The supported formats\nare: `config`, `csv`, `default`, `diff`, `disable`, `flattened`, `get`, `json`, `list`, `multi`, `none`, `object`, `table`, `text`, `value`, `yaml`. For more details run $ gcloud topic formats.",
                            args: {
                                name: "FORMAT",
                                description: "string",
                                suggestions: [],
                            },
                        },
                        {
                            name: "--help",
                            description: "Display detailed help.",
                        },
                        {
                            name: "--impersonate-service-account",
                            description: "For this gcloud invocation, all API requests will be made as the given service account instead of the currently selected account. This is done without needing to create, download, and activate a key for the account. In order to perform operations as the service account, your currently selected account must have an IAM role that includes the iam.serviceAccounts.getAccessToken permission for the service account. The roles/iam.serviceAccountTokenCreator role has this permission or you may create a custom role. Overrides the default *auth/impersonate_service_account* property value for this command invocation.",
                            args: {
                                name: "SERVICE_ACCOUNT_EMAIL",
                                description: "string",
                                suggestions: [],
                            },
                        },
                        {
                            name: "--log-http",
                            description: "Log all HTTP server requests and responses to stderr. Overrides the default *core/log_http* property value for this command invocation.",
                        },
                        {
                            name: "--organization",
                            description: "Organization ID.",
                            args: {
                                name: "ORGANIZATION_ID",
                                description: "string",
                                suggestions: [],
                            },
                        },
                        {
                            name: "--quiet",
                            description: "Disable all interactive prompts when running gcloud commands. If input\nis required, defaults will be used, or an error will be raised.\nOverrides the default core/disable_prompts property value for this\ncommand invocation. This is equivalent to setting the environment\nvariable `CLOUDSDK_CORE_DISABLE_PROMPTS` to 1.",
                        },
                        {
                            name: "--trace-token",
                            description: "Token used to route traces of service requests for investigation of issues. Overrides the default *core/trace_token* property value for this command invocation.",
                            args: {
                                name: "TRACE_TOKEN",
                                description: "string",
                                suggestions: [],
                            },
                        },
                        {
                            name: "--user-output-enabled",
                            description: "Print user intended output to the console. Overrides the default *core/user_output_enabled* property value for this command invocation. Use *--no-user-output-enabled* to disable.",
                        },
                        {
                            name: "--verbosity",
                            description: "Override the default verbosity for this command. Overrides the default *core/verbosity* property value for this command invocation. _VERBOSITY_ must be one of: *debug*, *info*, *warning*, *error*, *critical*, *none*.",
                            args: {
                                name: "VERBOSITY",
                                description: "string",
                                suggestions: [
                                    "debug",
                                    "info",
                                    "warning",
                                    "error",
                                    "critical",
                                    "none",
                                ],
                            },
                        },
                    ],
                    args: [
                        {
                            name: "POLICY_FILE",
                            description: "JSON or YAML file with the Organization Policy.",
                            variadic: false,
                        },
                    ],
                },
            ],
            options: [
                {
                    name: "--account",
                    description: "Google Cloud Platform user account to use for invocation. Overrides the default *core/account* property value for this command invocation.",
                    args: {
                        name: "ACCOUNT",
                        description: "string",
                        suggestions: [],
                    },
                },
                {
                    name: "--billing-project",
                    description: "The Google Cloud Platform project that will be charged quota for operations performed in gcloud. If you need to operate on one project, but need quota against a different project, you can use this flag to specify the billing project. If both `billing/quota_project` and `--billing-project` are specified, `--billing-project` takes precedence. Run `$ gcloud config set --help` to see more information about `billing/quota_project`.",
                    args: {
                        name: "BILLING_PROJECT",
                        description: "string",
                        suggestions: [],
                    },
                },
                {
                    name: "--configuration",
                    description: "The configuration to use for this command invocation. For more\ninformation on how to use configurations, run:\n`gcloud topic configurations`.  You can also use the CLOUDSDK_ACTIVE_CONFIG_NAME environment\nvariable to set the equivalent of this flag for a terminal\nsession.",
                    args: {
                        name: "CONFIGURATION",
                        description: "string",
                        suggestions: [],
                    },
                },
                {
                    name: "--flags-file",
                    description: "A YAML or JSON file that specifies a *--flag*:*value* dictionary.\nUseful for specifying complex flag values with special characters\nthat work with any command interpreter. Additionally, each\n*--flags-file* arg is replaced by its constituent flags. See\n$ gcloud topic flags-file for more information.",
                    args: {
                        name: "YAML_FILE",
                        description: "string",
                        suggestions: [],
                    },
                },
                {
                    name: "--flatten",
                    description: "Flatten _name_[] output resource slices in _KEY_ into separate records\nfor each item in each slice. Multiple keys and slices may be specified.\nThis also flattens keys for *--format* and *--filter*. For example,\n*--flatten=abc.def* flattens *abc.def[].ghi* references to\n*abc.def.ghi*. A resource record containing *abc.def[]* with N elements\nwill expand to N records in the flattened output. This flag interacts\nwith other flags that are applied in this order: *--flatten*,\n*--sort-by*, *--filter*, *--limit*.",
                    args: {
                        name: "KEY",
                        description: "list",
                        suggestions: [],
                    },
                },
                {
                    name: "--format",
                    description: "Set the format for printing command output resources. The default is a\ncommand-specific human-friendly output format. The supported formats\nare: `config`, `csv`, `default`, `diff`, `disable`, `flattened`, `get`, `json`, `list`, `multi`, `none`, `object`, `table`, `text`, `value`, `yaml`. For more details run $ gcloud topic formats.",
                    args: {
                        name: "FORMAT",
                        description: "string",
                        suggestions: [],
                    },
                },
                {
                    name: "--help",
                    description: "Display detailed help.",
                },
                {
                    name: "--impersonate-service-account",
                    description: "For this gcloud invocation, all API requests will be made as the given service account instead of the currently selected account. This is done without needing to create, download, and activate a key for the account. In order to perform operations as the service account, your currently selected account must have an IAM role that includes the iam.serviceAccounts.getAccessToken permission for the service account. The roles/iam.serviceAccountTokenCreator role has this permission or you may create a custom role. Overrides the default *auth/impersonate_service_account* property value for this command invocation.",
                    args: {
                        name: "SERVICE_ACCOUNT_EMAIL",
                        description: "string",
                        suggestions: [],
                    },
                },
                {
                    name: "--log-http",
                    description: "Log all HTTP server requests and responses to stderr. Overrides the default *core/log_http* property value for this command invocation.",
                },
                {
                    name: "--project",
                    description: "The Google Cloud Platform project ID to use for this invocation. If\nomitted, then the current project is assumed; the current project can\nbe listed using `gcloud config list --format='text(core.project)'`\nand can be set using `gcloud config set project PROJECTID`.\n+\n`--project` and its fallback `core/project` property play two roles\nin the invocation. It specifies the project of the resource to\noperate on. It also specifies the project for API enablement check,\nquota, and billing. To specify a different project for quota and\nbilling, use `--billing-project` or `billing/quota_project` property.",
                    args: {
                        name: "PROJECT_ID",
                        description: "string",
                        suggestions: [],
                    },
                },
                {
                    name: "--quiet",
                    description: "Disable all interactive prompts when running gcloud commands. If input\nis required, defaults will be used, or an error will be raised.\nOverrides the default core/disable_prompts property value for this\ncommand invocation. This is equivalent to setting the environment\nvariable `CLOUDSDK_CORE_DISABLE_PROMPTS` to 1.",
                },
                {
                    name: "--trace-token",
                    description: "Token used to route traces of service requests for investigation of issues. Overrides the default *core/trace_token* property value for this command invocation.",
                    args: {
                        name: "TRACE_TOKEN",
                        description: "string",
                        suggestions: [],
                    },
                },
                {
                    name: "--user-output-enabled",
                    description: "Print user intended output to the console. Overrides the default *core/user_output_enabled* property value for this command invocation. Use *--no-user-output-enabled* to disable.",
                },
                {
                    name: "--verbosity",
                    description: "Override the default verbosity for this command. Overrides the default *core/verbosity* property value for this command invocation. _VERBOSITY_ must be one of: *debug*, *info*, *warning*, *error*, *critical*, *none*.",
                    args: {
                        name: "VERBOSITY",
                        description: "string",
                        suggestions: [
                            "debug",
                            "info",
                            "warning",
                            "error",
                            "critical",
                            "none",
                        ],
                    },
                },
            ],
<<<<<<< HEAD
            args: [],
        },
    ],
    options: [
        {
            name: "--account",
            description: "Google Cloud Platform user account to use for invocation. Overrides the default *core/account* property value for this command invocation.",
            args: {
                name: "ACCOUNT",
                description: "string",
                suggestions: [],
            },
        },
        {
            name: "--billing-project",
            description: "The Google Cloud Platform project that will be charged quota for operations performed in gcloud. If you need to operate on one project, but need quota against a different project, you can use this flag to specify the billing project. If both `billing/quota_project` and `--billing-project` are specified, `--billing-project` takes precedence. Run `$ gcloud config set --help` to see more information about `billing/quota_project`.",
            args: {
                name: "BILLING_PROJECT",
                description: "string",
                suggestions: [],
            },
        },
        {
            name: "--configuration",
            description: "The configuration to use for this command invocation. For more\ninformation on how to use configurations, run:\n`gcloud topic configurations`.  You can also use the CLOUDSDK_ACTIVE_CONFIG_NAME environment\nvariable to set the equivalent of this flag for a terminal\nsession.",
            args: {
                name: "CONFIGURATION",
                description: "string",
                suggestions: [],
            },
<<<<<<< HEAD
=======
          ],
>>>>>>> 39a91f1... feat: apply new rule to files
        },
        {
            name: "--flags-file",
            description: "A YAML or JSON file that specifies a *--flag*:*value* dictionary.\nUseful for specifying complex flag values with special characters\nthat work with any command interpreter. Additionally, each\n*--flags-file* arg is replaced by its constituent flags. See\n$ gcloud topic flags-file for more information.",
            args: {
                name: "YAML_FILE",
                description: "string",
                suggestions: [],
            },
        },
        {
            name: "--flatten",
            description: "Flatten _name_[] output resource slices in _KEY_ into separate records\nfor each item in each slice. Multiple keys and slices may be specified.\nThis also flattens keys for *--format* and *--filter*. For example,\n*--flatten=abc.def* flattens *abc.def[].ghi* references to\n*abc.def.ghi*. A resource record containing *abc.def[]* with N elements\nwill expand to N records in the flattened output. This flag interacts\nwith other flags that are applied in this order: *--flatten*,\n*--sort-by*, *--filter*, *--limit*.",
            args: {
                name: "KEY",
                description: "list",
                suggestions: [],
            },
        },
        {
            name: "--format",
            description: "Set the format for printing command output resources. The default is a\ncommand-specific human-friendly output format. The supported formats\nare: `config`, `csv`, `default`, `diff`, `disable`, `flattened`, `get`, `json`, `list`, `multi`, `none`, `object`, `table`, `text`, `value`, `yaml`. For more details run $ gcloud topic formats.",
            args: {
                name: "FORMAT",
                description: "string",
                suggestions: [],
            },
        },
        {
            name: "--help",
            description: "Display detailed help.",
        },
        {
            name: "--impersonate-service-account",
            description: "For this gcloud invocation, all API requests will be made as the given service account instead of the currently selected account. This is done without needing to create, download, and activate a key for the account. In order to perform operations as the service account, your currently selected account must have an IAM role that includes the iam.serviceAccounts.getAccessToken permission for the service account. The roles/iam.serviceAccountTokenCreator role has this permission or you may create a custom role. Overrides the default *auth/impersonate_service_account* property value for this command invocation.",
            args: {
                name: "SERVICE_ACCOUNT_EMAIL",
                description: "string",
                suggestions: [],
            },
        },
        {
            name: "--log-http",
            description: "Log all HTTP server requests and responses to stderr. Overrides the default *core/log_http* property value for this command invocation.",
        },
        {
            name: "--project",
            description: "The Google Cloud Platform project ID to use for this invocation. If\nomitted, then the current project is assumed; the current project can\nbe listed using `gcloud config list --format='text(core.project)'`\nand can be set using `gcloud config set project PROJECTID`.\n+\n`--project` and its fallback `core/project` property play two roles\nin the invocation. It specifies the project of the resource to\noperate on. It also specifies the project for API enablement check,\nquota, and billing. To specify a different project for quota and\nbilling, use `--billing-project` or `billing/quota_project` property.",
            args: {
                name: "PROJECT_ID",
                description: "string",
                suggestions: [],
            },
        },
        {
            name: "--quiet",
            description: "Disable all interactive prompts when running gcloud commands. If input\nis required, defaults will be used, or an error will be raised.\nOverrides the default core/disable_prompts property value for this\ncommand invocation. This is equivalent to setting the environment\nvariable `CLOUDSDK_CORE_DISABLE_PROMPTS` to 1.",
        },
        {
            name: "--trace-token",
            description: "Token used to route traces of service requests for investigation of issues. Overrides the default *core/trace_token* property value for this command invocation.",
            args: {
                name: "TRACE_TOKEN",
                description: "string",
                suggestions: [],
            },
=======
>>>>>>> 8601a08... feat: add built files
        },
    ],
    options: [
        {
<<<<<<< HEAD
=======
            name: "--account",
            description: "Google Cloud Platform user account to use for invocation. Overrides the default *core/account* property value for this command invocation.",
            args: {
                name: "ACCOUNT",
                description: "string",
                suggestions: [],
            },
        },
        {
            name: "--billing-project",
            description: "The Google Cloud Platform project that will be charged quota for operations performed in gcloud. If you need to operate on one project, but need quota against a different project, you can use this flag to specify the billing project. If both `billing/quota_project` and `--billing-project` are specified, `--billing-project` takes precedence. Run `$ gcloud config set --help` to see more information about `billing/quota_project`.",
            args: {
                name: "BILLING_PROJECT",
                description: "string",
                suggestions: [],
            },
        },
        {
            name: "--configuration",
            description: "The configuration to use for this command invocation. For more\ninformation on how to use configurations, run:\n`gcloud topic configurations`.  You can also use the CLOUDSDK_ACTIVE_CONFIG_NAME environment\nvariable to set the equivalent of this flag for a terminal\nsession.",
            args: {
                name: "CONFIGURATION",
                description: "string",
                suggestions: [],
            },
        },
        {
            name: "--flags-file",
            description: "A YAML or JSON file that specifies a *--flag*:*value* dictionary.\nUseful for specifying complex flag values with special characters\nthat work with any command interpreter. Additionally, each\n*--flags-file* arg is replaced by its constituent flags. See\n$ gcloud topic flags-file for more information.",
            args: {
                name: "YAML_FILE",
                description: "string",
                suggestions: [],
            },
        },
        {
            name: "--flatten",
            description: "Flatten _name_[] output resource slices in _KEY_ into separate records\nfor each item in each slice. Multiple keys and slices may be specified.\nThis also flattens keys for *--format* and *--filter*. For example,\n*--flatten=abc.def* flattens *abc.def[].ghi* references to\n*abc.def.ghi*. A resource record containing *abc.def[]* with N elements\nwill expand to N records in the flattened output. This flag interacts\nwith other flags that are applied in this order: *--flatten*,\n*--sort-by*, *--filter*, *--limit*.",
            args: {
                name: "KEY",
                description: "list",
                suggestions: [],
            },
        },
        {
            name: "--format",
            description: "Set the format for printing command output resources. The default is a\ncommand-specific human-friendly output format. The supported formats\nare: `config`, `csv`, `default`, `diff`, `disable`, `flattened`, `get`, `json`, `list`, `multi`, `none`, `object`, `table`, `text`, `value`, `yaml`. For more details run $ gcloud topic formats.",
            args: {
                name: "FORMAT",
                description: "string",
                suggestions: [],
            },
        },
        {
            name: "--help",
            description: "Display detailed help.",
        },
        {
            name: "--impersonate-service-account",
            description: "For this gcloud invocation, all API requests will be made as the given service account instead of the currently selected account. This is done without needing to create, download, and activate a key for the account. In order to perform operations as the service account, your currently selected account must have an IAM role that includes the iam.serviceAccounts.getAccessToken permission for the service account. The roles/iam.serviceAccountTokenCreator role has this permission or you may create a custom role. Overrides the default *auth/impersonate_service_account* property value for this command invocation.",
            args: {
                name: "SERVICE_ACCOUNT_EMAIL",
                description: "string",
                suggestions: [],
            },
        },
        {
            name: "--log-http",
            description: "Log all HTTP server requests and responses to stderr. Overrides the default *core/log_http* property value for this command invocation.",
        },
        {
            name: "--project",
            description: "The Google Cloud Platform project ID to use for this invocation. If\nomitted, then the current project is assumed; the current project can\nbe listed using `gcloud config list --format='text(core.project)'`\nand can be set using `gcloud config set project PROJECTID`.\n+\n`--project` and its fallback `core/project` property play two roles\nin the invocation. It specifies the project of the resource to\noperate on. It also specifies the project for API enablement check,\nquota, and billing. To specify a different project for quota and\nbilling, use `--billing-project` or `billing/quota_project` property.",
            args: {
                name: "PROJECT_ID",
                description: "string",
                suggestions: [],
            },
        },
        {
            name: "--quiet",
            description: "Disable all interactive prompts when running gcloud commands. If input\nis required, defaults will be used, or an error will be raised.\nOverrides the default core/disable_prompts property value for this\ncommand invocation. This is equivalent to setting the environment\nvariable `CLOUDSDK_CORE_DISABLE_PROMPTS` to 1.",
        },
        {
            name: "--trace-token",
            description: "Token used to route traces of service requests for investigation of issues. Overrides the default *core/trace_token* property value for this command invocation.",
            args: {
                name: "TRACE_TOKEN",
                description: "string",
                suggestions: [],
            },
        },
        {
>>>>>>> 8601a08... feat: add built files
            name: "--user-output-enabled",
            description: "Print user intended output to the console. Overrides the default *core/user_output_enabled* property value for this command invocation. Use *--no-user-output-enabled* to disable.",
        },
        {
            name: "--verbosity",
            description: "Override the default verbosity for this command. Overrides the default *core/verbosity* property value for this command invocation. _VERBOSITY_ must be one of: *debug*, *info*, *warning*, *error*, *critical*, *none*.",
            args: {
                name: "VERBOSITY",
                description: "string",
                suggestions: ["debug", "info", "warning", "error", "critical", "none"],
            },
        },
<<<<<<< HEAD
<<<<<<< HEAD
    ],
    args: [],
=======
      ],
    },
  ],
  options: [
    {
      name: "--account",
      description:
        "Google Cloud Platform user account to use for invocation. Overrides the default *core/account* property value for this command invocation.",
      args: {
        name: "ACCOUNT",
        description: "string",
        suggestions: [],
      },
    },
    {
      name: "--billing-project",
      description:
        "The Google Cloud Platform project that will be charged quota for operations performed in gcloud. If you need to operate on one project, but need quota against a different project, you can use this flag to specify the billing project. If both `billing/quota_project` and `--billing-project` are specified, `--billing-project` takes precedence. Run `$ gcloud config set --help` to see more information about `billing/quota_project`.",
      args: {
        name: "BILLING_PROJECT",
        description: "string",
        suggestions: [],
      },
    },
    {
      name: "--configuration",
      description:
        "The configuration to use for this command invocation. For more\ninformation on how to use configurations, run:\n`gcloud topic configurations`.  You can also use the CLOUDSDK_ACTIVE_CONFIG_NAME environment\nvariable to set the equivalent of this flag for a terminal\nsession.",
      args: {
        name: "CONFIGURATION",
        description: "string",
        suggestions: [],
      },
    },
    {
      name: "--flags-file",
      description:
        "A YAML or JSON file that specifies a *--flag*:*value* dictionary.\nUseful for specifying complex flag values with special characters\nthat work with any command interpreter. Additionally, each\n*--flags-file* arg is replaced by its constituent flags. See\n$ gcloud topic flags-file for more information.",
      args: {
        name: "YAML_FILE",
        description: "string",
        suggestions: [],
      },
    },
    {
      name: "--flatten",
      description:
        "Flatten _name_[] output resource slices in _KEY_ into separate records\nfor each item in each slice. Multiple keys and slices may be specified.\nThis also flattens keys for *--format* and *--filter*. For example,\n*--flatten=abc.def* flattens *abc.def[].ghi* references to\n*abc.def.ghi*. A resource record containing *abc.def[]* with N elements\nwill expand to N records in the flattened output. This flag interacts\nwith other flags that are applied in this order: *--flatten*,\n*--sort-by*, *--filter*, *--limit*.",
      args: {
        name: "KEY",
        description: "list",
        suggestions: [],
      },
    },
    {
      name: "--format",
      description:
        "Set the format for printing command output resources. The default is a\ncommand-specific human-friendly output format. The supported formats\nare: `config`, `csv`, `default`, `diff`, `disable`, `flattened`, `get`, `json`, `list`, `multi`, `none`, `object`, `table`, `text`, `value`, `yaml`. For more details run $ gcloud topic formats.",
      args: {
        name: "FORMAT",
        description: "string",
        suggestions: [],
      },
    },
    {
      name: "--help",
      description: "Display detailed help.",
    },
    {
      name: "--impersonate-service-account",
      description:
        "For this gcloud invocation, all API requests will be made as the given service account instead of the currently selected account. This is done without needing to create, download, and activate a key for the account. In order to perform operations as the service account, your currently selected account must have an IAM role that includes the iam.serviceAccounts.getAccessToken permission for the service account. The roles/iam.serviceAccountTokenCreator role has this permission or you may create a custom role. Overrides the default *auth/impersonate_service_account* property value for this command invocation.",
      args: {
        name: "SERVICE_ACCOUNT_EMAIL",
        description: "string",
        suggestions: [],
      },
    },
    {
      name: "--log-http",
      description:
        "Log all HTTP server requests and responses to stderr. Overrides the default *core/log_http* property value for this command invocation.",
    },
    {
      name: "--project",
      description:
        "The Google Cloud Platform project ID to use for this invocation. If\nomitted, then the current project is assumed; the current project can\nbe listed using `gcloud config list --format='text(core.project)'`\nand can be set using `gcloud config set project PROJECTID`.\n+\n`--project` and its fallback `core/project` property play two roles\nin the invocation. It specifies the project of the resource to\noperate on. It also specifies the project for API enablement check,\nquota, and billing. To specify a different project for quota and\nbilling, use `--billing-project` or `billing/quota_project` property.",
      args: {
        name: "PROJECT_ID",
        description: "string",
        suggestions: [],
      },
    },
    {
      name: "--quiet",
      description:
        "Disable all interactive prompts when running gcloud commands. If input\nis required, defaults will be used, or an error will be raised.\nOverrides the default core/disable_prompts property value for this\ncommand invocation. This is equivalent to setting the environment\nvariable `CLOUDSDK_CORE_DISABLE_PROMPTS` to 1.",
    },
    {
      name: "--trace-token",
      description:
        "Token used to route traces of service requests for investigation of issues. Overrides the default *core/trace_token* property value for this command invocation.",
      args: {
        name: "TRACE_TOKEN",
        description: "string",
        suggestions: [],
      },
    },
    {
      name: "--user-output-enabled",
      description:
        "Print user intended output to the console. Overrides the default *core/user_output_enabled* property value for this command invocation. Use *--no-user-output-enabled* to disable.",
    },
    {
      name: "--verbosity",
      description:
        "Override the default verbosity for this command. Overrides the default *core/verbosity* property value for this command invocation. _VERBOSITY_ must be one of: *debug*, *info*, *warning*, *error*, *critical*, *none*.",
      args: {
        name: "VERBOSITY",
        description: "string",
        suggestions: ["debug", "info", "warning", "error", "critical", "none"],
      },
    },
  ],
>>>>>>> 39a91f1... feat: apply new rule to files
=======
    ],
>>>>>>> 8601a08... feat: add built files
};

