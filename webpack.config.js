"use strict";

const webpack = require( "webpack" );
const UglifyJsPlugin = webpack.optimize.UglifyJsPlugin;

module.exports = {
	"entry": "./zelf.support.js",
	"resolve": {
		"descriptionFiles": [
			"bower.json",
			"package.json"
		],
		"modules": [
			"bower_components",
			"node_modules"
		],
		"mainFields": [
			"support",
			"browser",
			"module",
			"main"
		]
	},
	// "module": {
	// 	"rules": [
	// 		{
	// 			"enforce": "pre",
	// 			"test": /\.support\.js$/,
	// 			"loader": "source-map-loader"
	// 		}
	// 	]
	// },
	"output": {
		"library": "zelf",
		"libraryTarget": "umd",
		"filename": "zelf.deploy.js"
	},
	"plugins": [
		new UglifyJsPlugin( {
			"compress": {
				"keep_fargs": true,
				"keep_fnames": true,
				"warnings": false
			},
			"comments": false,
			"sourceMap": true,
			"mangle": false
		} )
	],
	"devtool": "#cheap-module-inline-source-map"
};
