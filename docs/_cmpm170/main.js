title = "Harry's Game";

description = ``;

characters = [
`
   l
  lll
 lllll
 rgrgr
 rrgrr
 rrrrr 
`,
];

options = {};

let shapes

let pins;
let rodPin
let rod;
let powerBar;
let mainCharacter;
let nextPinDist;
const rodLength = 7;
let powerBarLength = 25;

function update() {
  if (!ticks) {
    pins = [vec(5,50)]
    rodPin = [vec]
    nextPinDist = 15;
    rod = {angle: 0, length: rodLength, pin: vec(50, 70)}
    powerBar = {angle: 140, length: powerBarLength, pin: vec(10, 70)}
  }
  mainCharacter = char("a", 50, 95);  //50 for middle page 95 for bottom screen
  // arc(40, 95, 30, 3, 0, -1)


  let mouse = input.pos

  if (input.isJustPressed) {
    rod.length += 50;
    //rod.pi = input.pos;
  } else {
    rod.length += (rodLength - rod.length) * 0.1;
  }

  // if()
 
  rod.angle += 0.05
  
  
  line(rod.pin, vec(rod.pin).addWithAngle(rod.angle, rod.length));
 
  // line(powerBar.pin, vec(powerBar.pin).addWithAngle(powerBar.angle, powerBar.length));

// if(fished == false && powerSet == false){
  // if(input.isPressed){
  //   powerBar.length -=1
  //   if(powerBar.length <= 0){
  //     powerBar.length = 25;
  //   }
  // }


  let distanceX = 0.2;
  remove(pins, (p) => {
    p.x += distanceX;
    box(p, 3);
    if(box(p,3).isColliding.rect.black && p != rod.pin){
      console.log("ddds")
    }
    return p.x > 102;
  });

  nextPinDist -= distanceX;
  while (nextPinDist < 0) {
    pins.push(vec(-2 - nextPinDist, rnd(10, 60)));
    nextPinDist += rnd(20, 50);
  }
}