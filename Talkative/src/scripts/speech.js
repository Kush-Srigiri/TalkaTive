// Globale Variablen für Sprachfunktionen
let speechRec;
let speechSynth;
let lastSaidWord = "";
let isListening = false;

// Liste von Spielwörtern (z. B. Farben-Modus)
const wordList = ["red", "blue", "green", "yellow"];

// Sprachsynthese-Objekt vorbereiten
function setupSpeech() {
  speechSynth = new p5.Speech();
  speechRec = new p5.SpeechRec('en-US', gotSpeech); // Callback-Funktion
  speechRec.continuous = false;
  speechRec.interimResults = false;
}

// Text laut aussprechen
function speakWord(word) {
  lastSaidWord = word.toLowerCase();
  speechSynth.speak(word);
}

// Sprachaufnahme starten
function startListening() {
  isListening = true;
  speechRec.start();
}

// Callback: Was hat der Nutzer gesagt?
function gotSpeech() {
  if (speechRec.resultValue) {
    let userWord = speechRec.resultString.toLowerCase().trim();
    console.log("Gesagt: " + userWord);

    if (userWord === lastSaidWord) {
      alert("Richtig! Du hast \"" + userWord + "\" gesagt!");
    } else {
      alert("Falsch! Erwartet war \"" + lastSaidWord + "\", aber du sagtest \"" + userWord + "\".");
    }
  }
  isListening = false;
}
