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
// --- Dark Mode Logic ---

const toggleBtn = document.getElementById("theme-toggle");

// 1. Check Local Storage on Load (Refresh karne par yaad rakhe)
if (localStorage.getItem("theme") === "dark") {
    document.body.classList.add("dark-theme");
    toggleBtn.innerText = "☀️"; // Agar dark hai to Sun dikhaye
}

// 2. Toggle Function
toggleBtn.onclick = function() {
    document.body.classList.toggle("dark-theme");
    
    if (document.body.classList.contains("dark-theme")) {
        toggleBtn.innerText = "☀️"; // Switch to Sun icon
        localStorage.setItem("theme", "dark"); // Save setting
    } else {
        toggleBtn.innerText = "🌙"; // Switch to Moon icon
        localStorage.setItem("theme", "light"); // Save setting
    }
}
