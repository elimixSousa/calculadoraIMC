const form = document.getElementById('form');

form.addEventListener('submit', function(event) {
    event.preventDefault();

    const weight = document.getElementById('weight').value;
    const height = document.getElementById('height').value;

    const bmi = (weight / (height * height)).toFixed(2);

    const value = document.getElementById('value');
    let description = ' ';

    document.getElementById('infos').classList.remove('hidden');

    if (bmi < 18.5){
        description = 'Você está abaixo do peso ideal!';
    } else if (bmi >= 18.5 && bmi <= 24.9){
        description = 'Você está no peso ideal!';
    } else if (bmi >= 25 && bmi <= 29.9){
        description = 'Cuidado! Você está com sobrepeso!';
    } else if (bmi >= 30 && bmi <= 34.9){
        description = 'Cuidado! Você está com obesidade moderada! (Obesidade grau I)';
    } else if (bmi >= 35 && bmi <= 39.9){
        description = 'Cuidado! Você está com obesidade severa! (Obesidade grau II)';
    } else {
        description = 'Cuidado! Você está com obesidade morbida! (Obesidade grau III)' ;
    }

    value.textContent = bmi.replace('.', ',');

    document.getElementById('description').textContent = description;
});
