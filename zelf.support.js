"use strict";

/*;
	@module-license:
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
	@end-module-license

	@module-configuration:
		{
			"package": "zelf",
			"path": "zelf/zelf.js",
			"file": "zelf.js",
			"module": "zelf",
			"author": "Richeve S. Bebedor",
			"contributors": [
				"John Lenon Maghanoy <johnlenonmaghanoy@gmail.com>"
			],
			"eMail": "richeve.bebedor@gmail.com",
			"repository": "https://github.com/volkovasystems/zelf.git",
			"test": "zelf-test.js",
			"global": true
		}
	@end-module-configuration

	@module-documentation:
		Returns window for client, global for server and if nothing match, return itself.
	@end-module-documentation

	@include:
		{
			"asea": "asea"
		}
	@end-include
*/

var asea = require("asea");

var zelf = function zelf(self) {
	/*;
 	@meta-configuration:
 		{
 			"self:required": "object"
 		}
 	@end-meta-configuration
 */

	self = self || this;

	if (asea.server && (self === global || typeof self == "undefined" || self === null)) {
		return global;
	}

	if (asea.client && (self === window || typeof self == "undefined" || self === null)) {
		return window;
	}

	if (asea.server && typeof self == "undefined") {
		return global;
	}

	if (asea.client && typeof self == "undefined") {
		return window;
	}

	return self;
};

