/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (function() { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

eval("var Modal = __webpack_require__(/*! ./scripts/modal */ \"./src/scripts/modal.js\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguanMuanMiLCJtYXBwaW5ncyI6IkFBQUEsSUFBSUEsS0FBSyxHQUFHQyxtQkFBTyxDQUFDLCtDQUFELENBQW5CIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vaml0dGVycy8uL3NyYy9pbmRleC5qcz9iNjM1Il0sInNvdXJjZXNDb250ZW50IjpbImxldCBNb2RhbCA9IHJlcXVpcmUoXCIuL3NjcmlwdHMvbW9kYWxcIikiXSwibmFtZXMiOlsiTW9kYWwiLCJyZXF1aXJlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/index.js\n");

/***/ }),

/***/ "./src/scripts/modal.js":
/*!******************************!*\
  !*** ./src/scripts/modal.js ***!
  \******************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

eval("function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, \"prototype\", { writable: false }); return Constructor; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nvar Wave = __webpack_require__(/*! ./waves.js */ \"./src/scripts/waves.js\");\n\nvar Modal = /*#__PURE__*/_createClass(function Modal() {\n  _classCallCheck(this, Modal);\n}); // Get the modal\n\n\nvar modal = document.getElementById(\"addDrinkModal\"); // Get the button that opens the modal\n\nvar btn = document.getElementById(\"addDrinkModalBtn\"); // Get the <span> element that closes the modal\n\nvar span = document.getElementsByClassName(\"close\")[0]; // When the user clicks the button, open the modal \n\nbtn.onclick = function () {\n  modal.style.display = \"block\"; // Test function to make sure the water level rises.\n  // let wave = new Wave();\n  // wave.raise();\n}; // When the user clicks on <span> (x), close the modal\n\n\nspan.onclick = function () {\n  modal.style.display = \"none\";\n}; // When the user clicks anywhere outside of the modal, close it\n\n\nwindow.onclick = function (event) {\n  if (event.target == modal) {\n    modal.style.display = \"none\";\n  }\n};\n\nmodule.exports = Modal;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2NyaXB0cy9tb2RhbC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQSxJQUFNQSxJQUFJLEdBQUdDLG1CQUFPLENBQUMsMENBQUQsQ0FBcEI7O0lBRU1DLEs7O0lBSU47OztBQUNBLElBQUlDLEtBQUssR0FBR0MsUUFBUSxDQUFDQyxjQUFULENBQXdCLGVBQXhCLENBQVosQyxDQUNBOztBQUNBLElBQUlDLEdBQUcsR0FBR0YsUUFBUSxDQUFDQyxjQUFULENBQXdCLGtCQUF4QixDQUFWLEMsQ0FFQTs7QUFDQSxJQUFJRSxJQUFJLEdBQUdILFFBQVEsQ0FBQ0ksc0JBQVQsQ0FBZ0MsT0FBaEMsRUFBeUMsQ0FBekMsQ0FBWCxDLENBRUE7O0FBQ0FGLEdBQUcsQ0FBQ0csT0FBSixHQUFjLFlBQVc7QUFDdkJOLEVBQUFBLEtBQUssQ0FBQ08sS0FBTixDQUFZQyxPQUFaLEdBQXNCLE9BQXRCLENBRHVCLENBRXZCO0FBQ0E7QUFDQTtBQUNELENBTEQsQyxDQU9BOzs7QUFDQUosSUFBSSxDQUFDRSxPQUFMLEdBQWUsWUFBVztBQUN4Qk4sRUFBQUEsS0FBSyxDQUFDTyxLQUFOLENBQVlDLE9BQVosR0FBc0IsTUFBdEI7QUFDRCxDQUZELEMsQ0FJQTs7O0FBQ0FDLE1BQU0sQ0FBQ0gsT0FBUCxHQUFpQixVQUFTSSxLQUFULEVBQWdCO0FBQy9CLE1BQUlBLEtBQUssQ0FBQ0MsTUFBTixJQUFnQlgsS0FBcEIsRUFBMkI7QUFDekJBLElBQUFBLEtBQUssQ0FBQ08sS0FBTixDQUFZQyxPQUFaLEdBQXNCLE1BQXRCO0FBQ0Q7QUFDRixDQUpEOztBQU1BSSxNQUFNLENBQUNDLE9BQVAsR0FBaUJkLEtBQWpCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vaml0dGVycy8uL3NyYy9zY3JpcHRzL21vZGFsLmpzP2EwZWEiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgV2F2ZSA9IHJlcXVpcmUoXCIuL3dhdmVzLmpzXCIpXG5cbmNsYXNzIE1vZGFsIHtcblx0XG59XG5cbi8vIEdldCB0aGUgbW9kYWxcbmxldCBtb2RhbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYWRkRHJpbmtNb2RhbFwiKTtcbi8vIEdldCB0aGUgYnV0dG9uIHRoYXQgb3BlbnMgdGhlIG1vZGFsXG5sZXQgYnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJhZGREcmlua01vZGFsQnRuXCIpO1xuXG4vLyBHZXQgdGhlIDxzcGFuPiBlbGVtZW50IHRoYXQgY2xvc2VzIHRoZSBtb2RhbFxubGV0IHNwYW4gPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwiY2xvc2VcIilbMF07XG5cbi8vIFdoZW4gdGhlIHVzZXIgY2xpY2tzIHRoZSBidXR0b24sIG9wZW4gdGhlIG1vZGFsIFxuYnRuLm9uY2xpY2sgPSBmdW5jdGlvbigpIHtcbiAgbW9kYWwuc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcbiAgLy8gVGVzdCBmdW5jdGlvbiB0byBtYWtlIHN1cmUgdGhlIHdhdGVyIGxldmVsIHJpc2VzLlxuICAvLyBsZXQgd2F2ZSA9IG5ldyBXYXZlKCk7XG4gIC8vIHdhdmUucmFpc2UoKTtcbn1cblxuLy8gV2hlbiB0aGUgdXNlciBjbGlja3Mgb24gPHNwYW4+ICh4KSwgY2xvc2UgdGhlIG1vZGFsXG5zcGFuLm9uY2xpY2sgPSBmdW5jdGlvbigpIHtcbiAgbW9kYWwuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xufVxuXG4vLyBXaGVuIHRoZSB1c2VyIGNsaWNrcyBhbnl3aGVyZSBvdXRzaWRlIG9mIHRoZSBtb2RhbCwgY2xvc2UgaXRcbndpbmRvdy5vbmNsaWNrID0gZnVuY3Rpb24oZXZlbnQpIHtcbiAgaWYgKGV2ZW50LnRhcmdldCA9PSBtb2RhbCkge1xuICAgIG1vZGFsLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IE1vZGFsOyJdLCJuYW1lcyI6WyJXYXZlIiwicmVxdWlyZSIsIk1vZGFsIiwibW9kYWwiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwiYnRuIiwic3BhbiIsImdldEVsZW1lbnRzQnlDbGFzc05hbWUiLCJvbmNsaWNrIiwic3R5bGUiLCJkaXNwbGF5Iiwid2luZG93IiwiZXZlbnQiLCJ0YXJnZXQiLCJtb2R1bGUiLCJleHBvcnRzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/scripts/modal.js\n");

