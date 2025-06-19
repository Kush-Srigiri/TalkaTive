let speechRec;

function setup() {
  noCanvas(); // Kein Zeichenbereich nötig

  speechRec = new p5.SpeechRec('en-US', gotSpeech); // Callback
  speechRec.continuous = true;
  speechRec.interimResults = false;

  speechRec.onResult = function () {
    const userSaid = speechRec.resultString.toLowerCase().trim();
    console.log("Gesagt:", userSaid);
  };

  speechRec.start(); // Mikrofon starten
}

function gotSpeech() {
  // Wird von p5 intern verwendet
}
