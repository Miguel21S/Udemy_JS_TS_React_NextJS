
function crearcalculadora(){

    return {
        display: document.querySelector('.display'),
        btnClear: document.querySelector('.btn-clear'),

        iniciar(){
            this.clickBoton();
            this.precionaEnter();
        },

        
        clearDisplay(){
            this.display.value = '';
        },
        
        apagaUm(){
            this.display.value = this.display.value.slice(0, -1);
        },
        
        realizaConta(){
            let conta = this.display.value;
            
            try {
                conta = eval(conta);
                
                if(!conta){
                    alert('Conta invalida');
                    return;
                }
                
                this.display.value = String(conta);
            } catch (error) {
                alert('Conta invalida');
                return;
            }
        },
        
        precionaEnter(){
            this.display.addEventListener('keyup', e => {
                if(e.keyCode === 13){
                    this.realizaConta();
                }
            })
        },
        
        clickBoton(){
            document.addEventListener('click', (e) => {
                const el = e.target;

                if(el.classList.contains('btn-num')){
                    this.btnParaBotonDisplay(el.innerText);
                }

                if(el.classList.contains('btn-clear')){
                    this.clearDisplay();
                }

                if(el.classList.contains('btn-del')){
                    this.apagaUm();
                }

                if(el.classList.contains('btn-eq')){
                    this.realizaConta();
                }
            }/*.bind(this) solo si es function(e){...}*/);
        },

        btnParaBotonDisplay(valor){
            this.display.value += valor;
        }

    }
}

const calcualdora = crearcalculadora();
calcualdora.iniciar();