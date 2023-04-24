const form = document.querySelector('form');
const input = document.querySelector('input');
const compliment = document.getElementById('compliment');

const compliments = [
  "You are absolutely beautiful.",
  "Your smile is contagious.",
  "You have a great sense of humor.",
  "You are a fantastic listener.",
  "You inspire me to be a better person.",
  "You are so talented and creative.",
  "You have a heart of gold.",
  "You are truly amazing."
];

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const name = input.value.trim();
  if (name === "") {
    return;
  }
  const randomCompliment = compliments[Math.floor(Math.random() * compliments.length)];
  compliment.textContent = `${name}, ${randomCompliment}`;
  form.reset();
});
