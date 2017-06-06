const assert = require( "assert" );
const zelf = require( "./zelf.js" );

assert.equal( zelf( 123 ), 123, "should have value 123" );

assert.deepEqual( zelf( { "name": "simple" } ), { "name": "simple" }, "should be equal" );

assert.deepEqual( zelf( [ ] ), [ ], "should have empty array" );

assert.deepEqual( zelf( [ { "name": "simple" } ] ), [ { "name": "simple" } ], "should be equal" );

let test = function test( ){ };
assert.equal( zelf( test ), test, "should be equal" );

console.log( "ok" );
