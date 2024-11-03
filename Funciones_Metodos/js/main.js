
function funCalculadora() {
    this.display = document.querySelector('.display');
    // this.btnClear = document.querySelector('.btnClear');

    this.iniciar = () => {
        this.clicBoton();
        this.precionaEnter();
    };

    this.clearDisplay = () => this.display.value = '';

    this.apagarUnElemento = () => this.display.value = this.display.value.slice(0, -1);

    this.contaIgual = () => {
        try {
            let conta = eval(this.display.value);

            if (!conta) {
                alert('Conta invalida');
                return;
            }

            this.display.value = String(conta);
        } catch (e) {
            alert('Conta invalida');
            return;
        }
    }

    this.precionaEnter = () => {
       this.display.addEventListener('keyup', e => {
            if (e.keyCode === 13) {
                this.contaIgual();
            }
        })
    }

    this.clicBoton = () => {
        document.addEventListener('click', e => {
            const elemento = e.target;

            if (elemento.classList.contains('btn-num'))  this.btnParaBotonDisplay(elemento);

            if (elemento.classList.contains('btn-clear')) this.clearDisplay();

            if (elemento.classList.contains('btn-del')) this.apagarUnElemento();

            if (elemento.classList.contains('btn-eq')) this.contaIgual();
        })
    };

    this.btnParaBotonDisplay = valor =>  {
        this.display.value += valor.innerText;
        this.display.focus();
    }
}

const calculadora = new funCalculadora();
calculadora.iniciar();