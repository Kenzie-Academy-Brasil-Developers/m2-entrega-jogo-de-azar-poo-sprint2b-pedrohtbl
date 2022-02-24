import {SlotController} from "../controller/SlotController.js"

class Interface {
    static arr = []
    static ul  = document.querySelector('ul')
    static p   = document.querySelector('p')
    static jogar = document.getElementById('jogar')

    static capturaClick(event){
        const button = event.target
        let velocidade = 25
        let tempo = 5000
        if(button.className === 'jogar'){

            for(let i = 0; i<this.ul.children.length; i++){
                this.arr.push(SlotController.iniciaJogo(this.ul.children[i],tempo,velocidade))
                tempo+= 2000
                velocidade+=25
            }
            button.classList.remove('jogar')
            this.gira(this.arr)
        }else if(button.className === 'reset'){
            for(let i= 0; i<this.ul.children.length; i++){
                this.ul.children[i].innerText = 0
            }
            this.arr.splice(0)
            this.p.innerText = ''
            this.jogar.classList.add ('jogar')
        }
    }

    static gira (arr){
        arr.forEach(({li,tempoGiro,velocidade} = slot) => {
            let gira = setInterval(function(){
                li.innerText = Math.floor(Math.random()*3)
            },velocidade)
                setTimeout(function(){
                clearInterval(gira)
            },tempoGiro)
        });   
        this.vitoria()
    }

    static vitoria (){
        const arrVitoria = []
        setTimeout(function (){
            for(let i = 0; i< Interface.ul.children.length; i++){
                arrVitoria.push(Interface.ul.children[i].innerText)
            }
            if(arrVitoria[0] === arrVitoria[1] && arrVitoria[0] === arrVitoria[2]){
                Interface.p.innerText = 'Vitória!!!!!'
            }else{
                Interface.p.innerText = 'Derrota =('
            }
        },9100)
    }
}

export {Interface}