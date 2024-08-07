const avanca =document.querySelector('.btn-proximo')
avanca. forEach(button=>{ button.addEvenListener('click', function(){
    const atual = document.querySelector ('.ativo');
    const proximo = 'passo-' + this.getAttribute('data proximo');

    atual.classList.remove('ativo')
    document.getElementById(proximo).classlist.add('ativo');
})})
    
