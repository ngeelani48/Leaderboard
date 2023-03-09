import { displayScores } from './displayscores.js';

const form = document.querySelector('.form');
const refreshBtn = document.getElementById('refresh-btn');
const inputName = document.getElementById('name');
const inputScore = document.getElementById('score');

const url = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/iNLPApgiyuuDUgI7yzuD/scores/';

const uploadScore = async (user, score) => {
  const response = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ user, score }),
  });
  const data = await response.json();
  return data;
};

form.addEventListener('submit', async (event) => {
  event.preventDefault();
  const name = inputName.value;
  const score = inputScore.value;
  await uploadScore(name, score);

  // reset input fields
  inputName.value = '';
  inputScore.value = '';
});

refreshBtn.addEventListener('click', (event) => {
  event.preventDefault();
  displayScores();
});
