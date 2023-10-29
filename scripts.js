const result = document.querySelector('.result')
const humanScore = document.querySelector('#human-score')
const machineScore = document.querySelector('#machine-score')

let humanScoreNumber = 0
let machineScoreNumber = 0


const playHuman = (humanChoice) => {

    playTheGame(humanChoice, playMachine())
    // console.log(humanChoice)

    // console.log(playMachine())
}

const playMachine = (machineChoice) => {
    const choices = ['👊', '🖐️', '✌️']
    const randomNumber = Math.floor(Math.random() * 3)

    return choices[randomNumber]

}

const playTheGame = (human, machine) => {
    const machineChoiceElement = document.querySelector('#choiceMachine');
    const choices = ['👊', '🖐️', '✌️'];

    const machineChoice = playMachine(); // Determine a escolha da máquina

    // Atualize o elemento HTML com a escolha da máquina
    machineChoiceElement.textContent = machineChoice;

    if (human === machineChoice) {
        result.innerHTML = 'DraW! (empate)';
    } else if (
        (human === '🖐️' && machineChoice === '👊') ||
        (human === '👊' && machineChoice === '✌️') ||
        (human === '✌️' && machineChoice === '🖐️')
    ) {
        humanScoreNumber++;
        humanScore.innerHTML = humanScoreNumber;
        result.innerHTML = 'You Win!';
    } else {
        machineScoreNumber++;
        machineScore.innerHTML = machineScoreNumber;
        result.innerHTML = 'You lose!';
    }
}
