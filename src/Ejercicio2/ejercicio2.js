const fs = require('fs');
let input = fs.readFileSync('./src/Ejercicio2/output_files/ourputfileEj2.txt').toString().trim().split('\n')
let cleanData = input.map(data=>data.replace(/\r/g, ''));
let currentLine = 0;

function readLine() {
    if (currentLine >= cleanData.length) {
      return ""
    }
    return cleanData[currentLine++];
  }
  

function getChampion() {
  while (true) {
    const [G, P] = readLine().split(' ').map(Number);
    if (G === 0 && P === 0) break;

    const results = Array.from({ length: G }, () => readLine().split(' ').map(Number));
    const S = parseInt(readLine(), 10);

    for (let i = 0; i < S; i++) {
      const scoring = readLine().split(' ').map(Number);
      const K = scoring.shift();
      const points = scoring;
      const pilot_points = new Array(P).fill(0);

      for (const race of results) {
        for (let j = 0; j < race.length; j++) {
          const position = race[j];
          if (position <= K) {
            pilot_points[j] += points[position - 1];
          }
        }
      }

      const puntuacionMax = Math.max(...pilot_points);
      const champions = [];
      for (let j = 0; j < P; j++) {
        if (pilot_points[j] === puntuacionMax) {
          champions.push(j + 1);
        }
      }
      console.log(champions.join(' '));
    }
  }
}

getChampion();
