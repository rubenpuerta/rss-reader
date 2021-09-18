const tsconfig = require('./tsconfig.json');
const tsConfigAliases = require('tsconfig-paths-jest')(tsconfig);
require('jest-preset-angular/ngcc-jest-processor');

let moduleNameMapper = {};
for (let path in tsConfigAliases) {
	moduleNameMapper[path] = tsConfigAliases[path].replace('<rootDir>', '<rootDir>/src');
}

module.exports = {
	globals: {
		'ts-jest': {
			tsconfig: './tsconfig.spec.json',
			diagnostics: true
		},
		NODE_ENV: 'test'
	},
	preset: 'jest-preset-angular',
	setupFilesAfterEnv: ['<rootDir>/setup-jest.ts'],
	collectCoverageFrom: [
		'<rootDir>/src/app/**/*.ts',
		'!<rootDir>/src/app/**/index.ts',
		'!<rootDir>/src/app/**/*.module.ts'
	],
	coverageDirectory: 'coverage',
	coverageReporters: ['lcov', 'text-summary'],
	transformIgnorePatterns: [
		'node_modules/(?!@ngrx|ngx-socket-io)' // Last any packages here that error
	],
	transform: {
		'^.+\\.(ts|js|html)$': 'ts-jest',
		'^.+\\.(ts|js|html)$': 'jest-preset-angular'
	},
	testPathIgnorePatterns: [
		'<rootDir>/coverage/',
		'<rootDir>/dist/',
		'<rootDir>/node_modules/',
		'<rootDir>/src/app/*.(js|scss)'
	],
	testMatch: ['<rootDir>/src/app/*.spec.ts', '<rootDir>/src/app/**/*.spec.ts'],
	moduleNameMapper
};
