import Phaser from 'phaser';
import { startSpeechRecognition } from './speech';

let currentWord = 'blue';

const config = {
  type: Phaser.AUTO,
  width: 800,
  height: 600,
  scene: {
    preload,
    create,
    update
  }
};

let wall;

function preload() {
  this.load.image('wall', '/wall.png'); // Pfad anpassen!
}

function create() {
  wall = this.add.image(400, -200, 'wall');
  startSpeechRecognition((word) => {
    if (word.includes(currentWord)) {
      wall.y = -200; // Wand zurücksetzen
    }
  });
}

function update() {
  wall.y += 1.5;
}

new Phaser.Game(config);
