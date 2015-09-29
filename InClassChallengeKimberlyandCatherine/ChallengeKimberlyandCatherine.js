//var monster[]=new var[5];
var skin;
var skin2;
var skin3;
function setup() {
    createCanvas(1200,800);
    skin = color(255,102,178);
    skin2 = color(200,180,78);
    skin3 = color(120,240,197);
}

function draw() {
    background(255);
    fill(skin);
    //fill(0,200,15);
    monsterWhole(-100,10);
    fill(skin2);
    monsterWhole(200,-200);
    fill(skin3);
    monsterWhole(400,-150);
    

    /*for (int i=0; i<monster.length; i++){
        monster[i]=new monsterWhole();
        monster[i].monsterWhole();
        //monsterWhole();
    }
    */
}


function monsterWhole(x, y) { 
var x,y;
    beginShape();
    curveVertex(350+x,700+y);
    curveVertex(350+x,700+y);
    curveVertex(200+x,600+y);
    curveVertex(400+x,620+y);
    curveVertex(470+x,620+y);
    curveVertex(470+x,620+y);
    endShape();

    beginShape();
    curveVertex(600+x, 600+y);
    curveVertex(600+x, 600+y);
    curveVertex(720+x, 750+y);
    curveVertex(700+x, 750+y);
    curveVertex(600+x, 600+y);
    curveVertex(600+x, 600+y);
    endShape();

    beginShape();
    curveVertex(300+x, 800+y);
    curveVertex(300+x, 800+y);
    curveVertex(330+x, 550+y);
    curveVertex(630+x, 600+y);
    curveVertex(800+x, 1200+y);
    curveVertex(800+x, 1200+y);
    endShape();

    noFill();
    beginShape();
    curveVertex(340+x, 580+y);
    curveVertex(340+x, 580+y);
    curveVertex(340+x,600+y);
    curveVertex(410+x, 600+y);
    curveVertex(415+x, 580+y);
    curveVertex(415+x, 580+y);
    endShape();

    noFill();
    beginShape();
    curveVertex(500+x, 580+y);
    curveVertex(500+x, 580+y);
    curveVertex(500+x,600+y);
    curveVertex(570+x, 600+y);
    curveVertex(575+x, 580+y);
    curveVertex(575+x, 580+y);
    endShape();

    fill(200, 60, 200);
    beginShape();
    curveVertex(375+x, 1200+y);
    curveVertex(375+x, 1200+y);
    curveVertex(400+x, 800+y);
    curveVertex(500+x, 800+y);
    curveVertex(500+x, 1200+y);
    curveVertex(500+x, 1200+y);
    endShape();

    beginShape();
    curveVertex(475+x, 1200+y);
    curveVertex(475+x, 1200+y);
    curveVertex(500+x, 800+y);
    curveVertex(600+x, 800+y);
    curveVertex(600+x, 1200+y);
    curveVertex(600+x, 1200+y);
    endShape();
}
