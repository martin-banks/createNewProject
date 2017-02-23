const FS = require('fs')
const MKDIRP = require('mkdirp')

const structure = {
	build: {},
	src: {
		scripts: {
			templates: {},
			functions: {},
			content: {},
			files: [ 'app.js', 'state.js', 'content.js' ]
		},
		styles: {
			mixins: {},
			files: [ 'app.sass' ]
		},
		files: [ 'preview.html' ]
	},
	images: {},
	icons: {},
	files: ['.babelrc', 'webpack.config', '.gitignore', 'worklog.md', ]

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
	`import {content} from './content`
].join('\n')

const stateJs = 'export const state = {}'
const contentJs = 'export const content = {}'


const makeDirectories = (parent, ancestor) => {
	 Object.keys(parent)
		.filter(dir => dir !== 'files')
		.forEach((dir,i,arr) => {
			let newDirToMake = !!ancestor ? `${ancestor}/${dir}` : dir
			MKDIRP( __dirname + `/_newProject/${newDirToMake}/`, err => {
				console.log(err ? err : `${newDirToMake} created`)
				return
			})	
			let childDirs = Object.keys(parent[dir])
				.filter(child => child !== 'files')
				
			if(!!childDirs.length) {
				childDirs.forEach( child => makeDirectories(parent[dir], dir))
				return
			} else {
				return
			}
		})
	return
}

makeDirectories(structure)

