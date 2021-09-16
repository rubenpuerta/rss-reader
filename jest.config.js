const tsconfig = require('./tsconfig.json');
const tsConfigAliases = require('tsconfig-paths-jest')(tsconfig);

let moduleNameMapper = {};
for (let path in tsConfigAliases) {
	moduleNameMapper[path] = tsConfigAliases[path].replace('<rootDir>', '<rootDir>/src');
}

module.exports = {
	globals: {
		'ts-jest': {
			tsConfig: './tsconfig.spec.json',
			diagnostics: true
		},
		NODE_ENV: 'test'
	},
	collectCoverageFrom: [
		'<rootDir>/src/app/**/*.ts',
		'!<rootDir>/src/app/**/index.ts',
		'!<rootDir>/src/app/**/*.module.ts'
	],
	coverageDirectory: 'coverage',
	coverageReporters: ['lcov', 'text-summary'],
	testPathIgnorePatterns: [
		'<rootDir>/coverage/',
		'<rootDir>/dist/',
		'<rootDir>/node_modules/',
		'<rootDir>/src/app/*.(js|scss)'
	],
	preset: 'jest-preset-angular',
	setupFilesAfterEnv: ['<rootDir>/setup-jest.ts'],
	transformIgnorePatterns: [
		'node_modules/(?!@ngrx|ngx-socket-io)' // Last any packages here that error
	],
	transform: {
		'^.+\\.(ts|js|html)$': 'ts-jest'
	},
	testMatch: ['<rootDir>/src/app/*.spec.ts', '<rootDir>/src/app/**/*.spec.ts'],
	moduleNameMapper
	/* 	moduleNameMapper: {
		'^@services/(.*)': ['<rootDir>/app/services/$1'],
		'^@services/utils/(.*)': ['<rootDir>/app/services/utils/$1'],
		'^@models/(.*)': ['<rootDir>/app/models/$1'],
		'^@constants/(.*)': ['<rootDir>/app/constants/$1'],
		'^@components/(.*)': ['<rootDir>/app/components/$1'],
		'^@store/(.*)': ['<rootDir>/app/store/$1'],
		'^@modules/(.*)': ['<rootDir>/app/modules/$1'],
		'^@environments/(.*)': ['<rootDir>/environments/$1']
	} */
};
