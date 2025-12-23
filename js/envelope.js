var envelope = document.getElementById('envelope');
var btn_open = document.getElementById("open");
var envBg = document.getElementById("env-init");


function createStarAll(top) {
  let classes = ['gold-star-type-1', 'gold-star-type-2', 'gold-star-type-3'];
  let index = Math.floor(Math.random() * (2 + 1));

  let star = document.createElement('span');
  star.className = classes[index];
  star.textContent = "\u2605";
  star.style.top = top;
  star.style.left = '5%';
  star.style.transform = 'rotate(10deg)';
  envBg.appendChild(star);

  index = Math.floor(Math.random() * (2 + 1));
  star = document.createElement('span');
  star.className = classes[index];
  star.textContent = "\u2605";
  star.style.top = top;
  star.style.left = '20%';
  star.style.transform = 'rotate(20deg)';
  envBg.appendChild(star);

  index = Math.floor(Math.random() * (2 + 1));
  star = document.createElement('span');
  star.className = classes[index];
  star.textContent = "\u2605";
  star.style.top = top;
  star.style.left = '35%';
  star.style.transform = 'rotate(30deg)';
  envBg.appendChild(star);

  index = Math.floor(Math.random() * (2 + 1));
  star = document.createElement('span');
  star.className = classes[index];
  star.textContent = "\u2605";
  star.style.top = top;
  star.style.left = '50%';
  star.style.transform = 'rotate(35deg)';
  envBg.appendChild(star);

  index = Math.floor(Math.random() * (2 + 1));
  star = document.createElement('span');
  star.className = classes[index];
  star.textContent = "\u2605";
  star.style.top = top;
  star.style.left = '65%';
  star.style.transform = 'rotate(40deg)';
  envBg.appendChild(star);

  index = Math.floor(Math.random() * (2 + 1));
  star = document.createElement('span');
  star.className = classes[index];
  star.textContent = "\u2605";
  star.style.top = top;
  star.style.left = '80%';
  star.style.transform = 'rotate(45deg)';
  envBg.appendChild(star);

  index = Math.floor(Math.random() * (2 + 1));
  star = document.createElement('span');
  star.className = classes[index];
  star.textContent = "\u2605";
  star.style.top = top;
  star.style.left = '93%';
  star.style.transform = 'rotate(55deg)';
  envBg.appendChild(star);
}
createStarAll("0%");
createStarAll("5%");
createStarAll("10%");
createStarAll("15%");
createStarAll("20%");
createStarAll("25%");
createStarAll("30%");
createStarAll("35%");
createStarAll("40%");
createStarAll("45%");
createStarAll("50%");
createStarAll("55%");
createStarAll("60%");
createStarAll("65%");
createStarAll("70%");
createStarAll("75%");
createStarAll("80%");
createStarAll("85%");
createStarAll("90%");

function fadeout() {
  var el = document.getElementById('env-init');
  var elMain = document.getElementById('all');
  fadeOutElement(el, elMain);
}

function fadeOutElement(el, elMain) {
  var opacity = 1; // Initial opacity
  var show = 0;
  elMain.style.display = '';
  var interval = setInterval(function () {
    if (opacity > 0) {
      opacity -= 0.1;
      show += 0.1;
      el.style.opacity = opacity;
      elMain.opacity = show;
    } else {
      clearInterval(interval); // Stop the interval when opacity reaches 0
      el.style.display = 'none'; // Hide the element
      elMain.style.opacity = 1;
      audio.play();
    }
  }, 53);
}


function open() {
  envelope.classList.add("open");
  envelope.classList.remove("close");
  document.body.style.backgroundColor="#FFFDFB";
  setTimeout(fadeout, 2500)
}

btn_open.addEventListener("click", () => {
  open();
},
  false
);