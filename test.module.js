"use strict";

/*;
	@test-license:
		The MIT License (MIT)
		@mit-license

		Copyright (@c) 2017 Richeve Siodina Bebedor
		@email: richeve.bebedor@gmail.com

		Permission is hereby granted, free of charge, to any person obtaining a copy
		of this software and associated documentation files (the "Software"), to deal
		in the Software without restriction, including without limitation the rights
		to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
		copies of the Software, and to permit persons to whom the Software is
		furnished to do so, subject to the following conditions:

		The above copyright notice and this permission notice shall be included in all
		copies or substantial portions of the Software.

		THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
		IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
		FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
		AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
		LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
		OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
		SOFTWARE.
	@end-test-license

	@test-configuration:
		{
			"package": "zelf",
			"path": "zelf/test.module.js",
			"file": "test.module.js",
			"module": "test",
			"author": "Richeve S. Bebedor",
			"eMail": "richeve.bebedor@gmail.com",
			"contributors": [
				"John Lenon Maghanoy <johnlenonmaghanoy@gmail.com>",
				"Vinse Vinalon <vinsevinalon@gmail.com>"
			],
			"repository": "https://github.com/volkovasystems/zelf.git"
		}
	@end-test-configuration

	@test-documentation:

	@end-test-documentation

	@include:
		{
			"assert": "should",
			"zelf": "zelf"
		}
	@end-include
*/

const assert = require( "should" );

//: @server:
const zelf = require( "./zelf.js" );
//: @end-server

//: @client:
const zelf = require( "./zelf.support.js" );
//: @end-client

//: @bridge:
const path = require( "path" );
//: @end-bridge


//: @server:

describe( "zelf", ( ) => {


	describe( "`zelf( )`", ( ) => {
		it( "should return global", ( ) => {

			assert.deepEqual( zelf( ), global );

		} );
	} );


	describe( "`zelf( null )`", ( ) => {
		it( "should return global", ( ) => {

			assert.deepEqual( zelf( null ), global );

		} );
	} );


	describe( "`zelf( global )`", ( ) => {
		it( "should return global", ( ) => {

			assert.deepEqual( zelf( global ), global );

		} );
	} );

	describe( "`zelf( [ ] )`", ( ) => {
		it( "should return [ ]", ( ) => {

			assert.deepEqual( zelf( [ ] ), [ ] );

		} );
	} );

} );

//: @end-server


//: @client:

describe( "zelf", ( ) => {


	describe( "`zelf( )`", ( ) => {
		it( "should return undefined", ( ) => {
			console.log( zelf( ) );
			assert.equal( typeof zelf( ) == "undefined", true );

		} );
	} );


	describe( "`zelf( null )`", ( ) => {
		it( "should return undefined", ( ) => {

			assert.equal( typeof zelf( null ) == "undefined", true );

		} );
	} );


	describe( "`zelf( window )`", ( ) => {
		it( "should return window", ( ) => {
			
			assert.deepEqual( zelf( window ), window );

		} );
	} );


	describe( "`zelf( [ ] )`", ( ) => {
		it( "should return [ ]", ( ) => {

			assert.deepEqual( zelf( [ ] ), [ ] );

		} );
	} );

} );

//: @end-client


//: @bridge:

describe( "zelf", ( ) => {


	let directory = __dirname;
	let testBridge = path.resolve( directory, "bridge.html" );
	let bridgeURL = `file://${ testBridge }`;


	describe( "`zelf( )`", ( ) => {
		it( "should return window", ( ) => {

			let result = browser.url( bridgeURL ).execute( ( ) => zelf( ) );

			assert.equal( result.state, "success" );

		} );
	} );


	describe( "`zelf( null )`", ( ) => {
		it( "should return global", ( ) => {

			let result = browser.url( bridgeURL ).execute( ( ) => zelf( null ) );

			assert.equal( result.state, "success" );

		} );
	} );


	describe( "`zelf( this )`", ( ) => {
		it( "should return window", ( ) => {

			/* @note

				Do not change the zelf( this ) to zelf( window )
				because window is not available on these scope.
				Do not change the assert.equal( result.state, "success" )
				to assert.equal( result.value, window )
				because window is not available on these scope.

			*/

			let result = browser.url( bridgeURL ).execute( ( ) => zelf( this ) );

			assert.equal( result.state, "success" );

		} );
	} );


	describe( "`zelf( [ ] )`", ( ) => {
		it( "should return [ ]", ( ) => {

			let result = browser.url( bridgeURL ).execute( ( ) => zelf( [ ] ) );

			assert.deepEqual( result.value, [ ] );

		} );
	} );

} );

//: @end-bridge
