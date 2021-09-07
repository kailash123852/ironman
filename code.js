var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":["3ffc94f7-0bfe-430b-ba6d-025cc579b69a","271b9ab3-8dc2-430b-8d91-0aba14450b45","75f7d951-334f-4d32-96ae-1b3f1308738d","335ee666-ebdc-4874-b694-5dece8e414aa","763abd18-6cd9-49c3-96f7-196320ee014a","ee8be606-abd7-4f9b-9173-cae833cc6fc6","a53e13cb-7739-48ce-8580-b631ce0b5960","c1214e09-1089-4f5f-949b-82e78390e165","65fb1e82-0094-4375-ab1d-ce3a9314e5cc","a389970c-f394-45f0-8caa-5548c976ec7c","8ef8bb74-d620-46e9-8e26-959b3745d63f","6eeab741-613b-4dbc-b84c-cb2fc808de49"],"propsByKey":{"3ffc94f7-0bfe-430b-ba6d-025cc579b69a":{"name":"body","sourceUrl":null,"frameSize":{"x":25,"y":47},"frameCount":1,"looping":true,"frameDelay":12,"version":"e.pP5Q27no452Np7bncx0ty9j6bYDwN5","loadedFromSource":true,"saved":true,"sourceSize":{"x":25,"y":47},"rootRelativePath":"assets/3ffc94f7-0bfe-430b-ba6d-025cc579b69a.png"},"271b9ab3-8dc2-430b-8d91-0aba14450b45":{"name":"arm","sourceUrl":null,"frameSize":{"x":25,"y":40},"frameCount":1,"looping":true,"frameDelay":12,"version":"MHM8AnrRt251uenmwe6p..pI2p041u8p","loadedFromSource":true,"saved":true,"sourceSize":{"x":25,"y":40},"rootRelativePath":"assets/271b9ab3-8dc2-430b-8d91-0aba14450b45.png"},"75f7d951-334f-4d32-96ae-1b3f1308738d":{"name":"laser","sourceUrl":null,"frameSize":{"x":60,"y":10},"frameCount":1,"looping":true,"frameDelay":12,"version":"6Eo0j5oS6YxfhdhkhMWLku0cSNxTIjJY","loadedFromSource":true,"saved":true,"sourceSize":{"x":60,"y":10},"rootRelativePath":"assets/75f7d951-334f-4d32-96ae-1b3f1308738d.png"},"335ee666-ebdc-4874-b694-5dece8e414aa":{"name":"leg","sourceUrl":null,"frameSize":{"x":20,"y":45},"frameCount":1,"looping":true,"frameDelay":12,"version":"3DWAkHE8Pwee3xUm_Mqg3ZvxCQ560xrt","loadedFromSource":true,"saved":true,"sourceSize":{"x":20,"y":45},"rootRelativePath":"assets/335ee666-ebdc-4874-b694-5dece8e414aa.png"},"763abd18-6cd9-49c3-96f7-196320ee014a":{"name":"rocket","sourceUrl":null,"frameSize":{"x":20,"y":75},"frameCount":1,"looping":true,"frameDelay":12,"version":"pSlVBlEhESGowWWk4aL.uG1rGAOVNRx6","loadedFromSource":true,"saved":true,"sourceSize":{"x":20,"y":75},"rootRelativePath":"assets/763abd18-6cd9-49c3-96f7-196320ee014a.png"},"ee8be606-abd7-4f9b-9173-cae833cc6fc6":{"name":"wall","sourceUrl":null,"frameSize":{"x":8,"y":399},"frameCount":1,"looping":true,"frameDelay":12,"version":"fgjq3C9Vvv5Xa14U21zYnIlDUE7RZQAg","loadedFromSource":true,"saved":true,"sourceSize":{"x":8,"y":399},"rootRelativePath":"assets/ee8be606-abd7-4f9b-9173-cae833cc6fc6.png"},"a53e13cb-7739-48ce-8580-b631ce0b5960":{"name":"energy","sourceUrl":null,"frameSize":{"x":35,"y":5},"frameCount":1,"looping":true,"frameDelay":12,"version":"VV6CtS4iLjErr1.VDccNnhSs6f9KHWnR","loadedFromSource":true,"saved":true,"sourceSize":{"x":35,"y":5},"rootRelativePath":"assets/a53e13cb-7739-48ce-8580-b631ce0b5960.png"},"c1214e09-1089-4f5f-949b-82e78390e165":{"name":"getReady","sourceUrl":null,"frameSize":{"x":400,"y":73},"frameCount":1,"looping":true,"frameDelay":12,"version":"atJdbOk9rZkzHsIJ1eyrx0bkduB6rAYJ","loadedFromSource":true,"saved":true,"sourceSize":{"x":400,"y":73},"rootRelativePath":"assets/c1214e09-1089-4f5f-949b-82e78390e165.png"},"65fb1e82-0094-4375-ab1d-ce3a9314e5cc":{"name":"fly_bot_1","sourceUrl":null,"frameSize":{"x":124,"y":141},"frameCount":2,"looping":true,"frameDelay":1,"version":"dYCoQFJA4PvWLPf9ci3pLKA.zvyb2hAV","loadedFromSource":true,"saved":true,"sourceSize":{"x":248,"y":141},"rootRelativePath":"assets/65fb1e82-0094-4375-ab1d-ce3a9314e5cc.png"},"a389970c-f394-45f0-8caa-5548c976ec7c":{"name":"energyPowerup","sourceUrl":"assets/api/v1/animation-library/mGTyn14fcFwINZSIBhVlnb58H8FFToF4/category_gameplay/powerupYellow_bolt.png","frameSize":{"x":34,"y":33},"frameCount":1,"looping":true,"frameDelay":2,"version":"mGTyn14fcFwINZSIBhVlnb58H8FFToF4","loadedFromSource":true,"saved":true,"sourceSize":{"x":34,"y":33},"rootRelativePath":"assets/api/v1/animation-library/mGTyn14fcFwINZSIBhVlnb58H8FFToF4/category_gameplay/powerupYellow_bolt.png"},"8ef8bb74-d620-46e9-8e26-959b3745d63f":{"name":"healthPowerup","sourceUrl":null,"frameSize":{"x":34,"y":33},"frameCount":1,"looping":true,"frameDelay":12,"version":"jY1lIZ7snBhPHBK5zC5hxjFzj5wtywJY","loadedFromSource":true,"saved":true,"sourceSize":{"x":34,"y":33},"rootRelativePath":"assets/8ef8bb74-d620-46e9-8e26-959b3745d63f.png"},"6eeab741-613b-4dbc-b84c-cb2fc808de49":{"name":"gameOver","sourceUrl":null,"frameSize":{"x":412,"y":78},"frameCount":1,"looping":true,"frameDelay":12,"version":"pIKBVPDrjsgryHnh1y4TJtATCbfQ18aZ","loadedFromSource":true,"saved":true,"sourceSize":{"x":412,"y":78},"rootRelativePath":"assets/6eeab741-613b-4dbc-b84c-cb2fc808de49.png"}}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----

