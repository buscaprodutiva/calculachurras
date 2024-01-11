function calcularCarne() {
    // Obter o número de pessoas do input
    var numPessoas = document.getElementById('numPessoas').value;

    // Validar se o número de pessoas é um número positivo
    if (isNaN(numPessoas) || numPessoas <= 0) {
        alert('Por favor, insira um número válido de pessoas.');
        return;
    }

    // Obter as opções selecionadas de carne
    var opcoesCarne = document.querySelectorAll('input[type=checkbox]:checked');
    
    // Validar se pelo menos um tipo de carne foi selecionado
    if (opcoesCarne.length === 0) {
        alert('Selecione pelo menos um tipo de carne.');
        return;
    }

    // Calcular a quantidade estimada de carne para cada tipo selecionado (ajuste conforme necessário)
    var resultado = `Para ${numPessoas} pessoas, você precisará de:\n`;

    opcoesCarne.forEach(function(opcao) {
        var quantidadeCarne = numPessoas * obterFatorCarne(opcao.value);
        resultado += `${quantidadeCarne}g de ${opcao.value}\n`;
    });

    // Exibir o resultado na div 'resultado'
    document.getElementById('resultado').innerText = resultado;
}

function obterFatorCarne(tipoCarne) {
    // Ajuste os fatores conforme necessário
    var fatores = {
        'Carne Bovina': 300,
        'Carne Suína': 250,
        'Pão de Alho': 150,
        'Drumet': 200,
        'Coração de Galinha': 180
    };

    return fatores[tipoCarne] || 0;
}
