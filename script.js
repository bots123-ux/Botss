document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const username = document.getElementById('username').value.trim().toUpperCase();
    
    if(username === 'ANGELA') {
        // Change background
        document.body.style.backgroundImage = 'url("https://c.tenor.com/LRDMe1QpqFYAAAAC/cat-cute.gif")';
        
        // Show success message
        document.getElementById('loginContainer').classList.add('hidden');
        document.getElementById('successMessage').classList.remove('hidden');
    } else {
        document.getElementById('error-message').textContent = 'Error: Please enter the correct name, Bahala ka jan.';
    }
});

// Exit Button Handler
document.getElementById('exitButton').addEventListener('click', function() {
    document.getElementById('kissModal').classList.remove('hidden');
});

// Close Modal Handlers
document.querySelector('.close').addEventListener('click', function() {
    document.getElementById('kissModal').classList.add('hidden');
});

document.getElementById('kissModal').addEventListener('click', function(e) {
    if(e.target === this) {
        this.classList.add('hidden');
    }
});