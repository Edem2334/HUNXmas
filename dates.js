const countdownElement = document.getElementById('countdown');
const scoreElement = document.getElementById('score');
const snowmanContainer = document.getElementById('snowman-container');
let score = 0;

// Visszaszámlálás karácsonyig
function updateCountdown() {
  const today = new Date();
  const year = today.getMonth() === 11 && today.getDate() > 25 ? today.getFullYear() + 1 : today.getFullYear();
  const christmas = new Date(`${year}-12-25`);
  const diffTime = christmas - today;
  const daysLeft = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  countdownElement.textContent = daysLeft;
}

// Hóember hozzáadása véletlenszerű helyre
function addSnowman() {
  const snowman = document.createElement('div');
  snowman.classList.add('snowman');
  
  // Véletlen hely meghatározása
  const x = Math.random() * (snowmanContainer.offsetWidth - 50);
  const y = Math.random() * (snowmanContainer.offsetHeight - 50);
  snowman.style.left = `${x}px`;
  snowman.style.top = `${y}px`;
  
  // Hóember kattintás esemény
  snowman.addEventListener('click', () => {
    score++;
    scoreElement.textContent = score;
    snowman.remove();
  });

  snowmanContainer.appendChild(snowman);

  // Hóember eltávolítása néhány másodperc után
  setTimeout(() => snowman.remove(), 5000);
}

// Véletlenszerű időközönként hóemberek megjelenítése
setInterval(addSnowman, 2000);

// Frissítés
setInterval(updateCountdown, 1000);
updateCountdown();