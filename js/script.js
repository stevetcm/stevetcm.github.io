CSSPlugin.useSVGTransformAttr = true;

var tl_options = {
	repeat: 1,
  repeatDelay: 0,
  yoyo:true,
  onComplete: function() {
    delayedShake(1.25);
  }
};

var tl = new TimelineMax(tl_options);
var path = '#name *';

var array_x = [], array_y = [], array_rotation = [];
$(path).each(function() {
  array_x.push(getRandom(-1500, 1500));
  array_y.push(getRandom(-1200, 1200));
  array_rotation.push(getRandom(-720, 720));
})

var stagger_path_to = {
  cycle: {x: array_x, y: array_y, rotation: array_rotation},
  scale: 0.25,
  opacity: 0.3,
  ease: Power2.easeOut
};

tl.staggerTo(path, 1.75, stagger_path_to);

function shake() {
  var shake_options = {
    x: "+=" + getRandom(10, 10),
    y: "+=" + getRandom(5, 5),
    repeat: 3,
    yoyo: true,
    onComplete: function() {
      delayedShake(2);
    }
  }
  TweenMax.to(path, 0.12, shake_options);
};

function delayedShake(delay) {
  TweenMax.delayedCall(delay, shake);
}

$('#name').hover(
  function() {
    if (!tl.isActive()) {
      TweenMax.killAll();
      tl.restart();
    }
  }
);

function getRandom(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}


var typed_options = {
  strings: [ "Hello and welcome to my personal website.",
             "You can hover over my name to replay the animation.",
             "Scroll down to learn a bit more about me.^250" ],
  typeSpeed: 20,
  backSpeed: 15,
  backDelay: 1500,
  loop: true,
  showCursor: false
}
var typed = new Typed("#typed", typed_options);


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

$('.modal-container').click(function() {
  $(this).fadeOut();
})

$('#project-impulse').click(function() {
  $(this).closest("#section-projects").find("#impulse").fadeToggle();
})

$('#project-tvnext').click(function() {
  $(this).closest("#section-projects").find("#tvnext").fadeToggle();
})

$('#project-quickremind').click(function() {
  $(this).closest("#section-projects").find("#quickremind").fadeToggle();
})

$('#project-twoworlds').click(function() {
  $(this).closest("#section-projects").find("#twoworlds").fadeToggle();
})