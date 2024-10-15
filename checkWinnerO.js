function checkWinnerO() {
    let block = document.querySelectorAll(".app_block");
    let items = [];
    for (let i = 0; i < block.length; i++) {
        items.push(block[i].innerHTML);
    }
    if ((items[0] === 'O' && items[1] === 'O' && items[2] === 'O') ||
        (items[3] === 'O' && items[4] === 'O' && items[5] === 'O') ||
        (items[6] === 'O' && items[7] === 'O' && items[8] === 'O') ||
        (items[0] === 'O' && items[3] === 'O' && items[6] === 'O') ||
        (items[1] === 'O' && items[4] === 'O' && items[7] === 'O') ||
        (items[2] === 'O' && items[5] === 'O' && items[8] === 'O') ||
        (items[0] === 'O' && items[4] === 'O' && items[8] === 'O') ||
        (items[2] === 'O' && items[4] === 'O' && items[6] === 'O')) {
        setTimeout(() => {
            winO.style.display = 'inline';
            winO.style.backgroundColor = '#e1eca1';
            block.forEach(cell => {
                if (cell.innerHTML === 'O') {
                    cell.classList.add('winner-cell'); // Додати клас для переможеної ячейки
                }
            });
        }, 300);
        return true;
    } else {
        return false;
    }
}

export default checkWinnerO;