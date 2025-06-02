function setup() {
  noCanvas(); // Kein Zeichenbereich nötig
  setupSpeech(); // Sprachsystem initialisieren

  // Wenn Start-Button geklickt wird:
  const startBtn = select('#start-btn');
  startBtn.mousePressed(startGame);

  // Optional: Gamemode-Buttons verarbeiten (Colors, Animals, etc.)
}

function startGame() {
  if (isListening) return;

  // Zufälliges Wort auswählen und sprechen
  const randomIndex = floor(random(wordList.length));
  const randomWord = wordList[randomIndex];

  speakWord(randomWord);

  // Warte kurz, bevor das Mikro startet
  setTimeout(() => {
    startListening();
  }, 1500); // 1,5 Sekunden warten, damit das Wort erst gesprochen wird
}
