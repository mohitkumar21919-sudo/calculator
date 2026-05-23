let string = "";
const input = document.querySelector('input');
const buttons = document.querySelectorAll('.button');
Array.from(buttons).forEach((button) => {
    button.addEventListener('click', (e) => {
        const val = e.target.innerText.trim();
        if (val === 'C') {
            string = '';
            input.value = '';
            return;
        }
        if (val === '=') {
            try {
                const expr = string.replace(/X/g, '*').replace(/×/g, '*').replace(/÷/g, '/').replace(/%/g, '/100').replace(/\^/g, '**');
                const result = eval(expr);
                input.value = result;
                string = String(result);
            } catch (err) {
                input.value = 'Error';
                string = '';
            }
            return;
        }
        if (val === '()') {
            string += '()';
            input.value = string;
            return;
        }
        string = string + val;
        input.value = string;
    });
});