import readline from 'readline';
import chalk from 'chalk';

// Configura o terminal para entrada e saída
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Função principal do jogo
function playGame() {
    // O computador escolhe aleatoriamente quantos palitos esconderá (0 a 3)
    const computerSticks = Math.floor(Math.random() * 4);

    // Solicita ao jogador quantos palitos ele vai esconder
    rl.question('Quantos palitos você vai esconder (0 a 3)? ', (userSticks) => {
        // Verifica se o número inserido é válido
        if (userSticks < 0 || userSticks > 3 || isNaN(userSticks)) {
            console.log('Número inválido. Escolha um valor entre 0 e 3.');
            rl.close();
            return;
        }

        // Converte o valor para inteiro
        userSticks = parseInt(userSticks);

        // O computador escolhe aleatoriamente um palpite (diferente do do jogador)
        let computerGuess = Math.floor(Math.random() * 4);

        // Garante que o palpite do computador seja diferente do número de palitos do jogador
        while (computerGuess === userSticks) {
            computerGuess = Math.floor(Math.random() * 4);
        }

        // Solicita ao jogador para adivinhar o número de palitos que o computador escondeu
        rl.question('Quantos palitos você acha que o computador escondeu? ', (userGuess) => {
            // Verifica se o número inserido é válido
            if (userGuess < 0 || userGuess > 3 || isNaN(userGuess)) {
                console.log('Número inválido. Escolha um valor entre 0 e 3.');
                rl.close();
                return;
            }

            // Converte o valor para inteiro
            userGuess = parseInt(userGuess);

            // Soma o número de palitos escondidos pelo jogador e pelo computador
            const totalSticks = userSticks + computerSticks;

            // Checa se o palpite do jogador ou do computador está correto
            const computerCorrect = computerGuess === totalSticks;
            const userCorrect = userGuess === totalSticks;

            // Exibe os resultados
            console.log(`Você escondeu ${userSticks} palitos e o computador escondeu ${computerSticks} palitos.`);
            console.log(`Você achou que o computador escondeu ${userGuess} palitos e o computador achou que você escondeu ${computerGuess} palitos.`);

            // Resultados finais
            if (userCorrect) {
                console.log(chalk.green('Você acertou o número total de palitos! Você ganhou!'));
            } else if (computerCorrect) {
                console.log(chalk.red('O computador acertou o número total de palitos! O computador ganhou!'));
            } else {
                console.log(chalk.black('Ninguém acertou o número total de palitos. É um empate!'));
            }

            // Fecha a interface do terminal
            rl.close();
        });
    });
}

// Inicia o jogo
playGame();
