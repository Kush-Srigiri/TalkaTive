let speechRec;
let speechSynth;

export function startSpeechRecognition(callback) {
  console.log("🎤 Initialisiere Spracherkennung...");

  if (!speechSynth) speechSynth = new p5.Speech();
  speechRec = new p5.SpeechRec('en-US', () => {});

  speechRec.continuous = true;
  speechRec.interimResults = false;

  const textOutput = document.getElementById("speech-output");

  speechRec.onResult = function () {
    console.log("📡 Ergebnis empfangen...");
    if (speechRec.resultValue) {
      const spokenWord = speechRec.resultString.toLowerCase().trim();
      console.log("🎙️ Erkannt:", spokenWord);
      if (textOutput) textOutput.innerText = spokenWord;
      callback(spokenWord);
    } else {
      console.log("⚠️ Kein valides Ergebnis.");
    }
  };

  speechRec.onStart = () => console.log("✅ Spracherkennung gestartet.");
  speechRec.onEnd = () => console.log("🛑 Spracherkennung gestoppt.");
  speechRec.onError = err => console.error("❌ Fehler bei SpeechRec:", err);

  speechRec.start();
}
