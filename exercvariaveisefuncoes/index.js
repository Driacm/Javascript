const Soma = (Num1,Num2) => Num1 + Num2;
const Subtrai = (Num1,Num2) => Num1 - Num2;
const Multiplica = (Num1,Num2) => Num1 * Num2;
const Divide = (Num1,Num2) => Num1 / Num2;

const MostraResultado = (Num1,Num2) => {
    console.log (`Soma entre ${Num1} e ${Num2}`, Soma (Num1,Num2));
    console.log (`Diferença entre ${Num1} e ${Num2}`, Subtrai (Num1,Num2));
    console.log (`Produto entre ${Num1} e ${Num2}`, Multiplica (Num1,Num2));
    console.log (`Quociente entre ${Num1} e ${Num2}`, Divide (Num1,Num2));
}

MostraResultado (10,2)