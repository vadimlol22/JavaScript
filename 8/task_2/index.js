// Ваша задача написать игру угадай число. 
// Пользовательский ввод реализовать через promt() отображение подсказок через alert()



const btn = document.querySelector('button')
const randomNumber = Math.floor(Math.random() * 100)
console.log(randomNumber)


const topGame = () => {

    let userNumber = +prompt('Угадайте число заданное компутером от 1 до 100', '')

        if(isNaN(userNumber)) {
            alert('Введите корректное число');
            return topGame()
        }

        if(userNumber > randomNumber) {
            alert('Введенное число больше заданного')
            return topGame()
        }

        if(userNumber < randomNumber) {
            alert('Введенное число меньше заданного')
            return topGame()
        }

        if(userNumber === randomNumber) {
            document.body.style.backgroundColor = "green";
            alert('You win this game!!!')
        }

}

btn.addEventListener('click', () => topGame())






/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////






const btn = document.querySelector('button')
    const randomNumber = Math.floor(Math.random() * 100)
    console.log(randomNumber)

    const players = []

    const topGame2 = () => {

    
    const HowMuchPlayers = +prompt('Сколько пользователей будет играть ?', '')

    for(let i = 0; i < HowMuchPlayers; i++) {
        const namePlayer = prompt(`Введите имя ${[i+1]}-го игрока`, '')

        players.push(namePlayer)
    }   

    game()
}

    const game = () => {
        let q = 0;


        while(q < players.length) {

            const playerNumber = +prompt(`Игрок ${players[q]} угадай число от 1 до 100`, '')

            if(isNaN(playerNumber)) {
                alert(`${players[q]} введите корректное число`);
            }

            if(playerNumber > randomNumber) {
                alert('Введенное число больше заданного')
                q++;
            }

            if(playerNumber < randomNumber) {
                alert('Введенное число меньше заданного')
                q++;
            }

            if(playerNumber === randomNumber) {
                document.body.style.backgroundColor = "green";
                alert(`Игрок ${players[q]} победил!!!`)
                break;
            }

            if( q === players.length) {
                q = 0
            }
        }
    }
    

btn.addEventListener('click', () => topGame2())


