let canvas1 = document.getElementById('canvas1'),
ctx1 = canvas1.getContext('2d'),
canvas2 = document.getElementById('canvas2'),
ctx2 = canvas2.getContext('2d'),
canvas3 = document.getElementById('canvas3'),
ctx3 = canvas3.getContext('2d');

ctx1.beginPath();
ctx1.lineTo(0, 250);
ctx1.lineTo(400, 250);
ctx1.lineTo(400, 0);
ctx1.lineTo(0, 0);
ctx1.fillStyle = '#00bfff'
ctx1.fill()

ctx1.beginPath();
ctx1.moveTo(0, 184);
ctx1.lineTo(0, 250);
ctx1.lineTo(400, 250);
ctx1.lineTo(400, 184);
ctx1.lineTo(0, 184);
ctx1.fillStyle = 'lightgreen'
ctx1.fill()

ctx1.beginPath();
ctx1.moveTo(0, 227);
ctx1.lineTo(0, 250);
ctx1.lineTo(400, 250);
ctx1.lineTo(400, 227);
ctx1.lineTo(0, 227);
ctx1.fillStyle = 'green'
ctx1.fill()

ctx1.beginPath();
ctx1.moveTo(125, 227);
ctx1.lineTo(125, 175);
ctx1.lineTo(250, 175);
ctx1.lineTo(250, 227);
ctx1.lineTo(125, 227);
ctx1.fillStyle = '#cc711d'
ctx1.fill()

ctx1.beginPath();
ctx1.moveTo(125, 175);
ctx1.lineTo(170, 140);
ctx1.lineTo(205, 140);
ctx1.lineTo(250, 175);
ctx1.lineTo(125, 175);
ctx1.fillStyle = 'red'
ctx1.fill()

ctx1.beginPath();
ctx1.moveTo(145, 190);
ctx1.lineTo(160, 190);
ctx1.lineTo(160, 205);
ctx1.lineTo(145, 205);
ctx1.lineTo(145, 190);
ctx1.fillStyle = 'yellow'
ctx1.fill()

ctx1.beginPath();
ctx1.moveTo(230, 190);
ctx1.lineTo(215, 190);
ctx1.lineTo(215, 205);
ctx1.lineTo(230, 205);
ctx1.lineTo(230, 190);
ctx1.fillStyle = 'yellow'
ctx1.fill()

ctx1.beginPath();
ctx1.arc(60, 60, 30, 0, 2*Math.PI);
ctx1.fillStyle = 'yellow'
ctx1.fill()

ctx1.beginPath();
ctx1.moveTo(27, 60);
ctx1.lineTo(10, 60);
ctx1.moveTo(35, 40);
ctx1.lineTo(15, 10);
ctx1.moveTo(60, 27);
ctx1.lineTo(60, 10);
ctx1.moveTo(85, 40);
ctx1.lineTo(100, 30);
ctx1.moveTo(95, 60);
ctx1.lineTo(120, 60);
ctx1.moveTo(90, 80);
ctx1.lineTo(110, 100);
ctx1.moveTo(60, 95);
ctx1.lineTo(60, 115);
ctx1.moveTo(30, 85);
ctx1.lineTo(10, 100);
ctx1.lineWidth = 5;
ctx1.strokeStyle = 'yellow'
ctx1.stroke();

ctx1.beginPath();
ctx1.arc(200, 60, 20, 0, 2*Math.PI);
ctx1.arc(230, 60, 20, 0, 2*Math.PI);
ctx1.fillStyle = 'white'
ctx1.fill()

ctx1.beginPath();
ctx1.arc(270, 100, 20, 0, 2*Math.PI);
ctx1.arc(295, 110, 20, 0, 2*Math.PI);
ctx1.fillStyle = 'white'
ctx1.fill()

ctx1.beginPath();
ctx1.arc(340, 50, 20, 0, 2*Math.PI);
ctx1.arc(360, 40, 20, 0, 2*Math.PI);
ctx1.fillStyle = 'white'
ctx1.fill()

ctx2.beginPath();
ctx2.moveTo(125, 50);
ctx2.lineTo(125, 25);
ctx2.lineTo(175, 25);
ctx2.lineTo(175, 25);
ctx2.lineTo(150 ,35);
ctx2.lineTo(175, 45);
ctx2.lineTo(125, 45);
ctx2.fillStyle = 'blue'
ctx2.fill();

ctx2.beginPath();
ctx2.moveTo(125, 50);
ctx2.lineTo(125, 25);
ctx2.lineTo(175, 25);
ctx2.lineTo(175, 25);
ctx2.lineTo(150 ,35);
ctx2.lineTo(175, 45);
ctx2.lineTo(125, 45);
ctx2.stroke();

ctx2.beginPath();
ctx2.moveTo(100, 100);
ctx2.lineTo(125, 50);
ctx2.lineTo(150, 100)
ctx2.lineTo(100, 100);
ctx2.fillStyle = 'red'
ctx2.fill();
ctx2.lineTo(125, 50);
ctx2.lineTo(150, 100)
ctx2.lineTo(100, 100);
ctx2.stroke();

ctx2.beginPath();
ctx2.moveTo(50, 100)
ctx2.lineTo(100, 140);
ctx2.lineTo(150, 140);
ctx2.lineTo(200, 100);
ctx2.lineTo(50, 100);
ctx2.fillStyle = 'green'
ctx2.fill();
ctx2.lineTo(100, 140);
ctx2.lineTo(150, 140);
ctx2.lineTo(200, 100);
ctx2.lineTo(50, 100);
ctx2.stroke();

ctx3.beginPath();
ctx3.arc(100, 100, 70, 0, 2 * Math.PI);
ctx3.fillStyle = 'yellow';
ctx3.fill();
ctx3.stroke();

ctx3.beginPath();
ctx3.arc(70, 70, 10, 0, 2 * Math.PI);
ctx3.fillStyle = 'black';
ctx3.fill();

ctx3.beginPath();
ctx3.arc(130, 70, 10, 0, 2 * Math.PI);
ctx3.fillStyle = 'black';
ctx3.fill();

ctx3.beginPath();
ctx3.arc(100, 120, 30, 0, Math.PI);
ctx3.stroke();