import { getRandomInt } from "./utils";
let squares: NodeList;
let message: HTMLElement;


export function runApp() {
    let secretSquareId: number;
    const promise = fetch('http://localhost:3000/game');
    promise.then((response) => {
        response.json().then(x => {
            secretSquareId = x.secret;
            setup();
        })
    })

    function setup() {
        squares = document.querySelectorAll('.square');
        console.log(secretSquareId + 1);
        message = document.getElementById('message');
        message.innerText = "Play the Game!"

        squares.forEach((sqaure, index) => {
            const that = sqaure as HTMLElement;
            that.classList.remove('winner', 'loser');
            that.classList.remove('data-secret');
            if (index + 1 === secretSquareId) {
                that.dataset.secret = "true";
            }
            else {
                //that.dataset.secret = "false"
            }
            sqaure.addEventListener('click', handleClick)
        })
    }


    function handleClick(evt) {
        const that = this as HTMLElement;
        if (that.dataset.secret === "true") {
            that.classList.add('winner');
            message.innerText = 'You Win!(Click here to play again)';
            message.addEventListener('click', runApp);
            squares.forEach((square: HTMLElement) => {
                if (square.classList.value === "square") {
                    square.classList.remove('loser');
                    square.classList.add('loser');
                }
                square.removeEventListener('click', handleClick);
            })
        } else {
            that.classList.add('loser');
            that.removeEventListener('click', handleClick);
        }
    }
}