var speed = -4, gravity = 0.3, boost = false, power = 0, health = 100, energy = 800;
var groundLevel = 315, startTime = 0, endTime = -5;
var obstacleX = 500, stage = 0;

var wall1 = createSprite(300, 200);
wall1.setAnimation('wall');
wall1.velocityX = speed;
var wall2 = createSprite(100, 200);
wall2.setAnimation('wall');
wall2.velocityX = speed;

var leg2 = createSprite(100, 330);
leg2.setAnimation("leg");
leg2.rotationSpeed = -15;
var arm2 = createSprite(100, 305);
arm2.setAnimation("arm");
var body = createSprite(100, 300);
body.setAnimation("body");
var leg1 = createSprite(100, 330);
leg1.setAnimation("leg");
leg1.rotationSpeed = 15;
var arm1 = createSprite(100, 305);
arm1.setAnimation("arm");
arm1.rotationSpeed = -10;

var ironMan = createGroup();
ironMan.add(leg1);
ironMan.add(leg2);
ironMan.add(arm1);
ironMan.add(arm2);
ironMan.add(body);

var pm1 = createSprite(100, 0);
pm1.setAnimation("energy");
pm1.visible = false;
pm1.power = 0;
var pm2 = createSprite(100, 0);
pm2.setAnimation("energy");
pm2.visible = false;
pm2.power = 0;
var pm3 = createSprite(100, 0);
pm3.setAnimation("energy");
pm3.visible = false;
pm3.power = 0;
var pm4 = createSprite(100, 0);
pm4.setAnimation("energy");
pm4.visible = false;
pm4.power = 0;
var pm5 = createSprite(100, 0);
pm5.setAnimation("energy");
pm5.visible = false;
pm5.power = 0;

var textSprite = createSprite(200, 200);
textSprite.setAnimation("getReady");

var powerup = createSprite(500, randomNumber(100, 320));
powerup.name = '';
randomAnimation();
powerup.velocityX = speed+1;

var badGuy = createSprite(400, randomNumber(100, 300));
badGuy.setAnimation("fly_bot_1");
badGuy.scale = 0.5;
badGuy.velocityX = speed-1;
badGuy.hp = 50;

playSound("assets/category_background/outback.mp3", true);