module.exports = zelf;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInplbGYuanMiXSwibmFtZXMiOlsiYXNlYSIsInJlcXVpcmUiLCJ6ZWxmIiwic2VsZiIsInNlcnZlciIsImdsb2JhbCIsImNsaWVudCIsIndpbmRvdyIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOztBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBdURBLElBQU1BLE9BQU9DLFFBQVMsTUFBVCxDQUFiOztBQUVBLElBQU1DLE9BQU8sU0FBU0EsSUFBVCxDQUFlQyxJQUFmLEVBQXFCO0FBQ2pDOzs7Ozs7OztBQVFBQSxRQUFPQSxRQUFRLElBQWY7O0FBRUEsS0FBSUgsS0FBS0ksTUFBTCxLQUFpQkQsU0FBU0UsTUFBVCxJQUFtQixPQUFPRixJQUFQLElBQWUsV0FBbEMsSUFBaURBLFNBQVMsSUFBM0UsQ0FBSixFQUF1RjtBQUN0RixTQUFPRSxNQUFQO0FBQ0E7O0FBRUQsS0FBSUwsS0FBS00sTUFBTCxLQUFpQkgsU0FBU0ksTUFBVCxJQUFtQixPQUFPSixJQUFQLElBQWUsV0FBbEMsSUFBaURBLFNBQVMsSUFBM0UsQ0FBSixFQUF1RjtBQUN0RixTQUFPSSxNQUFQO0FBQ0E7O0FBRUQsS0FBSVAsS0FBS0ksTUFBTCxJQUFlLE9BQU9ELElBQVAsSUFBZSxXQUFsQyxFQUErQztBQUM5QyxTQUFPRSxNQUFQO0FBQ0E7O0FBRUQsS0FBSUwsS0FBS00sTUFBTCxJQUFlLE9BQU9ILElBQVAsSUFBZSxXQUFsQyxFQUErQztBQUM5QyxTQUFPSSxNQUFQO0FBQ0E7O0FBRUQsUUFBT0osSUFBUDtBQUNBLENBNUJEOztBQThCQUssT0FBT0MsT0FBUCxHQUFpQlAsSUFBakIiLCJmaWxlIjoiemVsZi5qcyIsInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG4vKjtcblx0QG1vZHVsZS1saWNlbnNlOlxuXHRcdFRoZSBNSVQgTGljZW5zZSAoTUlUKVxuXHRcdEBtaXQtbGljZW5zZVxuXG5cdFx0Q29weXJpZ2h0IChAYykgMjAxNyBSaWNoZXZlIFNpb2RpbmEgQmViZWRvclxuXHRcdEBlbWFpbDogcmljaGV2ZS5iZWJlZG9yQGdtYWlsLmNvbVxuXG5cdFx0UGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxuXHRcdG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWxcblx0XHRpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzXG5cdFx0dG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbFxuXHRcdGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xuXHRcdGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG5cblx0XHRUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpbiBhbGxcblx0XHRjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuXG5cdFx0VEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuXHRcdElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuXHRcdEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxuXHRcdEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcblx0XHRMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxuXHRcdE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU4gVEhFXG5cdFx0U09GVFdBUkUuXG5cdEBlbmQtbW9kdWxlLWxpY2Vuc2VcblxuXHRAbW9kdWxlLWNvbmZpZ3VyYXRpb246XG5cdFx0e1xuXHRcdFx0XCJwYWNrYWdlXCI6IFwiemVsZlwiLFxuXHRcdFx0XCJwYXRoXCI6IFwiemVsZi96ZWxmLmpzXCIsXG5cdFx0XHRcImZpbGVcIjogXCJ6ZWxmLmpzXCIsXG5cdFx0XHRcIm1vZHVsZVwiOiBcInplbGZcIixcblx0XHRcdFwiYXV0aG9yXCI6IFwiUmljaGV2ZSBTLiBCZWJlZG9yXCIsXG5cdFx0XHRcImNvbnRyaWJ1dG9yc1wiOiBbXG5cdFx0XHRcdFwiSm9obiBMZW5vbiBNYWdoYW5veSA8am9obmxlbm9ubWFnaGFub3lAZ21haWwuY29tPlwiXG5cdFx0XHRdLFxuXHRcdFx0XCJlTWFpbFwiOiBcInJpY2hldmUuYmViZWRvckBnbWFpbC5jb21cIixcblx0XHRcdFwicmVwb3NpdG9yeVwiOiBcImh0dHBzOi8vZ2l0aHViLmNvbS92b2xrb3Zhc3lzdGVtcy96ZWxmLmdpdFwiLFxuXHRcdFx0XCJ0ZXN0XCI6IFwiemVsZi10ZXN0LmpzXCIsXG5cdFx0XHRcImdsb2JhbFwiOiB0cnVlXG5cdFx0fVxuXHRAZW5kLW1vZHVsZS1jb25maWd1cmF0aW9uXG5cblx0QG1vZHVsZS1kb2N1bWVudGF0aW9uOlxuXHRcdFJldHVybnMgd2luZG93IGZvciBjbGllbnQsIGdsb2JhbCBmb3Igc2VydmVyIGFuZCBpZiBub3RoaW5nIG1hdGNoLCByZXR1cm4gaXRzZWxmLlxuXHRAZW5kLW1vZHVsZS1kb2N1bWVudGF0aW9uXG5cblx0QGluY2x1ZGU6XG5cdFx0e1xuXHRcdFx0XCJhc2VhXCI6IFwiYXNlYVwiXG5cdFx0fVxuXHRAZW5kLWluY2x1ZGVcbiovXG5cbmNvbnN0IGFzZWEgPSByZXF1aXJlKCBcImFzZWFcIiApO1xuXG5jb25zdCB6ZWxmID0gZnVuY3Rpb24gemVsZiggc2VsZiApe1xuXHQvKjtcblx0XHRAbWV0YS1jb25maWd1cmF0aW9uOlxuXHRcdFx0e1xuXHRcdFx0XHRcInNlbGY6cmVxdWlyZWRcIjogXCJvYmplY3RcIlxuXHRcdFx0fVxuXHRcdEBlbmQtbWV0YS1jb25maWd1cmF0aW9uXG5cdCovXG5cblx0c2VsZiA9IHNlbGYgfHwgdGhpcztcblxuXHRpZiggYXNlYS5zZXJ2ZXIgJiYgKCBzZWxmID09PSBnbG9iYWwgfHwgdHlwZW9mIHNlbGYgPT0gXCJ1bmRlZmluZWRcIiB8fCBzZWxmID09PSBudWxsICkgKXtcblx0XHRyZXR1cm4gZ2xvYmFsO1xuXHR9XG5cblx0aWYoIGFzZWEuY2xpZW50ICYmICggc2VsZiA9PT0gd2luZG93IHx8IHR5cGVvZiBzZWxmID09IFwidW5kZWZpbmVkXCIgfHwgc2VsZiA9PT0gbnVsbCApICl7XG5cdFx0cmV0dXJuIHdpbmRvdztcblx0fVxuXG5cdGlmKCBhc2VhLnNlcnZlciAmJiB0eXBlb2Ygc2VsZiA9PSBcInVuZGVmaW5lZFwiICl7XG5cdFx0cmV0dXJuIGdsb2JhbDtcblx0fVxuXG5cdGlmKCBhc2VhLmNsaWVudCAmJiB0eXBlb2Ygc2VsZiA9PSBcInVuZGVmaW5lZFwiICl7XG5cdFx0cmV0dXJuIHdpbmRvdztcblx0fVxuXG5cdHJldHVybiBzZWxmO1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSB6ZWxmO1xuIl19
