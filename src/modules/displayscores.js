const table = document.getElementById('recent-list');
const url = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/iNLPApgiyuuDUgI7yzuD/scores/';

const getScores = async () => {
  const response = await fetch(url);
  const data = await response.json();
  return data;
};

const displayScores = async () => {
  const scores = await getScores();

  table.innerHTML = '';

  scores.result.forEach((gamer) => {
    const li = document.createElement('li');
    li.classList.add('recent-score');
    li.innerHTML = `${gamer.user}: ${gamer.score}`;
    table.appendChild(li);
  });
};

export { displayScores, getScores };