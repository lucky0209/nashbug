(function () {
          'use strict'

        feather.replace()
}())
const l = document.getElementById("first");
const m = document.getElementById("second");
const n = document.getElementById("third");

m.addEventListener("click", function() {
  l.click();
});

l.addEventListener("change", function() {
  if (l.value) {
    n.innerHTML = l.value.match(/[\/\\]([\w\d\s\.\-\(\)]+)$/)[1];
  } else {
    n.innerHTML = "No file chosen, yet.";
  }
});
