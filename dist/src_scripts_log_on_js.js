/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkjitters"] = self["webpackChunkjitters"] || []).push([["src_scripts_log_on_js"],{

/***/ "./src/scripts/log_on.js":
/*!*******************************!*\
  !*** ./src/scripts/log_on.js ***!
  \*******************************/
/***/ (function() {

eval("var form = document.getElementsByClassName(\"logon-form\")[0];\nvar welcome = document.createElement(\"h3\");\nwelcome.innerHTML = \"Please set your daily caffeine limit:\";\nform.appendChild(welcome);\nvar max = dailyMax();\n\nfunction dailyMax() {\n  // Makes the slider to select daily mg\n  var mgSlider = document.createElement(\"div\");\n  mgSlider.classList.add(\"mgSlideContainer\"); // Makes the slider to determine mg\n\n  var slideValues = document.createElement(\"input\");\n  slideValues.classList.add(\"slider\");\n  slideValues.id = \"mgRange\";\n  slideValues.type = \"range\";\n  slideValues.min = \"20\";\n  slideValues.max = \"700\";\n  slideValues.value = \"200\";\n  mgSlider.appendChild(slideValues); //Makes the label to display current slider value in mg\n\n  var mgLabel = document.createElement(\"h3\");\n  mgLabel.id = \"mg-label\";\n  mgLabel.innerHTML = \"\".concat(slideValues.value, \" mg.\");\n  var finalValue = slideValues.value;\n\n  slideValues.oninput = function () {\n    mgLabel.innerHTML = \"\".concat(this.value, \" mg.\");\n    finalValue = slideValues.value;\n  };\n\n  mgSlider.appendChild(mgLabel);\n  form.appendChild(mgSlider); // Button to submit value\n\n  var setLimit = document.createElement(\"input\");\n  setLimit.value = \"Set you Daily Limit\";\n  setLimit.type = \"submit\";\n  form.appendChild(setLimit); // Draws the line with specified limit on click\n\n  var drawLine = setLimit.addEventListener(\"click\", function (event) {\n    // Checks to see if line is already drawn\n    var existingLine = document.querySelector(\"#line\");\n\n    if (existingLine) {\n      updateLine(finalValue);\n    } else {\n      setLine(finalValue);\n    }\n\n    var limitModal = document.getElementById(\"logonModal\");\n    var nextSpan = document.getElementById(\"closeLoginModal\");\n    limitModal.style.display = \"none\";\n  });\n  return finalValue;\n}\n\nfunction setLine(maxValue) {\n  var valueLabel = document.createElement(\"h4\");\n  valueLabel.innerHTML = \"Your Daily Max: \".concat(maxValue, \"Mg\");\n  valueLabel.classList.add(\"mgMax\");\n  valueLabel.dataset.mgValue = maxValue;\n  var line = document.createElement(\"hr\");\n  line.id = \"line\";\n  var location = document.querySelector(\"#limit-line\");\n  location.appendChild(line);\n  location.appendChild(valueLabel);\n}\n\nfunction updateLine(newMax) {\n  var oldLabel = document.getElementsByClassName(\"mgMax\")[0];\n  oldLabel.innerHTML = \"Your Daily Max: \".concat(newMax, \"Mg\");\n  var location = document.querySelector(\"#limit-line\");\n  oldLabel.dataset.mgValue = newMax;\n  location.appendChild(oldLabel);\n  var wave = document.getElementById(\"wave-div\");\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9qaXR0ZXJzLy4vc3JjL3NjcmlwdHMvbG9nX29uLmpzP2ZhNmYiXSwibmFtZXMiOlsiZm9ybSIsImRvY3VtZW50IiwiZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSIsIndlbGNvbWUiLCJjcmVhdGVFbGVtZW50IiwiaW5uZXJIVE1MIiwiYXBwZW5kQ2hpbGQiLCJtYXgiLCJkYWlseU1heCIsIm1nU2xpZGVyIiwiY2xhc3NMaXN0IiwiYWRkIiwic2xpZGVWYWx1ZXMiLCJpZCIsInR5cGUiLCJtaW4iLCJ2YWx1ZSIsIm1nTGFiZWwiLCJmaW5hbFZhbHVlIiwib25pbnB1dCIsInNldExpbWl0IiwiZHJhd0xpbmUiLCJhZGRFdmVudExpc3RlbmVyIiwiZXZlbnQiLCJleGlzdGluZ0xpbmUiLCJxdWVyeVNlbGVjdG9yIiwidXBkYXRlTGluZSIsInNldExpbmUiLCJsaW1pdE1vZGFsIiwiZ2V0RWxlbWVudEJ5SWQiLCJuZXh0U3BhbiIsInN0eWxlIiwiZGlzcGxheSIsIm1heFZhbHVlIiwidmFsdWVMYWJlbCIsImRhdGFzZXQiLCJtZ1ZhbHVlIiwibGluZSIsImxvY2F0aW9uIiwibmV3TWF4Iiwib2xkTGFiZWwiLCJ3YXZlIl0sIm1hcHBpbmdzIjoiQUFDQSxJQUFJQSxJQUFJLEdBQUdDLFFBQVEsQ0FBQ0Msc0JBQVQsQ0FBZ0MsWUFBaEMsRUFBOEMsQ0FBOUMsQ0FBWDtBQUVBLElBQUlDLE9BQU8sR0FBR0YsUUFBUSxDQUFDRyxhQUFULENBQXVCLElBQXZCLENBQWQ7QUFDQUQsT0FBTyxDQUFDRSxTQUFSLEdBQW9CLHVDQUFwQjtBQUNBTCxJQUFJLENBQUNNLFdBQUwsQ0FBaUJILE9BQWpCO0FBQ0EsSUFBSUksR0FBRyxHQUFHQyxRQUFRLEVBQWxCOztBQUVBLFNBQVNBLFFBQVQsR0FBbUI7QUFFbEI7QUFDQSxNQUFJQyxRQUFRLEdBQUdSLFFBQVEsQ0FBQ0csYUFBVCxDQUF1QixLQUF2QixDQUFmO0FBQ0FLLEVBQUFBLFFBQVEsQ0FBQ0MsU0FBVCxDQUFtQkMsR0FBbkIsQ0FBdUIsa0JBQXZCLEVBSmtCLENBTWxCOztBQUNBLE1BQUlDLFdBQVcsR0FBR1gsUUFBUSxDQUFDRyxhQUFULENBQXVCLE9BQXZCLENBQWxCO0FBQ0FRLEVBQUFBLFdBQVcsQ0FBQ0YsU0FBWixDQUFzQkMsR0FBdEIsQ0FBMEIsUUFBMUI7QUFDQUMsRUFBQUEsV0FBVyxDQUFDQyxFQUFaLEdBQWlCLFNBQWpCO0FBQ0FELEVBQUFBLFdBQVcsQ0FBQ0UsSUFBWixHQUFtQixPQUFuQjtBQUNBRixFQUFBQSxXQUFXLENBQUNHLEdBQVosR0FBa0IsSUFBbEI7QUFDQUgsRUFBQUEsV0FBVyxDQUFDTCxHQUFaLEdBQWtCLEtBQWxCO0FBQ0FLLEVBQUFBLFdBQVcsQ0FBQ0ksS0FBWixHQUFvQixLQUFwQjtBQUNBUCxFQUFBQSxRQUFRLENBQUNILFdBQVQsQ0FBcUJNLFdBQXJCLEVBZGtCLENBZ0JsQjs7QUFDQSxNQUFJSyxPQUFPLEdBQUdoQixRQUFRLENBQUNHLGFBQVQsQ0FBdUIsSUFBdkIsQ0FBZDtBQUNBYSxFQUFBQSxPQUFPLENBQUNKLEVBQVIsR0FBYSxVQUFiO0FBQ0FJLEVBQUFBLE9BQU8sQ0FBQ1osU0FBUixhQUF1Qk8sV0FBVyxDQUFDSSxLQUFuQztBQUNBLE1BQUlFLFVBQVUsR0FBR04sV0FBVyxDQUFDSSxLQUE3Qjs7QUFDQUosRUFBQUEsV0FBVyxDQUFDTyxPQUFaLEdBQXNCLFlBQVc7QUFDaENGLElBQUFBLE9BQU8sQ0FBQ1osU0FBUixhQUF1QixLQUFLVyxLQUE1QjtBQUNBRSxJQUFBQSxVQUFVLEdBQUdOLFdBQVcsQ0FBQ0ksS0FBekI7QUFDQSxHQUhEOztBQUlBUCxFQUFBQSxRQUFRLENBQUNILFdBQVQsQ0FBcUJXLE9BQXJCO0FBQ0FqQixFQUFBQSxJQUFJLENBQUNNLFdBQUwsQ0FBaUJHLFFBQWpCLEVBMUJrQixDQTRCbEI7O0FBQ0EsTUFBSVcsUUFBUSxHQUFHbkIsUUFBUSxDQUFDRyxhQUFULENBQXVCLE9BQXZCLENBQWY7QUFDQWdCLEVBQUFBLFFBQVEsQ0FBQ0osS0FBVCxHQUFpQixxQkFBakI7QUFDQUksRUFBQUEsUUFBUSxDQUFDTixJQUFULEdBQWdCLFFBQWhCO0FBQ0FkLEVBQUFBLElBQUksQ0FBQ00sV0FBTCxDQUFpQmMsUUFBakIsRUFoQ2tCLENBa0NsQjs7QUFDQSxNQUFJQyxRQUFRLEdBQUdELFFBQVEsQ0FBQ0UsZ0JBQVQsQ0FBMEIsT0FBMUIsRUFBbUMsVUFBQ0MsS0FBRCxFQUFXO0FBQzVEO0FBQ0EsUUFBSUMsWUFBWSxHQUFHdkIsUUFBUSxDQUFDd0IsYUFBVCxDQUF1QixPQUF2QixDQUFuQjs7QUFDQSxRQUFJRCxZQUFKLEVBQWlCO0FBQ2hCRSxNQUFBQSxVQUFVLENBQUNSLFVBQUQsQ0FBVjtBQUNBLEtBRkQsTUFFTztBQUNOUyxNQUFBQSxPQUFPLENBQUNULFVBQUQsQ0FBUDtBQUNBOztBQUNELFFBQUlVLFVBQVUsR0FBRzNCLFFBQVEsQ0FBQzRCLGNBQVQsQ0FBd0IsWUFBeEIsQ0FBakI7QUFDQSxRQUFJQyxRQUFRLEdBQUc3QixRQUFRLENBQUM0QixjQUFULENBQXdCLGlCQUF4QixDQUFmO0FBQ0FELElBQUFBLFVBQVUsQ0FBQ0csS0FBWCxDQUFpQkMsT0FBakIsR0FBMkIsTUFBM0I7QUFDQSxHQVhjLENBQWY7QUFhQSxTQUFPZCxVQUFQO0FBRUE7O0FBRUQsU0FBU1MsT0FBVCxDQUFpQk0sUUFBakIsRUFBMEI7QUFFekIsTUFBSUMsVUFBVSxHQUFHakMsUUFBUSxDQUFDRyxhQUFULENBQXVCLElBQXZCLENBQWpCO0FBQ0E4QixFQUFBQSxVQUFVLENBQUM3QixTQUFYLDZCQUEwQzRCLFFBQTFDO0FBQ0FDLEVBQUFBLFVBQVUsQ0FBQ3hCLFNBQVgsQ0FBcUJDLEdBQXJCLENBQXlCLE9BQXpCO0FBQ0F1QixFQUFBQSxVQUFVLENBQUNDLE9BQVgsQ0FBbUJDLE9BQW5CLEdBQTZCSCxRQUE3QjtBQUNBLE1BQUlJLElBQUksR0FBR3BDLFFBQVEsQ0FBQ0csYUFBVCxDQUF1QixJQUF2QixDQUFYO0FBQ0FpQyxFQUFBQSxJQUFJLENBQUN4QixFQUFMLEdBQVUsTUFBVjtBQUNBLE1BQUl5QixRQUFRLEdBQUdyQyxRQUFRLENBQUN3QixhQUFULENBQXVCLGFBQXZCLENBQWY7QUFDQWEsRUFBQUEsUUFBUSxDQUFDaEMsV0FBVCxDQUFxQitCLElBQXJCO0FBQ0FDLEVBQUFBLFFBQVEsQ0FBQ2hDLFdBQVQsQ0FBcUI0QixVQUFyQjtBQUVBOztBQUVELFNBQVNSLFVBQVQsQ0FBb0JhLE1BQXBCLEVBQTJCO0FBRTFCLE1BQUlDLFFBQVEsR0FBR3ZDLFFBQVEsQ0FBQ0Msc0JBQVQsQ0FBZ0MsT0FBaEMsRUFBeUMsQ0FBekMsQ0FBZjtBQUNBc0MsRUFBQUEsUUFBUSxDQUFDbkMsU0FBVCw2QkFBd0NrQyxNQUF4QztBQUNBLE1BQUlELFFBQVEsR0FBR3JDLFFBQVEsQ0FBQ3dCLGFBQVQsQ0FBdUIsYUFBdkIsQ0FBZjtBQUNBZSxFQUFBQSxRQUFRLENBQUNMLE9BQVQsQ0FBaUJDLE9BQWpCLEdBQTJCRyxNQUEzQjtBQUNBRCxFQUFBQSxRQUFRLENBQUNoQyxXQUFULENBQXFCa0MsUUFBckI7QUFFQSxNQUFJQyxJQUFJLEdBQUd4QyxRQUFRLENBQUM0QixjQUFULENBQXdCLFVBQXhCLENBQVg7QUFFQSIsInNvdXJjZXNDb250ZW50IjpbIlxubGV0IGZvcm0gPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwibG9nb24tZm9ybVwiKVswXTtcblxubGV0IHdlbGNvbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDNcIik7XG53ZWxjb21lLmlubmVySFRNTCA9IFwiUGxlYXNlIHNldCB5b3VyIGRhaWx5IGNhZmZlaW5lIGxpbWl0OlwiXG5mb3JtLmFwcGVuZENoaWxkKHdlbGNvbWUpO1xubGV0IG1heCA9IGRhaWx5TWF4KCk7XG5cbmZ1bmN0aW9uIGRhaWx5TWF4KCl7XG5cblx0Ly8gTWFrZXMgdGhlIHNsaWRlciB0byBzZWxlY3QgZGFpbHkgbWdcblx0bGV0IG1nU2xpZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcblx0bWdTbGlkZXIuY2xhc3NMaXN0LmFkZChcIm1nU2xpZGVDb250YWluZXJcIik7XG5cblx0Ly8gTWFrZXMgdGhlIHNsaWRlciB0byBkZXRlcm1pbmUgbWdcblx0bGV0IHNsaWRlVmFsdWVzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuXHRzbGlkZVZhbHVlcy5jbGFzc0xpc3QuYWRkKFwic2xpZGVyXCIpO1xuXHRzbGlkZVZhbHVlcy5pZCA9IFwibWdSYW5nZVwiO1xuXHRzbGlkZVZhbHVlcy50eXBlID0gXCJyYW5nZVwiO1xuXHRzbGlkZVZhbHVlcy5taW4gPSBcIjIwXCI7XG5cdHNsaWRlVmFsdWVzLm1heCA9IFwiNzAwXCI7XG5cdHNsaWRlVmFsdWVzLnZhbHVlID0gXCIyMDBcIjtcblx0bWdTbGlkZXIuYXBwZW5kQ2hpbGQoc2xpZGVWYWx1ZXMpO1xuXG5cdC8vTWFrZXMgdGhlIGxhYmVsIHRvIGRpc3BsYXkgY3VycmVudCBzbGlkZXIgdmFsdWUgaW4gbWdcblx0bGV0IG1nTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDNcIik7XG5cdG1nTGFiZWwuaWQgPSBcIm1nLWxhYmVsXCI7XG5cdG1nTGFiZWwuaW5uZXJIVE1MID0gYCR7c2xpZGVWYWx1ZXMudmFsdWV9IG1nLmA7XG5cdGxldCBmaW5hbFZhbHVlID0gc2xpZGVWYWx1ZXMudmFsdWVcblx0c2xpZGVWYWx1ZXMub25pbnB1dCA9IGZ1bmN0aW9uKCkge1xuXHRcdG1nTGFiZWwuaW5uZXJIVE1MID0gYCR7dGhpcy52YWx1ZX0gbWcuYDtcblx0XHRmaW5hbFZhbHVlID0gc2xpZGVWYWx1ZXMudmFsdWVcblx0fVxuXHRtZ1NsaWRlci5hcHBlbmRDaGlsZChtZ0xhYmVsKTtcblx0Zm9ybS5hcHBlbmRDaGlsZChtZ1NsaWRlcik7XG5cblx0Ly8gQnV0dG9uIHRvIHN1Ym1pdCB2YWx1ZVxuXHRsZXQgc2V0TGltaXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG5cdHNldExpbWl0LnZhbHVlID0gXCJTZXQgeW91IERhaWx5IExpbWl0XCI7XG5cdHNldExpbWl0LnR5cGUgPSBcInN1Ym1pdFwiO1xuXHRmb3JtLmFwcGVuZENoaWxkKHNldExpbWl0KTtcblxuXHQvLyBEcmF3cyB0aGUgbGluZSB3aXRoIHNwZWNpZmllZCBsaW1pdCBvbiBjbGlja1xuXHRsZXQgZHJhd0xpbmUgPSBzZXRMaW1pdC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGV2ZW50KSA9PiB7XG5cdFx0Ly8gQ2hlY2tzIHRvIHNlZSBpZiBsaW5lIGlzIGFscmVhZHkgZHJhd25cblx0XHRsZXQgZXhpc3RpbmdMaW5lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNsaW5lXCIpO1xuXHRcdGlmIChleGlzdGluZ0xpbmUpe1xuXHRcdFx0dXBkYXRlTGluZShmaW5hbFZhbHVlKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0c2V0TGluZShmaW5hbFZhbHVlKTtcblx0XHR9XG5cdFx0bGV0IGxpbWl0TW9kYWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImxvZ29uTW9kYWxcIik7XG5cdFx0bGV0IG5leHRTcGFuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjbG9zZUxvZ2luTW9kYWxcIik7XG5cdFx0bGltaXRNb2RhbC5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG5cdH0pXG5cdFxuXHRyZXR1cm4gZmluYWxWYWx1ZTtcblxufVxuXG5mdW5jdGlvbiBzZXRMaW5lKG1heFZhbHVlKXtcblxuXHRsZXQgdmFsdWVMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoNFwiKVxuXHR2YWx1ZUxhYmVsLmlubmVySFRNTCA9IGBZb3VyIERhaWx5IE1heDogJHttYXhWYWx1ZX1NZ2A7XG5cdHZhbHVlTGFiZWwuY2xhc3NMaXN0LmFkZChcIm1nTWF4XCIpXG5cdHZhbHVlTGFiZWwuZGF0YXNldC5tZ1ZhbHVlID0gbWF4VmFsdWVcblx0bGV0IGxpbmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaHJcIik7XG5cdGxpbmUuaWQgPSBcImxpbmVcIlxuXHRsZXQgbG9jYXRpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2xpbWl0LWxpbmVcIik7XG5cdGxvY2F0aW9uLmFwcGVuZENoaWxkKGxpbmUpO1xuXHRsb2NhdGlvbi5hcHBlbmRDaGlsZCh2YWx1ZUxhYmVsKTtcblxufVxuXG5mdW5jdGlvbiB1cGRhdGVMaW5lKG5ld01heCl7XG5cblx0bGV0IG9sZExhYmVsID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcIm1nTWF4XCIpWzBdO1xuXHRvbGRMYWJlbC5pbm5lckhUTUwgPSBgWW91ciBEYWlseSBNYXg6ICR7bmV3TWF4fU1nYDtcblx0bGV0IGxvY2F0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNsaW1pdC1saW5lXCIpO1xuXHRvbGRMYWJlbC5kYXRhc2V0Lm1nVmFsdWUgPSBuZXdNYXg7XG5cdGxvY2F0aW9uLmFwcGVuZENoaWxkKG9sZExhYmVsKTtcblxuXHRsZXQgd2F2ZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwid2F2ZS1kaXZcIik7XG5cdFxufSJdLCJmaWxlIjoiLi9zcmMvc2NyaXB0cy9sb2dfb24uanMuanMiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/scripts/log_on.js\n");

/***/ })

}]);