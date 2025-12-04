const words = [
    { word: 'PENGUIN', image: 'images/penguin.JPEG' },
    { word: 'CROCODILES', image: 'images/CROCODILES.JPEG' },
    { word: 'KANGAROO', image: 'images/kangaroo.JPEG' },
    { word: 'ZEBRA', image: 'images/zebra.JPEG' },
    { word: 'LION', image: 'images/lion.JPEG' },
    { word: 'ELEPHANT', image: 'images/elephant.JPEG' },
    { word: 'GIRAFFE', image: 'images/giraffe.JPEG' },
    { word: 'HYENA', image: 'images/hyena.JPEG' },
    { word: 'CHIMPANZEE', image: 'images/chimpanzee.JPEG' },
    { word: 'GORILLA', image: 'images/gorilla.JPEG' },
    { word: 'MONKEY', image: 'images/monkey.JPEG' },
    { word: 'LEMUR', image: 'images/lemur.JPEG' },
    { word: 'KOALA', image: 'images/koala.JPEG' },
    { word: 'SLOTH', image: 'images/sloth.JPEG' },
    { word: 'RACCOON', image: 'images/raccoon.JPEG' },
    { word: 'OTTER', image: 'images/otter.JPEG' },
    { word: 'SEAL', image: 'images/seal.JPEG' },
    { word: 'WALRUS', image: 'images/walrus.JPEG' },
    { word: 'BEAR', image: 'images/bear.JPEG' },
    { word: 'WOLF', image: 'images/wolf.JPEG' },
    { word: 'FOX', image: 'images/FOX.JPEG' },
    { word: 'RABBIT', image: 'images/RABBIT.JPEG' },
    { word: 'DEER', image: 'images/deer.JPEG' },
    { word: 'MOUSE', image: 'images/mouse.JPEG' },
    { word: 'REINDEER', image: 'images/reindeer.JPEG' },
    { word: 'TIGER', image: 'images/tiger.JPEG' },
    { word: 'LEOPARD', image: 'images/leopard.JPEG' }
];

let currentAnimal = words[Math.floor(Math.random() * words.length)];
let currentWord = currentAnimal.word;
const wordLength = currentWord.length;
const maxWrongGuesses = 6;
let guessedLetters = [];
let incorrectGuesses = 0;

const wordContainer = document.querySelector('.word');
const guessesContainer = document.querySelector('.guesses');
const messageContainer = document.querySelector('.message');
const lettersContainer = document.querySelector('.letters');
const animalImageContainer = document.querySelector('.animal-image');

function initGame() {
    guessedLetters = new Array(wordLength).fill('_');
    incorrectGuesses = 0;

    // Display animal image
    animalImageContainer.innerHTML = `<img src="${currentAnimal.image}" alt="${currentAnimal.word}">`;
    
    updateWordDisplay();
    updateIncorrectGuessesDisplay();
    generateLetterButtons();
}

function updateWordDisplay() {
    wordContainer.textContent = guessedLetters.join(' ');
}

function updateIncorrectGuessesDisplay() {
    guessesContainer.textContent = `Incorrect guesses: ${incorrectGuesses}`;
}

function generateLetterButtons() {
    const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    lettersContainer.innerHTML = '';

    for (const letter of alphabet) {
        const button = document.createElement('button');
        button.classList.add('letter');
        button.textContent = letter;
        button.addEventListener('click', () => handleGuess(letter));
        lettersContainer.appendChild(button);
    }
}

function handleGuess(letter) {
    if (guessedLetters.includes(letter)) {
        return;
    }

    const wordIndex = currentWord.indexOf(letter);
    if (wordIndex !== -1) {
        for (let i = 0; i < wordLength; i++) {
            if (currentWord[i] === letter) {
                guessedLetters[i] = letter;
            }
        }
    } else {
        incorrectGuesses++;
        updateIncorrectGuessesDisplay();
    }

    updateWordDisplay();
    checkWinOrLose();
}

function checkWinOrLose() {
    if (guessedLetters.join('') === currentWord) {
        messageContainer.textContent = 'Congratulations! You won!';
    } else if (incorrectGuesses >= maxWrongGuesses) {
        messageContainer.textContent = 'Game over! The word was ' + currentWord;
    }
}

initGame();
