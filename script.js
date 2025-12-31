// script.js - Error Handling System

// HTML mein Toast Box Container banata hai
let toastBox = document.createElement('div');
toastBox.id = 'toast-box';
document.body.appendChild(toastBox);

function showToast(msg, type) {
    let toast = document.createElement('div');
    toast.classList.add('toast');
    toast.classList.add(type); // 'error' or 'success'
    
    // Icons based on type
    let icon = type === 'error' ? '❌' : '✅';
    
    toast.innerHTML = `<i>${icon}</i> ${msg}`;
    toastBox.appendChild(toast);

    // 4 seconds baad gayab ho jaye
    setTimeout(() => {
        toast.remove();
    }, 4000);
}

// Shortcut Functions
function showError(msg) {
    showToast(msg, 'error');
}

function showSuccess(msg) {
    showToast(msg, 'success');
}
