function checkWinnerX() {
    let block = document.querySelectorAll(".app_block");
    let items = [];
    for (let i = 0; i < block.length; i++) {
        items.push(block[i].innerHTML);
    }
    if ((items[0] === 'X' && items[1] === 'X' && items[2] === 'X') ||
        (items[3] === 'X' && items[4] === 'X' && items[5] === 'X') ||
        (items[6] === 'X' && items[7] === 'X' && items[8] === 'X') ||
        (items[0] === 'X' && items[3] === 'X' && items[6] === 'X') ||
        (items[1] === 'X' && items[4] === 'X' && items[7] === 'X') ||
        (items[2] === 'X' && items[5] === 'X' && items[8] === 'X') ||
        (items[0] === 'X' && items[4] === 'X' && items[8] === 'X') ||
        (items[2] === 'X' && items[4] === 'X' && items[6] === 'X')) {
        setTimeout(() => {            
            winX.style.display = 'inline';
            winX.style.backgroundColor = '#e1eca1';
            block.forEach(cell => {
                if (cell.innerHTML === 'X') {
                    cell.classList.add('winner-cell'); 
                }
            });
        }, 300);
        return true;
    } else {
        return false;
    }
}
export default checkWinnerX;