import checkWinnerO from './checkWinnerO.js';
import checkWinnerX from './checkWinnerX.js';
import draw from './draw.js';

//8. Створити гру хрестики-нолики. 
//В одне й те ж місце неможливо повторно встановити значення. 
//Під час гри відображати чий хід. В кінці гри відобразити переможця.

const btnXU = document.getElementById('btnX');
const btn0U = document.getElementById('btn0');

//прив'язка поля до дії
const cells = document.querySelectorAll(".app_block");

//кнопка хто зараз ходе
const userX = document.getElementById('userX');
const user0 = document.getElementById('user0');
userX.style.display = 'none';
user0.style.display = 'none';

//показ переможця
const winX = document.getElementById('winX');
const winO = document.getElementById('winO');
winX.style.display = 'none';
winO.style.display = 'none';

let User;
let UserEnemy;
let countStepU = 0;
let countStepUE = 0;

btnXU.addEventListener('click', () => {
    User = btnXU; // Встановлюємо, що Юзер вибрав "Х"
    UserEnemy = btn0U; // Протилежна кнопка буде "0"
});

// Додаємо обробник подій для кнопки "0"
btn0U.addEventListener('click', () => {
    User = btn0U; // Встановлюємо, що Юзер вибрав "0"
    UserEnemy = btnXU; // Протилежна кнопка буде "Х"

});

cells.forEach(cell => {
    cell.addEventListener('click', () => {
        // Перевірка, чи клітинка порожня, перш ніж робити хід
        if (cell.textContent === '') {
            // Перевірка, чи User обрав "Х" і не перевищив ліміт ходів
            if (User === btnXU && countStepU < 5) {
                userX.style.display = 'inline';
                user0.style.display = 'none';
                cell.textContent = 'X';
                countStepU++;
                User = btn0U;
                UserEnemy = btnXU;
                updateTurnMessage();
                if (checkWinnerX()) {
                    return;
                }
                if (draw()) {
                    setTimeout(() => {
                       alert('Нічія!');
                    }, 300);
                    return;
                }
            }
            // Перевірка, чи User обрав "0" і не перевищив ліміт ходів
            else if (User === btn0U && countStepUE < 5) {
                user0.style.display = 'inline';
                userX.style.display = 'none';
                cell.textContent = 'O';
                countStepUE++;
                User = btnXU;
                UserEnemy = btn0U;
                updateTurnMessage();
                if (checkWinnerO()) {
                    return;
                }
                if (draw()) {
                    setTimeout(() => {
                       alert('Нічія!');
                    }, 300);
                    return;
                }
            }
        }
    })
});

function updateTurnMessage() {
    if (User === btnXU) {
        userX.style.display = 'inline';
        user0.style.display = 'none';
    } else {
        user0.style.display = 'inline';
        userX.style.display = 'none';
    }
}

