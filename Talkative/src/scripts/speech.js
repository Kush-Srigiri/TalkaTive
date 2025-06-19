let speechRec;
let speechSynth;

function gotSpeech() {
  if (speechRec.resultValue) {
    let userWord = speechRec.resultString.toLowerCase().trim();
    console.log("🎙️ Erkanntes Wort:", userWord); // <- Test!
  }
}

export function startSpeechRecognition(callback) {
  if (!speechSynth) speechSynth = new p5.Speech();
  speechRec = new p5.SpeechRec('en-US', function () {});

  speechRec.continuous = true;
  speechRec.interimResults = false;

  speechRec.onResult = function() {
    if (speechRec.resultValue) {
      const spokenWord = speechRec.resultString.toLowerCase().trim();
      console.log("🎙️ Erkannt:", spokenWord);
      callback(spokenWord); // Das sendet das Wort zurück an main.js
    }
  };

  speechRec.start();
}

export function speakWord(word) {
  if (!speechSynth) speechSynth = new p5.Speech();
  speechSynth.speak(word);
}
