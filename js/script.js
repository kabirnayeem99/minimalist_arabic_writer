function getElementById(e) {
  return document.getElementById(e);
}
var input = getElementById("area");
function saveTextToLocalStorage(e) {
  localStorage.setItem("cached_text", e);
}
function setTextToTextArea(e) {
  var t = getElementById("area");
  (t.scrollTop = t.scrollHeight), (t.value = e);
}
function convertLatinToArabic() {
  var e = getElementById("area").value,
    e = event.target.value;
  e.slice(-1);
  setTextToTextArea(e), saveTextToLocalStorage(e);
}
window.onload = function () {
  var e = localStorage.getItem("cached_text");
  e && setTextToTextArea(e);
};
