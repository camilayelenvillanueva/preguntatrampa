const btnNo = document.getElementById('btnNo');
const btnYes = document.getElementById('btnYes');
const toast = document.getElementById('toast');
const toastMessage = document.getElementById('toastMessage');

let intentos = 0;

btnNo.addEventListener('mouseover', () => {
    const randomX = Math.random() * (window.innerWidth - btnNo.clientWidth);
    const randomY = Math.random() * (window.innerHeight - btnNo.clientHeight);
    
    btnNo.style.left = `${randomX}px`;
    btnNo.style.top = `${randomY}px`;

    intentos++;

    switch (intentos) {
        case 2:
            showToast('¡Ups! ¡Casi me capturas! 😅');
            break;
        case 3:
            showToast('¡Te dije que no insistas! 🤪');
            break;
        case 4:
            showToast('¡Esto parece persecución! 😜');
            break;
        default:
            if (intentos > 4) showToast('¡No puedes con mis habilidades ninja! 🥷');
    }
});


document.getElementById('btnYes').addEventListener('click', () => {
    showToast('¡Al fin! Sabía que caerías 😂');
    
    for (let i = 1; i <= 16; i++) {
        let confetti = document.getElementById(`confetti-${i}`);
        
        const colors = ['red', 'green', 'blue', 'yellow', 'pink', 'orange'];
        confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];

        confetti.style.left = Math.random() * window.innerWidth + 'px';
        confetti.style.top = Math.random() * -10 + 'px'; 
        confetti.style.display = 'block'; 


        setTimeout(() => {
            confetti.style.display = 'none';
            
            if (i === 16) {
                toast.classList.remove('show');
            }
        }, 5000); 
    }
});


function showToast(message) {
    toastMessage.textContent = message;
    toast.classList.add('show');

    setTimeout(() => {
        toast.classList.remove('show');
    }, 5000); 
}

