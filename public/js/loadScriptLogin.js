const translations = {
    en: {
        tituloLogin: 'Sign in to your account',
        labelEmail: 'Email address',
        labelSenha: 'Password',
        esqueceuSenha: 'Forgot password?',
        botaoLogin: 'Sign in',
        naoTemConta: "Don't have an account?",
        linkCadastro: 'Sign up.',
        email: 'Your email',
        password: 'Your password'
    },

    pt: {
        tituloLogin: 'Entre com sua conta',
        labelEmail: 'Email',
        labelSenha: 'Senha',
        esqueceuSenha: 'Esqueceu sua senha?',
        botaoLogin: 'Entrar',
        naoTemConta: "Não tem uma conta?",
        linkCadastro: 'Cadastre-se.',
        email: 'Seu email',
        password: 'Sua senha'
    }
}

function changeLang(lang) {
    localStorage.setItem('preferredLanguage', lang);

    const translation = translations[lang];
    document.querySelector('#tituloLogin').textContent = translation.tituloLogin;
    document.querySelector('#labelEmail').textContent = translation.labelEmail;
    document.querySelector('#labelSenha').textContent = translation.labelSenha;
    document.querySelector('#esqueceuSenha').textContent = translation.esqueceuSenha;
    document.querySelector('#botaoLogin').textContent = translation.botaoLogin;
    document.querySelector('#naoTemConta').textContent = translation.naoTemConta;
    document.querySelector('#linkCadastro').textContent = translation.linkCadastro;
    document.querySelector('#email').placeholder = translation.email;
    document.querySelector('#password').placeholder = translation.password;
}

function loadPreferredLanguage() {
    const preferredLanguage = localStorage.getItem('preferredLanguage') || 'en';
    changeLang(preferredLanguage);
}

document.addEventListener('DOMContentLoaded', loadPreferredLanguage);