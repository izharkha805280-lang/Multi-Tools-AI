// script.js - Error Handling + Dark Mode

// --- PART 1: Error Toast System ---
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


// --- PART 2: Dark Mode Logic ---

// Hum check karenge ki kya button exist karta hai?
const toggleBtn = document.getElementById("theme-toggle");

if (toggleBtn) {
    // 1. Check Local Storage on Load
    if (localStorage.getItem("theme") === "dark") {
        document.body.classList.add("dark-theme");
        toggleBtn.innerText = "☀️";
    }

    // 2. Toggle Function
    toggleBtn.onclick = function() {
        document.body.classList.toggle("dark-theme");
        
        if (document.body.classList.contains("dark-theme")) {
            toggleBtn.innerText = "☀️";
            localStorage.setItem("theme", "dark");
        } else {
            toggleBtn.innerText = "🌙";
            localStorage.setItem("theme", "light");
        }
    }
} else {
    console.log("Theme Toggle Button not found on this page.");
}
// --- Cookie Consent Logic ---
document.addEventListener("DOMContentLoaded", function() {
    // Check karo agar user ne pehle accept kiya hai ya nahi
    if (!localStorage.getItem("cookieAccepted")) {
        
        // Agar nahi kiya, to Banner banao
        let banner = document.createElement("div");
        banner.id = "cookie-banner";
        banner.innerHTML = `
            <p>🍪 We use cookies to ensure you get the best experience on our website.</p>
            <button id="accept-cookie">Got it!</button>
        `;
        document.body.appendChild(banner);

        // Animation se upar lao
        setTimeout(() => {
            banner.style.bottom = "0";
        }, 1000);

        // Button dabane par kya hoga
        document.getElementById("accept-cookie").onclick = function() {
            localStorage.setItem("cookieAccepted", "true"); // Yaad kar lo
            banner.style.bottom = "-100px"; // Wapas chhupa do
        };
    }
});