/***/ }),

/***/ "./src/scripts/waves.js":
/*!******************************!*\
  !*** ./src/scripts/waves.js ***!
  \******************************/
/***/ (function(module) {

eval("function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, \"prototype\", { writable: false }); return Constructor; }\n\nvar Wave = /*#__PURE__*/function () {\n  function Wave() {\n    _classCallCheck(this, Wave);\n  }\n\n  _createClass(Wave, [{\n    key: \"raise\",\n    value: function raise() {\n      var waves = document.getElementsByClassName(\"waves\")[0];\n      waves.style.height = \"100%\";\n      waves.style.maxHeight = \"100%\";\n    }\n  }]);\n\n  return Wave;\n}();\n\nmodule.exports = Wave;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9qaXR0ZXJzLy4vc3JjL3NjcmlwdHMvd2F2ZXMuanM/MzM3ZiJdLCJuYW1lcyI6WyJXYXZlIiwid2F2ZXMiLCJkb2N1bWVudCIsImdldEVsZW1lbnRzQnlDbGFzc05hbWUiLCJzdHlsZSIsImhlaWdodCIsIm1heEhlaWdodCIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiI7Ozs7OztJQUFNQSxJOzs7Ozs7O1dBRUYsaUJBQVE7QUFDSixVQUFJQyxLQUFLLEdBQUdDLFFBQVEsQ0FBQ0Msc0JBQVQsQ0FBZ0MsT0FBaEMsRUFBeUMsQ0FBekMsQ0FBWjtBQUNBRixNQUFBQSxLQUFLLENBQUNHLEtBQU4sQ0FBWUMsTUFBWixHQUFxQixNQUFyQjtBQUNBSixNQUFBQSxLQUFLLENBQUNHLEtBQU4sQ0FBWUUsU0FBWixHQUF3QixNQUF4QjtBQUNIOzs7Ozs7QUFLTEMsTUFBTSxDQUFDQyxPQUFQLEdBQWlCUixJQUFqQiIsInNvdXJjZXNDb250ZW50IjpbImNsYXNzIFdhdmUge1xuXG4gICAgcmFpc2UoKSB7IFxuICAgICAgICBsZXQgd2F2ZXMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwid2F2ZXNcIilbMF07XG4gICAgICAgIHdhdmVzLnN0eWxlLmhlaWdodCA9IFwiMTAwJVwiXG4gICAgICAgIHdhdmVzLnN0eWxlLm1heEhlaWdodCA9IFwiMTAwJVwiXG4gICAgfVxufVxuXG5cblxubW9kdWxlLmV4cG9ydHMgPSBXYXZlOyJdLCJmaWxlIjoiLi9zcmMvc2NyaXB0cy93YXZlcy5qcy5qcyIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/scripts/waves.js\n");

/***/ }),

/***/ "./src/index.scss":
/*!************************!*\
  !*** ./src/index.scss ***!
  \************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguc2Nzcy5qcyIsIm1hcHBpbmdzIjoiO0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9qaXR0ZXJzLy4vc3JjL2luZGV4LnNjc3M/OTc0NSJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/index.scss\n");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval-source-map devtool is used.
/******/ 	__webpack_require__("./src/index.js");
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.scss");
/******/ 	
/******/ })()
;