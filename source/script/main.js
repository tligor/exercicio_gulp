let login = document.getElementById('login');

login.addEventListener('click', function(){
    let verificaUsuario = document.getElementById('mail').value;
    let verificaSenha = document.getElementById('pass').value;
    
    if(verificaUsuario == '' || verificaSenha == ''){
        return console.log('E no principio Deus criou os céus e a terra!')
    }else if(verificaUsuario == 'teste@teste.com.br' && verificaSenha == 'testedasilva'){
        alert('Login efetuado com sucesso!');
    } else{
        alert('Você errou a senha, verifique a senha abaixo e insira corretamente.')
    }
});