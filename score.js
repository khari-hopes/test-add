document.addEventListener("DOMContentLoaded", function() {
  const scores = JSON.parse(localStorage.getItem("scores")) || [];

  // Sort scores in descending order
  scores.sort((a, b) => b.score - a.score);

  const scoreList = document.getElementById("score-list");

  if (scores.length === 0) {
      const noScoresRow = document.createElement("tr");
      noScoresRow.innerHTML = "<td colspan='2'>No scores yet</td>";
      scoreList.appendChild(noScoresRow);
  } else {
      for (let i = 0; i < scores.length; i++) {
          const score = scores[i];
          const row = document.createElement("tr");
          row.innerHTML = `<td>${i + 1}</td><td>${score.score}</td>`;
          scoreList.appendChild(row);
      }
  }
});
