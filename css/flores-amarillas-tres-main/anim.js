// Sincronizar las letras con la canción
var audio = document.querySelector("audio");
var lyrics = document.querySelector("#lyrics");

// Array de objetos que contiene cada línea y su tiempo de aparición en segundos
var lyricsData = [
  { text: "I remember when I first noticed that you liked me back", time: 40 },
  { text: "We were sitting down in a restaurant waiting for the check", time: 51 },
  { text: "We had made love earlier that day with no strings attached", time: 61 },
  { text: "But I could tell that something had changed how you looked at me then", time: 71 },
  { text: "Kristen, come right back", time: 81 },
  { text: "I've been waiting for you", time: 87 },
  { text: "To slip back in bed", time: 91 },
  { text: "When you light the candle", time: 96 },
  { text: "And on the Lower East Side, you're dancing with me now", time: 123 },
  { text: "And I'm taking pictures of you with flowers on the wall", time: 134 },
  { text: "Think I like you best when you're dressed in black from head to toe", time: 144 },
  { text: "Think I like you best when you're just with me and no one else", time: 154 },
  { text: "Kristen, come right back", time: 164 },
  { text: "I've been waiting for you", time: 170 },
  { text: "To slip back in bed", time: 174 },
  { text: "When you light the candle", time: 179 },
  { text: "And I'm kissing you lying in my room", time: 205 },
  { text: "Holding you until you fall asleep", time: 217 },
  { text: "And it's just as good as I knew it would be", time: 220 },
  { text: "Stay with me, I don't want you to leave", time: 238 },
  { text: "Kristen, come right back", time: 266 },
  { text: "I've been waiting for you", time: 273 },
  { text: "To slip back in bed", time: 276 },
  { text: "When you light the candle", time: 282 },
];

// Animar las letras
function updateLyrics() {
  var time = Math.floor(audio.currentTime);
  var currentLine = lyricsData.find(
    (line) => time >= line.time && time < line.time + 9
  );

  if (currentLine) {
    // Calcula la opacidad basada en el tiempo en la línea actual
    var fadeInDuration = 0.1; // Duración del efecto de aparición en segundos
    var opacity = Math.min(1, (time - currentLine.time) / fadeInDuration);

    // Aplica el efecto de aparición
    lyrics.style.opacity = opacity;
    lyrics.innerHTML = currentLine.text;
  } else {
    // Restablece la opacidad y el contenido si no hay una línea actual
    lyrics.style.opacity = 0;
    lyrics.innerHTML = "";
  }
}

setInterval(updateLyrics, 1000);

//funcion titulo
// Función para ocultar el título después de 216 segundos
function ocultarTitulo() {
  var titulo = document.querySelector(".titulo");
  titulo.style.animation =
    "fadeOut 3s ease-in-out forwards"; /* Duración y función de temporización de la desaparición */
  setTimeout(function () {
    titulo.style.display = "none";
  }, 3000); // Espera 3 segundos antes de ocultar completamente
}

// Llama a la función después de 216 segundos (216,000 milisegundos)
setTimeout(ocultarTitulo, 216000);