function draw() {
  background("#C1C3C4");
  drawSprites();
  movementIllusion();
  updateMissile(pm1);
  updateMissile(pm2);
  updateMissile(pm3);
  updateMissile(pm4);
  updateMissile(pm5);
  updatePowerup();
  updateEnemy();
  playerMovement();
  drawInfo();
  drawLasers();
  if (health > 0) {
    playerControls();
    
    energy += 0.1;
    if (energy > 800){
      energy = 800;
    }
    if (health > 100){
      health = 100;
    }
  }
  else if (health <= 0)  {
    ironMan.setVisibleEach(false);
    textSprite.setAnimation("gameOver");
    textSprite.visible = true;
    
    fill("#ffcc00");
    stroke("#bf9900");
    strokeWeight(10);
    textSize(50);
    text('score: ', 100, 300);
    text(endTime - startTime, 250, 300);
    if (World.seconds - endTime == 2) {
      textSprite.setAnimation("getReady");
      startTime = World.seconds;
      endTime = 0;
      health = 100;
      energy = 800;
      ironMan.setVisibleEach(true);
    }
  }
  if (health == 0) {
    endTime = World.seconds;
    arm2.setAnimation("arm");
    leg1.setAnimation("leg");
    leg2.setAnimation("leg");
    body.velocityY = 0;
    body.y = 340;
  }
  
}

function playerMovement() {
  if (body.y < groundLevel) {
    body.velocityY += gravity;
  }
  else{
    body.y = groundLevel;
  }
  
  if (boost && body.y >= groundLevel) {
    run();
    boost = false;
  }
  
  if (arm1.rotation < -50) {
    arm1.rotationSpeed = 10;
  }
  else if (arm1.rotation > 50) {
    arm1.rotationSpeed = -10;
  }
  if (leg1.rotation < -50) {
    leg1.rotationSpeed = 15;
    leg2.rotationSpeed = -15;
  }
  else if (leg1.rotation > 50) {
    leg1.rotationSpeed = -15;
    leg2.rotationSpeed = 15;
  }
  
  if (body.velocityY > 5) {
    body.velocityY = 5;
  }
  if (body.velocityY < -5) {
    body.velocityY = -5;
  }
  if (body.y < 70){
    body.velocityY = 1;
  }
  arm1.y = body.y + 5;
  arm2.y = body.y + 5;
  leg1.y = body.y + 25;
  leg2.y = body.y + 25;
}

function playerControls() {
  
  if (keyDown('up') && energy > 0) {
    body.velocityY += -0.5;
    thrust();
  }
  if (keyWentUp('up')) {
    leg1.setAnimation("leg");
    leg2.setAnimation("leg");
  }
  if (keyDown('right') && energy > 0) {
    speed = -6;
    body.velocityY *= 0.75;
    thrust();
  }
  if (keyDown('left') && energy > 0) {
    speed = -2;
    body.velocityY *= 0.75;
    thrust();
  }
  if (keyWentUp('right') || keyWentUp('left')) {
    gravity = 0.3;
    speed = -4;
    leg1.setAnimation("leg");
    leg2.setAnimation("leg");
  }
  if (keyWentDown('space')){
    arm2.setAnimation("laser");
    playSound("assets/category_achievements/sharp_win_3.mp3");
  }
  if (keyDown('space') && power < 50) {
    power += 1;
  }
  if (keyWentUp("space")) {
    playSound("assets/category_projectile/retro_game_weapon_-_plasma_pistol.mp3");
    arm2.setAnimation("arm");
    fireMissile(power);
    power = 0;
  }

}

function thrust() {
  leg1.rotationSpeed = 0;
  leg2.rotationSpeed = 0;
  arm1.rotationSpeed = 0;
  leg1.setAnimation("rocket");
  leg2.setAnimation("rocket");
  leg2.rotation = -20;
  leg1.rotation = 10;
  boost = true;
  energy -= 0.25             ;
}

function run() {
  arm1.rotationSpeed = 10;
  leg1.rotationSpeed = 10;
  leg2.rotationSpeed = -10;
}

function movementIllusion() {
  updateWall(wall1);
  updateWall(wall2);
  
  badGuy.velocityX = speed-1;
  powerup.velocityX = speed+1;
  wall1.velocityX = speed;
  wall2.velocityX = speed;
}

function updateWall(sprite) {
  sprite.x = (sprite.x+400)%400;
}

