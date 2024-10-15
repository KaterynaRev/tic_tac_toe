function draw() {
    let block = document.querySelectorAll(".app_block");
    for (let i = 0; i < block.length; i++) {
        if (block[i].textContent !== 'X' && block[i].textContent !== 'O') {
            return false; // Якщо хоча б одна клітинка порожня, то не є нічия
        }
    }
    return true;
}

export default draw;