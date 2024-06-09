const menu = document.querySelector('#menu-language')
const dropdown = document.querySelector('#drop-down')

menu.addEventListener('click', () => {
    if(dropdown.classList.contains('hidden')){
        const removerEstilos = ['hidden', 'opacity-0']
        const adicionarEstilos = ['inline', 'opacity-100']

        dropdown.classList.remove(...removerEstilos)
        dropdown.classList.add(...adicionarEstilos)  
    } else{
        const removerEstilos = ['inline', 'opacity-100']
        const adicionarEstilos = ['hidden', 'opacity-0']

        dropdown.classList.remove(...removerEstilos)
        dropdown.classList.add(...adicionarEstilos)   
    }
})