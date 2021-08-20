var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":["52382a06-7b86-4369-94c1-375d9ea00991","13af62a5-1c9e-4c39-8bc1-19de6b326934","c91339fe-55a3-4670-90fe-c1d79c96ca6f"],"propsByKey":{"52382a06-7b86-4369-94c1-375d9ea00991":{"name":"spacebattle_07_1","sourceUrl":"assets/api/v1/animation-library/gamelab/oe91580NRX_lq0_AXmFgzqY7HFhJ5gkQ/category_retro/spacebattle_07.png","frameSize":{"x":380,"y":398},"frameCount":1,"looping":true,"frameDelay":2,"version":"oe91580NRX_lq0_AXmFgzqY7HFhJ5gkQ","categories":["retro"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":380,"y":398},"rootRelativePath":"assets/api/v1/animation-library/gamelab/oe91580NRX_lq0_AXmFgzqY7HFhJ5gkQ/category_retro/spacebattle_07.png"},"13af62a5-1c9e-4c39-8bc1-19de6b326934":{"name":"dagger_1","sourceUrl":null,"frameSize":{"x":220,"y":398},"frameCount":1,"looping":true,"frameDelay":12,"version":"sFDluRiL1gx7uUokTURMEprcS6Dj8ePt","categories":["video_games"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":220,"y":398},"rootRelativePath":"assets/13af62a5-1c9e-4c39-8bc1-19de6b326934.png"},"c91339fe-55a3-4670-90fe-c1d79c96ca6f":{"name":"background_landscape09_1","sourceUrl":"assets/api/v1/animation-library/gamelab/T167cO7veEolJu4MdK3thTgLhnqD_rJB/category_backgrounds/background_landscape09.png","frameSize":{"x":400,"y":399},"frameCount":1,"looping":true,"frameDelay":2,"version":"T167cO7veEolJu4MdK3thTgLhnqD_rJB","categories":["backgrounds"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":400,"y":399},"rootRelativePath":"assets/api/v1/animation-library/gamelab/T167cO7veEolJu4MdK3thTgLhnqD_rJB/category_backgrounds/background_landscape09.png"}}};
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

var life = 0;

var car1, car2, car3,car4;
var boundary1, boundary2;
var sam;

  boundary1 = createSprite(190,120,420,3);
  boundary2 = createSprite(190,260,420,3);
  
  sam = createSprite(20,190,13,13);
  sam.shapeColor = "green";
  sam.setAnimation("spacebattle_07_1")
  sam.scale = 0.10
  
  car1 = createSprite(100,130,10,10);
  car1.shapeColor = "red";
  car1.setAnimation("dagger_1")
  car1.scale =0.05
  car2 = createSprite(215,130,10,10);
  car2.shapeColor = "red";
  car2.setAnimation("dagger_1")
  car2.scale = 0.05
  car3 = createSprite(165,250,10,10);
  car3.shapeColor = "red";
  car3.setAnimation("dagger_1")
  car3.scale = 0.05
  car4 = createSprite(270,250,10,10);
  car4.shapeColor = "red";
  car4.setAnimation("dagger_1")
  car4.scale = 0.05
  
 
//add the velocity to make the car move.
car1.velocityY = 5
car2.velocityY = 5
car3.velocityY = 5
car4.velocityY = 5
function draw() {
   background("maroon");
  text("Lives: " + life,200,100);
  strokeWeight(0);
  fill("lightblue");
  rect(0,120,52,140);
  fill("yellow");
  rect(345,120,52,140);
  
// create bounceoff function to make the car bounceoff the boundaries
createEdgeSprites()
car1.bounceOff(boundary1)
car1.bounceOff(boundary2)
car2.bounceOff(boundary1)
car2.bounceOff(boundary2)
car3.bounceOff(boundary1)
car3.bounceOff(boundary2)
car4.bounceOff(boundary1)
car4.bounceOff(boundary2)
//Add the condition to make the sam move left and right
if (keyDown("right")) {
  sam.x=sam.x+10
}
if (keyDown("left")) {
  sam.x=sam.x-10
}

//Add the condition to reduce the life of sam if it touches the car.
  if (sam.isTouching(car1)) {
    life = life+1
    sam.x=40
    sam.y=190
  }
  if (sam.isTouching(car2)) {
    life = life+1
    sam.x=40
    sam.y=190
  }if (sam.isTouching(car3)) {
    life = life+1
    sam.x=40
    sam.y=190
  }if (sam.isTouching(car4)) {
    life = life+1
    sam.x=40
    sam.y=190
  }
  if (sam.x>350) {
  text("YOU WIN",200,200)
  car1.velocityY = 0
car2.velocityY = 0
car3.velocityY = 0
car4.velocityY = 0
}

    
  
  
 drawSprites();
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
