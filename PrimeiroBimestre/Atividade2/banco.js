const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let nome = "Luiz";
let agencia = "1234";
let conta = "56789-0";
let saldo = 1000;

function menu() {

    console.log("\n===== BANCO DIGITAL =====");
    console.log("1 - Consultar dados da conta");
    console.log("2 - Consultar saldo");
    console.log("3 - Realizar débito");
    console.log("4 - Realizar crédito");
    console.log("0 - Sair");

    rl.question("Escolha uma opção: ", function(opcao) {

        if (opcao == "1") {

            console.log("\n===== DADOS DA CONTA =====");
            console.log("Nome: " + nome);
            console.log("Agência: " + agencia);
            console.log("Conta: " + conta);

            menu();

        } else if (opcao == "2") {

            console.log("\nSaldo atual: " + saldo.toLocaleString("pt-BR", {
                style: "currency",
                currency: "BRL"
            }));

            menu();

        } else if (opcao == "3") {

            rl.question("Digite o valor do débito: R$ ", function(valor) {

                valor = Number(valor);

                if (valor <= 0) {

                    console.log("Digite um valor válido.");

                } else if (valor > saldo) {

                    console.log("Saldo insuficiente.");

                } else {

                    saldo = saldo - valor;

                    console.log("Débito realizado com sucesso!");

                    console.log("Saldo atual: " + saldo.toLocaleString("pt-BR", {
                        style: "currency",
                        currency: "BRL"
                    }));
                }

                menu();
            });

        } else if (opcao == "4") {

            rl.question("Digite o valor do crédito: R$ ", function(valor) {

                valor = Number(valor);

                if (valor <= 0) {

                    console.log("Digite um valor válido.");

                } else {

                    saldo = saldo + valor;

                    console.log("Crédito realizado com sucesso!");

                    console.log("Saldo atual: " + saldo.toLocaleString("pt-BR", {
                        style: "currency",
                        currency: "BRL"
                    }));
                }

                menu();
            });

        } else if (opcao == "0") {

            console.log("\nObrigado por utilizar o Banco Digital!");
            rl.close();

        } else {

            console.log("\nOpção inválida!");
            menu();
        }
    });
}

menu();