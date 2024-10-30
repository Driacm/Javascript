function EdediaOuEdenoite (hora) {
     
        let periodo = '';
        if (hora <= 18)
          periodo = 'É de dia';
        else
          periodo = 'É de noite';

        return periodo
    }

    
    console.log (EdediaOuEdenoite());

    console.log (EdediaOuEdenoite(11));

    function EMaiordeIdade (idade) {
        if (idade<18)
           console.log ('É menor de idade')
        else
           console.log ('É maior de idade')
    }

    EMaiordeIdade (18);
    EMaiordeIdade (16);

    console.log ('----------------------------');

    function PeriododoDia (hora) {
        if (hora < 12)
            console.log ('Manhã');
        else if (hora>=12 && hora<=18)
            console.log ('Tarde');
        else
            console.log ('Noite');
    }

    PeriododoDia (2);
    PeriododoDia (14);
    PeriododoDia (20);

    function PeriodocomRegra (hora) {
        if (hora >=0 && hora<= 24)
            PeriododoDia (hora);
        else
        console.log ('Você passou uma hora inexistente')
    }

    console.log('-----------------')

    PeriodocomRegra(3);
    PeriodocomRegra(17);
    PeriodocomRegra(21);
    PeriodocomRegra(-30);
    PeriodocomRegra(42);

    function menuEscolha (opcaodomenu){
        switch (opcaodomenu) {
            case 1:
            console.log ('Você escolheu a primeira opção');
            break;
            
            case 2:
            console.log ('Você escolheu a segunda opção');
            break;

            
            default:
            console.log ('Você não escolheu uma das opções válidas');
        }
    }

    console.log ('-------------------------');

    menuEscolha (1)
    menuEscolha (2)
    menuEscolha (3)

    console.log ('---------------------------');

    function MaiordeIdadeSimples (idade) {
        let condicaoIdade = idade >= 18 ? 'Maior Idade': 'Menor Idade'
        return condicaoIdade;
    }

    console.log (MaiordeIdadeSimples(18))
    console.log (MaiordeIdadeSimples(3))
    console.log ('---------------------------')

    function MaiordeIdadeUnario (idade){
        return idade >= 18 && 'Maior de Idade'
    }
    console.log(MaiordeIdadeUnario(18))
    console.log(MaiordeIdadeUnario(3))

    function MaiordeIdadeCondicao(idade){
        return idade >= 18 
    }

    
    console.log(MaiordeIdadeCondicao(18))
    console.log(MaiordeIdadeCondicao(3))



