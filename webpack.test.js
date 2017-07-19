"use strict";

const webpack = require( "webpack" );
const UglifyJsPlugin = webpack.optimize.UglifyJsPlugin;
const ModuleConcatenationPlugin = webpack.optimize.ModuleConcatenationPlugin;

module.exports = {
	"entry": "./test.support.js",
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
	"module": {
		"rules": [
			{
				"test": /\.support\.js$/,
				"loader": "source-map-loader",
				"enforce": "pre"
			}
		]
	},
	"output": {
		"library": "test",
		"libraryTarget": "umd",
		"filename": "test.deploy.js"
	},
	"plugins": [
		new ModuleConcatenationPlugin( ),

		new UglifyJsPlugin( {
			"compress": {
				"keep_fargs": true,
				"keep_fnames": true,
				"keep_infinity": true,
				"warnings": false,
				"passes": 3
			},
			"mangle": {
				"keep_fnames": true
			},
			"comments": false,
			"sourceMap": true
		} )
	],
	"devtool": "#source-map"
};
