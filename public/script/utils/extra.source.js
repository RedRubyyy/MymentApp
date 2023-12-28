Element.prototype.removes = function (...classes) {
    const obj = this;
    [...classes].forEach(cls => {
      obj.classList.remove(cls);
    });
};
function $ (query) {
  return document.querySelector(query);
};
function $$ (query) {
  return document.querySelectorAll(query);
};
Element.prototype.clsToggle = function (classList) {
  this.classList.toggle(classList);
};
Element.prototype.clsAdd = function (classList) {
  this.classList.add(classList);
};
Element.prototype.clsRemove = function (classList) {
  this.classList.remove(classList);
};
Element.prototype.on = function (event , callback) {
  this.addEventListener(event , callback);
};

function delay (timeout , callback) {
  return new Promise (function (resolve , reject) {
    setTimeout(function () {
      resolve();
    } , timeout);
  });
};