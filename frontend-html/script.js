let y = 0;
let x = 0;
const box = document.getElementById('box');

function moveAndChangeColor(direction) {
    move(direction);
    getRandomColor();
}

function move(direction) {
    switch (direction) {
        case 'up':
            y -= 10;
            break;
        case 'down':
            y += 10;
            break;
        case 'left':
            x -= 10;
            break;
        case 'right':
            x += 10;
            break;

        
    }
    box.style.top = y + 'px';
    box.style.left = x + 'px';
}

document.addEventListener('keydown', function (event) {
    const keyName = event.key;

    switch (keyName) {
        case 'ArrowUp':
        case 'w':
            y -= 10;
            break;
        case 'ArrowDown':
        case 's':
            y += 10;
            break;
        case 'ArrowLeft':
        case 'a':
            x -= 10;
            break;
        case 'ArrowRight':
        case 'd':
            x += 10;
            break;
    }

    box.style.top = y + 'px';
    box.style.left = x + 'px';
    getRandomColor();
});



function getRandomColor() {
    // Change the color of the box (you can set any color you like)
    box.style.backgroundColor = generateRandomColor();
}

function generateRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}
