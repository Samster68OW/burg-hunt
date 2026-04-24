// Input Handler



let spacebarPressed = false;



function keyboardInput(key) {
    switch (key) {
        case '1':
        case '2':
        case '3':
        case '4':
        case '5':
        case '6':
            swapPuffle(Number(key - 1));
            break;
        case 'q':
            toggleMiddlePage();
            break;
        case 'w':
            toggleRightPage();
            break;
        case 'm':
            toggleMusic();
            break;
        case ' ':
            if (spacebarPressed === false) {
                spacebarPressed = true;
                clickCoin('player');
            }
            break;
    };
};
function keyboardOutput(key) {
    switch (key) {
        case ' ':
            spacebarPressed = false;
            break;
    };
};