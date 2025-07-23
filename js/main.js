const screen = document.querySelector('#screen');
const buttons = document.querySelectorAll('button');

buttons.forEach(button => {
    button.addEventListener('click', () => {
        const value = button.getAttribute('data-value');

        if (value === '=') {
            try {
                const result = eval(
                    screen.value.replace(/÷/g, '/').replace(/×/g, '*')
                );
                screen.value = result;
            } catch (error) {
                screen.value = 'Error';
            }
        }
        else if (value === 'c') {
            screen.value = '';
        }
        else {
            screen.value += value;
        }
    })
});