// Funções de abertura e fechamento do modal
function openModal() {
    document.getElementById('modal').classList.add('active');
    document.getElementById('overlay').classList.add('active');
}

function closeModal() {
    document.getElementById('modal').classList.remove('active');
    document.getElementById('overlay').classList.remove('active');
}

// Função para registrar usuário
function registerUser() {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const cpf = document.getElementById('cpf').value;
    const password = document.getElementById('password').value;

    const user = {
        name,
        email,
        phone,
        cpf,
        password
    };

    localStorage.setItem('user', JSON.stringify(user));
    alert('Seu cadastro foi realizado!');
    closeModal();
    window.location.href = 'perfil.html'; // Redireciona para a página de perfil
}
