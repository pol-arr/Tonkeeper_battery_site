const cards = document.querySelectorAll(".card");
const tiltFactor = 7;
const reverseTilt = false;

cards.forEach((item) => {
  item.addEventListener("mousemove", (e) => {
    const { left, top, width, height } = item.getBoundingClientRect();
    const centerX = left + width / 2;
    const centerY = top + height / 2;
    let angleX = -((e.clientY - centerY) / (height / 2)) * tiltFactor;
    let angleY = ((e.clientX - centerX) / (width / 2)) * tiltFactor;
    if (reverseTilt) {
      angleX = -angleX;
      angleY = -angleY;
    }
    item.style.transform = `perspective(1000px) rotateX(${angleX}deg) rotateY(${angleY}deg)`;
  });

  item.addEventListener("mouseleave", () => {
    item.style.transform = "none";
  });
});

function toggleNav() {
  var options = document.getElementsByClassName("nav-options")[0];
  if (options.style.display === "none") {
    options.style.display = "flex";
  } else {
    options.style.display = "none";
  }
}
