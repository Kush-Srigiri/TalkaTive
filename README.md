# TalkaTive 🗣️🎮

TalkaTive is an interactive voice-controlled game where your spoken words control the action. Speak the right words or match tones to move your character through challenging obstacles.

---

## 📑 Table of Contents
1. [Gameplay](#-gameplay)
2. [Features](#-features)
3. [Prerequisites](#-prerequisites)
4. [Installation](#installation)
5. [NPM Scripts](#-npm-scripts)
6. [Tech Stack & Speech Recognition](#-tech-stack--speech-recognition)
7. [Built by](#-built-by)

---

### 🎯 Gameplay
- **Talk to move:** say the matching word or hit the requested pitch.
- The wall opens – the avatar runs forward.
- Three modes: **Colors · Animals · Food**.


---

### 🌟 Features
- Real-time speech recognition  
- Multiple game modes  
- Runs directly in the browser (PWA-ready)  
- Uses the [p5.js-speech](https://idmnyu.github.io/p5.js-speech/) library

---

### 🚀 Prerequisites
| Software      | Version |
| ------------- | ------- |
| **Node.js**   | ≥ 16.x  |
| **npm**       | ≥ 8.x   |
| Modern browser| Mic access enabled |

---

### 🛠️ Installation

```bash
# clone
git clone https://github.com/Kush-Srigiri/TalkaTive.git
cd TalkaTive

# dependencies
npm install

# dev-server
npm run dev          # -> http://localhost:5173
```

---

### 📦 NPM Scripts


| Command           | Purpose                         |
| ----------------- | ------------------------------- |
| `npm run dev`     | Vite dev-server with hot-reload |
| `npm run build`   | Production build (`/dist`)      |
| `npm run preview` | Static preview of the build     |
| `npm run test`    | Cypress end-to-end tests        |

---

### 🎤 Tech Stack & Speech Recognition

- p5.js-speech (Web Speech API wrapper) → real-time voice input

- p5.js – canvas rendering

---

### 👨‍💻 Built by

Kush Srigiri & Alessio Huber  
BMSD23ab Module M306

<a href="https://github.com/kush-srigiri/pss/graphs/contributors">
  <img src="https://contrib.rocks/image?&columns=25&max=10000&&repo=kush-srigiri/talkative" />
</a>


---
🔊 Just speak to play — TalkaTive listens!
