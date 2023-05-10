/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\nObject(function webpackMissingModule() { var e = new Error(\"Cannot find module './style.css'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }());\n/* harmony import */ var _modules_app_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/app.js */ \"./src/modules/app.js\");\n\r\n\r\n\r\nconst task = document.querySelector('#new-task-input');\r\nconst addBtn = document.querySelector('#addBtn');\r\n\r\n// RENDER\r\nwindow.addEventListener('DOMContentLoaded', () => {\r\n  const tasks = JSON.parse(localStorage.getItem('tasks')) || [];\r\n  (0,_modules_app_js__WEBPACK_IMPORTED_MODULE_1__.render)(tasks);\r\n});\r\n\r\n// ADD\r\naddBtn.addEventListener('click', () => {\r\n  const tasks = JSON.parse(localStorage.getItem('tasks')) || [];\r\n  if (task.value) {\r\n    (0,_modules_app_js__WEBPACK_IMPORTED_MODULE_1__.add)(tasks, task.value);\r\n    (0,_modules_app_js__WEBPACK_IMPORTED_MODULE_1__.render)(tasks);\r\n  }\r\n  task.value = '';\r\n});\r\n\r\n// REMOVE AND COMPLETED\r\ndocument.addEventListener('click', (event) => {\r\n  const tasks = JSON.parse(localStorage.getItem('tasks')) || [];\r\n\r\n  // REMOVE\r\n  if (event.target && event.target.matches('.removeBtn')) {\r\n    const removeBtns = document.querySelectorAll('.removeBtn');\r\n    const index = Array.prototype.indexOf.call(removeBtns, event.target);\r\n    (0,_modules_app_js__WEBPACK_IMPORTED_MODULE_1__.remove)(tasks, index);\r\n    (0,_modules_app_js__WEBPACK_IMPORTED_MODULE_1__.render)(tasks);\r\n  }\r\n  // COMPLETED\r\n  if (event.target && event.target.matches('.checkBox')) {\r\n    const checkBoxes = document.querySelectorAll('.checkBox');\r\n    const index = Array.prototype.indexOf.call(checkBoxes, event.target);\r\n    (0,_modules_app_js__WEBPACK_IMPORTED_MODULE_1__.complete)(tasks, index);\r\n    (0,_modules_app_js__WEBPACK_IMPORTED_MODULE_1__.render)(tasks);\r\n  }\r\n  // EDIT\r\n  if (event.target && event.target.matches('.taskText')) {\r\n    const saveBtn = event.target.parentElement.querySelector('.saveBtn');\r\n    saveBtn.classList.remove('hidden');\r\n  }\r\n  if (event.target && event.target.matches('.saveBtn')) {\r\n    const saveBtns = document.querySelectorAll('.saveBtn');\r\n    const newTasks = document.querySelectorAll('.taskText');\r\n    const index = Array.prototype.indexOf.call(saveBtns, event.target);\r\n    const newTask = newTasks[index].value;\r\n    (0,_modules_app_js__WEBPACK_IMPORTED_MODULE_1__.edit)(tasks, index, newTask);\r\n\r\n    const saveBtn = event.target.parentElement.querySelector('.saveBtn');\r\n    saveBtn.classList.add('hidden');\r\n  }\r\n});\r\n\r\n// CLEAR ALL COMPLETED\r\nconst clearCompletedBtn = document.querySelector('#clear-completed');\r\nclearCompletedBtn.addEventListener('click', () => {\r\n  const tasks = JSON.parse(localStorage.getItem('tasks')) || [];\r\n  (0,_modules_app_js__WEBPACK_IMPORTED_MODULE_1__.clearCompleted)(tasks);\r\n  (0,_modules_app_js__WEBPACK_IMPORTED_MODULE_1__.render)(tasks);\r\n});\r\n\n\n//# sourceURL=webpack://to-do-list/./src/index.js?");

/***/ }),

/***/ "./src/modules/app.js":
/*!****************************!*\
  !*** ./src/modules/app.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"add\": () => (/* binding */ add),\n/* harmony export */   \"clearCompleted\": () => (/* binding */ clearCompleted),\n/* harmony export */   \"complete\": () => (/* binding */ complete),\n/* harmony export */   \"edit\": () => (/* binding */ edit),\n/* harmony export */   \"remove\": () => (/* binding */ remove),\n/* harmony export */   \"render\": () => (/* binding */ render)\n/* harmony export */ });\n// RENDER\r\nfunction render(tasks) {\r\n  const todoListContainer = document.querySelector('#todo-list');\r\n  todoListContainer.innerHTML = '';\r\n  for (let i = 0; i < tasks.length; i += 1) {\r\n    let checked = '';\r\n    if (tasks[i].completed) checked = 'checked';\r\n    const html = `\r\n      <div class=\"taskContainer\">\r\n        <input type=\"checkbox\" class=\"checkBox\" ${checked}>\r\n        <input class=\"taskText\" value=\"${tasks[i].description}\"></input>\r\n        <button class=\"saveBtn hidden\" type=\"button\">&#x1F4BE;</button>\r\n        <button class=\"removeBtn\" type=\"button\">&#x1F5D1;</button>       \r\n      </div>\r\n    `;\r\n    todoListContainer.innerHTML += html;\r\n  }\r\n}\r\n\r\n// ADD\r\nfunction add(tasks, task) {\r\n  tasks.push({ description: task, completed: false, index: tasks.length + 1 });\r\n  for (let i = 0; i < tasks.length; i += 1) {\r\n    tasks[i].index = i + 1;\r\n  }\r\n  localStorage.setItem('tasks', JSON.stringify(tasks));\r\n}\r\n\r\n// REMOVE\r\nfunction remove(tasks, index) {\r\n  tasks.splice(index, 1);\r\n  for (let i = 0; i < tasks.length; i += 1) {\r\n    tasks[i].index = i + 1;\r\n  }\r\n  localStorage.setItem('tasks', JSON.stringify(tasks));\r\n}\r\n\r\n// COMPLETED\r\nfunction complete(tasks, index) {\r\n  if (tasks[index].completed) tasks[index].completed = false;\r\n  else tasks[index].completed = true;\r\n  localStorage.setItem('tasks', JSON.stringify(tasks));\r\n}\r\n\r\n// EDIT\r\nfunction edit(tasks, index, newTask) {\r\n  tasks[index].description = newTask;\r\n  localStorage.setItem('tasks', JSON.stringify(tasks));\r\n}\r\n\r\n// CLEAR ALL COMPLETED\r\nfunction clearCompleted(tasks) {\r\n  for (let i = 0; i < tasks.length; i += 1) {\r\n    if (tasks[i].completed) {\r\n      tasks.splice(i, 1);\r\n      i -= 1;\r\n    }\r\n  }\r\n  for (let i = 0; i < tasks.length; i += 1) {\r\n    tasks[i].index = i + 1;\r\n  }\r\n  localStorage.setItem('tasks', JSON.stringify(tasks));\r\n}\r\n\n\n//# sourceURL=webpack://to-do-list/./src/modules/app.js?");

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
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;