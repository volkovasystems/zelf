"use strict"; /*;
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
              			"eMail": "richeve.bebedor@gmail.com",
              			"contributors": [
              				"John Lenon Maghanoy <johnlenonmaghanoy@gmail.com>",
              				"Vinse Vinalon <vinsevinalon@gmail.com>"
              			],
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

	if (asea.SERVER && (self === global || typeof self == "undefined" || self === null)) {
		return global;
	}

	if (asea.CLIENT && (self === window || typeof self == "undefined" || self === null)) {
		return window;
	}

	if (asea.SERVER && typeof self == "undefined") {
		return global;
	}

	if (asea.CLIENT && typeof self == "undefined") {
		return window;
	}

	return self;
};

module.exports = zelf;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInplbGYuc3VwcG9ydC5qcyJdLCJuYW1lcyI6WyJhc2VhIiwicmVxdWlyZSIsInplbGYiLCJzZWxmIiwiU0VSVkVSIiwiZ2xvYmFsIiwiQ0xJRU5UIiwid2luZG93IiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6ImNBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBd0RBLElBQU1BLE9BQU9DLFFBQVMsTUFBVCxDQUFiOztBQUVBLElBQU1DLE9BQU8sU0FBU0EsSUFBVCxDQUFlQyxJQUFmLEVBQXFCO0FBQ2pDOzs7Ozs7OztBQVFBQSxRQUFPQSxRQUFRLElBQWY7O0FBRUEsS0FBSUgsS0FBS0ksTUFBTCxLQUFpQkQsU0FBU0UsTUFBVCxJQUFtQixPQUFPRixJQUFQLElBQWUsV0FBbEMsSUFBaURBLFNBQVMsSUFBM0UsQ0FBSixFQUF1RjtBQUN0RixTQUFPRSxNQUFQO0FBQ0E7O0FBRUQsS0FBSUwsS0FBS00sTUFBTCxLQUFpQkgsU0FBU0ksTUFBVCxJQUFtQixPQUFPSixJQUFQLElBQWUsV0FBbEMsSUFBaURBLFNBQVMsSUFBM0UsQ0FBSixFQUF1RjtBQUN0RixTQUFPSSxNQUFQO0FBQ0E7O0FBRUQsS0FBSVAsS0FBS0ksTUFBTCxJQUFlLE9BQU9ELElBQVAsSUFBZSxXQUFsQyxFQUErQztBQUM5QyxTQUFPRSxNQUFQO0FBQ0E7O0FBRUQsS0FBSUwsS0FBS00sTUFBTCxJQUFlLE9BQU9ILElBQVAsSUFBZSxXQUFsQyxFQUErQztBQUM5QyxTQUFPSSxNQUFQO0FBQ0E7O0FBRUQsUUFBT0osSUFBUDtBQUNBLENBNUJEOztBQThCQUssT0FBT0MsT0FBUCxHQUFpQlAsSUFBakIiLCJmaWxlIjoiemVsZi5zdXBwb3J0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyo7XHJcblx0QG1vZHVsZS1saWNlbnNlOlxyXG5cdFx0VGhlIE1JVCBMaWNlbnNlIChNSVQpXHJcblx0XHRAbWl0LWxpY2Vuc2VcclxuXHJcblx0XHRDb3B5cmlnaHQgKEBjKSAyMDE3IFJpY2hldmUgU2lvZGluYSBCZWJlZG9yXHJcblx0XHRAZW1haWw6IHJpY2hldmUuYmViZWRvckBnbWFpbC5jb21cclxuXHJcblx0XHRQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XHJcblx0XHRvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsXHJcblx0XHRpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzXHJcblx0XHR0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsXHJcblx0XHRjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcclxuXHRcdGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XHJcblxyXG5cdFx0VGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW4gYWxsXHJcblx0XHRjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxyXG5cclxuXHRcdFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1JcclxuXHRcdElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxyXG5cdFx0RklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXHJcblx0XHRBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXHJcblx0XHRMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxyXG5cdFx0T1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTiBUSEVcclxuXHRcdFNPRlRXQVJFLlxyXG5cdEBlbmQtbW9kdWxlLWxpY2Vuc2VcclxuXHJcblx0QG1vZHVsZS1jb25maWd1cmF0aW9uOlxyXG5cdFx0e1xyXG5cdFx0XHRcInBhY2thZ2VcIjogXCJ6ZWxmXCIsXHJcblx0XHRcdFwicGF0aFwiOiBcInplbGYvemVsZi5qc1wiLFxyXG5cdFx0XHRcImZpbGVcIjogXCJ6ZWxmLmpzXCIsXHJcblx0XHRcdFwibW9kdWxlXCI6IFwiemVsZlwiLFxyXG5cdFx0XHRcImF1dGhvclwiOiBcIlJpY2hldmUgUy4gQmViZWRvclwiLFxyXG5cdFx0XHRcImVNYWlsXCI6IFwicmljaGV2ZS5iZWJlZG9yQGdtYWlsLmNvbVwiLFxyXG5cdFx0XHRcImNvbnRyaWJ1dG9yc1wiOiBbXHJcblx0XHRcdFx0XCJKb2huIExlbm9uIE1hZ2hhbm95IDxqb2hubGVub25tYWdoYW5veUBnbWFpbC5jb20+XCIsXHJcblx0XHRcdFx0XCJWaW5zZSBWaW5hbG9uIDx2aW5zZXZpbmFsb25AZ21haWwuY29tPlwiXHJcblx0XHRcdF0sXHJcblx0XHRcdFwicmVwb3NpdG9yeVwiOiBcImh0dHBzOi8vZ2l0aHViLmNvbS92b2xrb3Zhc3lzdGVtcy96ZWxmLmdpdFwiLFxyXG5cdFx0XHRcInRlc3RcIjogXCJ6ZWxmLXRlc3QuanNcIixcclxuXHRcdFx0XCJnbG9iYWxcIjogdHJ1ZVxyXG5cdFx0fVxyXG5cdEBlbmQtbW9kdWxlLWNvbmZpZ3VyYXRpb25cclxuXHJcblx0QG1vZHVsZS1kb2N1bWVudGF0aW9uOlxyXG5cdFx0UmV0dXJucyB3aW5kb3cgZm9yIGNsaWVudCwgZ2xvYmFsIGZvciBzZXJ2ZXIgYW5kIGlmIG5vdGhpbmcgbWF0Y2gsIHJldHVybiBpdHNlbGYuXHJcblx0QGVuZC1tb2R1bGUtZG9jdW1lbnRhdGlvblxyXG5cclxuXHRAaW5jbHVkZTpcclxuXHRcdHtcclxuXHRcdFx0XCJhc2VhXCI6IFwiYXNlYVwiXHJcblx0XHR9XHJcblx0QGVuZC1pbmNsdWRlXHJcbiovXHJcblxyXG5jb25zdCBhc2VhID0gcmVxdWlyZSggXCJhc2VhXCIgKTtcclxuXHJcbmNvbnN0IHplbGYgPSBmdW5jdGlvbiB6ZWxmKCBzZWxmICl7XHJcblx0Lyo7XHJcblx0XHRAbWV0YS1jb25maWd1cmF0aW9uOlxyXG5cdFx0XHR7XHJcblx0XHRcdFx0XCJzZWxmOnJlcXVpcmVkXCI6IFwib2JqZWN0XCJcclxuXHRcdFx0fVxyXG5cdFx0QGVuZC1tZXRhLWNvbmZpZ3VyYXRpb25cclxuXHQqL1xyXG5cclxuXHRzZWxmID0gc2VsZiB8fCB0aGlzO1xyXG5cclxuXHRpZiggYXNlYS5TRVJWRVIgJiYgKCBzZWxmID09PSBnbG9iYWwgfHwgdHlwZW9mIHNlbGYgPT0gXCJ1bmRlZmluZWRcIiB8fCBzZWxmID09PSBudWxsICkgKXtcclxuXHRcdHJldHVybiBnbG9iYWw7XHJcblx0fVxyXG5cclxuXHRpZiggYXNlYS5DTElFTlQgJiYgKCBzZWxmID09PSB3aW5kb3cgfHwgdHlwZW9mIHNlbGYgPT0gXCJ1bmRlZmluZWRcIiB8fCBzZWxmID09PSBudWxsICkgKXtcclxuXHRcdHJldHVybiB3aW5kb3c7XHJcblx0fVxyXG5cclxuXHRpZiggYXNlYS5TRVJWRVIgJiYgdHlwZW9mIHNlbGYgPT0gXCJ1bmRlZmluZWRcIiApe1xyXG5cdFx0cmV0dXJuIGdsb2JhbDtcclxuXHR9XHJcblxyXG5cdGlmKCBhc2VhLkNMSUVOVCAmJiB0eXBlb2Ygc2VsZiA9PSBcInVuZGVmaW5lZFwiICl7XHJcblx0XHRyZXR1cm4gd2luZG93O1xyXG5cdH1cclxuXHJcblx0cmV0dXJuIHNlbGY7XHJcbn07XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IHplbGY7XHJcbiJdfQ==
//# sourceMappingURL=zelf.support.js.map
