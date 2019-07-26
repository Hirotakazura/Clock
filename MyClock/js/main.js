(function() {
  'use strict';

  let stage = document.getElementById('stage');
  let ctx;
  let WIDTH = stage.width;
  let HEIGHT = stage.height;
  let r = 100;
  let angle;
  let h;
  let m;
  let s;

  function radians(x) {
    return Math.PI / 180 * x;
  }

  function draw() {
    h = (new Date().getHours());
    m = (new Date().getMinutes());
    s = (new Date().getSeconds());
    // ctx.beginPath();
    // ctx.arc(WIDTH / 2, HEIGHT / 2, r, 0, radians(360));
    // ctx.stroke();
    for (angle = 0; angle < 360; angle += 6) {
      ctx.save();
      ctx.translate(WIDTH / 2, HEIGHT / 2);
      ctx.rotate(radians(angle));
      ctx.beginPath();
      ctx.moveTo(0, -r);
      if (angle % 30 === 0) {
        ctx.lineTo(0, -r + 10);
        ctx.lineWidth = 2;
        ctx.font = '13px Arial';
        ctx.textAlign = 'center';
        ctx.fillText(angle / 30 || 12, 0, -r + 25);
      } else {
        ctx.lineTo(0, -r + 5);
      }
      ctx.stroke();
      ctx.restore();
    }
    ctx.save();
    ctx.lineWidth = 6;
    ctx.translate(WIDTH / 2, HEIGHT / 2);
    ctx.rotate(radians(h * 30 + m * 0.5));
    ctx.beginPath();
    ctx.moveTo(0,10);
    ctx.lineTo(0, -r + 50);
    ctx.stroke();
    ctx.restore();
    ctx.save();

    ctx.lineWidth = 4;
    ctx.translate(WIDTH / 2, HEIGHT / 2);
    ctx.rotate(radians(m * 6));
    ctx.beginPath();
    ctx.moveTo(0,10);
    ctx.lineTo(0, -r + 30);
    ctx.stroke();
    ctx.restore();
    ctx.save();

    ctx.strokeStyle = 'red';
    ctx.translate(WIDTH / 2, HEIGHT / 2);
    ctx.rotate(radians(s * 6));
    ctx.beginPath();
    ctx.moveTo(0,20);
    ctx.lineTo(0, -r + 20);
    ctx.stroke();
    ctx.restore();
  }

  function update() {
    ctx.clearRect(0, 0, WIDTH, HEIGHT);
    draw();
    setTimeout(function() {
      update();
    }, 100);
  }


  if (typeof stage.getContext === 'undefined') {
    return;
  }

  ctx = stage.getContext('2d');

  // draw();
  update();


})();
