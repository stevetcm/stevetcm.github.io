/* Typewriter Effect */
const typed_options = {
  strings: [ "Hello and welcome to my personal website.",
             //"You can hover over my name to replay the animation.",
             "Scroll down to learn a bit more about me.^500" ],
  typeSpeed: 20,
  backSpeed: 15,
  backDelay: 1500,
  loop: true,
  showCursor: false
}
new Typed("#typed", typed_options);


/* Skill Switch Button Functionality */
var brackets_count = 3;
$('.brackets-arrow').click(function() {
  $(this).toggleClass('clicked');

  if ($(this).hasClass('clicked')) {
    $(this).closest('.brackets-element').find('.brackets-bottom').slideUp();
    $(this).closest('.brackets-element').find('.brackets-hidden').fadeIn();
    brackets_count--;
  } else {
    $(this).closest('.brackets-element').find('.brackets-bottom').slideDown();
    $(this).closest('.brackets-element').find('.brackets-hidden').fadeOut();
    brackets_count++;
  }

  if (brackets_count == 0) {
    $('.skills-switch').find('.switch').addClass('clicked');
  } else if (brackets_count == 3) {
    $('.skills-switch').find('.switch').removeClass('clicked');
  }
});

$('.skills-switch').click(function() {
  $(this).find('.switch').toggleClass('clicked');

  if ($(this).find('.switch').hasClass('clicked')) {
    $(this).closest('#skill-container').find('.brackets-element').find('.brackets-arrow').addClass('clicked');
    $(this).closest('#skill-container').find('.brackets-element').find('.brackets-bottom').slideUp();
    $(this).closest('#skill-container').find('.brackets-element').find('.brackets-hidden').fadeIn();
    brackets_count = 0;
  } else {
    $(this).closest('#skill-container').find('.brackets-element').find('.brackets-arrow').removeClass('clicked');
    $(this).closest('#skill-container').find('.brackets-element').find('.brackets-bottom').slideDown();
    $(this).closest('#skill-container').find('.brackets-element').find('.brackets-hidden').fadeOut();
    brackets_count = 3;
  }
});


/* Dynamic Point Link Animation */
var opts = { 
  particleColor: "rgb(220,220,220)",
  lineColor: "rgb(200,200,200)",
  particleAmount: 15,
  defaultSpeed: 2,
  variantSpeed: 1,
  defaultRadius: 1,
  variantRadius: 1,
  linkRadius: 300,
};

function resizeReset() {
  w = canvasBody.width = $('body').innerWidth();

  if (w < 600) {
    opts.particleAmount = 5;
  }

  h = canvasBody.height = window.innerHeight;
}

window.addEventListener("resize", function() {
  deBouncer();
});

function deBouncer() {
    clearTimeout(tid);
    tid = setTimeout(function() {
        resizeReset();
    }, delay);
};

function checkDistance(x1, y1, x2, y2) { 
  return Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
};

function linkPoints(point, hubs) { 
  for (let i = 0; i < hubs.length; i++) {
    let distance = checkDistance(point.x, point.y, hubs[i].x, hubs[i].y);
    let opacity = 1 - distance / opts.linkRadius;
    if (opacity > 0) { 
      drawArea.lineWidth = 0.5;
      drawArea.strokeStyle = `rgba(${rgb[0]}, ${rgb[1]}, ${rgb[2]}, ${opacity})`;
      drawArea.beginPath();
      drawArea.moveTo(point.x, point.y);
      drawArea.lineTo(hubs[i].x, hubs[i].y);
      drawArea.closePath();
      drawArea.stroke();
    }
  }
}

Particle = function() { 
  this.x = Math.random() * w; 
  this.y = Math.random() * h;
  this.speed = opts.defaultSpeed + Math.random() * opts.variantSpeed; 
  this.directionAngle = Math.floor(Math.random() * 360); 
  this.color = opts.particleColor;
  this.radius = opts.defaultRadius + Math.random() * opts.variantRadius; 
  this.vector = {
    x: Math.cos(this.directionAngle) * this.speed,
    y: Math.sin(this.directionAngle) * this.speed
  };

  this.update = function() { 
    this.border(); 
    this.x += this.vector.x; 
    this.y += this.vector.y; 
  };

  this.border = function() { 
    if (this.x >= w || this.x <= 0) { 
      this.vector.x *= -1;
    }
    if (this.y >= h || this.y <= 0) {
      this.vector.y *= -1;
    }
    if (this.x > w) this.x = w;
    if (this.y > h) this.y = h;
    if (this.x < 0) this.x = 0;
    if (this.y < 0) this.y = 0; 
  };

  this.draw = function() { 
    drawArea.beginPath();
    drawArea.arc(this.x, this.y, this.radius, 0, Math.PI*2);
    drawArea.closePath();
    drawArea.fillStyle = this.color;
    drawArea.fill();
  };
};

function setup() {
  resizeReset();

  particles = [];
  for (let i = 0; i < opts.particleAmount; i++) {
    particles.push(new Particle());
  }

  window.requestAnimationFrame(loop);
}

function loop() { 
  window.requestAnimationFrame(loop);
  drawArea.clearRect(0, 0, w, h);

  for (let i = 0; i < particles.length; i++) {
    particles[i].update();
    particles[i].draw();
  }
  
  for (let i = 0; i < particles.length; i++) {
    linkPoints(particles[i], particles);
  }
}

const canvasBody = document.getElementById("canvas-particles"),
drawArea = canvasBody.getContext("2d");
let delay = 500, tid,
rgb = opts.lineColor.match(/\d+/g);
resizeReset();
setup();
