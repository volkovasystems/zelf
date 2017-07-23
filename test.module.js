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

	describe( "`zelf( global )`", ( ) => {
		it( "should return global", ( ) => {

			assert.equal( zelf( global ), global );

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

	describe( "`zelf( window )`", ( ) => {
		it( "should return window", ( ) => {

			assert.equal( zelf( window ), window );

		} );
	} );

	describe( "`zelf( [ ] )`", ( ) => {
		it( "should return [ ]", ( ) => {

			assert.deepEqual( zelf( [ ] ), [ ] );

		} );
	} );

} );

//: @end-client
