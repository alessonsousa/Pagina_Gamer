
var nome = '';
var email = '';
var sobre = '';

function clique(){
    nome = document.getElementById('nome').value
    email = document.getElementById('email').value
    sobre = document.getElementById('sobre').value
    
    if(nome != '' && email != '' && sobre != ''){
    alert('Cadastro concluido com sucesso!! ' + nome)
    }else{
        alert('Cadastro não concluido, Algum campo não preenchido')
       
    }
}