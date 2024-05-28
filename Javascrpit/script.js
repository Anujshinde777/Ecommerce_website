const bar = document.getElementById("bar");
const nav = document.getElementById("navbar");
const close = document.getElementById("close");
var pro = document.getElementsByClassName("pro");
var MainImg = document.getElementById("MainImg");
var smallimg = document.getElementsByClassName("small-img");
var x = document.getElementsByClassName("x");


pro[0].onclick = function () {
  window.location.href = "sproduct.html";
  MainImg.src = x[1].src;
};
if (bar) {
  bar.addEventListener("click", () => {
    nav.classList.add("active");
    document.getElementById("lg-bag").classList.remove("lg-bag");
  });
  if (close) {
    close.addEventListener("click", () => {
      nav.classList.remove("active");
    });
  }
}

if (smallimg.length > 0) {
  // Attach the click event handler to the first element
  smallimg[0].onclick = function () {
    MainImg.src = smallimg[0].src;
  };

  smallimg[1].onclick = function () {
    MainImg.src = smallimg[1].src;
  };
  smallimg[2].onclick = function () {
    MainImg.src = smallimg[2].src;
  };
  smallimg[3].onclick = function () {
    MainImg.src = smallimg[3].src;
  };
}
