const translations = {
    en: {
        tituloCadastro: 'Create an account',
        labelNome: 'Name',
        labelEmailCadastro: 'Email address',
        labelSenhaCadastro: 'Password',
        botaoCadastro: 'Sign up',
        nameCadastro: 'Your name',
        emailCadastro: 'Your email',
        passwordCadastro: 'Your password'
    },

    pt: {
        tituloCadastro: 'Crie uma conta',
        labelNome: 'Nome',
        labelEmailCadastro: 'Email',
        labelSenhaCadastro: 'Senha',
        botaoCadastro: 'Cadastrar-se',
        nameCadastro: 'Seu nome',
        emailCadastro: 'Seu email',
        passwordCadastro: 'Sua senha'
    }
}

function changeLang(lang) {
    localStorage.setItem('preferredLanguage', lang);

    const translation = translations[lang];
    document.querySelector('#tituloCadastro').textContent = translation.tituloCadastro;
    document.querySelector('#labelNome').textContent = translation.labelNome;
    document.querySelector('#labelEmailCadastro').textContent = translation.labelEmailCadastro;
    document.querySelector('#labelSenhaCadastro').textContent = translation.labelSenhaCadastro;
    document.querySelector('#botaoCadastro').textContent = translation.botaoCadastro;
    document.querySelector('#nameCadastro').placeholder = translation.nameCadastro;
    document.querySelector('#emailCadastro').placeholder = translation.emailCadastro;
    document.querySelector('#passwordCadastro').placeholder = translation.passwordCadastro;
}

function loadPreferredLanguage() {
    const preferredLanguage = localStorage.getItem('preferredLanguage') || 'en';
    changeLang(preferredLanguage);
}

document.addEventListener('DOMContentLoaded', loadPreferredLanguage);