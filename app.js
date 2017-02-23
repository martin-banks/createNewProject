const FS = require('fs')
const mkdirp = require('mkdirp')

const structure = {
	build: {},
	src: {
		scripts: {
			templates: {},
			functions: {},
			content: {},
			[ 'app.js', 'state.js', 'content.js' ]
		},
		styles: {
			mixins: {},
			[ 'app.sass' ]
		},
		[ 'preview.html' ]
	},
	images: {},
	icons: {},
	['.babelrc', 'webpack.config', '.gitignore', 'worklog.md', ]

}

const npmModules = {
	devDependancies: [
	],
	dependancies: [
	]
}

const appJs = [
	`"use strict"`,
	`import {state} from './state`,
	`import {content} from './content`,
	`import {state} from './state`
].join('\n')