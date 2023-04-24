const form = document.querySelector('form');
const input = document.querySelector('input');
const compliment = document.getElementById('compliment');

const compliments = [
  "Keep pushing yourself - success is just around the corner.",
  "Every setback is an opportunity to learn and grow stronger.",
  "Success is not about being the best, it's about being better than you were yesterday.",
  "Success is not final, failure is not fatal - it's the courage to continue that counts.",
  "Be grateful for what you have while working for what you want.",
  "Focus on progress, not perfection.",
  "Your determination and perseverance will overcome any obstacle.",
  "Take ownership of your life and create the future you desire."
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
