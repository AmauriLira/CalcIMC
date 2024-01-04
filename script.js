// script.js
function calcIMC() {
    const resultado = document.querySelector('#resultado');
    const altura = document.querySelector('#altura');
    const peso = document.querySelector('#peso');

    if (altura.value !== '' && peso.value !== '') {
        const imc = (peso.value / ((altura.value / 100) * (altura.value / 100))).toFixed(2);
        let classification = '';

        if (imc < 18.5) {
            classification = 'Abaixo do peso';
        } else if (imc < 25) {
            classification = 'Peso normal';
        } else if (imc < 30) {
            classification = 'Acima do peso';
        } else if (imc < 35) {
            classification = 'Obesidade Grau 1';
        } else if (imc < 41) {
            classification = 'Obesidade Grau 2';
        } else {
            classification = 'Obesidade Grau 3';
        }

        resultado.innerHTML = `IMC ${imc} (${classification})`;
    } else {
        resultado.innerHTML = 'Preencha os Campos';
    }
}
