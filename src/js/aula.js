/**
 * Number => numérico => -infinito até +infinito => -20 , 10, 4.5
 * String => letras/palavras/frases => "Victor", "a", "Eu gosto de churros"
 * Boolean => booleano
 *          0 => Falso / False / Desligado
 *          1 => Verdadeiro / True / Ligado
 * Array => Lista => [10,20,30,40, "Victor", "Churros"]
 */
/**
 * Variável => LET
 * Como declarar variável 
 *      let <nome> = <valor>;
 * Constante => Const
 * Como declarar constante
 *      const <nome> = <valor>;
 */
const nome = "Victor Augusto da Silva Lima"
//let idade = 18;

/**
 * Operadores Aritméticos
 * + => Soma
 * - => Subtração
 * * => Multiplicação
 * / => Divisão
 * = => Atribuir valores
 */
let valor1 = 10;
let valor2 = 5;

let resultadoSoma = valor1 + valor2;
let resultadoSubtracao = valor1 - valor2;

/**
 * Operadores lógicos
 * Igualdade => ==
 *      idade == 18 //true
 *      idade == 20 //false
 * Maior que => >
 *      idade > 18 //false
 *      idade > 10 //true
 * Menor que => < 
 *      idade < 18 //false
 *      idade < 20 //true
 * Maior ou Igual que =>                >=
 *      idade >= 18 //true
 *      idade >= 17 //true
 * Menor ou Igual que =>                <=
 *      idade <= 18 //true
 *      idade <= 17 //false
 * Identico => ===
 *      idade === "18" //false
 * Não Igual/diferente => !=
 *      idade != 18 //false
 * Não identico => !==
 *      idade !== "18" //true
 */

/**
 * Estrutura Condicional
 * if => se
 * else => senão
 * else if => senão se
 */
// let comprouChurros = false;
// let ehMuitoSimpatico = false;
// let dinheiro = 4;

// console.log("Pode comprar churros? " + comprouChurros)

// if (dinheiro >= 5) {
//     comprouChurros = true;
// } else if (ehMuitoSimpatico == true) {
//     console.log("Tá anotado no caderno!")
//     comprouChurros = true;
// } else {
//     console.log("Opa, tem dinheiro não meu patrão, vai fazer site!")
// }

// console.log("Pode comprar churros? " + comprouChurros)

/**
 * Estrutura de Repetição
 * for(declaracao; condicao; incremento){}
 */

let quantasVezesRepetir = 5;
// Contador = 0 => executei
// Contador = 1 => executei
// Contador = 2 => executei
// Contador = 3 => executei
// Contador = 4 => executei
// Contador = 5 => não executei

for (let contador = 0; contador < quantasVezesRepetir; contador = contador + 1) {
    console.log("Comprei Churros!")
}


/**
 * Funções
 */
 function mostrarNome(nome) {
    return "Olá, eu sou a(o) facilitadora(o) " + nome
}

const apresentacaoVictor = mostrarNome("Victor");
const apresentacaoJardel = mostrarNome("Jardel");
const apresentacaoMaria = mostrarNome("Maria");