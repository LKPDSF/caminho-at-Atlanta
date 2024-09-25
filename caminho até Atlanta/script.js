const avanca = document.query ('.btn-proximo');
avanca.forEach (button => {
    button.addEventlistener ('click' , function () {
    const atual = document.querySelector ('.ativo');
    const proximoPasso = 'passo-'+ this.getAttribute ('data-proximo');
    atual.classList.remove ('ativo');
    document.getElementByid (proximoPasso).classiList.add ('ativo');
    })
})