// Flocking
// Daniel Shiffman
// https://thecodingtrain.com/CodingChallenges/124-flocking-boids.html
// https://youtu.be/mhjuuHl6qHM

const flock = [];

let alignSlider,
  cohesionSlider,
  separationSlider,
  maxSpeedSlider,
  maxForceSlider,
  perceptionRadiusSlider;
let alignSpan,
  cohesionSpan,
  separationSpan,
  maxSpeedSpan,
  maxForceSpan,
  perceptionRadiusSpan;

function setup() {
  createCanvas(1200, 800);
  let rulesDiv = createDiv();
  alignSpan = createSpan("Alignment: ");
  alignSlider = createSlider(0, 2, 1.5, 0.1);
  alignSlider.size(75);
  cohesionSpan = createSpan("Cohesion: ");
  cohesionSlider = createSlider(0, 2, 1, 0.1);
  cohesionSlider.size(75);
  separationSpan = createSpan("Separation: ");
  separationSlider = createSlider(0, 2, 2, 0.1);
  separationSlider.size(75);
  alignSpan.parent(rulesDiv);
  alignSlider.parent(rulesDiv);
  cohesionSpan.parent(rulesDiv);
  cohesionSlider.parent(rulesDiv);
  separationSpan.parent(rulesDiv);
  separationSlider.parent(rulesDiv);

  let paramsDiv = createDiv();
  maxSpeedSpan = createSpan("Max Speed: ");
  maxSpeedSlider = createSlider(0, 10, 5, 0.1);
  maxSpeedSlider.size(75);
  maxForceSpan = createSpan("Max Force: ");
  maxForceSlider = createSlider(0, 1, 0.2, 0.01);
  maxForceSlider.size(75);
  perceptionRadiusSpan = createSpan("Perception R: ");
  perceptionRadiusSlider = createSlider(0, 100, 25, 1);
  perceptionRadiusSlider.size(75);
  maxSpeedSpan.parent(paramsDiv);
  maxSpeedSlider.parent(paramsDiv);
  maxForceSpan.parent(paramsDiv);
  maxForceSlider.parent(paramsDiv);
  perceptionRadiusSpan.parent(paramsDiv);
  perceptionRadiusSlider.parent(paramsDiv);

  for (let i = 0; i < 300; i++) {
    flock.push(new Boid());
  }
}

function draw() {
  background(0);
  for (let boid of flock) {
    boid.edges();
    boid.flock(flock);
    boid.update();
    boid.show();
  }

  let colors = [];
  colorMode(HSB, 255);
  for (let i = 0; i < flock.length; i += 3) {
    let r = map(flock[i].velocity.mag(), 0, 5, 0, 255);
    let g = map(flock[i + 1].velocity.mag(), 0, 5, 0, 255);
    let b = map(flock[i + 2].velocity.mag(), 0, 5, 0, 255);
    colors.push(color(r, g, b));
  }

  let w = width / colors.length;
  let h = 100;
  colors.sort((a, b) => hue(a) - hue(b));
  for (let i = 0; i < colors.length; i++) {
    let c = colors[i];
    fill(c);
    noStroke();
    rect(i * w, height - h, w, h);
  }
}
