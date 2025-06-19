let speechRec;

function setup() {
  noCanvas();

  speechRec = new p5.SpeechRec('en-US', gotSpeech); // löschen
  speechRec.continuous = true;
  speechRec.interimResults = false;

  speechRec.onResult = function () {
    const userSaid = speechRec.resultString.toLowerCase().trim();
    console.log("Gesagt:", userSaid);
  };

  speechRec.start(); // löschen
}

function gotSpeech() {
  // Wird von p5 intern verwendet
}
