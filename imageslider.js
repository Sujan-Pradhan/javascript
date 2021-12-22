const img_array = ["a.jpg", "b.jpg", "c.jpg", "d.jpg", "e.jpg"];
const array_length = img_array.length;
let i = 0;
let set = setInterval(slider, 0.02);
//here slider is a user define function
//5000 means seconds

function slider() {
  i++;
  i = i % array_length;
  document.getElementById("image").src = `images/${img_array[i]}`;
}

function next() {
  i++;
  i = i % array_length;
  document.getElementById("image").src = `images/${img_array[i]}`;
}

function prev() {
  i--;
  if (i < 0) {
    i = array_length - 1;
  }
  document.getElementById("image").src = `images/${img_array[i]}`;
}

function stops() {
  clearInterval(set);
}

function starts() {
  set = setInterval(slider, 0.02);
}
