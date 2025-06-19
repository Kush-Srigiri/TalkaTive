import Phaser from 'phaser';
import { startSpeechRecognition, speakWord } from '../scripts/speech.js';


let currentWord = 'blue';
let words = [];
let wall;
let alreadyCorrect = false;

// Wortlisten je Level
const levelWords = {
  Colors: ["red", "blue", "green", "yellow"],
  Animals: ["dog", "cat", "cow"],
  Food: ["apple", "banana", "aubergine"]
};

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

window.startListening = () => {
  startSpeechRecognition((word) => {
    console.log("🎤 Wort erkannt:", word);
  });
};

function preload() {
  this.load.image('wall', '/wall.png'); // Pfad ggf. anpassen
}

function create() {
  // Level aus URL holen
  const params = new URLSearchParams(window.location.search);
  const currentLevel = params.get('level') || 'Colors';
  words = levelWords[currentLevel];
  currentWord = Phaser.Utils.Array.GetRandom(words);

  // Symbol anzeigen
  wall = this.add.image(400, -200, 'wall');

  // Wort sprechen
  speakWord(currentWord);

  // Spracherkennung starten
  startSpeechRecognition((word) => {
    if (alreadyCorrect) return;

    // Gesagtes Wort passt zum aktuellen?
    if (word.includes(currentWord)) {
      wall.y = -200; // Wand zurück nach oben
      alreadyCorrect = true;

      setTimeout(() => {
        currentWord = Phaser.Utils.Array.GetRandom(words);
        speakWord(currentWord);
        alreadyCorrect = false;
      }, 1000);
    } else {
      wall.y = 300; // Wand bleibt in der Mitte stehen
    }
  });
}

startSpeechRecognition((word) => {
  if (word.includes(currentWord)) {
    wall.y = -200; // Wand zurücksetzen
  }
});


function update() {
  wall.y += 1.5;
}

new Phaser.Game(config);
