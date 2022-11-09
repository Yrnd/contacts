(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){

},{}],2:[function(require,module,exports){
"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
var fs = _interopRequireWildcard(require("fs"));
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
var idIncrement = 0;
var contact = {
  "id": 0,
  "name": " ",
  "phone": " ",
  "isElected": false
};
var addButton = document.querySelector('#add_button');
//Данные контакта
var inputName = document.querySelector('#name');
var phone = document.querySelector('#phone');
var isElected = document.querySelector('#elected');

//Обработка ивентов формы добавления
isElected.addEventListener("change", function () {
  contact[isElected.value] = isElected.checked;
});
addButton.addEventListener("click", function () {
  if (inputName.value !== "" && phone.value !== "") {
    idIncrement++;
    contact.id = idIncrement;
    contact.name = inputName.value;
    contact.phone = phone.value;
    var json = JSON.stringify(contact);
    console.log(json);
  } else {
    var error = document.createElement('div');
    error.className = "alert";
    error.innerHTML = "Вы не ввели все данные ! Повторите попытку";
    document.querySelector(".wrapper").before(error);
    sleep(700).then(function () {
      window.location.reload();
    });
  }
});
function sleep(ms) {
  return new Promise(function (resolve) {
    return setTimeout(resolve, ms);
  });
}
function loadContacts() {
  reader.readFile("resources/txt/contactList.txt", 'utf8', function (err, data) {
    if (err) throw err;
    console.log(data);
  });
}

},{"fs":1}]},{},[2])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL0FwcERhdGEvUm9hbWluZy9ucG0vbm9kZV9tb2R1bGVzL2Jyb3dzZXJpZnkvbm9kZV9tb2R1bGVzL2Jyb3dzZXItcGFjay9fcHJlbHVkZS5qcyIsIi4uLy4uLy4uL0FwcERhdGEvUm9hbWluZy9ucG0vbm9kZV9tb2R1bGVzL2Jyb3dzZXJpZnkvbGliL19lbXB0eS5qcyIsImpzL3NjcmlwdC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQ0FBOzs7OztBQ0NBO0FBQXlCO0FBQUE7QUFEekIsSUFBSSxXQUFXLEdBQUcsQ0FBQztBQUluQixJQUFJLE9BQU8sR0FBRztFQUNWLElBQUksRUFBRSxDQUFDO0VBQ1AsTUFBTSxFQUFFLEdBQUc7RUFDWCxPQUFPLEVBQUUsR0FBRztFQUNaLFdBQVcsRUFBRTtBQUNqQixDQUFDO0FBR0QsSUFBTSxTQUFTLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxhQUFhLENBQUM7QUFDdkQ7QUFDQSxJQUFNLFNBQVMsR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLE9BQU8sQ0FBQztBQUNqRCxJQUFNLEtBQUssR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLFFBQVEsQ0FBQztBQUM5QyxJQUFNLFNBQVMsR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLFVBQVUsQ0FBQzs7QUFFcEQ7QUFDQSxTQUFTLENBQUMsZ0JBQWdCLENBQUMsUUFBUSxFQUFFLFlBQVc7RUFDNUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsR0FBRyxTQUFTLENBQUMsT0FBTztBQUNoRCxDQUFDLENBQUM7QUFDRixTQUFTLENBQUMsZ0JBQWdCLENBQUMsT0FBTyxFQUFDLFlBQVc7RUFDMUMsSUFBSSxTQUFTLENBQUMsS0FBSyxLQUFLLEVBQUUsSUFBSSxLQUFLLENBQUMsS0FBSyxLQUFLLEVBQUUsRUFDNUM7SUFDSSxXQUFXLEVBQUU7SUFDYixPQUFPLENBQUMsRUFBRSxHQUFHLFdBQVc7SUFDeEIsT0FBTyxDQUFDLElBQUksR0FBRyxTQUFTLENBQUMsS0FBSztJQUM5QixPQUFPLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQyxLQUFLO0lBQzNCLElBQUksSUFBSSxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsT0FBTyxDQUFDO0lBQ2xDLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDO0VBQ3JCLENBQUMsTUFDRDtJQUNBLElBQUksS0FBSyxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDO0lBQ3pDLEtBQUssQ0FBQyxTQUFTLEdBQUcsT0FBTztJQUN6QixLQUFLLENBQUMsU0FBUyxHQUFHLDRDQUE0QztJQUM5RCxRQUFRLENBQUMsYUFBYSxDQUFDLFVBQVUsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUM7SUFDaEQsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxZQUFNO01BQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxNQUFNLEVBQUU7SUFBQyxDQUFDLENBQUM7RUFDdEQ7QUFDQSxDQUFDLENBQ0o7QUFFRCxTQUFTLEtBQUssQ0FBQyxFQUFFLEVBQUU7RUFDZixPQUFPLElBQUksT0FBTyxDQUFDLFVBQUEsT0FBTztJQUFBLE9BQUksVUFBVSxDQUFDLE9BQU8sRUFBRSxFQUFFLENBQUM7RUFBQSxFQUFDO0FBQzFEO0FBRUEsU0FBUyxZQUFZLEdBQUc7RUFDcEIsTUFBTSxDQUFDLFFBQVEsQ0FBQywrQkFBK0IsRUFBRSxNQUFNLEVBQUUsVUFBQyxHQUFHLEVBQUUsSUFBSSxFQUFJO0lBQ25FLElBQUcsR0FBRyxFQUFFLE1BQU0sR0FBRztJQUNqQixPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQztFQUNyQixDQUFDLENBQUM7QUFDTiIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uKCl7ZnVuY3Rpb24gcihlLG4sdCl7ZnVuY3Rpb24gbyhpLGYpe2lmKCFuW2ldKXtpZighZVtpXSl7dmFyIGM9XCJmdW5jdGlvblwiPT10eXBlb2YgcmVxdWlyZSYmcmVxdWlyZTtpZighZiYmYylyZXR1cm4gYyhpLCEwKTtpZih1KXJldHVybiB1KGksITApO3ZhciBhPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIraStcIidcIik7dGhyb3cgYS5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGF9dmFyIHA9bltpXT17ZXhwb3J0czp7fX07ZVtpXVswXS5jYWxsKHAuZXhwb3J0cyxmdW5jdGlvbihyKXt2YXIgbj1lW2ldWzFdW3JdO3JldHVybiBvKG58fHIpfSxwLHAuZXhwb3J0cyxyLGUsbix0KX1yZXR1cm4gbltpXS5leHBvcnRzfWZvcih2YXIgdT1cImZ1bmN0aW9uXCI9PXR5cGVvZiByZXF1aXJlJiZyZXF1aXJlLGk9MDtpPHQubGVuZ3RoO2krKylvKHRbaV0pO3JldHVybiBvfXJldHVybiByfSkoKSIsIiIsImxldCBpZEluY3JlbWVudCA9IDA7XHJcbmltcG9ydCAqIGFzIGZzIGZyb20gJ2ZzJztcclxuXHJcblxyXG5sZXQgY29udGFjdCA9IHtcclxuICAgIFwiaWRcIjogMCxcclxuICAgIFwibmFtZVwiOiBcIiBcIixcclxuICAgIFwicGhvbmVcIjogXCIgXCIsXHJcbiAgICBcImlzRWxlY3RlZFwiOiBmYWxzZSxcclxufTtcclxuXHJcblxyXG5jb25zdCBhZGRCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjYWRkX2J1dHRvbicpO1xyXG4vL9CU0LDQvdC90YvQtSDQutC+0L3RgtCw0LrRgtCwXHJcbmNvbnN0IGlucHV0TmFtZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNuYW1lJyk7XHJcbmNvbnN0IHBob25lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Bob25lJyk7XHJcbmNvbnN0IGlzRWxlY3RlZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNlbGVjdGVkJyk7XHJcblxyXG4vL9Ce0LHRgNCw0LHQvtGC0LrQsCDQuNCy0LXQvdGC0L7QsiDRhNC+0YDQvNGLINC00L7QsdCw0LLQu9C10L3QuNGPXHJcbmlzRWxlY3RlZC5hZGRFdmVudExpc3RlbmVyKFwiY2hhbmdlXCIsIGZ1bmN0aW9uICgpe1xyXG4gICAgY29udGFjdFtpc0VsZWN0ZWQudmFsdWVdID0gaXNFbGVjdGVkLmNoZWNrZWQ7XHJcbn0pXHJcbmFkZEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIixmdW5jdGlvbiAoKXtcclxuICAgIGlmIChpbnB1dE5hbWUudmFsdWUgIT09IFwiXCIgJiYgcGhvbmUudmFsdWUgIT09IFwiXCIpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBpZEluY3JlbWVudCsrO1xyXG4gICAgICAgICAgICBjb250YWN0LmlkID0gaWRJbmNyZW1lbnQ7XHJcbiAgICAgICAgICAgIGNvbnRhY3QubmFtZSA9IGlucHV0TmFtZS52YWx1ZTtcclxuICAgICAgICAgICAgY29udGFjdC5waG9uZSA9IHBob25lLnZhbHVlO1xyXG4gICAgICAgICAgICBsZXQganNvbiA9IEpTT04uc3RyaW5naWZ5KGNvbnRhY3QpO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhqc29uKVxyXG4gICAgICAgIH1cclxuICAgIGVsc2V7XHJcbiAgICAgICAgbGV0IGVycm9yID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgZXJyb3IuY2xhc3NOYW1lID0gXCJhbGVydFwiO1xyXG4gICAgICAgIGVycm9yLmlubmVySFRNTCA9IFwi0JLRiyDQvdC1INCy0LLQtdC70Lgg0LLRgdC1INC00LDQvdC90YvQtSAhINCf0L7QstGC0L7RgNC40YLQtSDQv9C+0L/Ri9GC0LrRg1wiO1xyXG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIud3JhcHBlclwiKS5iZWZvcmUoZXJyb3IpO1xyXG4gICAgICAgIHNsZWVwKDcwMCkudGhlbigoKSA9PiB7d2luZG93LmxvY2F0aW9uLnJlbG9hZCgpO30pXHJcbiAgICB9XHJcbiAgICB9XHJcbilcclxuXHJcbmZ1bmN0aW9uIHNsZWVwKG1zKSB7XHJcbiAgICByZXR1cm4gbmV3IFByb21pc2UocmVzb2x2ZSA9PiBzZXRUaW1lb3V0KHJlc29sdmUsIG1zKSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGxvYWRDb250YWN0cygpIHtcclxuICAgIHJlYWRlci5yZWFkRmlsZShcInJlc291cmNlcy90eHQvY29udGFjdExpc3QudHh0XCIsICd1dGY4JywgKGVyciwgZGF0YSkgPT57XHJcbiAgICAgICAgaWYoZXJyKSB0aHJvdyBlcnI7XHJcbiAgICAgICAgY29uc29sZS5sb2coZGF0YSlcclxuICAgIH0pXHJcbn0iXX0=
