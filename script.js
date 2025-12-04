const words = [
    { word: 'PENGUIN', image: 'images/penguin.jpeg' },
    { word: 'CROCODILES', image: 'images/CROCODILES.jpeg' },
    { word: 'KANGAROO', image: 'images/kangaroo.jpeg' },
    { word: 'ZEBRA', image: 'images/zebra.jpeg' },
    { word: 'LION', image: 'images/lion.jpeg' },
    { word: 'ELEPHANT', image: 'images/elephant.jpeg' },
    { word: 'GIRAFFE', image: 'images/giraffe.jpeg' },
    { word: 'HYENA', image: 'images/hyena.jpeg' },
    { word: 'CHIMPANZEE', image: 'images/chimpanzee.jpeg' },
    { word: 'GORILLA', image: 'images/gorilla.jpeg' },
    { word: 'MONKEY', image: 'images/monkey.jpeg' },
    { word: 'LEMUR', image: 'images/lemur.jpeg' },
    { word: 'KOALA', image: 'images/koala.jpeg' },
    { word: 'SLOTH', image: 'images/sloth.jpeg' },
    { word: 'RACCOON', image: 'images/raccoon.jpeg' },
    { word: 'OTTER', image: 'images/otter.jpeg' },
    { word: 'SEAL', image: 'images/seal.jpeg' },
    { word: 'WALRUS', image: 'images/walrus.jpeg' },
    { word: 'BEAR', image: 'images/bear.jpeg' },
    { word: 'WOLF', image: 'images/wolf.jpeg' },
    { word: 'FOX', image: 'images/FOX.jpeg' },
    { word: 'RABBIT', image: 'images/RABBIT.jpeg' },
    { word: 'DEER', image: 'images/deer.jpeg' },
    { word: 'MOUSE', image: 'images/mouse.jpeg' },
    { word: 'REINDEER', image: 'images/reindeer.jpeg' },
    { word: 'TIGER', image: 'images/tiger.jpeg' },
    { word: 'LEOPARD', image: 'images/leopard.jpeg' }
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