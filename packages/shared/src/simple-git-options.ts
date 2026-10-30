export const SIMPLE_GIT_UNSAFE_OPTION_FLAGS = [
	"allowUnsafeAlias",
	"allowUnsafeAskPass",
	"allowUnsafeConfigEnvCount",
	"allowUnsafeConfigPaths",
	"allowUnsafeCredentialHelper",
	"allowUnsafeCustomBinary",
	"allowUnsafeDiffExternal",
	"allowUnsafeDiffTextConv",
	"allowUnsafeEditor",
	"allowUnsafeExec",
	"allowUnsafeFilter",
	"allowUnsafeFsMonitor",
	"allowUnsafeGitProxy",
	"allowUnsafeGpgProgram",
	"allowUnsafeHooksPath",
	"allowUnsafeMergeDriver",
	"allowUnsafePack",
	"allowUnsafePager",
	"allowUnsafeProtocolOverride",
	"allowUnsafeSshCommand",
	"allowUnsafeTemplateDir",
] as const;

export type SimpleGitUnsafeOptionFlag =
	(typeof SIMPLE_GIT_UNSAFE_OPTION_FLAGS)[number];

// simple-git 4 strips ambient `GIT_*` environment variables unless each name is
// listed in `allowEnvironment`. A local Git client expects the user's Git
// environment, so permit the variables the app forwards.
export const USER_GIT_ENV_ALLOWED_VARIABLES = [
	"EDITOR",
	"GIT_ASKPASS",
	"GIT_CONFIG",
	"GIT_CONFIG_COUNT",
	"GIT_CONFIG_GLOBAL",
	"GIT_CONFIG_SYSTEM",
	"GIT_EDITOR",
	"GIT_EXEC_PATH",
	"GIT_EXTERNAL_DIFF",
	"GIT_PAGER",
	"GIT_PROXY_COMMAND",
	"GIT_SEQUENCE_EDITOR",
	"GIT_SSH",
	"GIT_SSH_COMMAND",
	"GIT_TEMPLATE_DIR",
	"PAGER",
	"PREFIX",
	"SSH_ASKPASS",
] as const;

export const USER_GIT_ENV_SIMPLE_GIT_OPTIONS: {
	unsafe: Record<SimpleGitUnsafeOptionFlag, true>;
	allowEnvironment: readonly string[];
} = {
	unsafe: Object.fromEntries(
		SIMPLE_GIT_UNSAFE_OPTION_FLAGS.map((flag) => [flag, true]),
	) as Record<SimpleGitUnsafeOptionFlag, true>,
	allowEnvironment: USER_GIT_ENV_ALLOWED_VARIABLES,
};
