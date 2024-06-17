// audio
var audio = new Audio('16113__steffcaffrey__cats/262307__steffcaffrey__cat-happy-purrtwitter2.wav');

function playMusic() {
    audio.play();
}

function stopMusic() {
    audio.pause();
    audio.currentTime = 0;
}

// typewriter-effect
function typeWriter(element, text, delay = 100, callback) {
    let i = 0;
    let direction = 'forward';

    function type() {
        if (direction === 'forward') {
            element.textContent = text.substring(0, i++);
            if (i > text.length) {
                direction = 'backward';
                setTimeout(type, 1000); // Pause after writing
            } else {
                setTimeout(type, delay);
            }
        } else {
            element.textContent = text.substring(0, i--);
            if (i < 0) {
                direction = 'forward';
                setTimeout(type, 1000); // Pause after erasing
            } else {
                setTimeout(type, delay / 2); 
            }
        }
    }

    type();
}

const typewriter1 = document.querySelector(".typewriter1");
typeWriter(typewriter1, "Tiwari");


const typewriter2 = document.querySelector(".typewriter2");
const words = ["web developer", "designer", "coder", "programmer", "tech enthusiast"];
let wordIndex = 0;

function loopWords() {
    typeWriter(typewriter2, words[wordIndex], 80, () => {
        wordIndex = (wordIndex + 1) % words.length;
        setTimeout(loopWords, 1500); // Add a delay before the next word
    });
}

loopWords();