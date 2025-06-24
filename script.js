// Matrix Rain Effect
const canvas = document.getElementById("matrix");
const ctx = canvas.getContext("2d");
const audio = document.getElementById('bg-music');
const btn = document.getElementById('toggle-music');

canvas.height = window.innerHeight;
canvas.width = window.innerWidth;

let letters = "01".split("");
let fontSize = 14;
let columns = canvas.width / fontSize;

let drops = Array.from({ length: columns }, () => 1);

document.addEventListener('keydown', () => {
    const boot = document.getElementById('boot-screen');
    if (boot) boot.remove();
}, { once: true });

function draw() {
    ctx.fillStyle = "rgba(0, 0, 0, 0.05)";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = "#0f0";
    ctx.font = fontSize + "px monospace";

    for (let i = 0; i < drops.length; i++) {
        let text = letters[Math.floor(Math.random() * letters.length)];
        ctx.fillText(text, i * fontSize, drops[i] * fontSize);
        
        if (drops[i] * fontSize > canvas.height && Math.random() > 0.975)
          drops[i] = 0;
      
        drops[i]++;
    }
}

setInterval(draw, 33);

// Terminal Logic
const output = document.getElementById("output");
const input = document.getElementById("command");

const commands = {
  help: `Dostępne komendy:
  - whoami
  - projects
  - github
  - contact
  - clear
  - cv`,

    whoami: "Jestem studentem trzeciego roku innformatyki na Politechnice Poznańskiej. Szukam możliwości rozwoju zawodowego w branży IT.",
  
    projects:  `1. WatherTrack - https://github.com/Klaudiusz25/WeatherTrack
                2. MixIt - https://github.com/Klaudiusz25/MixIt`,

    github: "https://github.com/Klaudiusz25",

    contact: `Skontaktuj się przez email: klaudiuszkazmierowski@gmail.com`,

    cv: `Pobierz moje CV: <a href="CV_Klaudiusz_Kazmierowski.pdf" target="_blank">Kliknij tutaj</a>`,

};

input.addEventListener("keydown", function (e) {
    if (e.key === "Enter") {
        const cmd = input.value.trim().toLowerCase();
        printLine("> " + cmd);
        
        if (cmd === "clear") {
            output.innerHTML = "";
        } else if (cmd === "sudo") {
            printLine("Nie masz wystarczających uprawnień do użycia tej komendy.");
        } else if (cmd === "sudo rm -rf /") {
            printLine("💀 System self-destruct in 3...");
            setTimeout(() => printLine("2..."), 1000);
            setTimeout(() => printLine("1..."), 2000);
            setTimeout(() => {
                document.body.innerHTML = "<h1 style='color:red;text-align:center;'>💥 BOOM 💥</h1>";
          }, 3000);
        } else if (commands[cmd]) {
            printLine(commands[cmd]);
        } else {
            printLine("Nieznana komenda. Wpisz 'help' aby zobaczyć dostępne.");
        }
      
        input.value = "";
    }
});

function printLine(text) {
    const line = document.createElement("pre");
    line.innerHTML = text;
    output.appendChild(line);
    window.scrollTo(0, document.body.scrollHeight);
}

const quotes = [
    "Hacking is not a crime.",
    "There is no cloud. It's just someone else's computer.",
    "Accessing encrypted node...",
    "root@localhost:~# wake up, Neo."
];

printLine(quotes[Math.floor(Math.random() * quotes.length)]);


btn.addEventListener('click', () => {
  if (audio.paused) {
    audio.play();
    btn.textContent = '🔇 Wyłącz muzykę';
  } else {
    audio.pause();
    btn.textContent = '🎵 Włącz muzykę';
  }
});

