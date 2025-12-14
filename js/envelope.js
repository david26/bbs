var envelope = document.getElementById('envelope');
var btn_open = document.getElementById("open");
var envBg = document.getElementById("env-init");


function createStarAll(top) {
  let classes = ['gold-star-type-1', 'gold-star-type-2', 'gold-star-type-3'];
  let index = Math.floor(Math.random() * (2 + 1));
  console.log(index);

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

/*
createStar("gold-star-type-1", "2%", "35%", 'rotate(30deg)');
createStar("gold-star-type-2", "2%", "50%", 'rotate(35deg)');
createStar("gold-star-type-3", "2%", "65%", 'rotate(40deg)');
createStar("gold-star-type-1", "2%", "80%", 'rotate(45deg)');
createStar("gold-star-type-2", "2%", "93%", 'rotate(45deg)');

createStar("gold-star-type-2", "7%", "5%", 'rotate(10deg)');
createStar("gold-star-type-1", "7%", "20%", 'rotate(20deg)');
createStar("gold-star-type-3", "7%", "35%", 'rotate(30deg)');
createStar("gold-star-type-3", "7%", "50%", 'rotate(35deg)');
createStar("gold-star-type-2", "7%", "65%", 'rotate(40deg)');
createStar("gold-star-type-1", "7%", "80%", 'rotate(45deg)');
createStar("gold-star-type-1", "7%", "93%", 'rotate(45deg)');

createStar("gold-star-type-3", "12%", "5%", 'rotate(10deg)');
createStar("gold-star-type-2", "12%", "20%", 'rotate(20deg)');
createStar("gold-star-type-2", "12%", "35%", 'rotate(30deg)');
createStar("gold-star-type-1", "12%", "50%", 'rotate(35deg)');
createStar("gold-star-type-1", "12%", "65%", 'rotate(40deg)');
createStar("gold-star-type-3", "12%", "80%", 'rotate(45deg)');
createStar("gold-star-type-2", "12%", "93%", 'rotate(45deg)');

createStar("gold-star-type-2", "17%", "5%", 'rotate(10deg)');
createStar("gold-star-type-1", "17%", "20%", 'rotate(20deg)');
createStar("gold-star-type-1", "17%", "35%", 'rotate(30deg)');
createStar("gold-star-type-2", "17%", "50%", 'rotate(35deg)');
createStar("gold-star-type-2", "17%", "65%", 'rotate(40deg)');
createStar("gold-star-type-1", "17%", "80%", 'rotate(45deg)');
createStar("gold-star-type-3", "17%", "93%", 'rotate(45deg)');

createStar("gold-star-type-3", "23%", "5%", 'rotate(10deg)');
createStar("gold-star-type-2", "23%", "20%", 'rotate(20deg)');
createStar("gold-star-type-2", "23%", "35%", 'rotate(30deg)');
createStar("gold-star-type-1", "23%", "50%", 'rotate(35deg)');
createStar("gold-star-type-3", "23%", "65%", 'rotate(40deg)');
createStar("gold-star-type-2", "23%", "80%", 'rotate(45deg)');
createStar("gold-star-type-1", "23%", "93%", 'rotate(45deg)');

createStar("gold-star-type-1", "28%", "5%", 'rotate(10deg)');
createStar("gold-star-type-3", "28%", "20%", 'rotate(20deg)');
createStar("gold-star-type-3", "28%", "35%", 'rotate(30deg)');
createStar("gold-star-type-2", "28%", "50%", 'rotate(35deg)');
createStar("gold-star-type-1", "28%", "65%", 'rotate(40deg)');
createStar("gold-star-type-3", "28%", "80%", 'rotate(45deg)');
createStar("gold-star-type-2", "28%", "93%", 'rotate(45deg)');

createStar("gold-star-type-2", "33%", "5%", 'rotate(10deg)');
createStar("gold-star-type-1", "33%", "20%", 'rotate(20deg)');
createStar("gold-star-type-1", "33%", "35%", 'rotate(30deg)');
createStar("gold-star-type-3", "33%", "50%", 'rotate(35deg)');
createStar("gold-star-type-2", "33%", "65%", 'rotate(40deg)');
createStar("gold-star-type-1", "33%", "80%", 'rotate(45deg)');
createStar("gold-star-type-3", "33%", "93%", 'rotate(45deg)');*/

/*
for (let i = 0; i < 50; i++) {
  let star1 = document.createElement('span');
  star1.className = "gold-star-type-1";
  star1.textContent = "\u2605";
  let ls = 1 * i + Math.random() * (25 - 0) + 1;
  let l = `${ls}%`;
  let ts = 1 * i + Math.random() * (25 - 0) + 1;
  let t = `${ts}%`;
  star1.style.top = t;
  star1.style.left = l;

  console.log(ls);
  //star1.style.position =`top10px left:`;

  let star2 = document.createElement('span');
  star2.className = "gold-star-type-2";
  star2.textContent = "\u2605";

  let star3 = document.createElement('span');
  star3.className = "gold-star-type-2";
  star3.textContent = "\u2605";

  envBg.appendChild(star1);
  envBg.appendChild(star2);
  envBg.appendChild(star3);
}
*/

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
  setTimeout(fadeout, 2500)
}

btn_open.addEventListener("click", () => {
  open();
},
  false
);