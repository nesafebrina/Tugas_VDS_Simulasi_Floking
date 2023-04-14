const flock = []; //array yg akan diisikan banyak kendaraan
let alignSlider, cohesionSlider, separationSlider;
let population;

let mobil
let kota

function preload(){
  mobil = loadImage("mobil.png")
  kota = loadImage("kota.jpg")
}

function setup() {
  createCanvas(800, 400);
  //createSlider(min, max, nilai_skrg, jarak antar nilai)
  alignSlider = createSlider(0,5,1,0.1);
  cohesionSlider = createSlider(0,5,1,0.1);
  separationSlider = createSlider(0,5,1,0.1);
  
  //menambahkan jumlah populasi 
  p = createInput(10)
  p.position(2, 25)
  p.changed(population)
  
  population ();
  
function population(){
  pop = (p.value())
  for (let i=0; i<pop;i++){
    flock.push(new Boid());
  }
 }
}

function draw() {
  image(kota, 0, 0, 800, 400)
  //background(20);
  fill("orange")
  stroke(1)
  text("Input Jumlah Populasi Yang Ingin Ditambahkan", 2, 15)
  text("AlignSlider", 2, 395)
  text("CohesionSlider", 140, 395)
  text("SeparationSlider", 270, 395)
  
  
  for (let boid of flock){
    fill("white")
    rect(600, 0, 200, 500);
    fill("blue")
    stroke(0)
    text("TUGAS MATA KULIAH", 642, 30)
    text("VISUAL STUDIO CODE", 640, 50)
    text("SIMULASI FLOCKING", 645, 80)
    
    text("Nama : Nesa Febrina Wulandari", 645, 150)
    text("NIM    : 121160072", 645, 180)
    
    boid.edges();
    boid.flock(flock)
    boid.update();
    boid.show();
    
  }
}