function drawInfo() {
  fill('grey');
  textSize(20);
  text('up - thrust, right - boost, left - glide', 10, 80);
  text('hold space - charge, release space - fire', 10, 100);
  strokeWeight(50);
  stroke('grey');
  line(0, 25, 400, 25);
  strokeWeight(40);
  line(0, 380, 400, 380);
  strokeWeight(10);
  stroke(rgb(15, 234, 255));
  line(0, 10, energy/2, 10);
  stroke('red');
  line(0, 25, health*4, 25);
  stroke('lime');
  line(0, 40, power*8, 40);
  
  if (World.seconds - startTime >= 3){
    textSprite.visible = false;
  }
  else{
    textSprite.visible = true;
    fill("#ffcc00");
    stroke("#bf9900");
    strokeWeight(10);
    textSize(50);
    text(3 - World.seconds + startTime, 200, 275);
  }
  
  stroke('black');
  strokeWeight(0);
  textSize(20);
  fill('#bb1616');
  text('IRON MAN RUN', 20, 380);
  fill("red");
  text('P', 200, 380);
  fill("orange");
  text('I', 215, 380);
  fill("yellow");
  text('X', 220, 380);
  fill("green");
  text('E', 235, 380);
  fill("cyan");
  text('L', 250, 380);
  fill("blue");
  text('A', 260, 380);
  fill("rgb(148,0,211)");
  text('R', 275, 380);
  fill("magenta");
  text('T', 290, 380);
  fill("rgb(220,220,220)");
  text('STUDIOS', 305, 380);
  
}

function drawLasers() {
  obstacleX = (obstacleX + speed + 400) % 400;
  stage += 1;
  strokeWeight(10);
  stroke("red");
  line(obstacleX, 55, obstacleX, 55+stage);
  line(obstacleX, 385, obstacleX, 385-stage);
  stroke('white');
  strokeWeight(5);
  line(obstacleX, 55, obstacleX, 55+stage);
  line(obstacleX, 385, obstacleX, 385-stage);
  
  if (stage >= 165) {
    stage = -1;
  }
  
  if ((body.y+20>385-stage || body.y-40<55+stage)&& 110 > obstacleX && 90 < obstacleX) {
    health -= 1;
  }
}

function fireMissile(num) {
  if (! pm1.visible && energy > num/2) {
    energy -= power/2;
    pm1.y = body.y;
    pm1.x = body.x;
    pm1.visible = true;
    pm1.velocityX = 10;
    pm1.power = num;
  }
  else if (! pm2.visible && energy > num/2) {
    energy -= power/2;
    pm2.y = body.y;
    pm2.x = body.x;
    pm2.visible = true;
    pm2.velocityX = 10;
    pm2.power = num;
  }
  else if (! pm3.visible && energy > num/2) {
    energy -= power/2;
    pm3.y = body.y;
    pm3.x = body.x;
    pm3.visible = true;
    pm3.velocityX = 10;
    pm3.power = num;
  }
  else if (! pm4.visible && energy > num/2) {
    energy -= power/2;
    pm4.y = body.y;
    pm4.x = body.x;
    pm4.visible = true;
    pm4.velocityX = 10;
    pm4.power = num;
  }
  else if (! pm5.visible && energy > num/2) {
    energy -= power/2;
    pm5.y = body.y;
    pm5.x = body.x;
    pm5.visible = true;
    pm5.velocityX = 10;
    pm5.power = num;
  }
}

function updateMissile(sprite) {
  if (sprite.isTouching(badGuy)) {
    badGuy.hp -= sprite.power;
    health += 5;
    energy += 5;
  }
  
  if (sprite.x > 400 || sprite.isTouching(badGuy)) {
    sprite.visible = false;
    sprite.power = 0;
    sprite.velocityX = 0;
    sprite.x = -100;
  }
}

function randomAnimation() {
  var number = randomNumber(1,2);
  if (number == 1) {
    powerup.name = 'energy';
    powerup.setAnimation("energyPowerup");
  }
  else if (number == 2) {
    powerup.name = 'health';
    powerup.setAnimation("healthPowerup");
  }
}

function updatePowerup() {
  if (ironMan.isTouching(powerup)) {
    if (powerup.name == 'health'){
      health += 10;
      resetPowerup();
      playSound("assets/category_collect/vibrant_game_positive_item_2.mp3");
    }
    else if (powerup.name == 'energy'){
      energy += 20;
      resetPowerup();
      playSound("assets/category_collect/vibrant_game_positive_item_2.mp3");
    }
  }
  if (powerup.x < 0) {
    resetPowerup();
  }
}

function resetPowerup() {
  powerup.x = 1000;
  powerup.y = randomNumber(100, 320);
  randomAnimation();
}

function updateEnemy() {
  if (badGuy.x < 0 || badGuy.hp <= 0) {
    badGuy.x = 500;
    badGuy.y = randomNumber(100, 300);
    badGuy.hp = 50;
  }
  if (ironMan.isTouching(badGuy)) {
    health -= 0.5;
  }
}

// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};
